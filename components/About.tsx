import { experience, profile } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" aria-label="About" className="mt-2">
      <ScrollReveal className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#a96900]">
            A little context
          </p>
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
          About &amp; experience · 01—03
        </span>
      </ScrollReveal>

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <ScrollReveal>
          <article className="relative flex h-full min-h-[360px] flex-col justify-between overflow-hidden rounded-[2rem] border border-[#173f2b]/10 bg-[#f7f2e7] p-7 text-[#173f2b] sm:p-10">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-7 top-16 font-serif text-[15rem] font-black leading-none text-[#173f2b]/[0.04]"
            >
              “
            </span>
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#173f2b]/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-[#173f2b]/70">
                <i className="h-1.5 w-1.5 rounded-full bg-[#f5ad16]" /> Curious
                by nature
              </span>
              <h3 className="mt-8 max-w-md text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                Careful with details. Focused on the bigger picture.
              </h3>
              <p className="mt-5 max-w-lg leading-7 text-zinc-600">
                {profile.bio}
              </p>
            </div>
            <div className="relative mt-10 flex flex-wrap gap-2">
              {[
                { label: "Based in", value: profile.location },
                { label: "Local time", value: profile.timezone },
                { label: "Language", value: "English" },
              ].map((item) => (
                <span
                  key={item.label}
                  className="rounded-2xl border border-[#173f2b]/10 bg-white/70 px-4 py-3"
                >
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-zinc-500">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-sm font-medium">
                    {item.value}
                  </span>
                </span>
              ))}
            </div>
          </article>
        </ScrollReveal>

        <div className="rounded-[2rem] border border-[#173f2b]/10 bg-white p-7 sm:p-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#a96900]">
                The journey so far
              </p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#173f2b]">
                Experience
              </h3>
            </div>
            <span
              aria-hidden="true"
              className="grid h-11 w-11 place-items-center rounded-full bg-[#f5ad16]/25 text-lg text-[#173f2b]"
            >
              ↘
            </span>
          </div>
          <ol className="mt-8">
            {experience.map((job, index) => (
              <ScrollReveal key={job.period} delay={index * 100}>
                <li className="relative grid grid-cols-[1.25rem_1fr] gap-4 border-t border-[#173f2b]/10 py-5">
                  <span className="relative mt-1 flex justify-center">
                    <i
                      className={`relative z-10 h-2.5 w-2.5 rounded-full ring-4 ring-white ${index === 0 ? "bg-[#f5ad16]" : "bg-[#173f2b]/25"}`}
                    />
                    {index < experience.length - 1 && (
                      <i className="absolute top-3 h-full w-px bg-[#173f2b]/10" />
                    )}
                  </span>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <div>
                      <h4 className="font-bold text-[#173f2b]">{job.role}</h4>
                      <p className="mt-1 text-sm text-zinc-600">{job.where}</p>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#a96900]">
                      {job.period}
                    </span>
                  </div>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
