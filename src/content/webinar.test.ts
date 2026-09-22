import { isUpcoming } from '@/content/webinar'

const now = new Date('2026-09-22T10:00:00+02:00')

describe('isUpcoming', () => {
  it('reconnaît une session à venir', () => {
    expect(isUpcoming('2026-10-08T11:00:00+02:00', now)).toBe(true)
  })

  it('masque une session passée', () => {
    expect(isUpcoming('2026-09-15T11:00:00+02:00', now)).toBe(false)
  })

  it('masque une session commencée', () => {
    expect(isUpcoming('2026-09-22T09:59:00+02:00', now)).toBe(false)
  })

  it('masque une date non remplie', () => {
    expect(isUpcoming('[À COMPLÉTER : date et heure]', now)).toBe(false)
  })
})
