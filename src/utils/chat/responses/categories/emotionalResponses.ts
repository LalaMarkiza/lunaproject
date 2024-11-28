import { ChatResponse } from '../../../../types/chat';

export const emotionalResponses = {
  anxiety: {
    initial: (intensity: number): ChatResponse => ({
      type: 'text',
      content: intensity > 2 
        ? "Je comprends que cette anxiété soit intense. Voulez-vous qu'on prenne un moment pour respirer ensemble ?"
        : "L'anxiété peut être inconfortable. Comment puis-je vous aider à vous sentir mieux ?",
      suggestions: ['respiration guidée', 'parler', 'conseils pratiques'],
      delay: 1500
    }),
    followUp: {
      physical: "Comment cette anxiété se manifeste-t-elle dans votre corps ?",
      triggers: "Y a-t-il des situations particulières qui intensifient cette anxiété ?",
      support: "Quelles stratégies vous ont déjà aidée par le passé ?"
    }
  },
  sadness: {
    initial: (intensity: number): ChatResponse => ({
      type: 'text',
      content: intensity > 2
        ? "Je suis là avec vous dans ce moment difficile. Voulez-vous me parler de ce qui vous attriste ?"
        : "La tristesse fait partie de notre cycle. Comment puis-je vous accompagner ?",
      suggestions: ['parler', 'méditation guidée', 'exercice doux'],
      delay: 1500
    }),
    followUp: {
      exploration: "Comment vivez-vous cette tristesse ?",
      support: "Qu'est-ce qui vous apporte habituellement du réconfort ?"
    }
  },
  irritability: {
    initial: (intensity: number): ChatResponse => ({
      type: 'text',
      content: intensity > 2
        ? "Cette irritabilité peut être intense pendant le cycle. Voulez-vous explorer des techniques d'apaisement ?"
        : "L'irritabilité est naturelle. Comment puis-je vous aider à vous sentir plus sereine ?",
      suggestions: ['exercice de respiration', 'comprendre mes émotions', 'conseils pratiques'],
      delay: 1500
    })
  }
};