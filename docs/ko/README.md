---
home: true
title: yt-dlp 기술 문서 - 강력한 동영상 다운로드 도구 완전 가이드
description: yt-dlp는 1000개 이상의 사이트를 지원하는 강력한 동영상 다운로드 도구입니다. 이 튜토리얼은 완전한 설치 가이드, 명령줄 사용법, 매개변수 상세 정보 및 실전 사례를 제공합니다.
heroImage: /logo.png
heroText: yt-dlp 문서
tagline: 강력한 동영상 다운로드 도구의 완전한 사용 지침서
meta:
  - name: keywords
    content: yt-dlp 튜토리얼, 동영상 다운로드 도구, youtube-dl 대체, 유튜브 다운로드, Bilibili 다운로드, 동영상 다운로드 가이드, yt-dlp 한국어 문서
  - name: description
    content: yt-dlp는 1000개 이상의 사이트를 지원하는 강력한 동영상 다운로드 도구입니다. 이 튜토리얼은 완전한 설치 가이드, 명령줄 사용법, 매개변수 상세 정보 및 실전 사례를 제공합니다.
  - property: og:title
    content: yt-dlp 기술 문서 - 강력한 동영상 다운로드 도구 완전 가이드
  - property: og:description
    content: yt-dlp는 1000개 이상의 사이트를 지원하는 강력한 동영상 다운로드 도구입니다. 이 튜토리얼은 완전한 설치 가이드, 명령줄 사용법, 매개변수 상세 정보 및 실전 사례를 제공합니다.
  - property: og:image
    content: /logo.png
actions:
  - text: 시작하기
    link: /ko/guide/
    type: primary
  - text: GitHub 프로젝트
    link: https://github.com/rocket-tsang/yt-dlp-docs
    type: secondary
features:
  - title: 1000개 이상의 사이트 지원
    details: YouTube, Bilibili, Twitter, Instagram 등 1000개 이상의 동영상 사이트에서 다운로드가 가능합니다.
  - title: 강력한 기능
    details: 동영상 다운로드, 오디오 추출, 포맷 변환, 자막 다운로드 등 다양한 기능을 지원합니다.
  - title: 완전 무료
    details: 오픈 소스이며 무료입니다. Windows, Linux, macOS 크로스 플랫폼을 지원합니다.
  - title: 사용하기 쉬움
    details: 간단한 명령줄 조작과 모든 필요를 충족하는 풍부한 설정 옵션을 제공합니다.
footer: CustomFooter
---

## 빠른 시작

### yt-dlp란 무엇인가요?

yt-dlp는 youtube-dl을 기반으로 한 향상된 동영상 다운로드 도구로, 수천 개의 동영상 사이트에서의 다운로드와 개선 사항을 지원합니다.

### 주요 특징

- 🎥 1000개 이상의 동영상 사이트 지원
- 🚀 더 빠른 다운로드 속도
- 🎵 오디오 추출 및 포맷 변환
- 📝 자막 다운로드 지원
- 🔐 로그인이 필요한 사이트 지원
- 💻 크로스 플랫폼 (Windows, Linux, macOS)

### 빠른 설치

```bash
# Windows (winget 사용)
winget install yt-dlp

# macOS (Homebrew 사용)
brew install yt-dlp

# Linux (pip 사용)
pip install yt-dlp
```

### 간단한 사용법

```bash
# 동영상 다운로드
yt-dlp "https://www.youtube.com/watch?v=VIDEO_ID"

# 최고 화질로 다운로드
yt-dlp -f "best" "https://www.youtube.com/watch?v=VIDEO_ID"

# 오디오만 다운로드
yt-dlp -x --audio-format mp3 "https://www.youtube.com/watch?v=VIDEO_ID"
```
