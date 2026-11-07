// ---------------------------------------------------------------------------
// EDIT THIS FILE — all personal information lives here.
// Replace the placeholder values with your own details.
// ---------------------------------------------------------------------------

export const personal = {
  name: "Meet Patel",
  firstName: "Meet",
  role: "Full Stack Developer",
  tagline: "I design and build fast, elegant web applications — from pixel-perfect interfaces to resilient backend systems.",
  location: "Ahmedabad, India",
  email: "meet.patel0723@gmail.com",
  availability: "Available for new opportunities",
  resumeUrl: "#", // TODO: link to your resume PDF
  socials: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    twitter: "https://twitter.com/your-username",
  },
  stats: [
    { value: "3+", label: "Years of experience" },
    { value: "10+", label: "Projects shipped" },
    { value: "15+", label: "Technologies mastered" },
  ],
} as const;

export const about = {
  headline: "Turning complex problems into simple, beautiful software.",
  paragraphs: [
    "I'm a full stack developer with a passion for crafting digital experiences that are as performant as they are polished. I thrive at the intersection of design and engineering — where thoughtful UX meets clean, maintainable code.",
    "Over the years I've worked across the entire stack: building responsive React frontends, designing RESTful and GraphQL APIs, modelling databases, and deploying it all to the cloud. I care deeply about performance, accessibility, and the small details that make software feel great to use.",
  ],
  philosophy: [
    { title: "Simplicity first", description: "The best code is the code you don't have to write. I favour clear, minimal solutions over clever ones." },
    { title: "Craft over shortcuts", description: "I sweat the details — motion timing, spacing, edge cases — because they compound into a better product." },
    { title: "End-to-end ownership", description: "I like owning a feature from the first sketch to production monitoring, not just my slice of it." },
  ],
} as const;
