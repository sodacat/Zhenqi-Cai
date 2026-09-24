(function () {
  const S = window.SITE;
  const page = document.body.dataset.page;
  const $ = (sel) => document.querySelector(sel);

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const lines = (arr) => arr.map(esc).join("<br>");

  const projectUrl = (p) => `project.html?id=${encodeURIComponent(p.id)}`;

  function media(src, alt, extraClass = "") {
    return `<div class="card-media ${extraClass}">
      <span class="ph">${esc(alt)}</span>
      <img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async">
    </div>`;
  }

  function card(p, cls = "") {
    return `<a class="card reveal ${cls}" href="${projectUrl(p)}" data-cat="${esc(p.category)}">
      ${media(p.cover, p.title)}
      <div class="card-caption">
        <span class="title">${esc(p.title)}</span>
        <span class="cat">${esc(p.category)}</span>
      </div>
    </a>`;
  }

  /* ---------- Shared chrome ---------- */
  function header() {
    const nav = [
      ["Works", "works.html", "works"],
      ["About", "index.html#about", "about"],
      ["Services", "index.html#services", "services"]
    ];
    return `<header class="site-header grid-12 wrap">
      <a class="brand" href="index.html" aria-label="${esc(S.name)} — home">${esc(S.mark)}</a>
      <nav class="nav label" aria-label="Primary">
        ${nav
          .map(([t, href, key]) => `<a class="link-line${page === key ? " is-active" : ""}" href="${href}">${t}</a>`)
          .join("")}
      </nav>
      <div class="header-cta"><a class="btn" href="mailto:${esc(S.email)}">Contact</a></div>
    </header>`;
  }

  function footer() {
    const year = new Date().getFullYear();
    const contact = [...S.address, S.phone, S.email].filter(Boolean);
    return `<footer class="site-footer wrap">
      <div class="grid-12">
        <div class="footer-cols">
          <div>
            <h4 class="label">Navigation</h4>
            <ul>
              <li><a class="link-line" href="works.html">Works</a></li>
              <li><a class="link-line" href="index.html#about">About</a></li>
              <li><a class="link-line" href="index.html#services">Services</a></li>
              <li><a class="link-line" href="mailto:${esc(S.email)}">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 class="label">Social</h4>
            <ul>
              ${S.social
                .map((s) => `<li><a class="link-line" href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a></li>`)
                .join("")}
            </ul>
          </div>
          <div>
            <h4 class="label">Contact</h4>
            <ul>
              ${contact
                .map((c) =>
                  c === S.email ? `<li><a class="link-line" href="mailto:${esc(c)}">${esc(c)}</a></li>` : `<li>${esc(c)}</li>`
                )
                .join("")}
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-mark" aria-hidden="true">${esc(S.mark.replace(/\.$/, ""))}</div>
        <div class="credits label">© ${year} ${esc(S.name)}.<br>All rights reserved.</div>
      </div>
    </footer>`;
  }

  /* ---------- Pages ---------- */
  function home() {
    const f = S.projects.filter((p) => p.featured).slice(0, 5);
    const r1 = f.slice(0, 3);
    const r2 = f.slice(3, 5);

    return `<main>
      <section class="intro grid-12 wrap">
        <h1 class="display reveal">${lines(S.tagline)}</h1>
      </section>

      <section class="wrap" id="works">
        <div class="works-label label"><a class="link-line" href="works.html">All works</a></div>
        <div class="feature-row r1">${r1.map((p) => card(p)).join("")}</div>
        ${r2.length ? `<div class="feature-row r2">${r2.map((p) => card(p)).join("")}</div>` : ""}
      </section>

      <section class="section wrap" id="about">
        <div class="statement grid-12">
          <h2 class="display reveal">${lines(S.statement)}</h2>
        </div>
        <div class="about grid-12">
          <div class="about-media reveal">${media(S.portrait, S.name)}</div>
          <div class="about-body reveal">
            <p class="name">${esc(S.name)}</p>
            <p class="role label muted">${esc(S.role)}</p>
            <p class="bio">${esc(S.bio)}</p>
            <div class="about-more label"><a class="link-line" href="works.html">More infos</a></div>
          </div>
        </div>
      </section>

      <section class="section services grid-12 wrap" id="services">
        <div class="services-head">
          <h2 class="display reveal">What I offer.</h2>
          <a class="contact-me label link-line" href="mailto:${esc(S.email)}">Contact me</a>
        </div>
        <ul class="services-list">
          ${S.services
            .map((s) => `<li class="service reveal"><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></li>`)
            .join("")}
        </ul>
      </section>
    </main>`;
  }

  function works() {
    const cats = [...new Set(S.projects.map((p) => p.category))];
    const count = (c) => S.projects.filter((p) => p.category === c).length;
    return `<main>
      <section class="page-title grid-12 wrap">
        <h1 class="display reveal">Selected works.<br>${S.projects.length} projects.</h1>
      </section>
      <section class="wrap">
        <div class="filters label" role="tablist">
          <button class="is-active" data-filter="*">All<sup>${S.projects.length}</sup></button>
          ${cats.map((c) => `<button data-filter="${esc(c)}">${esc(c)}<sup>${count(c)}</sup></button>`).join("")}
        </div>
        <div class="works-grid">${S.projects.map((p) => card(p)).join("")}</div>
      </section>
    </main>`;
  }

  function project() {
    const id = new URLSearchParams(location.search).get("id");
    const i = Math.max(0, S.projects.findIndex((p) => p.id === id));
    const p = S.projects[i];
    const next = S.projects[(i + 1) % S.projects.length];
    document.title = `${p.title} — ${S.name}`;

    return `<main>
      <section class="project-head grid-12 wrap">
        <h1 class="display reveal">${esc(p.title)}</h1>
        <dl class="project-meta reveal">
          <div><dt class="label">Category</dt><dd>${esc(p.category)}</dd></div>
          <div><dt class="label">Year</dt><dd>${esc(p.year)}</dd></div>
          <div><dt class="label">Client</dt><dd>${esc(p.client)}</dd></div>
        </dl>
      </section>
      ${p.description ? `<section class="project-desc grid-12 wrap"><p class="reveal">${esc(p.description)}</p></section>` : ""}
      <section class="gallery wrap">
        ${(p.images?.length ? p.images : [p.cover])
          .map((src, n) => `<div class="card reveal">${media(src, `${p.title} — ${n + 1}`)}</div>`)
          .join("")}
      </section>
      <section class="wrap">
        <div class="project-nav">
          <a class="label link-line" href="works.html">← All works</a>
          <a class="next" href="${projectUrl(next)}">
            <span class="label muted">Next project</span>
            <div class="display">${esc(next.title)}</div>
          </a>
        </div>
      </section>
    </main>`;
  }

  /* ---------- Render ---------- */
  const views = { home, works, project };
  $("#app").innerHTML = header() + (views[page] || home)() + footer();

  // Fade images in once loaded; keep placeholder if the file is missing.
  document.querySelectorAll(".card-media img").forEach((img) => {
    const done = () => img.classList.add("is-loaded");
    if (img.complete && img.naturalWidth) done();
    else {
      img.addEventListener("load", done);
      img.addEventListener("error", () => img.remove());
    }
  });

  // Category filters on works page
  document.querySelectorAll(".filters button").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filters button").forEach((b) => b.classList.toggle("is-active", b === btn));
      const f = btn.dataset.filter;
      document.querySelectorAll(".works-grid .card").forEach((c) => {
        c.classList.toggle("is-hidden", f !== "*" && c.dataset.cat !== f);
      });
    });
  });

  // Scroll reveal
  const els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
  } else {
    els.forEach((el) => el.classList.add("is-in"));
  }

  // Deep links to #about / #services after render
  if (location.hash) document.querySelector(location.hash)?.scrollIntoView();
})();
