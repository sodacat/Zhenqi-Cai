(function () {
  const S = window.SITE;
  const page = document.body.dataset.page;
  const $ = (sel) => document.querySelector(sel);

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const lines = (arr) => arr.map(esc).join("<br>");
  const pad = (n) => String(n).padStart(2, "0");
  // The site's arrow is a small red square (the same square as the mark's full stop)
  const arrow = `<span class="arrow" aria-hidden="true"></span>`;

  const projectUrl = (p) => `project.html?id=${encodeURIComponent(p.id)}`;
  const work = S.projects.filter((p) => p.type === "work");
  const experiments = S.projects.filter((p) => p.type === "experiment");
  const typeLabel = { work: "Case study", experiment: "AI experiment" };

  // Poster lines like the hero headline: [text, "l" | "r"] (flush left / right)
  const posterLines = (arr) =>
    arr.map(([t, a]) => `<span class="${a === "r" ? "r" : a === "j" ? "j" : "l"}" aria-hidden="true">${esc(t)}</span>`).join("");

  // *phrase* in copy is set in red (one emphasis per paragraph at most)
  const emph = (s) => esc(s).replace(/\*([^*]+)\*/g, '<em class="hl">$1</em>');

  // Swiss geometric covers, drawn in CSS, for projects without an image yet
  function art(kind, alt) {
    return `<div class="card-media art art-${esc(kind)}" role="img" aria-label="${esc(alt)}">${"<i></i>".repeat(3)}</div>`;
  }

  const cover = (p, alt = p.alt || p.title) => (p.art ? art(p.art, alt) : media(p.cover, alt));

  function media(src, alt, extraClass = "") {
    return `<div class="card-media ${extraClass}">
      <span class="ph">${esc(alt)}</span>
      <img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async">
    </div>`;
  }


  // Numbered Swiss section head: (01) ——— Title ——— optional link
  function sectionHead(n, title, link) {
    return `<div class="sec-head grid-12">
      <span class="label idx">(${pad(n)})</span>
      <h2 class="label sec-title">${esc(title)}</h2>
      ${link ? `<a class="label link-line sec-link" href="${link[1]}">${esc(link[0])} ${arrow}</a>` : ""}
    </div>`;
  }

  function workCard(p) {
    return `<a class="work-card reveal${p.art ? "" : " halftone"}" href="${projectUrl(p)}" data-type="${esc(p.type)}">
      ${cover(p)}
      <div class="work-meta">
        <span class="label cat">${esc(p.company)}</span>
        <h3 class="work-title">${esc(p.title)}</h3>
        <p class="work-sum">${esc(p.summary)}</p>
        <p class="card-tags">${[...(p.tags || []), p.impact].filter(Boolean).map(esc).join(" · ")}</p>
        ${arrow}
      </div>
    </a>`;
  }

  /* ---------- Shared chrome ---------- */
  function header() {
    const nav = [
      ["Work", "index.html#work", "works"],
      ["AI Experiments", "index.html#experiments", "experiments"],
      ["About", "index.html#about", "about"],
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
        <span class="nav-end" aria-hidden="true">${arrow}</span>
      </nav>
    </header>`;
  }

  function contactBlock(n) {
    return `<section class="section wrap" id="contact">
      ${sectionHead(n, "Get in touch")}
      <div class="contact grid-12">
        <h2 class="display reveal"><span class="selected">${esc(S.cta).replace(" — ", "<br>— ")}</span></h2>
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
        <p class="label footer-role">${esc(S.name)}<span class="cat">${esc(S.role)}</span></p>
        <ul class="label footer-col">
          <li><a href="index.html#work"><span>Work</span></a></li>
          <li><a href="index.html#experiments"><span>AI Experiments</span></a></li>
          <li><a href="index.html#about"><span>About</span></a></li>
        </ul>
      </div>
      <div class="footer-base">
        <div class="footer-mark" aria-hidden="true"><span>${esc(S.mark.replace(/\.$/, ""))}<span class="sq"></span></span></div>
        <p class="label credits"><span>${esc(S.copyright)}</span></p>
      </div>
    </footer>`;
  }

  /* ---------- Pages ---------- */
  function home() {
    return `<main>
      <section class="hero grid-12 wrap">
        <div class="hero-text">
          <p class="label idx">(01)</p>
          <p class="label hero-role">${esc(S.role)}</p>
          <h1 class="hero-title reveal" aria-label="${esc(S.headline)}">${S.headlineLines
            .map(([t, a, accent]) => `<span class="${a === "r" ? "r" : a === "j3" ? "j3" : "l"}${accent ? " hl" : ""}" aria-hidden="true">${esc(t)}</span>`)
            .join("")}</h1>
          <div class="hero-bottom reveal">
            <div class="hero-left">
              <dl class="stats">
                ${S.stats.map((st) => `<div><dt>${esc(st.value)}</dt><dd class="label">${esc(st.label)}</dd></div>`).join("")}
              </dl>
            </div>
            <div class="hero-info">
              <div class="hero-proof">
                <p class="hero-intro">${esc(S.intro)}</p>
                <ul class="clients">${S.clients
                  .map((c) => `<li class="client">${c.logo ? `<img src="${esc(c.logo)}" alt="${esc(c.name)}">` : esc(c.name)}</li>`)
                  .join("")}</ul>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-media reveal">
          ${media(S.hero, S.heroAlt)}
        </div>
      </section>

      <section class="section section-tight wrap" id="work">
        ${sectionHead(2, "Selected work")}
        <div class="work-grid">${work.map(workCard).join("")}</div>
      </section>

      ${experiments.length ? `<section class="section wrap" id="experiments">
        ${sectionHead(3, "AI experiments")}
        <ol class="exp-index">
          ${experiments
            .map(
              (p, i) => `<li class="reveal"><a class="exp-row" href="${projectUrl(p)}">
                <span class="exp-thumb">${cover(p)}</span>
                <span class="work-meta exp-meta">
                  <span class="label cat">EXP—${pad(i + 1)} · ${esc(p.date || "")}</span>
                  <span class="work-title exp-title">${esc(p.title)}</span>
                  <span class="card-tags">${[p.medium, p.tools, p.status].filter((v) => v && v !== p.date).map(esc).join(" · ")}</span>
                  ${arrow}
                </span>
              </a></li>`
            )
            .join("")}
        </ol>
      </section>` : ""}

      <section class="section wrap" id="about">
        ${sectionHead(4, "About")}
        <div class="about grid-12">
          <h2 class="hero-title statement reveal" aria-label="${esc(S.statement.join(" "))}">${posterLines(S.statementLines)}</h2>
          <div class="about-body reveal">
            <div class="about-lead">${S.bio.map((b) => `<p>${emph(b)}</p>`).join("")}</div>
            <div class="about-side">
              <ul class="about-tags">${S.facts.map((v) => `<li>${esc(v)}</li>`).join("")}</ul>
              <a class="btn btn-accent" href="${esc(S.resume)}" target="_blank" rel="noopener">View my resume ${arrow}</a>
            </div>
          </div>
          <figure class="about-media reveal">
            ${media(S.portrait, S.name)}
          </figure>
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
            (p) => `<li class="principle reveal">
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
        <p class="label idx">(01)</p>
        <p class="label hero-role">About</p>
        <h1 class="hero-title statement reveal" aria-label="${esc(S.statement.join(" "))}">${posterLines(S.statementLines)}</h1>
      </section>

      <section class="about-page grid-12 wrap">
        <div class="about-page-media reveal">${media(S.portrait, S.name)}</div>
        <div class="about-page-body reveal">
          <p class="lead">${emph(S.bio[0])}</p>
          ${S.bio.slice(1).map((b) => `<p>${emph(b)}</p>`).join("")}
          <p>${esc(S.intro)}</p>
          <dl class="facts">
            <div><dt class="label cat">Role</dt><dd>${esc(S.role)}</dd></div>
            <div><dt class="label cat">Clients</dt><dd>${S.clients.map((c) => esc(c.name)).join(", ")}</dd></div>
            <div><dt class="label cat">Contact</dt><dd><a class="link-line" href="mailto:${esc(S.email)}">${esc(S.email)}</a></dd></div>
          </dl>
        </div>
      </section>

      <section class="section wrap">
        ${sectionHead(2, "Selected work")}
        <ul class="index-list">
          ${work
            .map(
              (p) => `<li><a class="index-row" href="${projectUrl(p)}">
                <span class="label cat">${esc(p.company)}</span>
                <span class="index-title">${esc(p.title)}</span>
                <span class="index-sum">${esc(p.summary)}</span>
                ${arrow}
              </a></li>`
            )
            .join("")}
        </ul>
      </section>

      <section class="section wrap">
        ${sectionHead(3, "Capabilities")}
        <div class="services grid-12">
          <div class="services-head"><h2 class="display reveal">What I do.</h2></div>
          <ul class="services-list">
            ${S.capabilities
              .map((c) => `<li class="service reveal"><h3>${esc(c.title)}</h3><p>${esc(c.text)}</p></li>`)
              .join("")}
          </ul>
        </div>
      </section>

      ${philosophy(4)}
      ${contactBlock(5)}
    </main>`;
  }

  function works() {
    const initial = new URLSearchParams(location.search).get("type") || "*";
    const count = (t) => S.projects.filter((p) => p.type === t).length;
    const btn = (f, label, n) =>
      `<button class="${initial === f ? "is-active" : ""}" data-filter="${f}">${label}<sup>${n}</sup></button>`;
    return `<main>
      <section class="page-title grid-12 wrap">
        <p class="label idx">(01)</p>
        <p class="label hero-role">Index</p>
        <h1 class="display display-xl reveal">Selected work.<br>${pad(S.projects.length)} projects.</h1>
      </section>
      <section class="wrap">
        <div class="filters label" role="tablist">
          ${btn("*", "All", S.projects.length)}
          ${btn("work", "Case studies", count("work"))}
          ${btn("experiment", "AI experiments", count("experiment"))}
        </div>
        <div class="work-grid">${S.projects.map(workCard).join("")}</div>
      </section>
      ${contactBlock(2)}
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

    if (p.case) return caseStudy(p, i, next);

    return `<main>
      <section class="project-head grid-12 wrap">
        <p class="label idx">(${pad(i + 1)})</p>
        <p class="label hero-role">${esc(p.company)}</p>
        <h1 class="display display-xl reveal">${esc(p.title)}</h1>
      </section>
      <section class="project-info grid-12 wrap">
        <p class="lead reveal">${esc(p.summary)}</p>
        <dl class="project-meta reveal">
          ${meta.map(([k, v]) => `<div><dt class="label cat">${k}</dt><dd>${esc(v)}</dd></div>`).join("")}
        </dl>
        ${p.description ? `<p class="project-desc reveal">${esc(p.description)}</p>` : ""}
      </section>
      <section class="gallery wrap">
        ${p.images?.length
          ? p.images.map((src, n) => `<div class="reveal">${media(src, `${p.title} — ${n + 1}`)}</div>`).join("")
          : `<div class="reveal">${cover(p)}</div>`}
      </section>
      <section class="wrap">
        <div class="project-nav">
          <a class="label link-line" href="index.html#work">All work ${arrow}</a>
          <a class="next" href="${projectUrl(next)}">
            <span class="label cat">Next project</span>
            <div class="display">${esc(next.title)} ${arrow}</div>
          </a>
        </div>
      </section>
    </main>`;
  }

  /* ---------- Case study ---------- */
  const projectNav = (next) => `<section class="wrap">
        <div class="project-nav">
          <a class="label link-line" href="index.html#work">All work ${arrow}</a>
          <a class="next" href="${projectUrl(next)}">
            <span class="label cat">Next project</span>
            <div class="display">${esc(next.title)} ${arrow}</div>
          </a>
        </div>
      </section>`;

  const fig = (src, alt) => `<figure class="case-fig reveal">${media(src, alt, "case-media")}</figure>`;
  const figures = (items, cls = "") =>
    `<dl class="case-figures ${cls} reveal">${items
      .map(([v, l]) => `<div><dt>${esc(v)}</dt><dd class="label">${esc(l)}</dd></div>`)
      .join("")}</dl>`;
  const bullets = (items, cls = "") => `<ul class="case-list ${cls}">${items.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;

  function caseBlock(b) {
    switch (b.type) {
      case "statement":
        return `<p class="case-statement reveal">${esc(b.text)}</p>`;
      case "p":
        return `<div class="case-text reveal">${b.title ? `<h3 class="case-sub">${esc(b.title)}</h3>` : ""}<p>${esc(b.text)}</p></div>`;
      case "list":
        return `<div class="case-text reveal">${b.label ? `<h3 class="case-sub">${esc(b.label)}</h3>` : ""}${bullets(b.items)}</div>`;
      case "img":
        return fig(b.src, b.alt);
      case "pair":
        return `<div class="case-pair reveal">${b.label ? `<p class="label case-label">${esc(b.label)}</p>` : ""}${b.items
          .map(([src, alt]) => `<figure class="case-fig">${media(src, alt, "case-media")}</figure>`)
          .join("")}</div>`;
      case "quotes":
        return `<div class="case-quotes reveal">${b.label ? `<p class="label case-label">${esc(b.label)}</p>` : ""}${b.items
          .map(([q, who]) => `<blockquote><p>“${esc(q)}”</p><cite class="label">— ${esc(who)}</cite></blockquote>`)
          .join("")}</div>`;
      case "shift":
        return `<div class="case-shift reveal">${b.label ? `<p class="label case-label">${esc(b.label)}</p>` : ""}
          <div><span class="label">From</span><p>${esc(b.from)}</p></div>
          <div><span class="label">To</span><p>${esc(b.to)}</p></div>
        </div>`;
      case "option":
        return `<div class="case-option reveal">
          <h3 class="case-sub">${esc(b.title)}</h3>
          <figure class="case-fig">${media(b.src, b.title, "case-media")}</figure>
          <div class="case-verdict">
            ${b.pros ? bullets(b.pros, "is-pro") : ""}
            ${b.cons ? bullets(b.cons, "is-con") : ""}
          </div>
          ${b.note ? `<p class="case-note">${esc(b.note)}</p>` : ""}
        </div>`;
      case "figures":
        return figures(b.items, "is-small");
      case "columns":
        return `<div class="case-columns reveal">${b.items
          .map(([t, items]) => `<div><h3 class="case-sub">${esc(t)}</h3>${bullets(items)}</div>`)
          .join("")}</div>`;
      case "trio":
        return `<div class="case-trio reveal">${b.items
          .map(([src, t, d]) => `<figure class="case-fig">${media(src, t, "case-media")}<figcaption><h3 class="case-sub">${esc(t)}</h3><p>${esc(d)}</p></figcaption></figure>`)
          .join("")}</div>`;
      default:
        return "";
    }
  }

  function caseStudy(p, i, next) {
    const c = p.case;
    return `<main class="case">
      <section class="project-head grid-12 wrap">
        <p class="label idx">(${pad(i + 1)})</p>
        <p class="label hero-role">${esc(p.company)} — ${esc(p.title)}</p>
        <h1 class="display case-title reveal">${esc(c.headline)}</h1>
      </section>

      <section class="case-intro grid-12 wrap">
        <p class="lead case-lead reveal">${esc(c.lead)}</p>
        ${figures(c.impact)}
      </section>

      <section class="case-cover wrap reveal">${cover(p)}</section>

      <section class="section wrap">
        ${sectionHead(1, "Overview")}
        <div class="case-overview grid-12">
          <div class="case-role reveal"><h3 class="case-sub">My role</h3>${bullets(c.role)}</div>
          <dl class="facts case-facts reveal">
            ${c.facts.map(([k, v]) => `<div><dt class="label cat">${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}
          </dl>
          ${c.timeline ? `<div class="case-timeline reveal"><h3 class="case-sub">Timeline</h3>${media(c.timeline, "Project timeline, Nov 2022 – Q3 2023", "case-media")}</div>` : ""}
        </div>
      </section>

      ${c.sections
        .map(
          (sec, n) => `<section class="section wrap">
        ${sectionHead(n + 2, sec.title)}
        <div class="case-body grid-12">${sec.blocks.map(caseBlock).join("")}</div>
      </section>`
        )
        .join("")}

      ${projectNav(next)}
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

  // Cursor: a black square the size of the mark's square, centred on the
  // pointer (mouse and trackpad only; touch keeps the system behaviour)
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    const cursor = document.createElement("div");
    cursor.className = "cursor";
    cursor.setAttribute("aria-hidden", "true");
    document.body.appendChild(cursor);
    document.documentElement.classList.add("has-cursor");
    window.addEventListener("pointermove", (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      cursor.classList.add("is-on");
    });
    document.documentElement.addEventListener("pointerleave", () => cursor.classList.remove("is-on"));
  }

  // Deep links (#experiments, #about, #contact) after render
  if (location.hash) document.querySelector(location.hash)?.scrollIntoView();
})();
