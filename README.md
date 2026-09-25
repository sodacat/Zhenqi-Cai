# Zhenqi Cai — Portfolio

**Clarity · Systems · Humanity** — Modernist in form. Systematic in thinking. Human in purpose.

Static HTML/CSS/JS, no build step. Layout after the REC editorial template (rec.framer.photos);
Helvetica, 12-column Swiss grid, black and white,
generous whitespace, functional motion only.

## Pages
- `index.html` — ZC. mark, tagline, featured work (1 tall + 2 small, then 2 wide), about, What I do, How I think, design DNA, footer
- `work.html` — full project index (list / grid, filter by domain)
- `project.html?id=<project-id>` — case study: headline, cover, role/time/team/methods, metrics, numbered chapters with uncropped figures

## Editing content
All copy and projects live in **`js/data.js`**. Case studies (Amazon, SAP,
Stonk Tech, Smart Mirror) are condensed from the published case studies and
presentation decks; images in `images/` were extracted from those PDFs.
Projects without `chapters` (IBM Amelia, Weee!) are listed in the index only.
Still to fill in: real email, LinkedIn and résumé links (marked `TODO`).

## Local preview
```
python3 -m http.server 8000
```
