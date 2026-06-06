import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Wander AI - Your Personal AI Travel Planner",
    template: "%s | Wander AI",
  },
  description: "Discover the world with intelligent, personalized itineraries crafted instantly. Wander AI is your ultimate travel companion and guide.",
  keywords: ["AI travel planner", "vacation itinerary", "tour guide", "India travel manual", "trip planner", "AI tourism"],
  authors: [{ name: "Wander AI" }],
  creator: "Wander AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wander-ai.com",
    title: "Wander AI - Your Personal AI Travel Planner",
    description: "Discover the world with intelligent, personalized itineraries crafted instantly.",
    siteName: "Wander AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wander AI - Your Personal AI Travel Planner",
    description: "Discover the world with intelligent, personalized itineraries crafted instantly.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
