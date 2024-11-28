import { ConversationScenario } from '../../types/chat';

export const relationshipScenarios: ConversationScenario[] = [
  {
    trigger: ["relation cycle", "communication partenaire", "incompréhension"],
    context: "relationships",
    response: {
      initial: "Les relations peuvent être impactées par notre cycle. Qu'est-ce qui vous préoccupe particulièrement ?",
      topics: {
        partner_communication: {
          approaches: [
            {
              situation: "Besoins changeants",
              tips: [
                "Expliquer les phases du cycle",
                "Partager ses ressentis",
                "Établir des signaux clairs"
              ]
            },
            {
              situation: "Intimité",
              suggestions: [
                "Communiquer ses désirs",
                "Respecter ses limites",
                "Explorer différentes formes d'intimité"
              ]
            }
          ]
        },
        professional_relationships: {
          strategies: [
            "Communication claire des besoins",
            "Limites professionnelles saines",
            "Planification adaptée"
          ]
        },
        self_relationship: {
          practices: [
            {
              type: "Auto-compassion",
              exercises: [
                "Journal de gratitude",
                "Dialogue intérieur bienveillant",
                "Rituels d'auto-soin"
              ]
            }
          ]
        }
      }
    }
  }
];