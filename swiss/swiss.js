(function () {
  const S = window.SITE;
  const page = document.body.dataset.page;
  const year = new Date().getFullYear();

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const lines = (arr) => arr.map(esc).join("<br>");
  const pad = (n) => String(n).padStart(2, "0");

  // data.js paths are relative to the site root; these pages live one level down.
  const src = (p) => (/^(https?:|\/|\.\.\/)/.test(p) ? p : `../${p}`);
  const projectUrl = (p) => `project.html?id=${encodeURIComponent(p.id)}`;
  const num = (p) => pad(S.projects.indexOf(p) + 1);

  function media(path, alt, n = "") {
    return `<div class="media">
      <span class="ph"><span>${esc(alt)}</span><b>${esc(n)}</b></span>
      <img src="${esc(src(path))}" alt="${esc(alt)}" loading="lazy" decoding="async">
    </div>`;
  }

  function card(p, place = "") {
    return `<a class="card" href="${projectUrl(p)}" data-cat="${esc(p.category)}"${place ? ` style="${place}"` : ""}>
      ${media(p.cover, p.title, num(p))}
      <span class="cap">
        <span class="n">${num(p)}</span>
        <span class="t">${esc(p.title)}</span>
        <span class="m">${esc(p.category)}, ${esc(p.year)}</span>
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
        <span>No.</span><span>Title</span><span>Category</span><span>Client</span><span>Year</span>
      </div>
      ${list
        .map(
          (p) => `<a class="row" role="row" href="${projectUrl(p)}" data-cat="${esc(p.category)}" data-cover="${esc(src(p.cover))}" data-n="${num(p)}">
        <span>${num(p)}</span><span class="t">${esc(p.title)}</span><span>${esc(p.category)}</span><span>${esc(p.client)}</span><span>${esc(p.year)}</span>
      </a>`
        )
        .join("")}
    </div>`;
  }

  /* ---------- Chrome ---------- */
  function header() {
    const nav = [
      ["Works", "works.html", "works"],
      ["About", "index.html#about", ""],
      ["Services", "index.html#services", ""],
      ["Contact", "index.html#contact", ""]
    ];
    return `<header class="top grid">
      <a class="h-name" href="index.html">${esc(S.name)}</a>
      <span class="h-role">${esc(S.role).replace(" &amp; ", " &amp;<br>")}</span>
      <nav class="h-nav" aria-label="Primary">
        ${nav.map(([t, h, k]) => `<a href="${h}"${k && page === k ? ' aria-current="page"' : ""}>${t}</a>`).join("")}
      </nav>
      <span class="h-meta">Portfolio<br>&copy;${year}</span>
    </header>`;
  }

  function footer() {
    return `<footer class="foot grid">
      <span class="f1">&copy; ${year} ${esc(S.name)}<br>All rights reserved.</span>
      <ul class="f2">${S.social.map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a></li>`).join("")}</ul>
      <ul class="f3">
        <li><a href="works.html">Works</a></li><li><a href="index.html#about">About</a></li>
        <li><a href="index.html#services">Services</a></li><li><a href="mailto:${esc(S.email)}">Contact</a></li>
      </ul>
      <a class="f4" href="#top">Back to top &uarr;</a>
    </footer>`;
  }

  /* ---------- Pages ---------- */
  // Asymmetric placement on the 12-column grid for the featured works.
  const FEATURE_LAYOUT = [
    "--c:1 / span 7; --r:4/5",
    "--c:9 / span 4; --r:3/4; align-self:end",
    "--c:1 / span 4; --r:3/4",
    "--c:6 / span 7; --r:3/2; align-self:end",
    "--c:4 / span 6; --r:4/5"
  ];

  function home() {
    const f = S.projects.filter((p) => p.featured).slice(0, FEATURE_LAYOUT.length);
    const [first, last] = S.name.split(" ");
    return `<main>
      <section class="hero">
        <h1 class="mark">${esc(first)}<br>${esc(last || "")}<i>.</i></h1>
        <div class="hero-row grid">
          <span class="hr-l">Photographer<br>&amp; Visual Director</span>
          <p class="hr-c">${lines(S.tagline)}</p>
          <p class="hr-r">${esc(S.bio)}</p>
        </div>
      </section>

      <section class="sec" id="works">
        ${sectionHead(1, "Selected Works", `<a href="works.html">All works (${S.projects.length}) &rarr;</a>`)}
        <div class="feature grid">${f.map((p, i) => card(p, FEATURE_LAYOUT[i])).join("")}</div>
      </section>

      <section class="sec">
        ${sectionHead(2, "Index", `${S.projects.length} projects`)}
        ${indexTable(S.projects)}
      </section>

      <section class="sec" id="about">
        ${sectionHead(3, "About")}
        <div class="about grid">
          <p class="statement">${lines(S.statement)}</p>
          <div class="about-img">${media(S.portrait, S.name)}</div>
          <div class="about-bio">
            <p>${esc(S.bio)}</p>
          </div>
          <dl class="about-meta">
            <dt>Name</dt><dd>${esc(S.name)}</dd>
            <dt>Role</dt><dd>${esc(S.role)}</dd>
            <dt>Based</dt><dd>${S.address.map(esc).join("<br>")}</dd>
          </dl>
        </div>
      </section>

      <section class="sec" id="services">
        ${sectionHead(4, "Services")}
        <ol class="services grid">
          ${S.services.map((s, i) => `<li><span class="n">${pad(i + 1)}</span><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></li>`).join("")}
        </ol>
      </section>

      <section class="sec" id="contact">
        ${sectionHead(5, "Contact", "Available for commissions")}
        <a class="big-mail" href="mailto:${esc(S.email)}">${esc(S.email)}</a>
      </section>
    </main>`;
  }

  function works() {
    const cats = [...new Set(S.projects.map((p) => p.category))];
    const count = (c) => S.projects.filter((p) => p.category === c).length;
    return `<main>
      <section class="page-head">
        <h1 class="mark">Works<sup>${pad(S.projects.length)}</sup></h1>
      </section>
      <div class="toolbar grid">
        <span class="sec-n">Filter</span>
        <div class="filters">
          <button class="on" data-filter="*">All <sup>${S.projects.length}</sup></button>
          ${cats.map((c) => `<button data-filter="${esc(c)}">${esc(c)} <sup>${count(c)}</sup></button>`).join("")}
        </div>
        <div class="views">
          <button class="on" data-view="grid">Grid</button><button data-view="list">List</button>
        </div>
      </div>
      <section class="works-grid grid" data-view-pane="grid">${S.projects.map((p) => card(p)).join("")}</section>
      <section data-view-pane="list" hidden>${indexTable(S.projects)}</section>
    </main>`;
  }

  function project() {
    const id = new URLSearchParams(location.search).get("id");
    const i = Math.max(0, S.projects.findIndex((p) => p.id === id));
    const p = S.projects[i];
    const next = S.projects[(i + 1) % S.projects.length];
    const imgs = p.images?.length ? p.images : [p.cover];
    document.title = `${p.title} — ${S.name}`;

    return `<main>
      <section class="page-head">
        <span class="sec-n">(${num(p)}/${pad(S.projects.length)})</span>
        <h1 class="mark">${esc(p.title)}</h1>
      </section>
      <dl class="p-meta grid">
        <div><dt>Category</dt><dd>${esc(p.category)}</dd></div>
        <div><dt>Year</dt><dd>${esc(p.year)}</dd></div>
        <div><dt>Client</dt><dd>${esc(p.client)}</dd></div>
        <div class="desc"><dt>About</dt><dd>${esc(p.description)}</dd></div>
      </dl>
      <section class="gallery grid">
        ${imgs
          .map((s, n) => {
            // Rhythm: full width, then pairs.
            const full = n % 3 === 0;
            return `<figure style="--c:${full ? "1 / -1; --r:3/2" : (n % 3 === 1 ? "1" : "7") + " / span 6; --r:4/5"}">
              ${media(s, p.title, pad(n + 1))}
              <figcaption>${pad(n + 1)} / ${pad(imgs.length)}</figcaption>
            </figure>`;
          })
          .join("")}
      </section>
      <a class="next grid" href="${projectUrl(next)}">
        <span class="sec-n">Next (${num(next)})</span>
        <span class="next-t">${esc(next.title)} &rarr;</span>
      </a>
    </main>`;
  }

  /* ---------- Render ---------- */
  const views = { home, works, project };
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

  // Works: category filter (applies to both grid and list)
  document.querySelectorAll(".filters button").forEach((btn) =>
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filters button").forEach((b) => b.classList.toggle("on", b === btn));
      const f = btn.dataset.filter;
      document.querySelectorAll(".works-grid .card, .index a.row").forEach((el) => {
        el.hidden = f !== "*" && el.dataset.cat !== f;
      });
    })
  );

  // Works: grid / list toggle
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
        pv.style.transform = `translate(${e.clientX + 24}px, ${e.clientY - 80}px)`;
      });
    });
  }

  if (location.hash) document.querySelector(location.hash)?.scrollIntoView();
})();
