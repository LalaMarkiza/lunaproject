import { ConversationScenario } from '../../types/chat';

export const intimacyScenarios: ConversationScenario[] = [
  {
    trigger: ["libido cycle", "désir variations", "intimité règles"],
    context: "intimacy_cycle",
    response: {
      initial: "Les variations de libido au cours du cycle sont naturelles. Souhaitez-vous comprendre ces fluctuations ?",
      education: {
        hormonal_changes: "Votre désir peut varier selon les phases de votre cycle :",
        phases: {
          follicular: "Phase d'énergie et de désir croissant",
          ovulatory: "Pic naturel de libido",
          luteal: "Possible diminution du désir",
          menstrual: "Variations individuelles"
        }
      },
      support: {
        emotional: "Comment vivez-vous ces variations ?",
        practical: "Souhaitez-vous des conseils pour mieux vivre ces changements ?"
      }
    }
  }
];