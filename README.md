# Zhenqi Cai — Portfolio

Minimal, editorial photography portfolio (static HTML/CSS/JS, no build step).

## Pages
- `index.html` — hero mark, tagline, featured works grid, about, services, footer
- `works.html` — all projects with category filters
- `project.html?id=<project-id>` — project detail with gallery and next-project link

## Editing content
All text, links and projects live in **`js/data.js`**.
Put images in `images/` and reference them as `images/<file>.jpg`.
The first five projects with `featured: true` fill the home grid
(1 large + 2 small, then 2 wide). Missing images show a neutral placeholder.

## Local preview
```
python3 -m http.server 8000
```
then open http://localhost:8000.
