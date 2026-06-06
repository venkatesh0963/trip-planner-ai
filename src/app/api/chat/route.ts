import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: Request) {
  try {
    const { messages, context } = await req.json();

    const systemPrompt = `You are a helpful and expert AI travel assistant. 
    You have context of the user's current trip planning:
    Destination: ${context?.destination?.name || 'Not set yet'}
    Dates: ${context?.dates?.from ? new Date(context.dates.from).toLocaleDateString() : 'Not set'} to ${context?.dates?.to ? new Date(context.dates.to).toLocaleDateString() : 'Not set'}
    Budget: ₹${context?.budget || 'Not set'}
    Travel Style: ${context?.travelStyle || 'Not set'}
    
    Answer the user's questions concisely and beautifully. You can suggest places to go, what to pack, give weather advice, or recommend budget tips.`;

    // Format history for Gemini
    const contents = [
      { role: 'user', parts: [{ text: systemPrompt }] },
      { role: 'model', parts: [{ text: 'Understood. How can I help you today?' }] },
      ...messages.map((m: any) => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }]
      }))
    ];

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: contents,
    });

    const text = response.text;
    return NextResponse.json({ text });

  } catch (error: any) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
