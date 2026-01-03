"use client";

import { useEffect, useMemo, useState } from "react";
import { AppShell } from "@/components/shell/app-shell";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Opt = { name: string };

export default function LeadMachinePage() {
  const [industries, setIndustries] = useState<string[]>([]);
  const [areas, setAreas] = useState<string[]>([]);
  const [industryOptions, setIndustryOptions] = useState<Opt[]>([]);
  const [areaOptions, setAreaOptions] = useState<Opt[]>([]);
  const [limit, setLimit] = useState(50);

  const [pulled, setPulled] = useState<any[]>([]);
  const [message, setMessage] = useState("Hello, we have an offer for your business. Please reply for more details.");
  const [channel, setChannel] = useState<"whatsapp"|"email"|"both">("whatsapp");
  const [loading, setLoading] = useState(false);

  /* New State for User's Industry (to be excluded/disabled) */
  const [userIndustry, setUserIndustry] = useState<string | null>(null);

  useEffect(() => {
    // Load filters
    fetch("/api/leads/filters").then(r=>r.json()).then((d)=>{
      setIndustryOptions(d.industries ?? []);
      setAreaOptions(d.areas ?? []);
    }).catch(()=>{});

    // Load User Profile
    fetch("/api/client/me").then(r=>r.json()).then((d) => {
      if (d?.industry) {
        setUserIndustry(d.industry);
        // Ensure it's not selected (default is empty, so we are good, but if we had logic to auto-select, we'd clear it)
        setIndustries(prev => prev.filter(i => i !== d.industry));
      }
    }).catch(()=>{});
  }, []);

  /* 
    User requested "if primary industry disable need" -> interpretation: Industry filter is optional.
    Then "disable Industries that industry" -> Prevent user from selecting their OWN industry (competitors).
  */
  const canPull = areas.length > 0;

  async function pull() {
    setLoading(true);
    const res = await fetch("/api/leads/pull", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ industries, areas, limit }),
    });
    const data = await res.json().catch(()=>({}));
    setPulled(data.leads ?? []);
    setLoading(false);
  }

  const selectedLeadIds = useMemo(() => pulled.map(l=>l.lead_id), [pulled]);

  async function send() {
    if (pulled.length === 0) return alert("Pull leads first");
    setLoading(true);
    // Create campaign
    const campRes = await fetch("/api/campaigns/create", {
      method: "POST",
      headers: { "Content-Type":"application/json" },
      body: JSON.stringify({ industries, areas, total_leads: pulled.length }),
    });
    const camp = await campRes.json().catch(()=>({}));

    const res = await fetch("/api/messages/send", {
      method: "POST",
      headers: { "Content-Type":"application/json" },
      body: JSON.stringify({
        client_id: camp.client_id,
        campaign_id: camp.campaign_id,
        channel,
        message,
        lead_ids: selectedLeadIds
      }),
    });
    const out = await res.json().catch(()=>({}));
    setLoading(false);
    if (!res.ok) return alert(out?.error ?? "Send failed");
    location.href = `/results?campaign_id=${encodeURIComponent(camp.campaign_id)}`;
  }

  return (
    <AppShell title="Lead Generation Machine">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="text-white font-semibold">Filters</div>
            <div className="text-white/60 text-sm">Select industry + area, then pull leads.</div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Industries (Multi Select)</Label>
                <div className="mt-2 max-h-56 overflow-auto space-y-2 pr-2">
                  {industryOptions.map((it) => {
                    const isUserIndustry = it.name === userIndustry;
                    return (
                      <label key={it.name} className={`flex items-center gap-2 text-white/80 text-sm ${isUserIndustry ? "opacity-50 cursor-not-allowed" : ""}`}>
                        <input
                          type="checkbox"
                          checked={industries.includes(it.name)}
                          disabled={isUserIndustry}
                          onChange={(e)=>setIndustries(p=>e.target.checked?[...p,it.name]:p.filter(x=>x!==it.name))}
                        />
                        {it.name} {isUserIndustry && <span className="text-xs text-white/40">(Your Industry)</span>}
                      </label>
                    );
                  })}
                </div>
              </div>
              <div>
                <Label>Areas (Multi Select)</Label>
                <div className="mt-2 max-h-56 overflow-auto space-y-2 pr-2">
                  {areaOptions.map((it) => (
                    <label key={it.name} className="flex items-center gap-2 text-white/80 text-sm">
                      <input
                        type="checkbox"
                        checked={areas.includes(it.name)}
                        onChange={(e)=>setAreas(p=>e.target.checked?[...p,it.name]:p.filter(x=>x!==it.name))}
                      />
                      {it.name}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
              <div>
                <Label>Limit</Label>
                <Input type="number" value={limit} onChange={(e)=>setLimit(parseInt(e.target.value||"0",10))} />
              </div>
              <div className="md:col-span-2 flex gap-3 justify-end">
                <Button variant="secondary" disabled={!canPull || loading} onClick={pull}>
                  {loading ? "Working..." : "Pull Data"}
                </Button>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="text-white/70 text-sm mb-2">Leads Found: <b className="text-white">{pulled.length}</b></div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-white/80">
                  <thead className="text-white/60">
                    <tr className="border-b border-white/10">
                      <th className="py-2 text-left">Name</th>
                      <th className="py-2 text-left">Industry</th>
                      <th className="py-2 text-left">Area</th>
                      <th className="py-2 text-left">WhatsApp</th>
                      <th className="py-2 text-left">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pulled.length === 0 ? (
                      <tr><td colSpan={5} className="py-3">No leads pulled yet.</td></tr>
                    ) : (
                      pulled.slice(0, 50).map((l:any) => (
                        <tr key={l.lead_id} className="border-b border-white/10">
                          <td className="py-2">{l.name}</td>
                          <td className="py-2">{l.industry}</td>
                          <td className="py-2">{l.area}</td>
                          <td className="py-2">{l.whatsapp}</td>
                          <td className="py-2">{l.email}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="text-white font-semibold">Message Details</div>
            <div className="text-white/60 text-sm">Compose message and send.</div>
          </CardHeader>
          <CardContent className="space-y-3">
            <Label>Channel</Label>
            <div className="flex gap-2">
              <Button variant={channel==="whatsapp"?"primary":"secondary"} onClick={()=>setChannel("whatsapp")}>WhatsApp</Button>
              <Button variant={channel==="email"?"primary":"secondary"} onClick={()=>setChannel("email")}>Email</Button>
              <Button variant={channel==="both"?"primary":"secondary"} onClick={()=>setChannel("both")}>Both</Button>
            </div>

            <Label>Message</Label>
            <textarea
              className="w-full min-h-40 rounded-md border border-white/15 bg-white/10 p-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/25"
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
            />
            <div className="text-xs text-white/60">Characters: {message.length}</div>

            <Button disabled={pulled.length===0 || loading} onClick={send} className="w-full">
              {loading ? "Sending..." : "Pull Data & Send Messages"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
