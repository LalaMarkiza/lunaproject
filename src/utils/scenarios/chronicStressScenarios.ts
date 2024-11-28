import { ConversationScenario } from '../../types/chat';

export const chronicStressScenarios: ConversationScenario[] = [
  {
    trigger: ["stress constant", "anxiété chronique", "tension permanente"],
    context: "chronic_stress",
    response: {
      initial: "Le stress chronique peut impacter profondément notre cycle. Comment se manifeste votre stress ?",
      management: {
        immediate_relief: {
          techniques: [
            {
              name: "Respiration anti-stress",
              steps: [
                "Inspirez sur 4 temps",
                "Retenez sur 4 temps",
                "Expirez sur 6 temps",
                "Répétez 5 fois"
              ]
            },
            {
              name: "Ancrage rapide",
              exercise: [
                "5 choses que vous voyez",
                "4 choses que vous touchez",
                "3 choses que vous entendez",
                "2 choses que vous sentez",
                "1 chose que vous goûtez"
              ]
            }
          ]
        },
        long_term_strategies: {
          practices: [
            {
              category: "Routines apaisantes",
              activities: [
                "Méditation quotidienne",
                "Journal de gratitude",
                "Exercice régulier",
                "Temps dans la nature"
              ]
            },
            {
              category: "Limites saines",
              implementation: [
                "Apprendre à dire non",
                "Créer des pauses",
                "Protéger son temps",
                "Communiquer ses besoins"
              ]
            }
          ]
        },
        cycle_specific: {
          adaptations: [
            {
              phase: "Lutéale",
              focus: "Protection énergétique accrue",
              tips: [
                "Réduire les engagements",
                "Augmenter les pratiques apaisantes",
                "Prioritiser le repos"
              ]
            }
          ]
        }
      }
    }
  }
];