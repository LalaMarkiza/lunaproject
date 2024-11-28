import { ConversationScenario } from '../../../types/chat';

export const selfCareScenarios: Record<string, ConversationScenario> = {
  routine_creation: {
    trigger: ['créer routine', 'habitudes bien-être'],
    responses: {
      initial: {
        content: "Créer une routine de self-care est une belle intention. Par quoi souhaitez-vous commencer ?",
        suggestions: [
          'routine du matin',
          'routine du soir',
          'rituels quotidiens'
        ]
      },
      morning: {
        content: "Une routine matinale peut transformer votre journée. Voici quelques suggestions :",
        suggestions: [
          'méditation douce',
          'étirements',
          'journaling'
        ]
      },
      evening: {
        content: "Un rituel du soir aide à mieux dormir. Que pensez-vous de ces pratiques ?",
        suggestions: [
          'relaxation guidée',
          'bain apaisant',
          'lecture calme'
        ]
      }
    }
  },
  exercise_guidance: {
    trigger: ['exercices adaptés', 'bouger cycle'],
    responses: {
      initial: {
        content: "L'activité physique s'adapte à notre cycle. Où en êtes-vous de votre cycle ?",
        suggestions: [
          'phase menstruelle',
          'phase folliculaire',
          'phase lutéale'
        ]
      },
      recommendations: {
        menstrual: {
          content: "Pendant les règles, privilégiez des mouvements doux :",
          suggestions: [
            'yoga doux',
            'marche',
            'étirements'
          ]
        },
        follicular: {
          content: "C'est le moment idéal pour être plus dynamique :",
          suggestions: [
            'cardio',
            'danse',
            'renforcement'
          ]
        }
      }
    }
  },
  nutrition_support: {
    trigger: ['alimentation', 'manger cycle'],
    responses: {
      initial: {
        content: "L'alimentation joue un rôle clé dans notre équilibre. Que souhaitez-vous explorer ?",
        suggestions: [
          'aliments phase menstruelle',
          'énergie et nutrition',
          'conseils anti-inflammatoires'
        ]
      },
      phase_specific: {
        content: "Voici des recommandations adaptées à votre phase actuelle :",
        suggestions: [
          'voir les aliments conseillés',
          'recettes adaptées',
          'conseils pratiques'
        ]
      }
    }
  }
};