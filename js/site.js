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
  const arrow = "&rarr;";

  // Cropped media (covers). Without an image, a typographic tile carries the proof point.
  function media(src, alt, n = "", pos = "", big = "") {
    return `<div class="media"${pos ? ` style="--pos:${esc(pos)}"` : ""}>
      <span class="ph"><span>${esc(alt)}</span><b>${esc(big || n)}</b></span>
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

  // Every card carries a proof point, not just a name.
  function card(p) {
    const tag = hasPage(p) ? "a" : "div";
    const href = hasPage(p) ? ` href="${projectUrl(p)}"` : "";
    const src = p.cardCover || p.cover;
    return `<${tag} class="card reveal${hasPage(p) ? "" : " soon"}"${href} data-cat="${esc(p.domain)}">
      ${media(src, p.title, num(p), p.cardCover ? "" : p.coverPos, src ? "" : p.tile || p.org)}
      <span class="cap">
        <span class="label muted">${esc(p.org)}</span>
        <span class="t">${esc(p.title)}</span>
        <span class="s">${esc(p.summary)}</span>
        ${p.proofs?.length ? `<span class="proofs">${p.proofs.map((x) => `<b>${esc(x)}</b>`).join("")}</span>` : ""}
        <span class="label muted">${esc(p.tags || p.domain)}${hasPage(p) ? "" : " — Case study on request"}</span>
      </span>
    </${tag}>`;
  }

  function secHead(n, title, aside = "") {
    return `<div class="sec-head grid label">
      <span>${pad(n)}</span><span>${title}</span><span class="muted">${aside}</span>
    </div>`;
  }

  function indexTable(items) {
    return `<div class="index" role="table">
      <div class="row head" role="row">
        <span>No.</span><span>Project</span><span>Organization</span><span>Domain</span><span>Year</span>
      </div>
      ${items
        .map((p) => {
          const cells = `<span>${num(p)}</span><span class="t">${esc(p.title)}</span><span>${esc(p.org)}</span><span>${esc(p.domain)}</span><span>${hasPage(p) ? esc(p.year) : "On request"}</span>`;
          return hasPage(p)
            ? `<a class="row" role="row" href="${projectUrl(p)}" data-cat="${esc(p.domain)}" data-cover="${esc(p.cover)}" data-n="${num(p)}">${cells}</a>`
            : `<div class="row soon" role="row" data-cat="${esc(p.domain)}">${cells}</div>`;
        })
        .join("")}
    </div>`;
  }

  /* ---------- Chrome ---------- */
  function header() {
    const nav = [
      ["Work", "work.html", "work"],
      ["About", "index.html#about", ""],
      ["Services", "index.html#services", ""]
    ];
    return `<header class="top grid">
      <a class="brand" href="index.html" aria-label="${esc(S.name)} — home">${esc(S.mark)}</a>
      <nav class="h-nav label" aria-label="Primary">
        ${nav.map(([t, h, k]) => `<a href="${h}"${k && page === k ? ' aria-current="page"' : ""}>${t}</a>`).join("")}
      </nav>
      <a class="btn" href="index.html#contact">Work with me</a>
    </header>`;
  }

  function finalCta() {
    const c = S.cta;
    return `<section class="cta sec" id="contact">
      <h2 class="giant reveal">${lines(c.statement)}</h2>
      <div class="cta-row grid">
        <ul class="label cta-open">${c.openTo.map((o) => `<li>${esc(o)}</li>`).join("")}</ul>
        <div class="cta-go">
          <p>${esc(c.for)}</p>
          <a class="btn btn-lg" href="mailto:${esc(S.email)}">${esc(c.button)} ${arrow}</a>
        </div>
      </div>
    </section>`;
  }

  function footer() {
    return `<footer class="foot">
      <div class="foot-cols grid">
        <p class="fc0 label">Independent design practice<br>by ${esc(S.name)}</p>
        <ul class="fc1 label">
          <li><a href="work.html">Work</a></li><li><a href="index.html#about">About</a></li><li><a href="index.html#services">Services</a></li>
        </ul>
        <ul class="fc2 label">
          ${S.social.map((s) => `<li><a href="${esc(s.url)}"${s.url.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${esc(s.label)}</a></li>`).join("")}
        </ul>
      </div>
      <div class="foot-bottom">
        <a class="foot-mark" href="#top" aria-label="Back to top">${esc(S.mark)}</a>
        <p class="label">${esc(S.location)}<br><span class="muted">${esc(S.promise)} &copy; ${year}</span></p>
      </div>
    </footer>`;
  }

  /* ---------- Home ---------- */
  function home() {
    const f = S.projects.filter((p) => p.featured);
    const r1 = f.slice(0, 3);
    const r2 = f.slice(3, 5);
    const H = S.hero, P = S.pov, A = S.about;

    return `<main>
      <!-- 01 Hero -->
      <section class="hero grid">
        <p class="hero-id label">${esc(S.role)}<br>${esc(S.focus)}</p>
        <h1 class="hero-t reveal">${lines(H.statement)}</h1>
        <p class="hero-lede reveal">${esc(H.lede)}</p>
        <div class="hero-cta">
          <a class="label u" href="#work">View selected work</a>
          <a class="btn" href="#contact">Work with me ${arrow}</a>
        </div>
        <p class="hero-meta label muted">${esc(S.location)}<br>${esc(S.availability)}</p>
      </section>

      <!-- 02 Selected work -->
      <section class="sec" id="work">
        ${secHead(2, "Selected work", "Proof before promises.")}
        <div class="works">
          <div class="row r1">${r1.map(card).join("")}</div>
          ${r2.length ? `<div class="row r2">${r2.map(card).join("")}</div>` : ""}
          <a class="label u all-work" href="work.html">All work (${S.projects.length}) ${arrow}</a>
        </div>
      </section>

      <!-- 03 Point of view -->
      <section class="sec pov">
        ${secHead(3, "Point of view")}
        <h2 class="giant reveal">${lines(P.statement)}</h2>
        <div class="pov-body grid">
          <div class="reveal">
            <p>${esc(P.opening)}</p>
            <p class="muted">The harder questions remain:</p>
            <ul>${P.questions.map((q) => `<li>${esc(q)}</li>`).join("")}</ul>
            <p class="strong">${esc(P.close)}</p>
          </div>
        </div>
      </section>

      <!-- 04 What I offer -->
      <section class="sec" id="services">
        ${secHead(4, "What I offer")}
        <ol class="offers">
          ${S.offers
            .map(
              (o, i) => `<li class="offer grid reveal">
            <span class="o-n label">${pad(i + 1)}</span>
            <h3 class="o-from">${lines(o.from)}</h3>
            <div class="o-body"><p class="label">${esc(o.name)}</p><p>${esc(o.text)}</p></div>
            <ul class="o-skills">${o.skills.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
          </li>`
            )
            .join("")}
        </ol>
      </section>

      <!-- 05 Ways to work together -->
      <section class="sec">
        ${secHead(5, "Ways to work together")}
        <div class="ways grid">
          ${S.engagements
            .map(
              (e) => `<div class="way reveal">
            <h3 class="way-t">${lines(e.name)}</h3>
            <p class="way-for">${esc(e.for)}</p>
            <p>${esc(e.text)}</p>
            <p class="label muted way-pts">${e.points.map(esc).join("<br>")}</p>
            <a class="label u" href="mailto:${esc(S.email)}?subject=${encodeURIComponent(e.name.join(" "))}">${esc(e.cta)} ${arrow}</a>
          </div>`
            )
            .join("")}
        </div>
      </section>

      <!-- 06 About -->
      <section class="sec" id="about">
        ${secHead(6, "About")}
        <div class="about grid">
          <h2 class="about-t reveal">${lines(A.statement)}</h2>
          <div class="about-body reveal">
            ${A.bio.map((b) => `<p>${esc(b)}</p>`).join("")}
            <p class="muted">Across all of it, I keep coming back to the same question:</p>
            <p class="about-q">${esc(A.question)}</p>
            <p class="label muted">Based in ${esc(S.location.replace(/^([^,]+),[^·]+/, "$1 "))}</p>
            <a class="label u" href="${esc(S.social[0].url)}" target="_blank" rel="noopener">More about me ${arrow}</a>
          </div>
        </div>
      </section>

      <!-- 07 Philosophy -->
      <section class="sec philosophy">
        ${secHead(7, "Philosophy")}
        ${S.philosophy
          .map(
            (p, i) => `<div class="ph-row grid reveal">
          <h3 class="ph-w">${esc(p.word)}</h3>
          <p class="ph-l">${esc(p.line)}</p>
        </div>${i < S.philosophy.length - 1 ? `<p class="ph-arrow grid"><span>&darr;</span></p>` : ""}`
          )
          .join("")}
        <p class="manifesto grid reveal"><span>${lines(S.manifesto)}</span></p>
      </section>

      <!-- 08 Design, with range -->
      <section class="sec">
        ${secHead(8, "Design, with range.")}
        <div class="range grid">
          ${S.range.map((r) => `<div class="reveal"><h3>${esc(r.name)}</h3><p>${esc(r.line)}</p></div>`).join("")}
        </div>
        <p class="range-close grid reveal"><span>${lines(S.rangeClose)}</span></p>
      </section>

      <!-- 09 Social proof -->
      ${
        S.testimonials?.length
          ? `<section class="sec">
        ${secHead(9, "In their words")}
        <div class="quotes grid">
          ${S.testimonials
            .map((t) => `<blockquote class="reveal"><p>&ldquo;${esc(t.quote)}&rdquo;</p><cite class="label muted">${esc(t.who)}</cite></blockquote>`)
            .join("")}
        </div>
      </section>`
          : ""
      }
    </main>`;
  }

  /* ---------- Work ---------- */
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

  /* ---------- Case study ---------- */
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
        <span class="next-t">${esc(next.org)} — ${esc(next.title)} ${arrow}</span>
      </a>
    </main>`;
  }

  /* ---------- Render ---------- */
  const views = { home, work, project };
  document.getElementById("app").innerHTML = header() + (views[page] || home)() + finalCta() + footer();
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

  // Restrained motion: content settles into place once, as it enters the viewport.
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
