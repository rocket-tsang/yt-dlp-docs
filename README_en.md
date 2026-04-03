# yt-dlp Technical Documentation

A complete guide to the yt-dlp video downloader, built with Vuepress.

[English](README_en.md) | [简体中文](README.md) | [日本語](README_ja.md) | [한국어](README_ko.md)

## Project Introduction

This project uses the Vuepress framework to generate a technical documentation website for yt-dlp, aiming to help users quickly get started and gain a deep understanding of its various features.

## Content Overview

1. **Project Introduction** - Detailed introduction and features of yt-dlp
2. **Installation Guide** - Installation methods for Windows, Linux, and macOS
3. **Command-line Usage** - Basic CLI operations and common scenarios
4. **Parameters Detailed** - Detailed explanation of all available parameters
5. **Supported Sites** - List of major supported websites
6. **Technical Practice** - Real-world usage cases and tips
7. **Contact Us** - How to get help and contribute

## Quick Start

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run docs:dev
```

Visit http://localhost:8080 to view the documentation site.

### Build Production Version

```bash
npm run docs:build
```

The built files will be generated in the `docs/.vuepress/dist` directory.

## Project Structure

```
.
├── docs
│   ├── .vuepress
│   │   └── config.ts       # Vuepress configuration file
│   ├── guide               # Project introduction
│   ├── install             # Installation guide
│   ├── usage               # Command-line usage
│   ├── params              # Parameters detailed
│   ├── sites               # Supported sites
│   ├── practice            # Technical practice
│   ├── contact             # Contact us
│   └── README.md           # Home page
├── package.json
└── README.md
```

## Technology Stack

- [Vuepress 2.x](https://v2.vuepress.vuejs.org/) - Static site generator
- [Vue 3](https://vuejs.org/) - Progressive JavaScript framework
- [Vite](https://vitejs.dev/) - Next-generation frontend build tool

## Resources

- [yt-dlp GitHub](https://github.com/yt-dlp/yt-dlp)
- [yt-dlp Documentation](https://github.com/yt-dlp/yt-dlp#readme)
- [Supported Sites List](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md)

## License

MIT License

## Acknowledgements

Thanks to the yt-dlp project and its contributors.
