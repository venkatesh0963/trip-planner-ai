import Link from "next/link";
import { travelManualData } from "@/data/indiaTravelManual";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "India Travel Manual - Discover States & Tourist Spots",
  description: "Browse an extensive directory of all Indian states, major cities, and top tourist attractions curated by Wander AI.",
};

export default function TravelManual() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">India Travel Manual</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore the incredibly diverse states of India. Select a destination to discover its top tourist spots.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {travelManualData.map((state) => (
            <Link key={state.id} href={`/manual/${state.id}`}>
              <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer shadow-lg hover:shadow-xl transition-all">
                <img 
                  src={state.imageUrl} 
                  alt={state.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-3xl font-bold text-white mb-2">{state.name}</h2>
                  <p className="text-white/80 line-clamp-2">{state.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
