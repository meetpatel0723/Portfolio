import { motion, useReducedMotion, type Variants } from "motion/react";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

const containerVariants: Variants = {
  hidden: {},
  visible: {},
};

export function TextReveal({
  text,
  className,
  delay = 0,
  stagger = 0.035,
  as = "span",
}: TextRevealProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const Tag = motion[as] as typeof motion.span;

  const wordVariants: Variants = {
    hidden: { y: "110%", rotate: reduce ? 0 : 4 },
    visible: {
      y: "0%",
      rotate: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <Tag
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom"
        >
          <motion.span
            className="inline-block will-change-transform"
            variants={wordVariants}
            custom={i}
            transition={{ delay: delay + i * stagger }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
