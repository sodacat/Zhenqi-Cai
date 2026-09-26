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
        <span class="cap-top label muted"><span>${esc(p.org)}</span><span>${num(p)}</span></span>
        <span class="t">${esc(p.title)}</span>
        <span class="label muted">${esc(p.tags || p.domain)}${hasPage(p) ? "" : " — Case study on request"}</span>
      </span>
    </${tag}>`;
  }

  function secHead(n, title, aside = "") {
    return `<div class="sec-head label">${n ? `<span class="sh-n">${pad(n)}</span>` : ""}<span class="sh-t">${title}</span><span class="sh-a">${aside}</span></div>`;
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
      ["Services", "index.html#services", ""],
      ["Contact", "index.html#contact", ""]
    ];
    return `<header class="top grid">
      <a class="brand" href="index.html" aria-label="${esc(S.name)} — home">${esc(S.mark)}</a>
      <nav class="h-nav label" aria-label="Primary">
        ${nav.map(([t, h, k]) => `<a href="${h}"${k && page === k ? ' aria-current="page"' : ""}>${t}</a>`).join("")}
      </nav>
      <a class="btn h-btn" href="${esc(S.book.url)}">${esc(S.book.label)} ${arrow}</a>
    </header>`;
  }

  // n: section number on the home page; omitted elsewhere (no section head).
  function finalCta(n = 0) {
    const c = S.cta;
    return `<section class="sec" id="contact">
      ${n ? secHead(n, "Let’s talk") : ""}
      <div class="cta grid">
        <h2 class="big reveal">${lines(c.statement)}</h2>
        <div class="cta-go vr">
          <a class="btn btn-solid" href="${esc(S.book.url)}">${esc(S.book.label)} ${arrow}</a>
        </div>
      </div>
    </section>`;
  }

  function footer() {
    return `<footer class="foot grid">
      <a class="foot-mark" href="#top" aria-label="Back to top">${esc(S.mark)}</a>
      <nav class="label fc1">
        <a href="work.html">Work</a><a href="index.html#about">About</a><a href="index.html#services">Services</a><a href="index.html#contact">Contact</a>
        ${S.social.map((s) => `<a href="${esc(s.url)}"${s.url.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${esc(s.label)}</a>`).join("")}
      </nav>
      <p class="label fc2">${esc(S.studio)}<br>by ${esc(S.name)} · ${esc(S.location.split(" · ")[0])}<br><span class="muted">&copy; ${year}</span></p>
    </footer>`;
  }

  /* ---------- Home ---------- */
  function home() {
    const f = S.projects.filter((p) => p.featured).slice(0, 4);
    const H = S.hero, A = S.about;

    return `<main>
      <section class="hero grid">
        <h1 class="hero-t reveal"><b>${lines(H.strong)}</b><br>${lines(H.rest)}</h1>
        <div class="hero-side vr reveal">
          <p class="label muted">Previously at</p>
          <div class="logos">
            ${H.previously.map((l) => `<img src="${esc(l.logo)}" alt="${esc(l.name)}">`).join("")}
            <span class="scale"><b>${esc(H.scale[0])}</b><span class="label">${esc(H.scale[1])}</span></span>
          </div>
          <p class="hero-services">${lines(H.services)}</p>
          <a class="btn btn-solid btn-wide" href="${esc(S.book.url)}">${esc(H.cta)} ${arrow}</a>
          <p class="label muted hero-note">${esc(H.note)}</p>
        </div>
      </section>

      <section class="sec" id="work">
        ${secHead(1, "Selected work", `<a class="arrow-link" href="work.html">View all work ${arrow}</a>`)}
        <div class="works-grid two">${f.map(card).join("")}</div>
      </section>

      <section class="sec" id="services">
        ${secHead(2, "What I help you solve")}
        <div class="offers grid">
          ${S.offers
            .map(
              (o, i) => `<a class="offer${i ? " vr" : ""} reveal" href="${esc(S.book.url)}">
            <span class="label muted">${pad(i + 1)}</span>
            <h3>${esc(o.question)}</h3>
            <p class="o-name">${esc(o.name)}</p>
            <p class="o-text">${esc(o.text)}</p>
            <span class="o-go" aria-hidden="true">${arrow}</span>
            <p class="label muted">${o.tags.map(esc).join(" · ")}</p>
          </a>`
            )
            .join("")}
        </div>
      </section>

      <section class="sec">
        ${secHead(3, "Ways to work together")}
        <div class="ways grid">
          ${S.engagements
            .map(
              (e, i) => `<a class="way${i ? " vr" : ""} reveal" href="mailto:${esc(S.email)}?subject=${encodeURIComponent(e.name)}" aria-label="${esc(e.cta)}">
            <h3 class="way-t">${esc(e.name)}</h3>
            <p class="way-s">${lines(e.text)}</p>
            <p class="way-price"><b>${esc(e.price)}</b><span class="muted"> · ${esc(e.term)}</span></p>
            <span class="o-go" aria-hidden="true">${arrow}</span>
          </a>`
            )
            .join("")}
        </div>
      </section>

      <section class="sec" id="about">
        ${secHead(4, "About")}
        <div class="about grid">
          ${A.portrait ? `<div class="about-img reveal">${media(A.portrait, S.name)}</div>` : ""}
          <h2 class="about-t reveal">${lines(A.statement)}</h2>
          <div class="about-body vr reveal">
            ${A.bio.map((b) => `<p>${esc(b)}</p>`).join("")}
            <a class="label arrow-link" href="${esc(S.social[0].url)}" target="_blank" rel="noopener">More about me ${arrow}</a>
          </div>
        </div>
      </section>

      <section class="sec">
        ${secHead(5, "Design philosophy")}
        <div class="phil grid">
          ${S.philosophy
            .map((p, i) => `<div class="phil-c${i ? " vr" : ""} reveal"><h3>${esc(p.word)}</h3><p class="label muted">${esc(p.line)}</p></div>`)
            .join("")}
        </div>
      </section>

      ${finalCta(6)}
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
      <section class="works-grid two" data-view-pane="grid">${S.projects.map(card).join("")}</section>
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
  document.getElementById("app").innerHTML = header() + (views[page] || home)() + (page === "home" ? "" : finalCta()) + footer();
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
