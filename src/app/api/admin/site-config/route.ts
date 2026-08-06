import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const data = await db.siteConfig.findMany();
  const map: Record<string, string> = {};
  for (const c of data) map[c.key] = c.value;
  return NextResponse.json(map);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { key, value } = body;
  if (!key) return NextResponse.json({ error: "key is required" }, { status: 400 });
  const data = await db.siteConfig.upsert({
    where: { key },
    update: { value },
    create: { key, value: value || "" },
  });
  return NextResponse.json(data, { status: 201 });
}
