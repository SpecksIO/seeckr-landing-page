import { localePath, unlocalizedPath } from '@/lib/i18n'

describe('localePath', () => {
  it('laisse le français à la racine', () => {
    expect(localePath('fr', '/mon-seeckr')).toBe('/mon-seeckr')
  })

  it('préfixe et traduit le chemin', () => {
    expect(localePath('en', '/mon-seeckr')).toBe('/en/try-seeckr')
    expect(localePath('es', '/cas-clients/algimouss')).toBe(
      '/es/casos-de-exito/algimouss'
    )
  })

  it("garde l'ancre, y compris sur l'accueil", () => {
    expect(localePath('it', '/')).toBe('/it')
    expect(localePath('it', '/#prix')).toBe('/it#prix')
  })
})

describe('unlocalizedPath', () => {
  it('retrouve le chemin français', () => {
    expect(unlocalizedPath('/en/training')).toBe('/formation')
    expect(unlocalizedPath('/it')).toBe('/')
    expect(unlocalizedPath('/formation')).toBe('/formation')
  })

  it('accepte le chemin déjà réécrit par le proxy', () => {
    expect(unlocalizedPath('/en/formation')).toBe('/formation')
    expect(unlocalizedPath('/fr/formation')).toBe('/formation')
  })
})
