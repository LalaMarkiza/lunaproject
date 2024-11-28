import { ConversationPhase, ConversationState, ConversationContext, AssessmentData } from '../../../types/chat';

export class StateManager {
  private state: ConversationState = {
    phase: 'initial',
    context: {
      currentScenario: null,
      lastResponse: null,
      previousResponses: new Set(),
      messageCount: 0
    },
    assessment: {}
  };

  getCurrentState(): ConversationState {
    return { ...this.state };
  }

  setPhase(phase: ConversationPhase): void {
    this.state.phase = phase;
  }

  updateContext(update: Partial<ConversationContext>): void {
    this.state.context = {
      ...this.state.context,
      ...update
    };

    if (update.lastResponse) {
      this.state.context.previousResponses.add(update.lastResponse);
    }
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
        messageCount: 0
      },
      assessment: {}
    };
  }
}