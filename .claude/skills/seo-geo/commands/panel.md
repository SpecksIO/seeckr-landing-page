# `panel` : relevé mensuel des citations

Le panel mesure le GEO : sur une liste fixe de questions d'e-commerçant, combien de fois les assistants IA citent Seeckr, et sur quelles sources ils s'appuient. Les questions ne changent pas d'un mois à l'autre, sinon les relevés ne se comparent plus.

## 1. Faire poser les questions

Tu n'as pas accès à ces assistants : c'est Laureline qui pose les questions. Donne-lui la consigne en une fois :

- les assistants et les questions sont ceux de `seo/panel-geo.md` ;
- une conversation neuve par question, **dans une fenêtre de navigation privée et sans être connectée** (ChatGPT, Gemini et Perplexity gardent la mémoire du compte : le 2026-10-28, Perplexity a reconnu qu'une partie de sa réponse sur Seeckr venait de l'historique de Laureline, ce qui a invalidé la mesure) ;
- elle colle chaque réponse complète, liens compris, précédée de l'assistant et du numéro de la question.

## 2. Relever

Pour chaque réponse, note :

- si Seeckr est cité (`oui` ou `non`), et à quel rang parmi les solutions citées ;
- les concurrents cités ;
- les domaines des sources citées.

## 3. Consigner

Ajoute la section du mois dans `seo/panel-geo.md`, au format des mois précédents : taux de citation par assistant et au total, puis écart avec le mois précédent.

## 4. En tirer les actions

- Chaque domaine source qui revient au moins deux fois et ne mentionne pas Seeckr devient une cible dans `seo/mentions.md`.
- Chaque question où aucun assistant ne cite Seeckr, et qu'aucune page du site ne traite, devient une requête dans `seo/backlog.md`.

Résume à Laureline le taux du mois, l'écart, et les deux ou trois actions ajoutées. Commite et pousse.
