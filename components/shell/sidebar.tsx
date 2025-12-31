"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const items = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/lead-machine", label: "Lead Generation" },
  { href: "/reports", label: "Reports" },
  { href: "/settings", label: "Settings" },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 shrink-0 border-r border-white/10 bg-black/10">
      <div className="p-5 text-white">
        <div className="text-lg font-semibold">Client CRM</div>
        <div className="text-xs text-white/60">Just Search</div>
      </div>
      <nav className="px-2 pb-4">
        {items.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            className={cn(
              "block rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/10",
              pathname === it.href && "bg-white/10 text-white"
            )}
          >
            {it.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
