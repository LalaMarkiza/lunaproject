import { ConversationScenario } from '../../../types/chat';

export const stressScenarios: Record<string, ConversationScenario> = {
  workStress: {
    trigger: ['stress professionnel', 'travail', 'surcharge'],
    responses: {
      initial: {
        content: "Le stress professionnel peut être particulièrement intense pendant le cycle. Comment se manifeste-t-il ?",
        suggestions: [
          'surcharge de travail',
          'difficultés de concentration',
          'tensions avec les collègues',
          'fatigue intense'
        ]
      },
      followUp: {
        content: "Je peux vous proposer plusieurs approches pour gérer ce stress. Que préférez-vous explorer ?",
        suggestions: [
          'exercices de respiration',
          'organisation du temps',
          'méditation courte',
          'pauses actives'
        ]
      }
    }
  },
  personalStress: {
    trigger: ['stress personnel', 'vie personnelle', 'relations'],
    responses: {
      initial: {
        content: "Le stress personnel peut affecter notre équilibre. Souhaitez-vous en parler ?",
        suggestions: [
          'oui, parlons-en',
          'je préfère des exercices',
          'des conseils pratiques'
        ]
      },
      techniques: {
        content: "Voici des techniques qui peuvent vous aider :",
        suggestions: [
          'méditation guidée',
          'journal émotionnel',
          'exercice physique doux',
          'routine apaisante'
        ]
      }
    }
  }
};