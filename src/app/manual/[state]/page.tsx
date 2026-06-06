import Link from "next/link";
import { travelManualData } from "@/data/indiaTravelManual";
import { ArrowLeft, MapPin, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const stateData = travelManualData.find(s => s.id === resolvedParams.state);
  
  if (!stateData) {
    return { title: "State Not Found" };
  }

  return {
    title: `${stateData.name} Tourist Spots & Guide`,
    description: `Explore the top tourist cities and spots in ${stateData.name}. ${stateData.description}`,
    openGraph: {
      title: `${stateData.name} Tourist Spots - Wander AI`,
      description: stateData.description,
      images: [stateData.imageUrl]
    }
  };
}

export default async function StateManualPage({ params }: { params: Promise<{ state: string }> }) {
  const resolvedParams = await params;
  const stateId = resolvedParams.state;
  const stateData = travelManualData.find(s => s.id === stateId);

  if (!stateData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* State Hero */}
      <div className="relative h-[40vh] w-full">
        <img 
          src={stateData.imageUrl} 
          alt={stateData.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 max-w-7xl mx-auto">
          <Link href="/manual">
            <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/20 mb-6 w-fit">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to States
            </Button>
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{stateData.name}</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            {stateData.description}
          </p>
        </div>
      </div>

      {/* Cities and Spots */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        {stateData.cities.map((city) => (
          <div key={city.id} className="space-y-8">
            <div className="flex flex-col space-y-2">
              <h2 className="text-3xl font-bold flex items-center">
                <Map className="mr-3 text-primary w-8 h-8" /> {city.name}
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl ml-11">{city.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-0 md:ml-11">
              {city.spots.map((spot) => (
                <div key={spot.id} className="glass-card rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform">
                  <div className="aspect-video w-full relative">
                    <img 
                      src={spot.imageUrl} 
                      alt={spot.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-primary" /> {spot.name}
                    </h3>
                    <p className="text-muted-foreground line-clamp-3 text-sm">
                      {spot.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
