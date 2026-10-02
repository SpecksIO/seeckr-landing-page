import Link from 'next/link'
import { company, headquarters, shareCapital } from '@/content/company'
import { localePath } from '@/lib/i18n'
import { paths } from '@/lib/site'

const mail = (
  <a href={`mailto:${company.email}`} className="underline underline-offset-4">
    {company.email}
  </a>
)

export const legalNotice = {
  meta: {
    title: 'Note legali',
    description: 'Editore e hosting del sito Seeckr.',
  },
  Body: () => (
    <>
      <section>
        <h2>Editore del sito</h2>
        <ul>
          <li>
            {company.legalName}, société par actions simplifiée (SAS), società
            per azioni semplificata di diritto francese, con capitale sociale di{' '}
            {shareCapital('it')}
          </li>
          <li>Sede legale: {headquarters}</li>
          <li>
            SIREN (numero identificativo dell'impresa in Francia){' '}
            {company.siren}, iscritta al {company.registry}, il registro delle
            imprese di Nantes
          </li>
          <li>Partita IVA intracomunitaria: [À COMPLÉTER : numéro de TVA]</li>
          <li>
            Contatti: {mail},{' '}
            <a
              href={`tel:${company.phone}`}
              className="underline underline-offset-4"
            >
              {company.phoneLabelIntl}
            </a>
          </li>
          <li>Responsabile dei contenuti: {company.publicationDirector}</li>
        </ul>
      </section>
      <section>
        <h2>Hosting</h2>
        <p>
          Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, Stati Uniti,{' '}
          <a href="https://vercel.com" className="underline underline-offset-4">
            vercel.com
          </a>
          .
        </p>
      </section>
      <section>
        <h2>Proprietà intellettuale</h2>
        <p>
          Il nome Seeckr, il suo logo e i contenuti di questo sito sono tutelati
          dalle norme sulla proprietà intellettuale. È vietata qualsiasi
          riproduzione non autorizzata.
        </p>
      </section>
      <section>
        <h2>Cookie</h2>
        <p>
          Con il tuo consenso, questo sito utilizza il pixel di Meta. I dettagli
          sono nell'
          <Link
            href={localePath('it', paths.privacy)}
            className="underline underline-offset-4"
          >
            informativa sulla privacy
          </Link>
          .
        </p>
      </section>
    </>
  ),
}

export const privacy = {
  meta: {
    title: 'Informativa sulla privacy',
    description:
      'Quali dati raccoglie il sito Seeckr, perché e come esercitare i tuoi diritti.',
  },
  Body: () => (
    <>
      <section>
        <h2>Titolare del trattamento</h2>
        <p>
          {company.legalName}, {headquarters}. Per qualsiasi domanda sui tuoi
          dati: {mail}
        </p>
      </section>
      <section>
        <h2>Dati raccolti</h2>
        <p>
          Il sito raccoglie dati personali tramite il{' '}
          <Link
            href={localePath('it', paths.lead)}
            className="underline underline-offset-4"
          >
            modulo di richiesta
          </Link>
          : l'indirizzo del tuo sito web, la tua e-mail aziendale e il tuo
          telefono aziendale.
        </p>
        <p>
          Con il tuo consenso, il pixel di Meta raccoglie anche dati di
          navigazione: vedi Cookie e pubblicità. Le sezioni seguenti riguardano
          i dati del modulo.
        </p>
      </section>
      <section>
        <h2>Finalità</h2>
        <p>
          I tuoi dati servono solo a creare il tuo Seeckr e a presentartelo. Mai
          rivenduti, nessuna newsletter senza il tuo consenso.
        </p>
      </section>
      <section>
        <h2>Base giuridica</h2>
        <p>
          L'esecuzione di misure precontrattuali adottate su tua richiesta:
          chiedi un Seeckr costruito sul tuo catalogo e i tuoi dati ci servono
          per realizzarlo e presentartelo.
        </p>
      </section>
      <section>
        <h2>Destinatari</h2>
        <p>
          La tua richiesta viene trasmessa al team Seeckr. Per farlo, passa
          attraverso fornitori tecnici: Resend per l'invio dell'e-mail di
          notifica, Slack per la messaggistica interna del team e Vercel per
          l'hosting del sito.
        </p>
        <p>
          Questi tre fornitori hanno sede negli Stati Uniti: i tuoi dati possono
          quindi essere trattati al di fuori dell'Unione europea, nel quadro
          degli impegni contrattuali assunti con ciascuno di essi.
        </p>
      </section>
      <section>
        <h2>Periodo di conservazione</h2>
        <p>
          Tre anni dal nostro ultimo contatto con te. Trascorso questo periodo,
          i tuoi dati vengono cancellati.
        </p>
      </section>
      <section>
        <h2>Cookie e pubblicità</h2>
        <p>
          Solo se accetti, il sito carica il pixel di Meta Platforms Ireland
          Limited. Il pixel installa il cookie _fbp, conservato 90 giorni, e
          trasmette a Meta le pagine che consulti e l'invio del modulo, senza il
          suo contenuto. Lo usiamo per misurare le nostre pubblicità e
          mostrartele su Facebook e Instagram.
        </p>
        <p>
          La base giuridica è il tuo consenso. Meta, contitolare di questo
          trattamento, può trattare questi dati al di fuori dell'Unione europea.
          Puoi revocare il consenso in qualsiasi momento tramite il link
          «Gestisci i cookie», in fondo a ogni pagina.
        </p>
      </section>
      <section>
        <h2>I tuoi diritti</h2>
        <p>
          Puoi accedere ai tuoi dati, chiederne la rettifica o la cancellazione,
          opporti al loro trattamento, chiederne la limitazione o la
          portabilità. Scrivi a {mail}.
        </p>
        <p>
          Puoi anche presentare un reclamo alla CNIL, l'autorità francese per la
          protezione dei dati personali, su{' '}
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
