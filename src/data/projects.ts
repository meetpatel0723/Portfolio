export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tech: string[];
  liveUrl: string;
  repoUrl: string;
  featured: boolean;
  gradient: string; // tailwind gradient classes used for the placeholder visual
  year: string;
}

// ---------------------------------------------------------------------------
// EDIT THIS FILE — replace placeholder projects with your own work.
// Screenshots: drop images into src/assets and set `image` to the import.
// ---------------------------------------------------------------------------
export const projects: Project[] = [
  {
    id: "project-1",
    title: "Nebula Analytics",
    subtitle: "Real-time SaaS dashboard",
    description:
      "A real-time analytics platform visualising millions of events with customisable dashboards, alerting, and team collaboration.",
    longDescription:
      "Built the full stack for a B2B analytics product: a React + TypeScript frontend with canvas-based charts, a Node.js API streaming events over WebSockets, and PostgreSQL with TimescaleDB for time-series data.",
    tech: ["React", "TypeScript", "Node.js", "WebSockets", "PostgreSQL", "Docker"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
    gradient: "from-lime-400/20 via-emerald-500/10 to-transparent",
    year: "2024",
  },
  {
    id: "project-2",
    title: "Forge Commerce",
    subtitle: "Headless e-commerce storefront",
    description:
      "A headless storefront with sub-second page loads, edge rendering, and a fully customisable checkout flow.",
    longDescription:
      "Designed and built a headless commerce experience with Next.js, a GraphQL layer over a headless CMS, and Stripe-powered checkout. Achieved 100+ Lighthouse scores and 40% higher conversion in A/B tests.",
    tech: ["Next.js", "GraphQL", "Stripe", "Tailwind CSS", "Vercel"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
    gradient: "from-sky-400/20 via-indigo-500/10 to-transparent",
    year: "2024",
  },
  {
    id: "project-3",
    title: "Pulse Chat",
    subtitle: "Realtime team messaging",
    description:
      "A real-time messaging app with channels, threads, reactions, and end-to-end encrypted direct messages.",
    longDescription:
      "Implemented real-time messaging with Socket.io, Redis pub/sub for horizontal scaling, and end-to-end encryption for DMs. Includes file uploads, presence indicators, and offline message sync.",
    tech: ["React", "Socket.io", "Redis", "MongoDB", "Node.js"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
    gradient: "from-violet-400/20 via-fuchsia-500/10 to-transparent",
    year: "2023",
  },
  {
    id: "project-4",
    title: "Taskflow",
    subtitle: "Collaborative project management",
    description:
      "A kanban-style project management tool with real-time collaboration, automations, and reporting dashboards.",
    longDescription:
      "Full-stack rebuild of a legacy project management tool — React frontend with optimistic UI updates, Fastify API, and a normalised PostgreSQL schema. Introduced automation rules and burndown reporting.",
    tech: ["React", "Fastify", "PostgreSQL", "Drizzle ORM", "AWS"],
    liveUrl: "#",
    repoUrl: "#",
    featured: false,
    gradient: "from-amber-400/20 via-orange-500/10 to-transparent",
    year: "2023",
  },
  {
    id: "project-5",
    title: "DevBoard",
    subtitle: "Developer portfolio generator",
    description:
      "An open-source tool that generates beautiful, fast portfolio sites from a single JSON config file.",
    longDescription:
      "An open-source CLI and template that scaffolds a production-ready portfolio with theming, MDX blog support, and automatic SEO. 1k+ GitHub stars.",
    tech: ["TypeScript", "Vite", "MDX", "Tailwind CSS"],
    liveUrl: "#",
    repoUrl: "#",
    featured: false,
    gradient: "from-teal-400/20 via-cyan-500/10 to-transparent",
    year: "2022",
  },
];
