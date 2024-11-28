import { ConversationScenario } from '../../../types/chat';

export const physicalScenarios: Record<string, ConversationScenario> = {
  menstrual_pain: {
    trigger: ['mal au ventre', 'crampes', 'règles douloureuses'],
    responses: {
      initial: {
        content: `Je comprends que ces douleurs sont difficiles. Voici ce que je vous propose :

1. Installez-vous confortablement
2. Placez une bouillotte chaude sur votre ventre si possible
3. Faisons ensemble un exercice de respiration apaisant

Souhaitez-vous essayer ?`,
        suggestions: ['oui', 'non', 'autres solutions']
      },
      accept: {
        content: "Super, commençons l'exercice de respiration.",
        type: 'exercise',
        nextPhase: 'breathing_exercise'
      },
      decline: {
        content: "Je comprends. Voici d'autres solutions qui peuvent vous soulager :",
        suggestions: [
          'conseils naturels',
          'positions antidouleur',
          'alimentation adaptée'
        ]
      }
    }
  },
  headache: {
    trigger: ['mal à la tête', 'migraine', 'céphalées'],
    responses: {
      initial: {
        content: "Les maux de tête peuvent être intenses. Souhaitez-vous essayer des techniques de soulagement ?",
        suggestions: [
          'massage des tempes',
          'respiration',
          'repos'
        ]
      },
      followUp: {
        content: "Comment décririez-vous l'intensité de votre mal de tête ?",
        suggestions: [
          'léger',
          'modéré',
          'intense'
        ]
      }
    }
  },
  muscle_pain: {
    trigger: ['courbatures', 'douleurs musculaires', 'tensions'],
    responses: {
      initial: {
        content: "Les courbatures peuvent être liées à votre cycle. Où ressentez-vous ces tensions ?",
        suggestions: [
          'dos',
          'jambes',
          'général'
        ]
      },
      suggestions: {
        content: "Je peux vous proposer plusieurs approches :",
        options: [
          'étirements doux',
          'automassage',
          'exercices de relaxation'
        ]
      }
    }
  }
};