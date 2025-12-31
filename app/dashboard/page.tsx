import { AppShell } from "@/components/shell/app-shell";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

async function getSummary() {
  const res = await fetch("http://localhost:3001/api/client/summary", { cache: "no-store" }).catch(()=>null);
  if (!res || !res.ok) return null;
  return res.json();
}

export default async function DashboardPage() {
  const s = await getSummary();
  return (
    <AppShell title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card><CardHeader><div className="text-white font-semibold">Total Msg Sent</div></CardHeader><CardContent className="text-white/80 text-sm"><b className="text-white text-xl">{s?.totalSent ?? 0}</b></CardContent></Card>
        <Card><CardHeader><div className="text-white font-semibold">Total Replies</div></CardHeader><CardContent className="text-white/80 text-sm"><b className="text-white text-xl">{s?.totalReplies ?? 0}</b></CardContent></Card>
        <Card><CardHeader><div className="text-white font-semibold">Leads Generated</div></CardHeader><CardContent className="text-white/80 text-sm"><b className="text-white text-xl">{s?.leadsGenerated ?? 0}</b></CardContent></Card>
        <Card><CardHeader><div className="text-white font-semibold">Remaining Balance</div></CardHeader><CardContent className="text-white/80 text-sm"><b className="text-white text-xl">{s?.remainingBalance ?? 0}</b></CardContent></Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardHeader>
            <div className="text-white font-semibold">Pipeline</div>
            <div className="text-white/60 text-sm">New → Qualified → Meeting → Converted</div>
          </CardHeader>
          <CardContent className="text-white/80 text-sm space-y-2">
            <div className="flex justify-between"><span>New Leads</span><b className="text-white">{s?.pipeline?.new ?? 0}</b></div>
            <div className="flex justify-between"><span>Qualified</span><b className="text-white">{s?.pipeline?.qualified ?? 0}</b></div>
            <div className="flex justify-between"><span>Meetings</span><b className="text-white">{s?.pipeline?.meeting ?? 0}</b></div>
            <div className="flex justify-between"><span>Converted</span><b className="text-white">{s?.pipeline?.converted ?? 0}</b></div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="text-white font-semibold">Lead Generation</div>
            <div className="text-white/60 text-sm">Start a new campaign from Lead Generation</div>
          </CardHeader>
          <CardContent className="text-white/80 text-sm">
            Use the Lead Generation Machine to select industries and areas, pull leads, compose message, and send via WhatsApp/Email.
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
