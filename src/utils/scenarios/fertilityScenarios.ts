import { ConversationScenario } from '../../types/chat';

export const fertilityScenarios: ConversationScenario[] = [
  {
    trigger: ["fertilité naturelle", "concevoir", "ovulation", "planning familial"],
    context: "fertility_awareness",
    response: {
      initial: "La compréhension de sa fertilité est importante. Que souhaitez-vous explorer ?",
      disclaimer: "Je peux partager des informations générales, mais consultez un professionnel pour un suivi personnalisé.",
      topics: {
        cycle_tracking: {
          methods: [
            {
              name: "Température basale",
              instructions: [
                "Prendre sa température au réveil",
                "Noter les variations",
                "Observer les patterns"
              ],
              tips: "Utilisez un thermomètre précis et mesurez à la même heure"
            },
            {
              name: "Observation cervicale",
              signs: [
                "Texture de la glaire",
                "Changements de position",
                "Sensations physiques"
              ]
            },
            {
              name: "Autres signes de fertilité",
              indicators: [
                "Douleurs d'ovulation",
                "Changements d'humeur",
                "Niveau d'énergie"
              ]
            }
          ]
        },
        fertile_window: {
          education: [
            "Comprendre son cycle fertile",
            "Identifier les jours optimaux",
            "Signes d'ovulation"
          ],
          lifestyle_support: {
            nutrition: [
              "Aliments fertiles",
              "Suppléments naturels",
              "Hydratation optimale"
            ],
            practices: [
              "Yoga pour la fertilité",
              "Gestion du stress",
              "Sommeil réparateur"
            ]
          }
        }
      }
    }
  }
];