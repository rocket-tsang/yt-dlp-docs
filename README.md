# yt-dlp 技术文档

基于 Vuepress 构建的 yt-dlp 视频下载工具完整使用指南。

## 项目介绍

本项目使用 Vuepress 框架，生成 yt-dlp 技术文档网站，旨在帮助用户快速上手和深入了解 yt-dlp 的各种功能。

## 内容概览

1. **项目介绍** - yt-dlp 的详细介绍和特性
2. **安装指南** - Windows、Linux、macOS 下的安装方法
3. **命令行使用** - 基本命令行操作和常见场景
4. **参数详解** - 所有可用参数的详细说明
5. **支持网站** - 支持的主要网站列表
6. **技术实战** - 实际使用案例和技巧
7. **联系我们** - 获取帮助和贡献代码

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run docs:dev
```

访问 http://localhost:8080 查看文档网站。

### 构建生产版本

```bash
npm run docs:build
```

构建后的文件将生成在 `docs/.vuepress/dist` 目录。

## 项目结构

```
.
├── docs
│   ├── .vuepress
│   │   └── config.ts       # Vuepress 配置文件
│   ├── guide               # 项目介绍
│   ├── install             # 安装指南
│   ├── usage               # 命令行使用
│   ├── params              # 参数详解
│   ├── sites               # 支持网站
│   ├── practice            # 技术实战
│   ├── contact.md          # 联系我们
│   └── README.md           # 首页
├── package.json
└── README.md
```

## 技术栈

- [Vuepress 2.x](https://v2.vuepress.vuejs.org/zh/) - 静态网站生成器
- [Vue 3](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Vite](https://vitejs.dev/) - 下一代前端构建工具

## 参考资料

- [yt-dlp GitHub](https://github.com/yt-dlp/yt-dlp)
- [yt-dlp 文档](https://github.com/yt-dlp/yt-dlp#readme)
- [支持的网站列表](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md)

## 许可证

MIT License

## 致谢

感谢 yt-dlp 项目及其贡献者。