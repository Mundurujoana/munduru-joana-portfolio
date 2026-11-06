import { createSupabaseServerClient, getConfiguredAdminEmail } from "@/lib/supabase/server";

export async function isAuthenticatedAdmin() {
  const adminEmail = getConfiguredAdminEmail();
  if (!adminEmail) return false;

  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user?.email) return false;
  return data.user.email.trim().toLowerCase() === adminEmail;
}
