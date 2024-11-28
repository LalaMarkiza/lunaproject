import { ConversationScenario } from '../../../types/chat';

export const medicalScenarios: ConversationScenario[] = [
  {
    trigger: ["symptômes inquiétants", "consultation gynéco", "problème médical"],
    context: "medical_concerns",
    response: {
      initial: "Je comprends votre inquiétude. Pouvez-vous me décrire vos symptômes ?",
      followUp: "Depuis combien de temps observez-vous ces symptômes ?",
      support: "Je vous recommande de consulter un professionnel de santé. Souhaitez-vous que je vous explique pourquoi ?"
    }
  },
  {
    trigger: ["cycle irrégulier", "règles anormales", "saignements"],
    context: "medical_cycle",
    response: {
      initial: "Les variations du cycle peuvent être préoccupantes. Pouvez-vous me donner plus de détails ?",
      followUp: "Ces changements sont-ils récents ?",
      support: "Un suivi médical serait approprié. Voulez-vous que je vous explique les points à aborder avec votre médecin ?"
    }
  }
];