# Backlog des guides

Dernières nouvelles de Seeckr : 2026-10-26

Une ligne par requête ciblée, dans l'ordre de traitement. Statuts : `à faire`, `en cours`, `publié`.

Les premières requêtes sont des hypothèses tirées du positionnement du site. Personne n'a encore vérifié leur volume de
recherche : la commande `guide` s'en charge, et retire du backlog une requête que personne ne tape.

| Requête                                                               | Verticale            | Statut   | Date       | URL                                                                  |
| --------------------------------------------------------------------- | -------------------- | -------- | ---------- | -------------------------------------------------------------------- |
| Comment réduire les recherches sans résultat sur un site e-commerce   | toutes               | publié   | 2026-10-26 | <https://seeckr.fr/guides/reduire-recherches-sans-resultat>          |
| Quiz produit ou assistant conversationnel : que choisir               | toutes               | publié   | 2026-10-27 | <https://seeckr.fr/guides/quiz-produit-ou-assistant-conversationnel> |
| Chatbot e-commerce ou conseiller produit : quelle différence          | toutes               | publié   | 2026-10-02 | <https://seeckr.fr/guides/chatbot-ou-conseiller-produit>             |
| Quel outil pour augmenter les ventes de son site e-commerce           | toutes               | à faire  |            |                                                                      |
| Meilleurs outils IA pour augmenter les ventes d'un e-commerce         | toutes               | à faire  |            |                                                                      |
| Quel outil pour conseiller les visiteurs d'un site e-commerce         | toutes               | à faire  |            |                                                                      |
| Quelle alternative à iAdvize pour conseiller ses visiteurs            | toutes               | à faire  |            |                                                                      |
| Quel assistant d'achat IA installer sur son site e-commerce           | toutes               | à faire  |            |                                                                      |
| Quel conseiller produit installer sur son site e-commerce             | toutes               | en cours (Laureline) |            |                                                                      |
| Comment créer un guide d'achat interactif sur son site e-commerce     | toutes               | à faire  |            |                                                                      |
| Qu'est-ce que la vente guidée en e-commerce                           | toutes               | à faire  |            |                                                                      |
| Comment conseiller un client en ligne comme en boutique               | toutes               | à faire  |            |                                                                      |
| Que proposer à un visiteur qui s'apprête à quitter le site            | toutes               | à faire  |            |                                                                      |
| Comment recommander une routine de soin sur un site cosmétique        | cosmetique-nutrition | à faire  |            |                                                                      |
| Comment aider un client à choisir un produit technique en ligne       | produits-techniques  | à faire  |            |                                                                      |
| Comment aider un prospect à choisir sa formation en ligne             | formation            | à faire  |            |                                                                      |
| Quelles questions poser à un client pour le conseiller en ligne       | toutes               | à faire  |            |                                                                      |
| Comment conseiller un client quand on vend sur devis                  | toutes               | à faire  |            |                                                                      |
| Comment calculer la quantité de produit selon la surface à couvrir    | produits-techniques  | à faire  |            |                                                                      |
| Comment orienter vers un revendeur quand on n'a pas de vente en ligne | toutes               | à faire  |            |                                                                      |
| Comment analyser les recherches internes de son site e-commerce       | toutes               | à faire  |            |                                                                      |
| Comment soigner la page « aucun résultat » d'une boutique en ligne    | toutes               | à faire  |            |                                                                      |

## Engagements d'Amandine

Fonctionnalités présentées comme disponibles parce qu'Amandine les livre avant toute mise en service client (voir le
skill `seo-geo`). Seule Amandine ajoute une ligne.

| Fonctionnalité                                                                                             | Déjà livrée sur                          | Engagée le |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------- |
| Ajout au panier en un clic du top 3 ou de la routine                                                       | Shopify (depuis le 2026-09-22)           | 2026-10-02 |
| Ajout au panier sur toutes les plateformes e-commerce existantes (WooCommerce : quantité selon la surface) | toutes les plateformes, d'après Amandine | 2026-10-26 |
| Bouton « Être rappelé » (vente sur devis)                                                                  | réponse d'Amandine du 2026-10-26         | 2026-10-26 |
| Mesure des ventes générées (commandes par webhook)                                                         | réponse d'Amandine du 2026-10-26         | 2026-10-26 |
| Assistant dans toutes les langues de la page                                                               | réponse d'Amandine du 2026-10-26         | 2026-10-26 |

## Pour Amandine

- 2026-10-02, panel : à « Qu'est-ce que Seeckr ? », Gemini décrit Seekr, une société américaine d'IA. Décidé le
  2026-10-02 : le JSON-LD `Organization` porte en `sameAs` les profils de `company.profiles` (`src/content/company.ts`),
  aujourd'hui la seule page LinkedIn. Tout nouveau profil officiel s'ajoute là. Effet à relever au panel de novembre.
- 2026-10-26, nouvelles de Seeckr : des fonctionnalités ont été livrées dans le code depuis le 2 octobre (ajout au
  panier WooCommerce avec quantité selon la surface, bouton « Être rappelé » pour la vente sur devis, mesure des ventes
  par webhook WooCommerce, localisateur de magasins revendeurs, assistant dans la langue de la page, vocabulaire réglable
  par client, score de compatibilité masquable, prix facultatif). Le projet Seeckr les déclare publiables, mais sa seule
  source est l'historique du code. Aucune n'est publiée tant qu'Amandine n'a pas dit lesquelles sont livrées aux
  clients ; celles qu'elle engage rejoignent « Engagements d'Amandine ». Les trois requêtes ajoutées au backlog (devis,
  surface, revendeurs) en dépendent pour leurs exemples produit. Aucun nouveau chiffre, aucun nouveau client.
- 2026-10-27, mentions : Digital Applied (agence marketing : SEO, PPC, contenu, développement) est la source de Perplexity au relevé « conseiller produit ». Est-ce un concurrent au sens de la règle du 2026-10-27 ? Aucun message ne part avant la réponse d'Amandine.
