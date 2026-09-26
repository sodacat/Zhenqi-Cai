# ZC. — Zhenqi Cai, Independent Product Designer

**Clarity at AI speed.** AI · Complex Systems · 0→1.
Senior product designer + independent design practice (focused engagements,
embedded design partner).

Static HTML/CSS/JS, no build step. REC-style editorial layout: Helvetica,
12-column Swiss grid, near-black on warm paper, thin rules, black-and-white
covers that regain colour on hover, restrained motion. No gradients, no glow, no floating cards.

## Pages
- `index.html` — hero · 01 selected work (2×2, proof on every card) · 02 perspective · 03 what I offer (arrow rows) · 04 ways to work together · 05 about · 06 philosophy · 07 let’s talk · footer
- `work.html` — full project index (list / grid, filter by domain)
- `project.html?id=<project-id>` — case study: headline, cover, role/time/team/methods, metrics, numbered chapters with uncropped figures

## Editing content
All copy and projects live in **`js/data.js`**. Case studies (Amazon, SAP,
Stonk Tech, Smart Mirror) are condensed from the published case studies and
presentation decks; images in `images/` were extracted from those PDFs.
Projects without `chapters` (IBM Amelia, Weee!) are listed in the index only.
Still to fill in (marked `TODO`): real email and LinkedIn, years for
IBM / Weee! / Amazon Global Product Compliance, and 2–3 testimonials.

## Local preview
```
python3 -m http.server 8000
```
