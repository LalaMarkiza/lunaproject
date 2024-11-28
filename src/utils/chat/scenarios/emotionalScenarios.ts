import { ConversationScenario } from '../../../types/chat';

export const emotionalScenarios: Record<string, ConversationScenario> = {
  sadness: {
    trigger: ['triste', 'déprimée', 'moral bas'],
    responses: {
      initial: {
        content: "Je comprends que vous traversiez un moment difficile. Voulez-vous me parler de ce qui vous attriste ?",
        suggestions: [
          'oui, je veux en parler',
          'je préfère faire un exercice',
          'je ne sais pas'
        ]
      },
      sharing: {
        content: "Je vous écoute avec attention. Prenez votre temps pour exprimer ce que vous ressentez.",
        nextPhase: 'emotional_exploration'
      },
      exercise: {
        content: "La méditation peut nous aider à accueillir nos émotions. Voulez-vous essayer un exercice apaisant ?",
        type: 'meditation_suggestion'
      }
    }
  },
  anxiety: {
    trigger: ['anxieuse', 'stressée', 'angoissée'],
    responses: {
      initial: {
        content: "L'anxiété peut être intense. Comment se manifeste-t-elle ?",
        suggestions: [
          'physiquement',
          'mentalement',
          'les deux'
        ]
      },
      physical: {
        content: "Les sensations physiques d'anxiété peuvent être apaisées. Voulez-vous essayer un exercice de respiration ?",
        type: 'breathing_suggestion'
      },
      mental: {
        content: "Les pensées anxieuses peuvent être envahissantes. Souhaitez-vous explorer des techniques d'ancrage ?",
        type: 'grounding_suggestion'
      }
    }
  },
  irritability: {
    trigger: ['irritable', 'énervée', 'agacée'],
    responses: {
      initial: {
        content: "L'irritabilité est fréquente pendant le cycle. Comment se manifeste-t-elle ?",
        suggestions: [
          'je m\'énerve facilement',
          'je suis tendue',
          'je me sens agitée'
        ]
      },
      support: {
        content: "Je peux vous proposer plusieurs approches pour apaiser cette tension. Que préférez-vous explorer ?",
        suggestions: [
          'exercice de respiration',
          'méditation guidée',
          'expression créative'
        ]
      }
    }
  }
};