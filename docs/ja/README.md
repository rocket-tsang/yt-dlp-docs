---
home: true
title: yt-dlp 技術ドキュメント - 強力なビデオダウンロードツールの完全ガイド
description: yt-dlp は 1000 以上のサイトに対応した強力なビデオダウンロードツールです。このチュートリアルでは、完全なインストールガイド、コマンドラインの使い方、パラメータの詳細、および実用的な例を提供します。
heroImage: /logo.png
heroText: yt-dlp ドキュメント
tagline: 強力なビデオダウンロードツールの完全使用ガイド
meta:
  - name: keywords
    content: yt-dlpチュートリアル,ビデオダウンロードツール,youtube-dl代替,YouTubeダウンロード,Bilibiliダウンロード,ビデオダウンロードガイド,yt-dlp日本語ドキュメント
  - name: description
    content: yt-dlp は 1000 以上のサイトに対応した強力なビデオダウンロードツールです。このチュートリアルでは、完全なインストールガイド、コマンドラインの使い方、パラメータの詳細、および実用的な例を提供します。
  - property: og:title
    content: yt-dlp 技術ドキュメント - 強力なビデオダウンロードツールの完全ガイド
  - property: og:description
    content: yt-dlp は 1000 以上のサイトに対応した強力なビデオダウンロードツールです。このチュートリアルでは、完全なインストールガイド、コマンドラインの使い方、パラメータの詳細、および実用的な例を提供します。
  - property: og:image
    content: /logo.png
actions:
  - text: はじめる
    link: /ja/guide/
    type: primary
  - text: GitHub プロジェクト
    link: https://github.com/rocket-tsang/yt-dlp-docs
    type: secondary
features:
  - title: 1000以上のサイトに対応
    details: YouTube、Bilibili、Twitter、Instagram など、1000 以上のビデオサイトからダウンロードできます。
  - title: 強力な機能
    details: ビデオのダウンロード、オーディオの抽出、フォーマット変換、字幕のダウンロードなどをサポートしています。
  - title: 完全に無料
    details: オープンソースで無料。Windows、Linux、macOS のクロスプラットフォームをサポートしています。
  - title: 使いやすい
    details: シンプルなコマンドライン操作と、あらゆるニーズに応える豊富な設定オプションを備えています。
footer: CustomFooter
---

## クイックスタート

### yt-dlp とは？

yt-dlp は youtube-dl に基づく拡張ビデオダウンロードツールであり、数千のビデオサイトからのダウンロードと改善をサポートしています。

### 主な特徴

- 🎥 1000以上のビデオサイトをサポート
- 🚀 より速いダウンロード速度
- 🎵 オーディオ抽出とフォーマット変換
- 📝 字幕ダウンロードのサポート
- 🔐 ログインが必要なサイトのサポート
- 💻 クロスプラットフォーム（Windows、Linux、macOS）

### クイックインストール

```bash
# Windows (winget を使用)
winget install yt-dlp

# macOS (Homebrew を使用)
brew install yt-dlp

# Linux (pip を使用)
pip install yt-dlp
```

### 簡単な使い方

```bash
# ビデオをダウンロードする
yt-dlp "https://www.youtube.com/watch?v=VIDEO_ID"

# 最高画質でダウンロードする
yt-dlp -f "best" "https://www.youtube.com/watch?v=VIDEO_ID"

# オーディオのみをダウンロードする
yt-dlp -x --audio-format mp3 "https://www.youtube.com/watch?v=VIDEO_ID"
```
