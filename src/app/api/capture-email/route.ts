import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const sanitized = email.trim().toLowerCase().slice(0, 254);

  // Store in Redis list
  await redis.rpush("captured_emails", JSON.stringify({ email: sanitized, createdAt: Date.now() }));

  // Notify us
  await resend.emails.send({
    from: "Financios <noreply@financios.nl>",
    to: "hallo@financios.nl",
    subject: `Nieuw email adres: ${sanitized}`,
    html: `<p>Email captured op /result: <strong>${sanitized}</strong></p>`,
  });

  return NextResponse.json({ ok: true });
}
