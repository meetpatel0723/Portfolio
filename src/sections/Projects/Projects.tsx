import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative scroll-mt-24 py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="04"
          eyebrow="Work"
          title="Selected projects"
          description="A few things I've designed and built — each one a lesson in trade-offs, performance, and craft."
        />

        <div className="flex flex-col gap-8 md:gap-10">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} large />
          ))}
        </div>

        {others.length > 0 && (
          <Reveal delay={0.1}>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {others.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={featured.length + i}
                />
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
