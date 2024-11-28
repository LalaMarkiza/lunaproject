import { ChatResponse, MessageAnalysis } from '../../../types/chat';
import { emotionalResponses } from './categories/emotionalResponses';
import { physicalResponses } from './categories/physicalResponses';
import { BREATHING_EXERCISE, RELAXATION_EXERCISE, ANTI_STRESS_EXERCISE } from '../../exercises';

export class ResponseManager {
  private lastResponse: string | null = null;

  getInitialResponse(): ChatResponse {
    return {
      type: 'text',
      content: "Bonjour, je suis Luna 🌙 Comment puis-je vous accompagner aujourd'hui ?",
      suggestions: [
        'j\'ai des douleurs physiques',
        'j\'ai le moral dans les chaussettes',
        'je me sens stressée',
        'j\'ai des questions sur mon cycle',
        'je veux prendre soin de moi'
      ],
      delay: 1000
    };
  }

  getPhysicalResponse(analysis: MessageAnalysis): ChatResponse {
    const { location, intensity } = analysis.physical || {};

    if (!location) {
      return {
        type: 'text',
        content: "Où ressentez-vous ces douleurs ?",
        suggestions: [
          'j\'ai mal au ventre',
          'j\'ai mal à la tête',
          'j\'ai mal au dos',
          'j\'ai des douleurs aux seins',
          'j\'ai des courbatures'
        ],
        delay: 1000
      };
    }

    switch (location) {
      case 'ventre':
        return physicalResponses.pain.menstrual.initial();
      case 'tête':
        return physicalResponses.pain.headache.initial();
      default:
        return {
          type: 'text',
          content: "Comment puis-je vous aider à soulager cette douleur ?",
          suggestions: [
            'exercice de respiration',
            'conseils pratiques',
            'techniques de relaxation'
          ],
          delay: 1000
        };
    }
  }

  getEmotionalResponse(analysis: MessageAnalysis): ChatResponse {
    const { emotion, intensity } = analysis.emotional || {};

    if (!emotion) {
      return {
        type: 'text',
        content: "Comment vous sentez-vous exactement ?",
        suggestions: [
          'je me sens triste',
          'je me sens anxieuse',
          'je me sens irritable',
          'je me sens seule',
          'je me sens dépassée'
        ],
        delay: 1000
      };
    }

    switch (emotion) {
      case 'anxiety':
        return emotionalResponses.anxiety.initial(intensity || 2);
      case 'sadness':
        return emotionalResponses.sadness.initial(intensity || 2);
      case 'irritability':
        return emotionalResponses.irritability.initial(intensity || 2);
      default:
        return {
          type: 'text',
          content: "Je suis là pour vous écouter. Voulez-vous m'en dire plus ?",
          suggestions: [
            'parler de ce que je ressens',
            'faire un exercice apaisant',
            'avoir des conseils'
          ],
          delay: 1000
        };
    }
  }

  getExerciseResponse(type: string): ChatResponse {
    switch (type) {
      case 'breathing':
        return {
          type: 'exercise',
          content: "Super, commençons l'exercice de respiration.",
          exercise: BREATHING_EXERCISE,
          delay: 800
        };
      case 'relaxation':
        return {
          type: 'exercise',
          content: "Installez-vous confortablement pour cet exercice de relaxation.",
          exercise: RELAXATION_EXERCISE,
          delay: 800
        };
      case 'anti-stress':
        return {
          type: 'exercise',
          content: "Prenons un moment pour apaiser ce stress ensemble.",
          exercise: ANTI_STRESS_EXERCISE,
          delay: 800
        };
      default:
        return this.getDefaultResponse();
    }
  }

  getPostExerciseResponse(feedback: string): ChatResponse {
    if (feedback.includes('mieux')) {
      return {
        type: 'text',
        content: "Je suis contente que cet exercice vous ait fait du bien. Souhaitez-vous explorer d'autres techniques ?",
        suggestions: [
          'oui, je veux continuer',
          'pas maintenant, merci',
          'parler d\'autre chose'
        ],
        delay: 1000
      };
    }

    return {
      type: 'text',
      content: "Comment puis-je vous aider autrement ?",
      suggestions: [
        'essayer un autre exercice',
        'parler de ce que je ressens',
        'avoir des conseils pratiques'
      ],
      delay: 1000
    };
  }

  getDefaultResponse(): ChatResponse {
    return {
      type: 'text',
      content: "Je suis là pour vous écouter. Comment puis-je vous aider ?",
      suggestions: [
        'j\'ai des douleurs physiques',
        'j\'ai le moral dans les chaussettes',
        'je me sens stressée',
        'j\'ai des questions sur mon cycle'
      ],
      delay: 1000
    };
  }

  setLastResponse(response: string): void {
    this.lastResponse = response;
  }

  getLastResponse(): string | null {
    return this.lastResponse;
  }
}