/* =====================================================================
   data.js — 全站内容（中英双语）
   ✏️ 编辑此文件即可更新页面内容（姓名、简介、成果、文章等）。
   若某项双语留空，将回退到另一种语言，方便逐步补充。
   ===================================================================== */

const I18N = {
  lang: "zh", // 默认语言
  nav: {
    home:    { zh: "首页",           en: "Home" },
    about:   { zh: "个人简介",       en: "About" },
    research:{ zh: "研究领域",       en: "Research" },
    publications: { zh: "学术成果",  en: "Publications" },
    knowledge: { zh: "知识分享",     en: "Knowledge" },
    contact: { zh: "联系方式",       en: "Contact" },
  },
  footer: {
    built: {
      zh: "本页内容基于高等教育评估与质量保障领域公开文献整理，仅供学习交流。",
      en: "Content curated from public literature in higher education assessment & QA, for learning purposes."
    }
  }
};

/* ---------------- 个人档案（替换为自己的真实信息） ---------------- */
const PROFILE = {
  name: { zh: "乐一", en: "Your Name" },
  degree: { zh: "教育博士研究生", en: "Doctoral Candidate in Education (Ed.D.)" },
  focus: { zh: "高等教育评估与质量保障", en: "Higher Education Assessment & Quality Assurance" },
  institution: { zh: "澳门科技大学", en: "Macau University of Science and Technology (MUST)" },
  email: "junjiel10@student.must.edu.mo",
  avatarIcon: "fa-solid fa-user-graduate",
  keywords: [
    { zh: "院校评估", en: "Institutional Review" },
    { zh: "专业认证", en: "Programme Accreditation" },
    { zh: "学习成果评估", en: "SLO Assessment" },
    { zh: "内部质量保障", en: "Internal QA" },
    { zh: "质量文化", en: "Quality Culture" },
  ],
};

/* ---------------- 首页数据 ---------------- */
const HOME = {
  hero: {
    eyebrow: { zh: "HEQA · 高等教育评估与质量保障", en: "HEQA · Higher Education Assessment & Quality Assurance" },
    tagline: {
      zh: "以评估推动改进，以证据支撑质量。本主页系统分享高等教育评估与质量保障体系的研究心得、前沿文献与实务方法，期待与同行交流共进。",
      en: "Assessment for improvement, quality through evidence. Sharing insights on higher education assessment systems, frontier literature and practice — open to dialogue with fellow scholars."
    },
    chips: [
      { zh: "博士研究生", en: "Ed.D. Candidate" },
      { zh: "澳门科技大学", en: "Macau University of Science and Technology" },
      { zh: "导师：孙建荣 教授", en: "Supervised by Prof. SUN Jianrong" },
    ],
    stats: [
      { icon: "fa-solid fa-graduation-cap", title: { zh: "研究聚焦", en: "Research Focus" }, desc: { zh: "质量保障体系构建", en: "QA System Building" } },
      { icon: "fa-solid fa-chart-line", title: { zh: "方法取向", en: "Methodology" }, desc: { zh: "证据驱动的改进评估", en: "Evidence-based Evaluation" } },
      { icon: "fa-solid fa-earth-asia", title: { zh: "国际视野", en: "Global View" }, desc: { zh: "粤港澳与内地比较研究", en: "GBA & Mainland Comparisons" } },
    ],
    ctaPrimary: { zh: "了解研究领域", en: "Explore Research" },
    ctaSecondary: { zh: "阅读知识专栏", en: "Read Knowledge" },
  },
  section1: {
    title: { zh: "关于本主页", en: "About This Homepage" },
    sub: { zh: "从博士生视角，连接质量保障的“理论—政策—实践”。", en: "A doctoral perspective bridging QA theory, policy and practice." },
    cards: [
      {
        icon: "fa-solid fa-book-open",
        title: { zh: "知识专栏", en: "Knowledge Hub" },
        text: { zh: "以通俗而严谨的方式，解读高等教育评估与质量保障的核心概念与体系框架。", en: "Clear, rigorous explanations of core concepts and frameworks in HE assessment & QA." },
        action: "knowledge",
      },
      {
        icon: "fa-solid fa-flask",
        title: { zh: "研究成果", en: "Research Output" },
        text: { zh: "记录攻读博士学位期间的研究进展、论文与学术报告。", en: "Track research progress, papers and talks during doctoral study." },
        action: "publications",
      },
      {
        icon: "fa-solid fa-people-group",
        title: { zh: "交流合作", en: "Engage" },
        text: { zh: "欢迎就院校评估、专业认证、学习成果评估等议题来信交流。", en: "Open to correspondence on institutional review, accreditation and SLO assessment." },
        action: "contact",
      },
    ],
  },
  section2: {
    title: { zh: "近期动态", en: "Recent Updates" },
    sub: { zh: "以下为示例条目，可在 data.js 中替换。", en: "Sample items — replace in data.js." },
    updates: [
      {
        tag: { zh: "博士课程", en: "Coursework" },
        title: { zh: "完成「高等教育质量保障」专题研讨", en: "Completed seminar on Higher Education Quality Assurance" },
        date: { zh: "2026-05", en: "May 2026" },
      },
      {
        tag: { zh: "会议报告", en: "Conference" },
        title: { zh: "参加区域高校评估研讨会并作报告", en: "Presented at a regional university evaluation symposium" },
        date: { zh: "2025-12", en: "Dec 2025" },
      },
      {
        tag: { zh: "专栏更新", en: "Blog" },
        title: { zh: "《什么是高等教育质量保障体系》已上线", en: "New article: What is a Higher Education QA System?" },
        date: { zh: "2025-09", en: "Sep 2025" },
      },
    ],
  },
};

/* ---------------- 个人简介 ---------------- */
const ABOUT = {
  bioTitle: { zh: "个人简介", en: "Biography" },
  bio: {
    zh: [
      "本人是澳门科技大学教育博士（Ed.D.）研究生，师从孙建荣教授（澳门科技大学原副校长、资深高等教育评估专家），研究方向聚焦高等教育评估与质量保障体系。",
      "在澳门多元文化、高教体制与粤港澳大湾区融合发展的背景下，我的研究关注：院校内部质量保障机制如何有效运行、学生学习成果如何被科学评估、以及外部评估与认证如何真正促进质量改进而非仅满足合规。",
      "本主页是我持续学习与思考的记录平台，希望通过系统化整理国内外质量保障文献与实务，为正在建立或完善质量保障体系的院校提供参考。",
    ],
    en: [
      "I am a doctoral candidate in Education (Ed.D.) at Macau University of Science and Technology, supervised by Prof. SUN Jianrong (former Vice President of MUST and an established expert in higher education evaluation), researching higher education assessment and quality assurance systems.",
      "Against the backdrop of Macau's multicultural context and the integration of the Guangdong–Hong Kong–Macao Greater Bay Area, my work examines how internal quality assurance mechanisms operate effectively, how student learning outcomes are assessed rigorously, and how external review and accreditation can drive genuine improvement rather than mere compliance.",
      "This homepage documents my ongoing learning. By systematically synthesizing QA literature and practice, I hope to offer useful references to institutions building or refining their own quality assurance systems.",
    ],
  },
  eduTitle: { zh: "教育背景", en: "Education" },
  education: [
    {
      year: { zh: "2024 — 至今", en: "2024 – Present" },
      title: { zh: "教育博士（Ed.D.）", en: "Doctor of Education (Ed.D.)" },
      org: { zh: "澳门科技大学", en: "Macau University of Science and Technology" },
      desc: { zh: "方向：高等教育评估与质量保障；导师：孙建荣 教授。", en: "Focus: HE Assessment & QA; Supervisor: Prof. SUN Jianrong." },
    },
    {
      year: { zh: "20XX — 20XX", en: "20XX – 20XX" },
      title: { zh: "硕士（示例，请替换）", en: "Master's Degree (sample)" },
      org: { zh: "示例院校", en: "Sample University" },
      desc: { zh: "专业方向示例。", en: "Example discipline." },
    },
  ],
  researchInterestTitle: { zh: "研究兴趣", en: "Research Interests" },
  researchInterests: [
    { zh: "高等教育内部质量保障机制", en: "Internal Quality Assurance Mechanisms" },
    { zh: "院校评估与专业认证", en: "Institutional Review & Programme Accreditation" },
    { zh: "学生学习成果评估（SLO/OBE）", en: "Student Learning Outcomes Assessment (SLO/OBE)" },
    { zh: "质量文化与持续改进", en: "Quality Culture & Continuous Improvement" },
    { zh: "粤港澳大湾区高教质量保障比较", en: "Comparative QA in the Greater Bay Area" },
  ],
  advisor: {
    zh: "我的导师孙建荣教授长期致力于高等教育评估、学生学习成果评价与院校质量保障研究，曾在多项重要评估与认证工作中发挥关键作用。他常提醒我：评估的目的不是排名与标签，而是基于证据的诊断与改进。",
    en: "My supervisor, Prof. SUN Jianrong, has long specialized in higher education evaluation, student learning outcome assessment and institutional quality assurance, playing key roles in major review and accreditation efforts. He often reminds me: evaluation is not about ranking or labels, but about evidence-based diagnosis and improvement.",
  },
};

/* ---------------- 研究领域 ---------------- */
const RESEARCH = {
  intro: {
    zh: "高等教育质量保障体系可理解为一套围绕“人才培养质量”的运行系统：它由院校内部质量保障（IQA）与外部质量保障（EQA）共同构成，并以评估、认证、监测为手段，推动质量持续改进。我的研究试图回答三个相互关联的问题：",
    en: "A higher education QA system can be understood as an operating system built around the quality of talent development. It comprises internal quality assurance (IQA) and external quality assurance (EQA), using review, accreditation and monitoring to drive continuous improvement. My research addresses three interrelated questions:",
    questions: [
      { zh: "体系如何设计？—— 质量保障体系的结构、标准与程序如何科学构建。", en: "How is a system designed? — How to construct sound structures, standards and procedures." },
      { zh: "证据如何产生？—— 学习成果与办学质量如何被可信地测量与呈现。", en: "How is evidence produced? — How learning outcomes and institutional quality are credibly measured." },
      { zh: "结果如何使用？—— 评估结论如何转化为真正的教学改进。", en: "How are results used? — How findings translate into real teaching improvement." },
    ],
  },
  areasTitle: { zh: "主要研究领域", en: "Main Research Areas" },
  areas: [
    {
      num: "01",
      title: { zh: "高等教育质量保障体系与制度建设", en: "QA Systems & Institutional Design" },
      text: {
        zh: "梳理国际主流质量保障框架（如欧洲 ESG、美国区域认证、内地审核评估）的结构与逻辑，探讨制度移植与本土化建设。",
        en: "Examining the architecture of mainstream QA frameworks (e.g., European ESG, US regional accreditation, mainland review) and the localization of QA regimes."
      },
      tags: [ { zh: "外部质量保障 EQA", en: "External QA" }, { zh: "内部质量保障 IQA", en: "Internal QA" }, { zh: "院校治理", en: "Governance" } ],
    },
    {
      num: "02",
      title: { zh: "学生学习成果评估（SLO）", en: "Student Learning Outcomes (SLO) Assessment" },
      text: {
        zh: "关注成果导向教育（OBE）下的培养目标、毕业要求与课程目标达成度评价，以及直接与间接证据的测量设计。",
        en: "Focusing on outcome-based education: evaluating attainment of programme educational objectives, graduate attributes and course outcomes through direct and indirect evidence."
      },
      tags: [ { zh: "OBE", en: "OBE" }, { zh: "达成度评价", en: "Attainment" }, { zh: "直接/间接证据", en: "Direct & Indirect Evidence" } ],
    },
    {
      num: "03",
      title: { zh: "院校评估、专业认证与第三方评价", en: "Institutional Review, Accreditation & Third-party Evaluation" },
      text: {
        zh: "研究各类外部评估的指标体系、组织流程与结果运用，比较不同体制下认证的激励与约束效应。",
        en: "Studying indicator systems, procedures and use of results in external review, comparing incentives and constraints across systems."
      },
      tags: [ { zh: "专业认证", en: "Accreditation" }, { zh: "审核评估", en: "Audit/Review" }, { zh: "指标体系", en: "Indicators" } ],
    },
    {
      num: "04",
      title: { zh: "质量文化、教师发展与持续改进", en: "Quality Culture, Faculty Development & Improvement" },
      text: {
        zh: "探索“质量文化”如何从文件走向日常教学：评估素养、教师发展、学生参与及反馈闭环的构建。",
        en: "Exploring how 'quality culture' moves from documents to daily practice: assessment literacy, faculty development, student engagement and feedback loops."
      },
      tags: [ { zh: "质量文化", en: "Quality Culture" }, { zh: "反馈闭环", en: "Feedback Loops" }, { zh: "教师发展", en: "Faculty Dev." } ],
    },
    {
      num: "05",
      title: { zh: "高等教育评估理论与方法", en: "Assessment Theory & Methods" },
      text: {
        zh: "研习增值评价、同行评议、自我评估（self-study）与元评估（meta-evaluation）等方法学议题，追求评估的科学性与伦理性。",
        en: "Studying value-added measurement, peer review, self-study and meta-evaluation, aiming for validity, reliability and ethical rigour."
      },
      tags: [ { zh: "增值评价", en: "Value-added" }, { zh: "自我评估", en: "Self-study" }, { zh: "元评估", en: "Meta-evaluation" } ],
    },
  ],
  methodTitle: { zh: "研究取向与方法", en: "Approaches & Methods" },
  methods: [
    { icon: "fa-solid fa-scale-balanced", zh: "比较研究", en: "Comparative" },
    { icon: "fa-solid fa-file-lines", zh: "政策文本分析", en: "Policy/Document Analysis" },
    { icon: "fa-solid fa-clipboard-check", zh: "问卷调查", en: "Survey Research" },
    { icon: "fa-solid fa-comments", zh: "半结构化访谈", en: "Semi-structured Interviews" },
    { icon: "fa-solid fa-chart-column", zh: "案例分析", en: "Case Study" },
    { icon: "fa-solid fa-arrows-rotate", zh: "行动研究", en: "Action Research" },
  ],
};

/* ---------------- 学术成果（示例占位，请替换） ---------------- */
const PUBLICATIONS = {
  note: {
    zh: "以下条目为示例占位。请将「作者 / 标题 / 期刊 / 年份」替换为真实成果；每个成果可分别标注类别（期刊论文 / 会议论文 / 学术报告 / 科研项目）。",
    en: "The entries below are sample placeholders. Replace author / title / venue / year with your real output; each can be tagged as journal / conference / report / project."
  },
  groups: [
    {
      title: { zh: "科研项目", en: "Research Projects" },
      type: "project",
      items: [
        {
          title: { zh: "高校内部质量保障机制的有效性研究（示例）", en: "Effectiveness of Internal QA Mechanisms in Universities (sample)" },
          authors: { zh: "本人（参与），负责人：XXX", en: "You (member), PI: XXX" },
          venue: { zh: "校级/合作课题 · 2025—2027", en: "University/collaborative project · 2025–2027" },
        },
      ],
    },
    {
      title: { zh: "会议论文与报告", en: "Conference Papers & Talks" },
      type: "conf",
      items: [
        {
          title: { zh: "学习成果导向的质量保障：澳门高校的实践与启示（示例）", en: "Outcome-based QA: Practice and Implications of Macau Higher Education (sample)" },
          authors: { zh: "您的姓名", en: "Your Name" },
          venue: { zh: "XX学术研讨会 · 2025（报告）", en: "XX Symposium · 2025 (talk)" },
        },
      ],
    },
    {
      title: { zh: "期刊论文", en: "Journal Articles" },
      type: "journal",
      items: [
        {
          title: { zh: "（待补充：示例标题）从合规到改进：质量保障范式转换的院校路径", en: "(To be added: sample title) From Compliance to Improvement: Institutional Pathways of QA Paradigm Shift" },
          authors: { zh: "作者一；作者二", en: "Author A; Author B" },
          venue: { zh: "XX学报（拟投稿）", en: "XX Journal (planned)" },
        },
      ],
    },
  ],
};

/* ---------------- 知识分享（内置示例文章） ---------------- */
const KNOWLEDGE = {
  intro: {
    zh: "本专栏面向高校管理者、评估人员、教师以及对高教质量感兴趣的研究者，用“理论 + 框架 + 实务提示”的方式系统讲解评估与质量保障知识。以下每篇文章均可在浏览器中直接阅读（点击卡片）。",
    en: "This column serves administrators, QA practitioners, faculty and researchers. Each article blends theory, frameworks and practical tips. Click a card to read."
  },
  articles: [
    {
      id: "qa-system",
      icon: "fa-solid fa-diagram-project",
      title: { zh: "什么是高等教育质量保障体系？", en: "What Is a Higher Education QA System?" },
      tag: { zh: "基础概念", en: "Fundamentals" },
      date: { zh: "2025-09", en: "Sep 2025" },
      summary: {
        zh: "从“质量保障”的词义出发，梳理内部质量保障（IQA）与外部质量保障（EQA）的双层结构及其相互作用。",
        en: "Unpacking the term 'quality assurance', the two-layer structure of IQA and EQA, and how they interact."
      },
      body: {
        zh: `
<p>“质量保障”并非单一的检查行为，而是一套为了<strong>让利益相关方相信教育质量可靠、可持续</strong>而设计的系统化安排。</p>
<h3>一、为何需要质量保障</h3>
<p>高等教育承担人才培养、科学研究与社会服务的多重使命。当院校规模扩大、办学主体多元、社会问责增强时，需要一套<strong>公开、可核验、可持续</strong>的机制来回答“质量如何”的问题。</p>
<h3>二、双层结构：IQA 与 EQA</h3>
<ul>
  <li><strong>内部质量保障（IQA）</strong>：院校自身建立的质量责任机制，包括培养方案论证、课程考核、教学督导、毕业生跟踪、自我评估等。它是质量保障的<strong>第一责任主体</strong>。</li>
  <li><strong>外部质量保障（EQA）</strong>：由政府机构或独立评估机构实施，包括院校评估、专业认证、审核等，主要发挥<strong>质量证明、公共问责与方向引导</strong>作用。</li>
</ul>
<p>二者的关系并非“外查内”，而是“外促内”：外部评估的最终价值在于激活与支撑院校内部的持续改进。</p>
<h3>三、质量保障的“投入—过程—产出”链条</h3>
<p>一套完整的质量保障体系通常覆盖：<strong>目标（培养标准）→ 资源投入（师资、设施、经费）→ 过程（教学、管理、服务）→ 产出（学习成果、就业与发展）→ 反馈（改进与问责）</strong>的完整闭环。评估活动应落在链条的各个环节，而不仅限于末端结果。</p>
<blockquote>质量保障的终点不是“通过评估”，而是让每一次评估都成为改进的证据来源。</blockquote>
<h3>四、实务提示</h3>
<ol>
  <li>从“文件完备”走向“证据闭环”：为每一项质量宣称建立可追溯的证据链。</li>
  <li>让数据说话：建立常态化的教学与学习数据采集与分析机制。</li>
  <li>培育质量文化：让教师与学生在日常中“拥有”质量，而非被动应对检查。</li>
</ol>
`,
        en: `
<p>"Quality assurance" is not a single inspection act, but a systematic arrangement designed to <strong>give stakeholders confidence that educational quality is sound and sustainable</strong>.</p>
<h3>1. Why Quality Assurance</h3>
<p>Higher education serves multiple missions — talent development, research and social service. As institutions grow, providers diversify and public accountability rises, <strong>transparent, verifiable and sustainable</strong> mechanisms are needed to answer "how good is the quality?"</p>
<h3>2. Two Layers: IQA and EQA</h3>
<ul>
  <li><strong>Internal QA (IQA)</strong>: mechanisms built by the institution itself — curriculum approval, assessment of learning, teaching supervision, graduate tracking, self-study. The institution is the <strong>first responsible body</strong>.</li>
  <li><strong>External QA (EQA)</strong>: implemented by governmental or independent agencies through institutional review, programme accreditation and audit — providing <strong>quality attestation, public accountability and direction</strong>.</li>
</ul>
<p>EQA is not "checking from outside" but "activating from outside": its ultimate value lies in catalysing and supporting internal continuous improvement.</p>
<h3>3. The Input–Process–Output Chain</h3>
<p>A complete QA system usually covers: <strong>goals (standards) → inputs (staff, facilities, funding) → process (teaching, management, services) → outputs (learning outcomes, employability) → feedback (improvement & accountability)</strong>. Evaluation should address every link, not only end results.</p>
<blockquote>The end of QA is not "passing the review", but turning every review into a source of evidence for improvement.</blockquote>
<h3>4. Practical Tips</h3>
<ol>
  <li>Move from "document completeness" to "evidence loop": build a traceable evidence chain for every quality claim.</li>
  <li>Let data speak: institutionalize regular collection and analysis of teaching and learning data.</li>
  <li>Cultivate a quality culture: let faculty and students "own" quality daily, not just react to inspections.</li>
</ol>
`,
      },
    },
    {
      id: "slo-obse",
      icon: "fa-solid fa-bullseye",
      title: { zh: "成果导向（OBE）与学习成果评估", en: "Outcome-Based Education & Learning Outcomes Assessment" },
      tag: { zh: "方法论", en: "Methodology" },
      date: { zh: "2025-11", en: "Nov 2025" },
      summary: {
        zh: "OBE 的“反向设计”逻辑，以及培养目标—毕业要求—课程目标三级达成度评价的操作路径。",
        en: "The 'backward design' logic of OBE and the three-level attainment evaluation of objectives, outcomes and courses."
      },
      body: {
        zh: `
<p>成果导向教育（Outcome-Based Education, OBE）的核心是：<strong>先明确学生毕业时应具备的能力，再反向设计课程与教学</strong>，并以此为依据评估达成情况。</p>
<h3>一、反向设计的三个层级</h3>
<ol>
  <li><strong>培养目标</strong>：毕业后若干年职业与专业发展的预期，面向外部利益相关方。</li>
  <li><strong>毕业要求</strong>：毕业时须达成的知识、能力与素养，是培养目标的具体化。</li>
  <li><strong>课程目标</strong>：每门课为支撑毕业要求而设定的学习成果。</li>
</ol>
<h3>二、三级达成度评价</h3>
<p>实务中常采用“课程目标达成度 → 毕业要求达成度 → 培养目标达成度”的逐级聚合：由课程考核成绩与表现评价计算出课程目标达成度；依据课程对毕业要求指标点的支撑矩阵加权汇总；培养目标达成度则更多依赖毕业生跟踪调查与雇主反馈等<strong>间接证据</strong>。</p>
<h3>三、证据的“直接”与“间接”</h3>
<ul>
  <li><strong>直接证据</strong>：学生作品、论文、考试、实习表现、课程设计等“成果本身”。</li>
  <li><strong>间接证据</strong>：问卷、访谈、反思、就业统计等“关于成果的感知”。</li>
</ul>
<p>高质量评估应<strong>直接证据为主、间接证据为辅</strong>，并交叉印证。</p>
<blockquote>评估学习成果，本质上是在回答：学生是否真的学到了我们承诺教会他们的东西？</blockquote>
<h3>四、常见误区</h3>
<ol>
  <li>把“及格率”当作达成度：达成度须对照预设的<strong>目标值</strong>而非仅仅及格。</li>
  <li>重评分、轻反思：收集数据却未用于课程修订，评估闭环断裂。</li>
  <li>为评估而评估：指标复杂到师生无法理解，失去改进价值。</li>
</ol>
`,
        en: `
<p>Outcome-Based Education (OBE) holds that we should <strong>first define the competencies students should possess at graduation, then design curricula backwards</strong>, and assess attainment accordingly.</p>
<h3>1. Three Levels of Backward Design</h3>
<ol>
  <li><strong>Programme Educational Objectives</strong>: expected career/professional attainment years after graduation, addressed to external stakeholders.</li>
  <li><strong>Graduate Attributes / Outcomes</strong>: the knowledge, skills and dispositions to be achieved at graduation — operationalizing the objectives.</li>
  <li><strong>Course Outcomes</strong>: the learning outcomes each course sets in support of the graduate attributes.</li>
</ol>
<h3>2. Three-Level Attainment Evaluation</h3>
<p>Practice commonly aggregates from "course outcome attainment → graduate attribute attainment → educational objective attainment". Course attainment is computed from grades and performance; attribute attainment aggregates via the curriculum matrix weighting; objective attainment relies more on graduate tracking surveys and employer feedback as <strong>indirect evidence</strong>.</p>
<h3>3. Direct vs Indirect Evidence</h3>
<ul>
  <li><strong>Direct</strong>: student work, theses, exams, practicum performance, designs — "the outcomes themselves".</li>
  <li><strong>Indirect</strong>: surveys, interviews, reflections, employment statistics — "perceptions about outcomes".</li>
</ul>
<p>Strong assessment relies primarily on <strong>direct evidence supported by indirect evidence</strong>, cross-validated.</p>
<blockquote>Assessing learning outcomes asks: did students actually learn what we promised to teach them?</blockquote>
<h3>4. Common Pitfalls</h3>
<ol>
  <li>Treating "pass rates" as attainment: attainment must be judged against pre-set <strong>target values</strong>, not mere passing.</li>
  <li>Scoring without reflection: data collected but never used to revise courses — the loop breaks.</li>
  <li>Assessment for its own sake: indicators too complex for faculty and students to understand, losing value for improvement.</li>
</ol>
`,
      },
    },
    {
      id: "review-accreditation",
      icon: "fa-solid fa-stamp",
      title: { zh: "院校评估与专业认证：异同与互补", en: "Institutional Review vs Programme Accreditation" },
      tag: { zh: "外部评估", en: "External Review" },
      date: { zh: "2026-01", en: "Jan 2026" },
      summary: {
        zh: "从评估对象、标准粒度、结果功能三个维度，区分院校评估与专业认证，并说明二者如何互补。",
        en: "Differentiating institutional review and programme accreditation across object, granularity of standards and function of results."
      },
      body: {
        zh: `
<p>院校评估与专业认证是两类最典型的外部质量保障活动，常被混为一谈，实则定位不同。</p>
<table>
  <tr><th>维度</th><th>院校评估</th><th>专业认证</th></tr>
  <tr><td>评估对象</td><td>整个院校（机构层面）</td><td>某一专业/学科（专业层面）</td></tr>
  <tr><td>标准粒度</td><td>宏观：使命、治理、资源、总体质量</td><td>微观：培养目标、课程体系、师资、成果达成</td></tr>
  <tr><td>关注重心</td><td>机构整体质量保障体系与办学效益</td><td>专业人才培养质量与行业对接</td></tr>
  <tr><td>结果功能</td><td>资格认定、拨款参考、社会公信</td><td>学位认可、专业声誉、毕业生执业资格关联</td></tr>
</table>
<h3>互补关系</h3>
<p>二者形成“<strong>机构—专业</strong>”的双层互补：院校评估保障整体框架与资源配置，专业认证深入具体培养过程。许多质量保障体系因此采用“<strong>机构审核为纲 + 专业认证为目</strong>”的组合策略，在控制负担的同时保持纵深。</p>
<blockquote>好的外部评估不是把院校“问倒”，而是帮院校“看全”——看见自己尚未看见的盲区。</blockquote>
<h3>实务提示</h3>
<ol>
  <li>院校可先建立统一的“质量证据库”，同时支撑机构评估与多专业认证，避免重复填报。</li>
  <li>将外部评估标准“翻译”为校内日常管理的抓手，而非临时迎评。</li>
</ol>
`,
        en: `
<p>Institutional review and programme accreditation are the two most typical external QA activities — often conflated, yet distinct in purpose.</p>
<table>
  <tr><th>Dimension</th><th>Institutional Review</th><th>Programme Accreditation</th></tr>
  <tr><td>Object</td><td>The whole institution</td><td>A specific programme/discipline</td></tr>
  <tr><td>Granularity</td><td>Macro: mission, governance, resources, overall quality</td><td>Micro: objectives, curriculum, faculty, outcomes</td></tr>
  <tr><td>Focus</td><td>Institutional QA system & effectiveness</td><td>Programme quality & alignment with profession</td></tr>
  <tr><td>Function</td><td>Recognition, funding, public confidence</td><td>Degree recognition, reputation, professional linkage</td></tr>
</table>
<h3>Complementarity</h3>
<p>They form an "institution–programme" two-tier complement: institutional review secures the overall framework and resources, while accreditation digs into specific educational processes. Many systems therefore adopt "institutional audit as the framework, programme accreditation as the lens", balancing burden with depth.</p>
<blockquote>Good external review does not "corner" an institution; it helps it "see fully" — revealing blind spots it had not noticed.</blockquote>
<h3>Practical Tips</h3>
<ol>
  <li>Build one shared "quality evidence repository" serving both institutional review and multiple accreditations, avoiding duplicated reporting.</li>
  <li>Translate external standards into day-to-day management, rather than ad-hoc preparation for review.</li>
</ol>
`,
      },
    },
    {
      id: "quality-culture",
      icon: "fa-solid fa-seedling",
      title: { zh: "从“合规”到“文化”：质量保障的进阶", en: "From Compliance to Culture: The Next Step of QA" },
      tag: { zh: "前沿反思", en: "Reflection" },
      date: { zh: "2026-04", en: "Apr 2026" },
      summary: {
        zh: "当评估成为例行公事，如何让质量意识内化为教师与学生的自觉？谈质量文化建设的三个抓手。",
        en: "When evaluation becomes routine, how can quality awareness become intrinsic for faculty and students? Three levers for quality culture."
      },
      body: {
        zh: `
<p>质量保障发展常经历三个阶段：<strong>合规（compliance）→ 改进（improvement）→ 文化（culture）</strong>。许多院校已能顺利“应付”外部评估，却未必真正形成内部质量文化。</p>
<h3>质量文化的两层含义</h3>
<ul>
  <li><strong>结构层</strong>：制度、程序、委员会、评价工具等“可见”的安排。</li>
  <li><strong>心理层</strong>：师生共享的对“质量责任”的承诺、态度与习惯——“不可见”却更持久。</li>
</ul>
<h3>三个抓手</h3>
<ol>
  <li><strong>降低参与成本</strong>：把评估数据采集嵌入日常工作流，让教师“顺便”完成而非额外负担；工具应服务于教学反思。</li>
  <li><strong>反馈真正闭环</strong>：评估结果必须回到课程、专业与院校三个层面的决策；公开“评估—改进—再评估”的证据，取信于师生。</li>
  <li><strong>领导以身作则</strong>：院校领导层把质量议题纳入常规议事，把“质量语言”融入战略，并在资源配置上兑现承诺。</li>
</ol>
<blockquote>当师生不再把评估视为“上面的事”，而视为“我们自己的事”时，质量文化才真正形成。</blockquote>
<h3>结语</h3>
<p>在“管办评分离”与院校自治深化的背景下，中国的质量保障正从“外部驱动”走向“内外协同”。澳门高校身处中西交汇，在质量保障制度建设上具有天然的观察窗口与比较优势——这也是我持续研究的重要动机。</p>
`,
        en: `
<p>QA often evolves through three stages: <strong>compliance → improvement → culture</strong>. Many institutions already "handle" external review smoothly without yet forming a genuine internal quality culture.</p>
<h3>Two Layers of Quality Culture</h3>
<ul>
  <li><strong>Structural</strong>: visible arrangements — regulations, procedures, committees, evaluation instruments.</li>
  <li><strong>Psychological</strong>: the shared commitment, attitudes and habits toward quality responsibility among staff and students — invisible yet more enduring.</li>
</ul>
<h3>Three Levers</h3>
<ol>
  <li><strong>Lower participation cost</strong>: embed data collection into daily workflows so faculty do it "along the way", not as extra burden; instruments should serve teaching reflection.</li>
  <li><strong>Truly close the feedback loop</strong>: results must feed decisions at course, programme and institutional levels; publish evidence of "assessment–improvement–reassessment" to earn trust.</li>
  <li><strong>Leadership by example</strong>: leadership places quality on regular agendas, speaks the language of quality in strategy, and backs it with resources.</li>
</ol>
<blockquote>Quality culture truly forms when staff and students see evaluation not as "their superiors' business", but as "our own business".</blockquote>
<h3>Closing</h3>
<p>Against the backdrop of separating governance, running and evaluation, and deepening institutional autonomy, China's QA is moving from external-driven toward internal–external synergy. Macau's institutions, at the crossroads of East and West, offer a natural window and comparative advantage for studying QA institution-building — a key motivation for my ongoing research.</p>
`,
      },
    },
  ],
};

/* ---------------- 联系方式 ---------------- */
const CONTACT = {
  lead: {
    zh: "欢迎围绕院校评估、专业认证、学习成果评估与质量保障体系建设等议题来信交流。",
    en: "Welcome correspondence on institutional review, accreditation, learning outcome assessment and QA system building."
  },
  items: [
    { icon: "fa-solid fa-envelope", label: { zh: "电子邮箱", en: "Email" }, value: "junjiel10@student.must.edu.mo", href: "mailto:junjiel10@student.must.edu.mo" },
    { icon: "fa-solid fa-building-columns", label: { zh: "单位", en: "Institution" }, value: { zh: "澳门科技大学", en: "Macau University of Science and Technology" } },
    { icon: "fa-solid fa-location-dot", label: { zh: "地址", en: "Address" }, value: { zh: "澳门氹仔伟龙马路（示例）", en: "Avenida Wai Long, Taipa, Macau (sample)" } },
  ],
  note: {
    zh: "温馨提示",
    en: "Note",
    body: {
      zh: "由于本人处于博士学习阶段，来信可能无法立即回复，敬请谅解。若涉及院校数据合作或联合研究，请在来信中简要说明研究目的与需求，我会尽快回复。也欢迎关注本主页「知识分享」专栏的持续更新。",
      en: "As I am currently pursuing doctoral study, replies may not be immediate — your patience is appreciated. For data collaboration or joint research, kindly outline the purpose and needs of your inquiry. Please also follow the Knowledge column for updates."
    },
  },
};

/* ---------------- 页面元信息 ---------------- */
const PAGES_META = {
  home:  { title: { zh: "首页 · 高等教育评估与质量保障", en: "Home · HE Assessment & QA" } },
  about: { title: { zh: "个人简介", en: "About" }, eyebrow: { zh: "ABOUT", en: "ABOUT" } },
  research: { title: { zh: "研究领域", en: "Research" }, eyebrow: { zh: "RESEARCH", en: "RESEARCH" } },
  publications: { title: { zh: "学术成果", en: "Publications" }, eyebrow: { zh: "PUBLICATIONS", en: "PUBLICATIONS" } },
  knowledge: { title: { zh: "知识分享", en: "Knowledge" }, eyebrow: { zh: "KNOWLEDGE", en: "KNOWLEDGE" } },
  contact: { title: { zh: "联系方式", en: "Contact" }, eyebrow: { zh: "CONTACT", en: "CONTACT" } },
};
