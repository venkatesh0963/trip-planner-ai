import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { destination, days, budget, travelStyle, interests } = body;

    const prompt = `
You are an expert AI Travel Planner. Generate a complete, structured travel itinerary for the following trip:
- Destination: ${destination.name}
- Duration: ${days} days
- Total Budget: ₹${budget}
- Travel Style: ${travelStyle}
- Interests: ${interests.join(", ")}

Return the response strictly as a JSON object that matches this structure:
{
  "id": "unique-trip-id",
  "destination": { "name": "${destination.name}", "lat": ${destination.lat}, "lng": ${destination.lng} },
  "startDate": "YYYY-MM-DD",
  "endDate": "YYYY-MM-DD",
  "totalCostEstimate": number,
  "currency": "INR",
  "days": [
    {
      "dayNumber": number,
      "theme": "Theme of the day (e.g., Historic Center Exploration)",
      "dailyCostEstimate": number,
      "morning": [
        {
          "id": "act-1",
          "name": "Activity Name",
          "description": "Short description of what to do and local tips.",
          "timeEstimate": "09:00 AM - 11:30 AM",
          "costEstimate": number,
          "type": "attraction" | "dining" | "transit" | "leisure",
          "location": { "lat": number, "lng": number, "name": "Exact location name for map pin" }
        }
      ],
      "afternoon": [ /* similar structure */ ],
      "evening": [ /* similar structure */ ]
    }
  ]
}
Ensure the estimated costs add up reasonably close to the budget. Provide realistic and high-quality recommendations. Output ONLY valid JSON.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("No text returned from Gemini");
    }

    const cleanText = text.replace(/```(?:json)?\n?/g, '').trim();
    const itinerary = JSON.parse(cleanText);
    return NextResponse.json(itinerary);

  } catch (error: any) {
    console.error("Error generating itinerary:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
