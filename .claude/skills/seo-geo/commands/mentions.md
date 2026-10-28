# `mentions` : être cité ailleurs

Les assistants IA recommandent surtout ce que d'autres sites disent d'une marque. Une mention sur un site tiers fiable pèse plus qu'une page de plus sur seeckr.fr.

## 1. Relances d'abord

Dans `seo/mentions.md`, repère les contacts `envoyé` depuis 7 jours ou plus. Rédige une relance courte pour chacun. Une seule relance par contact : au-delà, passe la ligne à `sans suite`.

## 2. Trouver de nouvelles cibles

Seeckr n'a pas de budget pour être cité : seules les cibles gratuites comptent. Vérifie sur la page même qu'aucun paiement n'est demandé (inscription, fiche mise en avant, article sponsorisé, tribune ou passage en podcast facturés). Une cible payante est notée `payant` et on ne la contacte pas.

Vérifie aussi que la cible n'est pas un concurrent : un éditeur ou une agence qui vend un assistant, un chatbot, un quiz ou un conseiller produit pour l'e-commerce, une agence qui saurait en construire un pour ses clients (agence IA, agence qui développe des chatbots ou des sites sur mesure), ou un comparatif publié par l'un d'eux. Lis sa page d'accueil et son offre, pas seulement l'article. Un concurrent est noté `concurrent` et on ne lui écrit jamais. Dans le doute, Amandine tranche avant tout message.

Commence par les cibles déjà notées `à contacter`, puis cherche, par ordre de rendement :

1. **Annuaires de logiciels** où un éditeur SaaS crée sa fiche lui-même, avec une inscription ouverte.
2. **Listes et comparatifs** d'outils IA pour l'e-commerce, en français, publiés ou mis à jour dans les douze derniers mois. Cherche le nom de l'auteur et le moyen de le contacter sur la page elle-même.
3. **Médias, newsletters et podcasts e-commerce** francophones qui acceptent des tribunes ou reçoivent des invités.
4. **Partenaires** : site d'Algimouss, éditeurs complémentaires non concurrents (avis clients, paiement, logistique). Ici, Amandine décide : note la cible, ne rédige rien.

Pour chaque cible, lis la page et note dans `seo/mentions.md` l'URL (testée), le type, le contact trouvé (e-mail ou profil LinkedIn de l'auteur), et pourquoi Seeckr y a sa place. Une cible sans contact vérifiable reste notée, avec `contact introuvable`.

## 3. Rédiger

Ne rédige un message que pour une cible qui a un e-mail ou un profil LinkedIn vérifié, et qui n'est ni `payant` ni `concurrent`. Sans e-mail ni LinkedIn (formulaire de contact seul, auteur anonyme), on ne propose aucun message : la cible reste `contact introuvable`. Une fiche d'annuaire, elle, se crée par son formulaire d'inscription.

Applique [../references/ecriture.md](../references/ecriture.md). Le message part par e-mail ou par LinkedIn, selon le contact trouvé. Sur LinkedIn, la demande de connexion porte une note de 300 caractères au plus : garde la première phrase et la demande, le reste suit une fois la connexion acceptée. Un message de prise de contact tient en cinq phrases au plus :

- ce qui, dans leur page, a motivé le message (preuve qu'on l'a lue) ;
- ce que fait Seeckr, avec les mots du site ;
- ce qu'on leur apporte (un cas concret, un chiffre Algimouss, un accès de test) ;
- une seule demande claire.

Pour une fiche d'annuaire, les champs sont ceux de `seo/fiche-annuaire.md` : la description longue y a été validée par Laureline le 2026-10-28, donne-la telle quelle quand un formulaire demande une description. Ne la réécris pas de ta propre initiative. Adapte-la seulement à une limite de caractères, en coupant par la fin sans rien ajouter. Elle ne porte ni le « +15 % de ventes » ni un chiffre Algimouss : un champ d'annuaire ne peut pas porter la précision qui accompagne ces chiffres. Si Laureline ou Amandine demande une nouvelle version, mets le fichier à jour, commite et pousse. Pour un champ que le fichier et `src/content/fr/` ne couvrent pas, passe par le projet Seeckr (voir les relais dans SKILL.md). C'est Laureline qui envoie les messages et crée les fiches, depuis sa propre messagerie ou ses propres comptes. Tu ne publies rien à l'extérieur.

## 4. Suivre

Passe chaque ligne traitée au statut du tableau de `seo/mentions.md`, avec la date. Commite et pousse.
