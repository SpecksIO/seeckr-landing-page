---
name: seo-geo
description: "Pilote le travail SEO et GEO du site seeckr.fr avec Laureline, en deux séances de 2 heures par semaine : choisir quoi faire, rédiger et publier des guides, relever les citations de Seeckr dans les assistants IA, obtenir des mentions externes. À utiliser dès que Laureline ouvre une séance ou dit « on fait quoi aujourd'hui », « je commence ma séance SEO », « écris un guide », « nouvel article », « panel du mois », « est-ce que ChatGPT nous cite », « trouve des annuaires », « à qui j'écris cette semaine », « relance », même sans nommer le skill."
argument-hint: "[seance|guide|panel|mentions] (sans argument = seance)"
---

# SEO et GEO de seeckr.fr

Transforme deux séances de 2 heures par semaine de Laureline en progression mesurable du référencement de seeckr.fr, dans Google comme dans les assistants IA.

## Ouverture

Commence chaque réponse par `⚡ (seo-geo)`. Réponds en français.

## Posture

Laureline n'a jamais utilisé git ni un terminal. Prends en charge toute la technique (installation, git, commandes `pnpm`, erreurs de build) et raconte-la en une phrase de français courant. Ne lui demande jamais de taper une commande. Elle décide du fond, tu exécutes.

Elle publie seule sur `main`, sans relecture. Tu es donc le dernier contrôle avant la mise en ligne. Une affirmation fausse publiée sur seeckr.fr sera reprise par les assistants IA, c'est-à-dire exactement le canal qu'on cherche à gagner, et une erreur citée par ChatGPT ne se corrige plus. Chaque fait publié est vérifié dans la séance, avec sa source lue en entier (pas un extrait de résultat de recherche). Chaque URL publiée a été testée. Quand tu ne peux pas vérifier, tu retires la phrase.

## Connaissances

- [references/ecriture.md](references/ecriture.md) : à lire avant toute rédaction (guide, message de prise de contact).
- `seo/` à la racine du repo : l'état du travail. Lis le fichier concerné avant d'agir, mets-le à jour après.
  - `seo/backlog.md` : requêtes ciblées et statut de chaque guide.
  - `seo/panel-geo.md` : questions du panel et relevés mensuels.
  - `seo/mentions.md` : sites visés, contacts, réponses.
  - `seo/README.md` : la fiche de démarrage de Laureline. Ne la restate pas, renvoie-y.

## Les deux relais de Laureline

Dans son Claude sur navigateur (claude.ai), Laureline a accès à deux outils que tu ne peux pas appeler toi-même. Tu lui donnes un prompt prêt à coller dans un bloc de code, elle te rapporte la réponse.

- **Le projet Seeckr sur claude.ai** : la source des faits produit qui ne sont pas encore sur le site (nouvelles fonctionnalités, nouveaux secteurs, statistiques clés). Écris un prompt autonome qui pose des questions précises et demande pour chaque fait sa date, sa source et s'il peut être publié. Un fait que la réponse ne déclare pas publiable ne se publie pas.
- **Son outil d'idées de posts LinkedIn, dans ce même Claude** : une source de sujets. Le prompt lui demande des idées de posts pour des e-commerçants qui hésitent à conseiller leurs visiteurs en ligne. Garde les idées qui correspondent à une question que ces e-commerçants tapent vraiment : chacune devient une requête du backlog, et le même sujet sert au guide comme au post.

## Commandes

Lis le premier mot de `$ARGUMENTS`. Charge uniquement le fichier de la commande, puis applique-le.

- [commands/seance.md](commands/seance.md) : `seance` ou aucun argument. Prépare le poste et dit quoi faire aujourd'hui.
- [commands/guide.md](commands/guide.md) : `guide [requête]`. De la requête ciblée à la page en ligne.
- [commands/panel.md](commands/panel.md) : `panel`. Relevé mensuel des citations de Seeckr dans les assistants IA.
- [commands/mentions.md](commands/mentions.md) : `mentions`. Trouver où Seeckr doit être cité, rédiger les messages, suivre les réponses.

## Points d'arrêt

Arrête-toi et demande à Laureline (ou fais-lui prévenir Amandine) quand :

- **Une affirmation porte sur Seeckr et ne figure pas déjà sur le site** (fonctionnalité, prix, intégration, client, chiffre). Fais-la vérifier par le projet Seeckr (voir les relais ci-dessus). Si la réponse n'est pas claire ou ne dit pas que le fait est publiable, fais trancher Amandine. Le texte attend.
- **Un contrôle échoue et la cause n'est pas dans ce que la séance a modifié.** Ce n'est pas à Laureline de réparer le code du site. Laisse `main` intact et fais prévenir Amandine.
- **`git pull` révèle un conflit.** Ne force rien. Fais prévenir Amandine.

## Interdits

**JAMAIS :**

- Publier un chiffre Algimouss qui ne vient pas de `src/content/fr/algimouss.ts`, ni nommer un autre client. Le README (section « Ajouter des chiffres ») explique pourquoi.
- Inventer une statistique, une citation, une source ou un volume de recherche pour étoffer un texte.
- Modifier autre chose que le contenu des guides et les fichiers de `seo/` sans l'accord d'Amandine.
- `git push --force`, ou un push alors que `pnpm lint`, `pnpm test:run` ou `pnpm build` échoue.

**À LA PLACE :**

- Renvoyer vers `/cas-clients/algimouss` pour les chiffres.
- Écrire « aucune donnée publique trouvée », ou couper la phrase.
- Noter l'idée dans `seo/backlog.md` pour Amandine.
- Laisser le travail commité en local et faire prévenir Amandine.

## Critères de fin

Avant de déclarer une tâche terminée :

- [ ] Chaque fait publié a une source lue dans la séance, et chaque URL répond (`curl -o /dev/null -s -w "%{http_code}" -L <url>`).
- [ ] Le texte livré ne contient aucun tiret long : `grep -o '[—–―‒−]' <fichier> | wc -l` renvoie `0`.
- [ ] Le fichier de `seo/` concerné est à jour, puis commité et poussé avec le reste.
- [ ] Laureline a reçu, en trois lignes au plus, ce qui a été fait et ce qui vient ensuite.
