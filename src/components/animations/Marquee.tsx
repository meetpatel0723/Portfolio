import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  reverse?: boolean;
}

export function Marquee({ children, className, duration = 40, reverse = false }: MarqueeProps) {
  return (
    <div className={cn("relative flex overflow-hidden", className)}>
      <div
        className="flex w-max shrink-0 animate-marquee items-center"
        style={{ animationDuration: `${duration}s`, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
