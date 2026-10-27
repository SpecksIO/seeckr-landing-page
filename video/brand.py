"""La charte Seeckr en Pillow : couleurs, polices, logo, autocollants.

Repris du board de la charte (dépôt seeckr, `tmp-charte/board.py`), réduit à
ce que la vidéo de l'accueil utilise.
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

FONTS = Path(__file__).resolve().parent / "fonts"

# Les violets de la charte (docs/brand du dépôt seeckr).
PURPLE_900 = "#16113A"
PURPLE_800 = "#26215C"
PURPLE_600 = "#534AB7"
PURPLE_400 = "#7F77DD"
PURPLE_200 = "#AFA9EC"
PURPLE_100 = "#CECBF6"
PURPLE_50 = "#EEEDFE"
INK = "#16151A"
GREY = "#6B6862"
MUTED = "#888780"
SAND = "#F1EFE8"  # la surface de travail du back office
BG = PURPLE_900


def poppins(size, weight="Medium"):
    return ImageFont.truetype(str(FONTS / f"Poppins-{weight}.ttf"), size)


def inter(size, weight="Regular"):
    f = ImageFont.truetype(str(FONTS / "Inter.ttf"), size)
    f.set_variation_by_name(weight)
    return f


def pacifico(size):
    return ImageFont.truetype(str(FONTS / "Pacifico-Regular.ttf"), size)


# ---------------------------------------------------------------- outils


def clamp(v):
    return max(0.0, min(1.0, v))


def smoothstep(t):
    return t * t * (3 - 2 * t)


def ease_out(t):
    return 1 - (1 - t) ** 3


def ease_back(t):
    """Sortie avec un léger dépassement, qui donne le « pop »."""
    c1, c3 = 1.70158, 2.70158
    return 1 + c3 * (t - 1) ** 3 + c1 * (t - 1) ** 2


def fade(layer, alpha):
    layer.putalpha(layer.getchannel("A").point(lambda v: round(v * alpha)))
    return layer


def wrap(text, font, max_w):
    # La ponctuation haute du français reste collée à son mot : jamais de « ? » seul en début de ligne.
    words = []
    for word in text.split(" "):
        if words and word in ("?", "!", ":", ";", "»"):
            words[-1] += " " + word
        elif words and words[-1] == "«":
            words[-1] += " " + word
        else:
            words.append(word)
    lines, cur = [], ""
    for word in words:
        trial = f"{cur} {word}".strip()
        if cur and font.getlength(trial) > max_w:
            lines.append(cur)
            cur = word
        else:
            cur = trial
    return lines + [cur] if cur else lines


def balanced(text, font, max_w):
    """Même nombre de lignes que `wrap`, mais de longueurs voisines : pas de mot seul en fin."""
    n = len(wrap(text, font, max_w))
    lines = wrap(text, font, font.getlength(text) / n * 1.1)
    return lines if len(lines) == n else wrap(text, font, max_w)


def fit(text, size, max_w, weight="Bold"):
    """Réduit le corps jusqu'à ce que la ligne tienne dans la largeur."""
    f = poppins(size, weight)
    while f.getlength(text) > max_w and size > 12:
        size -= 2
        f = poppins(size, weight)
    return f


def card(w, h, fill, radius=56):
    im = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    ImageDraw.Draw(im).rounded_rectangle((0, 0, w - 1, h - 1), radius, fill=fill)
    return im


def tracked(d, x, y, s, font, fill, track):
    """Ligne centrée sur `x`, avec interlettrage, pour les labels en capitales."""
    x -= (sum(d.textlength(c, font=font) + track for c in s) - track) / 2
    for c in s:
        d.text((x, y), c, font=font, fill=fill, anchor="ls")
        x += d.textlength(c, font=font) + track


# ---------------------------------------------------------------- logo

# Le tracé du cœur, recopié de components/SeeckrMark.tsx (viewBox 48).
_HEART = [
    ((13.7, 21.4), (13.7, 14.6), (24.0, 19.7)),
    ((24.0, 19.7), (34.3, 14.6), (34.3, 21.4)),
    ((34.3, 21.4), (34.3, 29.1), (24.0, 33.4)),
    ((24.0, 33.4), (13.7, 29.1), (13.7, 21.4)),
]


def _heart_points(k):
    pts = []
    for p0, p1, p2 in _HEART:
        for i in range(24):
            t = i / 24
            u = 1 - t
            pts.append(
                (
                    (u * u * p0[0] + 2 * u * t * p1[0] + t * t * p2[0]) * k,
                    (u * u * p0[1] + 2 * u * t * p1[1] + t * t * p2[1]) * k,
                )
            )
    return pts


def mark(size, color=PURPLE_200):
    """Le logo Seeckr : cercle et cœur, monochrome."""
    s = 1024
    k = s / 48
    im = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    d.ellipse((4 * k, 4 * k, 44 * k, 44 * k), outline=color, width=round(2.4 * k))
    d.polygon(_heart_points(k), fill=color)
    return im.resize((size, size), Image.LANCZOS)


def logo(height, color=PURPLE_50, mark_color=PURPLE_200):
    """Le verrou horizontal : la marque, puis le wordmark."""
    m = mark(height, mark_color)
    f = pacifico(round(height * 1.02))
    box = f.getbbox("seeckr")
    gap = round(height * 0.34)
    im = Image.new("RGBA", (height + gap + box[2] - box[0], round(height * 1.5)), (0, 0, 0, 0))
    im.alpha_composite(m, (0, round(height * 0.25)))
    ImageDraw.Draw(im).text((height + gap - box[0], round(height * 0.92)), "seeckr", font=f, fill=color, anchor="ls")
    return im


def app_icon(size, bg=PURPLE_800, fg=PURPLE_100):
    """La variante pastille, celle du favicon."""
    im = card(size, size, bg, radius=round(size * 46 / 256))
    inner = mark(round(size * 0.7), fg)
    im.alpha_composite(inner, ((size - inner.width) // 2, (size - inner.height) // 2))
    return im


def heart_badge(size, bg=PURPLE_800, fg="#FFFFFF", ratio=0.5):
    """La pastille ronde de l'assistant : cercle plein, cœur en réserve."""
    im = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    d.ellipse((0, 0, size - 1, size - 1), fill=bg)
    pts = _heart_points(1)
    xs, ys = [p[0] for p in pts], [p[1] for p in pts]
    k = ratio * size / (max(xs) - min(xs))
    cx, cy = (max(xs) + min(xs)) / 2, (max(ys) + min(ys)) / 2
    d.polygon([((x - cx) * k + size / 2, (y - cy) * k + size / 2) for x, y in pts], fill=fg)
    return im


# ---------------------------------------------------------------- autocollants


def sticker_word(text, size, fg=PURPLE_800):
    """Découpe qui suit le lettrage : le blanc épouse le tracé des lettres."""
    f = pacifico(size)
    box = f.getbbox(text)
    pad = round(size * 0.42)
    w, h = box[2] - box[0] + pad * 2, box[3] - box[1] + pad * 2
    letters = Image.new("L", (w, h), 0)
    ImageDraw.Draw(letters).text((pad - box[0], pad - box[1]), text, font=f, fill=255)
    edge = letters.filter(ImageFilter.GaussianBlur(size * 0.1))
    edge = edge.point(lambda v: 255 if v > 24 else 0).filter(ImageFilter.GaussianBlur(2))
    im = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    im.paste(Image.new("RGB", (w, h), "#FFFFFF"), (0, 0), edge)
    im.paste(Image.new("RGB", (w, h), fg), (0, 0), letters)
    return im


def sticker_pill(text, size, fg, bg, script=True, weight="SemiBold"):
    """Pastille de texte cernée de blanc, comme une découpe d'autocollant."""
    f = pacifico(size) if script else poppins(size, weight)
    box = f.getbbox(text)
    w = round(box[2] - box[0] + size * 1.3)
    h = round(size * (2.0 if script else 1.9))
    edge = round(size * 0.15)
    im = Image.new("RGBA", (w + edge * 2, h + edge * 2), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    d.rounded_rectangle((0, 0, im.width - 1, im.height - 1), im.height / 2, fill="#FFFFFF")
    d.rounded_rectangle((edge, edge, edge + w - 1, edge + h - 1), h / 2, fill=bg)
    d.text((im.width / 2, im.height / 2 - (size * 0.08 if script else 0)), text, font=f, fill=fg, anchor="mm")
    return im


def sticker_icon(size, bg=PURPLE_800, fg=PURPLE_100):
    edge = round(size * 0.1)
    full = size + edge * 2
    im = Image.new("RGBA", (full, full), (0, 0, 0, 0))
    ImageDraw.Draw(im).rounded_rectangle((0, 0, full - 1, full - 1), full * 46 / 256, fill="#FFFFFF")
    im.alpha_composite(app_icon(size, bg, fg), (edge, edge))
    return im


def sticker_badge(size, bg=PURPLE_800, fg=PURPLE_50):
    edge = round(size * 0.09)
    im = Image.new("RGBA", (size + edge * 2, size + edge * 2), (0, 0, 0, 0))
    ImageDraw.Draw(im).ellipse((0, 0, im.width - 1, im.height - 1), fill="#FFFFFF")
    im.alpha_composite(heart_badge(size, bg, fg), (edge, edge))
    return im


def cursor(height=96):
    """La flèche de la souris, blanche cernée de noir."""
    k = height / 24
    pts = [(0, 0), (0, 19), (4.6, 14.8), (7.6, 21.6), (10.6, 20.3), (7.7, 13.6), (13.6, 13.4)]
    im = Image.new("RGBA", (round(16 * k), round(25 * k)), (0, 0, 0, 0))
    ImageDraw.Draw(im).polygon(
        [(x * k + 4, y * k + 4) for x, y in pts], fill="#FFFFFF", outline=INK, width=round(k * 1.2)
    )
    return im
