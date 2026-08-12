import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const menus = await db.navMenu.findMany({
      where: { active: true },
      orderBy: { order: "asc" },
      include: {
        children: {
          where: { active: true },
          orderBy: { order: "asc" },
        },
      },
    });
    return NextResponse.json(menus);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
