/** Lighthouse CI, profil mobile (émulation par défaut de Lighthouse). */
module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/produits-techniques',
        'http://localhost:3000/mon-seeckr',
      ],
      startServerCommand: 'pnpm start',
      startServerReadyPattern: 'Ready in',
      numberOfRuns: 3,
      settings: {
        chromeFlags: '--user-data-dir=/tmp/lhci-chrome',
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 1 }],
        'categories:seo': ['error', { minScore: 1 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: 'reports/lighthouse-mobile',
    },
  },
}
