import { ResourceContent } from '../../types/resources';

export const fertilityContent: Record<string, ResourceContent> = {
  'fertility-awareness': {
    content: `
      <h2>Introduction à la symptothermie</h2>

      <p>La symptothermie est une méthode naturelle d'observation de la fertilité qui permet de mieux comprendre son cycle et sa fertilité.</p>

      <h3>Principes de base</h3>
      <ul>
        <li>Observation quotidienne des signes de fertilité</li>
        <li>Prise de température basale</li>
        <li>Suivi de la glaire cervicale</li>
        <li>Notation des autres signes</li>
      </ul>

      <h3>La température basale</h3>
      <p>Comment prendre sa température :</p>
      <ul>
        <li>Même heure chaque matin</li>
        <li>Avant de se lever</li>
        <li>Après au moins 3h de sommeil</li>
        <li>Avec un thermomètre précis</li>
      </ul>

      <h3>La glaire cervicale</h3>
      <p>Les différents types de glaire :</p>
      <ul>
        <li>Sèche ou absente : période peu fertile</li>
        <li>Crémeuse : début de fertilité</li>
        <li>Filante comme du blanc d'œuf : période très fertile</li>
      </ul>

      <h3>Autres signes à observer</h3>
      <ul>
        <li>Position du col de l'utérus</li>
        <li>Sensations aux seins</li>
        <li>Douleurs ovulatoires</li>
        <li>Changements d'humeur</li>
      </ul>

      <h3>Avantages de la méthode</h3>
      <ul>
        <li>Meilleure connaissance de son corps</li>
        <li>Aucun effet secondaire</li>
        <li>Utile pour concevoir ou éviter une grossesse</li>
        <li>Aide au diagnostic de déséquilibres hormonaux</li>
      </ul>
    `
  }
};