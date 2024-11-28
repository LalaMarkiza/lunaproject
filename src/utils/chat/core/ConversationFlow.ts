import { ChatResponse, ConversationPhase } from '../../../types/chat';

export class ConversationFlow {
  private readonly flowSteps = {
    physical: {
      initial: {
        phase: 'physical_assessment' as ConversationPhase,
        questions: [
          "Où ressentez-vous ces douleurs ?",
          "Depuis combien de temps ?",
          "Comment décririez-vous l'intensité ?"
        ]
      },
      followUp: {
        phase: 'suggesting_techniques' as ConversationPhase,
        responses: {
          ventre: {
            content: "Je comprends que ces douleurs soient difficiles. Souhaitez-vous essayer un exercice de respiration apaisante ?",
            suggestions: ['oui', 'non', 'autres solutions']
          },
          tete: {
            content: "Les maux de tête peuvent être intenses. Voulez-vous explorer des techniques de soulagement ?",
            suggestions: ['massage des tempes', 'respiration', 'repos']
          }
        }
      }
    },
    emotional: {
      initial: {
        phase: 'emotional_support' as ConversationPhase,
        questions: [
          "Comment vous sentez-vous exactement ?",
          "Depuis quand ressentez-vous cela ?",
          "Y a-t-il un événement particulier qui a déclenché ce ressenti ?"
        ]
      },
      followUp: {
        phase: 'suggesting_techniques' as ConversationPhase,
        responses: {
          anxiety: {
            content: "L'anxiété peut être difficile à porter. Voulez-vous que nous prenions un moment pour respirer ensemble ?",
            suggestions: ['oui', 'parler plutôt', 'autres solutions']
          },
          sadness: {
            content: "Je suis là avec vous dans ce moment difficile. Souhaitez-vous en parler ou préférez-vous un exercice apaisant ?",
            suggestions: ['parler', 'exercice', 'autre chose']
          }
        }
      }
    }
  };

  private currentCategory: string | null = null;
  private currentStep: number = 0;

  startFlow(category: string): ChatResponse {
    this.currentCategory = category;
    this.currentStep = 0;

    const flow = this.flowSteps[category as keyof typeof this.flowSteps];
    if (!flow) return this.getDefaultResponse();

    return {
      type: 'text',
      content: flow.initial.questions[0],
      suggestions: this.getSuggestionsForCategory(category),
      delay: 1000,
      nextPhase: flow.initial.phase
    };
  }

  continueFlow(response: string): ChatResponse | null {
    if (!this.currentCategory) return null;

    const flow = this.flowSteps[this.currentCategory as keyof typeof this.flowSteps];
    if (!flow) return null;

    this.currentStep++;

    // Si nous avons encore des questions dans la phase initiale
    if (this.currentStep < flow.initial.questions.length) {
      return {
        type: 'text',
        content: flow.initial.questions[this.currentStep],
        suggestions: this.getSuggestionsForStep(this.currentStep),
        delay: 1000,
        nextPhase: flow.initial.phase
      };
    }

    // Passer à la phase de suivi
    const followUpResponse = this.getFollowUpResponse(response);
    if (followUpResponse) {
      return {
        ...followUpResponse,
        nextPhase: flow.followUp.phase
      };
    }

    return null;
  }

  private getFollowUpResponse(response: string): ChatResponse | null {
    if (!this.currentCategory) return null;

    const flow = this.flowSteps[this.currentCategory as keyof typeof this.flowSteps];
    if (!flow?.followUp?.responses) return null;

    // Trouver la réponse appropriée basée sur le mot-clé
    for (const [key, value] of Object.entries(flow.followUp.responses)) {
      if (response.toLowerCase().includes(key)) {
        return {
          type: 'text',
          ...value,
          delay: 1000
        };
      }
    }

    return null;
  }

  private getSuggestionsForCategory(category: string): string[] {
    switch (category) {
      case 'physical':
        return [
          'j\'ai mal au ventre',
          'j\'ai mal à la tête',
          'j\'ai mal au dos',
          'j\'ai des douleurs aux seins'
        ];
      case 'emotional':
        return [
          'je me sens anxieuse',
          'je me sens triste',
          'je me sens irritable',
          'je me sens dépassée'
        ];
      default:
        return [];
    }
  }

  private getSuggestionsForStep(step: number): string[] {
    if (!this.currentCategory) return [];

    switch (this.currentCategory) {
      case 'physical':
        return step === 1 
          ? ['depuis quelques heures', 'depuis hier', 'depuis plusieurs jours']
          : ['légère', 'modérée', 'intense'];
      case 'emotional':
        return step === 1
          ? ['depuis ce matin', 'depuis quelques jours', 'depuis plus longtemps']
          : ['oui', 'non', 'je ne sais pas trop'];
      default:
        return [];
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

  isFlowComplete(): boolean {
    if (!this.currentCategory) return true;

    const flow = this.flowSteps[this.currentCategory as keyof typeof this.flowSteps];
    return this.currentStep >= (flow?.initial.questions.length || 0);
  }

  resetFlow(): void {
    this.currentCategory = null;
    this.currentStep = 0;
  }
}