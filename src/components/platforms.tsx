import Image from 'next/image'

/**
 * Les noms de marque ne se traduisent pas : ils vivent ici, pas dans le dictionnaire.
 * `width` pour 24 px de haut. Un logo `wordmark` écrit déjà le nom : on ne le répète pas.
 */
const platforms = [
  { id: 'shopify', name: 'Shopify', width: 24, wordmark: false },
  { id: 'prestashop', name: 'PrestaShop', width: 24, wordmark: false },
  { id: 'woocommerce', name: 'WooCommerce', width: 119, wordmark: true },
  { id: 'magento', name: 'Magento', width: 24, wordmark: false },
  { id: 'wix', name: 'Wix', width: 62, wordmark: true },
]

/** Le bandeau de logos qui rassure : la ligne de script marche partout. */
export function Platforms({ label }: { label: string }) {
  return (
    <div className="reveal mt-14 flex flex-col gap-8 border-white/15 border-t pt-10">
      <p className="max-w-3xl text-violet-200 leading-relaxed">{label}</p>
      <ul className="flex flex-wrap items-center gap-x-8 gap-y-4">
        {platforms.map((platform) => (
          <li
            key={platform.id}
            className="flex items-center gap-2.5 font-display font-semibold text-violet-200"
          >
            <Image
              src={`/media/logos/${platform.id}.svg`}
              alt={platform.wordmark ? platform.name : ''}
              width={platform.width}
              height={24}
              className="h-6 w-auto"
            />
            {!platform.wordmark && platform.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
