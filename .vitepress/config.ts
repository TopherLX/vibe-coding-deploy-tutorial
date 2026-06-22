import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vibe Coding 教程',
  description: 'AI 编程入门教程 — 从 Windows 开发环境部署到 Vibe Coding 实践',
  lang: 'zh-CN',

  srcExclude: ['docmost/**', 'scripts/**'],

  rewrites: {
    'tutorials/deploy/docs/:p.md': 'deploy/:p.md',
    'tutorials/basics/docs/:p.md': 'basics/:p.md',
  },

  vite: {},

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
            { text: 'PowerShell 7', link: '/deploy/powershell' },
            { text: 'Windows Terminal', link: '/deploy/windows-terminal' },
            { text: 'Python', link: '/deploy/python' },
            { text: 'Node.js', link: '/deploy/nodejs' },
            { text: 'pnpm', link: '/deploy/pnpm' },
            { text: 'Git', link: '/deploy/git' },
            { text: 'Visual Studio Code', link: '/deploy/vscode' },
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
          text: '基础入门章节',
          collapsed: false,
          items: [
            { text: '概述', link: '/basics/overview' },
            { text: 'LLM 基础概念', link: '/basics/llm-basics' },
            { text: 'Vibe Coding 相关理念', link: '/basics/vibe-coding-intro' },
            { text: 'Claude Code 使用指南', link: '/basics/claude-code-usage' },
            { text: 'Claude Code Skill 与插件', link: '/basics/claude-code-plugins' },
            { text: '数据可视化插件', link: '/basics/data-visualization' },
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
      level: [2, 3],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TopherLX/vibe-coding-deploy-tutorial' },
    ],
  },
})
