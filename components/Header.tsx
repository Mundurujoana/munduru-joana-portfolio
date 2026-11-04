import { profile } from "@/data/portfolio";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 px-4 pt-3">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-[#173f2b] px-5 py-3 text-white shadow-lg sm:px-7">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-[#f5ad16] text-sm font-black text-[#173f2b]">M</span>
          {profile.handle}<span className="-ml-2 text-[#f5ad16]">.dev</span>
        </a>
        <nav className="hidden gap-7 text-sm text-white/80 sm:flex">
          {["work", "about", "connect", "contact"].map((id) => (
            <a key={id} href={`#${id}`} className="capitalize transition hover:text-[#f5ad16]">{id === "work" ? "Projects" : id === "connect" ? "Connect" : id}</a>
          ))}
        </nav>
        <a href="#contact" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#173f2b] transition hover:bg-[#f5ad16]">Reach out</a>
      </div>
    </header>
  );
}
