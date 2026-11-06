import { redirect } from "next/navigation";
import AdminMessages from "@/components/AdminMessages";
import { ContactMessage, contactMessageFields } from "@/lib/contact";
import { isAuthenticatedAdmin } from "@/lib/admin-auth";
import {
  createSupabaseAdminClient,
  hasSupabaseAdminConfig,
  hasSupabasePublicConfig,
} from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function AdminMessagesPage() {
  if (!hasSupabasePublicConfig() || !process.env.SUPABASE_ADMIN_EMAIL) {
    redirect("/admin/login");
  }

  if (!(await isAuthenticatedAdmin())) {
    redirect("/admin/login");
  }

  if (!hasSupabaseAdminConfig()) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p role="alert" className="rounded-2xl bg-[#f7f2e7] p-6 text-[#173f2b]">
          The message database is not configured. Set SUPABASE_SERVICE_ROLE_KEY to load the inbox.
        </p>
      </main>
    );
  }

  const supabase = createSupabaseAdminClient();
  const { data, error } = await supabase
    .from("contact_messages")
    .select(contactMessageFields)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to load contact messages from Supabase.", error);
    return (
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p role="alert" className="rounded-2xl bg-[#f7f2e7] p-6 text-[#173f2b]">
          The inbox could not be loaded. Check that the Supabase migration has been applied.
        </p>
      </main>
    );
  }

  return <AdminMessages messages={(data ?? []) as ContactMessage[]} />;
}
