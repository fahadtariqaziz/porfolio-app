import type {
  NavLink,
  Skill,
  Experience,
  Project,
  Certification,
  Education,
  SocialLink,
} from "@/lib/types";

export const name = "Fahad Tariq Aziz";
export const role = "Software Engineer | AI Integration Specialist";
export const tagline =
  "Building modern web & mobile experiences with React, Next.js, and cloud technologies.";

export const about = [
  "Skilled Software Engineer specializing in modern web and mobile application development using React.js, Next.js, React Native, Node.js, NestJS, and AWS services.",
  "Experienced in building scalable, production-ready applications, integrating AI systems, and working in Agile environments with code reviews, debugging, and deployment workflows. Strong problem-solving skills with focus on performance, scalability, and user experience.",
];

export const email = "fahadtariqaziz1@gmail.com";
export const phone = "+92-333-8488299";

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skills: Skill[] = [
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "React Native", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "NestJS", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "SQL", category: "Backend" },
  { name: "Vercel AI SDK", category: "AI & LLMs" },
  { name: "LLM Integration", category: "AI & LLMs" },
  { name: "AWS Lambda", category: "Cloud & DevOps" },
  { name: "DynamoDB", category: "Cloud & DevOps" },
  { name: "Git", category: "Tools & Methods" },
  { name: "Mem0", category: "Tools & Methods" },
  { name: "PostHog", category: "Tools & Methods" },
  { name: "Sentry", category: "Tools & Methods" },
  { name: "Agile", category: "Tools & Methods" },
  { name: "C", category: "Tools & Methods" },
];

export const experience: Experience[] = [
  {
    company: "CodingCops",
    role: "Software Engineer",
    startDate: "July 2024",
    endDate: "Present",
    highlights: [
      "Developed cross-platform mobile app (React Native) and web app (Next.js) for an AI mentoring platform",
      "Built psychometric assessment system implementing Big Five (OCEAN) personality model with Z-Score normalization and percentile calculation using statistical formulas",
      "Architected AI memory pipeline using Mem0 for long-term user context — semantic search, custom extraction rules, and memory injection into LLM prompts",
      "Designed parallel data-fetching architecture (Promise.allSettled) combining Mem0 search, DynamoDB metrics, journey entries, and system prompts in ~500ms",
      "Integrated Claude Sonnet API with prompt caching, structured XML system prompts, and dynamic context injection for personalized AI responses",
      "Implemented A/B testing and user analytics using PostHog to optimize engagement and feature performance",
      "Monitored and resolved production issues using Sentry, significantly improving application stability",
    ],
    achievement:
      "Launched Purpose AI Mentor on iOS App Store and web, achieving 10,000+ user trials on day one.",
  },
  {
    company: "TacTech",
    role: "Associate Software Engineer",
    startDate: "January 2023",
    endDate: "July 2023",
    highlights: [
      "Built responsive and reusable UI components using React.js",
      "Developed REST APIs using Node.js and Express.js",
      "Used Tailwind CSS and Material UI to create modern user interfaces",
      "Improved application performance and added new production features",
      "Collaborated with team members in Agile development workflow",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Purpose AI Mentor",
    description:
      "Production AI mentoring platform on iOS and web that delivers personalized guidance using psychometric profiling, long-term memory, and LLM-powered conversations.",
    techStack: [
      "React Native",
      "Next.js",
      "Claude API",
      "Mem0",
      "AWS Lambda",
      "DynamoDB",
      "PostHog",
      "Sentry",
    ],
    highlights: [
      "Built Big Five (OCEAN) personality assessment with Z-Score normalization, percentile ranking via CDF/error function, and Schwartz Values ranking system",
      "Architected Mem0 memory pipeline — semantic search over conversation history, custom extraction rules for background facts, behavioral patterns, and relationships",
      "Designed parallel context assembly (Promise.allSettled) fetching memories, metrics, journey entries, and prompts concurrently for sub-500ms latency",
      "Integrated Claude Sonnet with prompt caching, XML-structured system prompts, and dynamic context injection of personality profiles and retrieved memories",
      "Achieved 10,000+ user trials within the first day of launch on iOS App Store and web",
    ],
  },
  {
    title: "Help Ticketing System — Genuity",
    description:
      "Full-featured Help Desk Ticketing System enabling organizations to create, manage, and resolve support requests across multiple company workspaces.",
    techStack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "REST API"],
    highlights: [
      "Multi-workspace architecture for independent ticket management across departments",
      "Role-based access control for ticket creators, support agents, and admins",
      "Complete ticket lifecycle: creation, updates, comments, status tracking, and resolution",
      "Scalable backend APIs with workspace isolation and efficient data retrieval",
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
  },
  { title: "React and Redux Certification", issuer: "Online" },
  { title: "SQL Intermediate Certification", issuer: "HackerRank" },
  {
    title: "HTML, CSS, JavaScript Certification",
    issuer: "10Pearls University",
  },
];

export const education: Education[] = [
  {
    institution: "COMSATS University Islamabad",
    degree: "BS Software Engineering",
    startYear: "2020",
    endYear: "2024",
    gpa: "3.41",
    location: "Lahore Campus",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/fahad-tariq-aziz-57675719a/",
  },
];
