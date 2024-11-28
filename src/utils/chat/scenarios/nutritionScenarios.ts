import { ConversationScenario } from '../../../types/chat';

export const nutritionScenarios: Record<string, ConversationScenario> = {
  cycleNutrition: {
    trigger: ['alimentation cycle', 'manger règles', 'nutrition'],
    responses: {
      initial: {
        content: "L'alimentation joue un rôle important dans l'équilibre du cycle. Quelle phase traversez-vous ?",
        suggestions: [
          'phase menstruelle',
          'phase folliculaire',
          'phase lutéale'
        ]
      },
      menstrual: {
        content: "Pendant les règles, privilégiez :",
        suggestions: [
          'aliments riches en fer',
          'fruits et légumes anti-inflammatoires',
          'tisanes apaisantes'
        ]
      },
      follicular: {
        content: "En phase folliculaire, favorisez :",
        suggestions: [
          'protéines légères',
          'légumes frais',
          'fruits énergisants'
        ]
      },
      luteal: {
        content: "En phase lutéale, optez pour :",
        suggestions: [
          'aliments riches en magnésium',
          'protéines complexes',
          'oméga-3'
        ]
      }
    }
  },
  cravings: {
    trigger: ['envies sucre', 'fringales', 'faim'],
    responses: {
      initial: {
        content: "Les envies alimentaires sont naturelles pendant le cycle. Quand surviennent-elles principalement ?",
        suggestions: [
          'avant les règles',
          'pendant les règles',
          'tout le temps'
        ]
      },
      alternatives: {
        content: "Voici des alternatives saines pour satisfaire vos envies :",
        suggestions: [
          'fruits secs',
          'chocolat noir',
          'smoothies naturels'
        ]
      }
    }
  }
};