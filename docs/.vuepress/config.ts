import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'

export default defineUserConfig({
  dest: 'dist',
  base: '/',
  head: [
    ['meta', { name: 'keywords', content: 'yt-dlp,视频下载工具,youtube-dl,YouTube下载,Bilibili下载,Twitter下载,视频格式转换,音频提取' }],
    ['meta', { name: 'description', content: '强大的视频下载工具完整使用指南' }],
    ['meta', { name: 'author', content: 'yt-dlp 社区' }],
    ['meta', { name: 'google-site-verification', content: 'YOUR_GOOGLE_VERIFICATION_CODE' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'yt-dlp 技术文档' }],
    ['meta', { property: 'og:title', content: 'yt-dlp 技术文档' }],
    ['meta', { property: 'og:description', content: '强大的视频下载工具完整使用指南' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { rel: 'icon', href: '/logo2.png' }],
    ['link', { rel: 'canonical', href: 'https://yt.gzsoon.com/' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['script', { charset: 'UTF-8', id: 'LA_COLLECT', src: '//sdk.51.la/js-sdk-pro.min.js' }],
    ['script', {}, 'LA.init({id:"JrOb8e7AfCcc9tUO",ck:"JrOb8e7AfCcc9tUO"})'],

  ],
  plugins: [
    sitemapPlugin({
      hostname: 'https://yt.gzsoon.com/',
    }),
  ],
  bundler: viteBundler({
    vuePluginOptions: {
      isProduction: true,
    },
  }),
  theme: defaultTheme({
    logo: '/logo2.png',
    repo: 'rocket-tsang/yt-dlp-docs',
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
    darkMode: false, // 禁用暗色模式以避免SSR issue
    navbar: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '安装', link: '/install/' },
      { text: '命令行使用', link: '/usage/' },
      { text: '参数详解', link: '/params/' },
      { text: '支持网站', link: '/sites/' },
      { text: '实战案例', link: '/practice/' },
      { text: '联系我们', link: '/contact/' },
      { text: '隐私权', link: '/privacy/' },
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
      '/privacy/': [
        {
          text: '隐私权政策',
          children: ['/privacy/README.md'],
        },
      ],
    },
  }),
  lang: 'zh-CN',
  title: 'yt-dlp 技术文档',
  description: '强大的视频下载工具完整使用指南',
})