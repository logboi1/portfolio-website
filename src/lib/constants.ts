export const SITE_CONFIG = {
  name: "Ibraheem Abiola Ogundele",
  title: "Senior Frontend Engineer",
  description:
    "Enthusiastic and detail-oriented Frontend Engineer with 5+ years of experience building scalable, enterprise-grade web and mobile applications.",
  url: "https://ibraheemogundele.dev", // Update with your domain
  links: {
    github: "https://github.com/logboi1",
    linkedin: "https://www.linkedin.com/in/ibraheem-ogundele",
    twitter: "https://twitter.com/ibraheemogunde2", // Add your Twitter if you have one
    email: "ogundeleibraheem@gmail.com",
  },
} as const;

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
] as const;
