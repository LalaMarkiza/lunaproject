import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CalendarState } from '../types/calendar';
import { addDays, startOfDay, differenceInDays, isSameDay } from 'date-fns';

interface CalendarStore extends CalendarState {
  setSelectedDate: (date: Date) => void;
  setLastPeriodStart: (date: Date) => void;
  addSymptom: (date: string, symptom: string) => void;
  removeSymptom: (date: string, symptom: string) => void;
  addNote: (date: string, note: string) => void;
  setCycleLength: (length: number) => void;
  setPeriodLength: (length: number) => void;
  setMood: (date: string, mood: string) => void;
  setFlow: (date: string, flow: string) => void;
  addPeriodDate: (date: Date) => void;
  isPeriodDay: (date: Date) => boolean;
  predictNextPeriod: () => Date | null;
  getFertileWindow: () => { start: Date; end: Date } | null;
  addCustomSymptom: (symptom: string) => void;
  removeCustomSymptom: (symptom: string) => void;
}

export const useCalendarStore = create<CalendarStore>()(
  persist(
    (set, get) => ({
      selectedDate: new Date(),
      cycleLength: 28,
      periodLength: 5,
      lastPeriodStart: null,
      symptoms: {},
      notes: {},
      moods: {},
      flow: {},
      periodHistory: [],
      customSymptoms: [],

      setSelectedDate: (date) => set({ selectedDate: date }),
      
      setLastPeriodStart: (date) => {
        const newDate = startOfDay(date);
        set((state) => ({
          lastPeriodStart: newDate,
          periodHistory: [...state.periodHistory, newDate]
        }));
      },
      
      setCycleLength: (length) => set({ cycleLength: length }),
      
      setPeriodLength: (length) => set({ periodLength: length }),

      addSymptom: (date, symptom) => set((state) => ({
        symptoms: {
          ...state.symptoms,
          [date]: [...(state.symptoms[date] || []), symptom]
        }
      })),

      removeSymptom: (date, symptom) => set((state) => ({
        symptoms: {
          ...state.symptoms,
          [date]: state.symptoms[date]?.filter((s) => s !== symptom) || []
        }
      })),
      
      addNote: (date, note) => set((state) => ({
        notes: {
          ...state.notes,
          [date]: note
        }
      })),

      setMood: (date, mood) => set((state) => ({
        moods: {
          ...state.moods,
          [date]: mood
        }
      })),

      setFlow: (date, flow) => set((state) => ({
        flow: {
          ...state.flow,
          [date]: flow
        }
      })),

      addPeriodDate: (date) => set((state) => ({
        periodHistory: [...state.periodHistory, startOfDay(date)]
      })),

      isPeriodDay: (date) => {
        const { lastPeriodStart, periodLength, cycleLength } = get();
        if (!lastPeriodStart) return false;

        const daysSinceStart = differenceInDays(date, lastPeriodStart);
        const cycleDay = ((daysSinceStart % cycleLength) + cycleLength) % cycleLength;
        
        return cycleDay < periodLength;
      },

      predictNextPeriod: () => {
        const { lastPeriodStart, cycleLength } = get();
        if (!lastPeriodStart) return null;
        return addDays(lastPeriodStart, cycleLength);
      },

      getFertileWindow: () => {
        const { lastPeriodStart, cycleLength } = get();
        if (!lastPeriodStart) return null;

        const ovulationDay = addDays(lastPeriodStart, cycleLength - 14);
        return {
          start: addDays(ovulationDay, -5),
          end: addDays(ovulationDay, 1)
        };
      },

      addCustomSymptom: (symptom) => set((state) => ({
        customSymptoms: [...state.customSymptoms, symptom]
      })),

      removeCustomSymptom: (symptom) => set((state) => ({
        customSymptoms: state.customSymptoms.filter(s => s !== symptom)
      }))
    }),
    {
      name: 'calendar-storage'
    }
  )
);