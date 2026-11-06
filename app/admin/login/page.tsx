import AdminLoginForm from "@/components/AdminLoginForm";
import { hasSupabasePublicConfig } from "@/lib/supabase/server";

export default function AdminLoginPage() {
  if (!hasSupabasePublicConfig() || !process.env.SUPABASE_ADMIN_EMAIL) {
    return (
      <main className="mx-auto max-w-lg px-4 py-16 sm:px-6">
        <section className="rounded-3xl border border-[#173f2b]/10 bg-[#f7f2e7] p-6 sm:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#a96900]">
            Admin setup required
          </p>
          <h1 className="mt-3 text-3xl font-extrabold text-[#173f2b]">Inbox is not configured</h1>
          <p className="mt-4 leading-7 text-zinc-600">
            Configure the Supabase URL, public key, and administrator email in your server
            environment before signing in.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-lg px-4 py-16 sm:px-6">
      <section className="rounded-3xl border border-[#173f2b]/10 bg-[#f7f2e7] p-6 sm:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#a96900]">
          Private inbox
        </p>
        <h1 className="mt-3 text-3xl font-extrabold text-[#173f2b]">Administrator sign in</h1>
        <p className="mt-3 leading-7 text-zinc-600">
          Sign in with the administrator account configured for this portfolio.
        </p>
        <AdminLoginForm />
      </section>
    </main>
  );
}
