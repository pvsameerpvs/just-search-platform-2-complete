"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function ClientLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    setLoading(false);
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data?.error ?? "Login failed");
      return;
    }
    location.href = "/dashboard";
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)]">
      <div className="absolute inset-0 bg-radial-gradient opacity-50 pointer-events-none" />
      <Card className="w-full max-w-lg bg-jsBlack-800/80 backdrop-blur-xl border-white/10 shadow-2xl relative z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-jsOrange-500 to-jsOrange-600" />
        <CardHeader className="space-y-1 pt-10 pb-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-jsOrange-500 to-jsOrange-600 shadow-lg shadow-jsOrange-500/25 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">JS</span>
            </div>
          </div>
          <div className="text-3xl font-bold tracking-tight text-white">Welcome Back</div>
          <div className="text-white/60 text-sm font-medium">Sign in to your Just Search dashboard</div>
        </CardHeader>
        <CardContent className="px-8 pb-10">
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label className="text-white/80 text-xs uppercase tracking-wider font-semibold ml-1">Username</Label>
              <Input 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Enter your username" 
                className="h-11 bg-jsBlack-900/50 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-2 focus-visible:ring-jsOrange-500/50 focus-visible:border-transparent transition-all duration-200"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <Label className="text-white/80 text-xs uppercase tracking-wider font-semibold">Password</Label>
              </div>
              <Input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="••••••••" 
                className="h-11 bg-jsBlack-900/50 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-2 focus-visible:ring-jsOrange-500/50 focus-visible:border-transparent transition-all duration-200"
              />
            </div>
            {error && (
              <div className="text-sm text-red-400 bg-red-400/10 p-3 rounded-lg border border-red-400/20 text-center animate-in fade-in slide-in-from-top-1">
                {error}
              </div>
            )}
            <Button 
              disabled={loading} 
              className="w-full font-bold h-12 text-base bg-gradient-to-r from-jsOrange-500 to-jsOrange-600 hover:from-jsOrange-600 hover:to-jsOrange-700 text-white shadow-lg shadow-jsOrange-500/20 hover:shadow-jsOrange-500/30 transition-all duration-300 mt-2"
            >
              {loading ? "Authenticating..." : "Sign In"}
            </Button>
            <div className="text-xs text-white/30 text-center pt-6 flex justify-center gap-4">
              <span>© Just Search Platform</span>
              <span>•</span>
              <span className="hover:text-white/50 cursor-pointer transition-colors">Privacy</span>
              <span>•</span>
              <span className="hover:text-white/50 cursor-pointer transition-colors">Terms</span>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
