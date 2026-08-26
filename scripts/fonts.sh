#! /usr/bin/env bash
# Download the fonts zy.css uses from Fontsource into static/fonts

set -e

cd "$(dirname "$0")/.." # Run from the repo root

bun install

rm -f static/fonts/*.woff2

for weight in 400 500 600 700; do
  cp "node_modules/@fontsource/fira-code/files/fira-code-latin-$weight-normal.woff2" static/fonts/
done

for weight in 400 500; do
  for style in normal italic; do
    cp "node_modules/@fontsource/noto-sans-display/files/noto-sans-display-latin-$weight-$style.woff2" static/fonts/
  done
done

ls -1 static/fonts
