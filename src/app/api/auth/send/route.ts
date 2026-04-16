import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { sendLoginEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Ongeldig emailadres" }, { status: 400 });
  }

  const normalized = email.toLowerCase().trim();
  const token = crypto.randomUUID();
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 min

  await sql`
    INSERT INTO auth_tokens (token, email, expires_at)
    VALUES (${token}, ${normalized}, ${expiresAt.toISOString()})
  `;

  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://financios.nl";
  const loginUrl = `${appUrl}/api/auth/verify?token=${token}`;

  try {
    await sendLoginEmail(normalized, loginUrl);
  } catch (err) {
    console.error("[auth/send] email failed:", err);
    return NextResponse.json({ error: "Email versturen mislukt" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
