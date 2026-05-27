# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

VitePress 静态教学网站 — "Vibe Coding 教程"，面向 Windows 用户提供 AI 编程开发环境部署与基础教程。

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
├── config.ts             # 站点配置（nav 下拉、sidebar、rewrites、搜索）
├── theme/
│   ├── index.ts          # 继承默认主题 + 作者签名 + 结语页烟花组件
│   ├── custom.css        # Tailwind v4 + 品牌色 + Hero 渐变动画 + 液态玻璃卡片 + 全局样式
│   └── css.d.ts          # *.css 模块类型声明
index.md                  # 总入口主页（渐变动画标题 + 2 张液态玻璃分发卡片）
tutorials/
├── deploy/
│   ├── docs/             # 部署教程 15 个 .md 文件
│   └── images/           # 按章节组织的截图（12 个章节子目录 + icons）
└── basics/
    ├── docs/             # 基础教程（占位中）
    └── images/           # 预留
public/images/icons/      # 根首页卡片图标（SVG）
```

### URL 映射（VitePress rewrites）

| 文件路径 | URL |
|---------|-----|
| `index.md` | `/` |
| `tutorials/deploy/docs/:p.md` | `/deploy/:p` |
| `tutorials/basics/docs/:p.md` | `/basics/:p` |

## 关键设计决策

- **品牌色**: Vue 绿 `#42b883`，`--vp-c-brand-1` CSS 变量控制全局
- **Hero 标题**: 渐变动画文字（绿→蓝→紫→绿），4s 循环，`background-clip: text`
- **总入口页**: `layout: home` + `features` frontmatter，2 张液态玻璃卡片（径向渐变 + backdrop-blur + 内阴影），大号渐变动画数字
- **部署首页**: `layout: home` + 自定义 HTML（`.home-intro` + `.home-grid`），3 列网格卡片 hover 渐变
- **样式隔离**: 根首页和部署页 Hero 通过 `:has(.VPFeatures):not(:has(.home-grid))` 和 `:not(:has(.VPFeatures))` 完全隔离
- **导航栏**: 单个"教程"下拉菜单，包含部署教程和基础教程入口
- **图片路径**: 内容页用 `../images/<章节>/` 相对路径（docs/ → images/）
- **包管理器**: 统一使用 npm，不混用 pnpm
- **样式方案**: 纯手写 CSS，不使用 Tailwind（Tailwind preflight 会破坏 VitePress 导航栏组件）
- **4 个页面**（git/nodejs/pnpm/windows-terminal）的"官方网站"节用 `<iframe>` 嵌入官网预览
- **结语页**: 路由触发 canvas 烟花动画（Fireworks 组件，SSR 安全）

## 内容更新注意

- 新增教程章节在 `tutorials/deploy/docs/` 或 `tutorials/basics/docs/` 下创建 `.md`
- 在 `.vitepress/config.ts` 的 sidebar、nav、rewrites 中注册
- 根首页卡片通过 `index.md` 的 `features` frontmatter 配置
- 部署首页卡片网格在 `tutorials/deploy/docs/index.md` 中用 HTML + 内联 `<style>` 实现
- 品牌色修改只需改 `custom.css` 中的 `--vp-c-brand-*` 变量（含 `.dark` 暗色模式）

## Git 分支

| 分支 | 用途 |
|------|------|
| `main` | 主分支 |
| `feat/homepage-distribution` | 首页分发功能 + 项目结构重组 |
