import { ConversationScenario } from '../../types/chat';

export const pmsScenarios: ConversationScenario[] = [
  {
    trigger: ["SPM intense", "syndrome prémenstruel", "symptômes avant règles"],
    context: "pms_support",
    response: {
      initial: "Le SPM peut être vraiment difficile. Quels sont les symptômes qui vous dérangent le plus ?",
      symptoms: {
        emotional: {
          types: [
            "Irritabilité",
            "Anxiété",
            "Tristesse",
            "Sautes d'humeur"
          ],
          support: {
            immediate: [
              "Exercices de respiration",
              "Méditation guidée",
              "Journal émotionnel"
            ],
            preventive: [
              "Routine d'auto-soin",
              "Planification adaptée",
              "Soutien social"
            ]
          }
        },
        physical: {
          types: [
            "Gonflement",
            "Seins sensibles",
            "Fatigue",
            "Maux de tête"
          ],
          relief: {
            natural: [
              "Tisanes spécifiques",
              "Huiles essentielles",
              "Compléments naturels"
            ],
            lifestyle: [
              "Adaptation alimentaire",
              "Exercices doux",
              "Massage"
            ]
          }
        }
      },
      tracking: {
        message: "Suivre vos symptômes peut nous aider à mieux les anticiper.",
        suggestions: [
          "Noter l'intensité des symptômes",
          "Identifier les déclencheurs",
          "Observer les patterns"
        ]
      }
    }
  }
];