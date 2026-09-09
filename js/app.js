/* =====================================================================
   app.js — 单页应用渲染引擎
   职责：语言切换、路由渲染各页面、模态框、导航交互
   ===================================================================== */
(function () {
  "use strict";

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  /* ---------- 工具：双语取值 ---------- */
  function L(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return obj[I18N.lang] || obj.zh || obj.en || "";
  }

  /* ---------- 语言管理 ---------- */
  let lang;
  try { lang = localStorage.getItem("heqa-lang") || I18N.lang; } catch (e) { lang = I18N.lang; }
  if (lang !== "zh" && lang !== "en") lang = "zh";

  function setLang(l) {
    lang = l;
    I18N.lang = l;
    try { localStorage.setItem("heqa-lang", l); } catch (e) {}
    $("#langLabel").textContent = lang === "zh" ? "EN" : "中文";
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    applyStaticI18n();
    renderCurrent();
  }

  /* ---------- 静态文案（导航等） ---------- */
  function applyStaticI18n() {
    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const v = key.split(".").reduce((o, k) => (o ? o[k] : null), I18N);
      if (v) el.textContent = L(v);
    });
    // header 标题
    $("#brandTitle").textContent = L(PROFILE.name) + (lang === "zh" ? " · 学术主页" : " · Academic Homepage");
    $("#brandSub").textContent = lang === "zh" ? "高等教育评估与质量保障" : "Higher Education Assessment & Quality Assurance";
  }

  /* ---------- 图标辅助 ---------- */
  const esc = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

  /* 把字段规范化为段落数组：兼容“字符串(以换行分段)”与“字符串数组”两种写法 */
  function paragraphs(obj) {
    const v = L(obj);
    if (Array.isArray(v)) return v.filter(Boolean);
    return String(v == null ? "" : v).split("\n").filter(Boolean);
  }

  /* ================= 各页面模板 ================= */

  function pageHead(metaKey, intro) {
    const m = PAGES_META[metaKey];
    return `
      <div class="page-head">
        <span class="eyebrow">${L(m.eyebrow)}</span>
        <h1>${L(m.title)}</h1>
        ${intro ? `<p>${L(intro)}</p>` : ""}
      </div>`;
  }

  /* ---- 首页 ---- */
  function tplHome() {
    const h = HOME;
    const stats = h.hero.stats.map((s) => `
      <div class="hero-stat">
        <i class="${s.icon}"></i>
        <div><b>${L(s.title)}</b><span>${L(s.desc)}</span></div>
      </div>`).join("");

    const cards = h.section1.cards.map((c) => `
      <article class="card clickable reveal" data-goto="${c.action}">
        <div class="card-icon"><i class="${c.icon}"></i></div>
        <h3>${L(c.title)}</h3>
        <p>${L(c.text)}</p>
        <a class="more" data-goto="${c.action}">${lang === "zh" ? "了解更多 →" : "Learn more →"}</a>
      </article>`).join("");

    const updates = h.section2.updates.map((u) => `
      <div class="card reveal" style="display:flex;flex-direction:column;justify-content:space-between;gap:10px">
        <div>
          <span class="pub-type pt-report">${L(u.tag)}</span>
          <h3 style="font-size:16px;margin:8px 0 4px">${L(u.title)}</h3>
        </div>
        <span style="color:var(--ink-soft);font-size:13px"><i class="fa-regular fa-calendar"></i> ${L(u.date)}</span>
      </div>`).join("");

    return `
      <section class="container">
        <div class="hero reveal visible">
          <div class="hero-grid">
            <div>
              <span class="eyebrow">${L(h.hero.eyebrow)}</span>
              <h1>${L(PROFILE.name)}</h1>
              <div class="title-en">${L(PROFILE.focus)}</div>
              <p class="tagline">${L(h.hero.tagline)}</p>
              <div class="hero-chips">${PROFILE.keywords.map((k) => `<span class="chip">${L(k)}</span>`).join("")}</div>
              <div class="hero-actions">
                <button class="btn btn-gold" data-goto="research"><i class="fa-solid fa-flask"></i> ${L(h.hero.ctaPrimary)}</button>
                <button class="btn btn-ghost" data-goto="knowledge"><i class="fa-solid fa-book-open-reader"></i> ${L(h.hero.ctaSecondary)}</button>
              </div>
            </div>
            <aside class="hero-card">
              <h3>${lang === "zh" ? "研究速览" : "At a Glance"}</h3>
              ${stats}
            </aside>
          </div>
        </div>

        <h2 class="section-title reveal">${L(h.section1.title)}</h2>
        <p class="section-sub reveal">${L(h.section1.sub)}</p>
        <div class="grid-3">${cards}</div>

        <h2 class="section-title reveal" style="margin-top:48px">${L(h.section2.title)}</h2>
        <p class="section-sub reveal">${L(h.section2.sub)}</p>
        <div class="grid-3">${updates}</div>
      </section>`;
  }

  /* ---- 个人简介 ---- */
  function tplAbout() {
    const edu = ABOUT.education.map((e) => `
      <div class="tl-item reveal">
        <div class="tl-year">${L(e.year)}</div>
        <h4>${L(e.title)}</h4>
        <p><i class="fa-solid fa-building-columns" style="margin-right:6px;color:var(--navy-600)"></i>${L(e.org)}</p>
        <p>${L(e.desc)}</p>
      </div>`).join("");

    const interests = ABOUT.researchInterests.map((r) => `
      <li class="reveal"><i class="fa-solid fa-circle-check"></i>${L(r)}</li>`).join("");

    return `
      <div class="container">
        ${pageHead("about")}
        <div class="about-layout">
          <aside class="profile-card card reveal">
            <div class="avatar"><i class="${PROFILE.avatarIcon}"></i></div>
            <h2>${L(PROFILE.name)}</h2>
            <div class="role">${L(PROFILE.degree)}</div>
            <ul class="profile-meta">
              <li><i class="fa-solid fa-building-columns"></i>${L(PROFILE.institution)}</li>
              <li><i class="fa-solid fa-bullseye"></i>${L(PROFILE.focus)}</li>
              <li><i class="fa-solid fa-envelope"></i>${PROFILE.email}</li>
            </ul>
          </aside>

          <div class="bio">
            <h2 class="reveal">${L(ABOUT.bioTitle)}</h2>
            ${paragraphs(ABOUT.bio).map((p) => `<p class="reveal">${esc(p)}</p>`).join("")}

            <h2 class="reveal" style="margin-top:34px">${L(ABOUT.researchInterestTitle)}</h2>
            <ul class="profile-meta" style="border:0;padding:0">${interests}</ul>

            <h2 class="reveal" style="margin-top:34px">${L(ABOUT.eduTitle)}</h2>
            <div class="timeline">${edu}</div>

            <div class="advisor-box reveal">
              <i class="fa-solid fa-quote-left"></i>
              <p>${esc(L(ABOUT.advisor))}</p>
            </div>
          </div>
        </div>
      </div>`;
  }

  /* ---- 研究领域 ---- */
  function tplResearch() {
    const areas = RESEARCH.areas.map((a) => `
      <article class="card area-card reveal">
        <div class="area-num">${a.num}</div>
        <div>
          <h3>${L(a.title)}</h3>
          <p>${L(a.text)}</p>
          <div class="tags">${a.tags.map((t) => `<span class="tag">${L(t)}</span>`).join("")}</div>
        </div>
      </article>`).join("");

    const methods = RESEARCH.methods.map((m) => `
      <div class="meth-chip reveal"><i class="${m.icon}"></i><div>${L(m)}</div></div>`).join("");

    return `
      <div class="container">
        ${pageHead("research")}
        <div class="research-intro reveal">
          ${paragraphs(RESEARCH.intro).map((p) => `<p>${esc(p)}</p>`).join("")}
          <ul>
            ${RESEARCH.intro.questions.map((q) => `<li>${L(q)}</li>`).join("")}
          </ul>
        </div>
        <h2 class="section-title reveal">${L(RESEARCH.areasTitle)}</h2>
        <div style="display:grid;gap:18px">${areas}</div>

        <h2 class="section-title reveal" style="margin-top:48px">${L(RESEARCH.methodTitle)}</h2>
        <div class="grid-3">${methods}</div>
      </div>`;
  }

  /* ---- 学术成果 ---- */
  function tplPublications() {
    const typeClass = { journal: "pt-journal", conf: "pt-conf", report: "pt-report", project: "pt-project" };
    const groups = PUBLICATIONS.groups.map((g) => {
      const items = g.items.map((it) => `
        <li class="pub-item reveal">
          <span class="pub-type ${typeClass[g.type] || "pt-report"}">${L(g.title)}</span>
          <h4>${esc(L(it.title))}</h4>
          ${it.authors ? `<p class="authors">${esc(L(it.authors))}</p>` : ""}
          <p class="venue">${esc(L(it.venue))}</p>
        </li>`).join("");
      return `<h3 class="pub-year reveal">${L(g.title)}</h3><ul class="pub-list">${items}</ul>`;
    }).join("");

    return `
      <div class="container" style="max-width:900px">
        ${pageHead("publications")}
        ${groups}
        <div class="notice reveal">
          <i class="fa-solid fa-circle-info"></i>
          <span>${L(PUBLICATIONS.note)}</span>
        </div>
      </div>`;
  }

  /* ---- 知识分享 ---- */
  function tplKnowledge() {
    const cards = KNOWLEDGE.articles.map((a) => `
      <article class="card know-card clickable reveal" data-article="${a.id}">
        <div class="card-icon" style="background:var(--gold-100);color:#a88616"><i class="${a.icon}"></i></div>
        <div class="know-meta">
          <span><i class="fa-solid fa-tag"></i> ${L(a.tag)}</span>
          <span><i class="fa-regular fa-calendar"></i> ${L(a.date)}</span>
        </div>
        <h3>${L(a.title)}</h3>
        <p>${L(a.summary)}</p>
        <a class="more">${lang === "zh" ? "阅读全文 →" : "Read more →"}</a>
      </article>`).join("");

    return `
      <div class="container" style="max-width:1000px">
        ${pageHead("knowledge")}
        <p class="section-sub reveal" style="text-align:center;max-width:720px;margin-inline:auto">${L(KNOWLEDGE.intro)}</p>
        <div style="display:grid;gap:20px">${cards}</div>
      </div>`;
  }

  /* ---- 联系方式 ---- */
  function tplContact() {
    const items = CONTACT.items.map((c) => {
      const val = L(c.value);
      const inner = c.href
        ? `<a href="${c.href}" style="display:block"><b>${L(c.label)}</b><span>${esc(val)}</span></a>`
        : `<div><b>${L(c.label)}</b><span>${esc(val)}</span></div>`;
      return `
        <div class="contact-item reveal">
          <div class="ci-icon"><i class="${c.icon}"></i></div>
          ${inner}
        </div>`;
    }).join("");

    return `
      <div class="container">
        ${pageHead("contact")}
        <div class="contact-grid">
          <div>
            ${items}
          </div>
          <aside class="contact-note reveal">
            <h3><i class="fa-solid fa-handshake" style="color:var(--gold-500);margin-right:6px"></i>${L(CONTACT.note)}</h3>
            <p>${L(CONTACT.note.body)}</p>
            <div style="margin-top:16px;font-size:13px;color:var(--gold-500)">
              <i class="fa-brands fa-creative-commons"></i>
              ${lang === "zh" ? "内容采用知识共享 · 署名—非商业性使用" : "Content shared under CC BY-NC"}
            </div>
          </aside>
        </div>
      </div>`;
  }

  /* ---------- 渲染路由 ---------- */
  const ROUTES = {
    home: tplHome,
    about: tplAbout,
    research: tplResearch,
    publications: tplPublications,
    knowledge: tplKnowledge,
    contact: tplContact,
  };

  function currentRoute() {
    const h = (location.hash || "#/home").replace(/^#\//, "");
    return ROUTES[h] ? h : "home";
  }

  function renderCurrent() {
    const route = currentRoute();
    const app = $("#app");
    app.innerHTML = ROUTES[route]();
    $$(".nav-link").forEach((b) => b.classList.toggle("active", b.dataset.nav === route));
    closeMenu();
    scrollTo({ top: 0, behavior: "auto" });
    observeReveals();
    bindActions();
  }

  /* ---------- 滚动显现动画 ---------- */
  function observeReveals() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
    }, { threshold: 0.08 });
    $$(".reveal:not(.visible)").forEach((el) => io.observe(el));
  }

  /* ---------- 动作绑定 ---------- */
  function openArticle(id) {
    const a = KNOWLEDGE.articles.find((x) => x.id === id);
    if (!a) return;
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.innerHTML = `
      <div class="modal-box" role="dialog" aria-modal="true">
        <div class="modal-head">
          <div>
            <span class="pub-type pt-report">${L(a.tag)} · ${L(a.date)}</span>
            <h2 style="margin-top:8px">${L(a.title)}</h2>
          </div>
          <button class="modal-close" aria-label="close"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="modal-body article-html">${L(a.body)}</div>
      </div>`;
    $("#modalRoot").appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add("open"));
    document.body.style.overflow = "hidden";
    overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });
    $(".modal-close", overlay).addEventListener("click", closeModal);
    document.addEventListener("keydown", onEsc);
  }

  function closeModal() {
    const o = $(".modal-overlay");
    if (!o) return;
    o.classList.remove("open");
    document.body.style.overflow = "";
    setTimeout(() => o.remove(), 250);
    document.removeEventListener("keydown", onEsc);
  }
  function onEsc(e) { if (e.key === "Escape") closeModal(); }

  function goto(route) { location.hash = "#/" + route; }

  function bindActions() {
    $$("[data-goto]").forEach((el) => el.addEventListener("click", () => goto(el.dataset.goto)));
    $$("[data-article]").forEach((el) => el.addEventListener("click", () => openArticle(el.dataset.article)));
  }

  /* ---------- 移动端菜单 ---------- */
  const menuToggle = $("#menuToggle");
  const mainNav = $("#mainNav");
  function closeMenu() { mainNav.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false"); }
  menuToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  /* ---------- 事件 ---------- */
  window.addEventListener("hashchange", renderCurrent);
  $("#langToggle").addEventListener("click", () => setLang(lang === "zh" ? "en" : "zh"));

  // 顶栏导航按钮（静态元素，仅需绑定一次）：点击切换到对应路由
  $$(".nav-link").forEach((b) => b.addEventListener("click", () => goto(b.dataset.nav)));

  /* ---------- 启动 ---------- */
  applyStaticI18n();
  renderCurrent();
})();
