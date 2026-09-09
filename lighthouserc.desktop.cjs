/** Lighthouse CI — desktop profile. Run with `pnpm lighthouse`. */
module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000/'],
      startServerCommand: 'pnpm start',
      startServerReadyPattern: 'Ready in',
      numberOfRuns: 3,
      settings: {
        preset: 'desktop',
        // Keep Chrome's temp profile out of the repo (and off the WSL mount).
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
      outputDir: 'reports/lighthouse',
    },
  },
}
