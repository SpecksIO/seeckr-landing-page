import { Faq } from '@/components/faq'
import { Features } from '@/components/features'
import { Hero } from '@/components/hero'
import { JsonLd } from '@/components/json-ld'
import { homeGraph } from '@/lib/structured-data'

export default function Home() {
  return (
    <>
      <JsonLd graph={homeGraph} />
      <Hero />
      <Features />
      <Faq />
    </>
  )
}
