---
home: true
title: 首页
heroImage: /logo.png
heroText: yt-dlp 技术文档
tagline: 强大的视频下载工具完整使用指南
actions:
  - text: 开始学习
    link: /guide/
    type: primary
  - text: GitHub 项目
    link: https://github.com/yt-dlp/yt-dlp
    type: secondary
features:
  - title: 支持上千个网站
    details: 支持 YouTube、Bilibili、Twitter、Instagram 等 1000+ 视频网站
  - title: 功能强大
    details: 支持视频下载、音频提取、格式转换、字幕下载等多种功能
  - title: 完全免费
    details: 开源免费，跨平台支持 Windows、Linux、macOS
  - title: 易于使用
    details: 简单的命令行操作，丰富的参数配置，满足各种需求
footer: MIT Licensed | Copyright © 2024
---

## 快速开始

### 什么是 yt-dlp？

yt-dlp 是一个基于 youtube-dl 的增强版视频下载工具，支持从数千个视频网站下载视频和音频。它是 youtube-dl 的一个分支，增加了许多新功能和改进。

### 主要特性

- 🎥 支持 1000+ 视频网站
- 🚀 更快的下载速度
- 🎵 支持音频提取和格式转换
- 📝 支持字幕下载
- 🔐 支持需要登录的网站
- 💻 跨平台支持（Windows、Linux、macOS）

### 快速安装

```bash
# Windows (使用 winget)
winget install yt-dlp

# macOS (使用 Homebrew)
brew install yt-dlp

# Linux (使用 pip)
pip install yt-dlp
```

### 简单使用

```bash
# 下载视频
yt-dlp "https://www.youtube.com/watch?v=VIDEO_ID"

# 下载最佳质量
yt-dlp -f "best" "https://www.youtube.com/watch?v=VIDEO_ID"

# 只下载音频
yt-dlp -x --audio-format mp3 "https://www.youtube.com/watch?v=VIDEO_ID"
```