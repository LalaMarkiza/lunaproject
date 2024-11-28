import { ConversationScenario } from '../../types/chat';

export const workEnergyScenarios: ConversationScenario[] = [
  {
    trigger: ["fatigue travail", "concentration cycle", "productivité phases"],
    context: "work_energy",
    response: {
      initial: "Adapter son travail à son cycle peut faire une grande différence. Quel est votre plus grand défi actuellement ?",
      phase_strategies: {
        menstrual: {
          energy_level: "Basse - Introspective",
          best_for: [
            "Planification",
            "Évaluation",
            "Tâches routinières"
          ],
          workplace_tips: [
            {
              category: "Environnement",
              suggestions: [
                "Éclairage doux",
                "Pauses régulières",
                "Position confortable"
              ]
            },
            {
              category: "Organisation",
              suggestions: [
                "Réunions courtes",
                "Tâches moins exigeantes",
                "Moments de solitude"
              ]
            }
          ]
        },
        follicular: {
          energy_level: "Croissante - Créative",
          best_for: [
            "Brainstorming",
            "Nouveaux projets",
            "Présentations"
          ],
          productivity_tips: [
            "Profiter de l'énergie créative",
            "Initier des projets",
            "Networking"
          ]
        },
        ovulatory: {
          energy_level: "Maximale - Communicative",
          best_for: [
            "Réunions importantes",
            "Négociations",
            "Présentations publiques"
          ]
        },
        luteal: {
          energy_level: "Décroissante - Analytique",
          best_for: [
            "Analyse détaillée",
            "Finition de projets",
            "Organisation"
          ],
          support_strategies: [
            "Pauses énergisantes",
            "Snacks équilibrants",
            "Micro-méditations"
          ]
        }
      }
    }
  }
];