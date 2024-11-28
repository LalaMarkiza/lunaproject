import { ConversationScenario } from '../../types/chat';

export const energyScenarios: ConversationScenario[] = [
  {
    trigger: ["fatigue cycle", "énergie basse", "productivité cycle"],
    context: "energy_management",
    response: {
      initial: "Votre énergie fluctue naturellement avec votre cycle. Dans quelle phase êtes-vous actuellement ?",
      phase_specific: {
        follicular: {
          energy_level: "Phase de regain d'énergie",
          recommendations: [
            "Projets créatifs",
            "Activité physique dynamique",
            "Nouvelles initiatives"
          ]
        },
        luteal: {
          energy_level: "Phase de ralentissement naturel",
          recommendations: [
            "Tâches de routine",
            "Activités calmes",
            "Auto-compassion"
          ]
        }
      },
      adaptation_strategies: {
        work: "Adapter sa charge de travail au cycle",
        lifestyle: "Synchroniser ses activités avec son énergie",
        rest: "Honorer ses besoins de repos"
      }
    }
  }
];