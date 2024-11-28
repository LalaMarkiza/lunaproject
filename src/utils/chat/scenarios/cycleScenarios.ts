import { ConversationScenario } from '../../../types/chat';

export const cycleScenarios: Record<string, ConversationScenario> = {
  irregular_cycle: {
    trigger: ['cycle irrégulier', 'règles irrégulières'],
    responses: {
      initial: {
        content: "Les variations du cycle sont courantes. Depuis quand observez-vous ces irrégularités ?",
        suggestions: [
          'récemment',
          'depuis plusieurs mois',
          'depuis toujours'
        ]
      },
      followUp: {
        content: "Souhaitez-vous explorer des moyens naturels de réguler votre cycle ?",
        suggestions: [
          'conseils lifestyle',
          'alimentation',
          'exercices adaptés'
        ]
      }
    }
  },
  ovulation: {
    trigger: ['ovulation', 'période fertile'],
    responses: {
      initial: {
        content: "L'ovulation est une phase importante du cycle. Que souhaitez-vous savoir ?",
        suggestions: [
          'signes d\'ovulation',
          'durée de l\'ovulation',
          'cycle et fertilité'
        ]
      },
      education: {
        content: "Je peux vous aider à mieux comprendre votre cycle fertile. Par où voulez-vous commencer ?",
        suggestions: [
          'comprendre les phases',
          'observer les signes',
          'suivre son cycle'
        ]
      }
    }
  },
  cycle_tracking: {
    trigger: ['suivi cycle', 'noter règles'],
    responses: {
      initial: {
        content: "Le suivi du cycle est une pratique précieuse. Que souhaitez-vous suivre en particulier ?",
        suggestions: [
          'dates des règles',
          'symptômes',
          'humeur et énergie'
        ]
      },
      guidance: {
        content: "Je peux vous guider dans la création d'un suivi personnalisé. Par quoi voulez-vous commencer ?",
        suggestions: [
          'créer un journal',
          'observer les patterns',
          'comprendre les phases'
        ]
      }
    }
  }
};