# yt-dlp 기술 문서

Vuepress로 구축된 yt-dlp 동영상 다운로드 도구 완전 가이드.

[English](README_en.md) | [简体中文](README.md) | [日本語](README_ja.md) | [한국어](README_ko.md)

## 프로젝트 소개

이 프로젝트는 Vuepress 프레임워크를 사용하여 yt-dlp 기술 문서 사이트를 생성하며, 사용자가 yt-dlp의 다양한 기능을 신속하게 익히고 깊이 이해할 수 있도록 돕는 것을 목적으로 합니다.

## 콘텐츠 개요

1. **프로젝트 소개** - yt-dlp의 상세 소개 및 특징
2. **설치 가이드** - Windows, Linux, macOS 설치 방법
3. **사용법** - 기본적인 명령줄 조작 및 일반적인 시나리오
4. **매개변수 상세** - 사용 가능한 모든 매개변수에 대한 상세 설명
5. **지원 사이트** - 주요 지원 웹사이트 목록
6. **실전 사례** - 실제 사용 사례 및 팁
7. **문의하기** - 도움을 받는 방법 및 프로젝트 기여

## 빠른 시작

### 의존성 설치

```bash
npm install
```

### 개발 서버 시작

```bash
npm run docs:dev
```

http://localhost:8080 에 접속하여 문서 사이트를 확인합니다.

### 프로덕션 버전 빌드

```bash
npm run docs:build
```

빌드된 파일은 `docs/.vuepress/dist` 디렉토리에 생성됩니다.

## 프로젝트 구조

```
.
├── docs
│   ├── .vuepress
│   │   └── config.ts       # Vuepress 설정 파일
│   ├── guide               # 프로젝트 소개
│   ├── install             # 설치 가이드
│   ├── usage               # 사용법
│   ├── params              # 매개변수 상세
│   ├── sites               # 지원 사이트
│   ├── practice            # 실전 사례
│   ├── contact             # 문의하기
│   └── README.md           # 홈페이지
├── package.json
└── README.md
```

## 기술 스택

- [Vuepress 2.x](https://v2.vuepress.vuejs.org/ko/) - 정적 사이트 생성기
- [Vue 3](https://vuejs.org/) - 점진적 JavaScript 프레임워크
- [Vite](https://vitejs.dev/) - 차세대 프런트엔드 빌드 도구

## 리소스

- [yt-dlp GitHub](https://github.com/yt-dlp/yt-dlp)
- [yt-dlp 문서](https://github.com/yt-dlp/yt-dlp#readme)
- [지원 사이트 목록](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md)

## 라이선스

MIT License

## 감사의 말

yt-dlp 프로젝트와 기여자분들께 감사드립니다.
