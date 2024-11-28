import { ResourceCategory } from '../../types/resources';

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