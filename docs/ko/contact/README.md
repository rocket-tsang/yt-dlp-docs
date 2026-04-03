---
title: 문의하기 - yt-dlp 기술 문서
description: yt-dlp 기술 문서 관련 문의처. GitHub Issues, Discussions 등 피드백 채널 및 자주 묻는 질문에 대한 해결 방법을 제공합니다.
meta:
  - name: keywords
    content: yt-dlp 연락처, yt-dlp 도움말, yt-dlp 피드백, yt-dlp 문제, yt-dlp 커뮤니티
---

# 문의하기

yt-dlp 기술 문서 웹사이트를 방문해 주셔서 감사합니다! 질문, 제안 또는 피드백이 있으시면 다음 채널을 통해 연락해 주시기 바랍니다.

## 공식 리소스

### yt-dlp 공식 GitHub

- **프로젝트 주소**: [https://github.com/yt-dlp/yt-dlp](https://github.com/yt-dlp/yt-dlp)
- **Issues**: [https://github.com/yt-dlp/yt-dlp/issues](https://github.com/yt-dlp/yt-dlp/issues)
- **Discussions**: [https://github.com/yt-dlp/yt-dlp/discussions](https://github.com/yt-dlp/yt-dlp/discussions)
- **Wiki**: [https://github.com/yt-dlp/yt-dlp/wiki](https://github.com/yt-dlp/yt-dlp/wiki)

## 도움말 보기

### 1. 문서 확인

질문하시기 전에 다음 리소스를 먼저 확인해 보시는 것을 권장합니다:

- 본 문서 사이트의 각 섹션
- [yt-dlp README (영어)](https://github.com/yt-dlp/yt-dlp#readme)
- [지원 사이트 목록 (영어)](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md)
- [FAQ (영어)](https://github.com/yt-dlp/yt-dlp/wiki/FAQ)

### 2. Issues 검색

새로운 이슈를 올리기 전에 기존에 유사한 사례가 있는지 검색해 보세요:

- [yt-dlp Issues](https://github.com/yt-dlp/yt-dlp/issues)

### 3. 새 Issue 등록

해결 방법을 찾을 수 없는 경우 새 이슈를 등록할 수 있습니다:

1. [https://github.com/yt-dlp/yt-dlp/issues/new](https://github.com/yt-dlp/yt-dlp/issues/new)에 접속합니다.
2. 적절한 이슈 템플릿을 선택합니다.
3. 문제를 상세히 설명합니다.
4. 필요한 정보(실행한 전체 명령어, 오류 메시지, 시스템 정보 등)를 제공합니다.

### 4. Discussions

일반적인 질문이나 토론은 GitHub Discussions를 이용해 주세요:

- [https://github.com/yt-dlp/yt-dlp/discussions](https://github.com/yt-dlp/yt-dlp/discussions)

## 버그 제보

버그를 발견하신 경우 다음 단계에 따라 제보해 주세요:

### 1. 정보 수집

다음 명령어를 실행하여 시스템 정보를 수집합니다:

```bash
# yt-dlp 버전 확인
yt-dlp --version

# 상세 오류 메시지 확인
yt-dlp --verbose "URL"

# 시스템 정보 확인
# Linux
uname -a

# macOS
sw_vers

# Windows
systeminfo
```

### 2. 버그 보고서 작성

버그 제보 시 다음 내용을 포함해 주세요:

- **yt-dlp 버전**: `yt-dlp --version` 결과
- **운영체제(OS)**: Windows/Linux/macOS 및 버전
- **Python 버전**: `python --version` 결과
- **FFmpeg 버전**: `ffmpeg -version` 결과
- **전체 명령어**: 사용하신 yt-dlp 명령어 전체
- **전체 오류 메시지**: `--verbose` 옵션으로 출력된 상세 내용
- **문제 설명**: 발생한 문제와 기대했던 동작을 명확히 기재

## 기능 요청

새로운 기능에 대한 제안이 있는 경우:

1. Issues나 Discussions에서 이미 유사한 요청이 있는지 먼저 검색합니다.
2. 없는 경우 새 Feature Request를 등록합니다.
3. 기능 요구 사항과 사용 시나리오를 상세히 설명합니다.
4. 해당 기능이 yt-dlp를 어떻게 개선할 수 있는지 설명합니다.

## 프로젝트 기여

yt-dlp 프로젝트에 대한 기여를 환영합니다!

### 기여 방법

1. **프로젝트 포크(Fork)**: GitHub에서 yt-dlp 프로젝트를 포크합니다.
2. **브랜치 생성**: 변경 사항을 적용할 새 브랜치를 만듭니다.
3. **코드 작성**: 프로젝트의 코딩 스타일 가이드를 준수합니다.
4. **테스트**: 코드가 정상적으로 작동하는지 확인합니다.
5. **풀 리퀘스트(PR) 제출**: PR을 올리고 리뷰를 기다립니다.

## 커뮤니티 리소스

### 커뮤니티 포럼

- [Reddit r/youtubedl](https://www.reddit.com/r/youtubedl/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/yt-dlp)

## 이 문서에 관하여

### 문서의 목적

본 문서 사이트는 포괄적이고 상세한 yt-dlp 사용 가이드를 제공하여, 사용자들이 이 강력한 도구의 다양한 기능을 빠르게 익히고 깊이 이해할 수 있도록 돕는 것을 목적으로 합니다.

### 문서 기여

문서에서 오류를 발견하거나 개선하고 싶은 내용이 있다면:

1. GitHub에서 이슈를 생성해 주세요.
2. 또는 직접 풀 리퀘스트를 보내 문서를 개선해 주세요.

### 라이선스

본 문서는 MIT 라이선스 하에 제공됩니다.

## 자주 묻는 질문 (FAQ)

### Q: yt-dlp와 youtube-dl의 차이점은 무엇인가요?

A: yt-dlp는 youtube-dl의 향상된 포크 버전으로, 더 많은 기능과 빠른 다운로드 속도, 빈번한 업데이트를 제공합니다. 자세한 비교는 [프로젝트 소개](/ko/guide/)를 참조하세요.

### Q: yt-dlp는 어떻게 업데이트하나요?

A: `yt-dlp -U` 명령어를 사용하거나 설치 시 사용했던 패키지 관리자를 통해 업데이트하세요.

### Q: 다운로드 속도가 너무 느립니다.

A: 다음을 시도해 보세요:
- 프록시 사용
- `--concurrent-fragments` 매개변수 활용
- aria2c와 같은 외부 다운로더 연동

### Q: 오류가 발생합니다.

A: 
1. 최신 버전으로 업데이트하세요.
2. `--verbose` 옵션으로 상세 오류를 확인하세요.
3. GitHub Issues에서 유사한 사례를 검색해 보세요.

## 면책 조항

- 본 문서는 학습 및 참고용으로만 제공됩니다.
- 현지 법규 및 규정을 준수하십시오.
- 콘텐츠 제작자의 저작권을 존중하십시오.
- 상업적 용도로 사용하지 마십시오 (허가된 경우 제외).

## 마치며

yt-dlp를 이용해 주셔서 감사합니다! 이 문서가 여러분의 도구 활용에 도움이 되기를 바랍니다.

즐거운 다운로드 되세요!
