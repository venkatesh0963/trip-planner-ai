"use client";

import { useTripStore } from "@/store/useTripStore";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cloud, PieChart, MessageSquare } from "lucide-react";

import { WeatherWidget } from "@/components/features/WeatherWidget";
import { BudgetCalculator } from "@/components/features/BudgetCalculator";
import { ChatAssistant } from "@/components/features/ChatAssistant";

export function RightPanel() {
  const { destination } = useTripStore();

  return (
    <div className="w-full h-full flex flex-col glass border-l border-white/20 dark:border-white/10">
      <Tabs defaultValue="weather" className="w-full h-full flex flex-col">
        <div className="p-4 border-b border-white/20 dark:border-white/10">
          <TabsList className="grid w-full grid-cols-3 bg-white/20 dark:bg-black/20">
            <TabsTrigger value="weather"><Cloud className="w-4 h-4" /></TabsTrigger>
            <TabsTrigger value="budget"><PieChart className="w-4 h-4" /></TabsTrigger>
            <TabsTrigger value="chat"><MessageSquare className="w-4 h-4" /></TabsTrigger>
          </TabsList>
        </div>
        
        <div className="flex-1 overflow-hidden relative">
          <TabsContent value="weather" className="absolute inset-0 m-0 p-4 overflow-y-auto data-[state=inactive]:hidden">
            <WeatherWidget />
          </TabsContent>

          <TabsContent value="budget" className="absolute inset-0 m-0 p-4 overflow-y-auto data-[state=inactive]:hidden">
             <BudgetCalculator />
          </TabsContent>

          <TabsContent value="chat" className="absolute inset-0 m-0 p-4 overflow-y-auto data-[state=inactive]:hidden flex flex-col">
             <ChatAssistant />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
