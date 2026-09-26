import Link from 'next/link'
import { company, headquarters, shareCapital } from '@/content/company'
import { site } from '@/content/fr/ui'
import { paths } from '@/lib/site'

const mail = (
  <a href={`mailto:${company.email}`} className="underline underline-offset-4">
    {company.email}
  </a>
)

export const legalNotice = {
  meta: {
    title: 'Mentions légales',
    description: 'Éditeur et hébergeur du site seeckr.fr.',
  },
  Body: () => (
    <>
      <section>
        <h2>Éditeur du site</h2>
        <ul>
          <li>
            {company.legalName}, société par actions simplifiée au capital de{' '}
            {shareCapital('fr')}
          </li>
          <li>Siège social : {headquarters}</li>
          <li>
            SIREN {company.siren}, {company.registry}
          </li>
          <li>TVA intracommunautaire : [À COMPLÉTER : numéro de TVA]</li>
          <li>
            Contact : {mail},{' '}
            <a
              href={`tel:${company.phone}`}
              className="underline underline-offset-4"
            >
              {company.phoneLabel}
            </a>
          </li>
          <li>Directrice de la publication : {company.publicationDirector}</li>
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
    </>
  ),
}

export const privacy = {
  meta: {
    title: 'Politique de confidentialité',
    description:
      'Quelles données le site seeckr.fr collecte, pourquoi, et comment exercer vos droits.',
  },
  Body: () => (
    <>
      <section>
        <h2>Responsable du traitement</h2>
        <p>
          {company.legalName}, {headquarters}. Pour toute question sur vos
          données : {mail}
        </p>
      </section>
      <section>
        <h2>Données collectées</h2>
        <p>
          Le site ne collecte des données personnelles que par le formulaire{' '}
          <Link href={paths.lead} className="underline underline-offset-4">
            {site.cta.shortLabel}
          </Link>
          {' '}: l'adresse de votre site internet, votre e-mail professionnel et
          votre téléphone professionnel.
        </p>
        <p>
          Le site ne dépose aucun cookie et n'utilise aucun outil de mesure
          d'audience.
        </p>
      </section>
      <section>
        <h2>Finalité</h2>
        <p>
          Vos coordonnées servent uniquement à fabriquer et vous présenter votre
          Seeckr. Jamais revendues, aucune newsletter sans votre accord.
        </p>
      </section>
      <section>
        <h2>Base légale</h2>
        <p>
          L'exécution de mesures précontractuelles prises à votre demande : vous
          demandez un Seeckr construit sur votre catalogue, vos coordonnées nous
          servent à le fabriquer et à vous le présenter.
        </p>
      </section>
      <section>
        <h2>Destinataires</h2>
        <p>
          Votre demande est transmise à l'équipe Seeckr. Pour cela, elle passe
          par des prestataires techniques : Resend pour l'envoi de l'e-mail de
          notification, Slack pour la messagerie interne de l'équipe, et Vercel
          pour l'hébergement du site.
        </p>
        <p>
          Ces trois prestataires sont établis aux États-Unis : vos données
          peuvent donc être traitées hors de l'Union européenne, dans le cadre
          des engagements contractuels pris avec chacun d'eux.
        </p>
      </section>
      <section>
        <h2>Durée de conservation</h2>
        <p>
          Trois ans à compter de notre dernier contact avec vous. Passé ce
          délai, vos coordonnées sont supprimées.
        </p>
      </section>
      <section>
        <h2>Vos droits</h2>
        <p>
          Vous pouvez accéder à vos données, les faire rectifier ou effacer,
          vous opposer à leur traitement, en demander la limitation ou la
          portabilité. Écrivez à {mail}.
        </p>
        <p>
          Vous pouvez aussi adresser une réclamation à la CNIL, sur{' '}
          <a
            href="https://www.cnil.fr"
            className="underline underline-offset-4"
          >
            cnil.fr
          </a>
          .
        </p>
      </section>
    </>
  ),
}
