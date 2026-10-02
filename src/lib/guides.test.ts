import { getGuides, typography } from '@/lib/guides'

describe('guides', () => {
  it.each(getGuides())('$slug respecte les règles de publication', (guide) => {
    expect(guide.question).toBeTruthy()
    expect(guide.date).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    expect(guide.title.length).toBeLessThanOrEqual(60)
    expect(guide.description.length).toBeLessThanOrEqual(155)
    expect(guide.body).not.toMatch(/[—–―‒−]/)
  })
})

describe('typography', () => {
  it('rend insécables les espaces de la ponctuation, hors des balises', () => {
    expect(typography('<a href="/x">Quoi ? « Oui »</a>')).toBe(
      '<a href="/x">Quoi ? « Oui »</a>'
    )
  })
})
