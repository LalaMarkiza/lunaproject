import { ConversationScenario } from '../../types/chat';

export const symptomsScenarios: ConversationScenario[] = [
  {
    trigger: ["acné hormonale", "boutons cycle"],
    context: "hormonal_acne",
    response: {
      initial: "L'acné hormonale peut être frustrante. Où apparaissent principalement vos boutons ?",
      support: {
        immediate: {
          message: "Voici quelques conseils pour apaiser votre peau :",
          tips: [
            "Éviter de toucher les boutons",
            "Nettoyage doux biquotidien",
            "Attention à l'alimentation pro-inflammatoire"
          ]
        },
        lifestyle: {
          message: "Pour prévenir les poussées, on peut agir sur plusieurs aspects :",
          recommendations: [
            "Hydratation optimale",
            "Gestion du stress",
            "Routine skincare adaptée au cycle"
          ]
        }
      }
    }
  },
  {
    trigger: ["maux de tête", "migraine menstruelle"],
    context: "hormonal_headache",
    response: {
      initial: "Les maux de tête hormonaux peuvent être intenses. Depuis combien de temps avez-vous mal ?",
      relief: {
        immediate: {
          message: "Commençons par soulager la douleur :",
          techniques: [
            "Massage des tempes",
            "Respiration apaisante",
            "Position allongée au calme"
          ]
        },
        preventive: {
          message: "Pour prévenir ces maux de tête :",
          recommendations: [
            "Suivi du cycle",
            "Hydratation régulière",
            "Gestion du stress"
          ]
        }
      }
    }
  }
];