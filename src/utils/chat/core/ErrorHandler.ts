import { ChatResponse } from '../../../types/chat';

export class ErrorHandler {
  private static readonly DEFAULT_ERROR_RESPONSE: ChatResponse = {
    type: 'text',
    content: "Je suis désolée, j'ai du mal à comprendre. Pouvez-vous reformuler autrement ?",
    suggestions: [
      'j\'ai des douleurs physiques',
      'j\'ai le moral dans les chaussettes',
      'je me sens stressée',
      'j\'ai des questions sur mon cycle'
    ],
    delay: 1000
  };

  static handleError(error: Error): ChatResponse {
    console.error('Luna Chat Error:', error);

    if (error instanceof TypeError) {
      return {
        type: 'text',
        content: "Je rencontre une petite difficulté technique. Pouvons-nous reprendre depuis le début ?",
        suggestions: ['recommencer', 'autre sujet'],
        delay: 1000
      };
    }

    if (error instanceof ReferenceError) {
      return {
        type: 'text',
        content: "Je n'ai pas bien saisi votre demande. Pouvez-vous la reformuler ?",
        suggestions: ['plus de détails', 'autre sujet'],
        delay: 1000
      };
    }

    return this.DEFAULT_ERROR_RESPONSE;
  }

  static handleInvalidState(): ChatResponse {
    return {
      type: 'text',
      content: "Je semble avoir perdu le fil de notre conversation. Pouvons-nous reprendre ?",
      suggestions: ['bien sûr', 'autre sujet'],
      delay: 1000
    };
  }

  static handleTimeout(): ChatResponse {
    return {
      type: 'text',
      content: "Notre conversation a été interrompue. Souhaitez-vous continuer ?",
      suggestions: ['oui', 'nouveau sujet'],
      delay: 1000
    };
  }
}