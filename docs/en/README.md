---
home: true
title: yt-dlp Technical Documentation - Complete Guide to the Powerful Video Downloader
description: yt-dlp is a powerful video downloader supporting 1000+ sites. This tutorial provides a complete installation guide, command-line usage, parameter details, and practical examples.
heroImage: /logo.png
heroText: yt-dlp Docs
tagline: Complete Guide for the Powerful Video Downloader
meta:
  - name: keywords
    content: yt-dlp tutorial, video downloader, youtube-dl alternative, YouTube downloader, Bilibili downloader, video download guide, yt-dlp english docs
  - name: description
    content: yt-dlp is a powerful video downloader supporting 1000+ sites. This tutorial provides a complete installation guide, command-line usage, parameter details, and practical examples.
  - property: og:title
    content: yt-dlp Technical Documentation - Complete Guide to the Powerful Video Downloader
  - property: og:description
    content: yt-dlp is a powerful video downloader supporting 1000+ sites. This tutorial provides a complete installation guide, command-line usage, parameter details, and practical examples.
  - property: og:image
    content: /logo.png
actions:
  - text: Get Started
    link: /en/guide/
    type: primary
  - text: GitHub Project
    link: https://github.com/rocket-tsang/yt-dlp-docs
    type: secondary
features:
  - title: Supports 1000+ Sites
    details: Download from YouTube, Bilibili, Twitter, Instagram, and over 1000 video sites.
  - title: Powerful Features
    details: Supports video downloads, audio extraction, format conversion, subtitle downloads, and more.
  - title: Completely Free
    details: Open source and free, with cross-platform support for Windows, Linux, and macOS.
  - title: Easy to Use
    details: Simple command-line operations with rich configuration options to meet all your needs.
footer: CustomFooter
---

## Quick Start

### What is yt-dlp?

yt-dlp is an enhanced video downloader based on youtube-dl, supporting video downloads and improvements from thousands of video sites.

### Key Features

- 🎥 Supports 1000+ video websites
- 🚀 Faster download speeds
- 🎵 Audio extraction and format conversion
- 📝 Subtitle download support
- 🔐 Support for sites requiring login
- 💻 Cross-platform (Windows, Linux, macOS)

### Quick Installation

```bash
# Windows (using winget)
winget install yt-dlp

# macOS (using Homebrew)
brew install yt-dlp

# Linux (using pip)
pip install yt-dlp
```

### Simple Usage

```bash
# Download a video
yt-dlp "https://www.youtube.com/watch?v=VIDEO_ID"

# Download in best quality
yt-dlp -f "best" "https://www.youtube.com/watch?v=VIDEO_ID"

# Download audio only
yt-dlp -x --audio-format mp3 "https://www.youtube.com/watch?v=VIDEO_ID"
```
