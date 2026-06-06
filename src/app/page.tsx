import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Compass, Map, Sun, Palmtree } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      
      {/* Navbar */}
      <nav className="w-full p-6 flex justify-between items-center absolute top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-premium flex items-center justify-center">
            <Compass className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-white drop-shadow-md">Wander AI</span>
        </div>
        <Link href="/planner">
          <Button variant="secondary" className="glass bg-white/20 text-white hover:bg-white/30 border-none font-semibold">
            Try Planner
          </Button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center text-center p-6 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="z-10 max-w-4xl space-y-6 mt-16">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg tracking-tight">
            Your Personal <br/><span className="text-gradient drop-shadow-none">AI Tour Guide</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/90 drop-shadow max-w-2xl mx-auto font-light">
            Discover the world with intelligent, personalized itineraries crafted instantly. Stop planning, start exploring.
          </p>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/planner">
              <Button size="lg" className="h-14 px-8 text-lg bg-black hover:bg-black/80 text-white shadow-2xl transition-all hover:scale-105">
                AI Travel Planner
              </Button>
            </Link>
            <Link href="/manual">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 shadow-2xl transition-all hover:scale-105">
                Travel Manual (India)
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Why Travel with Wander AI?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the future of travel planning. Our advanced algorithms curate the perfect trip based on your unique style.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card p-8 space-y-4 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Map className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold">Smart Itineraries</h3>
            <p className="text-muted-foreground">Minute-by-minute schedules customized to your pace, budget, and travel interests.</p>
          </div>

          <div className="glass-card p-8 space-y-4 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
              <Sun className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold">Live Weather</h3>
            <p className="text-muted-foreground">Stay prepared with integrated forecasts so you never get caught in the rain without an umbrella.</p>
          </div>

          <div className="glass-card p-8 space-y-4 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
              <Palmtree className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold">Budget Tracking</h3>
            <p className="text-muted-foreground">Keep your finances in check with our visual budget calculator designed for travelers.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 text-center border-t text-muted-foreground">
        <p>© 2026 Wander AI. All rights reserved.</p>
      </footer>

    </div>
  );
}
