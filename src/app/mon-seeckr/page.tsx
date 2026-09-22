import type { Metadata } from 'next'
import { LeadForm } from '@/components/lead-form'
import { eyebrow } from '@/components/styles'
import { pageMetadata } from '@/lib/site'

export const metadata: Metadata = pageMetadata({
  title: 'Recevez gratuitement votre Seeckr personnalisé',
  description:
    "Votre assistant Seeckr, construit sur votre propre catalogue, à essayer sur votre propre site. Rien n'est installé chez vous.",
  path: '/mon-seeckr',
})

const promises = [
  'Votre assistant, construit sur votre vrai catalogue.',
  'À essayer sur votre site, avec vos produits.',
  'Rien à installer, rien à signer.',
]

export default function MonSeeckrPage() {
  return (
    <section
      aria-labelledby="mon-seeckr-title"
      className="px-4 py-[clamp(3rem,8vw,6rem)] sm:px-6"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-20">
        <div>
          <p className={`${eyebrow} text-violet-200`}>Seeckr personnalisé</p>
          <h1
            id="mon-seeckr-title"
            className="mt-5 text-balance font-display font-semibold text-[clamp(2.125rem,5vw,3.5rem)] leading-[1.08] tracking-tight"
          >
            Voyez-le travailler sur vos propres produits.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-violet-200 leading-relaxed">
            Donnez-nous l'adresse de votre site. Nous construisons votre
            assistant sur votre vrai catalogue, puis nous vous le montrons en
            action.
          </p>
          <ul className="mt-10 max-w-xl border-white/15 border-b">
            {promises.map((promise) => (
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
        <LeadForm />
      </div>
    </section>
  )
}
