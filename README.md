# ZC. — Independent product design studio by Zhenqi Cai

**Enterprise product design. Without building a design team.**
Senior product strategy & alignment · AI & complex systems design · 0→1.

Static HTML/CSS/JS, no build step. Helvetica, 12-column Swiss grid,
near-black on warm paper, thin rules, black-and-white covers that regain
colour on hover, restrained motion.

## Pages
- `index.html` — hero (previously at Amazon · IBM · SAP) · 01 selected work (2×2) · 02 what I help you solve · 03 ways to work together (prices) · 04 about · 05 design philosophy · 06 let’s talk · footer
- `work.html` — full project index (list / grid, filter by domain)
- `project.html?id=<project-id>` — case study: headline, cover, role/time/team/methods, metrics, numbered chapters with uncropped figures

## Editing content
All copy and projects live in **`js/data.js`**. Case studies (Amazon, SAP,
Stonk Tech, Smart Mirror) are condensed from the published case studies and
presentation decks; images in `images/` were extracted from those PDFs.
Projects without `chapters` (IBM Amelia, Weee!) are listed in the index only.
Still to fill in (marked `TODO`): booking link for “Book a free consultation”,
real email and LinkedIn, years for IBM / Weee! / Amazon Global Product
Compliance. Prices live in `engagements` in `js/data.js`.

## Local preview
```
python3 -m http.server 8000
```
