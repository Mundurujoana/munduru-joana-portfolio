import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import { profile } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        <Hero />
        <About />
        <Projects />

        <ScrollReveal>
          <section
            id="contact"
            className="scroll-mt-32 relative mb-5 mt-16 overflow-hidden rounded-3xl border border-[#173f2b]/10 bg-[#f7f2e7] p-5 text-[#173f2b] sm:mb-6 sm:mt-24 sm:scroll-mt-24 sm:rounded-[2rem] sm:p-10 lg:p-12"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-[#173f2b]/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -top-20 h-56 w-56 rounded-full border border-[#173f2b]/10"
            />
            <div className="relative grid min-w-0 gap-6 sm:gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#a96900]">
                  Have a good one in mind?
                </p>
                <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:mt-4 sm:text-5xl">
                  Let’s build something.
                </h2>
                <p className="mt-4 max-w-sm leading-7 text-zinc-600">
                  Tell me what you’re making and when it needs to ship. The
                  form opens a message in your email app.
                </p>
                <p className="mt-8 font-mono text-xs uppercase tracking-widest text-zinc-500">
                  Currently based in {profile.location}
                </p>
              </div>
              <div className="min-w-0 rounded-2xl bg-[#fffefa] p-4 text-[#24251f] sm:rounded-3xl sm:p-7">
                <ContactForm />
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>
      <footer className="mx-auto mt-8 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-[#173f2b]/10 px-4 py-5 text-xs text-zinc-500 sm:mt-12 sm:flex-row sm:gap-4 sm:px-6 sm:py-6 sm:text-sm">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <nav aria-label="Footer links" className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#173f2b]"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#173f2b]"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="transition hover:text-[#173f2b]"
          >
            Email
          </a>
        </nav>
      </footer>
    </>
  );
}
