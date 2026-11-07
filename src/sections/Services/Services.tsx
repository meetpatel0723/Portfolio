import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 md:py-36">
      {/* Ambient band */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="05"
          eyebrow="Expertise"
          title="What I can do for you"
          description="From a single screen to a full product — I work across the stack to ship software that lasts."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.1}>
              <div className="group flex h-full flex-col rounded-2xl border border-white/[0.07] bg-surface/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 hover:bg-surface">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-text transition-colors duration-300 group-hover:border-accent/30 group-hover:text-accent">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <span className="font-display text-xs text-muted/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold text-text">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-1.5 border-t border-white/[0.06] pt-5">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs text-muted">
                      <ArrowRight className="h-3 w-3 text-accent/70" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
