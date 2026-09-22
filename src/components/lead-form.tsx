'use client'

import Link from 'next/link'
import { useActionState, useEffect, useRef } from 'react'
import { submitLead } from '@/app/mon-seeckr/actions'
import { button } from '@/components/styles'
import type { LeadField, LeadState } from '@/lib/lead'
import { cta } from '@/lib/site'

const fields: {
  name: LeadField
  label: string
  type: string
  autoComplete: string
  inputMode?: 'url'
  placeholder?: string
}[] = [
  {
    name: 'site',
    label: 'Site internet',
    type: 'text',
    autoComplete: 'url',
    inputMode: 'url',
    placeholder: 'maboutique.fr',
  },
  {
    name: 'email',
    label: 'E-mail professionnel',
    type: 'email',
    autoComplete: 'email',
    placeholder: 'prenom@maboutique.fr',
  },
  {
    name: 'phone',
    label: 'Téléphone professionnel',
    type: 'tel',
    autoComplete: 'tel',
  },
]

/**
 * Formulaire du Seeckr personnalisé. Il passe par une action serveur :
 * sans JavaScript, le navigateur l'envoie et la page revient avec le résultat.
 */
export function LeadForm() {
  const [state, formAction, pending] = useActionState<LeadState, FormData>(
    submitLead,
    { status: 'idle' }
  )
  const confirmation = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (state.status === 'sent') confirmation.current?.focus()
  }, [state.status])

  if (state.status === 'sent') {
    return (
      <div
        ref={confirmation}
        tabIndex={-1}
        role="status"
        className="rounded-2xl bg-white p-6 text-text outline-none sm:p-8"
      >
        <p className="font-display font-semibold text-2xl text-ink">
          Merci, votre demande est bien arrivée.
        </p>
        <p className="mt-3 text-text-soft leading-relaxed">
          Nous construisons votre Seeckr sur votre catalogue, puis nous revenons
          vers vous pour vous le présenter.
        </p>
      </div>
    )
  }

  const values = state.status === 'idle' ? undefined : state.values
  const errors = state.status === 'idle' ? {} : state.errors

  return (
    <form
      action={formAction}
      className="rounded-2xl bg-white p-6 text-text sm:p-8"
    >
      {state.status === 'invalid' && (
        <p
          role="alert"
          className="mb-6 rounded-lg bg-mist p-4 text-ink text-sm"
        >
          Il manque une information ou l'une d'elles est incomplète : vérifiez
          les champs signalés.
        </p>
      )}
      {state.status === 'failed' && (
        <p
          role="alert"
          className="mb-6 rounded-lg bg-mist p-4 text-ink text-sm"
        >
          Votre demande n'a pas pu partir. Réessayez dans un instant.
        </p>
      )}

      <div className="space-y-5">
        {fields.map((field) => {
          const error = errors[field.name]
          return (
            <div key={field.name}>
              <label
                htmlFor={field.name}
                className="block font-medium text-ink text-sm"
              >
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                autoComplete={field.autoComplete}
                inputMode={field.inputMode}
                placeholder={field.placeholder}
                defaultValue={values?.[field.name]}
                required
                maxLength={200}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? `${field.name}-error` : undefined}
                className="mt-2 block min-h-12 w-full rounded-lg border border-line bg-white px-4 text-base text-text placeholder:text-meta focus:border-violet focus:outline-2 focus:outline-violet-100 aria-invalid:border-violet"
              />
              {error && (
                <p
                  id={`${field.name}-error`}
                  className="mt-2 text-sm text-violet"
                >
                  {error}
                </p>
              )}
            </div>
          )
        })}
      </div>

      {/* Champ piège : invisible, hors du parcours clavier et des lecteurs d'écran. */}
      <div
        aria-hidden="true"
        className="absolute -left-[10000px] size-px overflow-hidden"
      >
        <label>
          Entreprise
          <input
            type="text"
            name="entreprise"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={pending}
        className={`${button('primary')} mt-8 w-full disabled:opacity-70`}
      >
        {pending ? 'Envoi en cours…' : cta.label}
      </button>
      <p className="mt-4 text-sm text-text-soft leading-relaxed">
        Vos coordonnées servent uniquement à fabriquer et vous présenter votre
        Seeckr. Jamais revendues, aucune newsletter sans votre accord.
      </p>
      <p className="mt-2 text-sm">
        <Link
          href="/confidentialite"
          className="text-violet underline underline-offset-4"
        >
          Politique de confidentialité
        </Link>
      </p>
    </form>
  )
}
