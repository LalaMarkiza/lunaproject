import { ConversationScenario } from '../../types/chat';

export const stressScenarios: ConversationScenario[] = [
  {
    trigger: ["stress et règles", "tension prémenstruelle", "stress intense"],
    context: "stress_management",
    response: {
      initial: "Le stress peut effectivement s'intensifier avec les variations hormonales. De quelle manière se manifeste votre stress ?",
      manifestations: {
        physical: {
          symptoms: ["tension musculaire", "maux de tête", "souffle court"],
          techniques: {
            immediate: ["respiration carrée", "auto-massage", "étirements ciblés"],
            preventive: ["yoga doux quotidien", "routine bien-être"]
          }
        },
        mental: {
          symptoms: ["ruminations", "inquiétudes", "difficulté à se concentrer"],
          techniques: {
            immediate: ["méditation guidée", "exercice de pleine conscience"],
            preventive: ["journal des inquiétudes", "planning de micro-pauses"]
          }
        },
        emotional: {
          symptoms: ["irritabilité", "émotivité accrue", "anxiété"],
          techniques: {
            immediate: ["ancrage émotionnel", "exercice de gratitude"],
            preventive: ["routine d'auto-compassion", "cercle de soutien"]
          }
        }
      }
    }
  }
];