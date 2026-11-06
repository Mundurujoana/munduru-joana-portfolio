import { NextResponse, type NextRequest } from "next/server";
import { isAuthenticatedAdmin } from "@/lib/admin-auth";
import { createSupabaseAdminClient, hasSupabaseAdminConfig } from "@/lib/supabase/server";

type RouteContext = { params: Promise<{ id: string }> };

function isSameOrigin(request: NextRequest) {
  return request.headers.get("origin") === request.nextUrl.origin;
}

function isUuid(value: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    value,
  );
}

async function authorize(request: NextRequest) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  }

  if (!hasSupabaseAdminConfig()) {
    return NextResponse.json({ error: "The admin inbox is not configured." }, { status: 503 });
  }

  if (!(await isAuthenticatedAdmin())) {
    return NextResponse.json({ error: "Administrator authentication required." }, { status: 401 });
  }

  return null;
}

export async function PATCH(request: NextRequest, context: RouteContext) {
  const denied = await authorize(request);
  if (denied) return denied;

  const { id } = await context.params;
  if (!isUuid(id)) {
    return NextResponse.json({ error: "Invalid message ID." }, { status: 400 });
  }

  let body: { is_read?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "The request body is not valid JSON." }, { status: 400 });
  }

  if (typeof body.is_read !== "boolean") {
    return NextResponse.json({ error: "A read status is required." }, { status: 400 });
  }

  const supabase = createSupabaseAdminClient();
  const { error, count } = await supabase
    .from("contact_messages")
    .update({ is_read: body.is_read }, { count: "exact" })
    .eq("id", id);

  if (error) {
    console.error("Failed to update contact message read status.", error);
    return NextResponse.json({ error: "The message could not be updated." }, { status: 500 });
  }
  if (count === 0) {
    return NextResponse.json({ error: "Message not found." }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  const denied = await authorize(request);
  if (denied) return denied;

  const { id } = await context.params;
  if (!isUuid(id)) {
    return NextResponse.json({ error: "Invalid message ID." }, { status: 400 });
  }

  const supabase = createSupabaseAdminClient();
  const { error, count } = await supabase
    .from("contact_messages")
    .delete({ count: "exact" })
    .eq("id", id);

  if (error) {
    console.error("Failed to delete contact message.", error);
    return NextResponse.json({ error: "The message could not be deleted." }, { status: 500 });
  }
  if (count === 0) {
    return NextResponse.json({ error: "Message not found." }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
