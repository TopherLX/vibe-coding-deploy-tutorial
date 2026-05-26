---
layout: home

hero:
  name: "Vibe Coding 从环境搭建到 AI 编程"
features:
  - icon:
      src: /images/icons/deploy.svg
      alt: 部署
    title: 第一步：部署环境
    details: 安装 VS Code、PowerShell、Windows Terminal、Node.js、pnpm、Git，以及 Claude Code 等 AI 开发工具。
    link: /deploy/
    linkText: 开始学习
  - icon:
      src: /images/icons/basics.svg
      alt: 基础
    title: 第二步：基础入门
    details: 理解 Vibe Coding 核心理念，学习编写有效的 AI 提示词，建立高效的 AI 辅助开发工作流。
    link: /basics/
    linkText: 即将更新
---

<style>
/* === Root homepage Hero === */
.VPHero {
  padding-bottom: 24px !important;
}

.VPHero .name,
.VPHero .name .clip {
  text-align: center;
  display: block;
  width: 100%;
}

.VPHero .container {
  max-width: 1600px;
  margin: 0 auto;
}

.VPFeatures {
  max-width: 800px;
  margin: 0 auto;
}

/* Adjust hero on mobile */
@media (max-width: 640px) {
  .VPHero .name {
    font-size: 32px;
    white-space: normal;
  }
}
</style>
