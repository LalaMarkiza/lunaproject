import { Resource } from '../../types/resources';

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
  {
    id: 'anti-inflammatory-diet',
    title: 'Alimentation anti-inflammatoire',
    description: 'Réduire l\'inflammation naturellement par l\'alimentation',
    category: 'article',
    tags: ['nutrition', 'health'],
    imageUrl: 'https://images.unsplash.com/photo-1564207287369-657b77b12cc1?auto=format&fit=crop&q=80'
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
  }
];