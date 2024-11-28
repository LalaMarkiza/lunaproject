import { ConversationScenario } from '../../../types/chat';

export const mainCategories: Record<string, ConversationScenario> = {
  physical: {
    trigger: ['douleurs physiques', 'mal', 'douleur'],
    category: 'physical',
    subCategories: [
      'ventre',
      'tête',
      'dos',
      'seins',
      'muscles'
    ],
    responses: {
      initial: {
        content: "Où ressentez-vous ces douleurs ?",
        suggestions: [
          'j\'ai mal au ventre',
          'j\'ai mal à la tête',
          'j\'ai mal au dos',
          'j\'ai des douleurs aux seins',
          'j\'ai des courbatures'
        ]
      }
    }
  },
  emotional: {
    trigger: ['moral', 'chaussettes', 'émotions'],
    category: 'emotional',
    subCategories: [
      'tristesse',
      'anxiété',
      'irritabilité',
      'solitude',
      'dépassement'
    ],
    responses: {
      initial: {
        content: "Je comprends que ce moment soit difficile. Comment vous sentez-vous exactement ?",
        suggestions: [
          'je me sens triste',
          'je me sens anxieuse',
          'je me sens irritable',
          'je me sens seule',
          'je me sens dépassée'
        ]
      }
    }
  },
  stress: {
    trigger: ['stressée', 'stress', 'tension'],
    category: 'stress',
    subCategories: [
      'professionnel',
      'personnel',
      'général',
      'physique',
      'sommeil'
    ],
    responses: {
      initial: {
        content: "Le stress peut être intense. Quelle forme de stress ressentez-vous principalement ?",
        suggestions: [
          'stress professionnel',
          'stress personnel',
          'stress général',
          'tensions physiques',
          'problèmes de sommeil'
        ]
      }
    }
  },
  cycle: {
    trigger: ['cycle', 'règles', 'menstruation'],
    category: 'cycle',
    subCategories: [
      'irrégularités',
      'ovulation',
      'phases',
      'suivi',
      'symptômes'
    ],
    responses: {
      initial: {
        content: "Je suis là pour répondre à vos questions sur votre cycle. Que souhaitez-vous savoir ?",
        suggestions: [
          'cycle irrégulier',
          'questions sur l\'ovulation',
          'comprendre mes phases',
          'suivre mon cycle',
          'gérer mes symptômes'
        ]
      }
    }
  },
  selfCare: {
    trigger: ['prendre soin', 'bien-être', 'routine'],
    category: 'selfCare',
    subCategories: [
      'routine',
      'exercice',
      'alimentation',
      'sommeil',
      'relaxation'
    ],
    responses: {
      initial: {
        content: "Prendre soin de soi est essentiel. Par quoi souhaitez-vous commencer ?",
        suggestions: [
          'créer une routine',
          'exercices adaptés',
          'alimentation équilibrée',
          'améliorer mon sommeil',
          'techniques de relaxation'
        ]
      }
    }
  }
};