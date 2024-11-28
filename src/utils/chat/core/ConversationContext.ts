import { ConversationPhase, ConversationState } from '../../../types/chat';

export class ConversationContext {
  private state: ConversationState = {
    phase: 'initial',
    context: {
      currentScenario: null,
      lastResponse: null,
      previousResponses: new Set(),
      messageCount: 0,
      category: undefined,
      subCategory: undefined
    },
    assessment: {}
  };

  private conversationHistory: Map<string, number> = new Map();
  private topicFrequency: Map<string, number> = new Map();
  private userPreferences: Set<string> = new Set();
  private lastCategory: string | null = null;
  private lastSubCategory: string | null = null;

  updatePhase(phase: ConversationPhase): void {
    this.state.phase = phase;
  }

  updateContext(update: Partial<ConversationState['context']>): void {
    this.state.context = {
      ...this.state.context,
      ...update
    };

    if (update.lastResponse) {
      this.state.context.previousResponses.add(update.lastResponse);
    }

    if (update.category) {
      this.lastCategory = update.category;
    }

    if (update.subCategory) {
      this.lastSubCategory = update.subCategory;
    }
  }

  trackTopic(topic: string): void {
    const currentCount = this.topicFrequency.get(topic) || 0;
    this.topicFrequency.set(topic, currentCount + 1);
  }

  addUserPreference(preference: string): void {
    this.userPreferences.add(preference);
  }

  getMostDiscussedTopics(): string[] {
    return Array.from(this.topicFrequency.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([topic]) => topic)
      .slice(0, 3);
  }

  getUserPreferences(): string[] {
    return Array.from(this.userPreferences);
  }

  getState(): ConversationState {
    return { ...this.state };
  }

  hasSeenResponse(response: string): boolean {
    return this.state.context.previousResponses.has(response);
  }

  getMessageCount(): number {
    return this.state.context.messageCount;
  }

  incrementMessageCount(): void {
    this.state.context.messageCount++;
  }

  isRelatedToLastTopic(category: string, subCategory?: string): boolean {
    if (category !== this.lastCategory) return false;
    if (subCategory && subCategory !== this.lastSubCategory) return false;
    return true;
  }

  shouldChangeApproach(): boolean {
    const topicCounts = Array.from(this.topicFrequency.values());
    const maxCount = Math.max(...topicCounts);
    return maxCount > 3; // Si un même sujet revient plus de 3 fois
  }

  reset(): void {
    this.state = {
      phase: 'initial',
      context: {
        currentScenario: null,
        lastResponse: null,
        previousResponses: new Set(),
        messageCount: 0,
        category: undefined,
        subCategory: undefined
      },
      assessment: {}
    };
    this.conversationHistory.clear();
    this.topicFrequency.clear();
    this.userPreferences.clear();
    this.lastCategory = null;
    this.lastSubCategory = null;
  }
}