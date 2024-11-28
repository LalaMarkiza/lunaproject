import { ConversationScenario } from '../../../types/chat';

export const fertilityScenarios: ConversationScenario[] = [
  {
    trigger: ["ovulation", "période fertile", "concevoir"],
    context: "fertility_awareness",
    response: {
      initial: "La connaissance de son cycle est importante. Suivez-vous déjà vos périodes d'ovulation ?",
      followUp: "Connaissez-vous les signes de l'ovulation ?",
      support: "Je peux vous aider à mieux comprendre votre cycle fertile. Souhaitez-vous en savoir plus ?"
    }
  },
  {
    trigger: ["difficultés conception", "essai bébé", "fertilité naturelle"],
    context: "fertility_support",
    response: {
      initial: "La conception peut prendre du temps. Depuis combien de temps essayez-vous ?",
      followUp: "Suivez-vous déjà votre cycle de façon précise ?",
      support: "Je peux vous donner des informations générales sur la fertilité. Voulez-vous les connaître ?"
    }
  }
];