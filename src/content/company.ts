/**
 * L'identité légale de l'éditeur. Les mentions légales, la politique de
 * confidentialité et le JSON-LD `Organization` lisent toutes ce fichier.
 */
export const company = {
  legalName: 'SPECKS',
  /** Forme sociale et capital, tels qu'ils doivent figurer aux mentions légales. */
  legalForm: 'société par actions simplifiée au capital de 1 000 euros',
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
  publicationDirector: 'Amandine Musseau',
} as const

/** Le siège social sur une ligne. */
export const headquarters = `${company.address.street}, ${company.address.postalCode} ${company.address.city}`
