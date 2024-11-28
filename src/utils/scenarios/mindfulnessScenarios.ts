import { ConversationScenario } from '../../types/chat';

export const mindfulnessScenarios: ConversationScenario[] = [
  {
    trigger: ["méditation cycle", "pleine conscience", "stress mental"],
    context: "mindfulness_support",
    response: {
      initial: "La méditation peut vraiment nous aider à mieux vivre notre cycle. Quelle est votre expérience avec la méditation ?",
      experience_levels: {
        beginner: {
          message: "Commençons doucement avec des exercices simples.",
          techniques: [
            {
              name: "Respiration consciente",
              duration: "3-5 minutes",
              guide: "Suivez simplement votre respiration..."
            },
            {
              name: "Scan corporel rapide",
              duration: "5 minutes",
              guide: "Portez votre attention sur chaque partie du corps..."
            }
          ]
        },
        intermediate: {
          techniques: [
            "Méditation assise",
            "Marche méditative",
            "Contemplation nature"
          ]
        },
        advanced: {
          techniques: [
            "Méditation des émotions",
            "Pratique de l'auto-compassion",
            "Méditation énergétique"
          ]
        }
      },
      phase_specific: {
        menstrual: {
          focus: "Intériorisation et repos",
          practices: ["Méditation allongée", "Yoga nidra", "Visualisation apaisante"]
        },
        follicular: {
          focus: "Créativité et renouveau",
          practices: ["Méditation active", "Visualisation créative"]
        },
        ovulatory: {
          focus: "Connexion et rayonnement",
          practices: ["Méditation du cœur", "Pratiques de gratitude"]
        },
        luteal: {
          focus: "Ancrage et protection",
          practices: ["Méditation de protection", "Pratiques d'enracinement"]
        }
      }
    }
  }
];