import { AppShell } from "@/components/shell/app-shell";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

async function getResults(campaign_id: string) {
  const res = await fetch(`http://localhost:3001/api/messages/results?campaign_id=${encodeURIComponent(campaign_id)}`, { cache: "no-store" }).catch(()=>null);
  if (!res || !res.ok) return null;
  return res.json();
}

export default async function ResultsPage({ searchParams }: { searchParams: { campaign_id?: string } }) {
  const campaign_id = searchParams.campaign_id || "";
  const data = campaign_id ? await getResults(campaign_id) : null;

  return (
    <AppShell title="Message Results">
      <Card>
        <CardHeader>
          <div className="text-white font-semibold">Campaign Summary</div>
          <div className="text-white/60 text-sm">Campaign ID: {campaign_id || "-"}</div>
        </CardHeader>
        <CardContent className="text-white/80 text-sm space-y-3">
          {!data ? (
            <div>No results found.</div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <div className="text-white/60">Successful</div>
                  <div className="text-white text-2xl font-semibold">{data.successCount}</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <div className="text-white/60">Failed</div>
                  <div className="text-white text-2xl font-semibold">{data.failedCount}</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <div className="text-white/60">Remaining Balance</div>
                  <div className="text-white text-2xl font-semibold">{data.remainingBalance}</div>
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="text-white/60 mb-2">Rule</div>
                <div><b className="text-white">Only SUCCESS messages are counted</b> as usage. FAILED messages do not reduce balance.</div>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </AppShell>
  );
}
