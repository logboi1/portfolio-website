// src/lib/data.ts
import { Project, Skill, Experience, BlogPost } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "EndowPay - Fintech Payment Platform",
    description:
      "A comprehensive fintech web application for utility bill payments and secure financial transactions.",
    longDescription:
      "Built and currently maintaining a production fintech web app that enables users to pay utility bills and perform secure financial transactions. Developed responsive UI components with React, Next.js, and TypeScript, integrating real-time APIs for billing, receipts, and transaction history. Focused on security, performance optimization, and seamless user experience for high-volume transactions.",
    image: "/projects/endow.png",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
    ],
    githubUrl: "",
    liveUrl: "https://endowpay.app",
    featured: true,
  },
  {
    id: "2",
    title: "NSC ECMS - Nigerian Shippers Council",
    description:
      "Enterprise Cargo Management System for regulatory compliance and document management.",
    longDescription:
      "Led the frontend development of the Enterprise Cargo Management System (ECMS) for the Nigerian Shippers Council, a government regulatory body. Built scalable UI architecture with React, Next.js, and Vite, integrating complex APIs for document management, regulatory compliance tracking, and workflow automation. Collaborated with backend engineers and stakeholders to deliver mission-critical features.",
    image: "/projects/nsc.png",
    technologies: ["React", "Next.js", "Vite", "TypeScript", "Redux"],
    githubUrl: "",
    liveUrl: "",
    featured: true,
  },
  {
    id: "3",
    title: "KweekTransfer Mobile App",
    description:
      "Cross-border fintech mobile application for peer-to-peer transfers and wallet management.",
    longDescription:
      "Developed a comprehensive fintech mobile application similar to OPay, enabling peer-to-peer transfers, wallet management, and cross-border payments. Built using React Native with seamless integration of multiple payment APIs for secure transactions. Implemented features like transaction history, KYC verification, and real-time notifications.",
    image: "/projects/kweektransfer.png",
    technologies: [
      "React Native",
      "TypeScript",
      "REST APIs",
      "Firebase",
      "Redux",
    ],
    githubUrl: "",
    liveUrl: "https://www.kweektransfer.com",
    featured: true,
  },
  {
    id: "4",
    title: "5G Restaurant POS System",
    description:
      "Modern Point of Sale system for restaurant operations with inventory management.",
    longDescription:
      "Designed and developed a full-featured POS system for 5G Restaurant to streamline order management, inventory tracking, and sales reporting. Built with Next.js for optimal performance, Supabase for real-time database operations, and Prisma ORM for type-safe database queries. Features include table management, order processing, receipt generation, and analytics dashboard.",
    image: "/projects/pos.png",
    technologies: [
      "Next.js",
      "Supabase",
      "Prisma",
      "TypeScript",
      "Tailwind CSS",
    ],
    githubUrl: "",
    liveUrl: "",
    featured: true,
  },
  {
    id: "5",
    title: "Payahut - Payment & Revenue System",
    description:
      "Enterprise payment platform for bills payment and merchant collections.",
    longDescription:
      "Designed and developed a comprehensive payment platform similar to Remita, supporting utility bills payment, merchant collections, and financial compliance. Implemented using React.js for the frontend, Node.js + Express.js for backend services, and integrated third-party payment gateways. Features include automated reconciliation, revenue tracking, and merchant management.",
    image: "/projects/payahut.png",
    technologies: ["React", "Node.js", "Express.js", "MySQL", "Payment APIs"],
    githubUrl: "",
    liveUrl: "https://www.payahut.com",
    featured: false,
  },
  {
    id: "6",
    title: "GDG DevFest Event App",
    description:
      "Event management application for Google Developer Group DevFest with scheduling features.",
    longDescription:
      "Developed a React Native mobile application for GDG DevFest event scheduling and management. Integrated with Firebase for real-time updates and Node.js backend for event data management. Features include session scheduling, speaker profiles, venue maps, and push notifications for event updates.",
    image: "/projects/devfest.jpg",
    technologies: ["React Native", "Node.js", "Firebase", "REST APIs"],
    githubUrl: "https://github.com/logboi1/Devfest_Timeline",
    liveUrl: "",
    featured: false,
  },
  {
    id: "7",
    title: "DevFest Avatar Maker",
    description:
      "Custom avatar generator for GDG DevFest community members (2022 & 2023).",
    longDescription:
      "Created a custom avatar generator application for Google Developer Group (GDG) DevFest members. Contributed to the project revamp in two consecutive years (2022 & 2023), enhancing UI/UX and optimizing image generation workflows. Implemented features for customizable avatars with various design options and instant preview.",
    image: "/projects/devfestavatar.png",
    technologies: ["React", "Canvas API", "JavaScript", "CSS3"],
    githubUrl: "",
    liveUrl: "https://devfestavatar.web.app",
    featured: false,
  },
];

export const skills: Skill[] = [
  // Frontend
  { id: "1", name: "React", icon: "react", category: "frontend", level: 5 },
  { id: "2", name: "Next.js", icon: "nextjs", category: "frontend", level: 5 },
  {
    id: "3",
    name: "TypeScript",
    icon: "typescript",
    category: "frontend",
    level: 5,
  },
  {
    id: "4",
    name: "JavaScript (ES6+)",
    icon: "javascript",
    category: "frontend",
    level: 5,
  },
  {
    id: "5",
    name: "React Native",
    icon: "react",
    category: "frontend",
    level: 5,
  },
  {
    id: "6",
    name: "Tailwind CSS",
    icon: "tailwind",
    category: "frontend",
    level: 5,
  },
  { id: "7", name: "HTML5", icon: "html", category: "frontend", level: 5 },
  { id: "8", name: "CSS3", icon: "css", category: "frontend", level: 5 },
  { id: "9", name: "Vite", icon: "vite", category: "frontend", level: 4 },
  { id: "10", name: "Redux", icon: "redux", category: "frontend", level: 4 },
  {
    id: "11",
    name: "Flutter",
    icon: "flutter",
    category: "frontend",
    level: 3,
  },

  // Backend
  {
    id: "12",
    name: "Node.js",
    icon: "nodejs",
    category: "backend",
    level: 4,
  },
  {
    id: "13",
    name: "Express.js",
    icon: "express",
    category: "backend",
    level: 4,
  },
  {
    id: "14",
    name: "PostgreSQL",
    icon: "postgresql",
    category: "backend",
    level: 4,
  },
  { id: "15", name: "MySQL", icon: "mysql", category: "backend", level: 4 },
  { id: "16", name: "MongoDB", icon: "mongodb", category: "backend", level: 4 },
  { id: "17", name: "Prisma", icon: "prisma", category: "backend", level: 4 },
  {
    id: "18",
    name: "Supabase",
    icon: "supabase",
    category: "backend",
    level: 4,
  },
  {
    id: "19",
    name: "Firebase",
    icon: "firebase",
    category: "backend",
    level: 4,
  },
  { id: "20", name: "Redis", icon: "redis", category: "backend", level: 3 },
  { id: "21", name: "SQL Server", icon: "sql", category: "backend", level: 3 },
  { id: "22", name: "Python", icon: "python", category: "backend", level: 3 },
  { id: "23", name: "C#", icon: "csharp", category: "backend", level: 3 },
  { id: "24", name: "Dart", icon: "dart", category: "backend", level: 3 },

  // Tools
  { id: "25", name: "Git", icon: "git", category: "tools", level: 5 },
  { id: "26", name: "GitHub", icon: "github", category: "tools", level: 5 },
  { id: "27", name: "VS Code", icon: "vscode", category: "tools", level: 5 },
  { id: "28", name: "Docker", icon: "docker", category: "tools", level: 4 },
  { id: "29", name: "Figma", icon: "figma", category: "tools", level: 4 },
  { id: "30", name: "Jira", icon: "jira", category: "tools", level: 4 },
  { id: "31", name: "GitLab", icon: "gitlab", category: "tools", level: 4 },
  {
    id: "32",
    name: "Azure DevOps",
    icon: "azure",
    category: "tools",
    level: 3,
  },
  {
    id: "33",
    name: "Visual Studio",
    icon: "visualstudio",
    category: "tools",
    level: 3,
  },
  {
    id: "34",
    name: "Android Studio",
    icon: "android",
    category: "tools",
    level: 3,
  },

  // Others
  {
    id: "35",
    name: "REST APIs",
    icon: "api",
    category: "others",
    level: 5,
  },
  {
    id: "36",
    name: "Responsive Design",
    icon: "responsive",
    category: "others",
    level: 5,
  },
  {
    id: "37",
    name: "Performance Optimization",
    icon: "performance",
    category: "others",
    level: 4,
  },
  {
    id: "38",
    name: "Team Leadership",
    icon: "leadership",
    category: "others",
    level: 4,
  },
  {
    id: "39",
    name: "Code Review",
    icon: "review",
    category: "others",
    level: 4,
  },
  {
    id: "40",
    name: "Mentoring",
    icon: "mentor",
    category: "others",
    level: 4,
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Endow Tech",
    position: "Senior Frontend Engineer",
    duration: "Jul 2025 - Present",
    description: [
      "Developing a production fintech web application for utility bill payments and financial transactions",
      "Implemented responsive UI components with React + TypeScript, integrating APIs for real-time financial operations",
      "Focused on security, performance optimization, and seamless user experience for high-volume transactions",
      "Collaborated closely with product managers and QA teams to ensure timely feature releases",
      "Led code reviews and established frontend best practices for the engineering team",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
    ],
    type: "work",
  },
  {
    id: "2",
    company: "Greydot Innovatives Limited",
    position: "Lead Frontend Developer",
    duration: "Nov 2023 - Present",
    description: [
      "Lead the development of enterprise-ready web applications for organizations, including the Nigerian Shippers Council",
      "Architected and implemented scalable frontend solutions using React, Next.js, and React Native",
      "Collaborated with backend engineers, designers, and business teams to ensure successful delivery of complex projects",
      "Mentored junior developers and enforced coding standards, best practices, and performance optimizations",
      "Managed project timelines and delivered features under tight deadlines",
    ],
    technologies: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "Vite",
      "Redux",
    ],
    type: "work",
  },
  {
    id: "3",
    company: "KweekTransfer Tech. Limited",
    position: "Junior Software Developer",
    duration: "Jan 2023 - May 2024",
    description: [
      "Developed and maintained mobile applications using React Native for fintech solutions",
      "Collaborated in a cross-functional team of 4 to deliver high-quality software products",
      "Integrated third-party APIs to enhance user experience and application functionality",
      "Participated in daily stand-ups, sprint planning, and code reviews",
      "Implemented new features based on user feedback and business requirements",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Firebase",
      "REST APIs",
      "Redux",
    ],
    type: "work",
  },
  {
    id: "4",
    company: "Greydot Innovatives Limited",
    position: "Software Developer",
    duration: "Nov 2022 - Oct 2023",
    description: [
      "Designed and built web and mobile applications using React and React Native",
      "Conducted code reviews and mentored interns on software development practices",
      "Integrated APIs and third-party services to extend application features",
      "Collaborated with design team to implement pixel-perfect UI components",
      "Maintained existing codebases and fixed critical bugs",
    ],
    technologies: ["React", "React Native", "JavaScript", "CSS3", "REST APIs"],
    type: "work",
  },
  {
    id: "5",
    company: "Maxnet",
    position: "Software Developer",
    duration: "2020 - 2022",
    description: [
      "Built and maintained desktop-based applications using Visual Basic for business operations",
      "Designed and implemented RESTful APIs with Node.js + Express.js",
      "Scaled and maintained an application serving 30,000+ users with high availability",
      "Mentored SIWES (Student Industrial Work Experience Scheme) students on software development standards",
      "Collaborated with team members to troubleshoot and resolve technical issues",
    ],
    technologies: [
      "Visual Basic",
      "Node.js",
      "Express.js",
      "SQL Server",
      "REST APIs",
    ],
    type: "work",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable Fintech Applications with React and TypeScript",
    excerpt:
      "Learn the best practices and architectural patterns for building secure and scalable fintech applications using React and TypeScript.",
    content: "Content for the blog post would go here...",
    publishedAt: "2024-10-01",
    tags: ["React", "TypeScript", "Fintech", "Architecture"],
    readingTime: 8,
  },
  {
    id: "2",
    title:
      "React Native vs Flutter: Choosing the Right Framework for Mobile Apps",
    excerpt:
      "A comprehensive comparison of React Native and Flutter based on real-world project experience, covering performance, development speed, and community support.",
    content: "Content for the blog post would go here...",
    publishedAt: "2024-09-15",
    tags: ["React Native", "Flutter", "Mobile Development", "Comparison"],
    readingTime: 6,
  },
  {
    id: "3",
    title: "Optimizing React Applications for High-Volume Traffic",
    excerpt:
      "Practical techniques for optimizing React applications to handle high-volume user traffic, including code splitting, lazy loading, and caching strategies.",
    content: "Content for the blog post would go here...",
    publishedAt: "2024-08-20",
    tags: ["React", "Performance", "Optimization", "Best Practices"],
    readingTime: 7,
  },
];

// Personal information
export const personalInfo = {
  name: "Ibraheem Abiola Ogundele",
  title: "Senior Frontend Engineer",
  location: "Ado Ekiti, Ekiti State, Nigeria",
  bio: "Enthusiastic and detail-oriented Frontend Engineer with 5+ years of experience building scalable, enterprise-grade web and mobile applications. Skilled in React.js and modern frameworks including Next.js, with proven expertise in delivering fintech and enterprise solutions.",
  resume: "/resume.pdf",
  stats: {
    yearsExperience: "5+",
    projectsCompleted: "30+",
    usersImpacted: "50K+",
    linesOfCode: "100K+",
  },
};

export const aboutMe = {
  intro:
    "Hi! I'm Ibraheem, a passionate Senior Frontend Engineer based in Nigeria. I specialize in building enterprise-grade web and mobile applications with a focus on fintech solutions and scalable architectures.",
  story:
    "My journey into software development began during my polytechnic education, where I discovered my passion for creating digital solutions that solve real-world problems. Over the past 5+ years, I've had the privilege of working on diverse projects ranging from fintech platforms to enterprise management systems, always striving to deliver high-quality, performant applications. I particularly enjoy working with React ecosystem and have led teams in delivering mission-critical applications for organizations like the Nigerian Shippers Council.",
  mission:
    "I believe in writing clean, maintainable code that not only solves business problems but also provides exceptional user experiences. My goal is to continue building impactful applications while mentoring the next generation of developers and contributing to the tech community.",
  interests: [
    "Frontend Architecture",
    "Fintech Solutions",
    "Mobile App Development",
    "Performance Optimization",
    "Team Leadership",
    "Mentoring Developers",
  ],
  funFacts: [
    "Built and scaled an application serving 30,000+ users",
    "Led frontend development for Nigerian government projects",
    "Contributed to GDG DevFest projects for 2 consecutive years",
    "Mentored multiple interns and junior developers",
  ],
};

// Update constants.ts with your information
export const SITE_CONFIG_UPDATE = {
  name: "Ibraheem Abiola Ogundele",
  title: "Senior Frontend Engineer",
  description:
    "Enthusiastic and detail-oriented Frontend Engineer with 5+ years of experience building scalable, enterprise-grade web and mobile applications.",
  url: "https://ibraheemogundele.dev", // Update with your domain
  links: {
    github: "https://github.com/logboi1",
    linkedin: "https://www.linkedin.com/in/ibraheem-ogundele",
    twitter: "https://twitter.com/yourusername", // Add your Twitter if you have one
    email: "ogundeleibraheem@gmail.com",
  },
};
