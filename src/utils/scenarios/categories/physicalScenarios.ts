import { ConversationScenario } from '../../../types/chat';

export const physicalScenarios: ConversationScenario[] = [
  // === DOULEURS (20 scénarios) ===
  {
    trigger: ["j'ai mal au ventre", "crampes", "douleurs règles"],
    context: "menstrual_pain",
    response: {
      initial: "Je comprends que ces douleurs sont difficiles. Souhaitez-vous que nous essayions un exercice de soulagement ?",
      followUp: "Comment décririez-vous l'intensité de la douleur ?",
      support: "Je peux vous guider à travers différentes techniques. Que préférez-vous explorer ?"
    }
  },
  // ... [19 autres scénarios de douleurs]

  // === FATIGUE (20 scénarios) ===
  {
    trigger: ["je suis fatiguée", "épuisée", "sans énergie"],
    context: "fatigue",
    response: {
      initial: "La fatigue est fréquente pendant le cycle. Comment se manifeste-t-elle ?",
      followUp: "Cette fatigue affecte-t-elle votre quotidien ?",
      support: "Je peux vous proposer des approches pour retrouver de l'énergie. Souhaitez-vous les découvrir ?"
    }
  }
  // ... [19 autres scénarios de fatigue]
];