---
layout: home

hero:
  name: "Vibe Coding 基础教程"
  tagline: 理解模型原理与 AI 编程核心理念，从会用工具到理解原理
  actions:
    - theme: brand
      text: 开始学习
      link: /basics/llm-basics
---

<div class="home-intro">

## 环境搭好了，然后呢？

你可能会发现一个尴尬的问题：AI 确实能帮你写代码，但你不太确定它写得对不对。有时候它聪明得吓人，有时候又笨得让你想摔键盘。**为什么会这样？**

这几节课就是来解决这个问题的。我们不会一步到位培养你成 AI 科学家，但了解一点底层原理，能让你从"能用 AI"跨越到"用好 AI"。每节课都不长，喝着咖啡就能看完。

</div>

<div class="home-grid">
  <div class="grid-row">
    <a class="grid-card" href="/basics/llm-basics">
      <span class="card-heading">
        <span class="card-icon"><svg width="24" height="24" viewBox="0 0 32 32" fill="none"><ellipse cx="16" cy="8" rx="11" ry="6" stroke="#42b883" stroke-width="2"/><ellipse cx="16" cy="24" rx="11" ry="6" stroke="#42b883" stroke-width="2"/><rect x="5" y="8" width="22" height="16" rx="1" stroke="#42b883" stroke-width="2" stroke-dasharray="2 2"/></svg></span>
        <span class="card-title">LLM 基础概念</span>
      </span>
      <span class="card-desc">掌握 Token、参数、上下文窗口等核心概念与主流模型选型</span>
    </a>
    <a class="grid-card" href="/basics/vibe-coding-intro">
      <span class="card-heading">
        <span class="card-icon"><svg width="24" height="24" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="10" stroke="#42b883" stroke-width="2"/><path d="M11 16l4 3 6-6" stroke="#42b883" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
        <span class="card-title">Vibe Coding 相关理念</span>
      </span>
      <span class="card-desc">理解 AI 驱动编程范式的核心理念、工具生态与最佳实践工作流</span>
    </a>
    <a class="grid-card" href="/basics/claude-code-usage">
      <span class="card-heading">
        <span class="card-icon"><svg width="24" height="24" viewBox="0 0 32 32" fill="none"><rect x="2" y="2" width="12" height="12" rx="2" stroke="#42b883" stroke-width="2"/><rect x="18" y="2" width="12" height="12" rx="2" stroke="#42b883" stroke-width="2"/><rect x="2" y="18" width="12" height="12" rx="2" stroke="#42b883" stroke-width="2"/><rect x="18" y="18" width="12" height="12" rx="2" stroke="#42b883" stroke-width="2"/></svg></span>
        <span class="card-title">Claude Code 使用指南</span>
      </span>
      <span class="card-desc">精通快捷键与斜杠命令体系，掌握模型切换与调度策略</span>
    </a>
    <a class="grid-card" href="/basics/claude-code-plugins">
      <span class="card-heading">
        <span class="card-icon"><svg width="24" height="24" viewBox="0 0 32 32" fill="none"><circle cx="12" cy="12" r="5" stroke="#42b883" stroke-width="2"/><circle cx="20" cy="20" r="5" stroke="#42b883" stroke-width="2"/><line x1="15" y1="16" x2="17" y2="18" stroke="#42b883" stroke-width="2"/></svg></span>
        <span class="card-title">Claude Code Skill 与插件</span>
      </span>
      <span class="card-desc">掌握 Skills 技能的安装与使用，快速扩展 AI 编程能力边界</span>
    </a>
    <a class="grid-card" href="/basics/data-visualization">
      <span class="card-heading">
        <span class="card-icon"><svg width="24" height="24" viewBox="0 0 32 32" fill="none"><rect x="4" y="20" width="4" height="8" rx="1" fill="#42b883"/><rect x="10" y="14" width="4" height="14" rx="1" fill="#42b883"/><rect x="16" y="8" width="4" height="20" rx="1" fill="#42b883"/><rect x="22" y="12" width="4" height="16" rx="1" fill="#42b883"/></svg></span>
        <span class="card-title">数据可视化插件</span>
      </span>
      <span class="card-desc">ECharts 与 Plotly 安装使用指南，自然语言描述即可生成图表</span>
    </a>
  </div>
</div>

<div class="author-signature">
  <span class="signature-line"></span>
  <span class="signature-name">Hao ZHANG</span>
  <span class="signature-divider">·</span>
  <span class="signature-role">CTTQ</span>
</div>

<style>
.home-grid {
  max-width: var(--vp-layout-max-width);
  margin: 0 auto;
  padding: 0 150px;
}

.home-grid .section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 20px;
  padding: 12px 0 0 4px;
  border-top: none;
  position: relative;
}

.home-grid .section-title::before {
  content: '';
  position: absolute;
  top: 4px;
  left: 4px;
  right: 0;
  height: 1px;
  background: var(--vp-c-divider);
}

.grid-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}

.grid-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 24px 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  text-decoration: none !important;
  color: var(--vp-c-text-1);
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.25s;
  position: relative;
  overflow: hidden;
}

.grid-card:hover,
.grid-card:visited,
.grid-card:active,
.grid-card:focus {
  text-decoration: none !important;
}

.grid-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, #42b883 0%, #3b82f6 40%, #8b5cf6 65%, #42b883 100%);
  background-size: 300% 100%;
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 0;
}

.grid-card:hover::before {
  opacity: 0.06;
}

.grid-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 20px rgba(66, 184, 131, 0.12);
  transform: translateY(-2px);
}

.card-heading {
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  z-index: 1;
}

.grid-card .card-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.grid-card .card-title {
  font-size: 1.05rem;
  font-weight: 700;
}

.grid-card .card-desc {
  font-size: 1rem;
  line-height: 1.5;
  color: var(--vp-c-text-2);
  position: relative;
  z-index: 1;
}

@media (max-width: 960px) {
  .grid-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .grid-row {
    grid-template-columns: 1fr;
  }
}

.home-intro {
  max-width: var(--vp-layout-max-width);
  margin: 24px auto 0;
  text-align: left;
  padding: 0 150px 0;
}

.home-intro h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--vp-c-text-1);
}

.home-intro p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
  margin-bottom: 0;
}

.home-intro ul {
  margin-top: 0.8rem;
  padding-left: 1.2rem;
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--vp-c-text-2);
}
</style>
