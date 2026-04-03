---
title: お問い合わせ - yt-dlp 技術ドキュメント
description: yt-dlp 技術ドキュメントへのお問い合わせ。GitHub Issues や Discussions などのフィードバックチャネル、およびよくある質問への解決策を提供します。
meta:
  - name: keywords
    content: yt-dlp連絡先,yt-dlpヘルプ,yt-dlpフィードバック,yt-dlp問題,yt-dlpコミュニティ
---

# お問い合わせ

yt-dlp 技術ドキュメントサイトをご覧いただきありがとうございます！ご質問、ご提案、またはフィードバックがございましたら、以下の方法でお問い合わせください。

## 公式リソース

### yt-dlp 公式 GitHub

- **プロジェクト URL**: [https://github.com/yt-dlp/yt-dlp](https://github.com/yt-dlp/yt-dlp)
- **Issues**: [https://github.com/yt-dlp/yt-dlp/issues](https://github.com/yt-dlp/yt-dlp/issues)
- **Discussions**: [https://github.com/yt-dlp/yt-dlp/discussions](https://github.com/yt-dlp/yt-dlp/discussions)
- **Wiki**: [https://github.com/yt-dlp/yt-dlp/wiki](https://github.com/yt-dlp/yt-dlp/wiki)

## ヘルプを得る

### 1. ドキュメントを確認する

質問をする前に、以下のリソースを確認することをお勧めします：

- 本ドキュメントサイトの各セクション
- [yt-dlp README（英語）](https://github.com/yt-dlp/yt-dlp#readme)
- [対応サイト一覧（英語）](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md)
- [FAQ（英語）](https://github.com/yt-dlp/yt-dlp/wiki/FAQ)

### 2. Issues を検索する

新しい Issue を作成する前に、既存の Issue を検索してください：

- [yt-dlp Issues](https://github.com/yt-dlp/yt-dlp/issues)

### 3. 新しい Issue を投稿する

解決策が見つからない場合は、新しい Issue を投稿できます：

1. [https://github.com/yt-dlp/yt-dlp/issues/new](https://github.com/yt-dlp/yt-dlp/issues/new) にアクセスします。
2. 適切な Issue テンプレートを選択します。
3. 問題を詳細に説明します。
4. 必要な情報（実行したコマンド、エラーメッセージ、システム情報など）を提供してください。

### 4. Discussions

一般的な質問や議論については、GitHub Discussions を利用してください：

- [https://github.com/yt-dlp/yt-dlp/discussions](https://github.com/yt-dlp/yt-dlp/discussions)

## バグを報告する

バグを見つけた場合は、以下の手順で報告してください：

### 1. 情報を収集する

以下のコマンドを実行してシステム情報を収集します：

```bash
# yt-dlp のバージョンを確認
yt-dlp --version

# 詳細なエラーメッセージを確認
yt-dlp --verbose "URL"

# システム情報を確認
# Linux
uname -a

# macOS
sw_vers

# Windows
systeminfo
```

### 2. バグ報告を送信する

バグ報告には以下を含めてください：

- **yt-dlp のバージョン**: `yt-dlp --version` で取得
- **OS**: Windows/Linux/macOS とそのバージョン
- **Python のバージョン**: `python --version` で取得
- **FFmpeg のバージョン**: `ffmpeg -version` で取得
- **完全なコマンド**: 使用した yt-dlp コマンド全体
- **完全なエラーメッセージ**: `--verbose` で取得した詳細な出力
- **問題の説明**: 問題の内容と期待される動作を明確に記述

## 機能のリクエスト

新しい機能の提案がある場合：

1. まず Issues や Discussions で同様のリクエストがないか検索してください。
2. ない場合は、新しい Feature Request を投稿してください。
3. 機能の要件と使用シーンを詳細に説明してください。
4. その機能がどのように yt-dlp を改善するかを説明してください。

## プロジェクトへの貢献

yt-dlp プロジェクトへの貢献を歓迎します！

### 貢献する方法

1. **プロジェクトを Fork する**: GitHub で yt-dlp プロジェクトをフォークします。
2. **ブランチを作成する**: 変更用の新しいブランチを作成します。
3. **コードを書く**: プロジェクトのコーディング規約に従ってください。
4. **テストする**: コードが正しく動作することを確認してください。
5. **Pull Request を送信する**: PR を送信し、レビューを待ちます。

## コミュニティリソース

### コミュニティフォーラム

- [Reddit r/youtubedl](https://www.reddit.com/r/youtubedl/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/yt-dlp)

## このドキュメントについて

### ドキュメントの目的

本ドキュメントサイトは、包括的で詳細な yt-dlp の使用ガイドを提供し、ユーザーがこの強力なツールのさまざまな機能を迅速に習得し、深く理解できるようにすることを目的としています。

### ドキュメントへの貢献

ドキュメントに誤りを見つけた場合や改善を希望される場合は：

1. GitHub で Issue を作成してください。
2. または、Pull Request を直接送信してドキュメントを改善してください。

### ライセンス

本ドキュメントは MIT ライセンスの下で提供されています。

## FAQ（よくある質問）

### Q: yt-dlp と youtube-dl の違いは何ですか？

A: yt-dlp は youtube-dl の拡張版フォークであり、より多くの機能、高速なダウンロード速度、および頻繁な更新を備えています。詳細は [プロジェクト紹介](/ja/guide/) をご覧ください。

### Q: yt-dlp を更新するにはどうすればよいですか？

A: `yt-dlp -U` コマンドを使用するか、インストールに使用したパッケージマネージャーで更新してください。

### Q: ダウンロード速度が遅い場合はどうすればよいですか？

A: 以下を試してください：
- プロキシを使用する。
- `--concurrent-fragments` パラメータを使用する。
- aria2c などの外部ダウンローダーを使用する。

### Q: エラーが発生した場合はどうすればよいですか？

A: 
1. 最新バージョンに更新してください。
2. `--verbose` を使用して詳細なエラーを確認してください。
3. GitHub Issues で同様の問題を検索してください。

## 免责事項

- 本ドキュメントは学習目的のリファレンスとして提供されています。
- 各地の法律および規制を遵守してください。
- コンテンツ制作者の著作権を尊重してください。
- 商業目的で使用しないでください（許可されている場合を除く）。

## 最後に

yt-dlp をご利用いただきありがとうございます！本ドキュメントが、この強力なツールをより良く活用するための一助となれば幸いです。

ハッピー・ダウンロード！
