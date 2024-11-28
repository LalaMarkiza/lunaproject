import { ChatResponse } from '../types/chat';
import { ConversationManager } from './chat/managers/ConversationManager';
import { StateManager } from './chat/managers/StateManager';
import { MessageAnalyzer } from './chat/messageAnalyzer';
import { ResponseGenerator } from './chat/managers/ResponseGenerator';
import { ScenarioManager } from './chat/scenarios/ScenarioManager';

export class LunaCore {
  private conversationManager: ConversationManager;
  private stateManager: StateManager;
  private messageAnalyzer: MessageAnalyzer;
  private responseGenerator: ResponseGenerator;
  private scenarioManager: ScenarioManager;

  constructor() {
    this.stateManager = new StateManager();
    this.messageAnalyzer = new MessageAnalyzer();
    this.responseGenerator = new ResponseGenerator();
    this.scenarioManager = new ScenarioManager();
    
    this.conversationManager = new ConversationManager(
      this.stateManager,
      this.messageAnalyzer,
      this.responseGenerator,
      this.scenarioManager
    );
  }

  processMessage(message: string): ChatResponse {
    return this.conversationManager.processMessage(message);
  }
}