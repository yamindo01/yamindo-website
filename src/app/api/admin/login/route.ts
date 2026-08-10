import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const adminPassword = process.env.ADMIN_PASSWORD || "yamindo2026";

    if (password === adminPassword) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, error: "Password salah" }, { status: 401 });
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}
