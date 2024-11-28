import { ChatResponse } from '../../../types/chat';
import { MessageAnalyzer } from '../messageAnalyzer';
import { ConversationContext } from './ConversationContext';
import { ResponseSelector } from './ResponseSelector';
import { ErrorHandler } from './ErrorHandler';
import { ResponseManager } from '../responses/ResponseManager';

export class LunaCore {
  private messageAnalyzer: MessageAnalyzer;
  private context: ConversationContext;
  private responseSelector: ResponseSelector;
  private responseManager: ResponseManager;
  private lastUserMessage: string = '';

  constructor() {
    this.messageAnalyzer = new MessageAnalyzer();
    this.context = new ConversationContext();
    this.responseManager = new ResponseManager();
    this.responseSelector = new ResponseSelector(this.context);
  }

  processMessage(message: string): ChatResponse {
    try {
      // Vérifier si le message est vide
      if (!message?.trim()) {
        return this.responseManager.getDefaultResponse();
      }

      // Vérifier les répétitions
      if (message === this.lastUserMessage) {
        return {
          type: 'text',
          content: "Je remarque que vous répétez votre message. Essayons d'explorer cela différemment. Que souhaitez-vous aborder ?",
          suggestions: ['plus de détails', 'autre approche', 'autre sujet'],
          delay: 1000
        };
      }

      this.lastUserMessage = message;
      this.context.incrementMessageCount();

      // Analyser le message
      const analysis = this.messageAnalyzer.analyzeMessage(message);

      // Mettre à jour le contexte avec la catégorie principale
      if (analysis.mainCategory) {
        this.context.trackTopic(analysis.mainCategory);
        this.context.updateContext({
          category: analysis.mainCategory,
          subCategory: analysis.subCategory
        });
      }

      // Si nous sommes dans une phase d'exercice et que l'utilisateur donne un feedback
      if (this.context.getState().phase === 'post_exercise') {
        return this.responseManager.getPostExerciseResponse(message);
      }

      // Si l'utilisateur demande explicitement un exercice
      if (analysis.needsExercise) {
        return this.responseManager.getExerciseResponse('breathing');
      }

      // Sélectionner la réponse appropriée basée sur l'analyse et le contexte
      const response = this.responseSelector.selectResponse(analysis);

      // Mettre à jour le contexte avec la réponse
      this.context.updateContext({
        lastResponse: response.content,
        currentScenario: response.type === 'exercise' ? 'exercise' : null
      });

      // Si la réponse contient une nouvelle phase, mettre à jour le contexte
      if (response.nextPhase) {
        this.context.updatePhase(response.nextPhase);
      }

      return response;

    } catch (error) {
      console.error('Error processing message:', error);
      return ErrorHandler.handleError(error as Error);
    }
  }

  resetConversation(): void {
    this.lastUserMessage = '';
    this.context.reset();
  }
}