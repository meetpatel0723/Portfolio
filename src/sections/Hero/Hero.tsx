import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react";
import { personal } from "@/data/personal";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { AmbientBackground } from "@/components/layout/AmbientBackground";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

function CodeCard() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotate: 2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 1, delay: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative hidden lg:block"
      aria-hidden="true"
    >
      {/* Glow */}
      <div className="absolute -inset-8 rounded-[2rem] bg-accent/[0.05] blur-3xl" />
      <motion.div
        animate={reduce ? {} : { y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-[380px] overflow-hidden rounded-2xl border border-white/10 bg-surface/80 backdrop-blur-sm shadow-2xl shadow-black/50"
      >
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-3.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-muted">developer.ts</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
          <code>
            <span className="text-[#c792ea]">const</span>{" "}
            <span className="text-[#82aaff]">developer</span>{" "}
            <span className="text-muted">=</span>{" "}
            <span className="text-[#ffcb6b]">{"{"}</span>
            {"\n"}
            {"  "}
            <span className="text-[#7fdbca]">name</span>
            <span className="text-muted">:</span>{" "}
            <span className="text-[#c3e88d]">"{personal.name}"</span>
            <span className="text-muted">,</span>
            {"\n"}
            {"  "}
            <span className="text-[#7fdbca]">role</span>
            <span className="text-muted">:</span>{" "}
            <span className="text-[#c3e88d]">"{personal.role}"</span>
            <span className="text-muted">,</span>
            {"\n"}
            {"  "}
            <span className="text-[#7fdbca]">stack</span>
            <span className="text-muted">:</span>{" "}
            <span className="text-[#c3e88d]">["React", "Node.js", "Postgres"]</span>
            <span className="text-muted">,</span>
            {"\n"}
            {"  "}
            <span className="text-[#7fdbca]">passion</span>
            <span className="text-muted">:</span>{" "}
            <span className="text-[#c3e88d]">"Crafting digital experiences"</span>
            <span className="text-muted">,</span>
            {"\n"}
            {"  "}
            <span className="text-[#7fdbca]">openToWork</span>
            <span className="text-muted">:</span>{" "}
            <span className="text-accent">true</span>
            {"\n"}
            <span className="text-[#ffcb6b]">{"}"}</span>
            <span className="text-muted">;</span>
          </code>
        </pre>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <AmbientBackground />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-16 px-5 pb-24 pt-32 md:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:pt-24">
        <motion.div variants={container} initial="hidden" animate="visible">
          {/* Availability */}
          <motion.div variants={item} className="mb-8">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent-dim px-4 py-1.5 text-xs font-medium text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {personal.availability}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="font-display text-[clamp(3.5rem,10vw,7.5rem)] font-bold leading-[0.95] tracking-tight"
          >
            {(() => {
              const [first, ...rest] = personal.name.split(" ");
              return (
                <>
                  {first}
                  {rest.length > 0 && (
                    <>
                      <br />
                      <span className="text-muted">{rest.join(" ")}</span>
                    </>
                  )}
                  <span className="text-accent">.</span>
                </>
              );
            })()}
          </motion.h1>

          {/* Role */}
          <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-4">
            <span className="h-px w-12 bg-accent" aria-hidden="true" />
            <p className="font-display text-xl font-medium text-text md:text-2xl">
              {personal.role}
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            {personal.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton strength={0.3}>
              <a
                href="#projects"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-accent px-7 font-medium text-bg transition-all duration-300 hover:bg-lime-300 hover:shadow-[0_0_40px_-8px_rgba(163,230,53,0.5)]"
              >
                Explore Projects
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </MagneticButton>
            <MagneticButton strength={0.3}>
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 font-medium text-text backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/[0.07]"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-white/[0.08] pt-8"
          >
            {personal.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-semibold text-text md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs leading-snug text-muted md:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <CodeCard />
      </div>

      {/* Bottom meta + scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute inset-x-0 bottom-0 z-10"
      >
        <div className="mx-auto flex max-w-6xl items-end justify-between px-5 pb-8 md:px-8">
          <div className="flex items-center gap-2 text-sm text-muted">
            <MapPin className="h-4 w-4 text-accent" />
            {personal.location}
          </div>
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-text"
            aria-label="Scroll to about section"
          >
            Scroll
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="h-4 w-4" />
            </motion.span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
