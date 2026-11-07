import {
  LayoutTemplate,
  Server,
  Plug,
  Database,
  Layers,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    icon: LayoutTemplate,
    title: "Frontend Development",
    description:
      "Responsive, accessible, and performant interfaces built with modern frameworks and a strong eye for detail.",
    deliverables: ["Component-driven UIs", "Design system implementation", "Performance optimisation", "Accessibility (WCAG)"],
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Scalable server-side systems — APIs, background jobs, auth, and third-party integrations — built to be reliable under load.",
    deliverables: ["REST & GraphQL APIs", "Authentication & authorisation", "Background processing", "Testing & monitoring"],
  },
  {
    icon: Plug,
    title: "API Development & Integration",
    description:
      "Well-documented, versioned APIs and integrations with payment providers, CRMs, and external services.",
    deliverables: ["API design & documentation", "Webhook handling", "Third-party integrations", "Rate limiting & security"],
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Thoughtful data modelling, migrations, and query optimisation so your application stays fast as it grows.",
    deliverables: ["Schema design", "Indexing strategy", "Migration planning", "Caching layers"],
  },
  {
    icon: Layers,
    title: "Full-Stack Applications",
    description:
      "End-to-end product development — from architecture and UI to deployment, monitoring, and iteration.",
    deliverables: ["Architecture & planning", "MVP to production", "CI/CD & DevOps", "Ongoing maintenance"],
  },
];
