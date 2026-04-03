---
title: yt-dlp パラメータの詳細 - 完全なコマンドライン引数の解説
description: yt-dlp のコマンドラインパラメータの完全な解説。ビデオの選択、ダウンロード制御、ネットワーク設定、認証など、すべてのパラメータの詳しい使い方と例を提供します。
meta:
  - name: keywords
    content: yt-dlpパラメータ,yt-dlpオプション,yt-dlpコマンドラインパラメータ,yt-dlp設定,ビデオダウンロードパラメータ
---

# パラメータの詳細

この章では、yt-dlp のさまざまなコマンドラインパラメータとその使い方を詳しく紹介します。

## 全般オプション

### -h, --help

ヘルプ情報を表示して終了します。

```bash
yt-dlp --help
```

### --version

バージョン番号を表示して終了します。

```bash
yt-dlp --version
```

### -U, --update

yt-dlp を最新バージョンに更新します。

```bash
yt-dlp -U
```

### --no-update

更新をチェックしません（特定のインストール方法で必要です）。

```bash
yt-dlp --no-update "URL"
```

## ネットワークオプション

### --proxy URL

指定したプロキシサーバーを使用します。

```bash
# HTTP プロキシ
yt-dlp --proxy "http://127.0.0.1:8080" "URL"

# HTTPS プロキシ
yt-dlp --proxy "https://127.0.0.1:8080" "URL"

# SOCKS5 プロキシ
yt-dlp --proxy "socks5://127.0.0.1:1080" "URL"

# 認証付きプロキシ
yt-dlp --proxy "socks5://user:password@127.0.0.1:1080" "URL"
```

### --socket-timeout SECONDS

ソケットのタイムアウト時間を秒単位で設定します。

```bash
yt-dlp --socket-timeout 30 "URL"
```

### --source-address IP

クライアントの IP アドレスを設定します。

```bash
yt-dlp --source-address 192.168.1.100 "URL"
```

### --force-ipv4

IPv4 を強制的に使用します。

```bash
yt-dlp --force-ipv4 "URL"
```

### --force-ipv6

IPv6 を強制的に使用します。

```bash
yt-dlp --force-ipv6 "URL"
```

## ビデオ選択オプション

### --playlist-start NUMBER

プレイリストの開始位置を指定します（デフォルトは 1）。

```bash
# 5番目のビデオからダウンロードを開始
yt-dlp --playlist-start 5 "PLAYLIST_URL"
```

### --playlist-end NUMBER

プレイリストの終了位置を指定します（デフォルトは最後）。

```bash
# 10番目のビデオまでダウンロード
yt-dlp --playlist-end 10 "PLAYLIST_URL"
```

### --playlist-items ITEM_SPEC

ダウンロードするプレイリスト内のアイテムを指定します。

```bash
# 1, 3, 5番目のビデオをダウンロード
yt-dlp --playlist-items 1,3,5 "PLAYLIST_URL"

# 1番目から5番目までのビデオをダウンロード
yt-dlp --playlist-items 1-5 "PLAYLIST_URL"

# 1番目から3番目までと7番目のビデオをダウンロード
yt-dlp --playlist-items 1-3,7 "PLAYLIST_URL"
```

### --match-title REGEX

タイトルが正規表現に一致するビデオをダウンロードします。

```bash
# タイトルに "tutorial" を含むビデオをダウンロード
yt-dlp --match-title "tutorial" "PLAYLIST_URL"

# 正規表現を使用
yt-dlp --match-title "(?i)python|java" "PLAYLIST_URL"
```

### --reject-title REGEX

タイトルが正規表現に一致するビデオをスキップします。

```bash
# タイトルに "trailer" を含むビデオをスキップ
yt-dlp --reject-title "trailer" "PLAYLIST_URL"
```

### --max-downloads NUMBER

指定した数のビデオをダウンロードした後に停止します。

```bash
# 最初の 5 つのビデオのみダウンロード
yt-dlp --max-downloads 5 "PLAYLIST_URL"
```

### --min-filesize SIZE

指定したサイズより小さいファイルをダウンロードしません。

```bash
# 10MB より小さいファイルをダウンロードしない
yt-dlp --min-filesize 10M "URL"
```

### --max-filesize SIZE

指定したサイズより大きいファイルをダウンロードしません。

```bash
# 1GB より大きいファイルをダウンロードしない
yt-dlp --max-filesize 1G "URL"
```

### --date DATE

特定の日にアップロードされたビデオをダウンロードします。

```bash
# 2024年1月1日のビデオをダウンロード
yt-dlp --date 20240101 "URL"

# 2024年1月のビデオをダウンロード
yt-dlp --date 20240101-20240131 "URL"
```

### --datebefore DATE

指定した日付より前にアップロードされたビデオをダウンロードします。

```bash
# 2024年1月1日より前のビデオをダウンロード
yt-dlp --datebefore 20240101 "URL"
```

### --dateafter DATE

指定した日付より後にアップロードされたビデオをダウンロードします。

```bash
# 2024年1月1日より後のビデオをダウンロード
yt-dlp --dateafter 20240101 "URL"
```

## ダウンロードオプション

### -r, --limit-rate RATE

ダウンロード速度を制限します。

```bash
# 1MB/s に制限
yt-dlp --limit-rate 1M "URL"

# 500KB/s に制限
yt-dlp --limit-rate 500K "URL"

# 2.5MB/s に制限
yt-dlp --limit-rate 2.5M "URL"
```

### -R, --retries RETRIES

リトライ回数（デフォルトは 10）。

```bash
# 5 回リトライする
yt-dlp --retries 5 "URL"

# 無制限にリトライする
yt-dlp --retries infinite "URL"
```

### --fragment-retries RETRIES

フラグメントのリトライ回数。

```bash
yt-dlp --fragment-retries 10 "URL"
```

### --skip-unavailable-fragments

利用できないフラグメントをスキップします。

```bash
yt-dlp --skip-unavailable-fragments "URL"
```

### --abort-on-unavailable-fragment

利用できないフラグメントに遭遇したときにダウンロードを中止します。

```bash
yt-dlp --abort-on-unavailable-fragment "URL"
```

### --keep-fragments

ダウンロード完了後にフラグメントを保持します。

```bash
yt-dlp --keep-fragments "URL"
```

### --buffer-size SIZE

バッファサイズを設定します（デフォルトは 1024）。

```bash
yt-dlp --buffer-size 16K "URL"
```

### --no-resize-buffer

バッファサイズを自動的に調整しません。

```bash
yt-dlp --no-resize-buffer "URL"
```

### --http-chunk-size SIZE

HTTP チャンクサイズを設定します。

```bash
yt-dlp --http-chunk-size 1M "URL"
```

### --continue

中断されたダウンロードを再開します（デフォルトでオン）。

```bash
yt-dlp --continue "URL"
```

### --no-continue

中断されたダウンロードを再開しません。

```bash
yt-dlp --no-continue "URL"
```

## ファイルシステムオプション

### -a, --batch-file FILE

ダウンロードする URL をファイルから読み込みます。

```bash
# urls.txt から URL を読み込む
yt-dlp -a urls.txt

# 一括ダウンロード
yt-dlp --batch-file urls.txt
```

### --id

ビデオ ID のみをファイル名として使用します。

```bash
yt-dlp --id "URL"
```

### -o, --output TEMPLATE

出力ファイル名のテンプレート。

```bash
# 基本的な使い方
yt-dlp -o "%(title)s.%(ext)s" "URL"

# パスを含む
yt-dlp -o "~/Downloads/%(title)s.%(ext)s" "URL"

# 複雑な命名
yt-dlp -o "%(uploader)s/%(upload_date)s - %(title)s.%(ext)s" "URL"

# プレイリストのインデックス
yt-dlp -o "%(playlist_index)03d - %(title)s.%(ext)s" "PLAYLIST_URL"
```

### --output-na-placeholder PLACEHOLDER

フィールドが利用できない場合のプレースホルダーを指定します。

```bash
yt-dlp -o "%(title)s.%(ext)s" --output-na-placeholder "Unknown" "URL"
```

### --autonumber-size NUMBER

自動採番の桁数を指定します。

```bash
yt-dlp -o "%(autonumber)03d-%(title)s.%(ext)s" --autonumber-size 3 "URL"
```

### --autonumber-start NUMBER

自動採番の開始値を指定します。

```bash
yt-dlp -o "%(autonumber)d-%(title)s.%(ext)s" --autonumber-start 100 "URL"
```

### --restrict-filenames

ファイル名を ASCII 文字のみに制限します。

```bash
yt-dlp --restrict-filenames "URL"
```

### --no-restrict-filenames

ファイル名に Unicode 文字を許可します（デフォルト）。

```bash
yt-dlp --no-restrict-filenames "URL"
```

### --windows-filenames

Windows 互換のファイル名を強制します。

```bash
yt-dlp --windows-filenames "URL"
```

### --trim-filenames LENGTH

ファイル名の長さを制限します。

```bash
# ファイル名を最大 100 文字に制限
yt-dlp --trim-filenames 100 "URL"
```

### -w, --overwrite

既存のファイルを上書きします。

```bash
yt-dlp --overwrite "URL"
```

### --no-overwrites

既存のファイルを上書きしません。

```bash
yt-dlp --no-overwrites "URL"
```

### --skip-download

ビデオをダウンロードせず、他の操作（字幕やサムネイルのダウンロードなど）のみを実行します。

```bash
yt-dlp --skip-download --write-subs "URL"
```

## フォーマット選択オプション

### -f, --format FORMAT

ビデオ/オーディオフォーマットを選択します。

```bash
# 最高品質をダウンロード
yt-dlp -f "bestvideo+bestaudio/best" "URL"

# 最高の MP4 フォーマットをダウンロード
yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]" "URL"

# 1080p 以下をダウンロード
yt-dlp -f "bestvideo[height<=1080]+bestaudio/best[height<=1080]" "URL"

# 特定の解像度をダウンロード
yt-dlp -f "bestvideo[height=720]+bestaudio/best[height=720]" "URL"

# 最小ファイルをダウンロード
yt-dlp -f "worst" "URL"
```

### -S, --format-sort SORTORDER

指定した順序でフォーマットをソートします。

```bash
# 解像度、次に fps を優先
yt-dlp -S "res,fps" "URL"

# MP4 フォーマットを優先
yt-dlp -S "ext" "URL"

# より高い解像度を優先
yt-dlp -S "res:1080" "URL"
```

### --format-sort-force

より高品質な組み合わせがある場合でも、フォーマットのソートを強制します。

```bash
yt-dlp --format-sort-force -S "res" "URL"
```

### -F, --list-formats

利用可能なすべてのフォーマットを一覧表示します。

```bash
yt-dlp -F "URL"
```

### --merge-output-format FORMAT

マージ後の出力フォーマットを指定します。

```bash
# MP4 にマージ
yt-dlp --merge-output-format mp4 "URL"

# MKV にマージ
yt-dlp --merge-output-format mkv "URL"
```

## 字幕オプション

### --write-subs

字幕をダウンロードします。

```bash
yt-dlp --write-subs "URL"
```

### --write-auto-subs

自動生成された字幕をダウンロードします。

```bash
yt-dlp --write-auto-subs "URL"
```

### --all-subs

利用可能なすべての字幕をダウンロードします。

```bash
yt-dlp --all-subs "URL"
```

### --sub-langs LANGS

ダウンロードする字幕の言語を指定します。

```bash
# 日本語字幕をダウンロード
yt-dlp --write-subs --sub-langs "ja" "URL"

# 英語字幕をダウンロード
yt-dlp --write-subs --sub-langs "en" "URL"

# 複数の言語をダウンロード
yt-dlp --write-subs --sub-langs "en,ja" "URL"

# すべての字幕をダウンロード
yt-dlp --write-subs --sub-langs "all" "URL"

# 自動生成を含むすべての字幕をダウンロード
yt-dlp --write-subs --sub-langs "all,-live_chat" "URL"
```

### --sub-format FORMAT

字幕フォーマットの優先順位。

```bash
# SRT フォーマットを優先
yt-dlp --sub-format srt --write-subs "URL"

# ASS フォーマットを優先
yt-dlp --sub-format ass --write-subs "URL"
```

### --embed-subs

字幕をビデオファイルに埋め込みます。

```bash
yt-dlp --embed-subs --sub-langs "ja" "URL"
```

## オーディオオプション

### -x, --extract-audio

ビデオをオーディオファイルに変換します。

```bash
yt-dlp -x "URL"
```

### --audio-format FORMAT

オーディオフォーマットを指定します。

```bash
# MP3 に変換
yt-dlp -x --audio-format mp3 "URL"

# AAC に変換
yt-dlp -x --audio-format aac "URL"

# FLAC に変換
yt-dlp -x --audio-format flac "URL"

# M4A に変換
yt-dlp -x --audio-format m4a "URL"

# OPUS に変換
yt-dlp -x --audio-format opus "URL"

# VORBIS に変換
yt-dlp -x --audio-format vorbis "URL"

# WAV に変換
yt-dlp -x --audio-format wav "URL"
```

### --audio-quality QUALITY

オーディオ品質を指定します。

```bash
# 最高品質
yt-dlp -x --audio-format mp3 --audio-quality 0 "URL"

# 標準品質
yt-dlp -x --audio-format mp3 --audio-quality 5 "URL"

# 最小サイズ
yt-dlp -x --audio-format mp3 --audio-quality 9 "URL"

# ビットレートを指定
yt-dlp -x --audio-format mp3 --audio-quality 320K "URL"
```

## ビデオオプション

### --recode-video FORMAT

ビデオを指定したフォーマットに再エンコードします。

```bash
# MP4 に変換
yt-dlp --recode-video mp4 "URL"

# MKV に変換
yt-dlp --recode-video mkv "URL"

# AVI に変換
yt-dlp --recode-video avi "URL"
```

### --postprocessor-args ARGS

ポストプロセッサに引数を渡します。

```bash
# FFmpeg に引数を渡す
yt-dlp --postprocessor-args "ffmpeg:-crf 23" "URL"
```

### -k, --keep-video

中間ビデオファイルを保持します。

```bash
yt-dlp --keep-video "URL"
```

## サムネイルオプション

### --write-thumbnail

サムネイルをダウンロードします。

```bash
yt-dlp --write-thumbnail "URL"
```

### --write-all-thumbnails

すべての形式のサムネイルをダウンロードします。

```bash
yt-dlp --write-all-thumbnails "URL"
```

### --list-thumbnails

利用可能なすべてのサムネイルを一覧表示します。

```bash
yt-dlp --list-thumbnails "URL"
```

### --embed-thumbnail

オーディオファイルにサムネイルを埋め込みます。

```bash
yt-dlp -x --audio-format mp3 --embed-thumbnail "URL"
```

## メタデータオプション

### --write-description

ビデオの説明をダウンロードします。

```bash
yt-dlp --write-description "URL"
```

### --write-info-json

ビデオのメタデータを JSON 形式でダウンロードします。

```bash
yt-dlp --write-info-json "URL"
```

### --write-annotations

ビデオのアノテーションをダウンロードします。

```bash
yt-dlp --write-annotations "URL"
```

### --embed-metadata

ビデオファイルにメタデータを埋め込みます。

```bash
yt-dlp --embed-metadata "URL"
```

### --add-metadata

ビデオファイルにメタデータを追加します。

```bash
yt-dlp --add-metadata "URL"
```

## 認証オプション

### -u, --username USERNAME

認証用のユーザー名。

```bash
yt-dlp -u "username" -p "password" "URL"
```

### -p, --password PASSWORD

認証用のパスワード。

```bash
yt-dlp -u "username" -p "password" "URL"
```

### --two-factor TWO_FACTOR

2段階認証コード。

```bash
yt-dlp -u "username" -p "password" --two-factor "123456" "URL"
```

### --video-password PASSWORD

ビデオのパスワード（パスワード保護されたビデオ用）。

```bash
yt-dlp --video-password "mypassword" "URL"
```

### --cookies FILE

クッキーファイルを使用して認証します。

```bash
yt-dlp --cookies cookies.txt "URL"
```

### --cookies-from-browser BROWSER

ブラウザからクッキーをインポートします。

```bash
# Chrome からインポート
yt-dlp --cookies-from-browser chrome "URL"

# Firefox からインポート
yt-dlp --cookies-from-browser firefox "URL"

# Edge からインポート
yt-dlp --cookies-from-browser edge "URL"

# Safari からインポート
yt-dlp --cookies-from-browser safari "URL"

# Opera からインポート
yt-dlp --cookies-from-browser opera "URL"

# Brave からインポート
yt-dlp --cookies-from-browser brave "URL"

# プロファイルを指定
yt-dlp --cookies-from-browser "chrome:profile_name" "URL"
```

## プロキシオプション

### --geo-verification-proxy URL

このプロキシを使用して地理制限を検証します。

```bash
yt-dlp --geo-verification-proxy "http://proxy.example.com:8080" "URL"
```

### --geo-bypass

地理制限をバイパスします。

```bash
yt-dlp --geo-bypass "URL"
```

### --no-geo-bypass

地理制限をバイパスしません。

```bash
yt-dlp --no-geo-bypass "URL"
```

### --geo-bypass-country CODE

指定した国を使用して地理制限をバイパスします。

```bash
# 米国 IP を使用
yt-dlp --geo-bypass-country US "URL"

# 英国 IP を使用
yt-dlp --geo-bypass-country GB "URL"

# 日本 IP を使用
yt-dlp --geo-bypass-country JP "URL"
```

## 出力オプション

### -q, --quiet

静音モード。

```bash
yt-dlp -q "URL"
```

### --no-warnings

警告を無視します。

```bash
yt-dlp --no-warnings "URL"
```

### -s, --simulate

シミュレーションモード。実際にはファイルをダウンロードしません。

```bash
yt-dlp --simulate "URL"
```

### --ignore-errors

ダウンロードエラーを無視します。

```bash
yt-dlp --ignore-errors "URL"
```

### --no-ignore-errors

ダウンロードエラーを無視しません（デフォルト）。

```bash
yt-dlp --no-ignore-errors "URL"
```

### --dump-json

ビデオ情報を JSON 形式で出力します。

```bash
yt-dlp --dump-json "URL"
```

### --print TEMPLATE

ダウンロードせずにビデオ情報を表示します。

```bash
# タイトルを表示
yt-dlp --print "%(title)s" "URL"

# ID とタイトルを表示
yt-dlp --print "%(id)s: %(title)s" "URL"

# 複数の情報を表示
yt-dlp --print "%(id)s\n%(title)s\n%(duration)s" "URL"
```

### -j, --dump-single-json

単一のビデオ情報を JSON 形式で出力します（ダウンロードしません）。

```bash
yt-dlp -j "URL"
```

### --get-title

ビデオタイトルを表示します。

```bash
yt-dlp --get-title "URL"
```

### --get-id

ビデオ ID を表示します。

```bash
yt-dlp --get-id "URL"
```

### --get-url

ビデオ URL を表示します。

```bash
yt-dlp --get-url "URL"
```

### --get-description

ビデオの説明を表示します。

```bash
yt-dlp --get-description "URL"
```

### --get-filename

ファイル名を表示します。

```bash
yt-dlp --get-filename "URL"
```

### --get-duration

ビデオの長さを表示します。

```bash
yt-dlp --get-duration "URL"
```

## その他オプション

### --exec CMD

ダウンロード完了後にコマンドを実行します。

```bash
# ダウンロード後にビデオを再生
yt-dlp --exec "vlc {}" "URL"

# ダウンロード後にファイルを移動
yt-dlp --exec "mv {} ~/Videos/" "URL"
```

### --convert-subs FORMAT

字幕フォーマットを変換します。

```bash
# SRT に変換
yt-dlp --write-subs --convert-subs srt "URL"

# ASS に変換
yt-dlp --write-subs --convert-subs ass "URL"
```

### --concat-playlist

プレイリスト内のビデオを1つのファイルにマージします。

```bash
yt-dlp --concat-playlist "PLAYLIST_URL"
```

### --config-locations PATH

設定ファイルのパスを指定します。

```bash
yt-dlp --config-locations ~/.config/yt-dlp/custom_config "URL"
```

### --ignore-config

設定ファイルを無視します。

```bash
yt-dlp --ignore-config "URL"
```

## まとめ

以上が yt-dlp の主なパラメータの紹介です。実際の使用時には、必要に応じて複数のパラメータを組み合わせることができます。推奨事項：

1. よく使うパラメータは設定ファイルに保存する。
2. `--simulate` パラメータでまずテストする。
3. 公式ドキュメントでさらに多くのパラメータと使い方を確認する。
4. 定期的に yt-dlp を更新して最新機能を利用する。

さらなるパラメータと詳細については、以下を参照してください：

- [yt-dlp 公式ドキュメント](https://github.com/yt-dlp/yt-dlp#usage-and-options)
- [サポートされているサイト一覧](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md)
