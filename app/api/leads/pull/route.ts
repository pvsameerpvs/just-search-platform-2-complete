import { NextResponse } from "next/server";
import { PullLeadsSchema } from "@/lib/schemas";
import { readRange } from "@/lib/googleSheets";

// Leads columns recommended:
// A lead_id | B name | C industry | D area | E whatsapp | F email
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const parsed = PullLeadsSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

  const { industries, areas, limit } = parsed.data;
  const rows = await readRange("Leads!A2:F");

  const leads = rows
    .map((r) => ({
      lead_id: (r?.[0] ?? "").toString(),
      name: (r?.[1] ?? "").toString(),
      industry: (r?.[2] ?? "").toString(),
      area: (r?.[3] ?? "").toString(),
      whatsapp: (r?.[4] ?? "").toString(),
      email: (r?.[5] ?? "").toString(),
    }))
    .filter((l) => industries.includes(l.industry) && areas.includes(l.area))
    .slice(0, limit);

  return NextResponse.json({ leads });
}
