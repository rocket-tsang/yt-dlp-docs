import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: '/logo2.png',
    repo: 'yt-dlp/yt-dlp',
    repoLabel: 'GitHub',
    docsDir: 'docs',
    editLink: false,
    lastUpdated: true,
    lastUpdatedText: '上次更新',
    contributors: false,
    tip: '提示',
    warning: '注意',
    danger: '警告',
    notFound: ['页面未找到', '这里什么都没有', '我们怎么到这儿来了？'],
    backToHome: '返回首页',
    openInNewWindow: '在新窗口打开',
    toggleColorMode: '切换颜色模式',
    toggleSidebar: '切换侧边栏',
    navbar: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '安装', link: '/install/' },
      { text: '命令行使用', link: '/usage/' },
      { text: '参数详解', link: '/params/' },
      { text: '支持网站', link: '/sites/' },
      { text: '实战案例', link: '/practice/' },
      { text: '联系我们', link: '/contact/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          children: ['/guide/README.md'],
        },
      ],
      '/install/': [
        {
          text: '安装指南',
          children: ['/install/README.md'],
        },
      ],
      '/usage/': [
        {
          text: '命令行使用',
          children: ['/usage/README.md'],
        },
      ],
      '/params/': [
        {
          text: '参数详解',
          children: ['/params/README.md'],
        },
      ],
      '/sites/': [
        {
          text: '支持网站',
          children: ['/sites/README.md'],
        },
      ],
      '/practice/': [
        {
          text: '实战案例',
          children: ['/practice/README.md'],
        },
      ],
      '/contact/': [
        {
          text: '联系我们',
          children: ['/contact/README.md'],
        },
      ],
    },
  }),
  lang: 'zh-CN',
  title: 'yt-dlp 技术文档',
  description: '强大的视频下载工具完整使用指南',
})