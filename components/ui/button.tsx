import * as React from "react";
import { cn } from "@/lib/utils";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "ghost" };
export function Button({ className, variant="primary", ...props }: Props) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition",
        "focus:outline-none focus:ring-2 focus:ring-jsOrange-500/50 disabled:opacity-50 disabled:pointer-events-none",
        variant==="primary" && "bg-jsOrange-500 hover:bg-jsOrange-600 text-white shadow-lg shadow-jsOrange-500/20",
        variant==="secondary" && "bg-white/5 hover:bg-white/10 text-white border border-white/10",
        variant==="ghost" && "bg-transparent hover:bg-white/5 text-white/70 hover:text-white",
        className
      )}
      {...props}
    />
  );
}
