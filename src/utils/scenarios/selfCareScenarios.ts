import { ConversationScenario } from '../../types/chat';

export const selfCareScenarios: ConversationScenario[] = [
  {
    trigger: ["rituels bien-être", "soin personnel", "routine cycle"],
    context: "self_care",
    response: {
      initial: "Les rituels d'auto-soin sont essentiels. Avez-vous déjà des pratiques régulières ?",
      rituals: {
        daily: {
          morning: [
            {
              name: "Réveil en douceur",
              steps: [
                "Étirements doux",
                "Hydratation consciente",
                "Moment de gratitude"
              ]
            }
          ],
          evening: [
            {
              name: "Rituel d'apaisement",
              steps: [
                "Bain relaxant",
                "Automassage",
                "Méditation courte"
              ]
            }
          ]
        },
        phase_specific: {
          menstrual: {
            focus: "Repos et régénération",
            practices: [
              "Bains aux sels",
              "Massage abdominal",
              "Méditation guidée"
            ]
          },
          follicular: {
            focus: "Vitalité et créativité",
            practices: [
              "Yoga énergisant",
              "Journaling créatif",
              "Soins beautés naturels"
            ]
          }
        }
      }
    }
  }
];