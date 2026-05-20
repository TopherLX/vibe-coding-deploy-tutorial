import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  title: 'Vibe Coding 环境部署教程',
  description: 'Windows 环境下 Vibe Coding 开发环境完整搭建指南',
  lang: 'zh-CN',

  srcExclude: ['docmost/**', 'scripts/**'],

  vite: {
    plugins: [tailwindcss()],
  },

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '安装依赖项', link: '/guide/install-dependencies' },
      { text: 'AI开发工具', link: '/guide/install-ai-tools' },
    ],

    sidebar: [
      {
        text: '安装依赖项',
        collapsed: false,
        items: [
          { text: '概述', link: '/guide/install-dependencies' },
          { text: 'Visual Studio Code', link: '/guide/vscode' },
          { text: 'PowerShell 7', link: '/guide/powershell' },
          { text: 'Windows Terminal', link: '/guide/windows-terminal' },
          { text: 'Node.js', link: '/guide/nodejs' },
          { text: 'pnpm', link: '/guide/pnpm' },
          { text: 'Git', link: '/guide/git' },
        ],
      },
      {
        text: '安装AI开发工具',
        collapsed: false,
        items: [
          { text: '概述', link: '/guide/install-ai-tools' },
          { text: 'Claude Code 终端', link: '/guide/claude-code-terminal' },
          { text: 'Claude Code 扩展', link: '/guide/claude-code-extension' },
          { text: 'CC Switch', link: '/guide/cc-switch' },
        ],
      },
    ],

    search: {
      provider: 'local',
    },

    editLink: {
      pattern: '#',
      text: '在 GitHub 上编辑此页',
    },

    lastUpdated: {
      text: '最后更新',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '页面导航',
    },
  },
})
