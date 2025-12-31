import { NextResponse } from "next/server";
import { SendMessageSchema } from "@/lib/schemas";
import { appendRow, readRange, updateRow } from "@/lib/googleSheets";

// Message_Logs columns:
// A log_id | B campaign_id | C lead_id | D channel | E status | F reason | G createdAt
//
// This handler triggers n8n and writes logs (success/fail placeholders).
// In production: n8n should call back with delivery statuses.
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const parsed = SendMessageSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

  const { client_id, campaign_id, channel, message, lead_ids } = parsed.data;
  const createdAt = new Date().toISOString();

  // Balance check
  const balanceRows = await readRange("Client_Balance!A2:C").catch(() => [] as any[]);
  const remaining = Number(balanceRows?.[0]?.[2] ?? 0);
  if (remaining <= 0) return NextResponse.json({ error: "Insufficient message balance" }, { status: 403 });

  // Trigger n8n webhook (best effort)
  const webhook = process.env.N8N_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ client_id, campaign_id, channel, message, lead_ids }),
      });
    } catch {
      // continue; logs will still be created
    }
  }

  // Demo sending logic: mark first 70% as SUCCESS, rest FAILED
  const successCount = Math.floor(lead_ids.length * 0.7);

  let successLogged = 0;
  for (let i = 0; i < lead_ids.length; i++) {
    const status = i < successCount ? "SUCCESS" : "FAILED";
    if (status === "SUCCESS") successLogged++;

    await appendRow("Message_Logs!A:G", [
      `LOG-${Date.now()}-${i}`,
      campaign_id,
      lead_ids[i],
      channel,
      status,
      status === "FAILED" ? "Provider error (demo)" : "",
      createdAt,
    ]);
  }

  // Only SUCCESS reduces balance (critical business rule)
  const newBalance = Math.max(0, remaining - successLogged);

  // Update Client_Balance row 2 (A2:C2) for demo; in real use, find matching client row
  await updateRow("Client_Balance!A2:C2", [
    balanceRows?.[0]?.[0] ?? client_id,
    balanceRows?.[0]?.[1] ?? "Client",
    newBalance
  ]);

  return NextResponse.json({ ok: true, campaign_id, successLogged, newBalance });
}
