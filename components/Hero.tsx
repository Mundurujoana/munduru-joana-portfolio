import Image from "next/image";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="top"
      className="grid items-stretch gap-8 pb-2 pt-12 sm:pb-2 sm:pt-16 md:grid-cols-2 md:gap-12"
    >
      <div className="order-1 flex flex-col md:order-1">
        <h1 className="max-w-2xl animate-fadeup text-4xl font-extrabold leading-[1.05] tracking-tight [animation-delay:100ms] sm:text-5xl lg:text-6xl">
          I’m <span className="text-[#e69b00]">{profile.name},</span>
          <br />
          Software Developer
          <br />
          based in {profile.location.split(",")[0]}.
        </h1>
        <p className="mt-5 max-w-lg animate-fadeup text-base leading-7 text-zinc-600 [animation-delay:200ms] sm:text-lg">
          {profile.intro}
        </p>
        <div
          className="mt-4 flex animate-fadeup items-center gap-2 [animation-delay:400ms]"
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

      <div className="group relative -top-14 order-2 mx-auto aspect-[5/6] w-full max-w-[420px] animate-fadeup [animation-delay:300ms] md:order-2">
        <span
          aria-hidden="true"
          className="absolute left-[8%] top-[7%] h-3 w-3 rotate-45 border-2 border-[#e69b00] transition-transform duration-500 group-hover:rotate-[135deg]"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-[8%] right-[8%] h-12 w-12 rounded-full bg-[#f5ad16]/40 blur-sm transition-transform duration-700 group-hover:scale-125"
        />

        <div className="absolute inset-[7%] rounded-[2.5rem] bg-gradient-to-br from-[#f5ad16] via-[#e69b00] to-[#173f2b] p-[3px] shadow-[0_28px_70px_-28px_rgba(23,63,43,0.5)] transition-transform duration-700 ease-out group-hover:rotate-1 group-hover:scale-[1.02]">
          <div className="h-full w-full overflow-hidden rounded-[calc(2.5rem-3px)] bg-[#f7f2e7]">
            <Image
              src="/profile.jpg"
              alt={`${profile.name}, software developer`}
              width={600}
              height={600}
              priority
              sizes="(max-width: 768px) 85vw, 360px"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>

        <div className="absolute left-0 top-[23%] z-20 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/95 p-3 pr-5 shadow-[0_18px_40px_-18px_rgba(23,63,43,0.3)] backdrop-blur transition-transform duration-500 ease-out group-hover:-translate-y-2 sm:left-[-2%] sm:p-4 sm:pr-6">
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

        <div className="absolute bottom-[18%] right-0 z-20 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/95 p-3 pr-5 shadow-[0_18px_40px_-18px_rgba(23,63,43,0.3)] backdrop-blur transition-transform duration-500 ease-out group-hover:translate-y-2 sm:right-[-2%] sm:p-4 sm:pr-6">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#173f2b]/10 text-lg font-black text-[#173f2b]">
            ✳
          </span>
          <span>
            <strong className="block text-sm text-[#173f2b]">Next.js</strong>
            <span className="mt-0.5 block text-xs text-zinc-500">
              Modern web apps
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
