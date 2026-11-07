export type SkillCategory = "Frontend" | "Backend" | "Database" | "Tools & Cloud";

export interface Skill {
  name: string;
  category: SkillCategory;
  description: string;
}

export const skillCategories: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Database",
  "Tools & Cloud",
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend", description: "Component-driven UIs, hooks, concurrent features" },
  { name: "TypeScript", category: "Frontend", description: "Type-safe application development at scale" },
  { name: "Next.js", category: "Frontend", description: "SSR, SSG, API routes, full-stack React" },
  { name: "Tailwind CSS", category: "Frontend", description: "Utility-first styling with design systems" },
  { name: "Motion / GSAP", category: "Frontend", description: "Animation and scroll-driven interactions" },
  // Backend
  { name: "Node.js", category: "Backend", description: "Express APIs, services, background jobs" },
  { name: "Python", category: "Backend", description: "FastAPI services, scripting, automation" },
  { name: "REST & GraphQL", category: "Backend", description: "API design, versioning, documentation" },
  { name: "WebSockets", category: "Backend", description: "Real-time features and live updates" },
  // Database
  { name: "PostgreSQL", category: "Database", description: "Schema design, indexing, migrations" },
  { name: "MongoDB", category: "Database", description: "Document modelling, aggregation pipelines" },
  { name: "Redis", category: "Database", description: "Caching, queues, session stores" },
  { name: "Prisma / Drizzle", category: "Database", description: "Type-safe ORM and query layers" },
  // Tools & Cloud
  { name: "Docker", category: "Tools & Cloud", description: "Containerisation and local dev parity" },
  { name: "AWS / Vercel", category: "Tools & Cloud", description: "Deployment, CI/CD, serverless" },
  { name: "Git & CI", category: "Tools & Cloud", description: "Trunk-based workflows, automated testing" },
  { name: "Testing", category: "Tools & Cloud", description: "Vitest, Playwright, integration suites" },
];
