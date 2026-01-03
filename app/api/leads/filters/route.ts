import { NextResponse } from "next/server";
import * as GoogleSheets from "@/lib/googleSheets";

export async function GET() {
  console.log("Debug: GoogleSheets exports keys:", Object.keys(GoogleSheets));
  
  const getIndustryPricing = GoogleSheets.getIndustryPricing;
  const getAreaPricing = GoogleSheets.getAreaPricing;

  if (!getIndustryPricing || !getAreaPricing) {
    console.error("Critical Error: getIndustryPricing or getAreaPricing is missing from lib/googleSheets import!");
    return NextResponse.json({ industries: [], areas: [] });
  }

  const [industryRows, areaRows] = await Promise.all([
    getIndustryPricing().catch((err) => { console.error("Error fetching industries:", err); return []; }),
    getAreaPricing().catch((err) => { console.error("Error fetching areas:", err); return []; }),
  ]);

  const industries = industryRows
    .filter((r) => r.name)
    .map((r) => ({ name: r.name, price: Number(r.price) }));
    
  const areas = areaRows
    .filter((r) => r.name)
    .map((r) => ({ name: r.name, price: Number(r.price) }));

  return NextResponse.json({ industries, areas });
}
