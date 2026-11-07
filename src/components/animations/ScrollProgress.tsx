import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.4 });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[90] h-[2px] origin-left bg-accent"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
