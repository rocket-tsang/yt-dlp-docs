export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/root/.openclaw/workspace/yt-dlp-docs-latest/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"yt-dlp 技术文档 - 强大的视频下载工具完整指南"} }],
  ["/contact/", { loader: () => import(/* webpackChunkName: "contact_index.html" */"/root/.openclaw/workspace/yt-dlp-docs-latest/docs/.vuepress/.temp/pages/contact/index.html.js"), meta: {"title":"联系我们 - yt-dlp 技术文档"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"/root/.openclaw/workspace/yt-dlp-docs-latest/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"yt-dlp 项目介绍 - 什么是 yt-dlp 及其主要特性"} }],
  ["/install/", { loader: () => import(/* webpackChunkName: "install_index.html" */"/root/.openclaw/workspace/yt-dlp-docs-latest/docs/.vuepress/.temp/pages/install/index.html.js"), meta: {"title":"yt-dlp 安装指南 - Windows/Linux/macOS 安装教程"} }],
  ["/params/", { loader: () => import(/* webpackChunkName: "params_index.html" */"/root/.openclaw/workspace/yt-dlp-docs-latest/docs/.vuepress/.temp/pages/params/index.html.js"), meta: {"title":"yt-dlp 参数详解 - 完整命令行参数说明"} }],
  ["/practice/", { loader: () => import(/* webpackChunkName: "practice_index.html" */"/root/.openclaw/workspace/yt-dlp-docs-latest/docs/.vuepress/.temp/pages/practice/index.html.js"), meta: {"title":"yt-dlp 实战案例 - 真实场景应用教程"} }],
  ["/privacy/", { loader: () => import(/* webpackChunkName: "privacy_index.html" */"/root/.openclaw/workspace/yt-dlp-docs-latest/docs/.vuepress/.temp/pages/privacy/index.html.js"), meta: {"title":"隐私权政策"} }],
  ["/sites/", { loader: () => import(/* webpackChunkName: "sites_index.html" */"/root/.openclaw/workspace/yt-dlp-docs-latest/docs/.vuepress/.temp/pages/sites/index.html.js"), meta: {"title":"yt-dlp 支持网站列表 - YouTube/Bilibili/Twitter 等 1000+ 网站"} }],
  ["/usage/", { loader: () => import(/* webpackChunkName: "usage_index.html" */"/root/.openclaw/workspace/yt-dlp-docs-latest/docs/.vuepress/.temp/pages/usage/index.html.js"), meta: {"title":"yt-dlp 命令行使用教程 - 基础到进阶完整指南"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/root/.openclaw/workspace/yt-dlp-docs-latest/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
