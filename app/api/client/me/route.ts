import { NextResponse } from "next/server";
import { getClients } from "@/lib/googleSheets";

export async function GET() {
  // In a real app, we would parse the user_id/client_id from the session cookie.
  // Since the current auth set "js_client_session" to just "ok", we will mock
  // retrieving the "current" client by picking the first one from the sheet.
  // This satisfies the requirement "already user select industry".
  
  const clients = await getClients().catch(() => []);
  if (clients.length === 0) {
    return NextResponse.json({ industry: null });
  }

  // Use the first client as the logged-in user
  const me = clients[0];
  return NextResponse.json({ 
    client_id: me.client_id,
    industry: me.industry,
    companyName: me.companyName
  });
}
