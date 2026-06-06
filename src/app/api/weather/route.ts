import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");

    if (!lat || !lon) {
      return NextResponse.json({ error: "Missing coordinates" }, { status: 400 });
    }

    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
    if (!apiKey) {
      throw new Error("OpenWeather API key is not configured");
    }

    // Use OpenWeather API (One Call API 3.0 or standard forecast API depending on key)
    // We will use standard 5 day / 3 hour forecast for broad compatibility, or current weather + daily if available.
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch weather data");
    }

    return NextResponse.json(data);

  } catch (error: any) {
    console.error("Weather API error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
