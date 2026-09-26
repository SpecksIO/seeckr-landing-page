import type { Metadata } from 'next'
import { LeadForm } from '@/components/lead-form'
import { eyebrow } from '@/components/styles'
import { getDictionary, getLocale } from '@/content/get-dictionary'
import { localePath } from '@/lib/i18n'
import { pageMetadata, paths } from '@/lib/site'

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary()
  return pageMetadata(await getLocale(), dict, {
    ...dict.lead.meta,
    path: paths.lead,
  })
}

export default async function MonSeeckrPage() {
  const locale = await getLocale()
  const { lead, site } = await getDictionary()

  return (
    <section
      aria-labelledby="mon-seeckr-title"
      className="px-4 py-[clamp(3rem,8vw,6rem)] sm:px-6"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-20">
        <div>
          <p className={`${eyebrow} text-violet-200`}>{lead.eyebrow}</p>
          <h1
            id="mon-seeckr-title"
            className="mt-5 text-balance font-display font-semibold text-[clamp(2.125rem,5vw,3.5rem)] leading-[1.08] tracking-tight"
          >
            {lead.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-violet-200 leading-relaxed">
            {lead.intro}
          </p>
          <ul className="mt-10 max-w-xl border-white/15 border-b">
            {lead.promises.map((promise) => (
              <li
                key={promise}
                className="flex gap-4 border-white/15 border-t py-4"
              >
                <span aria-hidden="true" className="text-violet-300">
                  ♥
                </span>
                {promise}
              </li>
            ))}
          </ul>
        </div>
        <LeadForm
          lang={locale}
          copy={lead.form}
          submitLabel={site.cta.label}
          privacyHref={localePath(locale, paths.privacy)}
        />
      </div>
    </section>
  )
}
