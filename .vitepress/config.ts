import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  title: 'Vibe Coding 教程',
  description: 'AI 编程入门教程 — 从 Windows 开发环境部署到 Vibe Coding 实践',
  lang: 'zh-CN',

  srcExclude: ['docmost/**', 'scripts/**'],

  rewrites: {
    'tutorials/deploy/docs/:p.md': 'deploy/:p.md',
    'tutorials/basics/docs/:p.md': 'basics/:p.md',
  },

  vite: {
    plugins: [tailwindcss()],
  },

  themeConfig: {
    siteTitle: 'Vibe Coding 教程',

    nav: [
      {
        text: '教程',
        items: [
          { text: '部署教程', link: '/deploy/' },
          { text: '基础教程', link: '/basics/' },
        ],
      },
    ],

    sidebar: {
      '/deploy/': [
        {
          text: '安装依赖项',
          collapsed: false,
          items: [
            { text: '概述', link: '/deploy/install-dependencies' },
            { text: 'Visual Studio Code', link: '/deploy/vscode' },
            { text: 'PowerShell 7', link: '/deploy/powershell' },
            { text: 'Windows Terminal', link: '/deploy/windows-terminal' },
            { text: 'Node.js', link: '/deploy/nodejs' },
            { text: 'pnpm', link: '/deploy/pnpm' },
            { text: 'Git', link: '/deploy/git' },
          ],
        },
        {
          text: '安装 AI 开发工具',
          collapsed: false,
          items: [
            { text: '概述', link: '/deploy/install-ai-tools' },
            { text: 'Claude Code CLI', link: '/deploy/claude-code-terminal' },
            { text: 'Claude Code Extension', link: '/deploy/claude-code-extension' },
            { text: 'CC Switch', link: '/deploy/cc-switch' },
            { text: '验证第三方模型接入', link: '/deploy/verify-third-party-model' },
          ],
        },
        {
          text: '更多',
          collapsed: false,
          items: [
            { text: '结语', link: '/deploy/conclusion' },
            { text: 'FAQ', link: '/deploy/faq' },
          ],
        },
      ],
      '/basics/': [
        {
          text: 'Vibe Coding 基础',
          collapsed: false,
          items: [
            { text: '概述', link: '/basics/' },
          ],
        },
      ],
    },

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
