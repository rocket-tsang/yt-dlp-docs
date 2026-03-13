import comp from "/Users/zengrunfeng/projects/2026/yt-dlp/docs/.vuepress/.temp/pages/usage/index.html.vue"
const data = JSON.parse("{\"path\":\"/usage/\",\"title\":\"命令行使用\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"usage/README.md\"}")
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
