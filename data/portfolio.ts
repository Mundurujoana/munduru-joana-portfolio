export type Project = {
  title: string;
  description: string;
  tags: string[];
  year: string;
  href?: string;
  result?: string;
  featured?: boolean;
};

export type Job = { period: string; role: string; where: string };

export type Education = {
  period: string;
  award: string;
  school: string;
};

export const profile = {
  name: "Munduru Joana",
  handle: "munduru",
  role: "Frontend developer & data analyst",
  tagline: "interfaces people enjoy, data they can act on.",
  bio: "I'm a frontend developer who builds responsive interfaces with React, Next.js and TypeScript, styled with Tailwind CSS. At clinicPesa in Kampala, I turn designs into reusable components and pages that are clear to use on any screen. My two and a half years at Kapsule in Kigali as a software developer and data analyst taught me to design around the data behind the interface, so what people see is useful as well as polished.",
  location: "Kampala, Uganda",
  timezone: "GMT+3",
  email: "mundujoana@gmail.com",
  linkedin: "https://www.linkedin.com/in/munduru-joana/",
  github: "https://github.com/Mundurujoana",
  cv: "/docs/Munduru-Joana-CV.pdf",
  years: "3+",
};

export const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "SQL",
  "MySQL",
  "Power BI",
  "Looker Studio",
  "Tailwind CSS",
];

export const softSkills = [
  "Agile teamwork",
  "Communication",
  "Collaboration",
  "Adaptability",
  "Problem-solving",
];

export const projects: Project[] = [
  {
    title: "GreensKiosk API",
    description: "A web server API built in JavaScript.",
    tags: ["JavaScript", "Node.js", "API"],
    year: "GitHub",
    href: "https://github.com/Mundurujoana/GreensKiosk-API-web-server-js",
  },
  {
    title: "VAT Calculator",
    description: "A VAT calculator built with HTML and JavaScript.",
    tags: ["HTML", "JavaScript"],
    year: "GitHub",
    href: "https://github.com/Mundurujoana/vat-calculator-javascript",
  },
];

export const experience: Job[] = [
  {
    period: "Nov 2025 – Now",
    role: "React Frontend Developer",
    where: "clinicPesa · Full-time · Kampala, Uganda",
  },
  {
    period: "Apr 2023 – Oct 2025",
    role: "Software Developer / Data System Analyst",
    where:
      "Kapsule · Contract · Kigali, Rwanda (Hybrid) · SQL, Power BI, Python, Looker Studio",
  },
];

export const education: Education[] = [
  {
    period: "2024",
    award: "Diploma, Information Technology",
    school: "AkiraChix · Backend, frontend & UI/UX design",
  },
  {
    period: "2020 – 2023",
    award: "Bachelor's degree, Information Technology",
    school: "Kyambogo University",
  },
];
