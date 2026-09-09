import type { Graph } from 'schema-dts'

/**
 * Renders a Schema.org graph as a JSON-LD script tag.
 * `<` is escaped so structured data can never close the script element early.
 */
export function JsonLd({ graph }: { graph: Graph }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, '\\u003c'),
      }}
    />
  )
}
