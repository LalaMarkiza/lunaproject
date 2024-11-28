import { ConversationScenario } from '../../types/chat';

export const workLifeBalanceScenarios: ConversationScenario[] = [
  {
    trigger: ["équilibre vie", "surmenage", "temps pour moi"],
    context: "work_life_balance",
    response: {
      initial: "Trouver l'équilibre est essentiel. Quelle est votre plus grande difficulté actuellement ?",
      areas: {
        boundaries: {
          practices: [
            {
              setting: "Professionnel",
              strategies: [
                "Définir des horaires clairs",
                "Pauses régulières",
                "Communication des limites"
              ]
            },
            {
              setting: "Personnel",
              strategies: [
                "Temps sacré pour soi",
                "Rituels de transition",
                "Moments de déconnexion"
              ]
            }
          ]
        },
        cycle_syncing: {
          approach: [
            {
              phase: "Menstruelle",
              focus: "Ralentissement conscient",
              adjustments: [
                "Réunions minimales",
                "Travail introspectif",
                "Repos prioritaire"
              ]
            },
            {
              phase: "Folliculaire",
              focus: "Créativité et planification",
              activities: [
                "Brainstorming",
                "Nouveaux projets",
                "Networking"
              ]
            }
          ]
        }
      }
    }
  }
];