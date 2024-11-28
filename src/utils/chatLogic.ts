import { ChatResponse, Exercise, ConversationState, EmotionalState } from '../types/chat';

const BREATHING_EXERCISE: Exercise = {
  id: 'basic-breathing',
  type: 'breathing',
  steps: [
    { phase: 'inhale', duration: 4, instruction: 'Inspirez lentement par le nez...' },
    { phase: 'hold', duration: 4, instruction: 'Retenez votre souffle...' },
    { phase: 'exhale', duration: 6, instruction: 'Expirez doucement par la bouche...' },
  ],
  totalDuration: 14,
};

export class LunaChatLogic {
  private state: ConversationState = {
    phase: 'initial',
    exerciseConfirmed: false,
    lastMessage: '',
    activeExercise: false,
    currentTopic: null,
    emotionalState: null,
    exerciseProgress: 0,
    previousTopics: [],
  };

  private emotionalKeywords = {
    irritability: ['irritable', 'énervée', 'agacée', 'nerveuse', 'tendue'],
    anxiety: ['anxieuse', 'stressée', 'inquiète', 'angoissée', 'peur'],
    sadness: ['triste', 'déprimée', 'morose', 'down', 'mal-être'],
    physical: ['mal', 'douleur', 'crampes', 'fatigue', 'ventre']
  };

  private responses = {
    emotional: {
      irritability: {
        initial: "Je comprends que vous vous sentiez irritable. C'est une émotion qui peut être particulièrement intense pendant cette phase. Voulez-vous m'en dire plus ?",
        followUp: "Comment cette irritabilité se manifeste-t-elle dans votre corps ? Y a-t-il des moments où c'est plus intense ?",
        support: "Je peux vous proposer plusieurs approches pour apaiser cette irritabilité. Souhaitez-vous essayer un exercice de respiration apaisant ?"
      },
      anxiety: {
        initial: "Je comprends que vous ressentiez de l'anxiété. C'est une émotion qui demande beaucoup d'énergie. Pouvez-vous me dire ce qui vous préoccupe ?",
        followUp: "Comment cette anxiété se manifeste-t-elle ? Ressentez-vous des tensions physiques particulières ?",
        support: "Je peux vous guider à travers différentes techniques pour apaiser cette anxiété. Voulez-vous essayer ?"
      },
      sadness: {
        initial: "Je comprends que vous traversiez un moment difficile. Vous n'êtes pas seule. Voulez-vous me parler de ce qui vous attriste ?",
        followUp: "Prendre le temps d'accueillir sa tristesse est important. Comment vous sentez-vous en ce moment précis ?",
        support: "Je suis là pour vous accompagner. Souhaitez-vous que nous explorions ensemble des moyens de vous sentir mieux ?"
      }
    },
    physical: {
      pain: {
        initial: `Je comprends que ces douleurs sont difficiles. Voici ce que je vous propose :

1. Installez-vous confortablement
2. Placez une bouillotte chaude sur votre ventre si possible
3. Faisons ensemble un exercice de respiration apaisant

Souhaitez-vous essayer cet exercice ensemble ?`,
        followUp: "Comment décririez-vous l'intensité de la douleur ? Est-elle constante ou variable ?",
        support: "Je peux vous guider à travers différentes techniques pour soulager la douleur. Que préférez-vous essayer en premier ?"
      }
    },
    postExercise: {
      check: "Comment vous sentez-vous après cet exercice ?",
      positive: "Je suis ravie que vous vous sentiez mieux ! Souhaitez-vous explorer d'autres techniques ?",
      neutral: "C'est normal que les effets ne soient pas immédiats. Voulez-vous essayer une autre approche ?",
      negative: "Je comprends que vous ne vous sentiez pas encore mieux. Parfois, notre corps a besoin de temps. Souhaitez-vous essayer quelque chose de différent ?"
    },
    default: {
      greeting: "Je suis là pour vous écouter. Que puis-je faire pour vous aider ?",
      confused: "Je ne suis pas sûre de bien comprendre. Pouvez-vous m'en dire plus ?",
      empathy: "Je comprends que ce n'est pas facile. Je suis là pour vous accompagner."
    }
  };

  findBestResponse(message: string): ChatResponse {
    const normalizedMsg = message.toLowerCase();
    this.state.lastMessage = normalizedMsg;

    // Handle post-exercise feedback
    if (this.state.phase === 'post_exercise') {
      return this.handlePostExerciseResponse(normalizedMsg);
    }

    // Detect emotional state
    const emotion = this.detectEmotion(normalizedMsg);
    if (emotion && this.isValidEmotion(emotion)) {
      this.state.emotionalState = {
        primary: emotion,
        intensity: this.detectIntensity(normalizedMsg),
        timestamp: new Date()
      };
      return this.handleEmotionalResponse(emotion);
    }

    // Handle physical symptoms
    if (this.detectPhysicalSymptoms(normalizedMsg)) {
      return this.handlePhysicalResponse(normalizedMsg);
    }

    // Handle exercise confirmation
    if (this.state.phase === 'exercise_proposed' && this.isPositiveResponse(normalizedMsg)) {
      return this.startExercise();
    }

    // Default response
    return {
      type: 'text',
      content: this.getContextualResponse(),
      delay: 1000
    };
  }

  private isValidEmotion(emotion: string): boolean {
    return emotion in this.responses.emotional;
  }

  private detectEmotion(message: string): string | null {
    for (const [emotion, keywords] of Object.entries(this.emotionalKeywords)) {
      if (keywords.some(keyword => message.includes(keyword))) {
        return emotion;
      }
    }
    return null;
  }

  private detectIntensity(message: string): number {
    const intensityWords = {
      high: ['très', 'beaucoup', 'extrêmement', 'tellement'],
      medium: ['assez', 'plutôt', 'moyennement'],
      low: ['un peu', 'légèrement', 'faiblement']
    };

    if (intensityWords.high.some(word => message.includes(word))) return 3;
    if (intensityWords.medium.some(word => message.includes(word))) return 2;
    if (intensityWords.low.some(word => message.includes(word))) return 1;
    return 2; // default medium intensity
  }

  private handleEmotionalResponse(emotion: string): ChatResponse {
    if (!this.isValidEmotion(emotion)) {
      return {
        type: 'text',
        content: this.responses.default.empathy,
        delay: 1000
      };
    }

    const responses = this.responses.emotional[emotion as keyof typeof this.responses.emotional];
    return {
      type: 'text',
      content: this.state.currentTopic ? responses.followUp : responses.initial,
      delay: 1500
    };
  }

  private handlePhysicalResponse(message: string): ChatResponse {
    if (message.includes('mal') && message.includes('ventre')) {
      this.state.phase = 'exercise_proposed';
      this.state.currentTopic = 'pain';
      return {
        type: 'text',
        content: this.responses.physical.pain.initial,
        delay: 1500
      };
    }
    return {
      type: 'text',
      content: this.responses.physical.pain.followUp,
      delay: 1000
    };
  }

  private handlePostExerciseResponse(message: string): ChatResponse {
    const response = this.getPostExerciseResponse(message);
    this.state.phase = 'follow_up';
    return {
      type: 'text',
      content: response,
      delay: 1200
    };
  }

  private startExercise(): ChatResponse {
    this.state.phase = 'exercise_active';
    return {
      type: 'exercise',
      content: "Super, commençons l'exercice de respiration.",
      exercise: BREATHING_EXERCISE,
      delay: 800
    };
  }

  private getPostExerciseResponse(message: string): string {
    if (this.isPositiveResponse(message)) {
      return this.responses.postExercise.positive;
    }
    if (this.isNegativeResponse(message)) {
      return this.responses.postExercise.negative;
    }
    return this.responses.postExercise.neutral;
  }

  private isPositiveResponse(message: string): boolean {
    const positiveWords = ['oui', "d'accord", 'ok', 'bien', 'mieux', 'soulagée'];
    return positiveWords.some(word => message.includes(word));
  }

  private isNegativeResponse(message: string): boolean {
    const negativeWords = ['non', 'pas', 'pire', 'mal'];
    return negativeWords.some(word => message.includes(word));
  }

  private detectPhysicalSymptoms(message: string): boolean {
    return this.emotionalKeywords.physical.some(keyword => message.includes(keyword));
  }

  private getContextualResponse(): string {
    switch (this.state.phase) {
      case 'exercise_proposed':
        return this.responses.physical.pain.support;
      case 'post_exercise':
        return this.responses.postExercise.check;
      case 'follow_up':
        return "Souhaitez-vous explorer d'autres techniques de relaxation ?";
      default:
        return this.responses.default.greeting;
    }
  }

  setPhase(phase: ConversationState['phase']) {
    this.state.phase = phase;
  }

  getPhase(): ConversationState['phase'] {
    return this.state.phase;
  }
}