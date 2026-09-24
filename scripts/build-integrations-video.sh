#!/usr/bin/env bash
# Assemble les maquettes du banc d'essai Seeckr en la boucle de l'encart
# « Plusieurs intégrations possibles ».
#
#   ./scripts/build-integrations-video.sh [dossier des captures]
#
# Le dossier attendu contient les PNG du lab (A1 à A8), sur fond transparent
# hors du cadre arrondi. Chaque maquette est posée sur le violet de la section,
# tient 3,4 s, et la première revient à la fin pour que la boucle ne coupe pas.
set -euo pipefail

SRC=${1:-/tmp/seeckr-lab-lp}
OUT=$(cd "$(dirname "$0")/.." && pwd)/public/media
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

W=1160; H=928        # format de la plus haute des maquettes
BG=0x16113a          # --color-night, le fond de la section
D=3.4; T=0.6         # durée par maquette, durée du fondu

# Ordre de la liste des emplacements, puis retour sur la première.
ORDER=(A8 A7 A3 A5 A4 A8)

for i in "${!ORDER[@]}"; do
  ffmpeg -loglevel error -y -i "$SRC/${ORDER[$i]}.png" \
    -filter_complex "color=c=$BG:s=${W}x${H}[bg];[bg][0:v]overlay=(W-w)/2:(H-h)/2" \
    -frames:v 1 "$TMP/flat-$i.png"
done

INPUTS=(); FILTER=""
for i in "${!ORDER[@]}"; do
  d=$D
  [ "$i" -eq $((${#ORDER[@]} - 1)) ] && d=0.8
  INPUTS+=(-loop 1 -t "$d" -i "$TMP/flat-$i.png")
  FILTER+="[$i:v]fps=25,format=yuv420p,setsar=1[v$i];"
done
prev="[v0]"
for i in $(seq 1 $((${#ORDER[@]} - 1))); do
  FILTER+="$prev[v$i]xfade=transition=fade:duration=$T:offset=$(echo "$i * ($D - $T)" | bc)[x$i];"
  prev="[x$i]"
done

ffmpeg -loglevel error -y "${INPUTS[@]}" -filter_complex "${FILTER%;}" -map "$prev" \
  -c:v libx264 -preset veryslow -crf 26 -pix_fmt yuv420p -movflags +faststart \
  -an "$OUT/integrations.mp4"

# L'affiche, montrée avant que la lecture démarre et sous mouvement réduit.
ffmpeg -loglevel error -y -i "$OUT/integrations.mp4" -vf "scale=580:-2" \
  -frames:v 1 -q:v 5 "$OUT/integrations.jpg"

ls -la "$OUT/integrations.mp4" "$OUT/integrations.jpg"
