export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  tech: string[];
  current?: boolean;
}

// ---------------------------------------------------------------------------
// EDIT THIS FILE — replace placeholder roles with your actual experience.
// ---------------------------------------------------------------------------
export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "TechCorp Inc.",
    role: "Senior Full Stack Developer",
    period: "2023 — Present",
    location: "Remote",
    summary: "Leading feature development on a B2B SaaS analytics platform used by 500+ enterprise customers.",
    highlights: [
      "Architected and shipped a real-time dashboard processing 2M+ events/day",
      "Reduced frontend bundle size by 40% through code-splitting and lazy loading",
      "Mentored two junior developers and established frontend code review standards",
    ],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    current: true,
  },
  {
    id: "exp-2",
    company: "StartupXYZ",
    role: "Full Stack Developer",
    period: "2021 — 2023",
    location: "Your City",
    summary: "First engineering hire at an early-stage startup; built the product from MVP to Series A.",
    highlights: [
      "Built and launched the core product — frontend, API, and database",
      "Implemented Stripe billing and multi-tenant authentication",
      "Scaled the API to handle 50k daily active users",
    ],
    tech: ["Next.js", "GraphQL", "MongoDB", "Docker"],
  },
  {
    id: "exp-3",
    company: "Digital Agency",
    role: "Frontend Developer",
    period: "2019 — 2021",
    location: "Your City",
    summary: "Delivered marketing sites and web applications for a diverse client portfolio.",
    highlights: [
      "Delivered 15+ client projects with pixel-perfect responsive builds",
      "Introduced a shared component library that cut build time by 30%",
      "Improved average Lighthouse scores from 62 to 95 across client sites",
    ],
    tech: ["React", "Vue", "SCSS", "WordPress"],
  },
];
