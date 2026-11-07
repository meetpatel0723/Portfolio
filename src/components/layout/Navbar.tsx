import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { personal } from "@/data/personal";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
  });

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-all duration-500",
          scrolled
            ? "border-b border-white/[0.06] bg-bg/80 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[72px] md:px-8" aria-label="Main navigation">
          <a
            href="#top"
            className="group flex items-center gap-2 font-display text-lg font-semibold tracking-tight"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent font-display text-sm font-bold text-bg transition-transform duration-300 group-hover:rotate-12">
              {personal.name.charAt(0)}
            </span>
            <span className="hidden sm:inline">
              {personal.name.split(" ")[0]}
              <span className="text-accent">.</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm transition-colors duration-300",
                    active === link.href ? "text-text" : "text-muted hover:text-text"
                  )}
                >
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/[0.07]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-all duration-300 hover:bg-lime-300 hover:shadow-[0_0_25px_-5px_rgba(163,230,53,0.5)] md:inline-flex"
            >
              Let's talk
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-text md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[95] flex flex-col bg-bg/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-1 flex-col justify-center gap-2 px-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="group flex items-baseline gap-4 border-b border-white/[0.06] py-4"
                >
                  <span className="font-display text-xs text-accent">0{i + 1}</span>
                  <span className="font-display text-3xl font-semibold text-text transition-colors group-hover:text-accent">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="px-8 pb-10"
            >
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-accent py-4 font-medium text-bg"
              >
                Let's talk <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
