export type ConversationPhase = 
  | 'initial'
  | 'physical_assessment'
  | 'emotional_support'
  | 'exercise_proposed'
  | 'exercising'
  | 'post_exercise'
  | 'suggesting_techniques'
  | 'follow_up'
  | 'discussing';

export interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  isExercise?: boolean;
  exercise?: Exercise;
  suggestions?: string[];
  onExerciseComplete?: () => void;
}

export interface Exercise {
  id: string;
  type: string;
  steps: ExerciseStep[];
  totalDuration: number;
}

export interface ExerciseStep {
  phase: 'inhale' | 'hold' | 'exhale';
  duration: number;
  instruction: string;
}

export interface ChatResponse {
  type: 'text' | 'exercise';
  content: string;
  delay?: number;
  exercise?: Exercise;
  suggestions?: string[];
  nextPhase?: ConversationPhase;
}

export interface ConversationState {
  phase: ConversationPhase;
  context: ConversationContext;
  assessment: AssessmentData;
}

export interface ConversationContext {
  currentScenario: string | null;
  lastResponse: string | null;
  previousResponses: Set<string>;
  messageCount: number;
  category?: string;
  subCategory?: string;
}

export interface AssessmentData {
  category?: string;
  intensity?: number;
  duration?: string;
  details?: string;
  location?: string;
}

export interface MessageAnalysis {
  mainCategory: string | null;
  subCategory?: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  needsExercise: boolean;
  isRepeat: boolean;
  keywords: string[];
  intensity?: number;
  physical?: {
    location?: string;
    intensity?: number;
  };
  emotional?: {
    emotion?: string;
    intensity?: number;
  };
}