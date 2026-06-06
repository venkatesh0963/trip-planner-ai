"use client";

import { useTripStore } from "@/store/useTripStore";
import { useEffect, useState } from "react";
import { Cloud, Droplets, Wind, Sun } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";

export function WeatherWidget() {
  const { destination } = useTripStore();
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (destination?.lat && destination?.lng) {
      setLoading(true);
      fetch(`/api/weather?lat=${destination.lat}&lon=${destination.lng}`)
        .then(res => res.json())
        .then(data => {
          if (!data.error) {
            setWeather(data);
          }
        })
        .finally(() => setLoading(false));
    }
  }, [destination]);

  if (!destination) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-muted-foreground p-4">
        <Sun className="w-12 h-12 mb-4 opacity-20" />
        <p>Set a destination to see the forecast</p>
      </div>
    );
  }

  if (loading) {
    return <div className="p-4 flex justify-center text-muted-foreground">Loading forecast...</div>;
  }

  if (!weather || !weather.list) {
    return <div className="p-4 flex justify-center text-muted-foreground">Weather unavailable</div>;
  }

  // Group by day
  const dailyForecasts = weather.list.reduce((acc: any, item: any) => {
    const date = item.dt_txt.split(' ')[0];
    if (!acc[date] && Object.keys(acc).length < 5) {
      acc[date] = item;
    }
    return acc;
  }, {});

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Cloud className="w-5 h-5 text-blue-400" />
        <h3 className="font-semibold text-lg">5-Day Forecast</h3>
      </div>
      
      <div className="grid gap-3">
        {Object.values(dailyForecasts).map((day: any, idx: number) => (
          <Card key={idx} className="glass border-none">
            <CardContent className="p-3 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-medium">{format(new Date(day.dt * 1000), 'EEE, MMM d')}</span>
                <span className="text-sm text-muted-foreground capitalize">{day.weather[0].description}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="font-bold text-lg">{Math.round(day.main.temp)}°C</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <Droplets className="w-3 h-3"/> {Math.round(day.pop * 100)}%
                  </div>
                </div>
                <img 
                  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} 
                  alt="weather icon"
                  className="w-10 h-10"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
