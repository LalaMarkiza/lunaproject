import { ConversationScenario } from '../../../types/chat';

export const workScenarios: ConversationScenario[] = [
  {
    trigger: ["travail cycle", "productivité fluctuante", "concentration travail"],
    context: "work_productivity",
    response: {
      initial: "Notre efficacité au travail varie avec notre cycle. Comment cela se manifeste-t-il pour vous ?",
      followUp: "À quels moments vous sentez-vous le plus productive ?",
      support: "Je peux vous aider à optimiser votre organisation. Souhaitez-vous des conseils ?"
    }
  },
  {
    trigger: ["stress travail", "surcharge professionnelle", "burnout"],
    context: "work_stress",
    response: {
      initial: "Le stress professionnel peut être amplifié pendant certaines phases. Comment vous sentez-vous au travail ?",
      followUp: "Avez-vous la possibilité d'aménager votre temps de travail ?",
      support: "Je peux vous proposer des stratégies d'adaptation. Voulez-vous les découvrir ?"
    }
  }
];