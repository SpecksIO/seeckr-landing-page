import { notFound } from 'next/navigation'
import { lang } from 'next/root-params'
import { dictionaries } from '@/content'
import { hasLocale } from '@/lib/i18n'

/** La langue de la page en cours, lue sur le segment `app/[lang]`. */
export async function getLocale() {
  const locale = await lang()
  if (!hasLocale(locale)) notFound()
  return locale
}

/** Le dictionnaire de la page en cours. */
export async function getDictionary() {
  return dictionaries[await getLocale()]
}
