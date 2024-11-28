export interface DayData {
  date: Date;
  isToday: boolean;
  isSelected: boolean;
  cycleDay?: number;
  phase?: 'menstrual' | 'follicular' | 'ovulatory' | 'luteal';
  symptoms?: string[];
  notes?: string;
  mood?: 'happy' | 'neutral' | 'sad' | 'irritated';
  flow?: 'light' | 'medium' | 'heavy';
  isPeriodDay?: boolean;
  isFertileDay?: boolean;
  isOvulationDay?: boolean;
  predictedPeriod?: boolean;
}

export interface CalendarState {
  selectedDate: Date;
  cycleLength: number;
  periodLength: number;
  lastPeriodStart: Date | null;
  symptoms: Record<string, string[]>;
  notes: Record<string, string>;
  moods: Record<string, string>;
  flow: Record<string, string>;
  periodHistory: Date[];
  customSymptoms: string[];
}

export interface CyclePhase {
  name: string;
  color: string;
  description: string;
  symptoms: string[];
  recommendations: string[];
}