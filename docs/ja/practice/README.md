---
title: yt-dlp 実践ケース - 実際の活用シナリオ別チュートリアル
description: yt-dlp の実践的なケーススタディ。プレイリストの一括ダウンロード、ライブ配信の保存、オーディオ抽出など、実際の利用シーンに合わせたコマンドとスクリプトを詳しく解説します。
meta:
  - name: keywords
    content: yt-dlp実践,yt-dlpケース,yt-dlpチュートリアル,一括ダウンロード,プレイリスト保存,オーディオ抽出
---

# 実践ケース

この章では、実際のケースを通じて、yt-dlp のさまざまな活用シーンを紹介します。

## ケース 1：YouTube プレイリストの一括ダウンロード

### シナリオ

100 本のビデオを含む YouTube プレイリストを以下の条件でダウンロードしたい：
- 解像度は 1080p 以下にする。
- 指定したフォルダに保存する。
- ファイル名にインデックス番号とタイトルを含める。
- 字幕（日本語優先）をダウンロードする。
- 字幕をビデオに埋め込む。

### 解決策

```bash
# ダウンロードスクリプト
yt-dlp \
  -o "~/Downloads/YouTube/%(playlist_index)03d-%(title)s.%(ext)s" \
  -f "bestvideo[height<=1080]+bestaudio/best[height<=1080]" \
  --write-subs \
  --sub-langs "ja,en" \
  --embed-subs \
  --merge-output-format mp4 \
  "https://www.youtube.com/playlist?list=PLAYLIST_ID"
```

### パラメータの説明

- `-o`: 出力パスとファイル名の形式を指定します。
- `-f`: 1080p 以下の最高画質を選択します。
- `--write-subs`: 字幕をダウンロードします。
- `--sub-langs`: 字幕の言語を指定します（日本語を優先）。
- `--embed-subs`: 字幕をビデオに埋め込みます。
- `--merge-output-format`: MP4 形式で保存します。

### 応用：設定ファイルの使用

設定ファイル `~/.config/yt-dlp/config` を作成します：

```bash
# デフォルトのダウンロードパス
-o ~/Downloads/YouTube/%(playlist_index)03d-%(title)s.%(ext)s

# ビデオ品質
-f bestvideo[height<=1080]+bestaudio/best[height<=1080]

# 字幕設定
--write-subs
--sub-langs ja,en
--embed-subs

# 出力形式
--merge-output-format mp4

# エラーを無視
--ignore-errors
```

作成後は、URL を指定するだけで実行できます：

```bash
yt-dlp "PLAYLIST_URL"
```

## ケース 2：Bilibili の番組/アニメをダウンロード

### シナリオ

Bilibili の番組の全エピソードを以下の条件でダウンロードしたい：
- 最高画質でダウンロードする。
- ファイル名にエピソード番号を含める。
- すでにダウンロード済みのエピソードはスキップする。

### 解決策

```bash
# 番組をダウンロード
yt-dlp \
  -o "~/Downloads/Anime/%(title)s/第%(episode_number)02d話-%(episode)s.%(ext)s" \
  -f "bestvideo+bestaudio/best" \
  --no-overwrites \
  "https://www.bilibili.com/bangumi/play/EP_ID"
```

### 応用：複数の番組を一括ダウンロード

`anime_urls.txt` を作成します：

```
https://www.bilibili.com/bangumi/play/EP_ID_1
https://www.bilibili.com/bangumi/play/EP_ID_2
https://www.bilibili.com/bangumi/play/EP_ID_3
```

実行コマンド：

```bash
yt-dlp -a anime_urls.txt \
  -o "~/Downloads/Anime/%(title)s/第%(episode_number)02d話.%(ext)s" \
  -f "bestvideo+bestaudio/best" \
  --no-overwrites
```

## ケース 3：YouTube 動画を MP3 に変換して保存

### シナリオ

YouTube のミュージックビデオを高品質な MP3 形式で保存したい：
- オーディオのみを抽出する。
- 320kbps の MP3 に変換する。
- サムネイルを埋め込む。
- メタデータを埋め込む。
- ファイル名にタイトルとアップローダー名を含める。

### 解決策

```bash
# ダウンロードして MP3 に変換
yt-dlp \
  -x \
  --audio-format mp3 \
  --audio-quality 0 \
  --embed-thumbnail \
  --add-metadata \
  -o "~/Music/%(title)s-%(uploader)s.%(ext)s" \
  "YOUTUBE_MUSIC_URL"
```

### プレイリストを一括ダウンロード

```bash
# 音楽プレイリストをダウンロード
yt-dlp \
  -x \
  --audio-format mp3 \
  --audio-quality 0 \
  --embed-thumbnail \
  --add-metadata \
  -o "~/Music/%(playlist_title)s/%(playlist_index)03d-%(title)s.%(ext)s" \
  "YOUTUBE_PLAYLIST_URL"
```

## ケース 4：ログインが必要なサイトからのダウンロード

### シナリオ

Instagram のストーリーズなど、ログインが必要なコンテンツをダウンロードしたい。

### 解決策 1：ブラウザのクッキーを使用する

```bash
# Chrome からクッキーをインポート
yt-dlp --cookies-from-browser chrome "INSTAGRAM_STORIES_URL"

# Firefox からインポート
yt-dlp --cookies-from-browser firefox "INSTAGRAM_STORIES_URL"

# Safari からインポート
yt-dlp --cookies-from-browser safari "INSTAGRAM_STORIES_URL"
```

### 解決策 2：ユーザー名とパスワードを使用する

```bash
# ユーザー名とパスワードを指定
yt-dlp -u "your_username" -p "your_password" "URL"
```

### 解決策 3：クッキーファイルを使用する

1. ブラウザ拡張機能（"Get cookies.txt LOCALLY" など）を使用してクッキーをエクスポートします。
2. `cookies.txt` として保存します。
3. コマンドで指定します：

```bash
yt-dlp --cookies cookies.txt "URL"
```

## ケース 5：ライブ配信のダウンロード

### シナリオ

YouTube や Twitch のライブ配信を保存したい。

### 解決策

### YouTube ライブ

```bash
# 配信中のライブをダウンロード
yt-dlp "https://www.youtube.com/watch?v=LIVE_ID"

# ライブの最初からダウンロード（巻き戻し機能がある場合）
yt-dlp --live-from-start "https://www.youtube.com/watch?v=LIVE_ID"
```

### Twitch ライブ

```bash
# 配信中のライブをダウンロード
yt-dlp "https://www.twitch.tv/CHANNEL_NAME"

# 過去の配信（VOD）をダウンロード
yt-dlp "https://www.twitch.tv/videos/VIDEO_ID"
```

### 応用：録画して MP4 に保存

```bash
# ライブを録画
yt-dlp \
  -o "~/Downloads/Live/%(channel)s_%(timestamp)s.%(ext)s" \
  --hls-prefer-native \
  "https://www.twitch.tv/CHANNEL_NAME"

# MP4 に変換（必要な場合）
ffmpeg -i input.ts -c copy output.mp4
```

## ケース 6：プロキシ経由でのダウンロード

### シナリオ

地理的な制限があるコンテンツをプロキシ経由でダウンロードしたい。

### 解決策

### SOCKS5 プロキシを使用

```bash
yt-dlp --proxy "socks5://127.0.0.1:1080" "URL"

# 認証が必要なプロキシ
yt-dlp --proxy "socks5://username:password@proxy.example.com:1080" "URL"
```

### HTTP プロキシを使用

```bash
yt-dlp --proxy "http://127.0.0.1:8080" "URL"
```

### リージョン制限のバイパス

```bash
# 特定の国を指定してバイパス
yt-dlp --geo-bypass-country US "URL"
yt-dlp --geo-bypass-country JP "URL"
```

## ケース 7：特定のビデオフォーマットを指定して保存

### シナリオ

特定のエンコードや形式のビデオをダウンロードしたい。

### 解決策

### 利用可能なフォーマットを確認

```bash
# すべてのフォーマットを一覧表示
yt-dlp -F "URL"
```

出力例：
```
ID  EXT  RESOLUTION  FPS |   FILESIZE   TBR PROTO | VCODEC        VBR ACODEC      ABR
--- ---- ---------- ----- ------------- ----- ----- ----------- ------ ----------- -----
22  mp4  1280x720    30 | ≈ 150.00MiB  1500k https | avc1.64001F 1500k mp4a.40.2  128k
137 mp4  1920x1080   30 | ≈ 450.00MiB  4500k https | avc1.640028 4500k -           -
140 m4a  audio only      | ≈  12.00MiB   128k https | -              - mp4a.40.2  128k
...
```

### 特定の ID を指定してダウンロード

```bash
# フォーマット ID を使用
yt-dlp -f 22 "URL"

# 1080p ビデオと最高のオーディオを結合
yt-dlp -f "137+140" "URL"

# MP4 形式で最高画質を選択
yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]" "URL"

# VP9 エンコードのビデオをダウンロード
yt-dlp -f "bestvideo[vcodec=vp9]+bestaudio" "URL"
```

## ケース 8：個人用音楽ライブラリの作成

### シナリオ

複数のソースから音楽をダウンロードし、ライブラリとして整理する。

### 解決策

### 設定ファイルの作成

`~/.config/yt-dlp/music_config`:

```bash
# オーディオ設定
-x
--audio-format mp3
--audio-quality 0

# メタデータ
--embed-thumbnail
--add-metadata

# ファイル名の形式
-o ~/Music/%(artist)s/%(album)s/%(track_number)02d-%(title)s.%(ext)s

# エラーを無視
--ignore-errors

# 同時ダウンロード
--concurrent-fragments 4
```

### ダウンロードスクリプト

```bash
#!/bin/bash

# ファイルから URL を読み込んで実行
while IFS= read -r url; do
  echo "処理中: $url"
  yt-dlp --config-location ~/.config/yt-dlp/music_config "$url"
done < music_urls.txt
```

## ケース 9：字幕のダウンロードと翻訳

### シナリオ

ビデオの字幕をダウンロードして翻訳に活用したい。

### 解決策

### 字幕のみをダウンロード

```bash
# ビデオはダウンロードせず、字幕のみ保存
yt-dlp --skip-download --write-subs --sub-langs "ja" "URL"

# すべての字幕をダウンロード
yt-dlp --skip-download --write-subs --sub-langs "all" "URL"

# 自動生成字幕をダウンロード
yt-dlp --skip-download --write-auto-subs "URL"
```

## ケース 10：自動ダウンロードスクリプト

### シナリオ

定期的に特定のチャンネルの最新ビデオを自動でダウンロードする。

### 解決策

```bash
#!/bin/bash

# 設定
CHANNEL_URL="https://www.youtube.com/@ChannelName/videos"
DOWNLOAD_DIR=~/Downloads/AutoDownload
LOG_FILE=~/Downloads/download.log

# ディレクトリ作成
mkdir -p "$DOWNLOAD_DIR"

# ログ記録
echo "$(date): ダウンロード開始" >> "$LOG_FILE"

# 最新 10 本のビデオをチェックしてダウンロード
yt-dlp \
  --playlist-end 10 \
  --no-overwrites \
  --dateafter $(date -d "7 days ago" +%Y%m%d) \
  -o "$DOWNLOAD_DIR/%(upload_date)s-%(title)s.%(ext)s" \
  -f "bestvideo[height<=1080]+bestaudio/best[height<=1080]" \
  --write-subs \
  --sub-langs "ja,en" \
  --embed-subs \
  --ignore-errors \
  "$CHANNEL_URL" >> "$LOG_FILE" 2>&1

echo "$(date): ダウンロード完了" >> "$LOG_FILE"
```

### Cron による自動実行

crontab を編集：

```bash
crontab -e
```

スケジュールを追加（毎日午前 2 時に実行）：

```
0 2 * * * /path/to/download_script.sh
```

## まとめ

これらのケースは、yt-dlp の実際の活用シーンのほんの一部です。パラメータを組み合わせることで、さらに複雑なニーズにも対応可能です。

1. よく使う設定は設定ファイルに保存しましょう。
2. 新しいコマンドを試すときは `--simulate` を活用しましょう。
3. yt-dlp を定期的に更新して最新の仕様に対応しましょう。

より詳細なオプションについては [パラメータの詳細](/ja/params/) を参照してください。
