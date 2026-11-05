import { profile } from "@/data/portfolio";
import { Magnetic } from "./Effects";

const links = ["work", "about", "contact"];
const label = (id: string) => (id === "work" ? "Projects" : id);
const linkCls =
  "rounded-full px-3 py-1.5 capitalize text-white/80 transition hover:bg-white/10 hover:text-[#f5ad16]";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 px-3 pt-2 sm:px-4 sm:pt-3">
      <div className="header-pill mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-y-2 rounded-3xl bg-[#173f2b] px-4 py-2.5 text-white shadow-lg sm:flex-nowrap sm:gap-y-0 sm:rounded-full sm:px-7 sm:py-3">
        <a
          href="#top"
          className="group flex items-center gap-2 font-semibold tracking-tight"
        >
          <span className="grid h-7 w-7 place-items-center rounded-full bg-[#f5ad16] text-sm font-black text-[#173f2b] transition-transform duration-500 group-hover:rotate-[360deg]">
            M
          </span>
          {profile.handle}
          <span className="-ml-2 text-[#f5ad16]">.dev</span>
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 text-sm sm:flex"
        >
          {links.map((id) => (
            <a key={id} href={`#${id}`} className={linkCls}>
              {label(id)}
            </a>
          ))}
        </nav>

        <Magnetic strength={0.2}>
          <a
            href="#contact"
            className="btn-shine inline-block rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-[#173f2b] transition hover:bg-[#f5ad16] sm:px-4 sm:text-sm"
          >
            Reach out
          </a>
        </Magnetic>

        <nav
          aria-label="Mobile navigation"
          className="flex w-full items-center justify-between border-t border-white/15 pt-2 text-xs sm:hidden"
        >
          {links.map((id) => (
            <a key={id} href={`#${id}`} className={linkCls}>
              {label(id)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
