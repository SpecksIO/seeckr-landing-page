import type { ReactNode } from 'react'

/** Gabarit sobre des pages légales : un titre, des sections lisibles. */
export function LegalPage({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <article className="px-4 py-[clamp(3rem,8vw,6rem)] sm:px-6">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="font-display font-semibold text-[clamp(2rem,5vw,3rem)] leading-tight tracking-tight">
          {title}
        </h1>
        <div className="mt-12 space-y-10 text-violet-100 leading-relaxed [&_h2]:mb-3 [&_h2]:font-display [&_h2]:font-semibold [&_h2]:text-white [&_h2]:text-xl [&_li]:mt-1 [&_p+p]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
          {children}
        </div>
      </div>
    </article>
  )
}
