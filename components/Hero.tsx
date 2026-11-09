import Image from "next/image";
import { profile } from "@/data/portfolio";
import { Magnetic, Tilt } from "./Effects";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative grid items-start gap-8 overflow-x-clip pb-6 pt-8 sm:pb-4 sm:pt-12 lg:grid-cols-2 lg:items-stretch lg:gap-12 lg:pb-2 lg:pt-16"
    >
      <div className="order-1 flex flex-col md:order-1 lg:-translate-y-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex w-fit animate-fadeup items-center gap-2 rounded-full border border-[#173f2b]/15 bg-white/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-[#173f2b]/80 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2f9e5f] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2f9e5f]" />
            </span>
            Open to new projects
          </span>
          <a
            href={profile.cv}
            className="inline-flex animate-fadeup items-center gap-1.5 rounded-full bg-[#173f2b] px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:bg-[#245a3d]"
          >
            View my CV
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <h1 className="mt-5 max-w-2xl animate-fadeup text-[clamp(2.5rem,7vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight [animation-delay:100ms]">
          I’m <span className="text-[#173f2b]">{profile.name},</span>
          <br />
          <span className="text-[#a96900]">Frontend Developer</span>
          <br />
          based in{" "}
          <span className="text-[#173f2b]">
            {profile.location.split(",")[0]}.
          </span>
        </h1>

        <p className="mt-5 max-w-lg animate-fadeup leading-7 text-zinc-600 [animation-delay:200ms]">
          I build responsive React and Next.js interfaces, and turn data into
          dashboards teams can act on.
        </p>

        <div
          className="mt-5 flex animate-fadeup items-center gap-2 [animation-delay:400ms]"
          aria-label="Social links"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-full border border-[#173f2b]/15 bg-[#173f2b]/5 text-[#173f2b] transition hover:-translate-y-1 hover:bg-[#173f2b] hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5 fill-current"
            >
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .1.75 2.63 3.78 1.89.1-.73.39-1.22.7-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.43 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.61 5.23-5.1 5.5.4.35.75 1.02.75 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-full border border-[#173f2b]/15 bg-[#f5ad16]/20 text-base font-black text-[#173f2b] transition hover:-translate-y-1 hover:bg-[#173f2b] hover:text-white"
          >
            in
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-full border border-[#173f2b]/15 bg-[#e69b00]/10 text-[#173f2b] transition hover:-translate-y-1 hover:bg-[#173f2b] hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5 fill-none stroke-current"
              strokeWidth="1.8"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m4 7 8 6 8-6" />
            </svg>
          </a>
        </div>
      </div>

      <div className="relative order-2 mx-auto w-full max-w-[360px] animate-fadeup [animation-delay:300ms] sm:max-w-[400px] lg:-top-14 lg:-mb-14 lg:order-2 lg:max-w-[420px]">
        <Tilt max={9}>
          <div className="group relative aspect-[5/6]">
            {/* Orbiting glow dots (behind the photo) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[108%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#173f2b]/10 sm:w-[122%]"
            >
              <div className="orbit h-full w-full">
                <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5ad16] shadow-[0_0_18px_4px_rgba(245,173,22,0.7)]" />
                <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#2f9e5f] shadow-[0_0_14px_3px_rgba(47,158,95,0.6)]" />
                <span className="absolute left-0 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e69b00] shadow-[0_0_14px_3px_rgba(230,155,0,0.6)]" />
              </div>
            </div>

            {/* Pulsing rings */}
            <span
              aria-hidden="true"
              className="ring-pulse pointer-events-none absolute inset-[7%] rounded-[2.5rem] border-2 border-[#f5ad16]/50"
            />
            <span
              aria-hidden="true"
              className="ring-pulse pointer-events-none absolute inset-[7%] rounded-[2.5rem] border-2 border-[#f5ad16]/50 [animation-delay:1.6s]"
            />

            <span
              aria-hidden="true"
              className="absolute left-[8%] top-[7%] h-3 w-3 rotate-45 border-2 border-[#e69b00] transition-transform duration-500 group-hover:rotate-[135deg]"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-[8%] right-[8%] h-12 w-12 rounded-full bg-[#f5ad16]/40 blur-sm transition-transform duration-700 group-hover:scale-125"
            />

            <div
              aria-hidden="true"
              className="spin-border absolute inset-[6%] rounded-[2.5rem] opacity-60 blur-2xl"
            />
            <div className="spin-border absolute inset-[7%] rounded-[2.5rem] p-[3px] shadow-[0_28px_70px_-28px_rgba(23,63,43,0.5)]">
              <div className="h-full w-full overflow-hidden rounded-[calc(2.5rem-3px)] bg-[#f7f2e7]">
                <Image
                  src="/profile.jpg"
                  alt={`${profile.name}, frontend developer`}
                  width={600}
                  height={600}
                  priority
                  sizes="(max-width: 768px) 85vw, 360px"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>

            <div className="float absolute left-0 top-[23%] z-20 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/95 p-3 pr-5 shadow-[0_18px_40px_-18px_rgba(23,63,43,0.35)] backdrop-blur sm:left-[-4%] sm:p-4 sm:pr-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#f5ad16]/20 text-lg font-black text-[#a96900]">
                R
              </span>
              <span>
                <strong className="block text-sm text-[#173f2b]">React</strong>
                <span className="mt-0.5 block text-xs text-zinc-500">
                  Interactive UI
                </span>
              </span>
            </div>

            <div
              className="float absolute bottom-[18%] right-0 z-20 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/95 p-3 pr-5 shadow-[0_18px_40px_-18px_rgba(23,63,43,0.35)] backdrop-blur sm:right-[-4%] sm:p-4 sm:pr-6"
              style={{ animationDelay: "-3s" }}
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#173f2b]/10 text-lg font-black text-[#173f2b]">
                ✳
              </span>
              <span>
                <strong className="block text-sm text-[#173f2b]">
                  Next.js
                </strong>
                <span className="mt-0.5 block text-xs text-zinc-500">
                  Modern web apps
                </span>
              </span>
            </div>

            <div
              className="float absolute right-[2%] top-[12%] z-20 flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-3 py-2 text-[#173f2b] shadow-[0_12px_28px_-16px_rgba(23,63,43,0.4)] backdrop-blur sm:right-[-2%]"
              style={{ animationDelay: "-4.5s" }}
            >
              <span className="rounded-full bg-[#f5ad16]/20 px-2 py-1 font-mono text-[9px] font-bold tracking-wide text-[#a96900]">
                API
              </span>
              <span className="text-xs font-semibold">
                REST &amp; integrations
              </span>
            </div>

            <div className="float absolute left-[-38%] top-[43%] z-20 hidden items-center gap-3 rounded-2xl border border-white/70 bg-white/95 p-3 pr-5 text-[#173f2b] shadow-[0_18px_40px_-18px_rgba(23,63,43,0.3)] backdrop-blur lg:flex">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#173f2b]/10 font-mono text-sm font-bold text-[#173f2b]">
                TS
              </span>
              <span>
                <strong className="block text-sm">TypeScript</strong>
                <span className="mt-0.5 block text-xs text-zinc-500">
                  Agile teamwork
                </span>
              </span>
            </div>

            <div
              className="float absolute bottom-[6%] left-[4%] z-20 rounded-2xl bg-[#173f2b] px-4 py-2.5 text-white shadow-xl"
              style={{ animationDelay: "-1.5s" }}
            >
              <span className="text-xl font-black text-[#f5ad16]">
                {profile.years}
              </span>
              <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-white/70">
                years
              </span>
            </div>
          </div>
        </Tilt>
      </div>

      {/* Bridge into About */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="order-3 col-span-full font-bold flex flex-col uppercase items-center gap-2 text-[25px] text-[#173f2b] transition-colors hover:text-[#173f2b]"
      >
        About me
        <span className="relative h-12 w-0.5 overflow-hidden rounded-full bg-[#173f2b]/15">
          <span className="scroll-dot absolute left-0 top-0 h-4 w-0.5 rounded-full bg-[#f5ad16]" />
        </span>
      </a>
    </section>
  );
}
