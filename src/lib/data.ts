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
    image: "/projects/devfestavatar.png",
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
      "A practical look at how I approach fintech interfaces, transaction states, and reliable API integrations with React and TypeScript.",
    content:
      "One thing fintech work teaches quickly is that clean UI alone is not enough. A payment flow has to communicate trust, handle edge cases clearly, and stay stable when the API is under pressure. Before I build screens, I map the transaction journey in detail so loading states, retries, reversals, and failures are all designed on purpose.\n\nReact and TypeScript make it easier to keep those flows predictable because they force clarity in state handling and API responses. I also pay close attention to how the frontend and backend meet, especially around validation, idempotent actions, and audit-friendly data structures. Those small engineering decisions save a lot of pain later.\n\nThe strongest fintech products usually come from cross-team discipline. Product, design, frontend, backend, and QA all shape the final reliability of the experience, and I enjoy helping connect those pieces into something users can trust.",
    publishedAt: "2026-03-26",
    tags: ["React", "TypeScript", "Fintech", "Architecture"],
    readingTime: 8,
  },
  {
    id: "2",
    title:
      "React Native vs Flutter: Choosing the Right Framework for Mobile Apps",
    excerpt:
      "How I think through the React Native versus Flutter decision when a team needs to move fast without creating long-term maintenance problems.",
    content:
      "Framework decisions become much easier when you stop asking which option is universally better and start asking which one fits the team that will actually maintain the product. When a company already has strong JavaScript or TypeScript experience, React Native often gives a faster route to delivery because the tooling and mental model already feel familiar.\n\nFlutter is a strong option when visual consistency is the priority and the team is comfortable investing in Dart for the long haul. I usually lean toward React Native when collaboration with web engineers matters, release speed is important, and shared product thinking across platforms is more valuable than a perfectly controlled rendering layer.\n\nFor real client work, the best choice is the one the team can still support confidently months after launch. A stable architecture, realistic roadmap, and disciplined releases matter far more than choosing the trendiest framework.",
    publishedAt: "2026-03-14",
    tags: ["React Native", "Flutter", "Mobile Development", "Comparison"],
    readingTime: 6,
  },
  {
    id: "3",
    title: "Optimizing React Applications for High-Volume Traffic",
    excerpt:
      "The performance habits I rely on when React applications need to stay fast under heavy usage and data-rich workflows.",
    content:
      "Performance work gets better when it starts with measurement instead of guesswork. I normally begin by looking at load time, interaction delay, API latency, and the screens where users feel the most friction. That gives me a clearer path than trying random tweaks and hoping one of them helps.\n\nIn React applications, the fastest wins often come from reducing what ships on first load, structuring data requests more intentionally, and avoiding unnecessary renders. Code splitting, lighter media, better caching, and clear loading states can make an app feel dramatically smoother even before deeper optimization work begins.\n\nI also think performance is a shared responsibility. Frontend choices matter, but backend response times, API design, and review culture usually decide whether a product stays fast as usage grows.",
    publishedAt: "2026-02-28",
    tags: ["React", "Performance", "Optimization", "Best Practices"],
    readingTime: 7,
  },
];

// Personal information
export const personalInfo = {
  name: "Ibraheem Abiola Ogundele",
  title: "Senior Frontend Engineer with Backend Experience",
  location: "Ado Ekiti, Ekiti State, Nigeria",
  bio: "Senior frontend engineer with 5+ years of experience building scalable web and mobile applications. I specialize in polished product interfaces with React and Next.js, and I also support delivery with backend integrations, Node.js services, and API-driven workflows when needed.",
  resume: "/resume.pdf",
  stats: {
    yearsExperience: "5+",
    projectsCompleted: "15+",
    usersImpacted: "50K+",
    linesOfCode: "100K+",
  },
};

export const aboutMe = {
  intro:
    "Hi! I'm Ibraheem, a senior frontend engineer based in Nigeria who builds fast, reliable web and mobile products and also contributes on the backend when a project needs API work or service integration.",
  story:
    "My journey into software development began during my polytechnic education, where I discovered how much I enjoy building digital solutions that solve real business problems. Over the past 5+ years, I have worked on fintech products, internal platforms, and enterprise systems, leading frontend delivery while collaborating closely on API design, backend integrations, and release quality. I enjoy turning complex requirements into products that feel clear, fast, and dependable for the people using them every day.",
  mission:
    "I believe in writing clean, maintainable code that solves business problems and creates confidence for users. My goal is to keep building impactful products, strengthen my full product engineering range across frontend and backend collaboration, and keep helping other developers grow along the way.",
  interests: [
    "Frontend Architecture",
    "Backend Integrations",
    "Fintech Solutions",
    "Mobile App Development",
    "Performance Optimization",
    "Team Leadership",
    "Mentoring Developers",
  ],
  funFacts: [
    "Built and scaled an application serving 30,000+ users",
    "Led frontend development for Nigerian government projects",
    "Built backend APIs and integrations with Node.js and Express",
    "Contributed to GDG DevFest projects for 2 consecutive years",
    "Mentored multiple interns and junior developers",
  ],
};
