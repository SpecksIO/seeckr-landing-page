# `guide [requête]` : de la requête à la page en ligne

Un guide répond à une seule question qu'un e-commerçant tape dans Google ou pose à un assistant IA. Il gagne sa place s'il y répond mieux que les pages déjà classées.

## 1. Choisir la requête

Prends la requête passée en argument. Sinon, prends la première requête `à faire` de `seo/backlog.md` et annonce-la à Laureline.

Vérifie avec `grep -ril` dans `src/content/` qu'aucune page existante ne répond déjà à la même question. Deux pages du site sur la même requête se font concurrence. Si une page y répond déjà, propose d'enrichir celle-ci plutôt que d'en créer une nouvelle, et arrête-toi.

## 2. Étudier ce qui existe

- Lance une recherche web sur la requête, puis lis en entier les cinq premiers résultats pertinents. Note ce qu'ils couvrent tous, ce qu'aucun ne couvre, et les formulations voisines de la question.
- Rassemble les faits dont le guide aura besoin, chacun avec sa source lue.

## 3. Faire valider le plan

Présente à Laureline, en dix lignes au plus :

- le titre, formulé comme la question ;
- la réponse en deux phrases, telle qu'elle ouvrira la page ;
- les intertitres ;
- l'angle que les pages concurrentes n'ont pas ;
- où Seeckr intervient, honnêtement (un guide qui ne parle que de Seeckr n'est pas cité) ;
- les liens internes : la verticale concernée, `/cas-clients/algimouss` si un chiffre sert, `/mon-seeckr` en fin de page.

Attends son accord avant d'écrire.

## 4. Rédiger

Applique [../references/ecriture.md](../references/ecriture.md).

## 5. Contrôler

- Chaque affirmation sur Seeckr se retrouve dans `src/content/fr/`. Sinon, point d'arrêt (SKILL.md).
- Les critères de fin de SKILL.md sont remplis : sources, URLs, tirets longs.

## 6. Publier

Si `src/content/fr/guides/` n'existe pas, la rubrique guides n'est pas encore en ligne. Enregistre le texte dans `seo/brouillons/<slug>.md`, commite-le, et fais prévenir Amandine. Arrête-toi ici.

Sinon :

1. Crée le fichier du guide en calquant la forme d'un guide existant du même dossier.
2. Lance `pnpm lint`, `pnpm test:run` et `pnpm build`. Corrige ce qui vient du guide. Pour le reste, point d'arrêt.
3. Commite en imitant le format de `git log --oneline -10`, puis `git push`.
4. Une fois le site redéployé, ouvre l'URL en ligne et vérifie que la page s'affiche. Si elle est toujours introuvable au bout de 15 minutes, fais prévenir Amandine.
5. Si Laureline a accès à Google Search Console, fais-lui demander l'indexation de l'URL (« Inspection de l'URL », puis « Demander l'indexation »).

## 7. Mettre à jour le suivi

Dans `seo/backlog.md`, passe la ligne à `publié` avec la date et l'URL. Ajoute au backlog les requêtes voisines repérées à l'étape 2.
