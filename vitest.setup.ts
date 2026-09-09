// Adds DOM matchers (toBeInTheDocument, toHaveClass, ...) to Vitest's expect.
// React Testing Library auto-cleans between tests because `globals` is enabled.
import '@testing-library/jest-dom/vitest'
