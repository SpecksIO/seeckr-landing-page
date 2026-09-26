import Link from 'next/link'
import { button, sectionTitle } from '@/components/styles'
import { getDictionary, getLocale } from '@/content/get-dictionary'
import { localePath } from '@/lib/i18n'
import { paths } from '@/lib/site'

/** Appel final vers /mon-seeckr, en bas de chaque page. */
export async function FinalCta() {
  const locale = await getLocale()
  const { finalCta, site } = await getDictionary()

  return (
    <section
      aria-labelledby="final-cta-title"
      className="px-4 py-[clamp(4rem,10vw,7rem)] sm:px-6"
    >
      <div className="reveal mx-auto w-full max-w-6xl rounded-3xl bg-violet px-6 py-14 text-white sm:px-14 sm:py-20">
        <h2 id="final-cta-title" className={`max-w-3xl ${sectionTitle}`}>
          {finalCta.title}
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-mist leading-relaxed">
          {finalCta.text}
        </p>
        <Link
          href={localePath(locale, paths.lead)}
          className={`${button('inverted')} mt-10 w-full sm:w-auto`}
        >
          {site.cta.label}
        </Link>
      </div>
    </section>
  )
}
