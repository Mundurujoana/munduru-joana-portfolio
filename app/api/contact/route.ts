import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const name = String(body?.name ?? "").trim();
  const email = String(body?.email ?? "").trim();
  const message = String(body?.message ?? "").trim();

  if (
    !name ||
    name.length > 100 ||
    !/^\S+@\S+\.\S+$/.test(email) ||
    !message ||
    message.length > 2000
  ) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASS;
  const secure = process.env.SMTP_SECURE === "true";
  const to = process.env.CONTACT_TO;

  if (
    !host ||
    !Number.isInteger(port) ||
    port < 1 ||
    port > 65535 ||
    !user ||
    !password ||
    !to
  ) {
    console.error("[contact] SMTP settings or CONTACT_TO are not configured correctly");
    return NextResponse.json(
      { error: "Email delivery is not configured" },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass: password },
  });

  try {
    await transporter.sendMail({
      from: { name: "Portfolio contact", address: user },
      to,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `${message}\n\n— ${name} <${email}>`,
    });

    return NextResponse.json({ ok: true, delivered: true });
  } catch (error) {
    console.error("[contact] Failed to send email", error);
    return NextResponse.json({ error: "Send failed" }, { status: 502 });
  }
}
