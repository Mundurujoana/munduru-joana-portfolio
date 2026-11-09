import { NextResponse, type NextRequest } from "next/server";
import { createSupabasePublicClient } from "@/lib/supabase/server";

type ContactSubmission = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
};

function isValidEmail(email: string) {
  return email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function notifyByEmail(message: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_NOTIFICATION_TO;
  const from = process.env.CONTACT_NOTIFICATION_FROM;

  if (!apiKey || !to || !from) {
    throw new Error(
      "Email notifications are not configured. Set RESEND_API_KEY, CONTACT_NOTIFICATION_TO, and CONTACT_NOTIFICATION_FROM.",
    );
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: message.email,
        subject: `New portfolio enquiry: ${message.subject}`,
        text: [
          `From: ${message.name} <${message.email}>`,
          `Subject: ${message.subject}`,
          "",
          message.message,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      console.error(
        "Resend could not send the contact notification.",
        response.status,
        await response.text(),
      );
      throw new Error("Resend could not send the contact notification.");
    }
  } catch (error) {
    console.error("Resend notification request failed.", error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin || origin !== request.nextUrl.origin) {
    return NextResponse.json(
      { error: "Invalid request origin." },
      { status: 403 },
    );
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json(
      { error: "Expected a JSON request." },
      { status: 415 },
    );
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 10_000) {
    return NextResponse.json(
      { error: "The submitted message is too large." },
      { status: 413 },
    );
  }

  let submission: ContactSubmission;
  try {
    submission = (await request.json()) as ContactSubmission;
  } catch {
    return NextResponse.json(
      { error: "The request body is not valid JSON." },
      { status: 400 },
    );
  }

  if (typeof submission.website === "string" && submission.website.trim()) {
    return NextResponse.json({ success: true });
  }

  const name =
    typeof submission.name === "string" ? submission.name.trim() : "";
  const email =
    typeof submission.email === "string" ? submission.email.trim() : "";
  const subject =
    typeof submission.subject === "string" ? submission.subject.trim() : "";
  const message =
    typeof submission.message === "string" ? submission.message.trim() : "";

  if (
    !name ||
    name.length > 100 ||
    !isValidEmail(email) ||
    !subject ||
    subject.length > 150 ||
    !message ||
    message.length > 5000
  ) {
    return NextResponse.json(
      {
        error: "Check your name, email, subject, and message, then try again.",
      },
      { status: 400 },
    );
  }

  let savedToInbox = false;
  if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
    try {
      const supabase = createSupabasePublicClient();
      const { error } = await supabase.from("contact_messages").insert({
        name,
        email,
        subject,
        message,
      });

      if (error) {
        console.error("Failed to save contact message in Supabase.", error);
      } else {
        savedToInbox = true;
      }
    } catch (error) {
      console.error("Failed to save contact message in Supabase.", error);
    }
  }

  try {
    await notifyByEmail({ name, email, subject, message });
  } catch (error) {
    console.error("Contact email delivery failed.", error);
    const emailNotConfigured =
      error instanceof Error &&
      error.message.startsWith("Email notifications are not configured.");
    return NextResponse.json(
      {
        error: savedToInbox
          ? "Your message was saved, but email alerts are not configured yet."
          : emailNotConfigured
            ? "Email delivery is not configured yet, and your message could not be saved."
            : "Your message could not be emailed or saved. Please try again later.",
        saved: savedToInbox,
      },
      { status: emailNotConfigured ? 503 : 502 },
    );
  }

  return NextResponse.json({ success: true });
}
