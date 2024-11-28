import { ConversationScenario } from '../../../types/chat';

export const hormonalScenarios: Record<string, ConversationScenario> = {
  hormonalBalance: {
    trigger: ['équilibre hormonal', 'déséquilibre', 'hormones'],
    responses: {
      initial: {
        content: "Les fluctuations hormonales peuvent impacter notre bien-être. Quels changements observez-vous ?",
        suggestions: [
          'changements d\'humeur',
          'symptômes physiques',
          'cycle irrégulier',
          'énergie fluctuante'
        ]
      },
      assessment: {
        content: "Ces changements sont-ils récents ou habituels ?",
        suggestions: [
          'récents',
          'depuis plusieurs cycles',
          'variables'
        ]
      },
      support: {
        content: "Je peux vous proposer plusieurs approches naturelles. Que souhaitez-vous explorer ?",
        suggestions: [
          'alimentation équilibrante',
          'exercices adaptés',
          'gestion du stress',
          'routine bien-être'
        ]
      }
    }
  },
  pms: {
    trigger: ['syndrome prémenstruel', 'SPM', 'avant règles'],
    responses: {
      initial: {
        content: "Le SPM peut être intense. Quels symptômes vous dérangent le plus ?",
        suggestions: [
          'émotionnel',
          'physique',
          'les deux'
        ]
      },
      emotional: {
        content: "Pour les symptômes émotionnels, voici ce que je vous propose :",
        suggestions: [
          'exercices de respiration',
          'méditation guidée',
          'routine apaisante'
        ]
      },
      physical: {
        content: "Pour les symptômes physiques, essayons ces approches :",
        suggestions: [
          'exercices doux',
          'alimentation anti-inflammatoire',
          'techniques de relaxation'
        ]
      }
    }
  }
};