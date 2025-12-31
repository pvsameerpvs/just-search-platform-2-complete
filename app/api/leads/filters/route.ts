import { NextResponse } from "next/server";
import { readRange } from "@/lib/googleSheets";

export async function GET() {
  const leads = await readRange("Leads!A2:F").catch(() => [] as any[]);
  const industriesSet = new Set<string>();
  const areasSet = new Set<string>();
  for (const r of leads) {
    const industry = (r?.[2] ?? "").toString();
    const area = (r?.[3] ?? "").toString();
    if (industry) industriesSet.add(industry);
    if (area) areasSet.add(area);
  }
  const industries = Array.from(industriesSet).sort().map((name) => ({ name }));
  const areas = Array.from(areasSet).sort().map((name) => ({ name }));
  return NextResponse.json({ industries, areas });
}
