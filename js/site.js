(function () {
  const S = window.SITE;
  const page = document.body.dataset.page;
  const year = new Date().getFullYear();

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const lines = (arr) => arr.map(esc).join("<br>");
  const pad = (n) => String(n).padStart(2, "0");
  const projectUrl = (p) => `project.html?id=${encodeURIComponent(p.id)}`;
  const num = (p) => pad(S.projects.indexOf(p) + 1);
  const hasPage = (p) => Boolean(p.chapters?.length);
  const cases = S.projects.filter(hasPage);

  // Cropped media (covers): fixed aspect ratio, placeholder until the image loads.
  function media(src, alt, n = "", pos = "") {
    return `<div class="media"${pos ? ` style="--pos:${esc(pos)}"` : ""}>
      <span class="ph"><span>${esc(alt)}</span><b>${esc(n)}</b></span>
      ${src ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async">` : ""}
    </div>`;
  }

  // Uncropped figure: case-study images keep their own proportions so no UI is cut off.
  function figure([src, caption]) {
    return `<figure class="fig reveal">
      <img src="${esc(src)}" alt="${esc(caption)}" loading="lazy" decoding="async">
      <figcaption class="label muted">${esc(caption)}</figcaption>
    </figure>`;
  }

  // Projects without a case-study page render as plain (non-link) tiles.
  function card(p) {
    const tag = hasPage(p) ? "a" : "div";
    const href = hasPage(p) ? ` href="${projectUrl(p)}"` : "";
    return `<${tag} class="card reveal${hasPage(p) ? "" : " soon"}"${href} data-cat="${esc(p.domain)}">
      ${media(p.cover, p.title, num(p), p.coverPos)}
      <span class="cap">
        <span class="t">${esc(p.org)} — ${esc(p.title)}</span>
        <span class="m label">${hasPage(p) ? esc(p.domain) : "Case study on request"}</span>
      </span>
    </${tag}>`;
  }

  function list(heading, aside, items) {
    return `<div class="offer-head">
        <h2 class="display reveal">${heading}</h2>
        ${aside}
      </div>
      <ul class="offer-list">
        ${items.map(([t, d]) => `<li class="reveal"><h3>${esc(t)}</h3><p>${esc(d)}</p></li>`).join("")}
      </ul>`;
  }

  function indexTable(items) {
    return `<div class="index" role="table">
      <div class="row head" role="row">
        <span>No.</span><span>Project</span><span>Organization</span><span>Domain</span><span>Year</span>
      </div>
      ${items
        .map(
          (p) => {
            const cells = `<span>${num(p)}</span><span class="t">${esc(p.title)}</span><span>${esc(p.org)}</span><span>${esc(p.domain)}</span><span>${hasPage(p) ? esc(p.year) : "On request"}</span>`;
            return hasPage(p)
              ? `<a class="row" role="row" href="${projectUrl(p)}" data-cat="${esc(p.domain)}" data-cover="${esc(p.cover)}" data-n="${num(p)}">${cells}</a>`
              : `<div class="row soon" role="row" data-cat="${esc(p.domain)}">${cells}</div>`;
          }
        )
        .join("")}
    </div>`;
  }

  /* ---------- Chrome ---------- */
  function header() {
    const nav = [
      ["Work", "work.html", "work"],
      ["About", "index.html#about", ""],
      ["Expertise", "index.html#expertise", ""]
    ];
    return `<header class="top grid">
      <a class="brand" href="index.html" aria-label="${esc(S.name)} — home">${esc(S.mark)}</a>
      <nav class="h-nav label" aria-label="Primary">
        ${nav.map(([t, h, k]) => `<a href="${h}"${k && page === k ? ' aria-current="page"' : ""}>${t}</a>`).join("")}
      </nav>
      <a class="btn" href="mailto:${esc(S.email)}">Contact</a>
    </header>`;
  }

  function footer() {
    return `<section class="signoff grid" id="contact">
        <h2 class="display reveal">${esc(S.signoff)}</h2>
        <a class="label u" href="mailto:${esc(S.email)}">${esc(S.email)}</a>
      </section>
      <footer class="foot">
      <div class="foot-cols grid">
        <div class="fc1"><h4 class="label muted">Navigation</h4><ul class="label">
          <li><a href="work.html">Work</a></li><li><a href="index.html#about">About</a></li>
          <li><a href="index.html#expertise">Expertise</a></li><li><a href="mailto:${esc(S.email)}">Contact</a></li>
        </ul></div>
        <div class="fc2"><h4 class="label muted">Social</h4><ul class="label">
          ${S.social.map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a></li>`).join("")}
        </ul></div>
        <div class="fc3"><h4 class="label muted">Principles</h4><ul class="label">
          ${S.principles.map((p) => `<li>${esc(p.title)}</li>`).join("")}
        </ul></div>
      </div>
      <div class="foot-bottom">
        <a class="foot-mark" href="#top" aria-label="Back to top">${esc(S.mark.replace(/\.$/, ""))}</a>
        <p class="label muted">${esc(S.signature)} &mdash; Design by ${esc(S.name)}<br>&copy; ${year} ${esc(S.name)}. All rights reserved.</p>
      </div>
    </footer>`;
  }

  /* ---------- Pages ---------- */
  function home() {
    const f = S.projects.filter((p) => p.featured);
    // Pairs with mirrored asymmetry: wide + narrow, then narrow + wide.
    const rows = [];
    for (let i = 0; i < f.length; i += 2) rows.push(f.slice(i, i + 2));
    return `<main>
      <section class="intro grid">
        <h1 class="display reveal">${lines(S.tagline)}</h1>
        <div class="hello reveal">
          <p class="name">${esc(S.hello)}</p>
          <p>${esc(S.intro)}</p>
        </div>
      </section>

      <section class="works" id="work">
        <a class="label works-label" href="work.html">All work</a>
        ${rows
          .map((r, i) => `<div class="row${i % 2 ? " flip" : ""}${r.length === 1 ? " single" : ""}">${r.map(card).join("")}</div>`)
          .join("")}
      </section>

      <section class="sec" id="about">
        <div class="statement grid"><h2 class="display reveal">${lines(S.statement)}</h2></div>
        <div class="about grid">
          <ol class="pillars">
            ${S.pillars.map((p) => `<li class="reveal"><b>${esc(p.word)}</b><span class="label muted">${esc(p.note)}</span></li>`).join("")}
          </ol>
          <div class="about-body reveal">
            <p class="name">${esc(S.name)}</p>
            <p class="label muted">${esc(S.role)} &mdash; ${esc(S.signature)}</p>
            ${S.bio.map((b) => `<p class="bio">${esc(b)}</p>`).join("")}
            <a class="label more" href="work.html">More work</a>
          </div>
        </div>
      </section>

      <section class="sec offer grid" id="expertise">
        ${list("What I do.", `<a class="label" href="mailto:${esc(S.email)}">Contact me</a>`, S.services.map((s) => [s.title, s.text]))}
      </section>

      <section class="sec offer grid" id="principles">
        ${list("How I think.", `<span class="label muted">Visual &rarr; Product &rarr; AI</span>`, S.principles.map((p) => [p.title, p.text]))}
      </section>

      <section class="sec">
        <div class="statement grid"><blockquote class="display reveal">&ldquo;${esc(S.quote)}&rdquo;</blockquote></div>
      </section>

      <section class="sec offer grid">
        <div class="offer-head"><h2 class="display reveal">Design DNA.</h2></div>
        <dl class="dna">
          ${S.dna.map(([k, v]) => `<div class="reveal"><dt class="label muted">${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}
        </dl>
      </section>
    </main>`;
  }

  function work() {
    const cats = [...new Set(S.projects.map((p) => p.domain))];
    return `<main>
      <section class="intro grid">
        <h1 class="display reveal">Selected work.<br>${pad(S.projects.length)} projects.</h1>
      </section>
      <div class="toolbar grid label">
        <span class="muted">Filter</span>
        <div class="filters">
          <button class="on" data-filter="*">All <sup>${S.projects.length}</sup></button>
          ${cats.map((c) => `<button data-filter="${esc(c)}">${esc(c)}</button>`).join("")}
        </div>
        <div class="views">
          <button class="on" data-view="grid">Grid</button><button data-view="list">List</button>
        </div>
      </div>
      <section class="works-grid" data-view-pane="grid">${S.projects.map(card).join("")}</section>
      <section data-view-pane="list" hidden>${indexTable(S.projects)}</section>
    </main>`;
  }

  function project() {
    const id = new URLSearchParams(location.search).get("id");
    const i = Math.max(0, cases.findIndex((p) => p.id === id));
    const p = cases[i];
    const next = cases[(i + 1) % cases.length];
    document.title = `${p.org} — ${p.title} | ${S.name}`;

    const chapters = (p.chapters || [])
      .map(
        (c, n) => `<section class="chapter">
          <div class="ch-head grid">
            <span class="label muted">(${pad(n + 1)})</span>
            <span class="label">${esc(c.label)}</span>
          </div>
          <div class="ch-body grid">
            <h2 class="ch-title reveal">${esc(c.title)}</h2>
            <div class="ch-text reveal">
              ${c.body.map((b) => `<p>${esc(b)}</p>`).join("")}
              ${c.quote ? `<blockquote><p>&ldquo;${esc(c.quote[0])}&rdquo;</p><cite class="label muted">${esc(c.quote[1])}</cite></blockquote>` : ""}
            </div>
          </div>
          ${c.images?.length ? `<div class="figs n${Math.min(c.images.length, 2)}">${c.images.map(figure).join("")}</div>` : ""}
        </section>`
      )
      .join("");

    return `<main>
      <section class="intro p-intro grid">
        <span class="label muted p-count">(${num(p)}/${pad(S.projects.length)}) &mdash; ${esc(p.org)}</span>
        <h1 class="display reveal">${esc(p.title)}</h1>
        <p class="p-lede reveal">${esc(p.headline)}</p>
      </section>

      <div class="p-cover">${media(p.cover, p.title, num(p), p.coverPos)}</div>

      <dl class="p-meta grid">
        <div><dt>Role</dt><dd>${esc(p.role)}</dd></div>
        <div><dt>Time</dt><dd>${esc(p.time)}</dd></div>
        <div><dt>Team</dt><dd>${p.team.map(esc).join("<br>")}</dd></div>
        <div><dt>Methods</dt><dd>${p.methods.map(esc).join("<br>")}</dd></div>
      </dl>

      ${
        p.metrics?.length
          ? `<ul class="metrics grid">${p.metrics
              .map(([v, l]) => `<li class="reveal"><b>${esc(v)}</b><span class="label muted">${esc(l)}</span></li>`)
              .join("")}</ul>`
          : ""
      }

      ${chapters}

      <a class="next grid" href="${projectUrl(next)}">
        <span class="label muted">Next (${num(next)})</span>
        <span class="next-t">${esc(next.org)} — ${esc(next.title)} &rarr;</span>
      </a>
    </main>`;
  }

  /* ---------- Render ---------- */
  const views = { home, work, project };
  document.getElementById("app").innerHTML = header() + (views[page] || home)() + footer();
  document.body.id = "top";

  document.querySelectorAll(".media img").forEach((img) => {
    const done = () => img.classList.add("ok");
    if (img.complete && img.naturalWidth) done();
    else {
      img.addEventListener("load", done);
      img.addEventListener("error", () => img.remove());
    }
  });

  // Work: domain filter (applies to both grid and list)
  document.querySelectorAll(".filters button").forEach((btn) =>
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filters button").forEach((b) => b.classList.toggle("on", b === btn));
      const f = btn.dataset.filter;
      document.querySelectorAll(".works-grid .card, .index .row:not(.head)").forEach((el) => {
        el.hidden = f !== "*" && el.dataset.cat !== f;
      });
    })
  );

  // Work: grid / list toggle
  document.querySelectorAll(".views button").forEach((btn) =>
    btn.addEventListener("click", () => {
      document.querySelectorAll(".views button").forEach((b) => b.classList.toggle("on", b === btn));
      document.querySelectorAll("[data-view-pane]").forEach((el) => (el.hidden = el.dataset.viewPane !== btn.dataset.view));
    })
  );

  // Index: cover preview that follows the cursor (pointer devices only)
  if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
    const pv = document.createElement("div");
    pv.className = "preview";
    document.body.appendChild(pv);
    document.querySelectorAll(".index a.row").forEach((row) => {
      row.addEventListener("mouseenter", () => {
        pv.innerHTML = `<b>${esc(row.dataset.n)}</b><img src="${esc(row.dataset.cover)}" alt="" onerror="this.remove()">`;
        pv.classList.add("on");
      });
      row.addEventListener("mouseleave", () => pv.classList.remove("on"));
      row.addEventListener("mousemove", (e) => {
        pv.style.transform = `translate(${e.clientX + 24}px, ${e.clientY - 60}px)`;
      });
    });
  }

  // Functional motion: content settles into place once, as it enters the viewport.
  const els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
  } else {
    els.forEach((el) => el.classList.add("in"));
  }

  if (location.hash) document.querySelector(location.hash)?.scrollIntoView();
})();
