# Vibe Coding 环境部署教程

面向 Windows 用户的 Vibe Coding 开发环境搭建指南。本教程将引导你完成从基础工具链到 AI 编程助手的一站式配置。

## 关于 Vibe Coding

Vibe Coding（氛围编程）是一种以 AI 为核心驱动力的现代编程范式——通过自然语言描述意图，由 AI 助手完成代码生成、编辑与调试，将精力聚焦于设计思路而非实现细节。

## 目录

### 安装依赖项

| 章节 | 说明 |
|------|------|
| [Visual Studio Code](https://ai-coding-tutorials.tech/guide/vscode) | 微软免费跨平台代码编辑器 |
| [PowerShell 7](https://ai-coding-tutorials.tech/guide/powershell) | 微软开源跨平台自动化 Shell |
| [Windows Terminal](https://ai-coding-tutorials.tech/guide/windows-terminal) | 微软全新终端应用 |
| [Node.js](https://ai-coding-tutorials.tech/guide/nodejs) | JavaScript 运行时，前端工具链基石 |
| [pnpm](https://ai-coding-tutorials.tech/guide/pnpm) | 现代 Node.js 包管理器 |
| [Git](https://ai-coding-tutorials.tech/guide/git) | 分布式版本控制系统 |

### 安装 AI 开发工具

| 章节 | 说明 |
|------|------|
| [Claude Code 终端](https://ai-coding-tutorials.tech/guide/claude-code-terminal) | 命令行中通过自然语言驱动 AI 编程 |
| [Claude Code 扩展](https://ai-coding-tutorials.tech/guide/claude-code-extension) | VS Code 原生集成 AI 编程 |
| [CC Switch](https://ai-coding-tutorials.tech/guide/cc-switch) | 图形化管理 50+ AI 模型服务商 |

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器 (http://localhost:5173)
npm run dev

# 生产构建
npm run build

# 预览生产构建
npm run preview
```

## 技术栈

- **框架**: [VitePress](https://vitepress.dev/) — 基于 Vite 的静态站点生成器
- **样式**: [Tailwind CSS v4](https://tailwindcss.com/) + 自定义 CSS
- **语言**: TypeScript
- **品牌色**: Vue 绿 (`#42b883`)

## 项目结构

```
.vitepress/
├── config.ts              # 站点配置（导航、侧边栏、搜索）
└── theme/
    ├── index.ts           # 主题入口
    └── custom.css         # Tailwind v4 + 品牌色 + 渐变动画 + 自定义组件
index.md                   # 首页（Hero + 网格目录卡片）
guide/                     # 13 个教程内容页
├── install-dependencies.md
├── install-ai-tools.md
├── vscode.md / powershell.md / windows-terminal.md / nodejs.md / pnpm.md / git.md
├── claude-code-terminal.md / claude-code-extension.md / cc-switch.md
└── faq.md                 # 常见问题解答
images/                   # 按章节组织的截图（12 个章节子目录）
```

## 部署

生产地址: [https://ai-coding-tutorials.tech](https://ai-coding-tutorials.tech)  
托管平台: 腾讯云 EdgeOne
