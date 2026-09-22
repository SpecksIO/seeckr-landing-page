import { leadErrors, parseLead } from '@/lib/lead'

function form(values: Record<string, string>) {
  const data = new FormData()
  for (const [key, value] of Object.entries(values)) data.append(key, value)
  return data
}

const valid = {
  site: 'maboutique.fr',
  email: 'claire@maboutique.fr',
  phone: '06 12 34 56 78',
}

describe('parseLead', () => {
  it('complète le site sans protocole', () => {
    const result = parseLead(form(valid))

    expect(result).toEqual({
      ok: true,
      lead: { ...valid, site: 'https://maboutique.fr/' },
    })
  })

  it('accepte un téléphone international', () => {
    const result = parseLead(form({ ...valid, phone: '+33 6 12 34 56 78' }))

    expect(result.ok).toBe(true)
  })

  it('refuse un envoi vide, avec un message par champ', () => {
    const result = parseLead(form({ site: '', email: '', phone: '' }))

    expect(result).toEqual({
      ok: false,
      values: { site: '', email: '', phone: '' },
      errors: leadErrors,
    })
  })

  it.each([
    ['site', 'maboutique'],
    ['email', 'claire(at)maboutique.fr'],
    ['phone', '06 12'],
  ])('refuse un %s invalide', (field, value) => {
    const result = parseLead(form({ ...valid, [field]: value }))

    expect(result.ok).toBe(false)
    if (!result.ok) expect(Object.keys(result.errors)).toEqual([field])
  })

  it('renvoie les valeurs saisies pour les réafficher', () => {
    const result = parseLead(form({ ...valid, email: 'claire@' }))

    if (!result.ok) expect(result.values.site).toBe('maboutique.fr')
  })
})
