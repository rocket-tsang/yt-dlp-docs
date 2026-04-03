---
title: yt-dlp インストールガイド - Windows/Linux/macOS インストール手順
description: yt-dlp の詳細なインストール手順。Windows, Linux, macOS での winget, Homebrew, pip などを使用したインストール方法とトラブルシューティングを提供します。
meta:
  - name: keywords
    content: yt-dlpインストール,yt-dlpダウンロード,Windowsインストールyt-dlp,macOSインストールyt-dlp,Linuxインストールyt-dlp,yt-dlpインストールガイド
---

# インストールガイド

この章では、Windows、Linux、および macOS に yt-dlp をインストールする方法を紹介します。

## システム要件

- **Python**: 3.7 以上（一部のインストール方法で必要）
- **FFmpeg**: ビデオ/オーディオの結合およびフォーマット変換用（オプションですが推奨）
- **ネットワーク**: 安定したインターネット接続

## Windows へのインストール

### 方法 1: winget を使用する（推奨）

Windows 11 および Windows 10（1809以降）には winget パッケージマネージャーが標準搭載されています。

```powershell
winget install yt-dlp
```

### 方法 2: Chocolatey を使用する

Chocolatey がインストールされている場合：

```powershell
choco install yt-dlp
```

### 方法 3: Scoop を使用する

Scoop を使用している場合：

```powershell
scoop install yt-dlp
```

### 方法 4: 実行ファイルをダウンロードする

1. [yt-dlp リリースページ](https://github.com/yt-dlp/yt-dlp/releases) にアクセスします。
2. 最新の `yt-dlp.exe` をダウンロードします。
3. 任意のディレクトリにファイルを配置します（PATH に追加することをお勧めします）。

### 方法 5: pip を使用する

```powershell
pip install yt-dlp
```

### FFmpeg のインストール（オプションですが推奨）

```powershell
# winget を使用
winget install ffmpeg

# または Chocolatey を使用
choco install ffmpeg

# または Scoop を使用
scoop install ffmpeg
```

## Linux へのインストール

### 方法 1: pip を使用する（推奨）

```bash
pip install yt-dlp
```

または pip3 を使用します：

```bash
pip3 install yt-dlp
```

### 方法 2: パッケージマネージャーを使用する

#### Ubuntu/Debian

```bash
sudo add-apt-repository ppa:tomtomtom/yt-dlp
sudo apt update
sudo apt install yt-dlp
```

#### Arch Linux

```bash
sudo pacman -S yt-dlp
```

#### Fedora

```bash
sudo dnf install yt-dlp
```

#### openSUSE

```bash
sudo zypper install yt-dlp
```

### 方法 3: バイナリファイルをダウンロードする

```bash
sudo curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp
sudo chmod a+rx /usr/local/bin/yt-dlp
```

### FFmpeg のインストール（オプションですが推奨）

#### Ubuntu/Debian

```bash
sudo apt install ffmpeg
```

#### Arch Linux

```bash
sudo pacman -S ffmpeg
```

#### Fedora

```bash
sudo dnf install ffmpeg
```

## macOS へのインストール

### 方法 1: Homebrew を使用する（推奨）

```bash
brew install yt-dlp
```

### 方法 2: MacPorts を使用する

```bash
sudo port install yt-dlp
```

### 方法 3: pip を使用する

```bash
pip3 install yt-dlp
```

### 方法 4: バイナリファイルをダウンロードする

```bash
sudo curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_macos -o /usr/local/bin/yt-dlp
sudo chmod a+rx /usr/local/bin/yt-dlp
```

### FFmpeg のインストール（オプションですが推奨）

```bash
brew install ffmpeg
```

## インストールの確認

インストールが完了したら、ターミナルまたはコマンドプロンプトを開き、以下を実行します：

```bash
yt-dlp --version
```

バージョン番号が表示されれば、インストールは成功です。

## yt-dlp の更新

yt-dlp は頻繁に更新されます。最新の機能と修正を利用するために、定期的に更新することをお勧めします。

### 内蔵の更新機能を使用する

```bash
yt-dlp -U
```

### パッケージマネージャーで更新する

#### Windows

```powershell
# winget
winget upgrade yt-dlp

# Chocolatey
choco upgrade yt-dlp

# Scoop
scoop update yt-dlp
```

#### Linux

```bash
# pip
pip install -U yt-dlp

# Ubuntu/Debian
sudo apt update && sudo apt upgrade yt-dlp

# Arch Linux
sudo pacman -Syu yt-dlp
```

#### macOS

```bash
# Homebrew
brew upgrade yt-dlp

# pip
pip3 install -U yt-dlp
```

## 依存関係

### FFmpeg

FFmpeg は、ビデオとオーディオストリームの結合、フォーマット変換などに使用されます。yt-dlp は FFmpeg なしでも動作しますが、一部の機能には FFmpeg が必要です。

#### Windows

```powershell
# winget
winget install ffmpeg

# Chocolatey
choco install ffmpeg
```

#### Linux

```bash
# Ubuntu/Debian
sudo apt install ffmpeg

# Arch Linux
sudo pacman -S ffmpeg

# Fedora
sudo dnf install ffmpeg
```

#### macOS

```bash
brew install ffmpeg
```

## 設定ファイル

yt-dlp は、よく使用するパラメータ設定を保存するための設定ファイルをサポートしています。

### 設定ファイルの場所

#### Windows
- `%APPDATA%\yt-dlp\config`
- `%APPDATA%\yt-dlp\config.txt`
- `C:\Users\<ユーザー名>\yt-dlp.conf`

#### Linux/macOS
- `/etc/yt-dlp/config`
- `/etc/yt-dlp.conf`
- `~/.config/yt-dlp/config`
- `~/.config/yt-dlp.conf`
- `~/.yt-dlp/config`
- `~/.yt-dlp.conf`

### 設定ファイルの例

設定ファイルを作成し、共通のパラメータを追加します：

```bash
# デフォルトのダウンロードパス
-o ~/Downloads/%(title)s.%(ext)s

# 最高画質でダウンロード
-f bestvideo+bestaudio/best

# サムネイルを埋め込む
--embed-thumbnail

# 字幕を埋め込む
--embed-subs

# 字幕を書き出す
--write-subs

# プロキシ設定
# --proxy socks5://127.0.0.1:1080

# 速度制限（例：1MB/s）
# --limit-rate 1M
```

## トラブルシューティング

### 権限エラー（Linux/macOS）

権限エラーが発生した場合は、以下を試してください：

```bash
sudo chmod a+rx /usr/local/bin/yt-dlp
```

### Python バージョンの問題

Python 3.7 以上がインストールされていることを確認してください：

```bash
python3 --version
```

### ネットワークの問題

ダウンロードできない場合は、プロキシの設定が必要かもしれません：

```bash
yt-dlp --proxy socks5://127.0.0.1:1080 <URL>
```

### Windows でコマンドが見つからない

`yt-dlp.exe` を PATH 以外のディレクトリに配置した場合は、以下が必要です：

1. ディレクトリを PATH に追加する
2. または、フルパスを使用して実行する

### macOS のセキュリティ制限

「開発元を検証できない」エラーが発生した場合：

```bash
xattr -d com.apple.quarantine /usr/local/bin/yt-dlp
```

## 次のステップ

インストールが完了したら、以下のことができます：

- [使い方](/ja/usage/) で基本操作を学ぶ
- [パラメータの詳細](/ja/params/) でさまざまな設定を理解する
- [実践ケース](/ja/practice/) で実際の応用例を学ぶ
