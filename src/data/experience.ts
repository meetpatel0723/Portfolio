
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

export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "Cognitive Core AI",
    role: "Full Stack Developer",
    period: "2024 - 2026",
    location: "Ahmedabad",
    summary:
      "Developed and maintained scalable, production-ready web applications using modern full-stack technologies, focusing on performance, server-side rendering, and reliable application architecture.",
    highlights: [
      "Implemented SSR, SSG, and dynamic routing using Next.js for better performance and SEO",
      "Developed responsive web applications and reusable UI components using React.js, Next.js, and TypeScript",
      "Built and maintained REST APIs using Node.js and Express.js",
      "Developed admin panels for managing application data, users, and business operations",
      "Worked with PostgreSQL for database design, queries, and data management",
      "Handled production deployments, bug fixes, and application maintenance"
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Shadcn UI",
      "Tailwind CSS",
      "Firebase"
    ],
    current: false
  },
  {
    id: "exp-2",
    company: "Sapphire Software Solutions",
    role: "Full Stack Developer",
    period: "2026",
    location: "Ahmedabad",
    summary:
      "Contributed to the development and enhancement of an established, production-level web application, building new features and backend functionality for a platform serving thousands of users.",
    highlights: [
      "Developed and integrated RESTful APIs using Node.js and Express.js",
      "Implemented new features and enhancements in an existing large-scale production application",
      "Worked on frontend components and backend functionality to improve application capabilities",
      "Collaborated on database operations, API integrations, and existing system improvements",
      "Worked with an established codebase while maintaining application performance and stability"
    ],
    tech: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Prisma",
      "Sequelize"
    ],
    current: false
  },
  {
    id: "exp-3",
    company: "Excellent WebWorld",
    role: "Full Stack Developer",
    period: "2026 - Present",
    location: "Ahmedabad",
    summary:
      "Working on diverse international client projects, developing scalable web applications and complex backend systems with a focus on performance, business workflows, and production-ready solutions.",
    highlights: [
      "Developed and maintained full-stack applications for international clients across multiple industries",
      "Built advanced REST APIs and backend architectures using Node.js and Express.js",
      "Developed admin panels and management systems for handling users, orders, and business operations",
      "Implemented complex features including real-time location tracking, order management, and checkout workflows",
      "Worked with Prisma, Sequelize, Firebase, and PostgreSQL for database management and backend integrations",
      "Handled complex business logic, edge cases, and production scenarios to ensure application reliability",
      "Contributed to production deployments, debugging, performance optimization, and ongoing application improvements"
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Prisma",
      "Sequelize",
      "PostgreSQL",
      "Firebase",
      "Tailwind CSS"
    ],
    current: true
  }
];
