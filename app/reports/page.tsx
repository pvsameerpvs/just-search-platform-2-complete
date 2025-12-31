import { AppShell } from "@/components/shell/app-shell";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ReportsPage() {
  return (
    <AppShell title="Reports">
      <Card>
        <CardHeader>
          <div className="text-white font-semibold">Reports</div>
          <div className="text-white/60 text-sm">Campaign and messaging reports (scaffold)</div>
        </CardHeader>
        <CardContent className="text-white/80 text-sm">
          This page is included as a placeholder for future reports UI.
        </CardContent>
      </Card>
    </AppShell>
  );
}
