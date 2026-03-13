import { CodeTabs } from "/Users/zengrunfeng/projects/2026/yt-dlp/node_modules/@vuepress/plugin-markdown-tab/dist/client/components/CodeTabs.js";
import { Tabs } from "/Users/zengrunfeng/projects/2026/yt-dlp/node_modules/@vuepress/plugin-markdown-tab/dist/client/components/Tabs.js";
import "/Users/zengrunfeng/projects/2026/yt-dlp/node_modules/@vuepress/plugin-markdown-tab/dist/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
