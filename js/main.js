/* =====================================================================
   main.js — 多页版公共交互
   1) 顶部导航当前页高亮  2) 中英切换  3) 移动端抽屉菜单
   4) 滚动显现动画  5) 页脚年份
   ===================================================================== */
(function () {
  "use strict";

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  var LANG_KEY = "heqa-lang";
  var lang = "zh";
  try { lang = localStorage.getItem(LANG_KEY) || "zh"; } catch (e) { lang = "zh"; }
  if (lang !== "zh" && lang !== "en") lang = "zh";

  function text(obj) {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    return obj[lang] || obj.zh || obj.en || "";
  }

  function resolveKey(key) {
    return key.split(".").reduce(function (o, k) { return o ? o[k] : null; }, I18N_TEXT);
  }

  function applyLang() {
    var root = document.documentElement;
    root.lang = lang === "zh" ? "zh-CN" : "en";
    $$("[data-i18n]").forEach(function (el) {
      var v = resolveKey(el.getAttribute("data-i18n"));
      if (v) el.textContent = text(v);
    });
    var label = $("#langLabel");
    if (label) label.textContent = lang === "zh" ? "EN" : "中文";
  }

  function setLang(next) {
    lang = next === "en" ? "en" : "zh";
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    applyLang();
  }

  /* 顶部导航当前页高亮：按文件名判断 */
  function markActive() {
    var page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    if (!page) page = "index.html";
    $$(".nav-link").forEach(function (a) {
      var href = (a.getAttribute("href") || "").toLowerCase();
      if (href === page) a.classList.add("active");
    });
  }

  /* 移动端抽屉菜单 */
  var toggleBtn = $("#menuToggle");
  var nav = $("#mainNav");
  function closeMenu() {
    if (nav) nav.classList.remove("open");
    if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "false");
  }
  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggleBtn.setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("click", function (e) {
      if (nav.classList.contains("open") && !nav.contains(e.target) && !toggleBtn.contains(e.target)) closeMenu();
    });
  }

  /* 语言切换按钮 */
  var langToggle = $("#langToggle");
  if (langToggle) langToggle.addEventListener("click", function () { setLang(lang === "zh" ? "en" : "zh"); });

  /* 滚动显现动画 */
  function observeReveals() {
    if (!("IntersectionObserver" in window)) {
      $$(".reveal").forEach(function (el) { el.classList.add("visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.08 });
    $$(".reveal:not(.visible)").forEach(function (el) { io.observe(el); });
  }

  /* 页脚年份 */
  var yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  document.addEventListener("DOMContentLoaded", function () {
    markActive();
    applyLang();
    observeReveals();
  });
})();
