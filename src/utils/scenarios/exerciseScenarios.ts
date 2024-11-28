import { ConversationScenario } from '../../types/chat';

export const exerciseScenarios: ConversationScenario[] = [
  {
    trigger: ["sport cycle", "exercice phase", "bouger règles"],
    context: "cycle_exercise",
    response: {
      initial: "Le mouvement est important, mais il faut l'adapter à son cycle. Où en êtes-vous de votre cycle ?",
      phases: {
        menstrual: {
          intensity: "Douce à très douce",
          recommended: [
            {
              type: "Yoga doux",
              benefits: "Soulage les crampes, détend le corps",
              duration: "15-30 minutes"
            },
            {
              type: "Marche tranquille",
              benefits: "Stimule la circulation, oxygène le corps",
              duration: "15-20 minutes"
            },
            {
              type: "Étirements légers",
              benefits: "Réduit les tensions, améliore le confort",
              duration: "10-15 minutes"
            }
          ],
          avoid: [
            "Exercices intenses",
            "Inversions en yoga",
            "Sports de contact"
          ]
        },
        follicular: {
          intensity: "Progressive à dynamique",
          recommended: [
            "Cardio modéré",
            "Danse",
            "Pilates",
            "Yoga dynamique"
          ],
          energy_tips: "C'est le moment d'augmenter progressivement l'intensité"
        },
        ovulatory: {
          intensity: "Maximale",
          recommended: [
            "HIIT",
            "Course à pied",
            "Sports collectifs",
            "Power yoga"
          ],
          energy_tips: "Profitez de votre pic d'énergie naturelle"
        },
        luteal: {
          intensity: "Modérée à douce",
          recommended: [
            "Natation",
            "Vélo tranquille",
            "Yoga flow",
            "Marche rapide"
          ],
          modifications: "Écoutez votre corps et réduisez l'intensité si nécessaire"
        }
      }
    }
  }
];