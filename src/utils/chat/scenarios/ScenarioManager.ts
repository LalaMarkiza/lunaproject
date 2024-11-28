import { ChatResponse, ConversationScenario, ConversationState } from '../../../types/chat';
import { scenarioTree } from './index';

export class ScenarioManager {
  private activeScenarios: Map<string, number> = new Map();

  findMatchingScenario(message: string, currentState: ConversationState): ConversationScenario | null {
    const normalizedMessage = message.toLowerCase();

    // Vérifier d'abord dans la catégorie actuelle si elle existe
    if (currentState.context.category) {
      const categoryScenarios = scenarioTree.branches[currentState.context.category];
      if (categoryScenarios) {
        const match = Object.values(categoryScenarios).find(
          scenario => this.matchesScenario(normalizedMessage, scenario)
        );
        if (match) return match;
      }
    }

    // Vérifier les catégories principales
    const mainMatch = Object.values(scenarioTree.main).find(
      category => this.matchesScenario(normalizedMessage, category)
    );
    if (mainMatch) return mainMatch;

    // Vérifier tous les scénarios spécifiques
    for (const branch of Object.values(scenarioTree.branches)) {
      const match = Object.values(branch).find(
        scenario => this.matchesScenario(normalizedMessage, scenario)
      );
      if (match) return match;
    }

    return null;
  }

  startScenario(scenario: ConversationScenario, state: ConversationState): ChatResponse {
    this.activeScenarios.set(scenario.id, 0);
    return scenario.responses.initial;
  }

  continueScenario(scenarioId: string, message: string, state: ConversationState): ChatResponse | null {
    const scenario = this.findScenarioById(scenarioId);
    if (!scenario) return null;

    const step = this.activeScenarios.get(scenarioId) || 0;
    this.activeScenarios.set(scenarioId, step + 1);

    if (scenario.responses.followUp) {
      if (Array.isArray(scenario.responses.followUp)) {
        return scenario.responses.followUp[step % scenario.responses.followUp.length];
      }
      return scenario.responses.followUp;
    }

    return null;
  }

  private matchesScenario(message: string, scenario: ConversationScenario): boolean {
    return scenario.trigger.some(trigger => message.includes(trigger));
  }

  private findScenarioById(id: string): ConversationScenario | null {
    for (const branch of Object.values(scenarioTree.branches)) {
      for (const scenario of Object.values(branch)) {
        if (scenario.id === id) return scenario;
      }
    }
    return null;
  }
}