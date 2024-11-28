import { ConversationScenario } from '../../types/chat';

export const sleepScenarios: ConversationScenario[] = [
  {
    trigger: ["je n'arrive pas à dormir", "insomnie prémenstruelle", "sommeil perturbé"],
    context: "sleep_issues",
    response: {
      initial: "Les perturbations du sommeil sont fréquentes pendant le cycle. À quel moment avez-vous du mal à dormir ?",
      categories: {
        falling_asleep: {
          message: "Créons ensemble un rituel du soir apaisant.",
          techniques: [
            {
              name: "Relaxation progressive",
              steps: [
                "Installez-vous confortablement dans votre lit",
                "Commençons par détendre chaque partie du corps",
                "Respirez profondément et lentement"
              ]
            },
            {
              name: "Visualisation apaisante",
              guided: true
            }
          ]
        },
        staying_asleep: {
          message: "Les réveils nocturnes peuvent être liés aux variations hormonales. Explorons des solutions douces.",
          recommendations: [
            "Éviter les écrans avant le coucher",
            "Maintenir une température fraîche",
            "Techniques de respiration 4-7-8"
          ]
        },
        early_waking: {
          message: "Les réveils précoces sont courants en phase lutéale. Voulez-vous des conseils pour améliorer la qualité de votre sommeil ?"
        }
      }
    }
  }
];