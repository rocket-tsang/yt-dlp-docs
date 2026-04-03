---
title: yt-dlp 지원 사이트 목록 - YouTube/Bilibili/Twitter 등 1000개 이상 사이트
description: yt-dlp는 YouTube, Bilibili, Twitter, Instagram 등 1000개 이상의 동영상 사이트를 지원합니다. 각 사이트별 지원 기능과 사용 주의 사항을 상세히 소개합니다.
meta:
  - name: keywords
    content: yt-dlp 지원 사이트, 유튜브 다운로드, Bilibili 다운로드, 트위터 다운로드, 인스타그램 다운로드, 동영상 사이트 목록
---

# 지원 사이트 목록

yt-dlp는 1000개 이상의 동영상 사이트를 지원합니다. 이 장에서는 자주 사용되는 주요 지원 사이트와 사용 시 주의 사항을 소개합니다.

## 주요 동영상 사이트

### YouTube

YouTube는 yt-dlp가 가장 완벽하게 지원하는 사이트 중 하나입니다.

#### 지원 기능
- ✅ 동영상 다운로드 (모든 해상도)
- ✅ 재생목록 다운로드
- ✅ 채널 다운로드
- ✅ 라이브 스트리밍 다운로드
- ✅ 자막 다운로드 (자동 생성 자막 포함)
- ✅ 썸네일 다운로드
- ✅ 댓글 다운로드
- ✅ 멤버십 전용 동영상 (로그인 필요)

#### 사용 예시

```bash
# 단일 동영상 다운로드
yt-dlp "https://www.youtube.com/watch?v=VIDEO_ID"

# 최고 화질로 다운로드
yt-dlp -f "bestvideo+bestaudio/best" "https://www.youtube.com/watch?v=VIDEO_ID"

# 재생목록 다운로드
yt-dlp "https://www.youtube.com/playlist?list=PLAYLIST_ID"

# 채널의 모든 동영상 다운로드
yt-dlp "https://www.youtube.com/@ChannelName/videos"

# 라이브 스트리밍 다운로드
yt-dlp --live-from-start "https://www.youtube.com/watch?v=LIVE_ID"

# 자막 다운로드
yt-dlp --write-subs --sub-langs "ko,en" "https://www.youtube.com/watch?v=VIDEO_ID"
```

### Bilibili

중국에서 가장 인기 있는 동영상 사이트 중 하나입니다.

#### 지원 기능
- ✅ 동영상 다운로드
- ✅ 애니메이션/시리즈 다운로드
- ✅ 재생목록 다운로드
- ✅ 업로더 동영상 다운로드
- ✅ 자막 다운로드
- ✅ 탄막(bullet chat) 다운로드 (일부 지원)

#### 사용 예시

```bash
# 일반 동영상 다운로드
yt-dlp "https://www.bilibili.com/video/BV_ID"

# 애니메이션/시리즈 다운로드
yt-dlp "https://www.bilibili.com/bangumi/play/EP_ID"

# 업로더의 모든 동영상 다운로드
yt-dlp "https://space.bilibili.com/USER_ID"

# 즐겨찾기 목록 다운로드
yt-dlp "https://space.bilibili.com/USER_ID/favlist?fid=FAV_ID"

# 화질 지정 다운로드
yt-dlp -f "bestvideo[height<=1080]+bestaudio" "https://www.bilibili.com/video/BV_ID"
```

### Twitter/X

#### 지원 기능
- ✅ 동영상 다운로드
- ✅ GIF 다운로드
- ✅ 이미지 다운로드
- ✅ 트윗 타래(thread) 다운로드

#### 사용 예시

```bash
# 트위터 동영상 다운로드
yt-dlp "https://twitter.com/user/status/TWEET_ID"

# X 동영상 다운로드
yt-dlp "https://x.com/user/status/TWEET_ID"

# 트윗 내 모든 미디어 다운로드
yt-dlp "https://twitter.com/user/status/TWEET_ID"
```

### Instagram

#### 지원 기능
- ✅ 동영상 다운로드
- ✅ 이미지 다운로드
- ✅ 릴스(Reels) 다운로드
- ✅ 스토리(Stories) 다운로드 (로그인 필요)
- ✅ IGTV 다운로드

#### 사용 예시

```bash
# 인스타그램 동영상 다운로드
yt-dlp "https://www.instagram.com/p/POST_ID"

# 릴스 다운로드
yt-dlp "https://www.instagram.com/reel/REEL_ID"

# 스토리 다운로드 (로그인 필요)
yt-dlp -u "username" -p "password" "https://www.instagram.com/stories/username"

# IGTV 다운로드
yt-dlp "https://www.instagram.com/tv/TV_ID"
```

### TikTok

#### 지원 기능
- ✅ 동영상 다운로드
- ✅ 워터마크 없는 다운로드
- ✅ 이미지 다운로드
- ✅ 재생목록 다운로드

#### 사용 예시

```bash
# 틱톡 동영상 다운로드
yt-dlp "https://www.tiktok.com/@user/video/VIDEO_ID"

# 워터마크 없는 동영상 다운로드
yt-dlp "https://www.tiktok.com/@user/video/VIDEO_ID"

# 틱톡 재생목록 다운로드
yt-dlp "https://www.tiktok.com/@user"
```

## 기타 인기 사이트

### Vimeo

전문가용 동영상 플랫폼입니다.

```bash
# Vimeo 동영상 다운로드
yt-dlp "https://vimeo.com/VIDEO_ID"

# 비밀번호 보호된 동영상 다운로드
yt-dlp --video-password "password" "https://vimeo.com/VIDEO_ID"
```

### Facebook

```bash
# 페이스북 동영상 다운로드
yt-dlp "https://www.facebook.com/watch?v=VIDEO_ID"

# 릴스 다운로드
yt-dlp "https://www.facebook.com/reel/REEL_ID"
```

### Twitch

게임 스트리밍 플랫폼입니다.

```bash
# 트위치 동영상(VOD) 다운로드
yt-dlp "https://www.twitch.tv/videos/VIDEO_ID"

# 라이브 방송 다운로드
yt-dlp "https://www.twitch.tv/CHANNEL_NAME"

# 클립 다운로드
yt-dlp "https://www.twitch.tv/clip/CLIP_ID"
```

### Dailymotion

```bash
yt-dlp "https://www.dailymotion.com/video/VIDEO_ID"
```

### Reddit

```bash
# 레딧 동영상 다운로드
yt-dlp "https://www.reddit.com/r/subreddit/comments/POST_ID"
```

## 한국 동영상 사이트

### Naver TV (네이버 TV)

```bash
yt-dlp "https://tv.naver.com/v/VIDEO_ID"
```

### Kakao TV (카카오 TV)

```bash
yt-dlp "https://tv.kakao.com/v/VIDEO_ID"
```

### AfreecaTV (아프리카 TV)

```bash
# 방송국 다시보기 다운로드
yt-dlp "https://vod.afreecatv.com/player/VIDEO_ID"
```

## 음악 사이트

### SoundCloud

```bash
# 오디오 다운로드
yt-dlp "https://soundcloud.com/user/track"

# 재생목록 다운로드
yt-dlp "https://soundcloud.com/user/sets/playlist"
```

### Bandcamp

```bash
yt-dlp "https://artist.bandcamp.com/track/song"
```

## 전체 지원 목록 확인 방법

yt-dlp가 지원하는 모든 사이트 목록을 확인하려면 다음 명령어를 사용하세요:

```bash
# 모든 지원 사이트 나열
yt-dlp --list-extractors

# 지원되는 추출기(extractor) 설명 나열
yt-dlp --extractor-descriptions
```

또는 다음 링크를 방문하세요:

- [GitHub 지원 사이트 목록 (영어)](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md)

## 주의 사항

### 1. 사이트 변경

웹사이트는 페이지 구조나 API를 업데이트할 수 있으며, 이로 인해 yt-dlp가 정상적으로 작동하지 않을 수 있습니다. 문제가 발생하면:

1. yt-dlp를 최신 버전으로 업데이트하세요.
2. GitHub Issues에서 유사한 문제가 보고되었는지 확인하세요.
3. `--verbose` 매개변수를 사용하여 상세한 오류 메시지를 확인하세요.

### 2. 지역 제한

일부 동영상에는 지역 제한이 있을 수 있습니다. 다음 방법으로 해결을 시도할 수 있습니다:

```bash
# 프록시 사용
yt-dlp --proxy "socks5://127.0.0.1:1080" "URL"

# 지역 제한 우회 시도
yt-dlp --geo-bypass "URL"

# 국가 지정
yt-dlp --geo-bypass-country KR "URL"
```

### 3. 로그인 요구

일부 콘텐츠는 로그인이 필요합니다:

```bash
# 사용자 이름과 비밀번호 사용
yt-dlp -u "username" -p "password" "URL"

# 브라우저 쿠키 사용
yt-dlp --cookies-from-browser chrome "URL"
```

### 4. 저작권 준수

저작권법 및 각 사이트의 이용 약관을 준수하십시오:

- 다운로드 권한이 있는 콘텐츠만 다운로드하십시오.
- 상업적 목적으로 사용하지 마십시오 (허가된 경우 제외).
- 콘텐츠 제작자의 권리를 존중하십시오.

## 다음 단계

- [기술 실전](/ko/practice/)에서 실제 사용 사례 확인
- [매개변수 상세](/ko/params/)에서 다운로드 최적화 방법 학습
