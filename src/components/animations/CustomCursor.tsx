import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.6 });

  useEffect(() => {
    if (!enabled) return;

    const move = (e: globalThis.MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      setHovering(
        !!target.closest("a, button, [data-cursor], input, textarea, [role='button']")
      );
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true">
      {/* Dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[200] h-1.5 w-1.5 rounded-full bg-accent"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
      {/* Ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[199] rounded-full border border-accent/50"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovering ? 44 : 28,
          height: hovering ? 44 : 28,
          opacity: hovering ? 0.9 : 0.5,
          scale: pressed ? 0.8 : 1,
          backgroundColor: hovering ? "rgba(163,230,53,0.08)" : "rgba(163,230,53,0)",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
    </div>
  );
}
