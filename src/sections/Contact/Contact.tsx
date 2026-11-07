import { motion } from "motion/react";
import { ArrowUpRight, Copy, Check, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { useState } from "react";
import { personal } from "@/data/personal";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { AmbientBackground } from "@/components/layout/AmbientBackground";
import { ContactForm } from "./ContactForm";

const socials = [
  { icon: GithubIcon, href: personal.socials.github, label: "GitHub" },
  { icon: LinkedinIcon, href: personal.socials.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — mailto link still works
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-28 md:py-40">
      <AmbientBackground />

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-accent"
        >
          Got a project in mind?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="font-display text-[clamp(2.8rem,8vw,5.5rem)] font-bold leading-[1.02] tracking-tight text-text"
        >
          Let's build something
          <br />
          <span className="font-serif italic font-normal text-accent">worth shipping.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
        >
          I'm currently {personal.availability.toLowerCase()} — whether it's a full product,
          a tricky bug, or just an idea you want to explore, I'd love to hear about it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton strength={0.3}>
            <a
              href={`mailto:${personal.email}`}
              className="group inline-flex h-13 items-center gap-2.5 rounded-full bg-accent px-8 py-4 font-medium text-bg transition-all duration-300 hover:bg-lime-300 hover:shadow-[0_0_45px_-8px_rgba(163,230,53,0.55)]"
            >
              <Mail className="h-4 w-4" />
              {personal.email}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </MagneticButton>

          <MagneticButton strength={0.3}>
            <button
              onClick={copyEmail}
              className="inline-flex h-13 items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-4 text-sm font-medium text-text backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/[0.07]"
              aria-label="Copy email address"
            >
              {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied!" : "Copy email"}
            </button>
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 flex items-center justify-center gap-3"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-muted transition-all duration-300 hover:border-accent/40 hover:text-accent hover:shadow-[0_0_20px_-5px_rgba(163,230,53,0.3)]"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>

        <ContactForm />
      </div>
    </section>
  );
}
