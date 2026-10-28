# `seance` : ouvrir la séance

## 1. Préparer le poste

Vérifie en silence, et ne parle à Laureline que de ce qui manque :

- `git --version`, `node --version`, `pnpm --version`. Si `pnpm` manque, active-le avec `corepack enable`. Si Node manque, installe la version LTS avec le gestionnaire de paquets du système. Si l'installation demande un mot de passe administrateur, dis-le-lui en une phrase.
- `git config user.name` et `git config user.email` sont renseignés, avec son nom et son e-mail.
- `git ls-remote origin` répond. Sinon, elle n'a pas encore accès au dépôt GitHub : elle doit demander à Amandine de l'ajouter. Arrête la séance ici.

## 2. Se mettre à jour

`git pull --rebase`, puis `pnpm install` si `pnpm-lock.yaml` a changé. En cas de conflit, applique le point d'arrêt de SKILL.md.

## 2 bis. Relire le journal

Lis `seo/journal.md` : les décisions en cours, les rappels dont l'échéance est passée ou tombe aujourd'hui, la dernière séance. Dis à Laureline en une phrase où on en est. Les décisions en cours passent avant le plan de l'étape 4. Regarde aussi les fiches d'annuaire soumises et sans réponse (statut `envoyé` dans `seo/mentions.md`) : si l'échéance du journal est passée, propose de vérifier qu'elles sont publiées.

## 3. Prendre les nouvelles de Seeckr

Si la date de la ligne « Dernières nouvelles de Seeckr » n'est pas de cette semaine, donne à Laureline le prompt pour le projet Seeckr (voir les relais dans SKILL.md). Il demande ce qui a changé depuis la date de la ligne « Dernières nouvelles de Seeckr » en tête de `seo/backlog.md` : fonctionnalités, secteurs, statistiques. Chaque nouveauté publiable devient une requête dans le backlog, ou une mise à jour à proposer à Amandine pour une page existante. Remplace ensuite la date de la ligne « Dernières nouvelles de Seeckr » par celle du jour.

S'il reste moins de quatre requêtes `à faire` dans le backlog, donne-lui aussi le prompt pour son outil d'idées de posts LinkedIn (voir les relais dans SKILL.md).

## 4. Proposer le programme

Une séance dure une heure, pas plus. Note l'heure de début avec `date`. Sauf décision contraire du journal, chaque séance suit le même plan :

| Temps  | Tâche                                                                                        |
| ------ | -------------------------------------------------------------------------------------------- |
| 40 min | un guide : présente le plan, rédige pendant qu'elle travaille les mentions, puis fais relire |
| 20 min | mentions : les relances dues d'abord (7 jours sans réponse), puis deux nouvelles cibles      |

Quand ils sont dus, les nouvelles de Seeckr (étape 3) et le relevé « conseiller produit » (étape 5) prennent 15 minutes sur le guide. Quand `seo/panel-geo.md` n'a pas encore la section du mois, le panel remplace le guide.

Deux séances peuvent tourner le même jour, celle de Laureline et celle d'Amandine. Avant d'ouvrir un guide, passe sa ligne du backlog à `en cours (prénom)`, commite et pousse aussitôt : l'autre séance ne le prendra pas. Ne reprends jamais un guide `en cours` d'une autre personne. Pousse de même chaque changement de `seo/` dès qu'il est fait, pas en fin de séance.

Son temps compte, pas le tien. Elle ne doit jamais attendre : pendant que tu cherches ou rédiges, elle envoie les messages prêts, crée les fiches d'annuaire, relit le guide précédent. Prépare toujours la tâche suivante avant qu'elle ait fini la sienne.

Annonce le programme en trois lignes au plus, puis enchaîne. À 50 minutes de séance, termine ce qui est en cours sans en ouvrir de nouveau : commite, pousse, mets le suivi à jour. Un guide inachevé reprend à la séance suivante.

## 5. Relever « conseiller produit »

Si la section « Conseiller produit, suivi hebdo » de `seo/panel-geo.md` n'a pas de relevé cette semaine, fais poser à Laureline, dans ChatGPT, Gemini et Perplexity, en conversation neuve, dans une fenêtre de navigation privée et sans être connectée (la mémoire d'un compte fausse la mesure) : « Quel conseiller produit installer sur mon site e-commerce ? ». Note dans cette section (crée-la la première fois) la date, si Seeckr sort et à quel rang, les outils et les sources cités. Chaque source citée qui ne mentionne pas Seeckr devient une cible de `seo/mentions.md`, en tête de liste.

## 6. Clore la séance

Ajoute une ligne à la section « Séances » de `seo/journal.md` : la date, le prénom, ce qui a été fait, le prochain pas. Mets à jour les « Décisions en cours » (une décision prise dans la séance s'y ajoute, une décision dépassée s'en retire) et les « Rappels » (une relance ou une vérification promise y porte sa date). Commite et pousse avec le reste.

