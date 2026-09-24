/** Une question de l'assistant, telle que le visiteur la voit. */
export type ConversationStep = {
  /** Étiquette d'avancement affichée en haut de la carte. */
  stage: string
  /** Reformulation de la réponse précédente, avant la question. */
  intro?: string
  question: string
  choices: string[]
  /** Index du choix que le visiteur sélectionne dans l'exemple. */
  picked: number
}

/** Produit du top 3. Seul le premier porte son pourquoi. */
export type Recommendation = {
  name: string
  /** Score de compatibilité illustratif, sur 100. */
  score: number
  why?: string
}

export type Conversation = {
  steps: ConversationStep[]
  top: Recommendation[]
}

/** Un emplacement possible de l'assistant sur le site du marchand. */
export type Placement = {
  id: string
  name: string
  text: string
}

export type Vertical = {
  slug: string
  name: string
  /** Une ligne pour la carte de la verticale sur l'accueil. */
  teaser: string
  meta: { title: string; description: string }
  hero: { title: string; intro: string }
  contrast: {
    pairs: { visitor: string; sheet: string }[]
    closing: string
  }
  conversation: Conversation & { title: string }
  /** Titre de la section bénéfices. Le `meta.title` sert au SEO, pas au lecteur. */
  benefitsTitle: string
  benefits: { title: string; text: string }[]
  /** Ce que le métier doit prouver à son auditeur, quand il en a un. */
  compliance?: {
    eyebrow: string
    title: string
    intro: string
    items: { title: string; text: string }[]
  }
  /** Affiche le cas Algimouss complet. */
  showAlgimouss?: boolean
}
