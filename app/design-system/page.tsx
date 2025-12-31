"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen p-10 space-y-10">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Design System</h1>
        <p className="text-white/60">Core UI components and style guide for Just Search Platform.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white/90">Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <div className="h-20 rounded-lg bg-jsOrange-500 shadow-lg shadow-jsOrange-500/20" />
            <div className="text-sm text-white/70">jsOrange-500 #F97316</div>
          </div>
          <div className="space-y-2">
            <div className="h-20 rounded-lg bg-jsOrange-600" />
            <div className="text-sm text-white/70">jsOrange-600 #EA580C</div>
          </div>
          <div className="space-y-2">
            <div className="h-20 rounded-lg bg-jsBlack-800 border border-white/10" />
            <div className="text-sm text-white/70">jsBlack-800 #1a1a1a</div>
          </div>
          <div className="space-y-2">
            <div className="h-20 rounded-lg bg-jsBlack-700 border border-white/10" />
            <div className="text-sm text-white/70">jsBlack-700 #2a2a2a</div>
          </div>
          <div className="space-y-2">
            <div className="h-20 rounded-lg bg-jsWhite border border-white/10" />
            <div className="text-sm text-white/70">jsWhite #ffffff</div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white/90">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary Action</Button>
          <Button variant="secondary">Secondary Action</Button>
          <Button variant="ghost">Ghost Action</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white/90">Cards & Typography</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-jsBlack-800 border-white/10 text-white">
            <CardHeader>
              <CardTitle>Card Title Example</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/70 leading-relaxed">
                This is a standard card component used throughout the application. 
                It uses the jsBlack-800 background color to distinguish it from the main background.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-jsBlack-800 border-white/10 text-white">
             <CardHeader>
              <CardTitle>Form Elements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-white/80">Email Address</Label>
                <Input placeholder="name@example.com" className="bg-jsBlack-900 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-jsOrange-500" />
              </div>
              <div className="space-y-2">
                 <Label className="text-white/80">Select Option</Label>
                 <Input placeholder="Select..." className="bg-jsBlack-900 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-jsOrange-500" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
