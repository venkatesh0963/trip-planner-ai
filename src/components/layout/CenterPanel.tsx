"use client";

import { useTripStore } from "@/store/useTripStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, DollarSign, Share, Download, Copy } from "lucide-react";
import { motion } from "framer-motion";

export function CenterPanel() {
  const { itinerary, isGenerating } = useTripStore();

  const handleShareLink = () => {
    if (!itinerary) return;
    const jsonStr = JSON.stringify(itinerary);
    const base64 = btoa(unescape(encodeURIComponent(jsonStr)));
    const url = `${window.location.origin}?trip=${base64}`;
    navigator.clipboard.writeText(url);
    alert("Share link copied to clipboard!");
  };

  const handleExportPdf = () => {
    window.print();
  };

  if (isGenerating) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-8 space-y-4">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-muted-foreground animate-pulse">Designing your perfect trip...</p>
      </div>
    );
  }

  if (!itinerary) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
        <h2 className="text-2xl font-semibold mb-2">Ready for an adventure?</h2>
        <p className="text-muted-foreground max-w-md">
          Enter your destination, dates, and budget on the left, and let our AI craft the perfect itinerary for you.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full p-6 overflow-y-auto space-y-8 pb-20 print:p-0 print:bg-white print:text-black">
      <div className="space-y-4 print:mb-8">
        <div className="flex justify-between items-start">
          <h1 className="text-3xl font-bold text-gradient print:text-black">{itinerary.destination?.name || "Your"} Trip</h1>
          <div className="flex gap-2 print:hidden">
            <Button variant="outline" size="sm" onClick={handleShareLink}><Share className="w-4 h-4 mr-2"/> Share Link</Button>
            <Button variant="outline" size="sm" onClick={handleExportPdf}><Download className="w-4 h-4 mr-2"/> Export PDF</Button>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline">Total Cost: ~₹{itinerary.totalCostEstimate}</Badge>
          <Badge variant="outline">{itinerary.days?.length || 0} Days</Badge>
        </div>
      </div>

      <div className="space-y-8">
        {itinerary.days?.map((day, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Day {day.dayNumber}: {day.theme}</h3>
            
            <div className="space-y-4 pl-4 border-l-2 border-primary/20">
              {['morning', 'afternoon', 'evening'].map((timeOfDay) => (
                <div key={timeOfDay} className="relative">
                  <div className="absolute -left-[21px] top-4 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2 ml-4">
                    {timeOfDay}
                  </h4>
                  
                  <div className="ml-4 space-y-3">
                    {/* @ts-ignore */}
                    {day[timeOfDay]?.map((activity: any, aIdx: number) => (
                      <Card key={aIdx} className="glass border-none hover:bg-white/50 dark:hover:bg-black/50 transition-colors">
                        <CardContent className="p-4 flex flex-col gap-2">
                          <div className="flex justify-between items-start">
                            <h5 className="font-semibold text-lg">{activity.name}</h5>
                            <Badge variant="secondary" className="capitalize">{activity.type}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{activity.description}</p>
                          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mt-2">
                            <div className="flex items-center gap-1"><Clock className="w-3 h-3"/> {activity.timeEstimate}</div>
                            {activity.costEstimate > 0 && <div className="flex items-center gap-1"><DollarSign className="w-3 h-3"/> {activity.costEstimate}</div>}
                            {activity.location?.name && <div className="flex items-center gap-1"><MapPin className="w-3 h-3"/> {activity.location.name}</div>}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
