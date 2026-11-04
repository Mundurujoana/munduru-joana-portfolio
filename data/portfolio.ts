export type Project = { title: string; description: string; tags: string[]; year: string; href?: string; result?: string; featured?: boolean };
export type Job = { period: string; role: string; where: string };

export const profile = {
  name: "Munduru Joana",
  handle: "munduru",
  role: "Software developer",
  tagline: "fast, typed web apps.",
  intro: "React and Next.js on the front. Node.js, Python and MySQL behind it.",
  bio: "I’m a software developer and data analyst passionate about impactful digital solutions. I build interfaces with React and Next.js, and work with Node.js, Python and MySQL behind them.",
  location: "Kampala, Uganda",
  timezone: "GMT+3",
  email: "mundujoana@gmail.com",
  linkedin: "https://www.linkedin.com/in/munduru-joana/",
  github: "https://github.com/Mundurujoana",
  cv: "/Munduru-Joana-CV.pdf",
  years: "5+",
};

export const stack = ["React", "Next.js", "TypeScript", "Node.js", "Python", "MySQL", "Tailwind CSS"];

// Replace the sample projects (Pulse and Docket) with your own.
export const projects: Project[] = [
  { title: "Pulse", description: "Real-time dashboard. A Node.js gateway streams events to a React client.", tags: ["Node.js", "React", "WebSockets"], year: "Sample" },
  { title: "Docket", description: "Multi-tenant SaaS with typed API contracts shared across client and server.", tags: ["React", "MySQL", "TypeScript"], year: "Sample" },
  { title: "GreensKiosk API", description: "A web server API built in JavaScript.", tags: ["JavaScript", "Node.js", "API"], year: "GitHub", href: "https://github.com/Mundurujoana/GreensKiosk-API-web-server-js" },
  { title: "VAT Calculator", description: "A VAT calculator built with HTML and JavaScript.", tags: ["HTML", "JavaScript"], year: "GitHub", href: "https://github.com/Mundurujoana/vat-calculator-javascript" },
];

// Sample entries: replace with your real experience.
export const experience: Job[] = [
  { period: "2024 – Now", role: "Frontend Developer", where: "Company A · Next.js, design systems" },
  { period: "2022 – 2024", role: "Full-stack Developer", where: "Company B · React, Node.js, MySQL" },
  { period: "2021 – 2022", role: "Junior Developer", where: "Company C · React, REST APIs" },
];
