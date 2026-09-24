# Zhenqi Cai — Portfolio

**Clarity · Systems · Humanity** — Modernist in form. Systematic in thinking. Human in purpose.

Static HTML/CSS/JS, no build step. Layout after the REC editorial template (rec.framer.photos);
Helvetica, 12-column Swiss grid, black and white,
generous whitespace, functional motion only.

## Pages
- `index.html` — ZC. mark, tagline, featured work (1 tall + 2 small, then 2 wide), about, What I do, How I think, design DNA, footer
- `work.html` — full project index (list / grid, filter by domain)
- `project.html?id=<project-id>` — case study: summary, meta, numbered chapters with images

## Editing content
All copy and projects live in **`js/data.js`**. Project entries are drafts —
replace titles, summaries and `sections` with real case-study content.
Put images in `images/` and reference them as `images/<file>.jpg`
(16:9 or 4:3 work best). Missing images show a neutral numbered placeholder.

## Local preview
```
python3 -m http.server 8000
```
