# Vibe Coding 教程

面向 Windows 用户的 AI 编程学习指南，涵盖开发环境部署与 Vibe Coding 基础实践。

## 教程入口

| 教程 | 说明 |
|------|------|
| [部署教程](https://ai-coding-tutorials.tech/deploy/) | 从零搭建 Windows 开发环境，安装终端、Node.js、Git 和 AI 编程工具 |
| [基础教程](https://ai-coding-tutorials.tech/basics/) | 理解 Vibe Coding 核心理念，掌握提示词技巧与高效开发工作流 |

## 部署教程目录

### 安装依赖项

| 章节 | 说明 |
|------|------|
| [Visual Studio Code](https://ai-coding-tutorials.tech/deploy/vscode) | 微软免费跨平台代码编辑器 |
| [PowerShell 7](https://ai-coding-tutorials.tech/deploy/powershell) | 微软开源跨平台自动化 Shell |
| [Windows Terminal](https://ai-coding-tutorials.tech/deploy/windows-terminal) | 微软全新终端应用 |
| [Node.js](https://ai-coding-tutorials.tech/deploy/nodejs) | JavaScript 运行时，前端工具链基石 |
| [pnpm](https://ai-coding-tutorials.tech/deploy/pnpm) | 现代 Node.js 包管理器 |
| [Git](https://ai-coding-tutorials.tech/deploy/git) | 分布式版本控制系统 |

### 安装 AI 开发工具

| 章节 | 说明 |
|------|------|
| [Claude Code CLI](https://ai-coding-tutorials.tech/deploy/claude-code-terminal) | 命令行中通过自然语言驱动 AI 编程 |
| [Claude Code Extension](https://ai-coding-tutorials.tech/deploy/claude-code-extension) | VS Code 原生集成 AI 编程 |
| [CC Switch](https://ai-coding-tutorials.tech/deploy/cc-switch) | 图形化管理 50+ AI 模型服务商 |
| [验证模型接入](https://ai-coding-tutorials.tech/deploy/verify-third-party-model) | 验证第三方 AI 模型接入状态 |
| [FAQ](https://ai-coding-tutorials.tech/deploy/faq) | 常见问题解答 |

## 许可

[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) · 张力弦（Lixian ZHANG）

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

## 项目结构

```
.vitepress/
├── config.ts              # 站点配置（nav、sidebar、rewrites、搜索）
└── theme/
    ├── index.ts           # 主题入口 + 签名 + 烟花组件
    └── custom.css         # Tailwind v4 + 品牌色 + 渐变动画 + 液态玻璃卡片
index.md                   # 总入口主页（2 张分发卡片）
tutorials/
├── deploy/
│   ├── docs/              # 部署教程 15 个 .md
│   └── images/            # 按章节组织的截图
└── basics/
    ├── docs/              # 基础教程（占位中）
    └── images/            # 预留
public/images/icons/       # 卡片图标
```

## 部署

生产地址: [https://ai-coding-tutorials.tech](https://ai-coding-tutorials.tech)  
托管平台: 腾讯云 EdgeOne
