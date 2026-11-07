import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/experience";

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      // Timeline line draws as you scroll through the section
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        }
      );

      // Cards reveal with stagger
      gsap.utils.toArray<HTMLElement>("[data-exp-card]").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative scroll-mt-24 py-24 md:py-36"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="03"
          eyebrow="Career"
          title="Where I've worked"
          description="A timeline of roles where I owned features end-to-end — from first commit to production."
        />

        <div className="relative">
          {/* Timeline track */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/[0.08] md:left-1/2 md:-translate-x-1/2" />
          <div
            ref={lineRef}
            className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-accent md:left-1/2 md:-translate-x-1/2"
            style={{ transform: "scaleY(0)" }}
          />

          <div className="flex flex-col gap-12 md:gap-16">
            {experience.map((job, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={job.id}
                  data-exp-card
                  className={`relative flex pl-10 md:w-1/2 md:pl-0 ${
                    left ? "md:pr-14" : "md:ml-auto md:pl-14"
                  }`}
                >
                  {/* Node */}
                  <span
                    className={`absolute top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-bg ${
                      left
                        ? "left-0 md:-right-2 md:left-auto"
                        : "left-0 md:-left-2"
                    }`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>

                  <article className="group w-full rounded-2xl border border-white/[0.07] bg-surface/60 p-6 transition-all duration-300 hover:border-accent/25 hover:bg-surface md:p-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant={job.current ? "accent" : "default"}>
                        {job.current ? "Current" : job.period}
                      </Badge>
                      {!job.current && (
                        <span className="text-xs text-muted">{job.period}</span>
                      )}
                    </div>

                    <h3 className="mt-4 font-display text-xl font-semibold text-text md:text-2xl">
                      {job.role}
                    </h3>
                    <p className="mt-1 font-medium text-accent">
                      {job.company}
                      <span className="ml-2 text-sm font-normal text-muted">· {job.location}</span>
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{job.summary}</p>

                    <ul className="mt-4 space-y-2">
                      {job.highlights.map((h) => (
                        <li key={h} className="flex gap-2.5 text-sm text-muted">
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {job.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 text-xs text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
