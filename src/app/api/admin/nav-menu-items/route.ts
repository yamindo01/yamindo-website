import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = 'force-dynamic';

// POST create child menu item
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const item = await db.navMenuItem.create({ data: body });
    return NextResponse.json(item, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: "Create failed" }, { status: 500 });
  }
}

// PUT update child menu item
export async function PUT(request: NextRequest) {
  try {
    const { id, ...data } = await request.json();
    const item = await db.navMenuItem.update({ where: { id }, data });
    return NextResponse.json(item);
  } catch {
    return NextResponse.json({ error: "Update failed" }, { status: 404 });
  }
}

// DELETE child menu item
export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    await db.navMenuItem.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Delete failed" }, { status: 404 });
  }
}
