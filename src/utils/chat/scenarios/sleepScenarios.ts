import { ConversationScenario } from '../../../types/chat';

export const sleepScenarios: Record<string, ConversationScenario> = {
  insomnia: {
    trigger: ['mal à dormir', 'insomnie', 'sommeil perturbé'],
    responses: {
      initial: {
        content: "Les troubles du sommeil sont fréquents pendant le cycle. Quelle difficulté rencontrez-vous principalement ?",
        suggestions: [
          'difficultés à m\'endormir',
          'réveils nocturnes',
          'sommeil non réparateur'
        ]
      },
      techniques: {
        content: "Je peux vous proposer plusieurs approches pour améliorer votre sommeil. Que souhaitez-vous essayer ?",
        suggestions: [
          'routine du soir',
          'exercices de respiration',
          'méditation guidée',
          'conseils pratiques'
        ]
      }
    }
  },
  morningFatigue: {
    trigger: ['fatigue matin', 'pas reposée', 'épuisée'],
    responses: {
      initial: {
        content: "La fatigue matinale peut être liée à votre cycle. Depuis combien de temps ressentez-vous cela ?",
        suggestions: [
          'depuis quelques jours',
          'depuis le début du cycle',
          'c\'est récurrent'
        ]
      },
      support: {
        content: "Voici des suggestions pour retrouver plus d'énergie :",
        suggestions: [
          'routine matinale douce',
          'alimentation énergisante',
          'exercices revigorants',
          'rythme de sommeil régulier'
        ]
      }
    }
  }
};