/* =====================================================================
   i18n.js — 多页版界面文案（中英）
   内容主体以简体中文为主，这里负责导航、页脚等公共界面文案。
   使用：给元素加 data-i18n="key"，切换语言时自动替换文本。
   ===================================================================== */
const I18N_TEXT = {
  brandName: { zh: "乐一 · 学术主页", en: "Leyi · Academic Homepage" },
  brandTag: {
    zh: "高等教育评估与质量保障",
    en: "Higher Education Assessment & Quality Assurance",
  },
  nav: {
    home: { zh: "首页", en: "Home" },
    about: { zh: "个人简介", en: "About" },
    research: { zh: "研究领域", en: "Research" },
    publications: { zh: "学术成果", en: "Publications" },
    knowledge: { zh: "知识分享", en: "Knowledge" },
    contact: { zh: "联系方式", en: "Contact" },
  },
  footer: {
    note: {
      zh: "本页内容基于高等教育评估与质量保障领域公开文献整理，仅供学习交流。",
      en: "Content curated from public literature in higher education assessment & QA, for learning purposes.",
    },
  },
  common: {
    readMore: { zh: "阅读全文 →", en: "Read more →" },
    learnMore: { zh: "了解更多 →", en: "Learn more →" },
    backList: { zh: "← 返回知识专栏", en: "← Back to Knowledge" },
    listArticles: { zh: "查看文章", en: "View article" },
    explore: { zh: "浏览研究领域", en: "Explore Research" },
    readKnowledge: { zh: "进入知识专栏", en: "Read Knowledge" },
    contactMe: { zh: "联系我", en: "Contact me" },
    enTip: {
      zh: "本页以简体中文为主，关键标题提供英文对照。",
      en: "This site is primarily in Simplified Chinese, with English provided for key headings.",
    },
  },
};
