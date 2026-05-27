---
layout: home

hero:
  name: "Vibe Coding 环境部署教程"
  tagline: Windows 环境下完整搭建 AI 驱动的 Vibe Coding 开发环境
  actions:
    - theme: brand
      text: 开始学习
      link: /deploy/install-dependencies
---

<div class="home-intro">

## 教程简介

本教程面向 Windows 用户，系统性地指导完成 **Vibe Coding（氛围编程）** 开发环境的完整搭建。Vibe Coding 是一种以 AI 为核心驱动力的现代编程范式——开发者通过自然语言描述意图，由 AI 助手完成代码生成、编辑与调试，从而将精力聚焦于设计思路而非实现细节。

全教程以图文并茂的方式呈现，每节末尾附有验证步骤，方便读者随时自查安装是否成功。完成全部配置后，即可在 Windows 环境中流畅使用 AI 赋能的 Vibe Coding 工作流。

</div>

<div class="home-grid">
  <h2 class="section-title">安装依赖项</h2>
  <div class="grid-row">
    <a class="grid-card" href="/deploy/vscode">
      <span class="card-heading">
        <span class="card-icon"><svg width="24" height="24" viewBox="0 0 32 32" fill="none"><rect x="3" y="5" width="26" height="22" rx="3" stroke="#42b883" stroke-width="2"/><polygon points="11,13 11,20 19,16.5" fill="#42b883"/></svg></span>
        <span class="card-title">Visual Studio Code</span>
      </span>
      <span class="card-desc">微软推出的免费跨平台代码编辑器，拥有海量扩展生态</span>
    </a>
    <a class="grid-card" href="/deploy/powershell">
      <span class="card-heading">
        <span class="card-icon"><svg width="24" height="24" viewBox="0 0 32 32" fill="none"><rect x="3" y="5" width="26" height="22" rx="3" stroke="#42b883" stroke-width="2"/><text x="7" y="21" font-size="12" font-weight="700" fill="#42b883" font-family="monospace">&gt;_</text></svg></span>
        <span class="card-title">PowerShell 7</span>
      </span>
      <span class="card-desc">微软开源的跨平台自动化 Shell，替代传统 CMD 命令行</span>
    </a>
    <a class="grid-card" href="/deploy/windows-terminal">
      <span class="card-heading">
        <span class="card-icon"><svg width="24" height="24" viewBox="0 0 32 32" fill="none"><rect x="3" y="5" width="26" height="22" rx="3" stroke="#42b883" stroke-width="2"/><path d="M8 11l4 5-4 5M14 21h8" stroke="#42b883" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
        <span class="card-title">Windows Terminal</span>
      </span>
      <span class="card-desc">微软全新终端应用，多标签页、GPU 加速、丰富主题</span>
    </a>
    <a class="grid-card" href="/deploy/nodejs">
      <span class="card-heading">
        <span class="card-icon"><svg width="24" height="24" viewBox="0 0 32 32" fill="none"><ellipse cx="16" cy="8" rx="11" ry="6" stroke="#42b883" stroke-width="2"/><ellipse cx="16" cy="24" rx="11" ry="6" stroke="#42b883" stroke-width="2"/><rect x="5" y="8" width="22" height="16" rx="1" stroke="#42b883" stroke-width="2" stroke-dasharray="2 2"/></svg></span>
        <span class="card-title">Node.js</span>
      </span>
      <span class="card-desc">Chrome V8 驱动的 JavaScript 运行时，前端工具链基石</span>
    </a>
    <a class="grid-card" href="/deploy/pnpm">
      <span class="card-heading">
        <span class="card-icon"><svg width="24" height="24" viewBox="0 0 32 32" fill="none"><rect x="3" y="3" width="26" height="26" rx="4" stroke="#42b883" stroke-width="2"/><path d="M10 16h12M16 10v12" stroke="#42b883" stroke-width="2" stroke-linecap="round"/></svg></span>
        <span class="card-title">pnpm</span>
      </span>
      <span class="card-desc">比 npm 快 2 倍、更省磁盘空间的现代 Node.js 包管理器</span>
    </a>
    <a class="grid-card" href="/deploy/git">
      <span class="card-heading">
        <span class="card-icon"><svg width="24" height="24" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="10" r="3" stroke="#42b883" stroke-width="2"/><circle cx="9" cy="24" r="3" stroke="#42b883" stroke-width="2"/><circle cx="23" cy="24" r="3" stroke="#42b883" stroke-width="2"/><path d="M16 13v8M11 21l4-2M16 16l6 5" stroke="#42b883" stroke-width="1.5"/></svg></span>
        <span class="card-title">Git</span>
      </span>
      <span class="card-desc">最流行的分布式版本控制系统，代码变更追踪与协作必备</span>
    </a>
  </div>

  <h2 class="section-title">安装 AI 开发工具</h2>
  <div class="grid-row">
    <a class="grid-card" href="/deploy/claude-code-terminal">
      <span class="card-heading">
        <span class="card-icon"><svg width="24" height="24" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="10" stroke="#42b883" stroke-width="2"/><path d="M11 16l4 3 6-6" stroke="#42b883" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
        <span class="card-title">Claude Code CLI</span>
      </span>
      <span class="card-desc">在命令行中通过自然语言描述意图，由 AI 完成代码编写与调试</span>
    </a>
    <a class="grid-card" href="/deploy/claude-code-extension">
      <span class="card-heading">
        <span class="card-icon"><svg width="24" height="24" viewBox="0 0 32 32" fill="none"><rect x="2" y="2" width="12" height="12" rx="2" stroke="#42b883" stroke-width="2"/><rect x="18" y="2" width="12" height="12" rx="2" stroke="#42b883" stroke-width="2"/><rect x="2" y="18" width="12" height="12" rx="2" stroke="#42b883" stroke-width="2"/><rect x="18" y="18" width="12" height="12" rx="2" stroke="#42b883" stroke-width="2"/></svg></span>
        <span class="card-title">Claude Code Extension</span>
      </span>
      <span class="card-desc">VS Code 原生集成 AI 编程，在 IDE 中审查、修改和接受代码方案</span>
    </a>
    <a class="grid-card" href="/deploy/cc-switch">
      <span class="card-heading">
        <span class="card-icon"><svg width="24" height="24" viewBox="0 0 32 32" fill="none"><circle cx="10" cy="16" r="7" stroke="#42b883" stroke-width="2"/><circle cx="22" cy="16" r="7" stroke="#42b883" stroke-width="2"/></svg></span>
        <span class="card-title">CC Switch</span>
      </span>
      <span class="card-desc">图形化管理 50+ AI 模型服务商，无需手动修改配置文件，一键切换</span>
    </a>
    <a class="grid-card" href="/deploy/verify-third-party-model">
      <span class="card-heading">
        <span class="card-icon"><svg width="24" height="24" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="10" stroke="#42b883" stroke-width="2"/><path d="M11 16l4 3 6-6" stroke="#42b883" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
        <span class="card-title">验证模型接入</span>
      </span>
      <span class="card-desc">在终端和 VS Code 扩展中验证第三方 AI 模型是否已正确接入</span>
    </a>
  </div>
</div>

<div class="author-signature">
  <span class="signature-line"></span>
  <span class="signature-name">Lixian ZHANG</span>
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

/* 仅第二个分区标题去掉分割线，上下间距一致 */
.home-grid .section-title + .grid-row + .section-title {
  border-top: none;
  padding-top: 0;
  margin-top: -4px;
  margin-bottom: 20px;
}

.home-grid .section-title + .grid-row + .section-title::before {
  display: none;
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

.home-grid + .author-signature {
  padding-right: 150px;
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
</style>
