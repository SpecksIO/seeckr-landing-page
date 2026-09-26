import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'
import { getDictionary, getLocale } from '@/content/get-dictionary'
import { pageMetadata, paths } from '@/lib/site'

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary()
  return pageMetadata(await getLocale(), dict, {
    ...dict.legalNotice.meta,
    path: paths.legalNotice,
  })
}

export default async function MentionsLegalesPage() {
  const { legalNotice } = await getDictionary()
  return (
    <LegalPage title={legalNotice.meta.title}>
      <legalNotice.Body />
    </LegalPage>
  )
}
