import { ConversationScenario } from '../../types/chat';

export const contraceptionScenarios: ConversationScenario[] = [
  {
    trigger: ["question contraception", "pilule effets", "méthodes naturelles"],
    context: "contraception_info",
    response: {
      initial: "Je peux vous donner des informations générales sur la contraception. Quelle est votre interrogation principale ?",
      disclaimer: "Pour des conseils personnalisés, consultez un professionnel de santé.",
      topics: {
        natural_methods: {
          message: "La contraception naturelle demande une bonne connaissance de son cycle. Voulez-vous en savoir plus sur les indicateurs de fertilité ?",
          information: [
            "Température basale",
            "Observation de la glaire cervicale",
            "Autres signes d'ovulation"
          ]
        },
        side_effects: {
          message: "Chaque méthode peut avoir des effets différents. Que souhaitez-vous savoir ?",
          redirect: "Un professionnel de santé pourra vous conseiller de manière personnalisée."
        }
      }
    }
  }
];