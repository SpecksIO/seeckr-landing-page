"""Le panneau de l'assistant, redessiné pour être animé.

Une capture ne se rejoue pas : on reconstruit le panneau avec la police du
produit (Inter) pour faire monter la question puis surgir les propositions
une à une. Les corps sont grands : la vidéo se lit à 400 px de large.
"""

from PIL import Image, ImageDraw

from brand import GREY, INK, PURPLE_600, card, clamp, ease_back, ease_out, fade, heart_badge, inter, wrap

W, H = 1880, 1080
PAD = 100

FAINT = "#A9A59C"
CHIP_BG = "#F2EFE9"
CHIP_EDGE = "#E4E0D7"

STEP_SECONDS = 2.8
RESULT_SECONDS = 4.2
CART_CLICK = 3.0  # seconde du résultat où le visiteur ajoute au panier

# Le bouton « Ajouter au panier », dans le repère du panneau.
HERO_TOP, HERO_H = 330, 560
CART_BOX = (PAD + 50, HERO_TOP + HERO_H - 150, PAD + 600, HERO_TOP + HERO_H - 50)


def chip(text, outlined=False, picked=False):
    f = inter(40)
    w, h = round(f.getlength(text) + 96), 100
    im = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    fill = PURPLE_600 if picked else ("#FFFFFF" if outlined else CHIP_BG)
    edge = PURPLE_600 if picked else ("#D9D5CB" if outlined else CHIP_EDGE)
    d.rounded_rectangle((1, 1, w - 2, h - 2), h / 2, fill=fill, outline=edge, width=3)
    d.text((w / 2, h / 2), text, font=f, fill="#FFFFFF" if picked else INK, anchor="mm")
    return im


def _shell(ui_brand, phase, progress):
    """L'ossature commune : progression, pastille, entête."""
    im = card(W, H, "#FFFFFF", 56)
    d = ImageDraw.Draw(im)
    bar_end = W - PAD - 160
    d.rounded_rectangle((PAD, 84, bar_end, 98), 7, fill="#EDEAE4")
    if progress > 0:
        d.rounded_rectangle((PAD, 84, PAD + (bar_end - PAD) * progress, 98), 7, fill="#1B1A18")
    im.alpha_composite(heart_badge(64, CHIP_BG, "#B9B4AA"), (W - PAD - 64, 60))
    im.alpha_composite(heart_badge(68, "#1B1A18", "#FFFFFF"), (PAD, 160))
    d.text((PAD + 92, 194), ui_brand, font=inter(38), fill="#2C2C2A", anchor="lm")
    d.text((W - PAD, 194), phase, font=inter(38, "Medium"), fill=INK, anchor="rm")
    return im


def render(texts, n, t):
    """L'étape `n` telle qu'elle se présente à la seconde `t`."""
    step, ui = texts["steps"][n], texts["ui"]
    im = _shell(texts["brand"], ui["phases"][n], 0.25 * n)

    up = clamp(t / 0.3)
    rise = round((1 - ease_out(up)) * 30)
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ld = ImageDraw.Draw(layer)
    y = 320
    if step.get("lead"):
        lf = inter(40)
        for line in wrap(step["lead"], lf, W - 2 * PAD):
            ld.text((PAD, y + rise), line, font=lf, fill=GREY, anchor="la")
            y += 58
        y += 34
    qf = inter(64, "Medium")
    for line in wrap(step["question"], qf, W - 2 * PAD):
        ld.text((PAD, y + rise), line, font=qf, fill=INK, anchor="la")
        y += 86
    im.alpha_composite(fade(layer, up))

    # Propositions : une à une, avec un léger rebond, puis le choix du visiteur.
    y += 60
    x = PAD
    labels = [*step["chips"], f"+ {ui['other']}"]
    for i, text in enumerate(labels):
        last = i == len(labels) - 1
        chosen = step["picked"] == i and t >= STEP_SECONDS - 0.7
        piece = chip(text, outlined=last, picked=chosen)
        if last or x + piece.width > W - PAD:
            x = PAD
            y += piece.height + 28
        pop = clamp((t - 0.45 - 0.13 * i) / 0.26)
        if pop > 0:
            k = 0.88 + 0.12 * ease_back(pop)
            if chosen:
                k *= 1 + 0.05 * (1 - clamp((t - STEP_SECONDS + 0.7) / 0.22))
            scaled = piece.resize((round(piece.width * k), round(piece.height * k)), Image.LANCZOS)
            fade(scaled, clamp(pop * 1.8))
            im.alpha_composite(
                scaled,
                (round(x - (scaled.width - piece.width) / 2), round(y - (scaled.height - piece.height) / 2)),
            )
        x += piece.width + 28

    hint = clamp((t - 0.9) / 0.35)
    if hint > 0:
        layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        label = ui["answer"] if n == 0 else ui["skip"]
        ImageDraw.Draw(layer).text((W - PAD, H - 90), f"{label}  ›", font=inter(36), fill=FAINT, anchor="rm")
        im.alpha_composite(fade(layer, hint))
    return im


def render_result(texts, t):
    """Le top 3 tel que le visiteur le reçoit, jusqu'à l'ajout au panier."""
    ui = texts["ui"]
    hero_name, *others = texts["products"]
    im = _shell(texts["brand"], ui["ready"], 1.0)

    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ld = ImageDraw.Draw(layer)
    ld.text((PAD, 300), ui["top3"].upper(), font=inter(34, "SemiBold"), fill=PURPLE_600, anchor="ls")
    im.alpha_composite(fade(layer, clamp(t / 0.3)))

    # Le produit qui correspond, son pourquoi et le bouton panier.
    hero = clamp((t - 0.35) / 0.35)
    if hero > 0:
        layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        ld = ImageDraw.Draw(layer)
        dy = round((1 - ease_out(hero)) * 28)
        left, right, top = PAD, PAD + 1140, HERO_TOP + dy
        ld.rounded_rectangle((left, top, right, top + HERO_H), 36, fill="#FBFAFF", outline="#DCD8F7", width=4)
        ld.text((left + 50, top + 70), ui["recommended"].upper(), font=inter(30, "SemiBold"), fill=PURPLE_600, anchor="lm")
        score = round(94 * ease_out(clamp((t - 0.7) / 0.7)))
        ld.text((right - 50, top + 70), f"{texts['pct'].format(score)} {ui['compatible']}", font=inter(38, "SemiBold"), fill=PURPLE_600, anchor="rm")
        nf = inter(52, "SemiBold")
        ny = top + 150
        for line in wrap(f"1 · {hero_name}", nf, right - left - 100):
            ld.text((left + 50, ny), line, font=nf, fill=INK, anchor="lm")
            ny += 66
        wf = inter(38)
        wy = ny + 10
        for line in wrap(texts["why"], wf, right - left - 100):
            ld.text((left + 50, wy), line, font=wf, fill=GREY, anchor="la")
            wy += 54

        # Le clic : le bouton s'enfonce, puis se coche.
        press = clamp((t - CART_CLICK) / 0.12) * (1 - clamp((t - CART_CLICK - 0.12) / 0.15))
        done = t >= CART_CLICK + 0.12
        x0, y0, x1, y1 = CART_BOX
        s = round(press * 8)
        y0, y1 = y0 + dy, y1 + dy
        ld.rounded_rectangle((x0 + s, y0 + s, x1 - s, y1 - s), (y1 - y0) / 2, fill="#1B1A18" if done else PURPLE_600)
        bf = inter(36, "SemiBold")
        label_x = (x0 + x1) / 2 + (24 if done else 0)
        ld.text((label_x, (y0 + y1) / 2), ui["cart"], font=bf, fill="#FFFFFF", anchor="mm")
        if done:
            cx = label_x - bf.getlength(ui["cart"]) / 2 - 44
            cy = (y0 + y1) / 2
            ld.line((cx - 16, cy, cx - 4, cy + 12, cx + 18, cy - 14), fill="#FFFFFF", width=7, joint="curve")
        im.alpha_composite(fade(layer, hero))

    # Les deux autres choix, sur l'étagère sable.
    alt = clamp((t - 0.75) / 0.35)
    if alt > 0:
        layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        ld = ImageDraw.Draw(layer)
        left, top = PAD + 1180, HERO_TOP + round((1 - ease_out(alt)) * 28)
        ld.rounded_rectangle((left, top, W - PAD, top + HERO_H), 36, fill=CHIP_BG)
        ld.text((left + 40, top + 70), ui["others"].upper(), font=inter(28, "SemiBold"), fill="#8A867D", anchor="lm")
        of = inter(36, "Medium")
        y = top + 170
        for i, name in enumerate(others):
            for line in wrap(f"{i + 2} · {name}", of, W - PAD - left - 80):
                ld.text((left + 40, y), line, font=of, fill="#4A4843", anchor="lm")
                y += 50
            ld.text((left + 40, y), f"{texts['pct'].format((76, 68)[i])} {ui['compatible']}", font=inter(32), fill=PURPLE_600, anchor="lm")
            y += 110
        im.alpha_composite(fade(layer, alt))
    return im


def cart_target():
    """Le centre du bouton panier, où le curseur clique."""
    x0, y0, x1, y1 = CART_BOX
    return (x0 + x1) / 2, (y0 + y1) / 2
