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
      className="advanced-card group flex h-full min-w-0 flex-col rounded-[2rem] border border-[#173f2b]/15 bg-gradient-to-b from-white to-[#f7f2e7]/70 p-3 text-[#173f2b] shadow-[0_20px_40px_-20px_rgba(23,63,43,0.25)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#f5ad16]/60 hover:shadow-[0_35px_60px_-20px_rgba(23,63,43,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5ad16] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-4"
    >
      <div className="relative aspect-[16/10] min-w-0 overflow-hidden rounded-[1.5rem] bg-[#f7f2e7] shadow-inner">
        {/* Image zooms slowly on hover */}
        <div className="h-full w-full transition-transform duration-700 group-hover:scale-110 motion-reduce:transition-none">
          <ProjectPreview title={title} label={label} image={project.image} />
        </div>

        {/* Shine sweep */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100"
        />

        <span className="absolute bottom-3 left-3 max-w-[calc(100%-4rem)] truncate rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-bold shadow-md backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1">
          {label}
        </span>

        {href && (
          <span
            aria-hidden
            className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-[#173f2b] text-sm text-white shadow-lg transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#f5ad16] group-hover:text-[#173f2b]"
          >
            ↗
          </span>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col px-3 pb-3 pt-5 sm:px-5 sm:pb-4 sm:pt-6">
        {/* Title with animated underline */}
        <h3 className="relative w-fit break-words text-xl font-black tracking-tight transition-colors group-hover:text-[#a96900] sm:text-2xl">
          {title}
          <span
            aria-hidden
            className="absolute -bottom-1 left-0 h-[3px] w-full origin-left scale-x-0 rounded-full bg-[#f5ad16] transition-transform duration-500 group-hover:scale-x-100"
          />
        </h3>

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-zinc-600 sm:text-base">
          {description}
        </p>

        {/* Tags hop up one after another */}
        <ul className="mb-6 mt-5 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <li
              key={tag}
              style={{ transitionDelay: `${i * 40}ms` }}
              className="rounded-full border border-[#173f2b]/10 bg-white/80 px-3 py-1 font-mono text-[10px] uppercase tracking-wider shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[#f5ad16]"
            >
              {tag}
            </li>
          ))}
        </ul>

        {href && (
          <div className="mt-auto flex items-center justify-between border-t border-[#173f2b]/10 pt-4 font-mono text-xs uppercase tracking-wider">
            <span className="flex items-center gap-2 font-bold">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Live Preview
            </span>
            <span className="flex items-center gap-1 font-bold text-[#a96900]">
              {linkText}
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              >
                →
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
    <section id="work" aria-label="Work" className="mt-16 space-y-8 sm:mt-24">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ScrollReveal key={project.title} delay={(index % 3) * 80}>
            <Card project={project} />
          </ScrollReveal>
        ))}
      </div>

      {/* Footer Banner */}
      <aside className="relative overflow-hidden rounded-[2.5rem] border border-[#173f2b]/15 bg-gradient-to-br from-[#f7f2e7] via-[#f0e7d5] p-6 shadow-[0_20px_50px_-20px_rgba(23,63,43,0.2)] sm:p-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-8">
        <div className="relative z-10">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#a96900]">
            Engineering standards
          </span>
          <h3 className="mt-2 max-w-lg text-2xl font-black tracking-tight text-[#173f2b] sm:text-3xl">
            The right tool for the right job.
          </h3>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {stack.map((item, i) => (
              <li
                key={item}
                className={`rounded-full px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 ${
                  i < 2
                    ? "bg-[#173f2b] text-white shadow-md"
                    : "border border-[#173f2b]/20 bg-white/70 text-[#173f2b] backdrop-blur-sm"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-10 mt-6 flex items-baseline gap-2 border-t border-[#173f2b]/10 pt-6 lg:mt-0 lg:border-t-0 lg:pt-0">
          <p className="text-5xl font-black tracking-tighter text-[#173f2b] sm:text-6xl">
            {profile.years}
          </p>
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-600">
            years building
          </span>
        </div>
      </aside>
    </section>
  );
}
