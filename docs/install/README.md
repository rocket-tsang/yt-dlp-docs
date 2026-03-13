---
title: yt-dlp 安装指南 - Windows/Linux/macOS 安装教程
description: 详细的 yt-dlp 安装教程，涵盖 Windows、Linux、macOS 多种安装方法，包括 winget、Homebrew、pip 等安装方式，附常见问题解决方案。
meta:
  - name: keywords
    content: yt-dlp安装,yt-dlp下载,Windows安装yt-dlp,macOS安装yt-dlp,Linux安装yt-dlp,yt-dlp安装教程
---

# 安装指南

本章节将介绍如何在 Windows、Linux 和 macOS 上安装 yt-dlp。

## 系统要求

- **Python**: 3.7 或更高版本（某些安装方法需要）
- **FFmpeg**: 用于视频/音频合并和格式转换（可选但推荐）
- **网络**: 稳定的互联网连接

## Windows 安装

### 方法一：使用 winget（推荐）

Windows 11 和 Windows 10（1809及以后）自带 winget 包管理器。

```powershell
winget install yt-dlp
```

### 方法二：使用 Chocolatey

如果你已安装 Chocolatey：

```powershell
choco install yt-dlp
```

### 方法三：使用 Scoop

如果你使用 Scoop：

```powershell
scoop install yt-dlp
```

### 方法四：下载可执行文件

1. 访问 [yt-dlp releases 页面](https://github.com/yt-dlp/yt-dlp/releases)
2. 下载最新的 `yt-dlp.exe`
3. 将文件放到任意目录（建议添加到 PATH）

### 方法五：使用 pip

```powershell
pip install yt-dlp
```

### 安装 FFmpeg（可选但推荐）

```powershell
# 使用 winget
winget install ffmpeg

# 或使用 Chocolatey
choco install ffmpeg

# 或使用 Scoop
scoop install ffmpeg
```

## Linux 安装

### 方法一：使用 pip（推荐）

```bash
pip install yt-dlp
```

或使用 pip3：

```bash
pip3 install yt-dlp
```

### 方法二：使用包管理器

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

### 方法三：下载二进制文件

```bash
sudo curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp
sudo chmod a+rx /usr/local/bin/yt-dlp
```

### 安装 FFmpeg（可选但推荐）

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

## macOS 安装

### 方法一：使用 Homebrew（推荐）

```bash
brew install yt-dlp
```

### 方法二：使用 MacPorts

```bash
sudo port install yt-dlp
```

### 方法三：使用 pip

```bash
pip3 install yt-dlp
```

### 方法四：下载二进制文件

```bash
sudo curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_macos -o /usr/local/bin/yt-dlp
sudo chmod a+rx /usr/local/bin/yt-dlp
```

### 安装 FFmpeg（可选但推荐）

```bash
brew install ffmpeg
```

## 验证安装

安装完成后，打开终端或命令提示符，运行：

```bash
yt-dlp --version
```

如果看到版本号，说明安装成功。

## 更新 yt-dlp

yt-dlp 更新频繁，建议定期更新以获得最新功能和修复。

### 使用内置更新功能

```bash
yt-dlp -U
```

### 使用包管理器更新

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

## 安装依赖

### FFmpeg

FFmpeg 用于视频和音频流的合并、格式转换等操作。虽然 yt-dlp 可以在没有 FFmpeg 的情况下工作，但某些功能需要 FFmpeg 支持。

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

### 其他可选依赖

#### rtmpdump

用于下载 RTMP 流：

```bash
# Linux (Ubuntu/Debian)
sudo apt install rtmpdump

# macOS
brew install rtmpdump
```

#### phantomjs

某些网站可能需要：

```bash
# Linux (Ubuntu/Debian)
sudo apt install phantomjs

# macOS
brew install phantomjs
```

## 配置文件

yt-dlp 支持配置文件来存储常用的参数设置。

### 配置文件位置

#### Windows
- `%APPDATA%\yt-dlp\config`
- `%APPDATA%\yt-dlp\config.txt`
- `C:\Users\<用户名>\yt-dlp.conf`

#### Linux/macOS
- `/etc/yt-dlp/config`
- `/etc/yt-dlp.conf`
- `~/.config/yt-dlp/config`
- `~/.config/yt-dlp.conf`
- `~/.yt-dlp/config`
- `~/.yt-dlp.conf`

### 配置文件示例

创建配置文件并添加常用参数：

```bash
# 默认下载路径
-o ~/Downloads/%(title)s.%(ext)s

# 下载最佳质量
-f bestvideo+bestaudio/best

# 嵌入缩略图
--embed-thumbnail

# 嵌入字幕
--embed-subs

# 下载字幕
--write-subs

# 代理设置
# --proxy socks5://127.0.0.1:1080

# 限速（例如：1MB/s）
# --limit-rate 1M
```

## 故障排除

### 权限错误（Linux/macOS）

如果遇到权限错误，尝试：

```bash
sudo chmod a+rx /usr/local/bin/yt-dlp
```

### Python 版本问题

确保安装了 Python 3.7 或更高版本：

```bash
python3 --version
```

### 网络问题

如果无法下载，可能需要配置代理：

```bash
yt-dlp --proxy socks5://127.0.0.1:1080 <URL>
```

### Windows 找不到命令

如果将 yt-dlp.exe 放在非 PATH 目录，需要：

1. 将目录添加到 PATH
2. 或使用完整路径运行

### macOS 安全限制

如果遇到"无法验证开发者"的错误：

```bash
xattr -d com.apple.quarantine /usr/local/bin/yt-dlp
```

## 下一步

安装完成后，你可以：

- 查看[命令行使用](/usage/)学习基本操作
- 查看[参数详解](/params/)了解各种参数配置
- 查看[技术实战](/practice/)学习实际应用场景