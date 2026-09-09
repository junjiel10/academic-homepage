# 个人学术主页 — 高等教育评估与质量保障（多页版）

乐一（澳门科技大学教育博士研究生，导师：孙建荣教授）的**纯静态、多页、无构建工具**学术主页。以简体中文为主，关键标题/摘要提供英文；现代学术风设计（深蓝 + 金）。已在 GitHub Pages 部署：

**https://junjiel10.github.io/academic-homepage/**

## 目录结构

```
学术主页/
├── index.html             # 首页（Hero + 三大入口 + 近期动态 + 专栏入口）
├── about.html             # 个人简介（含导师孙建荣教授介绍）
├── research.html          # 研究领域（五大方向 + 研究方法）
├── publications.html      # 学术成果（项目 / 会议 / 期刊，示例占位）
├── knowledge.html         # 知识分享专栏（文章列表）
├── contact.html           # 联系方式
├── articles/              # 知识文章独立页面
│   ├── qa-system.html             # 什么是高等教育质量保障体系？
│   ├── slo-obse.html              # 成果导向（OBE）与学习成果评估
│   ├── review-accreditation.html  # 院校评估与专业认证：异同与互补
│   └── quality-culture.html       # 从「合规」到「文化」
├── css/style.css          # 全站样式
├── js/
│   ├── i18n.js            # 界面文案词典（中/英，data-i18n）
│   └── main.js            # 公共交互（导航高亮 / 语言切换 / 移动端菜单 / 滚动动画）
└── README.md
```

## 常用修改指引

| 想改什么 | 去哪里改 |
| --- | --- |
| 导航 / 页脚 / 品牌文字的中英文 | `js/i18n.js` |
| 各页正文 | 对应 `.html` 文件（中文为主，直接编辑即可） |
| 新知识文章 | 在 `articles/` 新增一个 `.html`（可复制现有文章页修改），再到 `knowledge.html` 加一张卡片链接 |
| 学术成果 | `publications.html`（把“示例”条目替换为真实成果） |
| 联系方式 | `contact.html`（邮箱 / 地址） |

> 顶部导航高亮自动按当前文件名匹配（`main.js`）；语言按钮切换界面文案并记忆选择（localStorage `heqa-lang`）。
> 每篇文章页均支持**打印为 PDF**（已在 CSS 中做打印适配），方便保存分享。

## 本地预览

直接双击打开 `index.html`，或用任意静态服务器（如 VS Code Live Server、`npx serve .`）。

## 更新部署

```bash
git add -A
git commit -m "更新内容"
git push origin main
```

推送后约 1–2 分钟 GitHub Pages 自动重建生效。

## 归属说明

- 页面框架与配色由 AI 协助生成；内容由本人整理与维护。
- 知识专栏文章基于国内外公开文献与个人研究整理，仅供学习交流；转载请注明出处并遵循学术规范。
