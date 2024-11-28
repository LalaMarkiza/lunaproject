import { ConversationScenario } from '../../types/chat';

export const specificConditionsScenarios: ConversationScenario[] = [
  {
    trigger: ["endométriose", "douleurs intenses", "SOPK", "kystes"],
    context: "specific_conditions",
    response: {
      initial: "Je comprends que vous traversez des difficultés particulières. Avez-vous consulté un professionnel de santé ?",
      disclaimer: "Je peux vous offrir du soutien et des informations générales, mais un suivi médical est essentiel.",
      support: {
        endometriosis: {
          daily_management: [
            {
              category: "Alimentation",
              recommendations: [
                "Anti-inflammatoire naturels",
                "Éviter les déclencheurs",
                "Hydratation optimale"
              ]
            },
            {
              category: "Mouvement",
              suggestions: [
                "Yoga thérapeutique",
                "Étirements doux",
                "Marche consciente"
              ]
            }
          ]
        },
        pcos: {
          lifestyle_support: [
            {
              area: "Équilibre hormonal",
              tips: [
                "Régulation du sucre sanguin",
                "Activité physique adaptée",
                "Gestion du stress"
              ]
            }
          ]
        }
      }
    }
  }
];