import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const accounts = await db.bankAccount.findMany({
    where: { active: true },
    orderBy: { order: "asc" },
    select: {
      accountNo: true,
      accountName: true,
      en_accountName: true,
      bankName: true,
      en_bankName: true,
      logo: true,
    },
  });
  return NextResponse.json(accounts);
}
