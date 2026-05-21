# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

VitePress 静态教学网站 — "Vibe Coding 环境部署教程"，面向 Windows 用户指导搭建 AI 编程开发环境。

生产地址：https://ai-coding-tutorials.tech

## 常用命令

```bash
npm run dev          # 启动开发服务器 (http://localhost:5173)
npm run build        # 生产构建，输出到 .vitepress/dist/
npm run preview      # 预览生产构建
npx tsc --noEmit     # TypeScript 类型检查
npx vitepress build  # 直接用 vitepress CLI 构建
```

## 架构

```
.vitepress/
├── config.ts             # 站点配置（导航目录下拉、侧边栏、搜索）
├── theme/
│   ├── index.ts          # 继承默认主题
│   ├── custom.css        # Tailwind v4 + 品牌色 + Hero 渐变动画 + 自定义组件
│   └── css.d.ts          # *.css 模块类型声明
index.md                  # 首页（Hero + 介绍 + 两层目录网格卡片）
guide/                    # 12 个教程内容页
├── install-dependencies.md   # 阶段1概述
├── vscode.md / powershell.md / windows-terminal.md / nodejs.md / pnpm.md / git.md
├── install-ai-tools.md       # 阶段2概述
└── claude-code-terminal.md / claude-code-extension.md / cc-switch.md
public/images/            # 按章节重组的 82 张截图（9 个章节子目录）
scripts/migrate-images.mjs   # 一次性图片迁移脚本
docmost/                  # Docmost 原始导出（已从构建排除，仅作参考）
```

## 关键设计决策

- **品牌色**: Vue 绿 `#42b883`，`--vp-c-brand-1` CSS 变量控制全局
- **Hero 标题**: 渐变动画文字（绿→蓝→紫→绿），4s 循环，`background-clip: text`
- **首页网格**: 3 列圆角卡片，hover 时浮现渐变背景 + 边框变绿 + 微升
- **导航栏**: 单个"目录"下拉按钮，两级嵌套菜单
- **图片路径**: 内容页用 `/images/<章节>/`，VitePress `public/` 直接复制的静态文件
- **Tailwind v4**: 通过 `@tailwindcss/vite` 插件注入，CSS-first 配置（`@import "tailwindcss"`），无 `tailwind.config.js`
- **4 个页面**（git/nodejs/pnpm/windows-terminal）的"官方网站"节用 `<iframe>` + 降级链接

## 内容更新注意

- 新增教程章节在 `guide/` 下创建 `.md`，然后在 `.vitepress/config.ts` 的 sidebar 和 nav 中注册
- 首页卡片网格在 `index.md` 中用 HTML + 内联 `<style>` 实现，不走 VitePress 组件系统
- 品牌色修改只需改 `custom.css` 中的 `--vp-c-brand-*` 变量（含 `.dark` 暗色模式）

## Git 分支

| 分支 | 用途 |
|------|------|
| `main` | 主分支 |
