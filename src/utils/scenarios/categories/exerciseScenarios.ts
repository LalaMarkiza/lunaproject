import { ConversationScenario } from '../../../types/chat';

export const exerciseScenarios: ConversationScenario[] = [
  {
    trigger: ["sport cycle", "activité physique", "exercice règles"],
    context: "exercise_general",
    response: {
      initial: "L'activité physique doit s'adapter à notre cycle. Où en êtes-vous de votre cycle ?",
      followUp: "Quel type d'activité pratiquez-vous habituellement ?",
      support: "Je peux vous proposer des exercices adaptés à votre phase. Souhaitez-vous les découvrir ?"
    }
  },
  {
    trigger: ["fatigue sport", "pas d'énergie exercice", "démotivée sport"],
    context: "exercise_fatigue",
    response: {
      initial: "L'énergie fluctue naturellement pendant le cycle. Comment vous sentez-vous physiquement ?",
      followUp: "Préférez-vous des exercices doux ou dynamiques en ce moment ?",
      support: "Je peux vous guider vers des activités adaptées à votre énergie. Voulez-vous essayer ?"
    }
  }
];