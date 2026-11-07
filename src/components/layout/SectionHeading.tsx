import { Reveal } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={cn("mb-14 md:mb-20", centered && "text-center")}>
      <Reveal>
        <div
          className={cn(
            "mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted",
            centered && "justify-center"
          )}
        >
          <span className="font-display text-accent">{index}</span>
          <span className="h-px w-8 bg-white/15" aria-hidden="true" />
          <span>{eyebrow}</span>
        </div>
      </Reveal>
      <TextReveal
        as="h2"
        text={title}
        className={cn(
          "font-display text-4xl font-semibold leading-[1.05] tracking-tight text-text sm:text-5xl md:text-6xl",
          centered && "mx-auto max-w-3xl"
        )}
      />
      {description && (
        <Reveal delay={0.15}>
          <p
            className={cn(
              "mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg",
              centered && "mx-auto"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
