import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { getSession } from "@/lib/session";

export async function GET() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Niet ingelogd" }, { status: 401 });

  const rows = await sql`
    SELECT id, type, naam, waarde, updated_at
    FROM assets WHERE user_id = ${session.userId}
    ORDER BY type, naam
  `;
  return NextResponse.json(rows);
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Niet ingelogd" }, { status: 401 });

  const { type, naam, waarde } = await req.json();
  if (!type || !naam || waarde == null) {
    return NextResponse.json({ error: "Type, naam en waarde zijn verplicht" }, { status: 400 });
  }

  const rows = await sql`
    INSERT INTO assets (user_id, type, naam, waarde)
    VALUES (${session.userId}, ${type}, ${naam}, ${waarde})
    RETURNING id
  `;
  return NextResponse.json(rows[0]);
}
