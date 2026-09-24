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

  function media(src, alt, n = "") {
    return `<div class="media">
      <span class="ph"><span>${esc(alt)}</span><b>${esc(n)}</b></span>
      <img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async">
    </div>`;
  }

  function card(p, place = "") {
    return `<a class="card reveal" href="${projectUrl(p)}" data-cat="${esc(p.domain)}"${place ? ` style="${place}"` : ""}>
      ${media(p.cover, p.title, num(p))}
      <span class="cap">
        <span class="n">${num(p)}</span>
        <span class="t">${esc(p.title)}</span>
        <span class="m">${esc(p.domain)}</span>
        <span class="s">${esc(p.summary)}</span>
      </span>
    </a>`;
  }

  function sectionHead(n, title, aside = "") {
    return `<div class="sec-head grid">
      <span class="sec-n">(${pad(n)})</span>
      <h2 class="sec-t">${title}</h2>
      <span class="sec-a">${aside}</span>
    </div>`;
  }

  function indexTable(list) {
    return `<div class="index" role="table">
      <div class="row head" role="row">
        <span>No.</span><span>Project</span><span>Domain</span><span>Organization</span><span>Year</span>
      </div>
      ${list
        .map(
          (p) => `<a class="row" role="row" href="${projectUrl(p)}" data-cat="${esc(p.domain)}" data-cover="${esc(p.cover)}" data-n="${num(p)}">
        <span>${num(p)}</span><span class="t">${esc(p.title)}</span><span>${esc(p.domain)}</span><span>${esc(p.org)}</span><span>${esc(p.year)}</span>
      </a>`
        )
        .join("")}
    </div>`;
  }

  /* ---------- Chrome ---------- */
  function header() {
    const nav = [
      ["Work", "work.html", "work"],
      ["Principles", "index.html#principles", ""],
      ["About", "index.html#about", ""],
      ["Contact", "index.html#contact", ""]
    ];
    return `<header class="top grid">
      <a class="h-name" href="index.html">${esc(S.name)}</a>
      <span class="h-role">${esc(S.role)}</span>
      <nav class="h-nav" aria-label="Primary">
        ${nav.map(([t, h, k]) => `<a href="${h}"${k && page === k ? ' aria-current="page"' : ""}>${t}</a>`).join("")}
      </nav>
      <span class="h-meta">${esc(S.signature)}</span>
    </header>`;
  }

  function footer() {
    return `<footer class="foot">
      <p class="motto grid">${S.principles.map((p) => `<span>${esc(p.title)}</span>`).join("")}</p>
      <div class="foot-row grid">
        <span class="f1">&copy; ${year} ${esc(S.name)}</span>
        <ul class="f2">${S.social.map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a></li>`).join("")}</ul>
        <ul class="f3">
          <li><a href="work.html">Work</a></li><li><a href="index.html#principles">Principles</a></li>
          <li><a href="index.html#about">About</a></li><li><a href="mailto:${esc(S.email)}">Contact</a></li>
        </ul>
        <a class="f4" href="#top">Back to top &uarr;</a>
      </div>
    </footer>`;
  }

  /* ---------- Pages ---------- */
  // Featured work: one lead project full width, then a calm asymmetric rhythm.
  const FEATURE_LAYOUT = [
    "--c:1 / -1; --r:16/9",
    "--c:1 / span 6; --r:4/3",
    "--c:7 / span 6; --r:4/3",
    "--c:5 / span 8; --r:16/10"
  ];

  function home() {
    const f = S.projects.filter((p) => p.featured).slice(0, FEATURE_LAYOUT.length);
    return `<main>
      <section class="hero">
        <h1 class="mark">${esc(S.name)}<i>.</i></h1>
        <div class="hero-row grid">
          <span class="hr-l">${esc(S.role)}<br>AI &amp; Complex Systems</span>
          <p class="hr-c">${esc(S.mission)}</p>
          <p class="hr-r">${esc(S.intro)}</p>
        </div>
      </section>

      <section class="sec" id="work">
        ${sectionHead(1, "Selected Work", `<a class="u" href="work.html">Index (${S.projects.length}) &rarr;</a>`)}
        <div class="feature grid">${f.map((p, i) => card(p, FEATURE_LAYOUT[i])).join("")}</div>
      </section>

      <section class="sec" id="principles">
        ${sectionHead(2, "Principles", "Visual &rarr; Product &rarr; AI")}
        <ol class="principles grid">
          ${S.principles
            .map(
              (p, i) => `<li class="reveal"><span class="n">${pad(i + 1)}</span><span class="d">${esc(p.domain)}</span>
              <h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></li>`
            )
            .join("")}
        </ol>
      </section>

      <section class="sec" id="about">
        ${sectionHead(3, "About")}
        <div class="about grid">
          <p class="statement reveal">${lines(S.statement)}</p>
          <div class="about-bio">${S.bio.map((b) => `<p>${esc(b)}</p>`).join("")}</div>
          <dl class="dna">
            ${S.dna.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}
          </dl>
        </div>
        <ol class="pillars grid">
          ${S.pillars.map((p) => `<li class="reveal"><b>${esc(p.word)}</b><span>${esc(p.note)}</span></li>`).join("")}
        </ol>
      </section>

      <section class="sec" id="contact">
        ${sectionHead(4, "Contact", "Open to conversations about AI, systems and design")}
        <a class="big-mail" href="mailto:${esc(S.email)}">${esc(S.email)}</a>
      </section>
    </main>`;
  }

  function work() {
    const cats = [...new Set(S.projects.map((p) => p.domain))];
    const count = (c) => S.projects.filter((p) => p.domain === c).length;
    return `<main>
      <section class="page-head">
        <h1 class="mark">Work<sup>${pad(S.projects.length)}</sup></h1>
      </section>
      <div class="toolbar grid">
        <span class="sec-n">Filter</span>
        <div class="filters">
          <button class="on" data-filter="*">All <sup>${S.projects.length}</sup></button>
          ${cats.map((c) => `<button data-filter="${esc(c)}">${esc(c)} <sup>${count(c)}</sup></button>`).join("")}
        </div>
        <div class="views">
          <button class="on" data-view="list">List</button><button data-view="grid">Grid</button>
        </div>
      </div>
      <section data-view-pane="list">${indexTable(S.projects)}</section>
      <section class="works-grid grid" data-view-pane="grid" hidden>${S.projects.map((p) => card(p)).join("")}</section>
    </main>`;
  }

  function project() {
    const id = new URLSearchParams(location.search).get("id");
    const i = Math.max(0, S.projects.findIndex((p) => p.id === id));
    const p = S.projects[i];
    const next = S.projects[(i + 1) % S.projects.length];
    const imgs = p.images?.length ? p.images : [p.cover];
    const [lead, ...rest] = imgs;
    document.title = `${p.title} — ${S.name}`;

    // Chapters alternate with the remaining images so the text stays close to what it describes.
    const chapters = (p.sections || [])
      .map((s, n) => {
        const img = rest[n];
        return `<section class="chapter grid reveal">
          <span class="sec-n">(${pad(n + 1)})</span>
          <h2 class="ch-t">${esc(s.label)}</h2>
          <p class="ch-p">${esc(s.text)}</p>
        </section>
        ${img ? `<figure class="p-fig">${media(img, p.title, pad(n + 2))}</figure>` : ""}`;
      })
      .join("");

    return `<main>
      <section class="page-head">
        <span class="sec-n">(${num(p)}/${pad(S.projects.length)})</span>
        <h1 class="mark">${esc(p.title)}</h1>
      </section>
      <div class="p-lede grid"><p>${esc(p.summary)}</p></div>
      <dl class="p-meta grid">
        <div><dt>Role</dt><dd>${esc(p.role)}</dd></div>
        <div><dt>Organization</dt><dd>${esc(p.org)}</dd></div>
        <div><dt>Domain</dt><dd>${esc(p.domain)}</dd></div>
        <div><dt>Year</dt><dd>${esc(p.year)}</dd></div>
      </dl>
      <figure class="p-fig">${media(lead, p.title, "01")}</figure>
      ${chapters}
      <a class="next grid" href="${projectUrl(next)}">
        <span class="sec-n">Next (${num(next)})</span>
        <span class="next-t">${esc(next.title)} &rarr;</span>
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

  // Work: domain filter (applies to both list and grid)
  document.querySelectorAll(".filters button").forEach((btn) =>
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filters button").forEach((b) => b.classList.toggle("on", b === btn));
      const f = btn.dataset.filter;
      document.querySelectorAll(".works-grid .card, .index a.row").forEach((el) => {
        el.hidden = f !== "*" && el.dataset.cat !== f;
      });
    })
  );

  // Work: list / grid toggle
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
