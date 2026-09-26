# `seance` : ouvrir la journée

## 1. Préparer le poste

Vérifie en silence, et ne parle à Laureline que de ce qui manque :

- `git --version`, `node --version`, `pnpm --version`. Si `pnpm` manque, active-le avec `corepack enable`. Si Node manque, installe la version LTS avec le gestionnaire de paquets du système. Si l'installation demande un mot de passe administrateur, dis-le-lui en une phrase.
- `git config user.name` et `git config user.email` sont renseignés, avec son nom et son e-mail.
- `git ls-remote origin` répond. Sinon, elle n'a pas encore accès au dépôt GitHub : elle doit demander à Amandine de l'ajouter. Arrête la séance ici.

## 2. Se mettre à jour

`git pull --rebase`, puis `pnpm install` si `pnpm-lock.yaml` a changé. En cas de conflit, applique le point d'arrêt de SKILL.md.

## 3. Prendre les nouvelles de Seeckr

À la première séance de la semaine, donne à Laureline le prompt pour le projet Seeckr (voir les relais dans SKILL.md). Il demande ce qui a changé depuis la date de la ligne « Dernières nouvelles de Seeckr » en tête de `seo/backlog.md` : fonctionnalités, secteurs, statistiques. Chaque nouveauté publiable devient une requête dans le backlog, ou une mise à jour à proposer à Amandine pour une page existante. Remplace ensuite la date de la ligne « Dernières nouvelles de Seeckr » par celle du jour.

## 4. Proposer le programme

Lis `seo/backlog.md`, `seo/panel-geo.md` et `seo/mentions.md`, puis compare-les au rythme cible :

| Volet    | Cible                                                |
| -------- | ---------------------------------------------------- |
| Guides   | 2 publiés par semaine                                |
| Mentions | une demi-journée par semaine, relances comprises     |
| Panel    | un relevé par mois, dans la première semaine du mois |

Propose à Laureline une ou deux tâches pour la journée, dans cet ordre de priorité :

1. le panel, si le relevé du mois courant manque ;
2. un guide commencé mais non publié ;
3. les relances dues dans `seo/mentions.md` (contact sans réponse depuis 7 jours ou plus) ;
4. le prochain guide du backlog ;
5. de nouvelles cibles de mentions.

Formule-le en trois lignes au plus, avec la commande que tu vas enchaîner, et laisse-la choisir.
