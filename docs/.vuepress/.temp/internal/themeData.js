export const themeData = JSON.parse("{\"repo\":\"https://github.com/yt-dlp/yt-dlp\",\"repoLabel\":\"GitHub\",\"editLink\":false,\"lastUpdated\":true,\"lastUpdatedText\":\"上次更新\",\"contributors\":false,\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"项目介绍\",\"link\":\"/guide/\"},{\"text\":\"安装指南\",\"link\":\"/install/\"},{\"text\":\"命令行使用\",\"link\":\"/usage/\"},{\"text\":\"参数详解\",\"link\":\"/params/\"},{\"text\":\"支持网站\",\"link\":\"/sites/\"},{\"text\":\"技术实战\",\"link\":\"/practice/\"},{\"text\":\"联系我们\",\"link\":\"/contact\"}],\"sidebar\":{\"/guide/\":[{\"text\":\"项目介绍\",\"children\":[\"/guide/\"]}],\"/install/\":[{\"text\":\"安装指南\",\"children\":[\"/install/\"]}],\"/usage/\":[{\"text\":\"命令行使用\",\"children\":[\"/usage/\"]}],\"/params/\":[{\"text\":\"参数详解\",\"children\":[\"/params/\"]}],\"/sites/\":[{\"text\":\"支持网站\",\"children\":[\"/sites/\"]}],\"/practice/\":[{\"text\":\"技术实战\",\"children\":[\"/practice/\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLinkText\":\"Edit this page\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
