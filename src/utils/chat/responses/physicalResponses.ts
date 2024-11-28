import { ChatResponse } from '../../../types/chat';
import { BREATHING_EXERCISE } from '../../exercises';

export const physicalResponses = {
  pain: {
    menstrual: {
      initial: (): ChatResponse => ({
        type: 'text',
        content: `Je comprends que ces douleurs sont difficiles. Voici ce que je vous propose :

1. Installez-vous confortablement
2. Placez une bouillotte chaude sur votre ventre si possible
3. Faisons ensemble un exercice de respiration apaisant

Souhaitez-vous essayer ?`,
        suggestions: ['oui', 'non', 'autres solutions'],
        delay: 1500
      }),
      exercise: (): ChatResponse => ({
        type: 'exercise',
        content: "Super, commençons l'exercice de respiration.",
        exercise: BREATHING_EXERCISE,
        delay: 800
      })
    },
    headache: {
      initial: (): ChatResponse => ({
        type: 'text',
        content: "Les maux de tête peuvent être intenses. Souhaitez-vous essayer des techniques de soulagement ?",
        suggestions: ['massage des tempes', 'respiration', 'repos'],
        delay: 1000
      })
    }
  },
  fatigue: {
    initial: (): ChatResponse => ({
      type: 'text',
      content: "La fatigue est naturelle pendant le cycle. Comment se manifeste-t-elle ?",
      suggestions: ['épuisement physique', 'fatigue mentale', 'les deux'],
      delay: 1000
    })
  }
};