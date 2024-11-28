import { ChatResponse, MessageAnalysis } from '../../../types/chat';
import { StateManager } from './StateManager';
import { MessageAnalyzer } from '../messageAnalyzer';
import { ResponseGenerator } from './ResponseGenerator';
import { ScenarioManager } from '../scenarios/ScenarioManager';

export class ConversationManager {
  private lastUserMessage: string = '';
  private messageCount: number = 0;

  constructor(
    private stateManager: StateManager,
    private messageAnalyzer: MessageAnalyzer,
    private responseGenerator: ResponseGenerator,
    private scenarioManager: ScenarioManager
  ) {}

  processMessage(message: string): ChatResponse {
    try {
      // Vérifier les messages répétés
      if (message === this.lastUserMessage) {
        return {
          type: 'text',
          content: "Je remarque que vous répétez votre message. Essayons d'explorer cela différemment. Que souhaitez-vous approfondir ?",
          suggestions: ['plus de détails', 'autre approche', 'autre sujet'],
          delay: 1000
        };
      }

      this.lastUserMessage = message;
      this.messageCount++;

      const analysis = this.messageAnalyzer.analyzeMessage(message);
      const currentState = this.stateManager.getCurrentState();

      // Trouver le scénario approprié
      const scenario = this.scenarioManager.findMatchingScenario(message, currentState);
      
      let response: ChatResponse;

      if (scenario) {
        response = this.scenarioManager.getNextResponse(scenario, currentState);
        this.stateManager.updateContext({
          currentScenario: scenario.id,
          category: scenario.category
        });
      } else {
        response = this.handleGeneralResponse(analysis);
      }

      // Mettre à jour le contexte
      this.stateManager.updateContext({
        lastMessage: message,
        lastResponse: response.content,
        messageCount: this.messageCount
      });

      return response;

    } catch (error) {
      console.error('Error processing message:', error);
      return {
        type: 'text',
        content: "Je suis désolée, j'ai du mal à comprendre. Pouvez-vous reformuler autrement ?",
        suggestions: ['recommencer', 'autre sujet', 'aide'],
        delay: 1000
      };
    }
  }

  private handleGeneralResponse(analysis: MessageAnalysis): ChatResponse {
    const currentState = this.stateManager.getCurrentState();

    if (currentState.phase === 'assessment') {
      return this.responseGenerator.generateIntensityQuestion(currentState.context.category || 'general');
    }

    if (analysis.mainCategory) {
      return this.responseGenerator.generateCategoryResponse(analysis.mainCategory);
    }

    return this.responseGenerator.generateGeneralResponse();
  }
}