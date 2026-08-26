# zy.css

Kieran's minimal and almost classless CSS

## Goals

* Use 16 colours <https://johndecember.com/html/spec/color16.html> as much as possible
* Use 256 colours as a last resort
* Have a non-web developer (me) understand every line of it

### Todo

* <https://web.archive.org/web/20230319011535/https://vistaserv.net/blog/90s-fonts-modern-browsers>
* <https://www.pentacom.jp/pentacom/bitfontmaker2/gallery/>

## Development

```bash
bun install
bun run lint    # biome
bun run format  # biome, writes
bun run fonts   # re-download the fonts from fontsource into static/fonts
bun run test    # playwright, checks the fonts actually load
```

## Deploy

Navigate to the folder you want the static folder to be placed in.

```bash
curl -LsS https://github.com/kism/zy.css/releases/download/main/grab.sh | bash
```
