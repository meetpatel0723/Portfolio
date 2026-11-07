import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/icons";
import { personal } from "@/data/personal";
import { MagneticButton } from "@/components/animations/MagneticButton";

const socials = [
  { icon: GithubIcon, href: personal.socials.github, label: "GitHub" },
  { icon: LinkedinIcon, href: personal.socials.linkedin, label: "LinkedIn" },
  { icon: TwitterIcon, href: personal.socials.twitter, label: "Twitter" },
];

export function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 md:flex-row md:px-8">
        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted transition-all duration-300 hover:border-accent/40 hover:text-accent"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>

        <MagneticButton strength={0.4}>
          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.05] text-text transition-colors hover:bg-accent hover:text-bg"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </MagneticButton>
      </div>
    </footer>
  );
}
