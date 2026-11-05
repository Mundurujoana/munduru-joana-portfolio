"use client";
import { FormEvent } from "react";
import { profile } from "@/data/portfolio";

const field = "w-full rounded-xl border border-[#173f2b]/20 bg-white px-4 py-3 outline-none transition focus:border-[#e69b00] focus:ring-2 focus:ring-[#f5ad16]/20";

export default function ContactForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Portfolio inquiry from ${data.get("name")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      "",
      data.get("message"),
    ].join("\n");
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="grid gap-1 text-sm font-medium">Name<input name="name" required maxLength={100} className={field} /></label>
      <label className="grid gap-1 text-sm font-medium">Email<input name="email" type="email" required className={field} /></label>
      <label className="grid gap-1 text-sm font-medium sm:col-span-2">Message<textarea name="message" required rows={5} maxLength={2000} className={field} /></label>
      <div className="flex items-center gap-4 sm:col-span-2">
        <button className="rounded-full bg-zinc-900 px-6 py-3 font-semibold text-white transition hover:scale-105 dark:bg-white dark:text-zinc-900">
          Open email app →
        </button>
      </div>
    </form>
  );
}
