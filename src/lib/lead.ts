/** Validation de la demande de Seeckr personnalisé, sans effet de bord. */

export const leadFields = ['site', 'email', 'phone'] as const
export type LeadField = (typeof leadFields)[number]
export type Lead = Record<LeadField, string>
export type LeadErrors = Partial<Record<LeadField, string>>

export type LeadState =
  | { status: 'idle' }
  | { status: 'sent' }
  | { status: 'invalid' | 'failed'; values: Lead; errors: LeadErrors }

export const leadErrors: Record<LeadField, string> = {
  site: "Indiquez l'adresse de votre site, par exemple maboutique.fr.",
  email:
    'Indiquez un e-mail professionnel valide, par exemple prenom@maboutique.fr.',
  phone:
    "Indiquez un numéro de téléphone valide, avec l'indicatif du pays s'il n'est pas français.",
}

const EMAIL = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}$/
const PHONE = /^\+?\d{9,15}$/
const MAX_LENGTH = 200

export function parseLead(
  formData: FormData
): { ok: true; lead: Lead } | { ok: false; values: Lead; errors: LeadErrors } {
  const read = (field: LeadField) =>
    String(formData.get(field) ?? '')
      .trim()
      .slice(0, MAX_LENGTH)
  const values = {
    site: read('site'),
    email: read('email'),
    phone: read('phone'),
  }

  const site = normalizeSite(values.site)
  const errors: LeadErrors = {}
  if (!site) errors.site = leadErrors.site
  if (!EMAIL.test(values.email)) errors.email = leadErrors.email
  if (!PHONE.test(values.phone.replace(/[\s.()-]/g, ''))) {
    errors.phone = leadErrors.phone
  }

  if (!site || Object.keys(errors).length > 0) {
    return { ok: false, values, errors }
  }
  return { ok: true, lead: { ...values, site } }
}

/** `maboutique.fr` devient `https://maboutique.fr/`. Null si ce n'est pas un site. */
function normalizeSite(input: string) {
  try {
    const url = new URL(
      /^https?:\/\//i.test(input) ? input : `https://${input}`
    )
    return url.hostname.includes('.') ? url.href : null
  } catch {
    return null
  }
}
