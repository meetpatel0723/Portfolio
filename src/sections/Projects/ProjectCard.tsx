import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

/**
 * Placeholder "screenshot" — an abstract browser mock rendered in pure CSS.
 * Replace with real <img> assets when available.
 */
function ProjectVisual({ project }: { project: Project }) {
  return (
    <div
      className={`relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br ${project.gradient}`}
    >
      {/* Browser chrome */}
      <div className="absolute inset-x-0 top-0 flex items-center gap-2 border-b border-white/[0.07] bg-black/30 px-4 py-3 backdrop-blur-sm">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <div className="ml-3 h-5 flex-1 rounded-md bg-white/[0.06]" />
      </div>

      {/* Abstract UI blocks */}
      <div className="absolute inset-x-8 bottom-6 top-14 grid grid-cols-3 gap-3">
        <div className="col-span-1 flex flex-col gap-3">
          <div className="h-16 rounded-lg bg-white/[0.07]" />
          <div className="h-24 rounded-lg bg-white/[0.05]" />
        </div>
        <div className="col-span-2 flex flex-col gap-3">
          <div className="grid flex-1 grid-cols-2 gap-3">
            <div className="rounded-lg bg-white/[0.06]" />
            <div className="rounded-lg bg-white/[0.09]" />
          </div>
          <div className="h-20 rounded-lg bg-white/[0.04]" />
        </div>
      </div>

      {/* Year watermark */}
      <span className="absolute bottom-3 right-5 font-display text-sm font-medium text-white/25">
        {project.year}
      </span>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  large?: boolean;
}

export function ProjectCard({ project, index, large = false }: ProjectCardProps) {
  const reduce = useReducedMotion();
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`group relative grid overflow-hidden rounded-3xl border border-white/[0.08] bg-surface/70 transition-colors duration-500 hover:border-white/[0.16] ${
        large ? "lg:grid-cols-2" : ""
      }`}
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[130%] -translate-x-1/2 rounded-full bg-accent/[0.04] blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      {/* Visual */}
      <div className={`relative overflow-hidden ${large && !isEven ? "lg:order-2" : ""}`}>
        <motion.div
          animate={reduce ? {} : { scale: 1 }}
          className="h-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        >
          <ProjectVisual project={project} />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface/60 to-transparent" />
      </div>

      {/* Content */}
      <div
        className={`relative flex flex-col justify-center p-7 md:p-10 ${
          large && !isEven ? "lg:order-1" : ""
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="font-display text-sm font-medium text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="h-px w-8 bg-white/15" />
          <span className="text-xs uppercase tracking-[0.2em] text-muted">{project.subtitle}</span>
        </div>

        <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-text md:text-4xl">
          {project.title}
        </h3>
        <p className="mt-4 leading-relaxed text-muted">
          {large ? project.longDescription : project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t} variant="default">
              {t}
            </Badge>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-all duration-300 hover:bg-lime-300"
          >
            Live Demo
            <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-text transition-all duration-300 hover:border-white/30 hover:bg-white/[0.07]"
          >
            <GithubIcon className="h-4 w-4" />
            Code
          </a>
          {large && (
            <ArrowUpRight className="ml-auto hidden h-5 w-5 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent md:block" />
          )}
        </div>
      </div>
    </motion.article>
  );
}
