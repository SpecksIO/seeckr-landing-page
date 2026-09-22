import { expect, test } from '@playwright/test'

const pages = [
  { path: '/', heading: /vendeur/i },
  { path: '/cosmetique-nutrition', heading: /routine/i },
  { path: '/produits-techniques', heading: /maison/i },
  { path: '/formation', heading: /chemin/i },
  { path: '/mon-seeckr', heading: /gratuitement/i },
  { path: '/mentions-legales', heading: /mentions légales/i },
  { path: '/confidentialite', heading: /confidentialité/i },
]

test.describe('à 360 px de large', () => {
  test.use({ viewport: { width: 360, height: 800 } })

  for (const { path, heading } of pages) {
    test(`${path} se lit sans défilement horizontal`, async ({ page }) => {
      await page.goto(path)

      await expect(page.getByRole('heading', { level: 1 })).toContainText(
        heading
      )
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - window.innerWidth
      )
      expect(overflow).toBeLessThanOrEqual(0)
    })
  }
})

test('le formulaire refuse un envoi incomplet, champ par champ', async ({
  page,
}) => {
  await page.goto('/mon-seeckr')
  // On désactive la validation du navigateur pour atteindre celle du serveur.
  await page.evaluate(() =>
    document.querySelector('form')?.setAttribute('novalidate', '')
  )

  await page.getByLabel('Site internet').fill('maboutique')
  await page.getByRole('button', { name: /mon Seeckr personnalisé/i }).click()

  await expect(page.getByText(/Il manque une information/)).toBeVisible()
  await expect(page.locator('#site-error')).toContainText(/adresse/)
  await expect(page.locator('#email-error')).toContainText(/e-mail/)
  await expect(page.locator('#phone-error')).toContainText(/téléphone/)
  await expect(page.getByLabel('Site internet')).toHaveValue('maboutique')
})

test("l'appel principal mène au formulaire", async ({ page }) => {
  await page.goto('/')

  await page
    .getByRole('link', { name: /mon Seeckr personnalisé/i })
    .first()
    .click()

  await expect(page).toHaveURL(/\/mon-seeckr$/)
})
