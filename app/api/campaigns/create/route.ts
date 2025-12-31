import { NextResponse } from "next/server";
import { appendRow } from "@/lib/googleSheets";

// Campaigns columns:
// A campaign_id | B client_id | C industries | D areas | E total_leads | F createdAt
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const campaign_id = `CMP-${Date.now()}`;
  const client_id = body.client_id ?? "CLIENT-DEFAULT"; // in production, from session
  const createdAt = new Date().toISOString();

  await appendRow("Campaigns!A:F", [
    campaign_id,
    client_id,
    (body.industries ?? []).join(", "),
    (body.areas ?? []).join(", "),
    Number(body.total_leads ?? 0),
    createdAt,
  ]);

  await appendRow("Audit_Log!A:E", [
    Date.now().toString(),
    "CAMPAIGN_CREATED",
    campaign_id,
    client_id,
    createdAt,
  ]);

  return NextResponse.json({ ok: true, campaign_id, client_id });
}
