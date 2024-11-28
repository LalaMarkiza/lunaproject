import { ConversationScenario } from '../../../types/chat';

export const mindfulnessScenarios: Record<string, ConversationScenario> = {
  meditation: {
    trigger: ['méditation', 'pleine conscience', 'calme mental'],
    responses: {
      initial: {
        content: "La méditation peut nous aider à mieux vivre notre cycle. Avez-vous déjà pratiqué ?",
        suggestions: [
          'jamais médité',
          'un peu d\'expérience',
          'pratique régulière'
        ]
      },
      beginner: {
        content: "Commençons doucement avec un exercice simple :",
        type: 'exercise',
        exercise: {
          name: 'Respiration consciente',
          duration: 5,
          steps: [
            'Installez-vous confortablement',
            'Respirez naturellement',
            'Observez votre souffle'
          ]
        }
      },
      intermediate: {
        content: "Voici une pratique adaptée à votre expérience :",
        type: 'exercise',
        exercise: {
          name: 'Méditation guidée',
          duration: 10,
          focus: 'Équilibre hormonal'
        }
      }
    }
  },
  bodyAwareness: {
    trigger: ['conscience corporelle', 'sensations', 'corps'],
    responses: {
      initial: {
        content: "La conscience corporelle nous aide à mieux comprendre notre cycle. Que souhaitez-vous explorer ?",
        suggestions: [
          'scan corporel',
          'mouvements conscients',
          'respiration profonde'
        ]
      },
      practice: {
        content: "Je vous guide dans cet exercice de conscience corporelle :",
        type: 'exercise',
        exercise: {
          name: 'Scan corporel',
          duration: 8,
          focus: 'Connexion cycle'
        }
      }
    }
  }
};