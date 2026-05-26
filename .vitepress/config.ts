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
    siteTitle: '首页',

    nav: [
      {
        text: '目录',
        items: [
          {
            text: '安装依赖项',
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
            text: '安装 AI 开发工具',
            items: [
              { text: '概述', link: '/guide/install-ai-tools' },
              { text: 'Claude Code CLI', link: '/guide/claude-code-terminal' },
              { text: 'Claude Code Extension', link: '/guide/claude-code-extension' },
              { text: 'CC Switch', link: '/guide/cc-switch' },
              { text: '验证第三方模型接入', link: '/guide/verify-third-party-model' },
            ],
          },
        ],
      },
      { text: 'FAQ', link: '/guide/faq' },
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
          { text: 'Claude Code CLI', link: '/guide/claude-code-terminal' },
          { text: 'Claude Code Extension', link: '/guide/claude-code-extension' },
          { text: 'CC Switch', link: '/guide/cc-switch' },
          { text: '验证第三方模型接入', link: '/guide/verify-third-party-model' },
        ],
      },
      {
        text: '更多',
        collapsed: false,
        items: [
          { text: '结语', link: '/guide/conclusion' },
          { text: 'FAQ', link: '/guide/faq' },
        ],
      },
    ],

    search: {
      provider: 'local',
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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TopherLX/vibe-coding-deploy-tutorial' },
    ],
  },
})
