export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  id: string;
  name: string;
  icon: string;
  category: "frontend" | "backend" | "tools" | "others";
  level: number; // 1-5
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
  type: "work" | "freelance" | "internship";
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  tags: string[];
  readingTime: number;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
