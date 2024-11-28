import { ConversationScenario } from '../../types/chat';

export const nutritionScenarios: ConversationScenario[] = [
  {
    trigger: ["alimentation cycle", "quoi manger règles", "aliments phase"],
    context: "cycle_nutrition",
    response: {
      initial: "L'alimentation peut vraiment soutenir votre cycle. Dans quelle phase êtes-vous ?",
      phases: {
        menstrual: {
          focus: "Soutien et régénération",
          recommended_foods: [
            "Aliments riches en fer (légumes verts, légumineuses)",
            "Fruits rouges antioxydants",
            "Tisanes anti-inflammatoires (gingembre, curcuma)",
            "Chocolat noir (+70% cacao)"
          ],
          avoid: [
            "Caféine excessive",
            "Aliments transformés",
            "Alcool"
          ],
          tips: [
            "Prenez des repas légers mais nourrissants",
            "Hydratez-vous généreusement",
            "Écoutez vos envies tout en restant équilibrée"
          ]
        },
        follicular: {
          focus: "Énergie et légèreté",
          recommended_foods: [
            "Protéines maigres",
            "Légumes crus et germinations",
            "Fruits frais",
            "Graines de citrouille"
          ],
          meal_ideas: [
            "Smoothie énergisant",
            "Salade composée protéinée",
            "Buddha bowl coloré"
          ]
        },
        ovulatory: {
          focus: "Vitalité et fertilité",
          recommended_foods: [
            "Aliments crus et fermentés",
            "Noix et graines",
            "Légumes crucifères",
            "Fruits rouges"
          ]
        },
        luteal: {
          focus: "Soutien hormonal et sérénité",
          recommended_foods: [
            "Aliments riches en magnésium",
            "Protéines complexes",
            "Légumes-racines",
            "Graines de sésame"
          ],
          tips: [
            "Évitez le sucre raffiné",
            "Privilégiez les glucides complexes",
            "Augmentez les oméga-3"
          ]
        }
      },
      support_questions: [
        "Avez-vous des envies particulières en ce moment ?",
        "Ressentez-vous des difficultés avec certains aliments ?",
        "Souhaitez-vous des suggestions de recettes adaptées ?"
      ]
    }
  }
];