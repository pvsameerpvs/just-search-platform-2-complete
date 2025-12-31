import * as React from "react";
import { cn } from "@/lib/utils";
export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50",
        "focus:outline-none focus:ring-2 focus:ring-white/25",
        className
      )}
      {...props}
    />
  );
}
