"use client";

import type { MouseEvent } from "react";
import {
  education,
  experience,
  profile,
  projects,
  softSkills,
  stack,
} from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";

// Every number comes from data/portfolio.ts, so it always matches the site.
const stats = [
  { label: "Years building", value: profile.years },
  { label: "Projects on GitHub", value: String(projects.length) },
  { label: "Companies", value: String(experience.length) },
];

const meta = [
  { label: "Based in", value: profile.location },
  { label: "Local time", value: profile.timezone },
  { label: "Language", value: "English" },
];

type TimelineEntry = {
  key: string;
  period: string;
  title: string;
  org: string;
  detail: string;
};

// "Kapsule · Contract · Kigali" -> org "Kapsule", detail "Contract · Kigali"
const toEntry = (
  key: string,
  period: string,
  title: string,
  where: string,
): TimelineEntry => {
  const [org, ...rest] = where.split(" · ");
  return { key, period, title, org, detail: rest.join(" · ") };
};

const work = experience.map((j) =>
  toEntry(j.period, j.period, j.role, j.where),
);
const study = education.map((e) =>
  toEntry(e.award, e.period, e.award, e.school),
);

function Timeline({
  items,
  highlightFirst = false,
}: {
  items: TimelineEntry[];
  highlightFirst?: boolean;
}) {
  return (
    <ol>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        const isCurrent = highlightFirst && i === 0;

        return (
          <li key={item.key} className="relative pl-9 pb-7 last:pb-0">
            {/* Connector: centred on the dot (dot centre = 10px) */}
            {!isLast && (
              <span
                aria-hidden="true"
                className="absolute left-[9px] top-[1.6rem] -bottom-1 w-0.5 rounded-full bg-[#173f2b]/15"
              />
            )}

            {/* Dot */}
            <span
              aria-hidden="true"
              className="absolute left-0 top-[0.3rem] grid h-5 w-5 place-items-center"
            >
              {isCurrent && (
                <span className="absolute h-5 w-5 animate-ping rounded-full bg-[#f5ad16]/40" />
              )}
              <i
                className={`relative h-3 w-3 rounded-full ring-4 ring-white ${
                  isCurrent ? "bg-[#f5ad16]" : "bg-[#173f2b]/30"
                }`}
              />
            </span>

            <ScrollReveal>
              <p className="font-mono text-[10px] uppercase tracking-wider text-[#a96900]">
                {item.period}
              </p>
              <h4 className="mt-1 font-bold leading-snug text-[#173f2b]">
                {item.title}
              </h4>
              <p className="mt-0.5 text-sm font-semibold text-zinc-700">
                {item.org}
              </p>
              {item.detail && (
                <p className="mt-0.5 break-words text-sm leading-relaxed text-zinc-500">
                  {item.detail}
                </p>
              )}
            </ScrollReveal>
          </li>
        );
      })}
    </ol>
  );
}

export default function About() {
  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="about"
      aria-label="About"
      className="mt-6 scroll-mt-32 sm:scroll-mt-24"
    >
      {/* items-start: columns size to their own content, so no empty gaps */}
      <div className="grid min-w-0 items-start gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left: bio, stats, meta. Stays in view while the timeline scrolls */}
        <ScrollReveal className="lg:sticky lg:top-28">
          <article
            onMouseMove={handleMouseMove}
            className="card group relative overflow-hidden rounded-3xl border border-[#173f2b]/15 bg-gradient-to-br from-[#f7f2e7] to-[#f0e7d5] p-6 text-[#173f2b] shadow-[0_20px_40px_-15px_rgba(23,63,43,0.15)] transition-shadow duration-500 hover:shadow-[0_30px_60px_-20px_rgba(23,63,43,0.25)] sm:rounded-[2.5rem] sm:p-10"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 top-12 font-serif text-[10rem] font-black leading-none text-[#173f2b]/[0.03] sm:text-[14rem]"
            >
              “
            </span>

            <div className="relative z-10">
              <h3 className="text-2xl font-black tracking-tight text-[#173f2b]">
                Who I am
              </h3>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-700 sm:text-base sm:leading-7">
                {profile.bio}
              </p>
            </div>

            {/* Stats: 3 equal cards, value on top, label below */}
            <dl className="relative z-10 mt-8 grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col justify-between gap-2 rounded-2xl border border-[#173f2b]/10 bg-white/80 p-3.5 backdrop-blur-md sm:p-4"
                >
                  <dd className="order-1 text-2xl font-black tracking-tight text-[#173f2b] sm:text-3xl">
                    {s.value}
                  </dd>
                  <dt className="order-2 font-mono text-[9px] uppercase leading-snug tracking-widest text-zinc-500">
                    {s.label}
                  </dt>
                </div>
              ))}
            </dl>

            {/* Meta: one strip with dividers. Location gets more width, no truncation */}
            <dl className="relative z-10 mt-3 grid grid-cols-[1.4fr_1fr_1fr] divide-x divide-[#173f2b]/10 rounded-2xl border border-[#173f2b]/10 bg-white/80 backdrop-blur-md">
              {meta.map((item) => (
                <div key={item.label} className="min-w-0 px-3.5 py-3 sm:px-4">
                  <dt className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-xs font-semibold leading-snug text-[#173f2b] sm:text-sm">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        </ScrollReveal>

        {/* Right: stack, experience, education */}
        <ScrollReveal className="min-w-0">
          <div
            onMouseMove={handleMouseMove}
            className="card relative min-w-0 overflow-hidden rounded-3xl border border-[#173f2b]/15 bg-white p-6 shadow-[0_20px_40px_-15px_rgba(23,63,43,0.15)] transition-shadow duration-500 hover:shadow-[0_30px_60px_-20px_rgba(23,63,43,0.25)] sm:rounded-[2.5rem] sm:p-10"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-black tracking-tight text-[#173f2b]">
                Experience &amp; education
              </h3>
              <p className="mt-1 text-sm text-zinc-500">
                Tools I use, and where I&apos;ve used them.
              </p>
            </div>

            <ul
              className="relative z-10 mt-6 flex flex-wrap gap-2"
              aria-label="Tech stack"
            >
              {stack.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-[#173f2b]/10 bg-[#f7f2e7] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-[#173f2b] transition-colors duration-300 hover:border-[#e69b00] hover:bg-[#f5ad16]/25"
                >
                  {s}
                </li>
              ))}
            </ul>

            <div className="relative z-10 mt-6">
              <h4 className="text-sm font-bold text-[#173f2b]">Soft skills</h4>
              <ul
                className="mt-3 flex flex-wrap gap-2"
                aria-label="Soft skills"
              >
                {softSkills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-[#173f2b]/10 bg-white px-3.5 py-1.5 text-xs text-zinc-600"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 mt-8 border-t border-[#173f2b]/10 pt-6">
              <h4 className="mb-5 text-lg font-bold tracking-tight text-[#173f2b]">
                Work
              </h4>
              <Timeline items={work} highlightFirst />
            </div>

            <div className="relative z-10 mt-8 border-t border-[#173f2b]/10 pt-6">
              <h4 className="mb-5 text-lg font-bold tracking-tight text-[#173f2b]">
                Education
              </h4>
              <Timeline items={study} />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
