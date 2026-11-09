"use client";
import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [done, setDone] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setDone(true);
      setTimeout(() => setDone(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }
  return (
    <button
      onClick={copy}
      className="mt-4 w-full rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:scale-105 dark:bg-white dark:text-zinc-900"
    >
      {done ? "Copied ✓" : "Copy email"}
    </button>
  );
}
