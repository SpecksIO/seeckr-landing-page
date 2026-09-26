import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'
import { getDictionary, getLocale } from '@/content/get-dictionary'
import { pageMetadata, paths } from '@/lib/site'

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary()
  return pageMetadata(await getLocale(), dict, {
    ...dict.privacy.meta,
    path: paths.privacy,
  })
}

export default async function ConfidentialitePage() {
  const { privacy } = await getDictionary()
  return (
    <LegalPage title={privacy.meta.title}>
      <privacy.Body />
    </LegalPage>
  )
}
