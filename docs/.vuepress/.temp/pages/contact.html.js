import comp from "/Users/zengrunfeng/projects/2026/yt-dlp/docs/.vuepress/.temp/pages/contact.html.vue"
const data = JSON.parse("{\"path\":\"/contact.html\",\"title\":\"联系我们\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"contact.md\"}")
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
