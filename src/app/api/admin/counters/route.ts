import { NextRequest } from "next/server";
import { handleGet, handlePost, handlePut, handleDelete } from "@/lib/admin-crud";

const MODEL = "counter";

export async function GET() {
  return handleGet(MODEL);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  return handlePost(MODEL, body);
}

export async function PUT(request: NextRequest) {
  const body = await request.json();
  const { id, ...data } = body;
  return handlePut(MODEL, id, data);
}

export async function DELETE(request: NextRequest) {
  const body = await request.json();
  return handleDelete(MODEL, body.id);
}
