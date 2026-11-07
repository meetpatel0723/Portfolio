import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { skills, skillCategories, type SkillCategory } from "@/data/skills";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Marquee } from "@/components/animations/Marquee";
import { cn } from "@/lib/utils";

const marqueeItems = [
  "React", "TypeScript", "Node.js", "Next.js", "PostgreSQL", "GraphQL",
  "Tailwind CSS", "Docker", "AWS", "Redis", "Prisma", "Python",
];

export function Skills() {
  const [active, setActive] = useState<SkillCategory | "All">("All");
  const reduce = useReducedMotion();

  const filtered = active === "All" ? skills : skills.filter((s) => s.category === active);
  const categories: (SkillCategory | "All")[] = ["All", ...skillCategories];

  return (
    <section id="skills" className="relative scroll-mt-24 py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="02"
          eyebrow="Stack"
          title="Tools I reach for every day"
          description="A curated set of technologies I've used in production — picked for reliability, performance, and developer experience."
        />

        {/* Category filter */}
        <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Skill categories">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm transition-colors duration-300",
                active === cat ? "text-bg" : "text-muted hover:text-text"
              )}
            >
              {active === cat && (
                <motion.span
                  layoutId="skill-tab"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{cat}</span>
            </button>
          ))}
        </div>

        {/* Cards */}
        <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: reduce ? 0 : 0.35,
                  delay: reduce ? 0 : i * 0.03,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-surface/60 p-6 transition-colors duration-300 hover:border-accent/25"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/[0.06] blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex items-start justify-between">
                  <h3 className="font-display text-lg font-semibold text-text transition-colors duration-300 group-hover:text-accent">
                    {skill.name}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 text-muted opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent group-hover:opacity-100" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{skill.description}</p>
                <span className="mt-4 inline-block rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] uppercase tracking-wider text-muted">
                  {skill.category}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="mt-20 border-y border-white/[0.06] py-6">
        <Marquee duration={35}>
          <div className="flex items-center gap-10 pr-10">
            {marqueeItems.map((item) => (
              <span
                key={item}
                className="flex items-center gap-10 font-display text-lg font-medium text-muted/60 transition-colors hover:text-text"
              >
                {item}
                <span className="h-1.5 w-1.5 rounded-full bg-accent/50" aria-hidden="true" />
              </span>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
