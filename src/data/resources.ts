import { Resource, ResourceCategory } from '../types/resources';

export const categories: ResourceCategory[] = [
  {
    id: 'cycle',
    name: 'Comprendre son cycle',
    description: 'Articles et guides sur les différentes phases du cycle menstruel',
    icon: 'calendar'
  },
  {
    id: 'wellness',
    name: 'Bien-être',
    description: 'Exercices et méditations pour prendre soin de soi',
    icon: 'heart'
  },
  {
    id: 'nutrition',
    name: 'Nutrition',
    description: 'Conseils et recettes adaptés à chaque phase',
    icon: 'apple'
  },
  {
    id: 'movement',
    name: 'Mouvement',
    description: 'Yoga et exercices adaptés au cycle',
    icon: 'activity'
  },
  {
    id: 'emotional',
    name: 'Équilibre émotionnel',
    description: 'Gérer ses émotions au fil du cycle',
    icon: 'smile'
  },
  {
    id: 'sleep',
    name: 'Sommeil',
    description: 'Améliorer son sommeil selon sa phase',
    icon: 'moon'
  }
];

export const resources: Resource[] = [
  // === COMPRENDRE SON CYCLE ===
  {
    id: 'cycle-basics',
    title: 'Les fondamentaux du cycle menstruel',
    description: 'Guide complet pour comprendre les 4 phases de votre cycle',
    category: 'article',
    tags: ['cycle', 'education'],
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80'
  },
  {
    id: 'hormones-explained',
    title: 'Les hormones de votre cycle expliquées simplement',
    description: 'Comprendre le rôle de chaque hormone et leur impact sur votre bien-être',
    category: 'article',
    tags: ['cycle', 'hormones'],
    imageUrl: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80'
  },
  {
    id: 'fertility-awareness',
    title: 'Introduction à la symptothermie',
    description: 'Apprendre à reconnaître ses signes de fertilité naturellement',
    category: 'video',
    tags: ['cycle', 'fertility'],
    duration: 1200,
    imageUrl: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80'
  },

  // === BIEN-ÊTRE ===
  {
    id: 'self-care-rituals',
    title: 'Rituels d\'auto-soin cycliques',
    description: 'Créer des rituels adaptés à chaque phase de votre cycle',
    category: 'article',
    tags: ['wellness', 'selfcare'],
    imageUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80'
  },
  {
    id: 'womb-meditation',
    title: 'Méditation connexion à l\'utérus',
    description: 'Une pratique douce pour se reconnecter à sa féminité',
    category: 'meditation',
    tags: ['wellness', 'meditation'],
    duration: 900,
    imageUrl: 'https://images.unsplash.com/photo-1515023115689-589c33041d3c?auto=format&fit=crop&q=80'
  },
  {
    id: 'cycle-massage',
    title: 'Auto-massage harmonisant',
    description: 'Techniques de massage adaptées à chaque phase',
    category: 'video',
    tags: ['wellness', 'massage'],
    duration: 1200,
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80'
  },

  // === NUTRITION ===
  {
    id: 'cycle-synced-nutrition',
    title: 'Nutrition cyclique : les bases',
    description: 'Adapter son alimentation selon sa phase du cycle',
    category: 'article',
    tags: ['nutrition', 'cycle'],
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80'
  },
  {
    id: 'menstrual-recipes',
    title: 'Recettes phase menstruelle',
    description: 'Plats nourrissants et réconfortants pour vos règles',
    category: 'article',
    tags: ['nutrition', 'recipes'],
    imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80'
  },
  {
    id: 'fertility-foods',
    title: 'Aliments pour la fertilité',
    description: 'Guide des nutriments essentiels pour un cycle équilibré',
    category: 'video',
    tags: ['nutrition', 'fertility'],
    duration: 900,
    imageUrl: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80'
  },

  // === MOUVEMENT ===
  {
    id: 'menstrual-yoga',
    title: 'Yoga pour les règles',
    description: 'Séquence douce pour soulager les douleurs menstruelles',
    category: 'exercise',
    tags: ['movement', 'yoga'],
    duration: 1800,
    imageUrl: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&q=80'
  },
  {
    id: 'ovulation-dance',
    title: 'Danse libre ovulatoire',
    description: 'Célébrez votre énergie créative par le mouvement',
    category: 'exercise',
    tags: ['movement', 'dance'],
    duration: 1500,
    imageUrl: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&q=80'
  },
  {
    id: 'premenstrual-stretching',
    title: 'Étirements prémenstruels',
    description: 'Routine d\'étirements apaisants avant les règles',
    category: 'exercise',
    tags: ['movement', 'stretching'],
    duration: 1200,
    imageUrl: 'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?auto=format&fit=crop&q=80'
  },

  // === ÉQUILIBRE ÉMOTIONNEL ===
  {
    id: 'emotional-awareness',
    title: 'Journal des émotions cycliques',
    description: 'Apprendre à accueillir ses émotions au fil du cycle',
    category: 'article',
    tags: ['emotional', 'journaling'],
    imageUrl: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80'
  },
  {
    id: 'pms-meditation',
    title: 'Méditation anti-SPM',
    description: 'Pratique apaisante pour la phase prémenstruelle',
    category: 'meditation',
    tags: ['emotional', 'meditation'],
    duration: 900,
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80'
  },
  {
    id: 'cycle-emotions',
    title: 'Comprendre ses émotions cycliques',
    description: 'Guide pour naviguer les changements émotionnels',
    category: 'video',
    tags: ['emotional', 'education'],
    duration: 1200,
    imageUrl: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80'
  },

  // === SOMMEIL ===
  {
    id: 'cycle-sleep',
    title: 'Sommeil et cycle menstruel',
    description: 'Optimiser son sommeil selon sa phase',
    category: 'article',
    tags: ['sleep', 'wellness'],
    imageUrl: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80'
  },
  {
    id: 'bedtime-meditation',
    title: 'Méditation pour le sommeil',
    description: 'Pratique relaxante pour un sommeil réparateur',
    category: 'meditation',
    tags: ['sleep', 'meditation'],
    duration: 1200,
    imageUrl: 'https://images.unsplash.com/photo-1511295742362-92c96b5adb36?auto=format&fit=crop&q=80'
  },
  {
    id: 'sleep-routine',
    title: 'Routine du soir cyclique',
    description: 'Créer une routine du soir adaptée à votre phase',
    category: 'video',
    tags: ['sleep', 'routine'],
    duration: 900,
    imageUrl: 'https://images.unsplash.com/photo-1511295742362-92c96b5adb36?auto=format&fit=crop&q=80'
  }
];