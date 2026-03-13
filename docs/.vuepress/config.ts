import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'yt-dlp 技术文档',
  description: 'yt-dlp 视频下载工具完整使用指南',

  bundler: viteBundler(),

  theme: defaultTheme({
    // logo: '/logo.png',
    repo: 'https://github.com/yt-dlp/yt-dlp',
    repoLabel: 'GitHub',
    editLink: false,
    lastUpdated: true,
    lastUpdatedText: '上次更新',
    contributors: false,

    navbar: [
      { text: '首页', link: '/' },
      { text: '项目介绍', link: '/guide/' },
      { text: '安装指南', link: '/install/' },
      { text: '命令行使用', link: '/usage/' },
      { text: '参数详解', link: '/params/' },
      { text: '支持网站', link: '/sites/' },
      { text: '技术实战', link: '/practice/' },
      { text: '联系我们', link: '/contact' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '项目介绍',
          children: ['/guide/'],
        },
      ],
      '/install/': [
        {
          text: '安装指南',
          children: ['/install/'],
        },
      ],
      '/usage/': [
        {
          text: '命令行使用',
          children: ['/usage/'],
        },
      ],
      '/params/': [
        {
          text: '参数详解',
          children: ['/params/'],
        },
      ],
      '/sites/': [
        {
          text: '支持网站',
          children: ['/sites/'],
        },
      ],
      '/practice/': [
        {
          text: '技术实战',
          children: ['/practice/'],
        },
      ],
    },
  }),
})