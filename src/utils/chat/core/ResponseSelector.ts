import { ChatResponse, MessageAnalysis } from '../../../types/chat';
import { ConversationContext } from './ConversationContext';
import { ConversationFlow } from './ConversationFlow';
import { BREATHING_EXERCISE, RELAXATION_EXERCISE, ANTI_STRESS_EXERCISE } from '../../exercises';

export class ResponseSelector {
  private conversationFlow: ConversationFlow;
  private lastApproach: string | null = null;

  constructor(
    private context: ConversationContext
  ) {
    this.conversationFlow = new ConversationFlow();
  }

  selectResponse(analysis: MessageAnalysis): ChatResponse {
    const state = this.context.getState();

    // Vérifier si nous devons changer d'approche
    if (this.context.shouldChangeApproach()) {
      return this.generateAlternativeApproach(analysis);
    }

    // Si nous sommes dans un flux de conversation actif
    if (state.context.currentScenario) {
      const flowResponse = this.conversationFlow.continueFlow(analysis.mainCategory || '');
      if (flowResponse) return flowResponse;
    }

    // Sélectionner une réponse basée sur l'analyse
    switch (analysis.mainCategory) {
      case 'physical':
        return this.handlePhysicalConcern(analysis);
      case 'emotional':
        return this.handleEmotionalConcern(analysis);
      case 'stress':
        return this.handleStressConcern(analysis);
      case 'cycle':
        return this.handleCycleConcern(analysis);
      default:
        return this.getDefaultResponse();
    }
  }

  private handlePhysicalConcern(analysis: MessageAnalysis): ChatResponse {
    const { location, intensity } = analysis.physical || {};

    // Si c'est la première mention de douleur physique
    if (!location) {
      return this.conversationFlow.startFlow('physical');
    }

    // Si la douleur est intense, proposer un exercice
    if (intensity && intensity > 2) {
      this.lastApproach = 'exercise';
      return {
        type: 'exercise',
        content: "Je comprends que cette douleur soit difficile. Voulez-vous essayer un exercice apaisant ?",
        exercise: BREATHING_EXERCISE,
        suggestions: ['oui', 'non', 'autres solutions'],
        delay: 1000
      };
    }

    // Si nous avons déjà proposé un exercice, suggérer une autre approche
    if (this.lastApproach === 'exercise') {
      this.lastApproach = 'practical';
      return {
        type: 'text',
        content: "Voici quelques conseils pratiques qui pourraient vous soulager. Que souhaitez-vous explorer ?",
        suggestions: [
          'positions antidouleur',
          'remèdes naturels',
          'techniques de massage'
        ],
        delay: 1000
      };
    }

    return {
      type: 'text',
      content: "Comment puis-je vous aider à vous sentir mieux ?",
      suggestions: [
        'exercice de respiration',
        'conseils pratiques',
        'techniques de relaxation'
      ],
      delay: 1000
    };
  }

  private handleEmotionalConcern(analysis: MessageAnalysis): ChatResponse {
    const { emotion, intensity } = analysis.emotional || {};

    if (!emotion) {
      return this.conversationFlow.startFlow('emotional');
    }

    if (intensity && intensity > 2) {
      this.lastApproach = 'support';
      return {
        type: 'text',
        content: "Je comprends que ce moment soit particulièrement difficile. Voulez-vous qu'on en parle ou préférez-vous essayer un exercice apaisant ?",
        exercise: ANTI_STRESS_EXERCISE,
        suggestions: ['parler', 'faire un exercice', 'avoir des conseils'],
        delay: 1500
      };
    }

    return {
      type: 'text',
      content: "Je suis là pour vous écouter. Comment puis-je vous accompagner ?",
      suggestions: [
        'parler de ce que je ressens',
        'faire un exercice apaisant',
        'avoir des conseils'
      ],
      delay: 1000
    };
  }

  private handleStressConcern(analysis: MessageAnalysis): ChatResponse {
    if (this.lastApproach === 'exercise') {
      this.lastApproach = 'discussion';
      return {
        type: 'text',
        content: "Parlons de ce qui génère ce stress. Qu'est-ce qui vous préoccupe particulièrement ?",
        suggestions: [
          'travail/études',
          'vie personnelle',
          'santé',
          'autre chose'
        ],
        delay: 1000
      };
    }

    this.lastApproach = 'exercise';
    return {
      type: 'exercise',
      content: "Le stress peut être intense. Voulez-vous essayer un exercice de relaxation ?",
      exercise: RELAXATION_EXERCISE,
      suggestions: ['oui', 'non', 'autre chose'],
      delay: 1000
    };
  }

  private handleCycleConcern(analysis: MessageAnalysis): ChatResponse {
    return {
      type: 'text',
      content: "Votre cycle est unique. Que souhaitez-vous explorer ?",
      suggestions: [
        'comprendre mes phases',
        'suivre mon cycle',
        'gérer mes symptômes',
        'avoir des conseils'
      ],
      delay: 1000
    };
  }

  private generateAlternativeApproach(analysis: MessageAnalysis): ChatResponse {
    const currentApproach = this.lastApproach;
    
    if (currentApproach === 'exercise') {
      this.lastApproach = 'discussion';
      return {
        type: 'text',
        content: "Essayons une approche différente. Voulez-vous qu'on prenne le temps d'en parler ?",
        suggestions: [
          'oui, parlons-en',
          'je préfère autre chose',
          'donnez-moi des conseils'
        ],
        delay: 1000
      };
    }

    this.lastApproach = 'exercise';
    return {
      type: 'exercise',
      content: "Et si nous essayions quelque chose de différent ? Un exercice pourrait vous faire du bien.",
      exercise: BREATHING_EXERCISE,
      suggestions: ['oui', 'non', 'autre chose'],
      delay: 1000
    };
  }

  private getDefaultResponse(): ChatResponse {
    return {
      type: 'text',
      content: "Je suis là pour vous accompagner. Que souhaitez-vous explorer ?",
      suggestions: [
        'j\'ai des douleurs physiques',
        'j\'ai le moral dans les chaussettes',
        'je me sens stressée',
        'j\'ai des questions sur mon cycle'
      ],
      delay: 1000
    };
  }
}