export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/zengrunfeng/projects/2026/yt-dlp/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/contact.html", { loader: () => import(/* webpackChunkName: "contact.html" */"/Users/zengrunfeng/projects/2026/yt-dlp/docs/.vuepress/.temp/pages/contact.html.js"), meta: {"title":"联系我们"} }],
  ["/install/", { loader: () => import(/* webpackChunkName: "install_index.html" */"/Users/zengrunfeng/projects/2026/yt-dlp/docs/.vuepress/.temp/pages/install/index.html.js"), meta: {"title":"安装指南"} }],
  ["/params/", { loader: () => import(/* webpackChunkName: "params_index.html" */"/Users/zengrunfeng/projects/2026/yt-dlp/docs/.vuepress/.temp/pages/params/index.html.js"), meta: {"title":"参数详解"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"/Users/zengrunfeng/projects/2026/yt-dlp/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"yt-dlp 项目介绍"} }],
  ["/sites/", { loader: () => import(/* webpackChunkName: "sites_index.html" */"/Users/zengrunfeng/projects/2026/yt-dlp/docs/.vuepress/.temp/pages/sites/index.html.js"), meta: {"title":"支持网站列表"} }],
  ["/practice/", { loader: () => import(/* webpackChunkName: "practice_index.html" */"/Users/zengrunfeng/projects/2026/yt-dlp/docs/.vuepress/.temp/pages/practice/index.html.js"), meta: {"title":"技术实战"} }],
  ["/usage/", { loader: () => import(/* webpackChunkName: "usage_index.html" */"/Users/zengrunfeng/projects/2026/yt-dlp/docs/.vuepress/.temp/pages/usage/index.html.js"), meta: {"title":"命令行使用"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/zengrunfeng/projects/2026/yt-dlp/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
