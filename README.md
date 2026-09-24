# Zhenqi Cai — Portfolio

**Clarity · Systems · Humanity** — Modernist in form. Systematic in thinking. Human in purpose.

Static HTML/CSS/JS, no build step. Helvetica, 12-column Swiss grid, black and white,
generous whitespace, functional motion only.

## Pages
- `index.html` — wordmark, mission, selected work, principles, about / design DNA, contact
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
