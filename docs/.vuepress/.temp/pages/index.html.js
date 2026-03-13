import comp from "/Users/zengrunfeng/projects/2026/yt-dlp/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"/logo.png\",\"heroText\":\"yt-dlp 技术文档\",\"tagline\":\"强大的视频下载工具完整使用指南\",\"actions\":[{\"text\":\"开始学习\",\"link\":\"/guide/\",\"type\":\"primary\"},{\"text\":\"GitHub 项目\",\"link\":\"https://github.com/yt-dlp/yt-dlp\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"支持上千个网站\",\"details\":\"支持 YouTube、Bilibili、Twitter、Instagram 等 1000+ 视频网站\"},{\"title\":\"功能强大\",\"details\":\"支持视频下载、音频提取、格式转换、字幕下载等多种功能\"},{\"title\":\"完全免费\",\"details\":\"开源免费，跨平台支持 Windows、Linux、macOS\"},{\"title\":\"易于使用\",\"details\":\"简单的命令行操作，丰富的参数配置，满足各种需求\"}],\"footer\":\"MIT Licensed | Copyright © 2024\"},\"git\":{},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
