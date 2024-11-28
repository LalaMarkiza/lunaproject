import { ConversationScenario } from '../../../types/chat';

export const exerciseScenarios: Record<string, ConversationScenario> = {
  cycleExercise: {
    trigger: ['sport cycle', 'activité physique', 'bouger'],
    responses: {
      initial: {
        content: "L'activité physique s'adapte à votre cycle. Dans quelle phase êtes-vous ?",
        suggestions: [
          'règles',
          'après les règles',
          'avant les règles'
        ]
      },
      menstrual: {
        content: "Pendant les règles, privilégiez des activités douces :",
        suggestions: [
          'yoga doux',
          'marche',
          'étirements légers'
        ]
      },
      follicular: {
        content: "C'est le moment idéal pour être plus active :",
        suggestions: [
          'cardio',
          'renforcement musculaire',
          'sports dynamiques'
        ]
      }
    }
  },
  fatigue: {
    trigger: ['fatigue sport', 'pas énergie', 'épuisée'],
    responses: {
      initial: {
        content: "La fatigue est normale pendant certaines phases. Comment vous sentez-vous ?",
        suggestions: [
          'très fatiguée',
          'manque d\'énergie',
          'démotivée'
        ]
      },
      suggestions: {
        content: "Voici des activités adaptées à votre énergie :",
        suggestions: [
          'étirements doux',
          'marche consciente',
          'exercices respiratoires'
        ]
      }
    }
  }
};