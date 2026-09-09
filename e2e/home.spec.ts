import { expect, test } from '@playwright/test'

test('home page renders the hero and has a title', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/Seeckr/i)
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
})
