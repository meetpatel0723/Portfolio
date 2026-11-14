
export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Tools & Cloud";

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
  { name: "React.js", category: "Frontend", description: "Component-driven UIs, hooks, and reusable components" },
  { name: "Next.js", category: "Frontend", description: "SSR, SSG, dynamic routing, and full-stack React" },
  { name: "TypeScript", category: "Frontend", description: "Type-safe application development" },
  { name: "JavaScript", category: "Frontend", description: "Modern JavaScript and asynchronous programming" },
  { name: "Tailwind CSS", category: "Frontend", description: "Utility-first styling and responsive design" },
  { name: "Shadcn UI", category: "Frontend", description: "Reusable and customizable UI components" },
  { name: "Redux Toolkit", category: "Frontend", description: "Global state management for React applications" },
  { name: "TanStack Query", category: "Frontend", description: "Server state management, caching, and data fetching" },
  { name: "React Hook Form", category: "Frontend", description: "Form management and validation" },
  { name: "Zod", category: "Frontend", description: "Schema validation and type-safe data validation" },

  // Backend
  { name: "Node.js", category: "Backend", description: "Backend development, services, and server-side applications" },
  { name: "Express.js", category: "Backend", description: "Backend development and API architecture" },
  { name: "REST APIs", category: "Backend", description: "API design, development, and integration" },
  { name: "Socket.IO", category: "Backend", description: "Real-time event-based communication" },
  { name: "JWT Authentication", category: "Backend", description: "Token-based authentication and authorization" },
  { name: "BullMQ", category: "Backend", description: "Background jobs and queue management" },
  { name: "Swagger / OpenAPI", category: "Backend", description: "API documentation and specification" },
  { name: "Webhooks", category: "Backend", description: "Event-driven communication between applications" },

  // Database
  { name: "PostgreSQL", category: "Database", description: "Relational database design, queries, and migrations" },
  { name: "MySQL", category: "Database", description: "Relational database management and SQL queries" },
  { name: "MongoDB", category: "Database", description: "Document-based data modelling and queries" },
  { name: "Redis", category: "Database", description: "Caching and in-memory data management" },
  { name: "Prisma", category: "Database", description: "Type-safe ORM and database management" },
  { name: "Sequelize", category: "Database", description: "ORM for relational database operations" },
  { name: "Firebase", category: "Database", description: "Backend services and database integration" },

  // Tools & Cloud
  { name: "Git & GitHub", category: "Tools & Cloud", description: "Version control and collaborative development" },
  { name: "Vercel", category: "Tools & Cloud", description: "Application deployment and hosting" },
  { name: "Postman", category: "Tools & Cloud", description: "API testing, debugging, and documentation" },
];
