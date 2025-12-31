import { NextResponse } from "next/server";
import { readRange } from "@/lib/googleSheets";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const campaign_id = url.searchParams.get("campaign_id") || "";
  if (!campaign_id) return NextResponse.json({ error: "campaign_id required" }, { status: 400 });

  const logs = await readRange("Message_Logs!A2:G").catch(() => [] as any[]);
  const campaignLogs = logs.filter((r) => (r?.[1] ?? "").toString() === campaign_id);

  const successCount = campaignLogs.filter((r) => (r?.[4] ?? "").toString().toUpperCase() === "SUCCESS").length;
  const failedCount = campaignLogs.filter((r) => (r?.[4] ?? "").toString().toUpperCase() === "FAILED").length;

  const balanceRows = await readRange("Client_Balance!A2:C").catch(() => [] as any[]);
  const remainingBalance = Number(balanceRows?.[0]?.[2] ?? 0);

  return NextResponse.json({ campaign_id, successCount, failedCount, remainingBalance });
}
