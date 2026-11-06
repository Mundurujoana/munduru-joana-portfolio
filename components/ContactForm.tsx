"use client";
import { FormEvent, useState } from "react";

const field =
  "w-full rounded-xl border border-[#173f2b]/20 bg-white px-4 py-3 outline-none transition focus:border-[#e69b00] focus:ring-2 focus:ring-[#f5ad16]/20";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(result.error ?? "Your message could not be sent.");
      }

      form.reset();
      setStatus("success");
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Something went wrong. Please try again.",
      );
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="grid gap-1 text-sm font-medium">
        Full name
        <input
          name="name"
          autoComplete="name"
          required
          maxLength={100}
          className={field}
        />
      </label>
      <label className="grid gap-1 text-sm font-medium">
        Email address
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
          className={field}
        />
      </label>
      <label className="grid gap-1 text-sm font-medium sm:col-span-2">
        Subject
        <input name="subject" required maxLength={150} className={field} />
      </label>
      <label className="grid gap-1 text-sm font-medium sm:col-span-2">
        Message
        <textarea name="message" required rows={5} maxLength={5000} className={field} />
      </label>
      <div
        aria-hidden="true"
        className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
      >
        <label>
          Leave this field empty
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="flex items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-[#173f2b] px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-[#245a3d] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Send message →"}
        </button>
        {status === "success" && (
          <p role="status" className="text-sm text-[#173f2b]">
            Thanks — your message has been sent.
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="text-sm text-red-700">
            {error}
          </p>
        )}
      </div>
    </form>
  );
}
