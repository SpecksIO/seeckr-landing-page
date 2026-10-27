# /// script
# requires-python = ">=3.12"
# dependencies = ["pillow"]
# ///
"""La vidéo du hero de l'accueil : carrée, muette, en boucle, une par langue.

Elle parle au directeur marketing qui découvre le site. Sept actes :
1. le visiteur perdu, un samedi soir, service client fermé, qui ferme l'onglet ;
2. « Une vente perdue » ;
3. le bandeau Seeckr qui apparaît sur la fiche produit ;
4. deux questions sur sa vie, puis le top 3 et l'ajout au panier ;
5. le back office du marchand : ce que disent ses visiteurs, avec leurs mots ;
6. la preuve Algimouss : un visiteur sur trois remis sur le bon produit ;
7. la signature, l'appel à l'action et les autocollants.

    uv run video/video.py fr          # public/media/demo-produit-fr.mp4 et .jpg
    uv run video/video.py fr --fast   # video/preview-fr.mp4, rendu de contrôle

Le dessin se fait en 2160 px et l'encodage en 1080 : le hero ne l'affiche
jamais à plus de 560 px de large.
"""

import math
import subprocess
import sys
from pathlib import Path

from PIL import Image, ImageDraw

import panel
from brand import (BG, GREY, INK, PURPLE_100, PURPLE_200, PURPLE_400, PURPLE_50, PURPLE_600, PURPLE_800, SAND,
                   balanced, card, clamp, cursor, ease_back, fade, fit, heart_badge, inter, logo, poppins,
                   smoothstep, sticker_badge, sticker_icon, sticker_pill, sticker_word, tracked, wrap)
from texts import TEXTS, site_texts

ROOT = Path(__file__).resolve().parent
MEDIA = ROOT.parent / "public" / "media"

SIZE = 2160
OUT = 1080
FPS = 25
FADE = 8  # entrée et sortie de chaque acte, en images

LOST = 4.6
UNHEARD = 2.6
SETUP = 2.6
ENTRY = 0.4
READING = 3.8
PROOF = 2.8
CLOSING = 3.6

ARROW = cursor(110)


def frames_of(seconds):
    return round(seconds * FPS)


def layer():
    return Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))


def drop(frame, im, alpha=1.0, xy=(0, 0)):
    """Pose un calque sur l'image, à l'opacité voulue."""
    if alpha <= 0:
        return
    im = fade(im.copy(), alpha) if alpha < 1 else im
    frame.paste(im, xy, im)


def pop(im, p):
    """L'élément grossit avec un léger rebond en apparaissant."""
    k = 0.85 + 0.15 * ease_back(p)
    return fade(im.resize((max(1, round(im.width * k)), max(1, round(im.height * k))), Image.LANCZOS), clamp(p * 1.8))


def centered(frame, im, cx, cy, alpha=1.0):
    drop(frame, im, alpha, (round(cx - im.width / 2), round(cy - im.height / 2)))


def path(t, keys):
    """Position sur une suite de points (seconde, x, y), adoucie entre deux."""
    if t <= keys[0][0]:
        return keys[0][1:]
    for (t0, x0, y0), (t1, x1, y1) in zip(keys, keys[1:]):
        if t <= t1:
            p = smoothstep((t - t0) / (t1 - t0))
            return x0 + (x1 - x0) * p, y0 + (y1 - y0) * p
    return keys[-1][1:]


def caption(d, text, y, fill):
    """La légende d'un écran : une phrase, assez grande pour se lire en petit."""
    f = poppins(64, "Medium")
    for line in balanced(text, f, SIZE * 0.84):
        d.text((SIZE / 2, y), line, font=f, fill=fill, anchor="ms")
        y += 84


def veil(gen, total, bg_in, bg_out):
    """Fait entrer et sortir un acte en fondu, sur le fond de l'acte voisin."""
    first = Image.new("RGB", (SIZE, SIZE), bg_in)
    last = Image.new("RGB", (SIZE, SIZE), bg_out)
    for i, frame in enumerate(gen):
        if i < FADE:
            frame = Image.blend(first, frame, (i + 1) / FADE)
        elif i >= total - FADE:
            frame = Image.blend(last, frame, max(0, total - i) / FADE)
        yield frame


# ---------------------------------------------------------------- 1. le visiteur perdu

WIN = (200, 400, 1960, 1760)  # la fenêtre du navigateur
TAB_CLOSE = (WIN[0] + 640, WIN[1] + 62)
COLS, ROWS = 4, 3


def product_icon(w, h, kind=0):
    """Une poussette en aplats, en trois variantes qui se ressemblent : le catalogue sans marque."""
    im = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    s = min(w, h)
    cx, base = w / 2, h / 2 + s * 0.42
    line = round(s * 0.035)
    r = s * (0.1 if kind == 2 else 0.08)
    rear, front = cx - s * 0.2, cx + s * 0.2
    joint = (cx, base - s * 0.3)
    d.line((rear, base - r, *joint, front, base - r), fill=PURPLE_400, width=line, joint="curve")
    grip = (rear - s * 0.12, base - s * 0.8)
    d.line((*joint, *grip), fill=PURPLE_400, width=line)
    d.line((grip[0] - s * 0.08, grip[1], grip[0] + s * 0.02, grip[1]), fill=PURPLE_400, width=round(line * 1.4))
    for x in (rear, front):
        d.ellipse((x - r, base - 2 * r, x + r, base), fill=PURPLE_400)
        d.ellipse((x - r * 0.4, base - r * 1.4, x + r * 0.4, base - r * 0.6), fill=PURPLE_50)
    # La nacelle et sa capote : seule différence entre les modèles.
    top = base - s * (0.62 if kind == 1 else 0.56)
    d.rounded_rectangle((cx - s * 0.18, top, cx + s * 0.26, base - s * 0.3), s * 0.08, fill=PURPLE_100)
    hood = s * (0.2 if kind == 0 else 0.26)
    d.pieslice((cx - s * 0.18, top - hood, cx - s * 0.18 + 2 * hood, top + hood), 180, 270, fill=PURPLE_200)
    return im


def tiles():
    """Les cases de la grille produits, dans le repère de l'image."""
    x0, y0, x1 = WIN[0] + 80, WIN[1] + 360, WIN[2] - 80
    w = (x1 - x0 - (COLS - 1) * 40) / COLS
    h = 280
    return [
        (round(x0 + c * (w + 40)), round(y0 + r * (h + 36)), round(x0 + c * (w + 40) + w), round(y0 + r * (h + 36) + h))
        for r in range(ROWS) for c in range(COLS)
    ]


def browser():
    """La boutique vue par le visiteur : une grille de produits qui se ressemblent."""
    w, h = WIN[2] - WIN[0], WIN[3] - WIN[1]
    im = card(w, h, SAND, 40)
    d = ImageDraw.Draw(im)
    d.rounded_rectangle((0, 0, w - 1, 124), 40, fill="#E4E1D8")
    d.rectangle((0, 84, w - 1, 124), fill="#E4E1D8")
    for i in range(3):
        d.ellipse((44 + i * 44, 50, 70 + i * 44, 76), fill="#C9C5BA")
    d.rounded_rectangle((210, 26, 700, 124), 22, fill=SAND)
    d.rounded_rectangle((250, 58, 560, 72), 7, fill="#C9C5BA")
    cx, cy = TAB_CLOSE[0] - WIN[0], TAB_CLOSE[1] - WIN[1]
    d.line((cx - 14, cy - 14, cx + 14, cy + 14), fill=GREY, width=6)
    d.line((cx - 14, cy + 14, cx + 14, cy - 14), fill=GREY, width=6)
    d.rounded_rectangle((60, 160, w - 60, 224), 32, fill="#FFFFFF")
    d.rounded_rectangle((60, 270, 520, 300), 15, fill="#D9D5CB")
    for i, tw in enumerate((140, 120, 170, 120, 150)):
        x = 600 + i * 190
        d.rounded_rectangle((x, 268, x + tw, 302), 17, fill=PURPLE_200 if i == 0 else "#E4E1D8")
    for n, (x0, y0, x1, y1) in enumerate(tiles()):
        x0, y0, x1, y1 = x0 - WIN[0], y0 - WIN[1], x1 - WIN[0], y1 - WIN[1]
        d.rounded_rectangle((x0, y0, x1, y1), 26, fill="#FFFFFF")
        icon = product_icon(x1 - x0, 200, n % 3)
        im.alpha_composite(icon, (x0, y0 + 10))
        d.rounded_rectangle((x0 + 30, y1 - 64, x1 - 70, y1 - 46), 9, fill="#D9D5CB")
        d.rounded_rectangle((x0 + 30, y1 - 34, x0 + 150, y1 - 18), 8, fill="#E4E1D8")
    return im


def bubble(text):
    """La bulle du doute, au-dessus du produit survolé."""
    f = inter(54, "Medium")
    lines = wrap(text, f, 820)
    w = round(max(f.getlength(line) for line in lines) + 110)
    h = 70 * len(lines) + 80
    im = Image.new("RGBA", (w, h + 40), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    d.rounded_rectangle((0, 0, w - 1, h), 36, fill="#FFFFFF", outline="#DCD8F7", width=4)
    d.polygon([(90, h - 2), (150, h - 2), (100, h + 38)], fill="#FFFFFF")
    for i, line in enumerate(lines):
        d.text((55, 52 + i * 70), line, font=f, fill=INK, anchor="lm")
    return im


def lost(texts):
    base = Image.new("RGB", (SIZE, SIZE), BG)
    tracked(ImageDraw.Draw(base), SIZE / 2, 280, texts["clock"], fit(texts["clock"], 66, SIZE * 0.86, "Medium"), PURPLE_100, 8)
    window = browser()
    boxes = tiles()
    doubt = bubble(texts["doubt"])

    def centre(n):
        x0, y0, x1, y1 = boxes[n]
        return (x0 + x1) / 2 + 40, (y0 + y1) / 2 + 30

    keys = [(0.0, 1900, 2000), (0.6, *centre(6)), (1.2, *centre(1)), (1.8, *centre(11)), (2.4, *centre(5)),
            (3.0, *centre(5)), (3.5, *TAB_CLOSE)]
    for i in range(frames_of(LOST)):
        t = i / FPS
        frame = base.copy()
        close = smoothstep(clamp((t - 3.7) / 0.5))
        win = window
        if close > 0:
            k = 1 - 0.06 * close
            win = fade(window.resize((round(window.width * k), round(window.height * k)), Image.LANCZOS), 1 - close)
        centered(frame, win, (WIN[0] + WIN[2]) / 2, (WIN[1] + WIN[3]) / 2)
        x, y = path(t, keys)
        if close == 0:
            d = ImageDraw.Draw(frame)
            for x0, y0, x1, y1 in boxes:
                if x0 <= x - 40 <= x1 and y0 <= y - 30 <= y1:
                    d.rounded_rectangle((x0 - 6, y0 - 6, x1 + 6, y1 + 6), 30, outline=PURPLE_400, width=8)
            show = clamp((t - 1.0) / 0.3) * (1 - clamp((t - 3.1) / 0.25))
            if show > 0:
                drop(frame, pop(doubt, show), 1, (boxes[5][0] - 40, boxes[5][1] - doubt.height + 10))
        if t < 3.75:
            press = 0.9 if 3.55 < t < 3.7 else 1
            arrow = ARROW if press == 1 else ARROW.resize((round(ARROW.width * press), round(ARROW.height * press)))
            drop(frame, arrow, 1, (round(x), round(y)))
        yield frame


# ---------------------------------------------------------------- 2. une vente perdue


def unheard(texts):
    base = Image.new("RGB", (SIZE, SIZE), BG)
    big = poppins(170, "SemiBold")
    small = poppins(76, "Light")
    rows = [
        (0.0, texts["lost"][0], big, "#FFFFFF", 820),
        (0.15, texts["lost"][1], big, PURPLE_200, 1010),
        (0.9, texts["unheard"][0], small, PURPLE_100, 1300),
        (1.4, texts["unheard"][1], poppins(76, "Medium"), "#FFFFFF", 1400),
    ]
    for i in range(frames_of(UNHEARD)):
        t = i / FPS
        frame = base.copy()
        for delay, text, font, fill, y in rows:
            a = smoothstep(clamp((t - delay) / 0.45))
            im = layer()
            ImageDraw.Draw(im).text((SIZE / 2, y + (1 - a) * 24), text, font=font, fill=fill, anchor="ms")
            drop(frame, im, a)
        rule = smoothstep(clamp((t - 0.6) / 0.4))
        if rule > 0:
            ImageDraw.Draw(frame).line((SIZE / 2 - 80 * rule, 1140, SIZE / 2 + 80 * rule, 1140), fill=PURPLE_400, width=5)
        yield frame


# ---------------------------------------------------------------- 3. une ligne de script

PAGE = (200, 500, 1960, 1440)


def product_page(texts):
    """La fiche produit d'une boutique, sans la marque d'un client."""
    w, h = PAGE[2] - PAGE[0], PAGE[3] - PAGE[1]
    im = card(w, h, "#FFFFFF", 48)
    d = ImageDraw.Draw(im)
    d.rounded_rectangle((70, 70, 650, h - 70), 36, fill=SAND)
    im.alpha_composite(product_icon(580, 520), (70, round(h / 2 - 260)))
    x = 730
    crumbs = " › ".join((*texts["page"]["crumbs"], texts["products"][0]))
    d.text((x, 120), crumbs, font=fit(crumbs, 34, w - x - 70, "Medium"), fill=GREY, anchor="lm")
    tag = texts["page"]["tag"]
    tf = inter(34, "Medium")
    d.rounded_rectangle((x, 180, x + tf.getlength(tag) + 60, 246), 33, fill="#B9C9B1")
    d.text((x + 30, 213), tag, font=tf, fill="#FFFFFF", anchor="lm")
    nf = inter(70, "SemiBold")
    y = 340
    for line in wrap(texts["products"][0], nf, w - x - 70):
        d.text((x, y), line, font=nf, fill=INK, anchor="lm")
        y += 86
    return im, y


def banner(texts, width):
    """Le bandeau Seeckr : le seul aplat sombre de la fiche."""
    text, button = texts["banner"]
    bf = inter(38, "SemiBold")
    btn_w = round(bf.getlength(button) + 90)
    tf = inter(38, "Medium")
    lines = wrap(text, tf, width - btn_w - 230)
    h = max(200, 54 * len(lines) + 90)
    im = card(width, h, "#16151A", 32)
    d = ImageDraw.Draw(im)
    im.alpha_composite(heart_badge(76, "#FFFFFF", "#16151A"), (40, round(h / 2 - 38)))
    for i, line in enumerate(lines):
        d.text((150, h / 2 - 27 * (len(lines) - 1) + 54 * i), line, font=tf, fill="#FFFFFF", anchor="lm")
    bx = width - btn_w - 40
    d.rounded_rectangle((bx, h / 2 - 50, bx + btn_w, h / 2 + 50), 50, fill="#FFFFFF")
    d.text((bx + btn_w / 2, h / 2), button, font=bf, fill=INK, anchor="mm")
    return im, (bx + btn_w / 2, h / 2)


def setup(texts):
    base = Image.new("RGB", (SIZE, SIZE), SAND)
    lock = logo(84, color=PURPLE_800, mark_color=PURPLE_600)
    base.paste(lock, ((SIZE - lock.width) // 2, 150), lock)
    caption(ImageDraw.Draw(base), texts["captions"]["setup"], PAGE[3] + 170, PURPLE_800)
    page, title_bottom = product_page(texts)
    strip, button = banner(texts, PAGE[2] - PAGE[0] - 730 - 70)
    bx, by = PAGE[0] + 730, PAGE[1] + title_bottom + 40
    target = (bx + button[0], by + button[1])

    for i in range(frames_of(SETUP)):
        t = i / FPS
        frame = base.copy()
        # La fiche, puis le bandeau qui s'y pose.
        up = smoothstep(clamp((t - 0.2) / 0.4))
        drop(frame, page, up, (PAGE[0], round(PAGE[1] + (1 - up) * 26)))
        show = clamp((t - 0.8) / 0.35)
        if show > 0:
            centered(frame, pop(strip, show), bx + strip.width / 2, by + strip.height / 2)
            ring = smoothstep(clamp((t - 1.0) / 0.4))
            ImageDraw.Draw(frame).rounded_rectangle(
                (bx - 18, by - 18, bx + strip.width + 18, by + strip.height + 18), 44,
                outline=PURPLE_400, width=round(8 * ring * (0.75 + 0.25 * math.sin(t * 3.4))),
            )
        # Le visiteur clique le bouton du bandeau.
        if t > 1.3:
            x, y = path(t, [(1.3, 2000, 2000), (1.9, *target)])
            press = 0.9 if 1.95 < t < 2.1 else 1
            arrow = ARROW if press == 1 else ARROW.resize((round(ARROW.width * press), round(ARROW.height * press)))
            drop(frame, arrow, 1, (round(x), round(y)))
        yield frame


# ---------------------------------------------------------------- 4. la conversation

PANEL_XY = ((SIZE - panel.W) // 2, 470)


def stage(text, height=panel.H):
    """Le plateau violet : logo en tête, panneau au centre, légende dessous."""
    im = Image.new("RGB", (SIZE, SIZE), BG)
    lock = logo(84, color="#FFFFFF")
    im.paste(lock, ((SIZE - lock.width) // 2, 150), lock)
    caption(ImageDraw.Draw(im), text, PANEL_XY[1] + height + 150, PURPLE_100)
    return im


def result_frame(texts, telling, t):
    frame = telling.copy()
    drop(frame, panel.render_result(texts, t), 1, PANEL_XY)
    if t > 2.2:
        cx, cy = panel.cart_target()
        target = (PANEL_XY[0] + cx, PANEL_XY[1] + cy)
        x, y = path(t, [(2.2, 2000, 2050), (2.9, *target)])
        drop(frame, ARROW, 1, (round(x), round(y)))
    return frame


def demo(texts):
    asking = stage(texts["captions"]["asking"])
    telling = stage(texts["captions"]["telling"])

    entry = frames_of(ENTRY)
    for i in range(entry):
        p = smoothstep((i + 1) / entry)
        shot = panel.render(texts, 0, 0)
        k = 0.965 + 0.035 * p
        frame = asking.copy()
        centered(frame, shot.resize((round(panel.W * k), round(panel.H * k)), Image.LANCZOS),
                 PANEL_XY[0] + panel.W / 2, PANEL_XY[1] + panel.H / 2, p)
        yield frame

    for n in range(len(texts["steps"])):
        for i in range(frames_of(panel.STEP_SECONDS)):
            frame = asking.copy()
            drop(frame, panel.render(texts, n, i / FPS), 1, PANEL_XY)
            yield frame

    for i in range(frames_of(panel.RESULT_SECONDS)):
        yield result_frame(texts, telling, i / FPS)


# ---------------------------------------------------------------- 5. le back office


def reading(texts):
    w = panel.W
    rows = []
    qf = inter(62, "Medium")
    for quote in texts["voices"]:
        lines = wrap(quote, qf, w - 420)
        row = Image.new("RGBA", (w - 200, 170 + 80 * len(lines)), (0, 0, 0, 0))
        rd = ImageDraw.Draw(row)
        rd.rounded_rectangle((0, 0, row.width - 1, row.height - 1), 36, fill="#F7F5F0")
        row.alpha_composite(heart_badge(96, PURPLE_50, PURPLE_600), (50, 50))
        rd.text((190, 80), texts["time"], font=inter(40), fill=GREY, anchor="lm")
        for k, line in enumerate(lines):
            rd.text((190, 160 + 80 * k), line, font=qf, fill=INK, anchor="lm")
        rows.append(row)

    h = 300 + sum(row.height + 40 for row in rows) + 60
    sheet = card(w, h, "#FFFFFF", 56)
    d = ImageDraw.Draw(sheet)
    kicker, title = texts["inbox"]
    d.text((100, 110), kicker.upper(), font=inter(34, "SemiBold"), fill=PURPLE_600, anchor="lm")
    d.text((100, 185), title, font=inter(64, "SemiBold"), fill=INK, anchor="lm")
    d.line((100, 260, w - 100, 260), fill="#EDEAE4", width=4)
    base = stage(texts["captions"]["reading"], h)

    for i in range(frames_of(READING)):
        t = i / FPS
        frame = base.copy()
        up = smoothstep(clamp(t / 0.4))
        drop(frame, sheet, up, (PANEL_XY[0], round(PANEL_XY[1] + (1 - up) * 26)))
        y = PANEL_XY[1] + 310
        for n, row in enumerate(rows):
            p = clamp((t - 0.4 - 0.5 * n) / 0.35)
            if p > 0:
                centered(frame, pop(row, p), SIZE / 2, y + row.height / 2)
            y += row.height + 40
        yield frame


# ---------------------------------------------------------------- 6. la preuve


def proof(texts, value):
    """Le chiffre Algimouss, dit comme un commercial : vrai, mais qui frappe."""
    base = Image.new("RGB", (SIZE, SIZE), BG)
    im = layer()
    ImageDraw.Draw(im).text((SIZE / 2, SIZE / 2), value, font=fit(value, 340, SIZE * 0.86, "SemiBold"),
                            fill="#FFFFFF", anchor="mm")
    big = im.crop(im.getbbox())
    claim, source = texts["proof"]
    label = poppins(76, "Medium")
    lines = balanced(claim, label, SIZE * 0.8)

    for i in range(frames_of(PROOF)):
        t = i / FPS
        frame = base.copy()
        centered(frame, pop(big, clamp(t / 0.4)), SIZE / 2, 820)
        im = layer()
        d = ImageDraw.Draw(im)
        y = 1170
        for line in lines:
            d.text((SIZE / 2, y), line, font=label, fill=PURPLE_100, anchor="ms")
            y += 100
        d.text((SIZE / 2, y + 60), source, font=poppins(56, "Light"), fill=PURPLE_200, anchor="ms")
        drop(frame, im, smoothstep(clamp((t - 0.5) / 0.5)))
        yield frame


# ---------------------------------------------------------------- 7. la fin


def closing(texts, cta):
    base = Image.new("RGB", (SIZE, SIZE), BG)
    lock = logo(190, color="#FFFFFF")
    soft = fit(texts["tagline"][0], 76, SIZE * 0.8, "Light")
    hard = fit(texts["tagline"][1], 92, SIZE * 0.8, "SemiBold")
    bf = fit(cta, 56, SIZE * 0.7, "SemiBold")
    bw = round(bf.getlength(cta) + 140)
    button = card(bw, 140, PURPLE_600, 70)
    ImageDraw.Draw(button).text((bw / 2, 70), cta, font=bf, fill="#FFFFFF", anchor="mm")

    # Les autocollants, posés autour, hors de la bande du texte.
    stickers = [
        (sticker_icon(250), 110, 110, -11),
        (sticker_badge(210), 1760, 130, 0),
        (sticker_word("seeckr", 130, PURPLE_600), 900, 90, 6),
        (sticker_pill("top 3", 80, "#FFFFFF", PURPLE_800, script=False, weight="Bold"), 120, 1860, -7),
        (sticker_badge(170, bg=PURPLE_600, fg=PURPLE_50), 960, 1880, 8),
        (sticker_pill("seeckr", 100, PURPLE_800, "#FFFFFF"), 1460, 1830, 9),
    ]
    stickers = [(s.rotate(r, expand=True, resample=Image.BICUBIC), x, y) for s, x, y, r in stickers]

    for i in range(frames_of(CLOSING)):
        t = i / FPS
        frame = base.copy()
        up = smoothstep(clamp(t / 0.5))
        drop(frame, lock, up, ((SIZE - lock.width) // 2, round(560 + (1 - up) * 24)))
        im = layer()
        d = ImageDraw.Draw(im)
        d.text((SIZE / 2, 1150), texts["tagline"][0], font=soft, fill=PURPLE_100, anchor="ms")
        d.text((SIZE / 2, 1270), texts["tagline"][1], font=hard, fill="#FFFFFF", anchor="ms")
        drop(frame, im, smoothstep(clamp((t - 0.4) / 0.5)))
        p = clamp((t - 0.9) / 0.35)
        if p > 0:
            centered(frame, pop(button, p), SIZE / 2, 1490)
        for n, (s, x, y) in enumerate(stickers):
            p = clamp((t - 1.3 - 0.1 * n) / 0.3)
            if p > 0:
                centered(frame, pop(s, p), x + s.width / 2, y + s.height / 2)
        yield frame


# ---------------------------------------------------------------- montage


def acts(texts, site):
    demo_seconds = ENTRY + panel.STEP_SECONDS * len(texts["steps"]) + panel.RESULT_SECONDS
    return [
        (lost(texts), LOST, BG, BG),
        (unheard(texts), UNHEARD, BG, SAND),
        (setup(texts), SETUP, SAND, BG),
        (demo(texts), demo_seconds, BG, BG),
        (reading(texts), READING, BG, BG),
        (proof(texts, site["figure"]), PROOF, BG, BG),
        (closing(texts, site["cta"]), CLOSING, BG, BG),
    ]


def main():
    lang = sys.argv[1]
    fast = "--fast" in sys.argv
    texts, site = TEXTS[lang], site_texts(lang)
    size = 540 if fast else OUT
    out = ROOT / f"preview-{lang}.mp4" if fast else MEDIA / f"demo-produit-{lang}.mp4"

    # L'affiche : le top 3, l'écran qui en dit le plus si la vidéo ne joue pas.
    if not fast:
        poster = result_frame(texts, stage(texts["captions"]["telling"]), 2.0)
        poster.resize((OUT, OUT), Image.LANCZOS).save(out.with_suffix(".jpg"), quality=85)

    cmd = [
        "ffmpeg", "-y", "-loglevel", "error",
        "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{size}x{size}", "-r", str(FPS), "-i", "-",
        "-c:v", "libx264", "-preset", "slow", "-crf", "24",
        "-pix_fmt", "yuv420p", "-movflags", "+faststart", str(out),
    ]
    proc = subprocess.Popen(cmd, stdin=subprocess.PIPE)
    n = 0
    for gen, seconds, bg_in, bg_out in acts(texts, site):
        total = frames_of(seconds)
        for frame in veil(gen, total, bg_in, bg_out):
            proc.stdin.write(frame.resize((size, size), Image.LANCZOS).tobytes())
            n += 1
    proc.stdin.close()
    proc.wait()
    print(f"{out} · {n / FPS:.1f} s · {out.stat().st_size / 1e6:.1f} Mo")


if __name__ == "__main__":
    main()
