import { ConversationScenario } from '../../types/chat';

export const hormonalTransitionScenarios: ConversationScenario[] = [
  {
    trigger: ["équilibre hormonal", "transition naturelle", "hormones déséquilibrées"],
    context: "hormonal_balance",
    response: {
      initial: "L'équilibre hormonal est subtil. Quels changements avez-vous remarqués ?",
      support: {
        dietary: {
          name: "Nutrition hormonale",
          recommendations: [
            {
              category: "Aliments de soutien",
              items: [
                "Graines de lin (lignanes)",
                "Légumes crucifères",
                "Protéines maigres",
                "Acides gras essentiels"
              ]
            },
            {
              category: "À limiter",
              items: [
                "Sucres raffinés",
                "Caféine excessive",
                "Alcool",
                "Aliments transformés"
              ]
            }
          ]
        },
        lifestyle: {
          practices: [
            {
              name: "Routine adaptative",
              elements: [
                "Sommeil régulier",
                "Exercice modéré",
                "Gestion du stress",
                "Exposition solaire matinale"
              ]
            }
          ]
        },
        herbal_support: {
          herbs: [
            {
              name: "Plantes adaptogènes",
              examples: [
                "Maca",
                "Ashwagandha",
                "Rhodiola"
              ],
              usage: "À discuter avec un professionnel"
            }
          ]
        }
      }
    }
  }
];