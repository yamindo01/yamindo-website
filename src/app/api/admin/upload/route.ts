import { NextRequest, NextResponse } from "next/server";

const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4MB (Vercel body limit safe)
const ALLOWED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/bmp",
];

export const config = {
  api: {
    bodyParser: false,
  },
};

// Prevent Next.js from parsing the body — we handle FormData manually
export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    let formData: FormData;
    try {
      formData = await request.formData();
    } catch (parseErr) {
      console.error("FormData parse error:", parseErr);
      return NextResponse.json(
        { error: "Gagal membaca file. Coba gunakan file lebih kecil (maks 4MB)." },
        { status: 400 }
      );
    }

    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "File tidak ditemukan" }, { status: 400 });
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: "Format file tidak didukung. Gunakan JPG, PNG, GIF, atau WebP." },
        { status: 400 }
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "Ukuran file terlalu besar. Maksimal 4MB." },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64 = buffer.toString("base64");
    const dataUrl = `data:${file.type};base64,${base64}`;

    return NextResponse.json({ url: dataUrl });
  } catch (err) {
    console.error("Upload error:", err);
    return NextResponse.json({ error: "Upload gagal: " + (err instanceof Error ? err.message : "Unknown error") }, { status: 500 });
  }
}
