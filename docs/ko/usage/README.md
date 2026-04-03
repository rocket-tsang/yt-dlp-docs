---
title: yt-dlp 사용법 튜토리얼 - 기초부터 고급까지 완전 가이드
description: yt-dlp 명령줄 사용법에 대한 완전한 튜토리얼. 동영상 다운로드, 오디오 추출, 포맷 선택, 자막 다운로드 등 일반적인 시나리오를 다양한 실전 예제와 함께 다룹니다.
meta:
  - name: keywords
    content: yt-dlp 명령어, yt-dlp 사용법, 동영상 다운로드 명령어, 유튜브 다운로드, Bilibili 다운로드, yt-dlp 예제
---

# 사용법

이 장에서는 yt-dlp의 기본적인 명령줄 사용 방법과 일반적인 시나리오를 소개합니다.

## 기본 구문

```bash
yt-dlp [옵션] <URL>
```

## 가장 간단한 사용법

### 동영상 다운로드

```bash
yt-dlp "https://www.youtube.com/watch?v=VIDEO_ID"
```

이 명령어는 동영상의 최고 화질 버전을 자동으로 다운로드합니다.

### 재생목록 다운로드

```bash
yt-dlp "https://www.youtube.com/playlist?list=PLAYLIST_ID"
```

## 자주 사용하는 명령어

### 1. 다운로드 경로 및 파일명 지정

`-o` 매개변수를 사용합니다:

```bash
# 파일명 지정
yt-dlp -o "my_video.mp4" "URL"

# 경로와 파일명 지정
yt-dlp -o "/path/to/video.mp4" "URL"

# 변수 사용
yt-dlp -o "%(title)s.%(ext)s" "URL"
yt-dlp -o "%(title)s-%(id)s.%(ext)s" "URL"
yt-dlp -o "~/Downloads/%(title)s.%(ext)s" "URL"
```

### 자주 사용하는 파일명 변수

| 변수 | 설명 |
|------|------|
| `%(id)s` | 동영상 ID |
| `%(title)s` | 동영상 제목 |
| `%(ext)s` | 파일 확장자 |
| `%(uploader)s` | 업로더 |
| `%(upload_date)s` | 업로드 날짜 |
| `%(resolution)s` | 해상도 |
| `%(playlist_index)s` | 재생목록 내 순서 |
| `%(playlist_title)s` | 재생목록 제목 |

### 2. 화질 선택

#### 최고 화질로 다운로드

```bash
yt-dlp -f "bestvideo+bestaudio/best" "URL"
```

#### 특정 해상도 지정 다운로드

```bash
# 1080p 동영상 다운로드
yt-dlp -f "bestvideo[height<=1080]+bestaudio/best[height<=1080]" "URL"

# 720p 동영상 다운로드
yt-dlp -f "bestvideo[height<=720]+bestaudio/best[height<=720]" "URL"

# 최대 480p 화질까지 다운로드
yt-dlp -f "bestvideo[height<=480]+bestaudio/best[height<=480]" "URL"
```

#### 사용 가능한 포맷 목록 보기

```bash
yt-dlp -F "URL"
```

이 명령어는 해당 동영상에서 사용 가능한 모든 포맷과 포맷 ID를 나열합니다.

#### 특정 포맷 ID로 다운로드

```bash
# 포맷 ID 사용
yt-dlp -f 22 "URL"

# 특정 포맷 지정 다운로드
yt-dlp -f "mp4" "URL"
```

### 3. 오디오 다운로드

#### 오디오만 다운로드 (최고 음질)

```bash
yt-dlp -x --audio-format mp3 "URL"
```

#### 오디오 품질 지정

```bash
yt-dlp -x --audio-format mp3 --audio-quality 0 "URL"  # 최고 품질
yt-dlp -x --audio-format mp3 --audio-quality 5 "URL"  # 중간 품질
yt-dlp -x --audio-format mp3 --audio-quality 9 "URL"  # 최소 용량
```

오디오 품질 범위: 0(최고)에서 9(최저)

### 4. 자막 다운로드

#### 모든 자막 다운로드

```bash
yt-dlp --write-subs "URL"
```

#### 특정 언어 자막 다운로드

```bash
# 한국어 자막 다운로드
yt-dlp --write-subs --sub-langs "ko" "URL"

# 영어 자막 다운로드
yt-dlp --write-subs --sub-langs "en" "URL"

# 여러 언어 자막 다운로드
yt-dlp --write-subs --sub-langs "en,ko" "URL"

# 사용 가능한 모든 자막 다운로드
yt-dlp --write-subs --sub-langs "all" "URL"
```

#### 동영상에 자막 포함(임베드)

```bash
yt-dlp --embed-subs --sub-langs "ko" "URL"
```

### 5. 썸네일 다운로드

```bash
# 썸네일 다운로드
yt-dlp --write-thumbnail "URL"

# 오디오 파일에 썸네일 삽입
yt-dlp -x --audio-format mp3 --embed-thumbnail "URL"
```

### 6. 메타데이터 다운로드

```bash
# JSON 형식으로 메타데이터 다운로드
yt-dlp --write-info-json "URL"

# 설명 파일 다운로드
yt-dlp --write-description "URL"
```

## 재생목록 다운로드

### 재생목록 전체 다운로드

```bash
yt-dlp "PLAYLIST_URL"
```

### 재생목록에서 특정 동영상만 다운로드

```bash
# 1번째 동영상 다운로드
yt-dlp --playlist-items 1 "PLAYLIST_URL"

# 1~5번째 동영상 다운로드
yt-dlp --playlist-items 1-5 "PLAYLIST_URL"

# 1, 3, 5번째 동영상 다운로드
yt-dlp --playlist-items 1,3,5 "PLAYLIST_URL"

# 1~3번째와 7번째 동영상 다운로드
yt-dlp --playlist-items 1-3,7 "PLAYLIST_URL"
```

### 다운로드 범위 제한

```bash
# 5번째부터 다운로드 시작
yt-dlp --playlist-start 5 "PLAYLIST_URL"

# 10번째까지만 다운로드
yt-dlp --playlist-end 10 "PLAYLIST_URL"

# 5번째부터 10번째까지 다운로드
yt-dlp --playlist-start 5 --playlist-end 10 "PLAYLIST_URL"
```

### 재생목록 역순 다운로드

```bash
# 마지막 동영상부터 거꾸로 다운로드
yt-dlp --playlist-reverse "PLAYLIST_URL"
```

## 다운로드 제어

### 속도 제한 다운로드

```bash
# 속도를 1MB/s로 제한
yt-dlp --limit-rate 1M "URL"

# 속도를 500KB/s로 제한
yt-dlp --limit-rate 500K "URL"
```

### 동시 다운로드

```bash
# 4개의 동시 조각(fragment) 다운로드 사용
yt-dlp --concurrent-fragments 4 "URL"
```

### 이어받기

```bash
yt-dlp --continue "URL"
```

### 이미 다운로드한 파일 건너뛰기

```bash
# 파일이 존재하면 다운로드 건너뛰기
yt-dlp --skip-download "URL"

# 기존 파일 덮어쓰지 않기
yt-dlp --no-overwrites "URL"
```

## 대량 다운로드

### 파일에서 URL 읽기

한 줄에 하나의 URL이 적힌 텍스트 파일(예: `urls.txt`)을 생성합니다:

```bash
yt-dlp -a urls.txt
```

### 대량 다운로드 옵션

```bash
# 대량 다운로드 및 출력 포맷 지정
yt-dlp -a urls.txt -o "%(playlist_index)s-%(title)s.%(ext)s"

# 대량 다운로드 시 동시성 제한
yt-dlp -a urls.txt --concurrent-fragments 4
```

## 프록시 설정

### HTTP/HTTPS 프록시

```bash
yt-dlp --proxy "http://127.0.0.1:8080" "URL"
yt-dlp --proxy "https://127.0.0.1:8080" "URL"
```

### SOCKS 프록시

```bash
yt-dlp --proxy "socks5://127.0.0.1:1080" "URL"
yt-dlp --proxy "socks5://user:password@127.0.0.1:1080" "URL"
```

## 인증

### 사용자 이름과 비밀번호

```bash
yt-dlp -u "username" -p "password" "URL"
```

### 쿠키 사용

#### 브라우저에서 쿠키 가져오기

```bash
# Chrome에서 가져오기
yt-dlp --cookies-from-browser chrome "URL"

# Firefox에서 가져오기
yt-dlp --cookies-from-browser firefox "URL"

# Safari에서 가져오기
yt-dlp --cookies-from-browser safari "URL"
```

#### 쿠키 파일 사용

```bash
yt-dlp --cookies cookies.txt "URL"
```

## 사이트별 다운로드

### YouTube

```bash
# 유튜브 동영상 다운로드
yt-dlp "https://www.youtube.com/watch?v=VIDEO_ID"

# 유튜브 재생목록 다운로드
yt-dlp "https://www.youtube.com/playlist?list=PLAYLIST_ID"

# 유튜브 채널의 모든 동영상 다운로드
yt-dlp "https://www.youtube.com/@ChannelName/videos"

# 유튜브 라이브 다운로드
yt-dlp --live-from-start "https://www.youtube.com/watch?v=LIVE_ID"
```

### Bilibili

```bash
# Bilibili 동영상 다운로드
yt-dlp "https://www.bilibili.com/video/BV_ID"

# Bilibili 애니메이션/시리즈 다운로드
yt-dlp "https://www.bilibili.com/bangumi/play/EP_ID"

# Bilibili 유저의 모든 동영상 다운로드
yt-dlp "https://space.bilibili.com/USER_ID"
```

### Twitter/X

```bash
# 트위터 동영상 다운로드
yt-dlp "https://twitter.com/user/status/TWEET_ID"

# X 동영상 다운로드
yt-dlp "https://x.com/user/status/TWEET_ID"
```

### Instagram

```bash
# 인스타그램 동영상 다운로드
yt-dlp "https://www.instagram.com/p/POST_ID"

# 인스타그램 릴스 다운로드
yt-dlp "https://www.instagram.com/reel/REEL_ID"
```

### TikTok

```bash
# 틱톡 동영상 다운로드
yt-dlp "https://www.tiktok.com/@user/video/VIDEO_ID"
```

## 시뮬레이션 및 테스트

### 다운로드 시뮬레이션 (실제 다운로드 안 함)

```bash
yt-dlp --simulate "URL"
```

### 동영상 정보 보기

```bash
# JSON 형식 정보 출력
yt-dlp --dump-json "URL"

# 요약 정보 출력
yt-dlp --get-title "URL"
yt-dlp --get-id "URL"
yt-dlp --get-description "URL"
yt-dlp --get-duration "URL"
```

### 다운로드 없이 포맷 목록만 출력

```bash
yt-dlp -F "URL"
```

## 출력 제어

### 조용한 모드

```bash
# 출력 표시 안 함
yt-dlp -q "URL"

# 경고 표시 안 함
yt-dlp --no-warnings "URL"
```

### 상세 모드

```bash
# 상세 정보 출력
yt-dlp -v "URL"

# 디버그 정보 출력
yt-dlp --verbose "URL"
```

## 유용한 팁

### 1. 여러 옵션 조합하기

```bash
# 최고 화질 다운로드, 특정 경로 저장, 자막 및 썸네일 삽입
yt-dlp -f "bestvideo+bestaudio/best" \
  -o "~/Videos/%(title)s.%(ext)s" \
  --write-subs --sub-langs "ko" \
  --embed-subs \
  --write-thumbnail \
  --embed-thumbnail \
  "URL"
```

### 2. 설정 파일로 명령어 간소화

자주 쓰는 옵션을 설정 파일에 저장한 후:

```bash
# 특정 설정 파일 사용
yt-dlp --config-location /path/to/config "URL"

# 설정 파일 무시
yt-dlp --ignore-config "URL"
```

### 3. 다운로드 속도 최적화

```bash
# 멀티스레드 다운로드 사용
yt-dlp --concurrent-fragments 4 \
  --buffersize 16K \
  "URL"
```

## 다음 단계

- [매개변수 상세](/ko/params/)에서 모든 가용 매개변수 확인
- [지원 사이트](/ko/sites/)에서 지원 웹사이트 목록 확인
- [기술 실전](/ko/practice/)에서 실제 응용 사례 확인
