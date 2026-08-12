import { NextRequest } from "next/server";
import { handleGet, handlePost, handlePut, handleDelete } from "@/lib/admin-crud";

const model = "aboutSection";

export async function GET() { return handleGet(model); }
export async function POST(request: NextRequest) { const body = await request.json(); return handlePost(model, body); }
export async function PUT(request: NextRequest) { const body = await request.json(); const { id, ...data } = body; return handlePut(model, id, data); }
export async function DELETE(request: NextRequest) { const body = await request.json(); return handleDelete(model, body.id); }
