import { ConversationScenario, ConversationContext, ScenarioResponse } from '../types/chat';
import { allScenarios } from './scenarios';

export class ScenarioManager {
  findMatchingScenario(message: string): ConversationScenario | null {
    const normalizedMessage = message.toLowerCase();

    // Vérifier chaque catégorie de scénarios
    for (const category of Object.values(allScenarios)) {
      for (const scenario of category) {
        if (scenario.trigger.some(trigger => normalizedMessage.includes(trigger))) {
          return scenario;
        }
      }
    }

    return null;
  }

  getResponse(scenario: ConversationScenario, context: ConversationContext): ScenarioResponse {
    // Si c'est la première interaction pour ce scénario
    if (!context.previousResponses.has(scenario.response.initial)) {
      context.previousResponses.add(scenario.response.initial);
      
      // Pour les scénarios émotionnels
      if (scenario.context.includes('emotional')) {
        return {
          content: scenario.response.initial,
          nextPhase: 'emotional_support',
          delay: 1500
        };
      }

      // Pour les scénarios physiques
      if (scenario.context.includes('physical')) {
        return {
          content: scenario.response.initial,
          nextPhase: 'exercise_proposed',
          delay: 1500
        };
      }

      return {
        content: scenario.response.initial,
        nextPhase: 'discussing',
        delay: 1000
      };
    }

    // Gérer les réponses de suivi
    if (scenario.response.followUp) {
      if (typeof scenario.response.followUp === 'string') {
        return {
          content: scenario.response.followUp,
          nextPhase: 'suggesting_techniques',
          delay: 1200
        };
      }
      
      // Si followUp est un tableau, choisir une réponse non utilisée
      const unusedFollowUps = scenario.response.followUp.filter(
        response => !context.previousResponses.has(response)
      );

      if (unusedFollowUps.length > 0) {
        const response = unusedFollowUps[0];
        context.previousResponses.add(response);
        return {
          content: response,
          nextPhase: 'suggesting_techniques',
          delay: 1200
        };
      }
    }

    // Réponse par défaut avec suggestion
    return {
      content: "Comment puis-je vous aider à vous sentir mieux ?",
      nextPhase: 'suggesting_techniques',
      delay: 1000
    };
  }
}