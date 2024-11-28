import { ResourceContent } from '../../types/resources';

export const nutritionContent: Record<string, ResourceContent> = {
  'cycle-synced-nutrition': {
    content: `
      <h2>Nutrition cyclique : les bases</h2>

      <p>Adapter son alimentation selon les phases de son cycle permet de mieux soutenir son corps et son énergie.</p>

      <h3>Phase menstruelle</h3>
      <h4>Besoins spécifiques</h4>
      <ul>
        <li>Fer</li>
        <li>Vitamines B</li>
        <li>Magnésium</li>
        <li>Oméga-3</li>
      </ul>

      <h4>Aliments recommandés</h4>
      <ul>
        <li>Légumes verts feuillus</li>
        <li>Fruits rouges</li>
        <li>Légumineuses</li>
        <li>Graines de courge</li>
      </ul>

      <h3>Phase folliculaire</h3>
      <h4>Besoins spécifiques</h4>
      <ul>
        <li>Protéines légères</li>
        <li>Antioxydants</li>
        <li>Fibres</li>
      </ul>

      <h4>Aliments recommandés</h4>
      <ul>
        <li>Poisson blanc</li>
        <li>Quinoa</li>
        <li>Légumes crus</li>
        <li>Fruits frais</li>
      </ul>

      <h3>Phase ovulatoire</h3>
      <h4>Besoins spécifiques</h4>
      <ul>
        <li>Zinc</li>
        <li>Sélénium</li>
        <li>Vitamine E</li>
      </ul>

      <h4>Aliments recommandés</h4>
      <ul>
        <li>Noix et graines</li>
        <li>Avocat</li>
        <li>Légumes fermentés</li>
        <li>Fruits de mer</li>
      </ul>

      <h3>Phase lutéale</h3>
      <h4>Besoins spécifiques</h4>
      <ul>
        <li>Magnésium</li>
        <li>Vitamine B6</li>
        <li>Tryptophane</li>
      </ul>

      <h4>Aliments recommandés</h4>
      <ul>
        <li>Patates douces</li>
        <li>Bananes</li>
        <li>Chocolat noir</li>
        <li>Légumes-racines</li>
      </ul>
    `
  },
  'menstrual-recipes': {
    content: `
      <h2>Recettes pour la phase menstruelle</h2>

      <p>Des recettes nourrissantes et réconfortantes pour prendre soin de vous pendant vos règles.</p>

      <h3>Petit-déjeuner réconfortant</h3>
      <h4>Porridge aux fruits rouges et graines</h4>
      <ul>
        <li>Flocons d'avoine</li>
        <li>Lait végétal</li>
        <li>Fruits rouges</li>
        <li>Graines de courge et de chia</li>
        <li>Cannelle</li>
        <li>Miel (optionnel)</li>
      </ul>

      <h3>Déjeuner nourrissant</h3>
      <h4>Buddha bowl riche en fer</h4>
      <ul>
        <li>Quinoa</li>
        <li>Lentilles</li>
        <li>Épinards</li>
        <li>Betterave</li>
        <li>Avocat</li>
        <li>Sauce tahini</li>
      </ul>

      <h3>Dîner réconfortant</h3>
      <h4>Soupe de patate douce et lentilles corail</h4>
      <ul>
        <li>Patates douces</li>
        <li>Lentilles corail</li>
        <li>Oignon et ail</li>
        <li>Curcuma et gingembre</li>
        <li>Lait de coco</li>
      </ul>

      <h3>Collations apaisantes</h3>
      <ul>
        <li>Chocolat noir (70% minimum)</li>
        <li>Fruits secs et noix</li>
        <li>Smoothie aux fruits rouges</li>
        <li>Tisane de gingembre</li>
      </ul>
    `
  },
  'fertility-foods': {
    content: `
      <h2>Aliments pour la fertilité</h2>

      <p>Guide des nutriments essentiels pour soutenir votre fertilité naturelle.</p>

      <h3>Nutriments clés</h3>
      <ul>
        <li>Acide folique</li>
        <li>Fer</li>
        <li>Oméga-3</li>
        <li>Zinc</li>
        <li>Sélénium</li>
        <li>Vitamines D et B12</li>
      </ul>

      <h3>Superaliments pour la fertilité</h3>
      <ul>
        <li>Œufs biologiques</li>
        <li>Poissons gras sauvages</li>
        <li>Légumes verts foncés</li>
        <li>Noix et graines</li>
        <li>Légumineuses</li>
        <li>Fruits rouges</li>
      </ul>

      <h3>Aliments à limiter</h3>
      <ul>
        <li>Sucres raffinés</li>
        <li>Caféine</li>
        <li>Alcool</li>
        <li>Aliments ultra-transformés</li>
      </ul>
    `
  },
  'anti-inflammatory-diet': {
    content: `
      <h2>Alimentation anti-inflammatoire</h2>

      <p>Découvrez comment réduire l'inflammation naturellement par l'alimentation.</p>

      <h3>Principes de base</h3>
      <ul>
        <li>Privilégier les aliments complets</li>
        <li>Augmenter les antioxydants</li>
        <li>Équilibrer les omégas</li>
        <li>Réduire les sucres raffinés</li>
      </ul>

      <h3>Aliments anti-inflammatoires</h3>
      <ul>
        <li>Curcuma et gingembre</li>
        <li>Fruits rouges</li>
        <li>Légumes verts feuillus</li>
        <li>Poissons gras</li>
        <li>Noix et graines</li>
        <li>Huile d'olive extra vierge</li>
      </ul>

      <h3>Recettes anti-inflammatoires</h3>
      <h4>Golden Latte</h4>
      <ul>
        <li>Lait végétal</li>
        <li>Curcuma frais</li>
        <li>Gingembre</li>
        <li>Poivre noir</li>
        <li>Cannelle</li>
        <li>Miel (optionnel)</li>
      </ul>

      <h4>Salade arc-en-ciel</h4>
      <ul>
        <li>Épinards</li>
        <li>Myrtilles</li>
        <li>Avocat</li>
        <li>Noix</li>
        <li>Vinaigrette à l'huile d'olive</li>
      </ul>
    `
  }
};