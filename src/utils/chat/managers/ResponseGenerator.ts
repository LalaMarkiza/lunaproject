import { ChatResponse, MessageAnalysis } from '../../../types/chat';
import { emotionalResponses } from '../responses/emotionalResponses';
import { physicalResponses } from '../responses/physicalResponses';
import { generalResponses } from '../responses/generalResponses';
import { BREATHING_EXERCISE } from '../../exercises';

export class ResponseGenerator {
  private suggestionMap: Map<string, string[]> = new Map();

  generateContextualResponse(analysis: MessageAnalysis): ChatResponse {
    if (analysis.mainCategory === 'physical') {
      return this.generatePhysicalResponse(analysis);
    }
    if (analysis.mainCategory === 'emotional') {
      return this.generateEmotionalResponse(analysis);
    }
    return this.generateGeneralResponse();
  }

  generatePhysicalResponse(analysis: MessageAnalysis): ChatResponse {
    const response = physicalResponses.pain[analysis.subCategory || 'general'].initial();
    this.storeSuggestions(response.content, response.suggestions || []);
    return response;
  }

  generateEmotionalResponse(analysis: MessageAnalysis): ChatResponse {
    const response = emotionalResponses[analysis.subCategory || 'general'].initial(analysis.intensity || 2);
    this.storeSuggestions(response.content, response.suggestions || []);
    return response;
  }

  generateGeneralResponse(): ChatResponse {
    return generalResponses.default;
  }

  getSuggestionsForResponse(responseContent: string): string[] {
    return this.suggestionMap.get(responseContent) || [];
  }

  private storeSuggestions(responseContent: string, suggestions: string[]): void {
    this.suggestionMap.set(responseContent, suggestions);
  }

  // ... [rest of the existing methods]
}