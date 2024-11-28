import { ConversationScenario } from '../../../types/chat';

export const nutritionScenarios: ConversationScenario[] = [
  {
    trigger: ["alimentation cycle", "quoi manger", "conseils nutrition"],
    context: "nutrition_general",
    response: {
      initial: "L'alimentation joue un rôle important dans notre cycle. Dans quelle phase êtes-vous actuellement ?",
      followUp: "Avez-vous des préférences ou des restrictions alimentaires particulières ?",
      support: "Je peux vous proposer des recommandations adaptées à votre phase. Souhaitez-vous les découvrir ?"
    }
  },
  {
    trigger: ["envies sucrées", "fringales", "cravings"],
    context: "nutrition_cravings",
    response: {
      initial: "Les envies alimentaires sont fréquentes pendant le cycle. Quand surviennent-elles principalement ?",
      followUp: "Comment gérez-vous ces envies habituellement ?",
      support: "Je peux vous suggérer des alternatives saines et satisfaisantes. Voulez-vous en savoir plus ?"
    }
  }
];