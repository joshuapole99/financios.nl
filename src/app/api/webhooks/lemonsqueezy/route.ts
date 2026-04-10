import { NextRequest, NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "crypto";
import { redis } from "@/lib/redis";
import { sendMagicLink } from "@/lib/email";

export async function POST(req: NextRequest) {
  // 1. Verify signature
  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "Webhook secret not configured" }, { status: 500 });
  }

  const rawBody = await req.text();
  const signature = req.headers.get("x-signature") ?? "";
  const expected = createHmac("sha256", secret).update(rawBody).digest("hex");

  try {
    if (!timingSafeEqual(Buffer.from(signature, "hex"), Buffer.from(expected, "hex"))) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // 2. Parse payload
  const payload = JSON.parse(rawBody);
  const eventName: string = payload?.meta?.event_name ?? "";

  if (eventName !== "order_created") {
    return NextResponse.json({ ok: true, skipped: true });
  }

  const email: string = payload?.data?.attributes?.user_email ?? "";
  const orderId: string = String(payload?.data?.id ?? "");
  const params: string = payload?.meta?.custom_data?.params ?? "";

  if (!email || !params) {
    return NextResponse.json({ ok: true, skipped: true });
  }

  // 3. Idempotency — skip if order already processed
  const idempotencyKey = `order:${orderId}`;
  const alreadyProcessed = await redis.get(idempotencyKey);
  if (alreadyProcessed) {
    return NextResponse.json({ ok: true, skipped: true, reason: "duplicate" });
  }
  await redis.set(idempotencyKey, "processed", { ex: 60 * 60 * 24 * 7 });

  // 5. Generate token and store in Redis
  const token = crypto.randomUUID();
  const key = `plan:${token}`;
  const value = JSON.stringify({ params, email, orderId, createdAt: Date.now() });
  const ttl = 60 * 60 * 24 * 365; // 1 year in seconds

  await redis.set(key, value, { ex: ttl });

  // 6. Send magic link email
  const planUrl = `https://financios.nl/plan?token=${token}`;
  await sendMagicLink(email, planUrl);

  return NextResponse.json({ ok: true });
}
