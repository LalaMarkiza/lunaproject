import { ConversationState, ConversationPhase, AssessmentData, ConversationContext } from '../../../types/chat';

export class StateManager {
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

  getCurrentState(): ConversationState {
    return {
      ...this.state,
      context: {
        ...this.state.context,
        previousResponses: new Set(this.state.context.previousResponses)
      }
    };
  }

  setPhase(phase: ConversationPhase): void {
    this.state.phase = phase;
  }

  updateContext(update: Partial<ConversationContext>): void {
    this.state.context = {
      ...this.state.context,
      ...update,
      previousResponses: new Set([
        ...Array.from(this.state.context.previousResponses),
        ...(update.lastResponse ? [update.lastResponse] : [])
      ])
    };
  }

  updateAssessment(data: Partial<AssessmentData>): void {
    this.state.assessment = {
      ...this.state.assessment,
      ...data
    };
  }

  hasSeenResponse(response: string): boolean {
    return this.state.context.previousResponses.has(response);
  }

  resetState(): void {
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
  }
}