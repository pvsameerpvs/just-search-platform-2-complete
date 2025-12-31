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
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-jsOrange-600/20 rounded-full blur-[128px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-jsOrange-500/10 rounded-full blur-[128px]" />
        </div>

      <Card className="w-full max-w-md bg-jsBlack-800/60 backdrop-blur-2xl border-white/5 shadow-2xl relative z-10 overflow-hidden ring-1 ring-white/10">
        
        <CardHeader className="space-y-2 pt-12 pb-8 text-center relative">
            <div className="flex justify-center mb-8">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-jsOrange-500 to-jsOrange-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                    <div className="relative h-16 w-16 rounded-2xl bg-gradient-to-br from-jsBlack-800 to-jsBlack-900 border border-white/10 flex items-center justify-center shadow-xl">
                        <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-jsOrange-500 to-jsOrange-600">JS</span>
                    </div>
                </div>
            </div>
          <div className="text-3xl font-bold tracking-tight text-white">Welcome Back</div>
          <div className="text-jsWhite/50 text-sm font-medium">Enter your credentials to access the platform</div>
        </CardHeader>
        <CardContent className="px-8 pb-12">
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label className="text-jsWhite/70 text-xs uppercase tracking-wider font-semibold ml-1">Username</Label>
              <Input 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Ex: admin" 
                className="h-12 bg-jsBlack-900/50 border-white/5 text-white placeholder:text-white/10 focus-visible:ring-2 focus-visible:ring-jsOrange-500/50 focus-visible:border-jsOrange-500/50 transition-all duration-300 rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <Label className="text-jsWhite/70 text-xs uppercase tracking-wider font-semibold">Password</Label>
              </div>
              <Input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="••••••••" 
                className="h-12 bg-jsBlack-900/50 border-white/5 text-white placeholder:text-white/10 focus-visible:ring-2 focus-visible:ring-jsOrange-500/50 focus-visible:border-jsOrange-500/50 transition-all duration-300 rounded-xl"
              />
            </div>
            {error && (
              <div className="text-sm text-red-400 bg-red-500/10 p-4 rounded-xl border border-red-500/10 text-center animate-in fade-in slide-in-from-top-1">
                {error}
              </div>
            )}
            <Button 
              disabled={loading} 
              className="w-full font-bold h-12 text-base bg-gradient-to-r from-jsOrange-500 to-jsOrange-600 hover:from-jsOrange-400 hover:to-jsOrange-500 text-white shadow-lg shadow-jsOrange-500/20 hover:shadow-jsOrange-500/40 transition-all duration-300 rounded-xl mt-4"
            >
              {loading ? "Authenticating..." : "Sign In"}
            </Button>
            <div className="text-xs text-jsWhite/20 text-center pt-4 flex justify-center gap-6">
              <span className="hover:text-jsOrange-500/80 cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-jsOrange-500/80 cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </form>
        </CardContent>
      </Card>
      
      <div className="absolute bottom-6 text-center w-full text-jsWhite/10 text-xs">
        <p>© 2024 Just Search Platform. All rights reserved.</p>
      </div>
    </div>
  );
}
