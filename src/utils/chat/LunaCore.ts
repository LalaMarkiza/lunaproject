import { ChatResponse } from '../../types/chat';
import { ContextManager } from './contextManager';
import { MessageAnalyzer } from './messageAnalyzer';
import { emotionalResponses } from './responses/emotionalResponses';
import { physicalResponses } from './responses/physicalResponses';

export class LunaCore {
  private contextManager: ContextManager;
  private messageAnalyzer: MessageAnalyzer;

  constructor() {
    this.contextManager = new ContextManager();
    this.messageAnalyzer = new MessageAnalyzer();
  }

  processMessage(message: string): ChatResponse {
    const { emotion, intensity } = this.messageAnalyzer.detectEmotion(message);
    
    if (emotion) {
      this.contextManager.setEmotionalState(emotion, intensity);
      return this.handleEmotionalResponse(emotion, intensity);
    }

    if (message.includes('mal') && message.includes('ventre')) {
      return physicalResponses.pain.menstrual.initial();
    }

    if (this.messageAnalyzer.isPositiveResponse(message) && 
        this.contextManager.getPhase() === 'exercise_proposed') {
      return physicalResponses.pain.menstrual.exercise();
    }

    return {
      type: 'text',
      content: "Je suis là pour vous écouter. Comment puis-je vous aider ?",
      suggestions: ['parler', 'exercice', 'conseils'],
      delay: 1000
    };
  }

  private handleEmotionalResponse(emotion: string, intensity: number): ChatResponse {
    switch (emotion) {
      case 'anxiety':
        return emotionalResponses.anxiety.initial(intensity);
      case 'sadness':
        return emotionalResponses.sadness.initial(intensity);
      case 'irritability':
        return emotionalResponses.irritability.initial(intensity);
      default:
        return {
          type: 'text',
          content: "Comment puis-je vous accompagner ?",
          suggestions: ['parler', 'exercice', 'conseils'],
          delay: 1000
        };
    }
  }
}