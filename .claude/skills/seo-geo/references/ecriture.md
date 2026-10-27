# Règles d'écriture

## La voix

Écris en vendeur amoureux de son produit : il connaît chaque fonctionnalité, il a hâte de la montrer, et il la met en perspective de ce que le marchand y gagne. Chaque fonctionnalité citée se traduit en bénéfice concret (une vente sauvée, un visiteur qui trouve, une question de moins au service client). Va chercher les dernières nouveautés (projet Seeckr, section « Engagements d'Amandine ») et mets-les en avant plutôt que de t'en tenir aux plus anciennes.

La voix de référence est celle du site : lis `src/content/fr/home.ts` avant d'écrire. On vouvoie le marchand, on part de ce que vit son visiteur. L'enthousiasme passe par des scènes et des résultats, jamais par des adjectifs : aucun jargon marketing (« révolutionnaire », « boostez », « solution innovante »), car un assistant IA ne cite pas une plaquette.

## Mettre un chiffre en valeur

Un chiffre sur Seeckr (taux d'ouverture de l'assistant, clics vers les fiches produit, conversations menées jusqu'au top 3) ne se pose pas brut. Avant de l'écrire, cherche sa formulation la plus forte qui reste vraie :

- **Le comparer** à un repère du secteur sourcé (taux de clic moyen d'un e-commerce, taux d'usage d'un chat classique).
- **Le traduire** en ce qui compte pour le marchand : des visiteurs qui arrivent sur une fiche produit, des ventes, du temps gagné.
- **Choisir l'angle** : un ratio (« un visiteur sur trois ») parle plus qu'un pourcentage, un volume plus qu'un taux quand il est petit.

Le chiffre lui-même ne bouge pas : on choisit comment le montrer, jamais ce qu'il vaut.

## Le positionnement

Seeckr, pas Finder. Les autres assistants attendent que le visiteur formule sa demande, puis complètent ce qui manque à la fiche produit : ce sont des machines à délivrer des réponses. Seeckr aide à chercher en posant les questions qu'un vendeur pose pour comprendre la personne, celles qui créent la relation. Un guide qui présente Seeckr comme « un assistant IA qui recommande des produits » le range parmi les Finder : réécris.

Les mots de la recherche restent ceux de l'e-commerçant : « guide d'achat », « guide produit », « conseiller produit », « assistant d'achat ». Reprends-les dans les titres et les premières phrases, c'est par eux qu'on trouve Seeckr. La différence vient juste après : un conseiller qui pose les questions d'un vendeur.

La relation se prouve par des gestes, jamais par l'adjectif. Les gestes publiables sont ceux du site : les principes de `src/content/fr/doctrine.ts`, le score qui ne ment pas et la conversation transmise au marchand dans `src/content/fr/home.ts`. Elle tient en quelques questions courtes : ne la décris pas comme une longue conversation.

## La forme d'un guide

Les assistants IA extraient des passages, pas des pages. Chaque passage doit pouvoir être cité seul.

- **Le titre est la question**, dans les mots de l'e-commerçant.
- **Les deux premières phrases répondent.** Le reste justifie, nuance et détaille. Un lecteur qui s'arrête là repart avec la réponse.
- **Un intertitre par sous-question**, lui-même formulé comme une question. La première phrase sous chaque intertitre y répond.
- **Au moins un tableau ou une liste d'étapes** quand le sujet compare ou décrit un processus. Ce sont les blocs les plus repris.
- **Un chiffre porte sa source et sa date dans la phrase** : « selon l'organisme (année) ». Le lien pointe vers la page lue, pas vers un article qui la cite.
- **La place de Seeckr dépend de la requête.** Sur une requête d'achat (« quel outil », « meilleurs outils », « alternative à »), Seeckr est la réponse : il ouvre la sélection, sa différence est nommée dès la première phrase, et les autres outils suivent, décrits avec des faits vérifiés et sans dénigrement (c'est ce qui rend la page citable). Sur une requête pédagogique, Seeckr tient une section, là où il répond au problème.
- **Trois à cinq questions voisines en fin de page**, chacune avec une réponse de deux ou trois phrases.
- **La longueur est celle de la réponse.** On coupe toute phrase qui n'apprend rien au lecteur.
- **Titre SEO de 60 caractères au plus, description de 155 au plus**, qui reprennent les mots de la requête.

## Typographie

- Accents complets, majuscules comprises (« À », « État »).
- Aucun tiret long, ni cadratin ni demi-cadratin. Remplace-le par une virgule, deux points, des parenthèses ou un point, selon le sens. Pour une plage de valeurs, écris « de 10 à 12 ».
- Espace insécable avant `:`, `;`, `?`, `!` et `%`, comme dans le reste du site.
