# Zhenqi Cai — Portfolio

Swiss-style (International Typographic Style) product-design portfolio,
static HTML/CSS/JS, no build step. Layout language follows the Framer "Rec"
template: oversized wordmark, strict 12-column grid, mono uppercase labels,
hairline rules and numbered sections `(01)…(05)`, black on white with a
single red accent.

## Pages
- `index.html` — (01) hero (statement, clients, stats, portrait), (02) Selected work,
  (03) AI experiments, (04) Philosophy, (05) Get in touch
- `about.html` — statement, portrait + bio, work index, capabilities, philosophy
- `works.html` — all projects, filterable (`works.html?type=experiment` preselects)
- `project.html?id=<project-id>` — project detail with gallery and next-project link

## Editing content
All text, links and projects live in **`js/data.js`**.
Projects have `type: "work"` (case study) or `"experiment"` (AI experiment);
`year`, `role` and `description` are optional and appear on the project page when set.
Put images in `images/` (`hero.jpg`, `portrait.jpg`, `<project-id>.jpg`, …)
and the résumé at `resume.pdf`. Missing images show a neutral placeholder.

## Local preview
```
python3 -m http.server 8000
```
then open http://localhost:8000.
