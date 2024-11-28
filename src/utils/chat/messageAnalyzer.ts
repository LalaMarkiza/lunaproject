import { MessageAnalysis } from '../../types/chat';

export class MessageAnalyzer {
  private readonly emotionalKeywords = {
    anxiety: ['anxieuse', 'stressée', 'angoissée', 'inquiète', 'peur'],
    sadness: ['triste', 'déprimée', 'morale', 'down', 'seule'],
    irritability: ['irritable', 'énervée', 'agacée', 'tendue', 'nerveuse']
  };

  private readonly physicalKeywords = {
    ventre: ['ventre', 'crampes', 'règles', 'abdomen'],
    tête: ['tête', 'migraine', 'crâne', 'tempes'],
    dos: ['dos', 'lombaires', 'colonne'],
    seins: ['seins', 'poitrine', 'tension mammaire']
  };

  analyzeMessage(message: string): MessageAnalysis {
    const normalizedMsg = message.toLowerCase();
    
    return {
      mainCategory: this.detectMainCategory(normalizedMsg),
      subCategory: this.detectSubCategory(normalizedMsg),
      sentiment: this.analyzeSentiment(normalizedMsg),
      needsExercise: this.detectExerciseNeed(normalizedMsg),
      isRepeat: false,
      keywords: this.extractKeywords(normalizedMsg),
      physical: this.analyzePhysicalSymptoms(normalizedMsg),
      emotional: this.analyzeEmotionalState(normalizedMsg)
    };
  }

  private detectMainCategory(message: string): string | null {
    if (this.hasPhysicalSymptoms(message)) return 'physical';
    if (this.hasEmotionalSymptoms(message)) return 'emotional';
    if (message.includes('cycle') || message.includes('règles')) return 'cycle';
    if (message.includes('stress') || message.includes('tension')) return 'stress';
    return null;
  }

  private detectSubCategory(message: string): string | undefined {
    // Implementation based on specific keywords
    return undefined;
  }

  private analyzeSentiment(message: string): 'positive' | 'negative' | 'neutral' {
    const positiveWords = ['mieux', 'bien', 'merci', 'super'];
    const negativeWords = ['mal', 'pas', 'difficile', 'pire'];

    if (positiveWords.some(word => message.includes(word))) return 'positive';
    if (negativeWords.some(word => message.includes(word))) return 'negative';
    return 'neutral';
  }

  private detectExerciseNeed(message: string): boolean {
    const exerciseKeywords = ['exercice', 'respiration', 'relaxation', 'méditation'];
    return exerciseKeywords.some(word => message.includes(word));
  }

  private extractKeywords(message: string): string[] {
    // Implementation to extract relevant keywords
    return [];
  }

  private hasPhysicalSymptoms(message: string): boolean {
    return Object.values(this.physicalKeywords)
      .flat()
      .some(keyword => message.includes(keyword));
  }

  private hasEmotionalSymptoms(message: string): boolean {
    return Object.values(this.emotionalKeywords)
      .flat()
      .some(keyword => message.includes(keyword));
  }

  private analyzePhysicalSymptoms(message: string): { location?: string; intensity?: number } {
    let location: string | undefined;
    
    for (const [loc, keywords] of Object.entries(this.physicalKeywords)) {
      if (keywords.some(keyword => message.includes(keyword))) {
        location = loc;
        break;
      }
    }

    return {
      location,
      intensity: this.detectIntensity(message)
    };
  }

  private analyzeEmotionalState(message: string): { emotion?: string; intensity?: number } {
    let emotion: string | undefined;
    
    for (const [emo, keywords] of Object.entries(this.emotionalKeywords)) {
      if (keywords.some(keyword => message.includes(keyword))) {
        emotion = emo;
        break;
      }
    }

    return {
      emotion,
      intensity: this.detectIntensity(message)
    };
  }

  private detectIntensity(message: string): number {
    const highIntensity = ['très', 'beaucoup', 'trop', 'intense'];
    const lowIntensity = ['peu', 'léger', 'légèrement'];

    if (highIntensity.some(word => message.includes(word))) return 3;
    if (lowIntensity.some(word => message.includes(word))) return 1;
    return 2;
  }
}