import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = 'force-dynamic';

// GET all parent menus with children
export async function GET() {
  try {
    const menus = await db.navMenu.findMany({
      orderBy: { order: "asc" },
      include: {
        children: {
          orderBy: { order: "asc" },
        },
      },
    });
    return NextResponse.json(menus);
  } catch (e) {
    return NextResponse.json({ error: "Fetch failed" }, { status: 500 });
  }
}

// POST create parent menu
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const menu = await db.navMenu.create({ data: body });
    return NextResponse.json(menu, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: "Create failed" }, { status: 500 });
  }
}

// PUT update parent menu
export async function PUT(request: NextRequest) {
  try {
    const { id, ...data } = await request.json();
    const menu = await db.navMenu.update({ where: { id }, data });
    return NextResponse.json(menu);
  } catch {
    return NextResponse.json({ error: "Update failed" }, { status: 404 });
  }
}

// DELETE parent menu (cascades to children)
export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    await db.navMenuItem.deleteMany({ where: { parentId: id } });
    await db.navMenu.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Delete failed" }, { status: 404 });
  }
}
