/*
 * PostHog analytics (US cloud). Anonymous, privacy-light:
 *  - no autocapture, no session recording, no person profiles
 *  - honours the browser's Do Not Track setting
 *  - never runs on localhost
 *  - add ?notrack=1 to any page once to stop counting your own visits in that
 *    browser (?notrack=0 turns counting back on)
 *
 * Events: $pageview (automatic), case_study_viewed, experiment_viewed,
 * contact_link_clicked, resume_clicked.
 * The project token below is a write-only public key, safe to ship.
 */
(function (w, d) {
  var TOKEN = "phc_mXAHDPs9SzPRaXzpZaW5S5FnBmJz7FthJFhKM7CUrNDd";
  var HOST = "https://us.i.posthog.com";

  var host = location.hostname;
  if (host === "localhost" || host === "127.0.0.1" || host === "" || host.slice(-6) === ".local") return;

  try {
    var q = new URLSearchParams(location.search).get("notrack");
    if (q === "1") localStorage.setItem("zc-notrack", "1");
    if (q === "0") localStorage.removeItem("zc-notrack");
    if (localStorage.getItem("zc-notrack") === "1") return;
  } catch (e) { /* storage blocked: track normally */ }

  /* Minimal loader stub: queues calls until PostHog's array.js has loaded */
  var ph = (w.posthog = w.posthog || []);
  if (ph.__SV) return;
  ph._i = [];
  ["capture", "identify", "register", "register_once", "reset", "set_config", "opt_out_capturing", "opt_in_capturing"].forEach(function (m) {
    ph[m] = function () { ph.push([m].concat([].slice.call(arguments, 0))); };
  });
  ph.init = function (key, cfg) {
    var s = d.createElement("script");
    s.async = true;
    s.crossOrigin = "anonymous";
    s.src = cfg.api_host.replace(".i.posthog.com", "-assets.i.posthog.com") + "/static/array.js";
    d.head.appendChild(s);
    ph._i.push([key, cfg, undefined]);
  };
  ph.__SV = 1;

  ph.init(TOKEN, {
    api_host: HOST,
    autocapture: false,
    capture_pageview: true,
    capture_pageleave: false,
    disable_session_recording: true,
    person_profiles: "identified_only",
    respect_dnt: true
  });

  function track(name, props) { try { w.posthog.capture(name, props || {}); } catch (e) { /* never break the page */ } }

  /* Which case study / experiment is this page? */
  function pageEvent() {
    var path = location.pathname;
    var id = new URLSearchParams(location.search).get("id");
    if (/project\.html$/.test(path) && id) return ["case_study_viewed", { project: id }];
    if (/\/tetrate\/(index\.html)?$/.test(path)) return ["case_study_viewed", { project: "tetrate" }];
    if (/\/experiments\//.test(path)) {
      var m = path.match(/\/experiments\/([^/.]+)/);
      return ["experiment_viewed", { experiment: m ? m[1] : path }];
    }
    return null;
  }
  var pe = pageEvent();
  if (pe) track(pe[0], pe[1]);

  /* The site renders its links after load, so listen on the document */
  d.addEventListener("click", function (ev) {
    var a = ev.target && ev.target.closest ? ev.target.closest("a[href]") : null;
    if (!a) return;
    var href = a.getAttribute("href") || "";
    var where = location.pathname + location.hash;
    if (/Resume_Zhenqi_Cai\.pdf/i.test(href)) {
      track("resume_clicked", { from: where });
    } else if (/^mailto:/i.test(href)) {
      track("contact_link_clicked", { type: "email", from: where });
    } else if (/linkedin\.com/i.test(href)) {
      track("contact_link_clicked", { type: "linkedin", from: where });
    }
  }, true);
})(window, document);
