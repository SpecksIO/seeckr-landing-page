"""Les textes de la vidéo, par langue du site.

Trois sources :
- le site, lu dans `src/content/<lang>` : la valeur du chiffre Algimouss
  « 1 sur 3 » et le bouton d'appel (cf. `site_texts`) ;
- l'assistant : ses libellés (`ui`) sont recopiés de `core/visitor-strings.ts`
  et `core/visitor-strings.intl.ts` du dépôt seeckr (anglais britannique,
  comme le site) ;
- la vidéo elle-même, pour tout le reste.

L'exemple est une boutique de puériculture : un achat cher, où l'on hésite,
et des questions qui portent sur la vie du parent (trajets, escaliers,
coffre), jamais sur une ligne de fiche produit. Les produits sont des
exemples, aucun catalogue réel.
"""

import json
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def site_texts(lang):
    """Le chiffre Algimouss « réorientés vers le bon produit » et le bouton d'appel du site."""
    script = (
        f"const a = await import('./src/content/{lang}/algimouss.ts');"
        f"const u = await import('./src/content/{lang}/ui.ts');"
        "console.log(JSON.stringify({figure: a.algimouss.figures.redirected.value, cta: u.site.cta.shortLabel}))"
    )
    out = subprocess.run(
        ["node", "--no-warnings", "--input-type=module", "-e", script],
        cwd=ROOT, capture_output=True, text=True, check=True,
    )
    return json.loads(out.stdout)


TEXTS = {
    "fr": {
        "clock": "SAMEDI · 21 H 47 · SERVICE CLIENT FERMÉ",
        "doubt": "Laquelle de ces poussettes est faite pour nous ?",
        "lost": ("Une vente", "perdue."),
        "unheard": ("Un besoin.", "Personne pour l'écouter."),
        "captions": {
            "setup": "Seeckr apparaît sur vos fiches produit.",
            "asking": "Il parle de sa vie, pas de la fiche technique.",
            "telling": "Un top 3 classé, et le pourquoi de chaque choix.",
            "reading": "Leurs mots, pour vos fiches et vos campagnes.",
        },
        "page": {"crumbs": ("Accueil", "Poussettes"), "tag": "Puériculture"},
        "banner": ("S'agit-il du bon produit pour vous ? Je vous guide en 2 minutes.", "Vérifier"),
        "brand": "Votre marque",
        "steps": [
            {
                "question": "Au quotidien, vous vous déplacez comment avec bébé ?",
                "chips": ["Surtout à pied, en ville", "Beaucoup en voiture", "Ça dépend des jours"],
                "picked": 0,
            },
            {
                "lead": "À pied en ville, donc trottoirs, bus et portes étroites.",
                "question": "Chez vous, il y a des escaliers à monter ?",
                "chips": ["Un 3e sans ascenseur", "Quelques marches", "Non, de plain-pied"],
                "picked": 0,
            },
        ],
        "products": ["Poussette Citadine Compacte", "Poussette Tout-Terrain", "Combiné Trio Confort"],
        "why": "Elle se plie d'une main et se porte sans effort : vos trois étages ne seront plus un sujet.",
        "pct": "{} %",
        "inbox": ("Votre back office", "Ce que disent vos visiteurs"),
        "time": "21 h 47",
        "voices": [
            "« On habite au 3e sans ascenseur, il nous faut une poussette légère. »",
            "« Elle doit rentrer dans le coffre d'une Clio. »",
        ],
        "proof": ("des visiteurs regardaient le mauvais produit. Seeckr les a remis sur le bon.",
                  "Algimouss, fabricant français, en moins de deux mois"),
        "tagline": ("Seeckr conseille.", "Vos visiteurs achètent."),
        "ui": {
            "phases": ["On fait connaissance", "On comprend votre situation"],
            "ready": "On a trouvé votre produit",
            "answer": "Répondez pour commencer",
            "skip": "Passer",
            "other": "Autre",
            "top3": "Votre top 3",
            "recommended": "Recommandé",
            "others": "Autres choix",
            "compatible": "compatible",
            "cart": "Ajouter au panier",
        },
    },
    "en": {
        "clock": "SATURDAY · 9:47 PM · CUSTOMER SERVICE CLOSED",
        "doubt": "Which of these pushchairs is right for us?",
        "lost": ("A lost", "sale."),
        "unheard": ("A need.", "Nobody there to listen."),
        "captions": {
            "setup": "Seeckr appears on your product pages.",
            "asking": "Visitors talk about their life, not the spec sheet.",
            "telling": "Their top 3, ranked and explained.",
            "reading": "Their words, for your product pages and campaigns.",
        },
        "page": {"crumbs": ("Home", "Pushchairs"), "tag": "Nursery"},
        "banner": ("Is this the right product for you? I'll guide you in 2 minutes.", "Check"),
        "brand": "Your brand",
        "steps": [
            {
                "question": "Day to day, how do you get around with your baby?",
                "chips": ["Mostly on foot, in town", "Mostly by car", "It depends on the day"],
                "picked": 0,
            },
            {
                "lead": "On foot in town: pavements, buses and narrow doorways.",
                "question": "Are there stairs to climb at home?",
                "chips": ["Third floor, no lift", "A few steps", "No, all on one level"],
                "picked": 0,
            },
        ],
        "products": ["Compact City Pushchair", "All-Terrain Pushchair", "Comfort Travel System"],
        "why": "It folds with one hand and is easy to carry: your three flights of stairs are no longer an issue.",
        "pct": "{}%",
        "inbox": ("Your back office", "What your visitors say"),
        "time": "9:47 PM",
        "voices": [
            "“We live on the third floor with no lift, so we need a light pushchair.”",
            "“It has to fit in the boot of a Corsa.”",
        ],
        "proof": ("visitors were looking at the wrong product. Seeckr put them on the right one.",
                  "Algimouss, French manufacturer, in under two months"),
        "tagline": ("Seeckr advises.", "Your visitors buy."),
        "ui": {
            "phases": ["Getting to know you", "Understanding your situation"],
            "ready": "We’ve found your product",
            "answer": "Answer to begin",
            "skip": "Skip",
            "other": "Other",
            "top3": "Your top 3",
            "recommended": "Recommended",
            "others": "Other options",
            "compatible": "match",
            "cart": "Add to basket",
        },
    },
    "es": {
        "clock": "SÁBADO · 21:47 · ATENCIÓN AL CLIENTE CERRADA",
        "doubt": "¿Cuál de estos carritos es para nosotros?",
        "lost": ("Una venta", "perdida."),
        "unheard": ("Una duda.", "Nadie para responderla."),
        "captions": {
            "setup": "Seeckr aparece en tus fichas de producto.",
            "asking": "Tu cliente habla de su día a día, no de la ficha técnica.",
            "telling": "Su top 3, ordenado y explicado.",
            "reading": "Sus palabras, para tus fichas y tus campañas.",
        },
        "page": {"crumbs": ("Inicio", "Carritos"), "tag": "Puericultura"},
        "banner": ("¿Es el producto adecuado para ti? Te guío en 2 minutos.", "Empezar"),
        "brand": "Tu marca",
        "steps": [
            {
                "question": "En el día a día, ¿cómo te mueves con el bebé?",
                "chips": ["Sobre todo a pie, por la ciudad", "Casi siempre en coche", "Depende del día"],
                "picked": 0,
            },
            {
                "lead": "A pie por la ciudad: aceras, autobuses y puertas estrechas.",
                "question": "¿Tienes escaleras que subir en casa?",
                "chips": ["Un tercero sin ascensor", "Unos pocos escalones", "No, todo en una planta"],
                "picked": 0,
            },
        ],
        "products": ["Carrito Urbano Compacto", "Carrito Todoterreno", "Trío Confort"],
        "why": "Se pliega con una mano y se lleva sin esfuerzo: tus tres pisos dejan de ser un problema.",
        "pct": "{} %",
        "inbox": ("Tu panel de control", "Lo que dicen tus clientes"),
        "time": "21:47",
        "voices": [
            "«Vivimos en un tercero sin ascensor, necesitamos un carrito ligero.»",
            "«Tiene que caber en el maletero de un Ibiza.»",
        ],
        "proof": ("de los clientes miraban el producto equivocado. Seeckr los llevó al adecuado.",
                  "Algimouss, fabricante francés, en menos de dos meses"),
        "tagline": ("Seeckr asesora.", "Tus clientes compran."),
        "ui": {
            "phases": ["Nos conocemos", "Entendemos tu situación"],
            "ready": "Hemos encontrado tu producto",
            "answer": "Responde para empezar",
            "skip": "Saltar",
            "other": "Otro",
            "top3": "Tu top 3",
            "recommended": "Recomendado",
            "others": "Otras opciones",
            "compatible": "compatible",
            "cart": "Añadir al carrito",
        },
    },
    "it": {
        "clock": "SABATO · 21:47 · SERVIZIO CLIENTI CHIUSO",
        "doubt": "Quale di questi passeggini fa per noi?",
        "lost": ("Una vendita", "persa."),
        "unheard": ("Una domanda.", "Nessuno a rispondere."),
        "captions": {
            "setup": "Seeckr compare sulle tue schede prodotto.",
            "asking": "Il cliente parla della sua vita, non della scheda tecnica.",
            "telling": "I 3 prodotti più adatti, in ordine, con il perché.",
            "reading": "Le loro parole, per le tue schede e le tue campagne.",
        },
        "page": {"crumbs": ("Home", "Passeggini"), "tag": "Prima infanzia"},
        "banner": ("È il prodotto giusto per te? Ti guido in 2 minuti.", "Scoprilo"),
        "brand": "Il tuo marchio",
        "steps": [
            {
                "question": "Nella vita di tutti i giorni, come ti sposti con il bambino?",
                "chips": ["Soprattutto a piedi, in città", "Quasi sempre in auto", "Dipende dal giorno"],
                "picked": 0,
            },
            {
                "lead": "A piedi in città: marciapiedi, autobus e porte strette.",
                "question": "A casa hai delle scale da fare?",
                "chips": ["Terzo piano senza ascensore", "Qualche gradino", "No, tutto su un piano"],
                "picked": 0,
            },
        ],
        "products": ["Passeggino Compatto Città", "Passeggino Fuoristrada", "Trio Comfort"],
        "why": "Si chiude con una mano e si porta senza fatica: i tuoi tre piani non sono più un problema.",
        "pct": "{}%",
        "inbox": ("Il tuo back office", "Cosa dicono i tuoi clienti"),
        "time": "21:47",
        "voices": [
            "«Abitiamo al terzo piano senza ascensore, ci serve un passeggino leggero.»",
            "«Deve entrare nel bagagliaio di una Panda.»",
        ],
        "proof": ("dei visitatori guardava il prodotto sbagliato. Seeckr li ha portati su quello giusto.",
                  "Algimouss, produttore francese, in meno di due mesi"),
        "tagline": ("Seeckr consiglia.", "I tuoi clienti comprano."),
        "ui": {
            "phases": ["Facciamo conoscenza", "Capiamo la tua situazione"],
            "ready": "Abbiamo trovato il tuo prodotto",
            "answer": "Rispondi per iniziare",
            "skip": "Salta",
            "other": "Altro",
            "top3": "La tua top 3",
            "recommended": "Consigliato",
            "others": "Altre scelte",
            "compatible": "compatibile",
            "cart": "Aggiungi al carrello",
        },
    },
}
