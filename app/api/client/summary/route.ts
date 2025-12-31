import { NextResponse } from "next/server";
import { readRange } from "@/lib/googleSheets";

// Computes dashboard numbers from sheets.
// In production, filter by client_id from session token.
export async function GET() {
  const logs = await readRange("Message_Logs!A2:G").catch(() => [] as any[]);
  const replies = await readRange("Replies!A2:D").catch(() => [] as any[]);
  const balance = await readRange("Client_Balance!A2:C").catch(() => [] as any[]);

  const success = logs.filter((r) => (r?.[4] ?? "").toString().toUpperCase() === "SUCCESS").length;
  const totalReplies = replies.length;
  const leadsGenerated = logs.length;

  const remainingBalance = Number(balance?.[0]?.[2] ?? 0);

  return NextResponse.json({
    totalSent: success,
    totalReplies,
    leadsGenerated,
    remainingBalance,
    pipeline: { new: 0, qualified: 0, meeting: 0, converted: 0 },
  });
}
