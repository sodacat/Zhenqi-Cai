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
        <span class="t">${esc(p.title)}</span>
        <span class="m label">${esc(p.domain)}</span>
      </span>
    </a>`;
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
    return `<footer class="foot">
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
          <li><a href="mailto:${esc(S.email)}">${esc(S.email)}</a></li>
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
    const r1 = f.slice(0, 3);
    const r2 = f.slice(3, 5);
    return `<main>
      <section class="intro grid">
        <h1 class="display reveal">${lines(S.tagline)}</h1>
      </section>

      <section class="works" id="work">
        <a class="label works-label" href="work.html">All work</a>
        <div class="row r1">${r1.map((p) => card(p)).join("")}</div>
        ${r2.length ? `<div class="row r2${r2.length === 1 ? " single" : ""}">${r2.map((p) => card(p)).join("")}</div>` : ""}
      </section>

      <section class="sec" id="about">
        <div class="statement grid"><h2 class="display reveal">${lines(S.statement)}</h2></div>
        <div class="about grid">
          <div class="about-media reveal">${media(S.portrait, S.name)}</div>
          <div class="about-body reveal">
            <p class="name">${esc(S.name)}</p>
            <p class="label muted">${esc(S.role)} &mdash; ${esc(S.signature)}</p>
            ${S.bio.map((b) => `<p class="bio">${esc(b)}</p>`).join("")}
            <a class="label more" href="work.html">More work</a>
          </div>
        </div>
      </section>

      <section class="sec offer grid" id="expertise">
        <div class="offer-head">
          <h2 class="display reveal">What I do.</h2>
          <a class="label" href="mailto:${esc(S.email)}">Contact me</a>
        </div>
        <ul class="offer-list">
          ${S.services.map((s) => `<li class="reveal"><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></li>`).join("")}
        </ul>
      </section>

      <section class="sec offer grid" id="principles">
        <div class="offer-head">
          <h2 class="display reveal">How I think.</h2>
          <span class="label muted">Visual &rarr; Product &rarr; AI</span>
        </div>
        <ul class="offer-list">
          ${S.principles.map((p) => `<li class="reveal"><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></li>`).join("")}
        </ul>
      </section>

      <section class="sec dna-sec grid">
        <ol class="pillars">
          ${S.pillars.map((p) => `<li class="reveal"><b>${esc(p.word)}</b><span class="label muted">${esc(p.note)}</span></li>`).join("")}
        </ol>
        <dl class="dna">
          ${S.dna.map(([k, v]) => `<dt class="label muted">${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}
        </dl>
      </section>
    </main>`;
  }

  function work() {
    const cats = [...new Set(S.projects.map((p) => p.domain))];
    const count = (c) => S.projects.filter((p) => p.domain === c).length;
    return `<main>
      <section class="intro grid">
        <h1 class="display reveal">Selected work.<br>${pad(S.projects.length)} projects.</h1>
      </section>
      <div class="toolbar grid label">
        <span class="muted">Filter</span>
        <div class="filters">
          <button class="on" data-filter="*">All <sup>${S.projects.length}</sup></button>
          ${cats.map((c) => `<button data-filter="${esc(c)}">${esc(c)} <sup>${count(c)}</sup></button>`).join("")}
        </div>
        <div class="views">
          <button class="on" data-view="grid">Grid</button><button data-view="list">List</button>
        </div>
      </div>
      <section class="works-grid" data-view-pane="grid">${S.projects.map((p) => card(p)).join("")}</section>
      <section data-view-pane="list" hidden>${indexTable(S.projects)}</section>
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
          <span class="label muted ch-n">(${pad(n + 1)})</span>
          <h2 class="ch-t">${esc(s.label)}</h2>
          <p class="ch-p">${esc(s.text)}</p>
        </section>
        ${img ? `<figure class="p-fig">${media(img, p.title, pad(n + 2))}</figure>` : ""}`;
      })
      .join("");

    return `<main>
      <section class="intro grid">
        <span class="label muted p-count">(${num(p)}/${pad(S.projects.length)})</span>
        <h1 class="display reveal">${esc(p.title)}</h1>
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
        <span class="label muted ch-n">Next (${num(next)})</span>
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
