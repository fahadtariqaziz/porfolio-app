export interface NavLink {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  category: SkillCategory;
}

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Mobile"
  | "AI & LLMs"
  | "Cloud & DevOps"
  | "Tools & Methods";

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  achievement?: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
}

export interface Certification {
  title: string;
  issuer: string;
}

export interface Education {
  institution: string;
  degree: string;
  startYear: string;
  endYear: string;
  gpa: string;
  location: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}
