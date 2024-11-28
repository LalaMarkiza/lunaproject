import { ConversationPhase } from '../../types/chat';

export class ContextManager {
  private phase: ConversationPhase = 'initial';
  private emotionalState: {
    primary: string;
    intensity: number;
    timestamp: Date;
  } | null = null;

  private physicalState: {
    symptoms: string[];
    intensity: number;
    location: string;
  } | null = null;

  setPhase(phase: ConversationPhase) {
    this.phase = phase;
  }

  getPhase(): ConversationPhase {
    return this.phase;
  }

  setEmotionalState(emotion: string, intensity: number) {
    this.emotionalState = {
      primary: emotion,
      intensity,
      timestamp: new Date()
    };
  }

  setPhysicalState(symptoms: string[], intensity: number, location: string) {
    this.physicalState = {
      symptoms,
      intensity,
      location
    };
  }

  getContext() {
    return {
      phase: this.phase,
      emotional: this.emotionalState,
      physical: this.physicalState
    };
  }
}