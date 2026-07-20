# 🌍 Wander AI - Personal AI Travel Planner.

![Wander AI Banner](https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop)

**Wander AI** is a premium, AI-powered travel planning SaaS application built with Next.js 15. It takes the hassle out of vacation planning by generating complete, personalized, minute-by-minute travel itineraries using Google's Gemini AI. 

Whether you're planning a quick weekend getaway or a month-long expedition, Wander AI provides smart scheduling, real-time weather forecasts, budget tracking, and an interactive travel manual.

---

## ✨ Key Features

- **🤖 AI-Powered Itineraries:** Powered by Gemini 2.5 Flash. Generates structured, highly detailed travel plans tailored to your destination, dates, budget, and unique travel style.
- **🌤️ Live Weather Integration:** Uses the OpenWeather API to provide a 5-day forecast for your destination so you're never caught off guard.
- **💰 Smart Budget Calculator:** Interactive Recharts-powered pie charts help you track your estimated vs. actual spending across categories (Flights, Hotels, Food, Activities).
- **💬 Context-Aware Chat Assistant:** A built-in AI chatbot that knows your current trip details and can answer specific questions, recommend local cuisines, or give packing advice.
- **🗺️ India Travel Manual:** A dedicated explorer directory covering all 28 Indian States and major Union Territories, complete with nested cities and top tourist spots.
- **🔗 Trip Sharing & Export:** Convert your generated itineraries into beautifully formatted PDFs or share them instantly via compressed URL links.
- **🎨 Premium UI/UX:** Built with Tailwind CSS v4, Framer Motion, and Shadcn UI. Features a stunning glassmorphism design, soft gradients, and seamless micro-animations.
- **🔍 SEO Optimized:** Fully indexable with dynamic OpenGraph metadata, title templates, and an automated XML sitemap.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
- **Data Visualization:** [Recharts](https://recharts.org/)
- **AI Integration:** Google Gemini API (`@google/genai`)
- **External APIs:** OpenWeather API

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js (v18+) installed. You will also need API keys for:
1. **Google Gemini** (Get it from [Google AI Studio](https://aistudio.google.com/))
2. **OpenWeather** (Get it from [OpenWeatherMap](https://openweathermap.org/api))

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MRVB96/trip-planner-ai.git
   cd trip-planner-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Environment Variables:
   Create a `.env.local` file in the root of the project and add your API keys:
   ```env
   GEMINI_API_KEY="your_gemini_api_key_here"
   NEXT_PUBLIC_OPENWEATHER_API_KEY="your_openweather_api_key_here"
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to start planning!

---

## 📂 Project Structure

- `/src/app` - Next.js App Router pages, layouts, and API routes..
  - `/api` - Backend routes for Gemini and OpenWeather integrations..
  - `/planner` - The core AI itinerary generator application..
  - `/manual` - The dynamic India Travel Manual directory..
- `/src/components` - Reusable React components..
  - `/features` - Widgets like the Budget Calculator, Weather, and Chat..
  - `/layout` - The tripartite layout panels (Sidebar, CenterPanel, RightPanel).
  - `/ui` - Shadcn UI foundational components.
- `/src/store` - Zustand global state management.
- `/src/data` - Static mock data (e.g., India Travel Manual spots).

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/MRVB96/trip-planner-ai/issues).

## 📄 License
This project is licensed under the MIT License.
