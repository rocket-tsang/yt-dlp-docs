---
title: yt-dlp 설치 가이드 - Windows/Linux/macOS 설치 방법
description: 상세한 yt-dlp 설치 가이드. Windows, Linux, macOS에서 winget, Homebrew, pip 등을 이용한 설치 방법과 문제 해결 방법을 제공합니다.
meta:
  - name: keywords
    content: yt-dlp 설치, yt-dlp 다운로드, Windows yt-dlp 설치, macOS yt-dlp 설치, Linux yt-dlp 설치, yt-dlp 설치 가이드
---

# 설치 가이드

이 장에서는 Windows, Linux 및 macOS에 yt-dlp를 설치하는 방법을 소개합니다.

## 시스템 요구 사항

- **Python**: 3.7 이상 (일부 설치 방법에서 필요)
- **FFmpeg**: 비디오/오디오 병합 및 포맷 변환용 (선택 사항이지만 권장)
- **네트워크**: 안정적인 인터넷 연결

## Windows 설치

### 방법 1: winget 사용 (권장)

Windows 11 및 Windows 10 (1809 이후)에는 winget 패키지 관리자가 내장되어 있습니다.

```powershell
winget install yt-dlp
```

### 방법 2: Chocolatey 사용

Chocolatey가 설치되어 있는 경우:

```powershell
choco install yt-dlp
```

### 방법 3: Scoop 사용

Scoop을 사용하는 경우:

```powershell
scoop install yt-dlp
```

### 방법 4: 실행 파일 다운로드

1. [yt-dlp 릴리스 페이지](https://github.com/yt-dlp/yt-dlp/releases)에 접속합니다.
2. 최신 `yt-dlp.exe`를 다운로드합니다.
3. 파일을 임의의 디렉토리에 배치합니다 (PATH에 추가하는 것을 권장합니다).

### 방법 5: pip 사용

```powershell
pip install yt-dlp
```

### FFmpeg 설치 (선택 사항이지만 권장)

```powershell
# winget 사용
winget install ffmpeg

# 또는 Chocolatey 사용
choco install ffmpeg

# 또는 Scoop 사용
scoop install ffmpeg
```

## Linux 설치

### 방법 1: pip 사용 (권장)

```bash
pip install yt-dlp
```

또는 pip3를 사용합니다:

```bash
pip3 install yt-dlp
```

### 방법 2: 패키지 관리자 사용

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

### 방법 3: 바이너리 파일 다운로드

```bash
sudo curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp
sudo chmod a+rx /usr/local/bin/yt-dlp
```

### FFmpeg 설치 (선택 사항이지만 권장)

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

## macOS 설치

### 방법 1: Homebrew 사용 (권장)

```bash
brew install yt-dlp
```

### 방법 2: MacPorts 사용

```bash
sudo port install yt-dlp
```

### 방법 3: pip 사용

```bash
pip3 install yt-dlp
```

### 방법 4: 바이너리 파일 다운로드

```bash
sudo curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_macos -o /usr/local/bin/yt-dlp
sudo chmod a+rx /usr/local/bin/yt-dlp
```

### FFmpeg 설치 (선택 사항이지만 권장)

```bash
brew install ffmpeg
```

## 설치 확인

설치가 완료되면 터미널 또는 명령 프롬프트를 열고 다음을 실행합니다:

```bash
yt-dlp --version
```

버전 번호가 표시되면 설치가 성공한 것입니다.

## yt-dlp 업데이트

yt-dlp는 자주 업데이트됩니다. 최신 기능과 수정을 반영하기 위해 정기적으로 업데이트하는 것이 좋습니다.

### 기본 내장 업데이트 기능 사용

```bash
yt-dlp -U
```

### 패키지 관리자로 업데이트

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

## 종속성

### FFmpeg

FFmpeg은 비디오와 오디오 스트림의 병합, 포맷 변환 등에 사용됩니다. yt-dlp는 FFmpeg 없이도 작동할 수 있지만, 일부 기능에는 FFmpeg 지원이 필요합니다.

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

## 설정 파일

yt-dlp는 자주 사용하는 매개변수 설정을 저장하기 위해 설정 파일을 지원합니다.

### 설정 파일 위치

#### Windows
- `%APPDATA%\yt-dlp\config`
- `%APPDATA%\yt-dlp\config.txt`
- `C:\Users\<사용자명>\yt-dlp.conf`

#### Linux/macOS
- `/etc/yt-dlp/config`
- `/etc/yt-dlp.conf`
- `~/.config/yt-dlp/config`
- `~/.config/yt-dlp.conf`
- `~/.yt-dlp/config`
- `~/.yt-dlp.conf`

### 설정 파일 예시

설정 파일을 생성하고 자주 사용하는 매개변수를 추가합니다:

```bash
# 기본 다운로드 경로
-o ~/Downloads/%(title)s.%(ext)s

# 최고 화질로 다운로드
-f bestvideo+bestaudio/best

# 썸네일 삽입
--embed-thumbnail

# 자막 삽입
--embed-subs

# 자막 다운로드
--write-subs

# 프록시 설정
# --proxy socks5://127.0.0.1:1080

# 속도 제한 (예: 1MB/s)
# --limit-rate 1M
```

## 문제 해결

### 권한 오류 (Linux/macOS)

권한 오류가 발생하면 다음을 시도해 보세요:

```bash
sudo chmod a+rx /usr/local/bin/yt-dlp
```

### Python 버전 문제

Python 3.7 이상이 설치되어 있는지 확인하세요:

```bash
python3 --version
```

### 네트워크 문제

다운로드할 수 없는 경우 프록시 설정이 필요할 수 있습니다:

```bash
yt-dlp --proxy socks5://127.0.0.1:1080 <URL>
```

### Windows에서 명령어를 찾을 수 없음

`yt-dlp.exe`를 PATH 이외의 디렉토리에 배치한 경우 다음이 필요합니다:

1. 디렉토리를 PATH에 추가
2. 또는 전체 경로를 사용하여 실행

### macOS 보안 제한

"개발자를 확인할 수 없음" 오류가 발생하는 경우:

```bash
xattr -d com.apple.quarantine /usr/local/bin/yt-dlp
```

## 다음 단계

설치가 완료되면 다음을 할 수 있습니다:

- [사용법](/ko/usage/)에서 기본 조작 학습
- [매개변수 상세](/ko/params/)에서 다양한 설정 탐구
- [실전 사례](/ko/practice/)에서 실제 응용 사례 학습
