"use client";
import type { PointerEvent, ReactNode } from "react";
import { useScrollReveal } from "./ScrollReveal";

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  delay?: number;
};

export default function SpotlightCard({
  children,
  className = "",
  href,
  delay = 0,
}: Props) {
  const revealRef = useScrollReveal<HTMLElement>();
  const move = (e: PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  const cls = `card scroll-reveal group rounded-3xl border border-[#173f2b]/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg hover:shadow-[#173f2b]/10 ${className}`;
  return href ? (
    <a
      ref={revealRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onPointerMove={move}
      className={cls}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </a>
  ) : (
    <div
      ref={revealRef}
      onPointerMove={move}
      className={cls}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
