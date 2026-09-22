import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'
import { pageMetadata } from '@/lib/site'

export const metadata: Metadata = pageMetadata({
  title: 'Mentions légales',
  description: 'Éditeur et hébergeur du site seeckr.fr.',
  path: '/mentions-legales',
})

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales">
      <section>
        <h2>Éditeur du site</h2>
        <ul>
          <li>
            SPECKS, société par actions simplifiée au capital de 1 000 euros
          </li>
          <li>Siège social : 1 rue Pauline Roland, 44200 Nantes</li>
          <li>SIREN 980 269 062, RCS Nantes</li>
          <li>TVA intracommunautaire : [À COMPLÉTER : numéro de TVA]</li>
          <li>
            Contact :{' '}
            <a
              href="mailto:contact@seeckr.fr"
              className="underline underline-offset-4"
            >
              contact@seeckr.fr
            </a>
            ,{' '}
            <a href="tel:+33658305185" className="underline underline-offset-4">
              06 58 30 51 85
            </a>
          </li>
          <li>Directrice de la publication : Amandine Musseau</li>
        </ul>
      </section>
      <section>
        <h2>Hébergeur</h2>
        <p>
          Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis,{' '}
          <a href="https://vercel.com" className="underline underline-offset-4">
            vercel.com
          </a>
          .
        </p>
      </section>
      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          Le nom Seeckr, son logo et les contenus de ce site sont protégés par
          le droit de la propriété intellectuelle. Toute reproduction sans
          autorisation est interdite.
        </p>
      </section>
      <section>
        <h2>Cookies</h2>
        <p>
          Ce site ne dépose aucun cookie et n'utilise aucun outil de mesure
          d'audience.
        </p>
      </section>
    </LegalPage>
  )
}
