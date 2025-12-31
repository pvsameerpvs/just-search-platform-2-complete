"use client";
import { Button } from "@/components/ui/button";

export function Topbar({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 bg-black/10 px-6 py-4">
      <div>
        <div className="text-white text-lg font-semibold">{title}</div>
        <div className="text-white/60 text-sm">Client Frontend CRM</div>
      </div>
      <Button variant="secondary" onClick={() => fetch("/api/auth/logout", { method: "POST" }).then(()=>location.href="/")}>
        Logout
      </Button>
    </div>
  );
}
