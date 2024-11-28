import { ConversationScenario } from '../../types/chat';

export const personalGrowthScenarios: ConversationScenario[] = [
  {
    trigger: ["développement personnel", "croissance cycle", "potentiel cycle"],
    context: "cycle_growth",
    response: {
      initial: "Votre cycle peut être un puissant outil de développement personnel. Que souhaitez-vous explorer ?",
      dimensions: {
        inner_wisdom: {
          practices: [
            {
              name: "Connexion cyclique",
              exercises: [
                "Journal des phases",
                "Méditation guidée",
                "Rituels personnels"
              ]
            },
            {
              name: "Expression créative",
              activities: [
                "Art-thérapie",
                "Danse libre",
                "Écriture intuitive"
              ]
            }
          ]
        },
        empowerment: {
          tools: [
            {
              category: "Conscience corporelle",
              practices: [
                "Yoga cycle-conscient",
                "Mouvements intuitifs",
                "Respiration consciente"
              ]
            },
            {
              category: "Développement émotionnel",
              techniques: [
                "Travail des archétypes",
                "Rituels de célébration",
                "Cercles de partage"
              ]
            }
          ]
        }
      }
    }
  }
];