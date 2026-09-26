/**
 * L'identité légale de l'éditeur. Les mentions légales, la politique de
 * confidentialité et le JSON-LD `Organization` lisent toutes ce fichier.
 */
export const company = {
  legalName: 'SPECKS',
  /** Capital social, en euros. Chaque langue le formate à sa façon. */
  shareCapital: 1000,
  address: {
    street: '1 rue Pauline Roland',
    postalCode: '44200',
    city: 'Nantes',
    /** Code ISO 3166-1 alpha-2, attendu par Schema.org. */
    country: 'FR',
  },
  siren: '980 269 062',
  registry: 'RCS Nantes',
  email: 'contact@seeckr.fr',
  /** Format E.164, pour les liens `tel:` et le JSON-LD. */
  phone: '+33658305185',
  /** Le même numéro, tel qu'on le lit. */
  phoneLabel: '06 58 30 51 85',
  /** Le même numéro, tel qu'on le lit depuis l'étranger. */
  phoneLabelIntl: '+33 6 58 30 51 85',
  publicationDirector: 'Amandine Musseau',
} as const

/** Le capital social au format d'une langue : `1 000 €`, `€1,000`. */
export function shareCapital(locale: string) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(company.shareCapital)
}

/** Le siège social sur une ligne. */
export const headquarters = `${company.address.street}, ${company.address.postalCode} ${company.address.city}`
