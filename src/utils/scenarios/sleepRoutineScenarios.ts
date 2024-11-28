import { ConversationScenario } from '../../types/chat';

export const sleepRoutineScenarios: ConversationScenario[] = [
  {
    trigger: ["routine sommeil", "difficulté dormir", "insomnie cycle"],
    context: "sleep_routine",
    response: {
      initial: "Le sommeil est essentiel pour notre équilibre hormonal. Quelles difficultés rencontrez-vous avec votre sommeil ?",
      routines: {
        preparation: {
          name: "Ritual du soir apaisant",
          steps: [
            {
              time: "2 heures avant",
              actions: [
                "Limiter la lumière bleue",
                "Dernier repas léger",
                "Éviter la caféine"
              ]
            },
            {
              time: "1 heure avant",
              actions: [
                "Tisane relaxante",
                "Méditation douce",
                "Étirements légers"
              ]
            },
            {
              time: "30 minutes avant",
              actions: [
                "Journal du soir",
                "Respiration apaisante",
                "Lecture légère"
              ]
            }
          ]
        },
        phase_specific: {
          luteal: {
            tips: [
              "Chambre plus fraîche",
              "Couverture lestée",
              "Huiles essentielles apaisantes"
            ]
          },
          follicular: {
            tips: [
              "Routine plus flexible",
              "Méditation courte",
              "Visualisation positive"
            ]
          }
        },
        troubleshooting: {
          cant_fall_asleep: [
            {
              technique: "Scan corporel",
              duration: "10 minutes",
              steps: ["Détendez chaque partie du corps", "Respirez profondément"]
            },
            {
              technique: "Visualisation apaisante",
              scenario: "Imaginez un lieu paisible..."
            }
          ],
          waking_up: [
            {
              technique: "Respiration 4-7-8",
              instructions: "Inspirez 4s, retenez 7s, expirez 8s"
            }
          ]
        }
      }
    }
  }
];