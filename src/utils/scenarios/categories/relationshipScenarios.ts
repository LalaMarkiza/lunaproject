import { ConversationScenario } from '../../../types/chat';

export const relationshipScenarios: ConversationScenario[] = [
  {
    trigger: ["relation difficile", "incompréhension couple", "communication partenaire"],
    context: "relationship_communication",
    response: {
      initial: "Les relations peuvent être impactées par notre cycle. Qu'est-ce qui vous préoccupe particulièrement ?",
      followUp: "Comment votre partenaire réagit-il/elle à ces changements ?",
      support: "Je peux vous proposer des stratégies de communication. Souhaitez-vous les explorer ?"
    }
  },
  {
    trigger: ["libido cycle", "désir fluctuant", "intimité cycle"],
    context: "relationship_intimacy",
    response: {
      initial: "Les variations de libido sont naturelles pendant le cycle. Comment vivez-vous ces changements ?",
      followUp: "En avez-vous parlé avec votre partenaire ?",
      support: "Je peux vous aider à mieux comprendre ces fluctuations. Voulez-vous en savoir plus ?"
    }
  }
];