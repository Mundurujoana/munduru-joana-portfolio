"use client";

import type { PointerEvent, ReactNode } from "react";

export function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="blob absolute -left-32 -top-32 h-[30rem] w-[30rem] rounded-full bg-[#f5ad16]/20 blur-[110px]" />
      <div className="blob blob-b absolute -right-32 top-1/3 h-[34rem] w-[34rem] rounded-full bg-[#2f9e5f]/15 blur-[120px]" />
      <div className="blob blob-c absolute -bottom-40 left-1/4 h-[30rem] w-[30rem] rounded-full bg-[#e69b00]/15 blur-[110px]" />
      <div className="dots absolute inset-0" />
    </div>
  );
}

export function GlobalEffects() {
  return (
    <div
      aria-hidden
      className="progress fixed left-0 top-0 z-50 h-[3px] w-full bg-gradient-to-r from-[#f5ad16] via-[#e69b00] to-[#173f2b]"
    />
  );
}

export function Tilt({
  children,
  className = "",
  max = 8,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const move = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.transform = `perspective(900px) rotateX(${(0.5 - y / r.height) * max}deg) rotateY(${(x / r.width - 0.5) * max}deg)`;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };
  const leave = (e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "";
  };
  return (
    <div
      onPointerMove={move}
      onPointerLeave={leave}
      className={`tilt ${className}`}
    >
      {children}
    </div>
  );
}

export function Magnetic({
  children,
  strength = 0.3,
}: {
  children: ReactNode;
  strength?: number;
}) {
  const move = (e: PointerEvent<HTMLSpanElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) * strength;
    const dy = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  };
  const leave = (e: PointerEvent<HTMLSpanElement>) => {
    e.currentTarget.style.transform = "";
  };
  return (
    <span
      onPointerMove={move}
      onPointerLeave={leave}
      className="magnetic inline-block"
    >
      {children}
    </span>
  );
}
