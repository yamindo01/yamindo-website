import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const page = request.nextUrl.searchParams.get("page");
  const section = request.nextUrl.searchParams.get("section");

  if (!page) {
    return NextResponse.json({ error: "Missing page parameter" }, { status: 400 });
  }

  const where: Record<string, any> = {
    page,
    active: true,
  };

  if (section) {
    where.section = section;
  }

  const data = await db.pageContent.findMany({
    where,
    orderBy: { order: "asc" },
  });

  return NextResponse.json(data);
}
