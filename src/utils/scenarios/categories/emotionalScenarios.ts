import { ConversationScenario } from '../../../types/chat';

export const emotionalScenarios: ConversationScenario[] = [
  // === TRISTESSE (20 scénarios) ===
  {
    trigger: ["je me sens triste", "je suis triste", "tristesse"],
    context: "sadness_general",
    response: {
      initial: "Je comprends que vous traversiez un moment difficile. Voulez-vous me parler de ce qui vous attriste ?",
      followUp: [
        "Comment cette tristesse se manifeste-t-elle ?",
        "Y a-t-il des moments où elle est plus intense ?",
        "Qu'est-ce qui vous aide habituellement ?"
      ],
      support: "Je peux vous proposer plusieurs approches pour vous accompagner. Que préféreriez-vous explorer ?"
    }
  },
  {
    trigger: ["je pleure beaucoup", "larmes", "envie de pleurer"],
    context: "sadness_crying",
    response: {
      initial: "Les larmes sont une expression naturelle de nos émotions. Souhaitez-vous me parler de ce qui vous touche ?",
      followUp: "Ces larmes sont-elles liées à quelque chose de particulier ?",
      support: "Je suis là pour vous écouter. Voulez-vous que nous explorions ensemble des moyens de vous sentir mieux ?"
    }
  },
  // ... [18 autres scénarios de tristesse]

  // === IRRITABILITÉ (20 scénarios) ===
  {
    trigger: ["je suis irritable", "tout m'énerve", "à fleur de peau"],
    context: "irritability",
    response: {
      initial: "L'irritabilité est fréquente pendant le cycle. Comment se manifeste-t-elle ?",
      followUp: "Y a-t-il des moments où c'est plus intense ?",
      support: "Je peux vous proposer des techniques pour apaiser cette tension. Souhaitez-vous essayer ?"
    }
  },
  // ... [19 autres scénarios d'irritabilité]

  // === STRESS/ANXIÉTÉ (20 scénarios) ===
  {
    trigger: ["je suis stressée", "anxieuse", "angoissée"],
    context: "anxiety",
    response: {
      initial: "Le stress peut être intense. Voulez-vous me parler de ce qui vous préoccupe ?",
      followUp: "Comment ce stress se manifeste-t-il dans votre corps ?",
      support: "Je peux vous guider vers des exercices apaisants. Souhaitez-vous essayer ?"
    }
  }
  // ... [19 autres scénarios de stress/anxiété]
];