export interface Destination {
  name: string;
  lat: number;
  lng: number;
  placeId?: string;
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  timeEstimate: string; // e.g., "10:00 AM - 1:00 PM"
  costEstimate: number;
  location?: {
    lat: number;
    lng: number;
    name: string;
  };
  type: "attraction" | "dining" | "transit" | "leisure";
}

export interface DayPlan {
  dayNumber: number;
  date?: string;
  theme?: string;
  morning: Activity[];
  afternoon: Activity[];
  evening: Activity[];
  dailyCostEstimate: number;
}

export interface Itinerary {
  id: string;
  destination: Destination;
  startDate: string;
  endDate: string;
  days: DayPlan[];
  totalCostEstimate: number;
  currency: string;
}

export interface BudgetCategory {
  id: string;
  name: "Flights" | "Hotels" | "Food" | "Transport" | "Activities" | "Shopping" | "Other";
  planned: number;
  actual: number;
}

export interface TripState {
  destination: Destination | null;
  dates: { from?: Date; to?: Date } | null;
  budget: number;
  travelStyle: string;
  interests: string[];
  
  itinerary: Itinerary | null;
  budgetCategories: BudgetCategory[];
  
  isGenerating: boolean;
  
  // Actions
  setDestination: (dest: Destination) => void;
  setDates: (dates: { from?: Date; to?: Date } | null) => void;
  setBudget: (amount: number) => void;
  setTravelStyle: (style: string) => void;
  setInterests: (interests: string[]) => void;
  setItinerary: (itinerary: Itinerary) => void;
  updateBudgetCategory: (id: string, actual: number) => void;
  setIsGenerating: (status: boolean) => void;
}
