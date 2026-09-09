# Seeckr landing page

Next.js 16 landing page scaffolded with `/scaffold-nextjs` in **landing-page** mode, single repo. Tuned for SEO, GEO
(discoverability by AI assistants), accessibility and Core Web Vitals, with the audit tooling wired in as npm scripts.

## Stack

| Concern            | Tool                                                   |
| ------------------ | ------------------------------------------------------ |
| Framework          | Next.js 16 (App Router, Turbopack, React 19)           |
| Styling            | Tailwind CSS 4                                         |
| Language           | TypeScript 5 (strict)                                  |
| Linting            | ESLint 9 flat config + `eslint-config-next` + Prettier |
| Formatting         | Prettier 3 (organize-imports, tailwindcss plugins)     |
| Markdown linting   | markdownlint-cli2                                      |
| Unit tests         | Vitest 5 + React Testing Library (jsdom)               |
| E2E tests          | Playwright (Chrome, Firefox, Pixel 5, iPhone 12)       |
| Performance audits | Lighthouse CI (desktop + mobile profiles)              |
| A11y audits        | Pa11y (WCAG 2 AA)                                      |
| Best practices     | webhint (puppeteer connector)                          |
| Structured data    | JSON-LD typed with `schema-dts`                        |

## Prerequisites

- Node.js >= 22.12 (developed on 24)
- pnpm 11 (`corepack enable pnpm`)
- Google Chrome on `PATH` as `google-chrome`, used by Lighthouse, Pa11y and webhint
- Playwright system libraries, installed once with `sudo npx playwright install-deps`

## Getting started

```bash
pnpm install
cp .env.example .env.local   # already present after scaffolding
pnpm dev
```

The app runs on <http://localhost:3000>.

## Environment

| Variable               | Required | Purpose                                                                             |
| ---------------------- | -------- | ----------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Yes      | Canonical origin. Feeds metadata, JSON-LD, `sitemap.xml`, `robots.txt`, `llms.txt`. |

Unset, it falls back to `http://localhost:3000`.

## Content model

The copy lives in exactly two modules, and everything else derives from them:

- `src/lib/site.ts`: identity, navigation, the list of public pages
- `src/lib/content.ts`: hero, features, FAQ

Editing those files updates the rendered page, the FAQ structured data, the sitemap, and both `llms` endpoints at once.

## Project structure

```text
src/
├── app/            # Routes, metadata, sitemap.ts, robots.ts, llms(.full).txt
├── components/     # Presentational sections, colocated tests
└── lib/            # Site config, copy, Schema.org graph
e2e/                # Playwright specs
reports/            # Audit output (gitignored)
```

## Scripts

### Development

- `pnpm dev`: dev server
- `pnpm preview`: production build, then serve it

### Build

- `pnpm build`, `pnpm start`

### Quality

- `pnpm lint`: ESLint, cached
- `pnpm lint:md`: markdownlint
- `pnpm format` / `pnpm format:check`: Prettier

### Unit tests

- `pnpm test`: watch mode
- `pnpm test:run`: single run
- `pnpm test:coverage`: coverage into `reports/coverage/`

### E2E tests

- `pnpm test:e2e`: all four browser targets, dev server started automatically
- `pnpm test:e2e:ui`: Playwright UI mode

### Audits

Lighthouse starts its own production server. Pa11y and webhint expect one already running (`pnpm start`).

- `pnpm lighthouse`: desktop profile, 3 runs, report in `reports/lighthouse/`
- `pnpm lighthouse:mobile`: mobile profile, report in `reports/lighthouse-mobile/`
- `pnpm pa11y`: WCAG 2 AA check
- `pnpm webhint`: report in `reports/webhint/`

Lighthouse fails the run below performance 90, accessibility 100, SEO 100, best practices 90.

## SEO and GEO endpoints

- `/sitemap.xml` and `/robots.txt` are generated from `pages` in `src/lib/site.ts`
- `robots.txt` allows the major AI crawlers explicitly (GPTBot, ClaudeBot, PerplexityBot and friends)
- `/llms.txt` and `/llms-full.txt` follow the [llmstxt.org](https://llmstxt.org) spec
- The home page emits an Organization + WebSite + WebPage + FAQPage JSON-LD graph, with `speakable` selectors on the
  hero for voice and assistant surfaces
