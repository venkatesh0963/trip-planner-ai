import { Sidebar } from "@/components/layout/Sidebar";
import { CenterPanel } from "@/components/layout/CenterPanel";
import { RightPanel } from "@/components/layout/RightPanel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Travel Itinerary Generator",
  description: "Plan your entire trip in seconds. Generate AI-powered travel itineraries, track your budget, and check live weather forecasts.",
};

export default function PlannerPage() {
  return (
    <main className="flex h-screen w-full overflow-hidden bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-background/80 dark:bg-background/90 backdrop-blur-3xl z-0" />
      
      {/* App Container */}
      <div className="z-10 flex w-full h-full">
        {/* Left Sidebar (Trip Params) */}
        <div className="w-[350px] flex-shrink-0 border-r border-white/20 dark:border-white/10 glass z-20">
          <Sidebar />
        </div>

        {/* Center Panel (Itinerary) */}
        <div className="flex-1 flex flex-col relative z-10">
          <CenterPanel />
        </div>

        {/* Right Panel (Map, Weather, Tools) */}
        <div className="w-[400px] flex-shrink-0 z-20 shadow-[-10px_0_30px_-15px_rgba(0,0,0,0.3)]">
          <RightPanel />
        </div>
      </div>
    </main>
  );
}
