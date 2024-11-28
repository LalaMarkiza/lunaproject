import { ConversationScenario } from '../../../types/chat';

export const sleepScenarios: ConversationScenario[] = [
  // Insomnie
  {
    trigger: ["je n'arrive pas à dormir", "insomnie", "sommeil perturbé"],
    context: "insomnia",
    response: {
      initial: "Les troubles du sommeil sont fréquents pendant le cycle. Quand surviennent vos difficultés ?",
      followUp: "Est-ce plutôt pour vous endormir ou rester endormie ?",
      support: "Je peux vous proposer des techniques de relaxation pour améliorer votre sommeil. Voulez-vous essayer ?"
    }
  },
  // Fatigue matinale
  {
    trigger: ["fatiguée au réveil", "pas reposée", "sommeil non réparateur"],
    context: "morning_fatigue",
    response: {
      initial: "Comment se passent vos nuits en ce moment ?",
      followUp: "Avez-vous une routine du soir établie ?",
      support: "Je peux vous aider à créer une routine apaisante. Souhaitez-vous explorer cela ?"
    }
  }
  // ... Plus de scénarios liés au sommeil
];