'use client'

import Image from 'next/image'
import { useState } from 'react'

/**
 * La démo YouTube du hero. Tant qu'on n'a pas cliqué, seule l'affiche locale
 * s'affiche : aucun script ni cookie YouTube ne charge avec la page.
 */
export function HeroVideo({ id, label }: { id: string; label: string }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-paper">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={label}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          className="absolute inset-0 size-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={label}
          className="group absolute inset-0 cursor-pointer"
        >
          <Image
            src="/media/demo-valisol.jpg"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 32rem, 100vw"
            className="object-cover"
          />
          <span
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 grid size-16 -translate-1/2 place-items-center rounded-full bg-violet/90 text-2xl text-white transition group-hover:scale-110"
          >
            ▶
          </span>
        </button>
      )}
    </div>
  )
}
