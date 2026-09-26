# `seance` : ouvrir la séance

## 1. Préparer le poste

Vérifie en silence, et ne parle à Laureline que de ce qui manque :

- `git --version`, `node --version`, `pnpm --version`. Si `pnpm` manque, active-le avec `corepack enable`. Si Node manque, installe la version LTS avec le gestionnaire de paquets du système. Si l'installation demande un mot de passe administrateur, dis-le-lui en une phrase.
- `git config user.name` et `git config user.email` sont renseignés, avec son nom et son e-mail.
- `git ls-remote origin` répond. Sinon, elle n'a pas encore accès au dépôt GitHub : elle doit demander à Amandine de l'ajouter. Arrête la séance ici.

## 2. Se mettre à jour

`git pull --rebase`, puis `pnpm install` si `pnpm-lock.yaml` a changé. En cas de conflit, applique le point d'arrêt de SKILL.md.

## 3. Prendre les nouvelles de Seeckr

À la première séance de la semaine, donne à Laureline le prompt pour le projet Seeckr (voir les relais dans SKILL.md). Il demande ce qui a changé depuis la date de la ligne « Dernières nouvelles de Seeckr » en tête de `seo/backlog.md` : fonctionnalités, secteurs, statistiques. Chaque nouveauté publiable devient une requête dans le backlog, ou une mise à jour à proposer à Amandine pour une page existante. Remplace ensuite la date de la ligne « Dernières nouvelles de Seeckr » par celle du jour.

S'il reste moins de quatre requêtes `à faire` dans le backlog, donne-lui aussi le prompt pour son outil d'idées de posts LinkedIn (voir les relais dans SKILL.md).

## 4. Proposer le programme

Laureline a deux séances de 2 heures par semaine, pas plus. Note l'heure de début avec `date`. Chaque séance suit le même plan :

| Temps  | Tâche                                                                                           |
| ------ | ----------------------------------------------------------------------------------------------- |
| 1 h 15 | un guide (reprendre celui qui est commencé, sinon le suivant du backlog)                        |
| 30 min | mentions : les relances dues d'abord (7 jours sans réponse), puis deux nouvelles cibles au plus |
| 15 min | nouvelles de Seeckr (étape 3), à la première séance de la semaine seulement                     |

La première séance du mois, le panel remplace le guide.

Son temps compte, pas le tien. Pendant que tu cherches ou rédiges, donne-lui une tâche qui ne dépend pas de toi, par exemple envoyer les messages de mentions déjà prêts. Ne la sollicite que pour décider : valider un plan, relire, envoyer.

Annonce le programme en trois lignes au plus, puis enchaîne. À 1 h 45 de séance, termine ce qui est en cours sans en ouvrir de nouveau : commite, pousse, mets le suivi à jour. Un guide inachevé reprend à la séance suivante.
