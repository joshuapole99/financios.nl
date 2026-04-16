import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { getSession } from "@/lib/session";

export async function GET() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Niet ingelogd" }, { status: 401 });

  const rows = await sql`
    SELECT id, naam, doel_bedrag, huidig_bedrag, deadline, created_at
    FROM spaardoelen WHERE user_id = ${session.userId}
    ORDER BY created_at ASC
  `;
  return NextResponse.json(rows);
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Niet ingelogd" }, { status: 401 });

  const { naam, doelBedrag, huidigBedrag, deadline } = await req.json();
  if (!naam || !doelBedrag) {
    return NextResponse.json({ error: "Naam en doelbedrag zijn verplicht" }, { status: 400 });
  }

  const rows = await sql`
    INSERT INTO spaardoelen (user_id, naam, doel_bedrag, huidig_bedrag, deadline)
    VALUES (${session.userId}, ${naam}, ${doelBedrag}, ${huidigBedrag ?? 0}, ${deadline ?? null})
    RETURNING id
  `;
  return NextResponse.json(rows[0]);
}
