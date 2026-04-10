import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const sanitized = email.trim().toLowerCase().slice(0, 254);

  await redis.rpush("captured_emails", JSON.stringify({ email: sanitized, createdAt: Date.now() }));

  // Notify via Brevo
  await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.BREVO_API_KEY!,
    },
    body: JSON.stringify({
      sender: { name: "Financios", email: "noreply@financios.nl" },
      to: [{ email: "hallo@financios.nl" }],
      subject: `Nieuw email adres: ${sanitized}`,
      htmlContent: `<p>Email captured op /result: <strong>${sanitized}</strong></p>`,
    }),
  });

  return NextResponse.json({ ok: true });
}
