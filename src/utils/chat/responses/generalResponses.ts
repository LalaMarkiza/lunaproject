import { ChatResponse } from '../../../types/chat';

export const generalResponses = {
  default: {
    type: 'text',
    content: "Je suis là pour vous écouter. Comment puis-je vous aider ?",
    suggestions: [
      'j\'ai des douleurs physiques',
      'j\'ai le moral dans les chaussettes',
      'je me sens stressée',
      'j\'ai des questions sur mon cycle',
      'je veux prendre soin de moi'
    ],
    delay: 1000
  } as ChatResponse,

  emotional: {
    type: 'text',
    content: "Je comprends que ce moment soit difficile. Comment puis-je vous accompagner ?",
    suggestions: [
      'parler',
      'exercice de respiration',
      'conseils pratiques'
    ],
    delay: 1500
  } as ChatResponse,

  physical: {
    type: 'text',
    content: "Je comprends votre inconfort. Pouvez-vous me décrire plus précisément ce que vous ressentez ?",
    suggestions: [
      'localiser la douleur',
      'décrire l\'intensité',
      'depuis quand'
    ],
    delay: 1000
  } as ChatResponse,

  followUp: {
    type: 'text',
    content: "Comment vous sentez-vous maintenant ?",
    suggestions: [
      'mieux',
      'pareil',
      'moins bien'
    ],
    delay: 1000
  } as ChatResponse
};