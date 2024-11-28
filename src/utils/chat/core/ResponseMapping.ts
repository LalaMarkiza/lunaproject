import { ChatResponse } from '../../../types/chat';

export const responseMapping: Record<string, (details?: any) => ChatResponse> = {
  stress_type: () => ({
    type: 'text',
    content: "Le stress peut être intense. Quelle forme de stress ressentez-vous principalement ?",
    suggestions: [
      'stress professionnel',
      'stress personnel',
      'stress général',
      'tensions physiques',
      'problèmes de sommeil'
    ],
    delay: 1000
  }),

  stress_intensity: () => ({
    type: 'text',
    content: "Comment qualifieriez-vous l'intensité de ce stress ?",
    suggestions: [
      'léger - je peux le gérer',
      'modéré - c\'est inconfortable',
      'intense - c\'est difficile',
      'très intense - j\'ai besoin d\'aide'
    ],
    delay: 1000
  }),

  stress_duration: () => ({
    type: 'text',
    content: "Depuis combien de temps ressentez-vous ce niveau de stress ?",
    suggestions: [
      'quelques jours',
      'quelques semaines',
      'plusieurs mois',
      'c\'est variable'
    ],
    delay: 1000
  }),

  stress_impact: () => ({
    type: 'text',
    content: "Comment ce stress impacte-t-il votre quotidien ?",
    suggestions: [
      'sommeil perturbé',
      'tensions physiques',
      'difficultés de concentration',
      'irritabilité',
      'fatigue'
    ],
    delay: 1000
  }),

  stress_solutions: () => ({
    type: 'text',
    content: "Je comprends ce que vous traversez. Quelle approche souhaitez-vous explorer ?",
    suggestions: [
      'exercice de respiration',
      'méditation guidée',
      'conseils pratiques',
      'parler plus en détail'
    ],
    delay: 1500
  })
};