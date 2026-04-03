# yt-dlp 技術ドキュメント

Vuepress で構築された yt-dlp ビデオダウンロードツールの完全ガイド。

[English](README_en.md) | [简体中文](README.md) | [日本語](README_ja.md) | [한국어](README.md)

## プロジェクト紹介

このプロジェクトは Vuepress フレームワークを使用して、yt-dlp の技術ドキュメントサイトを生成します。ユーザーが yt-dlp のさまざまな機能を迅速に習得し、深く理解できるようにすることを目的としています。

## コンテンツ概要

1. **プロジェクト紹介** - yt-dlp の詳細な紹介と特徴
2. **インストールガイド** - Windows、Linux、macOS でのインストール方法
3. **コマンドラインの使い方** - 基本的な操作と一般的なシナリオ
4. **パラメータの詳細** - 利用可能なすべてのパラメータの詳しい解説
5. **対応サイト** - 主要なサポートウェブサイトの一覧
6. **実践ケース** - 実際の使用例とテクニック
7. **お問い合わせ** - ヘルプの入手とプロジェクトへの貢献

## クイックスタート

### 依存関係のインストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run docs:dev
```

http://localhost:8080 にアクセスしてドキュメントサイトを表示します。

### 本番バージョンのビルド

```bash
npm run docs:build
```

ビルドされたファイルは `docs/.vuepress/dist` ディレクトリに生成されます。

## プロジェクト構造

```
.
├── docs
│   ├── .vuepress
│   │   └── config.ts       # Vuepress 設定ファイル
│   ├── guide               # プロジェクト紹介
│   ├── install             # インストールガイド
│   ├── usage               # 使い方
│   ├── params              # パラメータの詳細
│   ├── sites               # 対応サイト
│   ├── practice            # 実践ケース
│   ├── contact             # お問い合わせ
│   └── README.md           # ホームページ
├── package.json
└── README.md
```

## 技術スタック

- [Vuepress 2.x](https://v2.vuepress.vuejs.org/ja/) - 静的サイトジェネレーター
- [Vue 3](https://vuejs.org/) - プログレッシブ JavaScript フレームワーク
- [Vite](https://vitejs.dev/) - 次世代フロントエンドビルドツール

## リソース

- [yt-dlp GitHub](https://github.com/yt-dlp/yt-dlp)
- [yt-dlp ドキュメント](https://github.com/yt-dlp/yt-dlp#readme)
- [対応サイト一覧](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md)

## ライセンス

MIT License

## 謝辞

yt-dlp プロジェクトとその貢献者に感謝いたします。
