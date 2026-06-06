"use client";

import { useTripStore } from "@/store/useTripStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Calendar, DollarSign, Wand2 } from "lucide-react";
import { useState } from "react";

export function Sidebar() {
  const { setDestination, setBudget, budget, isGenerating, setIsGenerating, setItinerary } = useTripStore();
  const [destName, setDestName] = useState("");
  const [days, setDays] = useState("3");

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch("/api/generate-itinerary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          destination: { name: destName, lat: 0, lng: 0 },
          days: parseInt(days),
          budget,
          travelStyle: "Balanced",
          interests: ["Sightseeing", "Food"]
        })
      });
      const data = await response.json();
      if (data.error) {
        alert("Error generating plan: " + data.error);
        return;
      }
      setItinerary(data);
      setDestination(data.destination);
    } catch (error) {
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="w-full h-full p-4 flex flex-col gap-4 overflow-y-auto">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 rounded-full bg-gradient-premium flex items-center justify-center">
          <Wand2 className="w-4 h-4 text-white" />
        </div>
        <h1 className="text-xl font-bold text-gradient">AI Travel Planner</h1>
      </div>

      <Card className="glass-card border-none">
        <CardHeader>
          <CardTitle className="text-lg">Trip Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Destination</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Where to?" 
                className="pl-9"
                value={destName}
                onChange={(e) => setDestName(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Duration (Days)</Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                type="number" 
                min="1" 
                max="14" 
                className="pl-9"
                value={days}
                onChange={(e) => setDays(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Budget</Label>
              <div className="relative w-32">
                <span className="absolute left-3 top-2 text-sm text-muted-foreground">₹</span>
                <Input 
                  type="number" 
                  min="0"
                  className="pl-7 h-9 text-right pr-3"
                  value={budget || ""}
                  onChange={(e) => setBudget(parseInt(e.target.value) || 0)}
                />
              </div>
            </div>
            <Slider
              value={[budget]}
              max={500000}
              step={1000}
              onValueChange={(vals) => setBudget(vals[0])}
            />
          </div>

          <Button 
            className="w-full bg-black hover:bg-black/80 text-white transition-colors"
            onClick={handleGenerate}
            disabled={isGenerating || !destName}
          >
            {isGenerating ? "Planning..." : "Generate Itinerary"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
