"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createBrowserClient } from "@supabase/ssr";

const field =
  "w-full rounded-xl border border-[#173f2b]/20 bg-white px-4 py-3 outline-none transition focus:border-[#e69b00] focus:ring-2 focus:ring-[#f5ad16]/20";

function createSupabaseBrowserClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    throw new Error("Supabase authentication is not configured.");
  }
  return createBrowserClient(url, anonKey);
}

export default function AdminLoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    try {
      const supabase = createSupabaseBrowserClient();
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: String(formData.get("email") ?? "").trim(),
        password: String(formData.get("password") ?? ""),
      });

      if (signInError) {
        setError("Sign in failed. Check your credentials and try again.");
        return;
      }

      router.replace("/admin/messages");
      router.refresh();
    } catch (signInError) {
      console.error("Administrator sign-in failed.", signInError);
      setError("Sign in is temporarily unavailable. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-7 grid gap-4">
      <label className="grid gap-1 text-sm font-medium text-[#24251f]">
        Email address
        <input
          name="email"
          type="email"
          autoComplete="username"
          required
          maxLength={254}
          className={field}
        />
      </label>
      <label className="grid gap-1 text-sm font-medium text-[#24251f]">
        Password
        <input
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className={field}
        />
      </label>
      {error && (
        <p role="alert" className="text-sm text-red-700">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="mt-1 rounded-full bg-[#173f2b] px-6 py-3 font-semibold text-white transition hover:bg-[#245a3d] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
