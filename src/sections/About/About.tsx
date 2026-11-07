import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { about } from "@/data/personal";
import { Compass, Sparkles, Workflow } from "lucide-react";

const philosophyIcons = [Compass, Sparkles, Workflow];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading index="01" eyebrow="About" title="Engineer by trade, craftsman at heart" />

        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          {/* Left: intro */}
          <div>
            <Reveal>
              <h3 className="font-display text-2xl font-semibold leading-snug text-text md:text-3xl">
                {about.headline}
              </h3>
            </Reveal>
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.1}>
                <p className="mt-6 leading-relaxed text-muted">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  { label: "Based in", value: "Your City" },
                  { label: "Focus", value: "Full-stack web" },
                  { label: "Currently", value: "Open to work" },
                  { label: "Languages", value: "English, +1" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/[0.07] bg-surface/60 p-4"
                  >
                    <div className="text-xs uppercase tracking-wider text-muted">{item.label}</div>
                    <div className="mt-1 font-display text-sm font-medium text-text">{item.value}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: philosophy */}
          <div className="flex flex-col gap-4">
            {about.philosophy.map((p, i) => {
              const Icon = philosophyIcons[i % philosophyIcons.length];
              return (
                <Reveal key={p.title} delay={i * 0.12}>
                  <div className="group flex gap-5 rounded-2xl border border-white/[0.07] bg-surface/60 p-6 transition-all duration-300 hover:border-accent/25 hover:bg-surface md:p-7">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent-dim text-accent transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-semibold text-text">{p.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
