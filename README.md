# Site vitrine Seeckr

Le site public de Seeckr, servi sur `seeckr.fr`. Next.js 16 (App Router), Tailwind CSS 4, TypeScript, Biome.
Toutes les pages sont statiques, régénérées toutes les 10 minutes. Seule la route du formulaire s'exécute à la demande.

Le site poursuit trois buts, dans cet ordre : faire demander un Seeckr personnalisé gratuit, faire s'inscrire au prochain
webinar, et vendre Seeckr aux e-commerçants. Chaque page se termine sur ces actions.

## Stack

| Besoin                | Outil                                                    |
| --------------------- | -------------------------------------------------------- |
| Framework             | Next.js 16 (App Router, Turbopack, React 19)             |
| Styles                | Tailwind CSS 4, charte Seeckr dans `src/app/globals.css` |
| Langage               | TypeScript 5 (strict)                                    |
| Lint et format        | Biome 2                                                  |
| Lint markdown         | markdownlint-cli2                                        |
| Tests unitaires       | Vitest 5 et Testing Library (jsdom)                      |
| Tests de bout en bout | Playwright (Chrome, Firefox, Pixel 5, iPhone 12)         |
| Performance           | Lighthouse CI (profils bureau et mobile)                 |
| Accessibilité         | Pa11y (WCAG 2 AA)                                        |
| Données structurées   | JSON-LD typé avec `schema-dts`                           |

## Démarrer

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Le site tourne sur <http://localhost:3000>.

## Variables d'environnement

| Variable               | Nécessaire         | Rôle                                                                         |
| ---------------------- | ------------------ | ---------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | En production      | Adresse canonique. Alimente métadonnées, JSON-LD, sitemap, robots, llms.txt. |
| `RESEND_API_KEY`       | Pour le formulaire | Envoi de l'e-mail de demande, expéditeur `noreply@seeckr.fr`.                |
| `LEAD_EMAIL_TO`        | Pour le formulaire | Destinataire des demandes.                                                   |
| `SLACK_WEBHOOK_URL`    | Pour le formulaire | Webhook entrant qui reçoit chaque demande.                                   |

Sans `NEXT_PUBLIC_SITE_URL`, le site suppose `https://seeckr.fr`. Aucune base de données.

## Contenu

Le contenu vit dans `src/content/`, jamais dans les composants :

- `home.ts` : accueil, la conversation jouée en boucle, la FAQ
- `verticals/*.ts` : un fichier par verticale, alimentant le gabarit `src/app/[vertical]/page.tsx`
- `algimouss.ts` : les chiffres du seul client citable, avec leur période et leur source, et la page de cas client
- `webinar.ts` : titre, date et lien d'inscription du prochain webinar
- `doctrine.ts` : ce qui distingue le conseil Seeckr d'un chatbot
- `src/lib/site.ts` : identité du site, appel à l'action, liste des pages publiques

### Changer de webinar

Modifier les trois champs de `src/content/webinar.ts`. L'en-tête, le hero et les blocs webinar lisent cette constante.
Une date passée ou vide fait disparaître tout ce qui concerne le webinar, y compris le lien du menu.

### Ajouter des chiffres

Seul Algimouss peut être nommé, et ses chiffres mesurent le conseil, jamais des ventes. Tout chiffre affiché vient de
`src/content/algimouss.ts` et s'accompagne du nom du client et de la période. Les scores de compatibilité des
conversations d'exemple sont des illustrations, attribuées à « Votre marque ».

La page `/cas-clients/algimouss` porte les chiffres au complet. L'accueil et les pages verticales n'en montrent que
`teaserFigures`, puis renvoient dessus : un chiffre ne se raconte en entier qu'à un seul endroit.

## Formulaire du Seeckr personnalisé

`/mon-seeckr` poste vers une action serveur (`src/app/mon-seeckr/actions.ts`) qui valide les trois champs
(`src/lib/lead.ts`), écarte les robots par un champ piège, puis envoie un e-mail via Resend et un message Slack.
Un seul des deux canaux suffit pour que la demande soit considérée comme reçue. Le formulaire fonctionne sans
JavaScript côté client.

## Scripts

- `pnpm dev`, `pnpm build`, `pnpm start`, `pnpm preview`
- `pnpm lint` et `pnpm format` : Biome ; `pnpm lint:md` : markdownlint
- `pnpm test:run` : tests unitaires ; `pnpm test:e2e` : Playwright
- `pnpm lighthouse`, `pnpm lighthouse:mobile`, `pnpm pa11y`, `pnpm webhint` : audits, rapports dans `reports/`

Sur un poste sans les bibliothèques système de Chromium, `CHROME_PATH` pointe vers le Chrome utilisé par les audits,
et Playwright s'en sert aussi : `CHROME_PATH=$(which google-chrome) pnpm test:e2e`.

## SEO et assistants

- `/sitemap.xml` et `/robots.txt` sont générés depuis `pages` dans `src/lib/site.ts`
- `robots.txt` autorise explicitement les principaux robots d'assistants
- `/llms.txt` suit la spécification [llmstxt.org](https://llmstxt.org)
- L'accueil publie un graphe JSON-LD Organization, WebSite, WebPage et FAQPage
- Chaque page porte son titre, sa description, son URL canonique et ses balises Open Graph

## Marque

La charte de référence est `brand/charte.png` (septembre 2026) : fond `#16113A`, violet actif `#534AB7`, sections
claires `#EEEDFE`, Poppins pour les titres, Inter pour le texte, Pacifico réservé au wordmark. Aplats uniquement,
aucun dégradé décoratif. Chaque animation montre le produit ou guide la lecture, et s'arrête sous
`prefers-reduced-motion`.
