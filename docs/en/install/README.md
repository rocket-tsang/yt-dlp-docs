---
title: yt-dlp Installation Guide - Windows/Linux/macOS Tutorials
description: Detailed yt-dlp installation tutorials covering various methods for Windows, Linux, and macOS, including winget, Homebrew, pip, etc., with solutions to common issues.
meta:
  - name: keywords
    content: yt-dlp installation, download yt-dlp, install yt-dlp on Windows, install yt-dlp on macOS, install yt-dlp on Linux, yt-dlp installation tutorial
---

# Installation Guide

This chapter will introduce how to install yt-dlp on Windows, Linux, and macOS.

## System Requirements

- **Python**: 3.7 or higher (required for some installation methods)
- **FFmpeg**: Used for video/audio merging and format conversion (optional but recommended)
- **Network**: Stable internet connection

## Windows Installation

### Method 1: Using winget (Recommended)

Windows 11 and Windows 10 (1809 and later) come with the winget package manager.

```powershell
winget install yt-dlp
```

### Method 2: Using Chocolatey

If you have Chocolatey installed:

```powershell
choco install yt-dlp
```

### Method 3: Using Scoop

If you use Scoop:

```powershell
scoop install yt-dlp
```

### Method 4: Downloading the Executable

1. Visit the [yt-dlp releases page](https://github.com/yt-dlp/yt-dlp/releases)
2. Download the latest `yt-dlp.exe`
3. Place the file in any directory (it is recommended to add it to your PATH)

### Method 5: Using pip

```powershell
pip install yt-dlp
```

### Installing FFmpeg (Optional but Recommended)

```powershell
# Using winget
winget install ffmpeg

# Or using Chocolatey
choco install ffmpeg

# Or using Scoop
scoop install ffmpeg
```

## Linux Installation

### Method 1: Using pip (Recommended)

```bash
pip install yt-dlp
```

Or using pip3:

```bash
pip3 install yt-dlp
```

### Method 2: Using Package Manager

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

### Method 3: Downloading the Binary

```bash
sudo curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp
sudo chmod a+rx /usr/local/bin/yt-dlp
```

### Installing FFmpeg (Optional but Recommended)

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

## macOS Installation

### Method 1: Using Homebrew (Recommended)

```bash
brew install yt-dlp
```

### Method 2: Using MacPorts

```bash
sudo port install yt-dlp
```

### Method 3: Using pip

```bash
pip3 install yt-dlp
```

### Method 4: Downloading the Binary

```bash
sudo curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_macos -o /usr/local/bin/yt-dlp
sudo chmod a+rx /usr/local/bin/yt-dlp
```

### Installing FFmpeg (Optional but Recommended)

```bash
brew install ffmpeg
```

## Verifying Installation

Once installed, open a terminal or command prompt and run:

```bash
yt-dlp --version
```

If you see a version number, the installation was successful.

## Updating yt-dlp

yt-dlp is updated frequently. It is recommended to update regularly for the latest features and fixes.

### Using Built-in Update Function

```bash
yt-dlp -U
```

### Updating via Package Manager

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

## Dependencies

### FFmpeg

FFmpeg is used for merging video and audio streams, format conversion, and more. While yt-dlp can work without FFmpeg, some features require it.

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

### Other Optional Dependencies

#### rtmpdump

Used for downloading RTMP streams:

```bash
# Linux (Ubuntu/Debian)
sudo apt install rtmpdump

# macOS
brew install rtmpdump
```

#### phantomjs

Required by some sites:

```bash
# Linux (Ubuntu/Debian)
sudo apt install phantomjs

# macOS
brew install phantomjs
```

## Configuration File

yt-dlp supports configuration files to store commonly used parameters.

### Configuration File Locations

#### Windows
- `%APPDATA%\yt-dlp\config`
- `%APPDATA%\yt-dlp\config.txt`
- `C:\Users\<username>\yt-dlp.conf`

#### Linux/macOS
- `/etc/yt-dlp/config`
- `/etc/yt-dlp.conf`
- `~/.config/yt-dlp/config`
- `~/.config/yt-dlp.conf`
- `~/.yt-dlp/config`
- `~/.yt-dlp.conf`

### Example Configuration

Create a configuration file and add common parameters:

```bash
# Default download path
-o ~/Downloads/%(title)s.%(ext)s

# Download best quality
-f bestvideo+bestaudio/best

# Embed thumbnail
--embed-thumbnail

# Embed subtitles
--embed-subs

# Write subtitles
--write-subs

# Proxy settings
# --proxy socks5://127.0.0.1:1080

# Limit rate (e.g., 1MB/s)
# --limit-rate 1M
```

## Troubleshooting

### Permission Errors (Linux/macOS)

If you encounter permission errors, try:

```bash
sudo chmod a+rx /usr/local/bin/yt-dlp
```

### Python Version Issues

Ensure Python 3.7 or higher is installed:

```bash
python3 --version
```

### Network Issues

If you cannot download, you may need to configure a proxy:

```bash
yt-dlp --proxy socks5://127.0.0.1:1080 <URL>
```

### Command Not Found on Windows

If yt-dlp.exe is placed in a non-PATH directory:

1. Add the directory to your PATH
2. Or run it using the full path

### macOS Security Restrictions

If you see "Developer cannot be verified" error:

```bash
xattr -d com.apple.quarantine /usr/local/bin/yt-dlp
```

## Next Steps

Once installed, you can:

- Check [Command-line Usage](/en/usage/) for basic operations
- Check [Parameters Detailed](/en/params/) for various configurations
- Check [Technical Practice](/en/practice/) for real-world application scenarios
