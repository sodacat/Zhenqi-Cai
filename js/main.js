(function () {
  const S = window.SITE;
  const page = document.body.dataset.page;
  const $ = (sel) => document.querySelector(sel);

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const lines = (arr) => arr.map(esc).join("<br>");
  const pad = (n) => String(n).padStart(2, "0");
  const arrow = `<span class="arrow" aria-hidden="true">→</span>`;

  const projectUrl = (p) => `project.html?id=${encodeURIComponent(p.id)}`;
  const work = S.projects.filter((p) => p.type === "work");
  const experiments = S.projects.filter((p) => p.type === "experiment");
  const typeLabel = { work: "Case study", experiment: "AI experiment" };

  function media(src, alt, extraClass = "") {
    return `<div class="card-media ${extraClass}">
      <span class="ph">${esc(alt)}</span>
      <img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async">
    </div>`;
  }

  // Label / content rows, set like the info block of a Swiss poster
  const facts = (rows) =>
    `<dl class="facts-list">${rows
      .filter(([, v]) => v)
      .map(([k, v]) => `<div><dt class="label muted">${esc(k)}</dt><dd>${esc(v)}</dd></div>`)
      .join("")}</dl>`;

  // Numbered Swiss section head: (01) ——— Title ——— View all →
  function sectionHead(n, title, link) {
    return `<div class="sec-head grid-12">
      <span class="label idx">(${pad(n)})</span>
      <h2 class="label sec-title">${esc(title)}</h2>
      ${link ? `<a class="label link-line sec-link" href="${link[1]}">${esc(link[0])} ${arrow}</a>` : ""}
    </div>`;
  }

  function workCard(p, n) {
    return `<a class="work-card reveal" href="${projectUrl(p)}" data-type="${esc(p.type)}">
      <span class="work-num">${pad(n)}</span>
      ${media(p.cover, p.alt || p.title)}
      <div class="work-meta">
        <span class="label">${esc(p.company)}</span>
        <h3 class="work-title">${esc(p.title)}</h3>
        <p class="work-sum">${esc(p.summary)}</p>
        ${facts([["Focus", (p.tags || []).join(", ")], ["Impact", p.impact]])}
        ${arrow}
      </div>
    </a>`;
  }

  /* ---------- Shared chrome ---------- */
  function header() {
    const nav = [
      ["Work", "works.html", "works"],
      ["AI Experiments", "index.html#experiments", "experiments"],
      ["About", "about.html", "about"],
      ["Resume", S.resume, "resume"]
    ];
    return `<header class="site-header grid-12 wrap">
      <a class="brand" href="index.html" aria-label="${esc(S.name)} — home">${esc(S.mark.replace(/\.$/, ""))}<span class="sq" aria-hidden="true"></span></a>
      <button class="menu-btn label" aria-expanded="false" aria-controls="nav">Menu</button>
      <nav class="nav label" id="nav" aria-label="Primary">
        ${nav
          .map(([t, href, key]) => `<a class="link-line${page === key ? " is-active" : ""}" href="${href}">${t}</a>`)
          .join("")}
        <a class="link-line nav-contact" href="mailto:${esc(S.email)}">Contact</a>
      </nav>
      <div class="header-cta label"><span class="muted">${esc(S.location)}</span><svg class="globe" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><circle cx="8" cy="8" r="6.5"/><ellipse cx="8" cy="8" rx="2.8" ry="6.5"/><path d="M1.5 8h13M2.6 4.6h10.8M2.6 11.4h10.8"/></svg></div>
    </header>`;
  }

  function contactBlock(n) {
    return `<section class="section wrap" id="contact">
      ${sectionHead(n, "Get in touch")}
      <div class="contact grid-12">
        <h2 class="display reveal">${esc(S.cta)}</h2>
        <div class="contact-side">
          <ul class="contact-box label">
            ${S.social.map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a></li>`).join("")}
            <li class="contact-arrow">${arrow}</li>
          </ul>
        </div>
      </div>
    </section>`;
  }

  function footer() {
    return `<footer class="site-footer wrap">
      <div class="footer-top grid-12">
        <div class="footer-mark" aria-hidden="true">${esc(S.mark.replace(/\.$/, ""))}<span class="sq"></span></div>
        <p class="label footer-role">${esc(S.name)}<br><span class="muted">${esc(S.role)}</span></p>
        <ul class="label footer-col">
          <li><a href="works.html">Work</a></li>
          <li><a href="index.html#experiments">AI Experiments</a></li>
          <li><a href="about.html">About</a></li>
        </ul>
        <p class="label muted credits">${esc(S.copyright)}</p>
      </div>
    </footer>`;
  }

  /* ---------- Pages ---------- */
  function home() {
    const [feat, ...side] = experiments;

    return `<main>
      <section class="hero grid-12 wrap">
        <div class="hero-text">
          <p class="label idx">(01)</p>
          <p class="label hero-role">${esc(S.role)}</p>
          <h1 class="hero-title reveal" aria-label="${esc(S.headline)}">${S.headlineLines
            .map(([t, a]) => `<span class="${a === "r" ? "r" : "l"}" aria-hidden="true">${esc(t)}</span>`)
            .join("")}</h1>
          <div class="hero-bottom reveal">
            <dl class="stats">
              ${S.stats.map((st) => `<div><dt>${esc(st.value)}</dt><dd class="label">${esc(st.label)}</dd></div>`).join("")}
            </dl>
            <div class="hero-info">
              <p class="hero-intro">${esc(S.intro)}</p>
              <ul class="clients">${S.clients
                .map((c) => `<li class="client">${c.logo ? `<img src="${esc(c.logo)}" alt="${esc(c.name)}">` : esc(c.name)}</li>`)
                .join("")}</ul>
              <a class="btn btn-accent hero-resume" href="${esc(S.resume)}" target="_blank" rel="noopener">View my resume ${arrow}</a>
            </div>
          </div>
        </div>
        <div class="hero-media reveal">
          ${media(S.hero, S.heroAlt)}
        </div>
      </section>

      <section class="section section-tight wrap" id="work">
        ${sectionHead(2, "Selected work", ["View all work", "works.html"])}
        <div class="work-grid">${work.map((p, i) => workCard(p, i + 1)).join("")}</div>
      </section>

      ${feat ? `<section class="section wrap" id="experiments">
        ${sectionHead(3, "AI experiments", ["View all experiments", "works.html?type=experiment"])}
        <div class="exp grid-12">
          <div class="exp-feature reveal">
          <span class="exp-num">01</span>
          <a class="exp-media" href="${projectUrl(feat)}" aria-label="${esc(feat.title)} — ${esc(feat.company)}">${media(feat.cover, feat.alt || feat.title)}</a>
          <div class="exp-body">
            <div class="exp-head">
              <h3 class="work-title">${esc(feat.title)}</h3>
              <p class="label muted">${esc(feat.company)}</p>
            </div>
            <div class="exp-text">
              <p class="work-sum">${esc(feat.summary)}</p>
              <a class="btn btn-accent" href="${projectUrl(feat)}">Explore experiment ${arrow}</a>
            </div>
          </div>
          </div>
          <ul class="exp-side">
            ${side
              .slice(0, 2)
              .map(
                (p, i) => `<li class="reveal"><a href="${projectUrl(p)}">
                  <span class="exp-num">${pad(i + 2)}</span>
                  ${media(p.cover, p.alt || p.title)}
                  <span class="exp-side-title">${esc(p.title)} ${arrow}</span>
                  <span class="label muted exp-side-sub">${esc(p.company)}</span>
                </a></li>`
              )
              .join("")}
          </ul>
        </div>
      </section>` : ""}

      <section class="section wrap" id="about">
        ${sectionHead(4, "About")}
        <div class="about grid-12">
          <h2 class="display reveal">${lines(S.statement)}</h2>
          <div class="about-body reveal">
            ${S.bio.map((b) => `<p>${esc(b)}</p>`).join("")}
            ${facts(S.facts)}
            <a class="btn btn-accent" href="about.html">More about me ${arrow}</a>
          </div>
          <div class="about-media reveal">${media(S.portrait, S.name)}</div>
        </div>
      </section>

      ${philosophy(5)}
      ${contactBlock(6)}
    </main>`;
  }

  function philosophy(n) {
    return `<section class="section wrap" id="philosophy">
      ${sectionHead(n, "Design philosophy")}
      <ol class="principles">
        ${S.philosophy
          .map(
            (p, i) => `<li class="principle reveal">
              <span class="label muted">${pad(i + 1)}</span>
              <h3>${esc(p.title)}</h3>
              <p>${esc(p.text)}</p>
            </li>`
          )
          .join("")}
      </ol>
    </section>`;
  }

  function about() {
    return `<main>
      <section class="page-title grid-12 wrap">
        <p class="label hero-role">(About)</p>
        <h1 class="display display-xl reveal">${lines(S.statement)}</h1>
      </section>

      <section class="about-page grid-12 wrap">
        <div class="about-page-media reveal">${media(S.portrait, S.name)}</div>
        <div class="about-page-body reveal">
          <p class="lead">${esc(S.bio[0])}</p>
          ${S.bio.slice(1).map((b) => `<p>${esc(b)}</p>`).join("")}
          <p>${esc(S.intro)}</p>
          <dl class="facts">
            <div><dt class="label muted">Role</dt><dd>${esc(S.role)}</dd></div>
            <div><dt class="label muted">Clients</dt><dd>${S.clients.map((c) => esc(c.name)).join(", ")}</dd></div>
            <div><dt class="label muted">Contact</dt><dd><a class="link-line" href="mailto:${esc(S.email)}">${esc(S.email)}</a></dd></div>
          </dl>
        </div>
      </section>

      <section class="section wrap">
        ${sectionHead(1, "Selected work", ["All work", "works.html"])}
        <ul class="index-list">
          ${work
            .map(
              (p, i) => `<li><a class="index-row" href="${projectUrl(p)}">
                <span class="label muted">${pad(i + 1)}</span>
                <span class="label">${esc(p.company)}</span>
                <span class="index-title">${esc(p.title)}</span>
                <span class="index-sum">${esc(p.summary)}</span>
                ${arrow}
              </a></li>`
            )
            .join("")}
        </ul>
      </section>

      <section class="section wrap">
        ${sectionHead(2, "Capabilities")}
        <div class="services grid-12">
          <div class="services-head"><h2 class="display reveal">What I do.</h2></div>
          <ul class="services-list">
            ${S.capabilities
              .map((c) => `<li class="service reveal"><h3>${esc(c.title)}</h3><p>${esc(c.text)}</p></li>`)
              .join("")}
          </ul>
        </div>
      </section>

      ${philosophy(3)}
      ${contactBlock(4)}
    </main>`;
  }

  function works() {
    const initial = new URLSearchParams(location.search).get("type") || "*";
    const count = (t) => S.projects.filter((p) => p.type === t).length;
    const btn = (f, label, n) =>
      `<button class="${initial === f ? "is-active" : ""}" data-filter="${f}">${label}<sup>${n}</sup></button>`;
    return `<main>
      <section class="page-title grid-12 wrap">
        <p class="label hero-role">(Index)</p>
        <h1 class="display display-xl reveal">Selected work.<br>${pad(S.projects.length)} projects.</h1>
      </section>
      <section class="wrap">
        <div class="filters label" role="tablist">
          ${btn("*", "All", S.projects.length)}
          ${btn("work", "Case studies", count("work"))}
          ${btn("experiment", "AI experiments", count("experiment"))}
        </div>
        <div class="work-grid">${S.projects.map((p, i) => workCard(p, i + 1)).join("")}</div>
      </section>
      ${contactBlock(1)}
    </main>`;
  }

  function project() {
    const id = new URLSearchParams(location.search).get("id");
    const i = Math.max(0, S.projects.findIndex((p) => p.id === id));
    const p = S.projects[i];
    const next = S.projects[(i + 1) % S.projects.length];
    document.title = `${p.title} — ${S.name}`;
    const meta = [
      ["Company", p.company],
      ["Type", typeLabel[p.type]],
      ["Year", p.year],
      ["Role", p.role],
      ["Focus", (p.tags || []).join(", ")]
    ].filter(([, v]) => v);

    return `<main>
      <section class="project-head grid-12 wrap">
        <p class="label hero-role">(${pad(i + 1)}) ${esc(p.company)}</p>
        <h1 class="display display-xl reveal">${esc(p.title)}</h1>
      </section>
      <section class="project-info grid-12 wrap">
        <p class="lead reveal">${esc(p.summary)}</p>
        <dl class="project-meta reveal">
          ${meta.map(([k, v]) => `<div><dt class="label muted">${k}</dt><dd>${esc(v)}</dd></div>`).join("")}
        </dl>
        ${p.description ? `<p class="project-desc reveal">${esc(p.description)}</p>` : ""}
      </section>
      <section class="gallery wrap">
        ${(p.images?.length ? p.images : [p.cover])
          .map((src, n) => `<div class="reveal">${media(src, `${p.title} — ${n + 1}`)}</div>`)
          .join("")}
      </section>
      <section class="wrap">
        <div class="project-nav">
          <a class="label link-line" href="works.html">← All work</a>
          <a class="next" href="${projectUrl(next)}">
            <span class="label muted">Next project</span>
            <div class="display">${esc(next.title)} ${arrow}</div>
          </a>
        </div>
      </section>
    </main>`;
  }

  /* ---------- Render ---------- */
  const views = { home, works, project, about };
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

  // Mobile menu
  const menuBtn = $(".menu-btn");
  menuBtn?.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.textContent = open ? "Close" : "Menu";
  });

  // Type filters on works page
  const applyFilter = (f) =>
    document.querySelectorAll(".work-grid .work-card").forEach((c) => {
      c.classList.toggle("is-hidden", f !== "*" && c.dataset.type !== f);
    });
  document.querySelectorAll(".filters button").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filters button").forEach((b) => b.classList.toggle("is-active", b === btn));
      applyFilter(btn.dataset.filter);
    });
  });
  const active = $(".filters button.is-active");
  if (active) applyFilter(active.dataset.filter);

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

  // Deep links (#experiments, #about, #contact) after render
  if (location.hash) document.querySelector(location.hash)?.scrollIntoView();
})();
