import { create } from 'zustand';
import { TripState, Destination, Itinerary } from '@/types/trip';

const initialBudgetCategories = [
  { id: '1', name: 'Flights', planned: 0, actual: 0 },
  { id: '2', name: 'Hotels', planned: 0, actual: 0 },
  { id: '3', name: 'Food', planned: 0, actual: 0 },
  { id: '4', name: 'Transport', planned: 0, actual: 0 },
  { id: '5', name: 'Activities', planned: 0, actual: 0 },
  { id: '6', name: 'Shopping', planned: 0, actual: 0 },
] as const;

export const useTripStore = create<TripState>((set) => ({
  destination: null,
  dates: null,
  budget: 50000,
  travelStyle: 'Balanced',
  interests: [],
  
  itinerary: null,
  budgetCategories: [...initialBudgetCategories],
  
  isGenerating: false,
  
  setDestination: (dest) => set({ destination: dest }),
  setDates: (dates) => set({ dates }),
  setBudget: (amount) => set({ budget: amount }),
  setTravelStyle: (style) => set({ travelStyle: style }),
  setInterests: (interests) => set({ interests }),
  
  setItinerary: (itinerary) => set((state) => {
    // Distribute budget based on itinerary estimates if possible, 
    // or keep it simple and just update the itinerary.
    return { itinerary, isGenerating: false };
  }),
  
  updateBudgetCategory: (id, actual) => set((state) => ({
    budgetCategories: state.budgetCategories.map(cat => 
      cat.id === id ? { ...cat, actual } : cat
    )
  })),
  
  setIsGenerating: (status) => set({ isGenerating: status })
}));
