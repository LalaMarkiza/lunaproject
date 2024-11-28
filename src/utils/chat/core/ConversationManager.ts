import { ChatResponse, MessageAnalysis, ConversationState } from '../../../types/chat';
import { StateManager } from './StateManager';
import { MessageAnalyzer } from '../messageAnalyzer';
import { ResponseGenerator } from '../managers/ResponseGenerator';
import { ScenarioManager } from '../scenarios/ScenarioManager';
import { ConversationFlow } from './ConversationFlow';
import { ErrorHandler } from './ErrorHandler';

export class ConversationManager {
  private lastUserMessage: string = '';
  private messageHistory: Set<string> = new Set();
  private consecutiveRepeatCount: number = 0;

  constructor(
    private stateManager: StateManager,
    private messageAnalyzer: MessageAnalyzer,
    private responseGenerator: ResponseGenerator,
    private scenarioManager: ScenarioManager,
    private conversationFlow: ConversationFlow
  ) {}

  processMessage(message: string): ChatResponse {
    try {
      if (!message?.trim()) {
        return this.getDefaultResponse();
      }

      // Gestion des répétitions
      if (this.isRepeatMessage(message)) {
        return this.handleRepeatMessage();
      }

      // Mise à jour de l'historique
      this.updateMessageHistory(message);

      // Analyse du message
      const analysis = this.messageAnalyzer.analyzeMessage(message);
      const currentState = this.stateManager.getCurrentState();

      // Gestion du flux de conversation actif
      if (this.isInActiveFlow(currentState)) {
        return this.continueConversationFlow(analysis, currentState);
      }

      // Recherche d'un nouveau scénario
      const scenario = this.scenarioManager.findMatchingScenario(message, currentState);
      if (scenario) {
        return this.startNewScenario(scenario, analysis);
      }

      // Gestion des réponses aux suggestions
      if (this.isResponseToSuggestion(message, currentState)) {
        return this.handleSuggestionResponse(message, analysis, currentState);
      }

      // Réponse contextuelle par défaut
      return this.getContextualResponse(analysis, currentState);

    } catch (error) {
      console.error('Error in conversation manager:', error);
      return ErrorHandler.handleError(error as Error);
    }
  }

  private getDefaultResponse(): ChatResponse {
    return {
      type: 'text',
      content: "Je suis là pour vous écouter. Comment puis-je vous aider ?",
      suggestions: [
        'j\'ai des douleurs physiques',
        'j\'ai le moral dans les chaussettes',
        'je me sens stressée',
        'j\'ai des questions sur mon cycle'
      ],
      delay: 1000
    };
  }

  private isRepeatMessage(message: string): boolean {
    const isRepeat = message === this.lastUserMessage;
    if (isRepeat) {
      this.consecutiveRepeatCount++;
      return this.consecutiveRepeatCount > 2;
    }
    this.consecutiveRepeatCount = 0;
    this.lastUserMessage = message;
    return false;
  }

  private handleRepeatMessage(): ChatResponse {
    return {
      type: 'text',
      content: "Je remarque que nous répétons la même chose. Essayons une approche différente. Que souhaitez-vous explorer ?",
      suggestions: ['changer de sujet', 'plus de détails', 'autre approche'],
      delay: 1000
    };
  }

  private updateMessageHistory(message: string): void {
    this.messageHistory.add(message);
    this.lastUserMessage = message;
  }

  private isInActiveFlow(state: ConversationState): boolean {
    return Boolean(
      state.context.currentScenario && 
      !this.conversationFlow.isFlowComplete()
    );
  }

  private continueConversationFlow(
    analysis: MessageAnalysis, 
    state: ConversationState
  ): ChatResponse {
    const nextStep = this.conversationFlow.getNextStep(
      state.context.category || '',
      this.lastUserMessage
    );

    if (nextStep === 'complete') {
      return this.handleFlowCompletion(analysis, state);
    }

    return this.responseGenerator.generateStepResponse(nextStep, analysis);
  }

  private handleFlowCompletion(
    analysis: MessageAnalysis,
    state: ConversationState
  ): ChatResponse {
    this.conversationFlow.resetFlow();
    return this.getContextualResponse(analysis, state);
  }

  private startNewScenario(
    scenario: any, 
    analysis: MessageAnalysis
  ): ChatResponse {
    this.stateManager.updateContext({
      currentScenario: scenario.id,
      category: scenario.category,
      subCategory: analysis.subCategory
    });
    this.conversationFlow.startNewFlow(scenario.category);
    return this.scenarioManager.startScenario(scenario, this.stateManager.getCurrentState());
  }

  private isResponseToSuggestion(message: string, state: ConversationState): boolean {
    const lastResponse = state.context.lastResponse;
    if (!lastResponse) return false;

    const suggestions = this.responseGenerator.getSuggestionsForResponse(lastResponse);
    return suggestions.some(suggestion => 
      message.toLowerCase().includes(suggestion.toLowerCase())
    );
  }

  private handleSuggestionResponse(
    message: string,
    analysis: MessageAnalysis,
    state: ConversationState
  ): ChatResponse {
    const category = state.context.category;
    if (!category) return this.responseGenerator.generateGeneralResponse();

    return this.responseGenerator.generateCategoryResponse(category, analysis);
  }

  private getContextualResponse(
    analysis: MessageAnalysis, 
    state: ConversationState
  ): ChatResponse {
    if (state.phase === 'assessment') {
      return this.responseGenerator.generateIntensityQuestion(
        state.context.category || 'general'
      );
    }

    return analysis.mainCategory ? 
      this.responseGenerator.generateCategoryResponse(analysis.mainCategory, analysis) :
      this.responseGenerator.generateGeneralResponse();
  }
}