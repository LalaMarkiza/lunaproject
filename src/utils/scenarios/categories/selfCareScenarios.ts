import { ConversationScenario } from '../../../types/chat';

export const selfCareScenarios: ConversationScenario[] = [
  {
    trigger: ["prendre soin de moi", "routine bien-être", "self-care"],
    context: "selfcare_general",
    response: {
      initial: "Prendre soin de soi est essentiel. Avez-vous déjà des rituels de bien-être ?",
      followUp: "Qu'est-ce qui vous fait du bien habituellement ?",
      support: "Je peux vous suggérer des pratiques adaptées à votre cycle. Souhaitez-vous les découvrir ?"
    }
  },
  {
    trigger: ["temps pour moi", "pause bien-être", "moment détente"],
    context: "selfcare_time",
    response: {
      initial: "S'accorder du temps est important. Comment aimeriez-vous prendre soin de vous aujourd'hui ?",
      followUp: "Avez-vous des moments réservés pour vous dans la journée ?",
      support: "Je peux vous aider à créer une routine de self-care. Voulez-vous explorer cela ?"
    }
  }
];