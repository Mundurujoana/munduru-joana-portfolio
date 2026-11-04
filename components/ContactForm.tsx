"use client";
import { FormEvent, useEffect, useState } from "react";

type Status = "idle" | "sending" | "sent" | "error" | "not_configured";
const field = "w-full rounded-xl border border-[#173f2b]/20 bg-white px-4 py-3 outline-none transition focus:border-[#e69b00] focus:ring-2 focus:ring-[#f5ad16]/20";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (status !== "not_configured") return;
    const timeout = window.setTimeout(() => setStatus("idle"), 6000);
    return () => window.clearTimeout(timeout);
  }, [status]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (data.website) return; // honeypot
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (res.status === 503) {
        setStatus("not_configured");
        return;
      }
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("sent");
    } catch { setStatus("error"); }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="grid gap-1 text-sm font-medium">Name<input name="name" required maxLength={100} className={field} /></label>
      <label className="grid gap-1 text-sm font-medium">Email<input name="email" type="email" required className={field} /></label>
      <label className="grid gap-1 text-sm font-medium sm:col-span-2">Message<textarea name="message" required rows={5} maxLength={2000} className={field} /></label>
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="flex items-center gap-4 sm:col-span-2">
        <button disabled={status === "sending"} className="rounded-full bg-zinc-900 px-6 py-3 font-semibold text-white transition hover:scale-105 disabled:opacity-60 dark:bg-white dark:text-zinc-900">
          {status === "sending" ? "Sending…" : "Send message →"}
        </button>
        <p role="status" className="text-sm">
          {status === "sent" && <span className="text-[#173f2b]">Thanks! I’ll reply within a day.</span>}
          {status === "error" && <span className="text-[#a33b2b]">Something went wrong. Please email me directly.</span>}
        </p>
      </div>
      {status === "not_configured" && (
        <div
          role="alert"
          className="fixed bottom-5 right-5 z-50 flex max-w-sm items-start gap-4 rounded-xl border border-[#f5ad16] bg-white p-4 text-sm text-[#173f2b] shadow-xl"
        >
          <p>Email delivery isn’t set up yet. Please email me directly.</p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            aria-label="Dismiss notification"
            className="ml-auto font-semibold text-[#a96900] hover:text-[#173f2b]"
          >
            ×
          </button>
        </div>
      )}
    </form>
  );
}
