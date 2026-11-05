import { stack, profile } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";
import ProjectPreview from "./ProjectPreview";

type Project = {
  title: string;
  label: string;
  description: string;
  tags: string[];
  href?: string;
  linkText?: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "ClinicPesa Pharma Dashboard",
    label: "Pharmacy Operations",
    description:
      "Multi-branch pharmacy management: stock, purchasing, transfers, pricing, customers and expiry analytics.",
    tags: ["React 19", "TypeScript", "Redux Toolkit", "Recharts", "Kubernetes"],
    image: "/projects/clinicpesa-pharma.png",
  },
  {
    title: "Kiira Motors E-Bus Xpress",
    label: "Ticketing Platform",
    description:
      "Passengers register, buy or renew tickets and travel passes, and download receipts as PDF.",
    tags: ["React", "TypeScript", "TanStack Query", "Axios"],
    image: "/projects/ebus-xpress.png",
  },
  {
    title: "ClinicPesa Healthcare Finance",
    label: "Fintech Platform",
    description:
      "Savings, loans and medical payments for members, health facilities and businesses in one interface.",
    tags: ["React", "TypeScript", "Vite", "Redux Toolkit"],
    image: "/projects/clinicpesa-finance.png",
  },
  {
    title: "MFM Kanyanya Website",
    label: "Church Website",
    description:
      "Mobile-first ministry site with live YouTube sermons, events, giving and an SEO-ready structure.",
    tags: ["React", "Tailwind", "Framer Motion", "YouTube API"],
    image: "/projects/mfm-kanyanya.png",
  },
  {
    title: "iGiTREE",
    label: "Cultural Platform",
    description:
      "A Rwandan heritage platform where people build family trees and preserve their identity.",
    tags: ["React", "Node.js", "Responsive"],
    href: "https://igitree.rw/",
    linkText: "Open Website",
  },
  {
    title: "Content is Queen",
    label: "Podcast Platform",
    description:
      "A podcasting platform amplifying minority voices, with creator tools and engagement features.",
    tags: ["Next.js", "Node.js", "Responsive"],
    href: "https://contentisqueen.org/",
    linkText: "Open Website",
  },
  {
    title: "Kapsule Global Health Dashboard",
    label: "Health Dashboard",
    description:
      "Testing and quality assurance for a global health dashboard: reliability, scale and smooth UX.",
    tags: ["QA", "Testing", "Dashboard"],
    href: "https://kapsule-terminal.web.app/dashboard",
    linkText: "Open Website",
  },
  {
    title: "Pharmacy POS System",
    label: "Point of Sale",
    description:
      "Sales tracking and inventory management for pharmacies that raised operational efficiency by 18%.",
    tags: ["React", "Node.js", "Firebase"],
    href: "https://github.com/Mundurujoana/Pharm-POS-System",
    linkText: "View on GitHub",
    image: "/projects/pharm-pos.png",
  },
  {
    title: "Health Facility Map",
    label: "Data Visualisation",
    description:
      "Interactive Leaflet map of districts and health facilities with filters and live statistics.",
    tags: ["React", "Leaflet", "REST API"],
    href: "https://github.com/Mundurujoana/viebeg_admin_frontend",
    linkText: "View on GitHub",
    image: "/projects/health-map.png",
  },
];

function Card({ project }: { project: Project }) {
  const { title, label, description, tags, href, linkText } = project;
  const Wrapper = href ? "a" : "div";
  const wrapperProps = href
    ? {
        href,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `${title}: ${linkText ?? "Open"}`,
      }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group flex h-full min-w-0 flex-col rounded-3xl border border-[#173f2b]/10 bg-[#e1eee3] p-2.5 text-[#173f2b] shadow-[0_18px_35px_-22px_rgba(23,63,43,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_45px_-22px_rgba(23,63,43,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5ad16] sm:rounded-[2rem] sm:p-3 sm:shadow-[0_32px_60px_-20px_rgba(23,63,43,0.5),0_14px_26px_-12px_rgba(23,63,43,0.35)] sm:hover:shadow-[0_44px_80px_-20px_rgba(23,63,43,0.6),0_18px_32px_-12px_rgba(23,63,43,0.4)]"
    >
      <div className="relative aspect-[16/10] min-w-0 overflow-hidden rounded-2xl bg-[#f7f2e7] sm:rounded-[1.4rem]">
        <ProjectPreview title={title} label={label} image={project.image} />
        <span className="absolute bottom-2 left-2 max-w-[calc(100%-3.5rem)] truncate rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold text-[#173f2b] shadow-sm backdrop-blur sm:bottom-3 sm:left-3 sm:px-3.5 sm:py-1.5 sm:text-sm">
          {label}
        </span>
        {href && (
          <span
            aria-hidden
            className="absolute bottom-2 right-2 grid h-8 w-8 place-items-center rounded-full bg-[#173f2b] text-sm text-white transition-colors group-hover:bg-[#f5ad16] group-hover:text-[#173f2b] sm:bottom-3 sm:right-3 sm:h-10 sm:w-10 sm:text-lg"
          >
            ↗
          </span>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col px-2.5 pb-2 pt-4 sm:px-4 sm:pb-3 sm:pt-5">
        <h3 className="break-words text-xl font-extrabold tracking-tight sm:text-2xl">
          {title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#173f2b]/70 sm:text-base sm:leading-7">
          {description}
        </p>
        <ul className="mb-5 mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-white/80 px-2.5 py-1 text-xs font-medium text-[#173f2b] sm:px-3 sm:text-sm"
            >
              {tag}
            </li>
          ))}
        </ul>
        {href && (
          <div className="mt-auto flex items-center justify-between border-t border-[#173f2b]/15 pt-4">
            <span className="font-bold">View Live Project</span>
            <span className="font-semibold text-[#a96900]">
              {linkText}{" "}
              <span
                aria-hidden
                className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </span>
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default function Projects() {
  return (
    <section id="work" aria-label="Work" className="mt-16 space-y-6 sm:mt-20">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ScrollReveal key={project.title} delay={(index % 3) * 80}>
            <Card project={project} />
          </ScrollReveal>
        ))}
      </div>

      <aside className="grid min-w-0 gap-5 rounded-3xl bg-[#f7f2e7] p-5 sm:gap-6 sm:rounded-[2rem] sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <h3 className="max-w-md text-2xl font-extrabold leading-tight tracking-tight text-[#173f2b] sm:text-3xl">
            The right tool for the right job.
          </h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {stack.map((item, i) => (
              <li
                key={item}
                className={`rounded-full px-3 py-2 text-sm font-semibold ${i < 2 ? "bg-[#173f2b] text-white" : "border border-[#173f2b]/25 text-[#173f2b]"}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-5xl font-black leading-none tracking-tight text-[#173f2b] sm:text-6xl">
          {profile.years}
          <span className="ml-2 text-lg font-semibold">years building</span>
        </p>
      </aside>
    </section>
  );
}
