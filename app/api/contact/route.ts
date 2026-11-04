import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const name = String(body?.name ?? "").trim();
  const email = String(body?.email ?? "").trim();
  const message = String(body?.message ?? "").trim();

  if (!name || name.length > 100 || !/^\S+@\S+\.\S+$/.test(email) || !message || message.length > 2000) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  if (!key || !to) {
    console.error("[contact] RESEND_API_KEY or CONTACT_TO is not configured");
    return NextResponse.json({ error: "Email delivery is not configured" }, { status: 503 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: "Portfolio <onboarding@resend.dev>", to: [to], reply_to: email, subject: `New message from ${name}`, text: `${message}\n\n— ${name} <${email}>` }),
  });
  if (!res.ok) return NextResponse.json({ error: "Send failed" }, { status: 502 });
  return NextResponse.json({ ok: true, delivered: true });
}
