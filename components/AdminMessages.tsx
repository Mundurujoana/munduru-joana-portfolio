"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createBrowserClient } from "@supabase/ssr";
import type { ContactMessage } from "@/lib/contact";

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

export default function AdminMessages({
  messages: initialMessages,
}: {
  messages: ContactMessage[];
}) {
  const router = useRouter();
  const [messages, setMessages] = useState(initialMessages);
  const [error, setError] = useState("");
  const [busyId, setBusyId] = useState("");

  async function updateReadStatus(message: ContactMessage) {
    setError("");
    setBusyId(message.id);
    try {
      const response = await fetch(`/api/admin/messages/${message.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_read: !message.is_read }),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok)
        throw new Error(result.error ?? "Could not update the message.");

      setMessages((current) =>
        current.map((item) =>
          item.id === message.id
            ? { ...item, is_read: !message.is_read }
            : item,
        ),
      );
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Could not update the message.",
      );
    } finally {
      setBusyId("");
    }
  }

  async function deleteMessage(message: ContactMessage) {
    if (
      !window.confirm(
        `Delete the enquiry from ${message.name}? This cannot be undone.`,
      )
    )
      return;

    setError("");
    setBusyId(message.id);
    try {
      const response = await fetch(`/api/admin/messages/${message.id}`, {
        method: "DELETE",
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok)
        throw new Error(result.error ?? "Could not delete the message.");
      setMessages((current) =>
        current.filter((item) => item.id !== message.id),
      );
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Could not delete the message.",
      );
    } finally {
      setBusyId("");
    }
  }

  async function signOut() {
    setError("");
    try {
      const supabase = createSupabaseBrowserClient();
      const { error: signOutError } = await supabase.auth.signOut();
      if (signOutError) throw signOutError;
      router.replace("/admin/login");
      router.refresh();
    } catch (requestError) {
      console.error("Administrator sign-out failed.", requestError);
      setError("Could not sign out. Please try again.");
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#a96900]">
            Private inbox
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-[#173f2b] sm:text-4xl">
            Enquiries
          </h1>
          <p className="mt-2 text-zinc-600">
            {messages.length} {messages.length === 1 ? "message" : "messages"}
          </p>
        </div>
        <button
          type="button"
          onClick={signOut}
          className="rounded-full border border-[#173f2b]/20 px-5 py-2.5 text-sm font-semibold text-[#173f2b] transition hover:bg-[#f7f2e7]"
        >
          Sign out
        </button>
      </div>

      {error && (
        <p
          role="alert"
          className="mb-5 rounded-xl bg-red-50 p-4 text-sm text-red-800"
        >
          {error}
        </p>
      )}

      {messages.length === 0 ? (
        <section className="rounded-3xl border border-[#173f2b]/10 bg-[#f7f2e7] p-8 text-zinc-600">
          No enquiries yet. New contact form submissions will appear here.
        </section>
      ) : (
        <ul className="grid gap-4">
          {messages.map((message) => (
            <li
              key={message.id}
              className={`rounded-3xl border p-5 sm:p-7 ${
                message.is_read
                  ? "border-[#173f2b]/10 bg-white"
                  : "border-[#e69b00]/35 bg-[#fffefa] shadow-sm"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="break-words text-xl font-bold text-[#173f2b]">
                      {message.subject}
                    </h2>
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                        message.is_read
                          ? "bg-zinc-100 text-zinc-600"
                          : "bg-[#f5ad16]/20 text-[#7c4c00]"
                      }`}
                    >
                      {message.is_read ? "Read" : "Unread"}
                    </span>
                  </div>
                  <p className="mt-2 break-words text-sm text-zinc-600">
                    <span className="font-semibold text-[#24251f]">
                      {message.name}
                    </span>
                    {" · "}
                    <a
                      className="underline decoration-[#173f2b]/30 underline-offset-2"
                      href={`mailto:${message.email}`}
                    >
                      {message.email}
                    </a>
                  </p>
                  <time
                    className="mt-1 block text-xs text-zinc-500"
                    dateTime={message.created_at}
                  >
                    {new Date(message.created_at).toLocaleString()}
                  </time>
                </div>
                <div className="flex shrink-0 flex-wrap gap-2">
                  <button
                    type="button"
                    disabled={busyId === message.id}
                    onClick={() => updateReadStatus(message)}
                    className="rounded-full border border-[#173f2b]/20 px-3 py-2 text-xs font-semibold text-[#173f2b] transition hover:bg-[#f7f2e7] disabled:opacity-50"
                  >
                    Mark {message.is_read ? "unread" : "read"}
                  </button>
                  <button
                    type="button"
                    disabled={busyId === message.id}
                    onClick={() => deleteMessage(message)}
                    className="rounded-full border border-red-200 px-3 py-2 text-xs font-semibold text-red-700 transition hover:bg-red-50 disabled:opacity-50"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <p className="mt-5 whitespace-pre-wrap break-words leading-7 text-zinc-700">
                {message.message}
              </p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
