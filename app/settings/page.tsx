import { AppShell } from "@/components/shell/app-shell";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <AppShell title="Settings">
      <Card>
        <CardHeader>
          <div className="text-white font-semibold">Settings</div>
          <div className="text-white/60 text-sm">Profile & password (scaffold)</div>
        </CardHeader>
        <CardContent className="text-white/80 text-sm">
          This page is included as a placeholder for client settings.
        </CardContent>
      </Card>
    </AppShell>
  );
}
