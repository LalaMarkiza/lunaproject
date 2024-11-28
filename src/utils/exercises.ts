import { Exercise } from '../types/chat';

export const BREATHING_EXERCISE: Exercise = {
  id: 'basic-breathing',
  type: 'breathing',
  steps: [
    {
      phase: 'inhale',
      duration: 4,
      instruction: 'Inspirez lentement par le nez...'
    },
    {
      phase: 'hold',
      duration: 4,
      instruction: 'Retenez votre souffle...'
    },
    {
      phase: 'exhale',
      duration: 6,
      instruction: 'Expirez doucement par la bouche...'
    }
  ],
  totalDuration: 14
};

export const RELAXATION_EXERCISE: Exercise = {
  id: 'relaxation',
  type: 'relaxation',
  steps: [
    {
      phase: 'inhale',
      duration: 5,
      instruction: 'Inspirez en vous concentrant sur votre ventre...'
    },
    {
      phase: 'hold',
      duration: 2,
      instruction: 'Gardez cette sensation de calme...'
    },
    {
      phase: 'exhale',
      duration: 7,
      instruction: 'Expirez lentement en relâchant toute tension...'
    }
  ],
  totalDuration: 14
};

export const ANTI_STRESS_EXERCISE: Exercise = {
  id: 'anti-stress',
  type: 'breathing',
  steps: [
    {
      phase: 'inhale',
      duration: 4,
      instruction: 'Inspirez calmement...'
    },
    {
      phase: 'hold',
      duration: 7,
      instruction: 'Retenez en restant détendue...'
    },
    {
      phase: 'exhale',
      duration: 8,
      instruction: 'Expirez longuement...'
    }
  ],
  totalDuration: 19
};