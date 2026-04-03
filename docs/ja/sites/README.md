---
title: yt-dlp 対応サイト一覧 - YouTube/Bilibili/Twitter など 1000 以上のサイト
description: yt-dlp は YouTube、Bilibili、Twitter、Instagram など 1000 以上のビデオサイトをサポートしています。各サイトで利用可能な機能や使用上の注意点を詳しく紹介します。
meta:
  - name: keywords
    content: yt-dlp対応サイト,YouTubeダウンロード,Bilibiliダウンロード,Twitterダウンロード,Instagramダウンロード,ビデオサイト一覧
---

# 対応サイト一覧

yt-dlp は 1000 以上のビデオサイトをサポートしています。この章では、よく利用される主要な対応サイトとその使用上の注意点について紹介します。

## 主要なビデオサイト

### YouTube

YouTube は、yt-dlp が最も完璧にサポートしているサイトの一つです。

#### サポートされている機能
- ✅ ビデオダウンロード（すべての解像度）
- ✅ プレイリストのダウンロード
- ✅ チャンネルのダウンロード
- ✅ ライブ配信のダウンロード
- ✅ 字幕のダウンロード（自動生成字幕を含む）
- ✅ サムネイルのダウンロード
- ✅ コメント欄のダウンロード
- ✅ メンバー限定ビデオ（ログインが必要）

#### 使用例

```bash
# 単一のビデオをダウンロード
yt-dlp "https://www.youtube.com/watch?v=VIDEO_ID"

# 最高画質でダウンロード
yt-dlp -f "bestvideo+bestaudio/best" "https://www.youtube.com/watch?v=VIDEO_ID"

# プレイリストをダウンロード
yt-dlp "https://www.youtube.com/playlist?list=PLAYLIST_ID"

# チャンネルのすべてのビデオをダウンロード
yt-dlp "https://www.youtube.com/@ChannelName/videos"

# ライブ配信をダウンロード
yt-dlp --live-from-start "https://www.youtube.com/watch?v=LIVE_ID"

# 字幕をダウンロード
yt-dlp --write-subs --sub-langs "ja,en" "https://www.youtube.com/watch?v=VIDEO_ID"
```

### Bilibili（ビリビリ動画）

中国で最も人気のあるビデオサイトの一つです。

#### サポートされている機能
- ✅ ビデオダウンロード
- ✅ アニメ/番組のダウンロード
- ✅ プレイリストのダウンロード
- ✅ 投稿者（UP主）のビデオダウンロード
- ✅ 字幕のダウンロード
- ✅ 弾幕のダウンロード（一部サポート）

#### 使用例

```bash
# 通常のビデオをダウンロード
yt-dlp "https://www.bilibili.com/video/BV_ID"

# アニメ/番組をダウンロード
yt-dlp "https://www.bilibili.com/bangumi/play/EP_ID"

# 投稿者のすべてのビデオをダウンロード
yt-dlp "https://space.bilibili.com/USER_ID"

# お気に入りリストをダウンロード
yt-dlp "https://space.bilibili.com/USER_ID/favlist?fid=FAV_ID"

# 画質を指定してダウンロード
yt-dlp -f "bestvideo[height<=1080]+bestaudio" "https://www.bilibili.com/video/BV_ID"
```

### Twitter/X

#### サポートされている機能
- ✅ ビデオダウンロード
- ✅ GIF ダウンロード
- ✅ 画像ダウンロード
- ✅ ツイートスレッドのダウンロード

#### 使用例

```bash
# Twitter ビデオをダウンロード
yt-dlp "https://twitter.com/user/status/TWEET_ID"

# X ビデオをダウンロード
yt-dlp "https://x.com/user/status/TWEET_ID"

# ツイート内のすべてのメディアをダウンロード
yt-dlp "https://twitter.com/user/status/TWEET_ID"
```

### Instagram

#### サポートされている機能
- ✅ ビデオダウンロード
- ✅ 画像ダウンロード
- ✅ リール（Reels）のダウンロード
- ✅ ストーリーズ（Stories）のダウンロード（ログインが必要）
- ✅ IGTV のダウンロード

#### 使用例

```bash
# Instagram ビデオをダウンロード
yt-dlp "https://www.instagram.com/p/POST_ID"

# リールをダウンロード
yt-dlp "https://www.instagram.com/reel/REEL_ID"

# ストーリーズをダウンロード（ログインが必要）
yt-dlp -u "username" -p "password" "https://www.instagram.com/stories/username"

# IGTV をダウンロード
yt-dlp "https://www.instagram.com/tv/TV_ID"
```

### TikTok

#### サポートされている機能
- ✅ ビデオダウンロード
- ✅ ウォーターマーク（透かし）なしのダウンロード
- ✅ 画像ダウンロード
- ✅ プレイリストのダウンロード

#### 使用例

```bash
# TikTok ビデオをダウンロード
yt-dlp "https://www.tiktok.com/@user/video/VIDEO_ID"

# ウォーターマークなしでダウンロード
yt-dlp "https://www.tiktok.com/@user/video/VIDEO_ID"

# TikTok プレイリストをダウンロード
yt-dlp "https://www.tiktok.com/@user"
```

## その他の人気サイト

### Vimeo

プロフェッショナルなビデオプラットフォーム。

```bash
# Vimeo ビデオをダウンロード
yt-dlp "https://vimeo.com/VIDEO_ID"

# パスワード保護されたビデオをダウンロード
yt-dlp --video-password "password" "https://vimeo.com/VIDEO_ID"
```

### Facebook

```bash
# Facebook ビデオをダウンロード
yt-dlp "https://www.facebook.com/watch?v=VIDEO_ID"

# リールをダウンロード
yt-dlp "https://www.facebook.com/reel/REEL_ID"
```

### Twitch

ゲーム配信プラットフォーム。

```bash
# Twitch ビデオをダウンロード
yt-dlp "https://www.twitch.tv/videos/VIDEO_ID"

# ライブ配信をダウンロード
yt-dlp "https://www.twitch.tv/CHANNEL_NAME"

# クリップをダウンロード
yt-dlp "https://www.twitch.tv/clip/CLIP_ID"
```

### Dailymotion

```bash
yt-dlp "https://www.dailymotion.com/video/VIDEO_ID"
```

### Reddit

```bash
# Reddit ビデオをダウンロード
yt-dlp "https://www.reddit.com/r/subreddit/comments/POST_ID"
```

### ニコニコ動画

```bash
yt-dlp "https://www.nicovideo.jp/watch/smVIDEO_ID"
```

### AbemaTV

```bash
yt-dlp "https://abema.tv/video/episode/EPISODE_ID"
```

### TVer

```bash
yt-dlp "https://tver.jp/episodes/EPISODE_ID"
```

## 音楽サイト

### SoundCloud

```bash
# オーディオをダウンロード
yt-dlp "https://soundcloud.com/user/track"

# プレイリストをダウンロード
yt-dlp "https://soundcloud.com/user/sets/playlist"
```

### Bandcamp

```bash
yt-dlp "https://artist.bandcamp.com/track/song"
```

## 全対応リストの確認方法

yt-dlp がサポートしているすべてのサイトを確認するには、以下のコマンドを使用します：

```bash
# すべての対応サイトを表示
yt-dlp --list-extractors

# 対応しているエクストラクターの説明を表示
yt-dlp --extractor-descriptions
```

または、以下にアクセスしてください：

- [GitHub 対応サイト一覧（英語）](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md)

## 注意事項

### 1. サイトの仕様変更

ウェブサイトはページ構造や API を更新することがあり、それにより yt-dlp が正常に動作しなくなる場合があります。問題が発生したときは：

1. yt-dlp を最新バージョンに更新してください。
2. GitHub Issues で同様の問題が報告されていないか確認してください。
3. `--verbose` パラメータを使用して詳細なエラー情報を確認してください。

### 2. 地理的制限（リージョンロック）

一部のビデオには地理的な制限がある場合があります。以下の方法で解決できることがあります：

```bash
# プロキシを使用
yt-dlp --proxy "socks5://127.0.0.1:1080" "URL"

# 地理制限のバイパスを試行
yt-dlp --geo-bypass "URL"

# 国を指定
yt-dlp --geo-bypass-country JP "URL"
```

### 3. ログインの必要性

一部のコンテンツはログインしないとアクセスできません：

```bash
# ユーザー名とパスワードを使用
yt-dlp -u "username" -p "password" "URL"

# ブラウザのクッキーを使用
yt-dlp --cookies-from-browser chrome "URL"
```

### 4. 著作権について

著作権法および各サイトの利用規約を遵守してください：

- ダウンロードする権利があるコンテンツのみをダウンロードしてください。
- 商業目的で使用しないでください（許可されている場合を除く）。
- コンテンツ制作者の権利を尊重してください。

## 次のステップ

- [実践ケース](/ja/practice/) で実際の使用例を確認する
- [パラメータの詳細](/ja/params/) でダウンロードを最適化する方法を学ぶ
