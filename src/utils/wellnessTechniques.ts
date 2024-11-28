import { WellnessTechnique } from '../types/chat';

export const wellnessTechniques: Record<string, WellnessTechnique[]> = {
  breathing: [
    {
      id: 'coherent_breathing',
      name: 'Respiration cohérente',
      type: 'breathing',
      description: 'Une technique de respiration qui équilibre le système nerveux.',
      benefits: [
        'Réduit le stress immédiatement',
        'Apaise les douleurs menstruelles',
        'Améliore la concentration'
      ],
      instructions: [
        'Installez-vous confortablement',
        'Inspirez doucement par le nez pendant 4 secondes',
        'Expirez lentement par la bouche pendant 6 secondes',
        'Répétez ce cycle pendant 5 minutes'
      ],
      duration: 300
    },
    {
      id: 'square_breathing',
      name: 'Respiration carrée',
      type: 'breathing',
      description: 'Une technique apaisante qui suit un schéma carré.',
      benefits: [
        'Calme l\'anxiété',
        'Réduit les tensions',
        'Favorise la concentration'
      ],
      instructions: [
        'Inspirez pendant 4 secondes',
        'Retenez pendant 4 secondes',
        'Expirez pendant 4 secondes',
        'Retenez pendant 4 secondes'
      ],
      duration: 240
    }
  ],
  relaxation: [
    {
      id: 'body_scan',
      name: 'Scan corporel',
      type: 'relaxation',
      description: 'Une exploration douce et attentive de votre corps.',
      benefits: [
        'Relâche les tensions musculaires',
        'Améliore la conscience corporelle',
        'Favorise la détente profonde'
      ],
      instructions: [
        'Allongez-vous confortablement',
        'Fermez les yeux',
        'Portez votre attention sur vos orteils',
        'Remontez progressivement dans votre corps'
      ],
      duration: 600
    }
  ],
  physical: [
    {
      id: 'gentle_stretching',
      name: 'Étirements doux',
      type: 'physical',
      description: 'Des mouvements doux pour soulager les tensions.',
      benefits: [
        'Soulage les crampes menstruelles',
        'Améliore la circulation',
        'Détend les muscles'
      ],
      instructions: [
        'Position du chat',
        'Torsion douce allongée',
        'Posture de l\'enfant',
        'Papillon'
      ],
      duration: 300
    }
  ]
};