import { cn } from "@/lib/utils";

/**
 * Decorative background: faint grid + radial ambient glows.
 * Pure CSS — cheap to render, respects reduced motion (no animation).
 */
export function AmbientBackground({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 30%, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 30%, black 30%, transparent 75%)",
        }}
      />
      {/* Ambient glows */}
      <div className="absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[140px]" />
      <div className="absolute right-[-10%] top-1/3 h-[400px] w-[400px] rounded-full bg-indigo-500/[0.05] blur-[120px]" />
    </div>
  );
}
