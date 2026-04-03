---
title: yt-dlp 使い方チュートリアル - 基本から応用までの完全ガイド
description: yt-dlp のコマンドラインでの使い方の完全なチュートリアル。ビデオのダウンロード、オーディオの抽出、フォーマットの選択、字幕のダウンロードなどの一般的なシナリオを、多くの実用的な例とともにカバーしています。
meta:
  - name: keywords
    content: yt-dlpコマンド,yt-dlp使い方,ビデオダウンロードコマンド,YouTubeダウンロード,Bilibiliダウンロード,yt-dlp例
---

# 使い方

この章では、yt-dlp の基本的なコマンドラインでの使用方法と一般的なシナリオを紹介します。

## 基本的な構文

```bash
yt-dlp [オプション] <URL>
```

## 最もシンプルな使い方

### ビデオをダウンロードする

```bash
yt-dlp "https://www.youtube.com/watch?v=VIDEO_ID"
```

これにより、ビデオの最高品質バージョンが自動的にダウンロードされます。

### プレイリストをダウンロードする

```bash
yt-dlp "https://www.youtube.com/playlist?list=PLAYLIST_ID"
```

## よく使われるコマンド

### 1. ダウンロード先とファイル名の指定

`-o` パラメータを使用します：

```bash
# ファイル名を指定する
yt-dlp -o "my_video.mp4" "URL"

# パスとファイル名を指定する
yt-dlp -o "/path/to/video.mp4" "URL"

# 変数を使用する
yt-dlp -o "%(title)s.%(ext)s" "URL"
yt-dlp -o "%(title)s-%(id)s.%(ext)s" "URL"
yt-dlp -o "~/Downloads/%(title)s.%(ext)s" "URL"
```

### よく使われるファイル名変数

| 変数 | 説明 |
|------|------|
| `%(id)s` | ビデオ ID |
| `%(title)s` | ビデオタイトル |
| `%(ext)s` | ファイル拡張子 |
| `%(uploader)s` | アップローダー |
| `%(upload_date)s` | アップロード日 |
| `%(resolution)s` | 解像度 |
| `%(playlist_index)s` | プレイリストのインデックス |
| `%(playlist_title)s` | プレイリストのタイトル |

### 2. 画質の選択

#### 最高画質でダウンロード

```bash
yt-dlp -f "bestvideo+bestaudio/best" "URL"
```

#### 特定の解像度を指定してダウンロード

```bash
# 1080p ビデオをダウンロード
yt-dlp -f "bestvideo[height<=1080]+bestaudio/best[height<=1080]" "URL"

# 720p ビデオをダウンロード
yt-dlp -f "bestvideo[height<=720]+bestaudio/best[height<=720]" "URL"

# 最大 480p のビデオをダウンロード
yt-dlp -f "bestvideo[height<=480]+bestaudio/best[height<=480]" "URL"
```

#### 利用可能なフォーマットの一覧を表示

```bash
yt-dlp -F "URL"
```

これにより、そのビデオで利用可能なすべてのフォーマットとそれらのフォーマット ID が表示されます。

#### 特定のフォーマットを指定してダウンロード

```bash
# フォーマット ID を使用する
yt-dlp -f 22 "URL"

# 特定のフォーマットをダウンロード
yt-dlp -f "mp4" "URL"
```

### 3. オーディオのダウンロード

#### オーディオのみをダウンロード（最高音質）

```bash
yt-dlp -x --audio-format mp3 "URL"
```

#### オーディオ品質を指定する

```bash
yt-dlp -x --audio-format mp3 --audio-quality 0 "URL"  # 最高品質
yt-dlp -x --audio-format mp3 --audio-quality 5 "URL"  # 標準品質
yt-dlp -x --audio-format mp3 --audio-quality 9 "URL"  # 最小サイズ
```

オーディオ品質の範囲：0（最高）から 9（最低）

### 4. 字幕のダウンロード

#### すべての字幕をダウンロードする

```bash
yt-dlp --write-subs "URL"
```

#### 特定の言語の字幕をダウンロードする

```bash
# 日本語字幕をダウンロード
yt-dlp --write-subs --sub-langs "ja" "URL"

# 英語字幕をダウンロード
yt-dlp --write-subs --sub-langs "en" "URL"

# 複数の言語の字幕をダウンロード
yt-dlp --write-subs --sub-langs "en,ja" "URL"

# 利用可能なすべての字幕をダウンロード
yt-dlp --write-subs --sub-langs "all" "URL"
```

#### 字幕をビデオに埋め込む

```bash
yt-dlp --embed-subs --sub-langs "ja" "URL"
```

### 5. サムネイルのダウンロード

```bash
# サムネイルをダウンロード
yt-dlp --write-thumbnail "URL"

# オーディオファイルにサムネイルを埋め込む
yt-dlp -x --audio-format mp3 --embed-thumbnail "URL"
```

### 6. メタデータのダウンロード

```bash
# JSON 形式でメタデータをダウンロード
yt-dlp --write-info-json "URL"

# 説明ファイルをダウンロード
yt-dlp --write-description "URL"
```

## プレイリストのダウンロード

### プレイリスト全体をダウンロード

```bash
yt-dlp "PLAYLIST_URL"
```

### プレイリスト内の特定のビデオをダウンロード

```bash
# 1番目のビデオをダウンロード
yt-dlp --playlist-items 1 "PLAYLIST_URL"

# 1番目から5番目までのビデオをダウンロード
yt-dlp --playlist-items 1-5 "PLAYLIST_URL"

# 1, 3, 5番目のビデオをダウンロード
yt-dlp --playlist-items 1,3,5 "PLAYLIST_URL"

# 1番目から3番目までと7番目のビデオをダウンロード
yt-dlp --playlist-items 1-3,7 "PLAYLIST_URL"
```

### ダウンロード範囲の制限

```bash
# 5番目からダウンロードを開始
yt-dlp --playlist-start 5 "PLAYLIST_URL"

# 10番目でダウンロードを停止
yt-dlp --playlist-end 10 "PLAYLIST_URL"

# 5番目から10番目までをダウンロード
yt-dlp --playlist-start 5 --playlist-end 10 "PLAYLIST_URL"
```

### プレイリストを逆順にする

```bash
# 最後のビデオからダウンロードを開始
yt-dlp --playlist-reverse "PLAYLIST_URL"
```

## ダウンロードの制御

### 速度制限付きダウンロード

```bash
# 速度を 1MB/s に制限
yt-dlp --limit-rate 1M "URL"

# 速度を 500KB/s に制限
yt-dlp --limit-rate 500K "URL"
```

### 同時ダウンロード

```bash
# 4つの同時フラグメントを使用
yt-dlp --concurrent-fragments 4 "URL"
```

### ダウンロードの再開

```bash
yt-dlp --continue "URL"
```

### ダウンロード済みファイルをスキップ

```bash
# ファイルが存在する場合はダウンロードをスキップ
yt-dlp --skip-download "URL"

# 既存のファイルを上書きしない
yt-dlp --no-overwrites "URL"
```

## 一括ダウンロード

### ファイルから URL を読み込む

1行に1つの URL を記述したテキストファイル（例：`urls.txt`）を作成します：

```bash
yt-dlp -a urls.txt
```

### 一括ダウンロードのオプション

```bash
# 一括ダウンロードし、出力形式を指定する
yt-dlp -a urls.txt -o "%(playlist_index)s-%(title)s.%(ext)s"

# 一括ダウンロード時に同時接続数を制限する
yt-dlp -a urls.txt --concurrent-fragments 4
```

## プロキシ設定

### HTTP/HTTPS プロキシ

```bash
yt-dlp --proxy "http://127.0.0.1:8080" "URL"
yt-dlp --proxy "https://127.0.0.1:8080" "URL"
```

### SOCKS プロキシ

```bash
yt-dlp --proxy "socks5://127.0.0.1:1080" "URL"
yt-dlp --proxy "socks5://user:password@127.0.0.1:1080" "URL"
```

## 認証

### ユーザー名とパスワード

```bash
yt-dlp -u "username" -p "password" "URL"
```

### クッキーの使用

#### ブラウザからクッキーをインポートする

```bash
# Chrome からインポート
yt-dlp --cookies-from-browser chrome "URL"

# Firefox からインポート
yt-dlp --cookies-from-browser firefox "URL"

# Safari からインポート
yt-dlp --cookies-from-browser safari "URL"
```

#### クッキーファイルを使用する

```bash
yt-dlp --cookies cookies.txt "URL"
```

## サイト固有のダウンロード

### YouTube

```bash
# YouTube ビデオをダウンロード
yt-dlp "https://www.youtube.com/watch?v=VIDEO_ID"

# YouTube プレイリストをダウンロード
yt-dlp "https://www.youtube.com/playlist?list=PLAYLIST_ID"

# YouTube チャンネルのすべてのビデオをダウンロード
yt-dlp "https://www.youtube.com/@ChannelName/videos"

# YouTube ライブをダウンロード
yt-dlp --live-from-start "https://www.youtube.com/watch?v=LIVE_ID"
```

### Bilibili

```bash
# Bilibili ビデオをダウンロード
yt-dlp "https://www.bilibili.com/video/BV_ID"

# Bilibili アニメ/番組をダウンロード
yt-dlp "https://www.bilibili.com/bangumi/play/EP_ID"

# Bilibili ユーザーのすべてのビデオをダウンロード
yt-dlp "https://space.bilibili.com/USER_ID"
```

### Twitter/X

```bash
# Twitter ビデオをダウンロード
yt-dlp "https://twitter.com/user/status/TWEET_ID"

# X ビデオをダウンロード
yt-dlp "https://x.com/user/status/TWEET_ID"
```

### Instagram

```bash
# Instagram ビデオをダウンロード
yt-dlp "https://www.instagram.com/p/POST_ID"

# Instagram リールをダウンロード
yt-dlp "https://www.instagram.com/reel/REEL_ID"
```

### TikTok

```bash
# TikTok ビデオをダウンロード
yt-dlp "https://www.tiktok.com/@user/video/VIDEO_ID"
```

## シミュレーションとテスト

### ダウンロードのシミュレーション（実際にはダウンロードしない）

```bash
yt-dlp --simulate "URL"
```

### ビデオ情報の表示

```bash
# JSON 形式で情報を表示
yt-dlp --dump-json "URL"

# 概要情報を表示
yt-dlp --get-title "URL"
yt-dlp --get-id "URL"
yt-dlp --get-description "URL"
yt-dlp --get-duration "URL"
```

### ダウンロードせずにフォーマットを表示

```bash
yt-dlp -F "URL"
```

## 静音と詳細出力

### 静音モード

```bash
# 出力を表示しない
yt-dlp -q "URL"

# エラーのみ表示する
yt-dlp --no-warnings "URL"
```

### 詳細モード

```bash
# 詳細な出力を表示する
yt-dlp -v "URL"

# デバッグ情報を表示する
yt-dlp --verbose "URL"
```

## 実用的なヒント

### 1. 複数のオプションを組み合わせる

```bash
# 最高画質でダウンロードし、指定したパスに保存し、字幕とサムネイルを埋め込む
yt-dlp -f "bestvideo+bestaudio/best" \
  -o "~/Videos/%(title)s.%(ext)s" \
  --write-subs --sub-langs "ja" \
  --embed-subs \
  --write-thumbnail \
  --embed-thumbnail \
  "URL"
```

### 2. 設定ファイルを使用してコマンドを簡略化する

よく使うオプションを設定ファイルに記述しておき：

```bash
# 設定ファイルを指定して実行
yt-dlp --config-location /path/to/config "URL"

# 設定ファイルを無視して実行
yt-dlp --ignore-config "URL"
```

### 3. ダウンロード速度の最適化

```bash
# マルチスレッドダウンロードを使用
yt-dlp --concurrent-fragments 4 \
  --buffersize 16K \
  "URL"
```

## 次のステップ

- [パラメータの詳細](/ja/params/) ですべての利用可能なパラメータを確認する
- [対応サイト](/ja/sites/) でサポートされているウェブサイトのリストを確認する
- [実践ケース](/ja/practice/) で実際の応用シナリオを確認する
