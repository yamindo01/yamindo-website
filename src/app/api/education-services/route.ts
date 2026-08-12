import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await db.educationService.findMany({
      where: { active: true },
      orderBy: { order: "asc" },
    });
    return NextResponse.json(data);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
