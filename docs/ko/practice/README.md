---
title: yt-dlp 실전 사례 - 실제 활용 시나리오별 튜토리얼
description: yt-dlp 기술 실전 사례 튜토리얼. 재생목록 대량 다운로드, 라이브 방송 저장, 오디오 추출 등 실제 사용 환경에 맞춘 명령어와 스크립트를 상세히 설명합니다.
meta:
  - name: keywords
    content: yt-dlp 실전, yt-dlp 사례, yt-dlp 튜토리얼, 대량 다운로드, 재생목록 저장, 오디오 추출
---

# 실전 사례

이 장에서는 실제 사례를 통해 yt-dlp의 다양한 활용 방법을 소개합니다.

## 사례 1: 유튜브 재생목록 대량 다운로드

### 시나리오

100개의 동영상이 포함된 유튜브 재생목록을 다음 조건으로 다운로드하고 싶습니다:
- 해상도는 1080p 이하로 설정.
- 지정된 폴더에 저장.
- 파일명에 순번과 제목 포함.
- 자막(한국어 우선) 다운로드.
- 자막을 동영상에 포함(임베드).

### 해결 방법

```bash
# 다운로드 스크립트
yt-dlp \
  -o "~/Downloads/YouTube/%(playlist_index)03d-%(title)s.%(ext)s" \
  -f "bestvideo[height<=1080]+bestaudio/best[height<=1080]" \
  --write-subs \
  --sub-langs "ko,en" \
  --embed-subs \
  --merge-output-format mp4 \
  "https://www.youtube.com/playlist?list=PLAYLIST_ID"
```

### 매개변수 설명

- `-o`: 출력 경로 및 파일명 형식을 지정합니다.
- `-f`: 1080p 이하의 최고 화질을 선택합니다.
- `--write-subs`: 자막을 다운로드합니다.
- `--sub-langs`: 자막 언어를 지정합니다 (한국어 우선).
- `--embed-subs`: 자막을 동영상 파일에 포함합니다.
- `--merge-output-format`: MP4 형식으로 병합합니다.

### 응용: 설정 파일 사용

`~/.config/yt-dlp/config` 설정 파일을 생성합니다:

```bash
# 기본 다운로드 경로
-o ~/Downloads/YouTube/%(playlist_index)03d-%(title)s.%(ext)s

# 동영상 품질
-f bestvideo[height<=1080]+bestaudio/best[height<=1080]

# 자막 설정
--write-subs
--sub-langs ko,en
--embed-subs

# 출력 형식
--merge-output-format mp4

# 오류 무시
--ignore-errors
```

파일 생성 후에는 URL만 입력하여 간편하게 실행할 수 있습니다:

```bash
yt-dlp "PLAYLIST_URL"
```

## 사례 2: Bilibili 애니메이션/시리즈 다운로드

### 시나리오

Bilibili 시리즈의 모든 에피소드를 다음 조건으로 다운로드하고 싶습니다:
- 최고 화질로 다운로드.
- 파일명에 에피소드 번호 포함.
- 이미 다운로드한 파일은 건너뛰기.

### 해결 방법

```bash
# 시리즈 다운로드
yt-dlp \
  -o "~/Downloads/Anime/%(title)s/제%(episode_number)02d화-%(episode)s.%(ext)s" \
  -f "bestvideo+bestaudio/best" \
  --no-overwrites \
  "https://www.bilibili.com/bangumi/play/EP_ID"
```

### 응용: 여러 시리즈 대량 다운로드

`anime_urls.txt` 파일을 생성합니다:

```
https://www.bilibili.com/bangumi/play/EP_ID_1
https://www.bilibili.com/bangumi/play/EP_ID_2
https://www.bilibili.com/bangumi/play/EP_ID_3
```

실행 명령어:

```bash
yt-dlp -a anime_urls.txt \
  -o "~/Downloads/Anime/%(title)s/제%(episode_number)02d화.%(ext)s" \
  -f "bestvideo+bestaudio/best" \
  --no-overwrites
```

## 사례 3: 유튜브 음악 다운로드 및 MP3 변환

### 시나리오

유튜브 뮤직비디오를 고음질 MP3 형식으로 저장하고 싶습니다:
- 오디오만 추출.
- 320kbps MP3로 변환.
- 썸네일 삽입.
- 메타데이터 삽입.
- 파일명에 제목과 업로더명 포함.

### 해결 방법

```bash
# 다운로드 및 MP3 변환
yt-dlp \
  -x \
  --audio-format mp3 \
  --audio-quality 0 \
  --embed-thumbnail \
  --add-metadata \
  -o "~/Music/%(title)s-%(uploader)s.%(ext)s" \
  "YOUTUBE_MUSIC_URL"
```

### 재생목록 대량 다운로드

```bash
# 음악 재생목록 다운로드
yt-dlp \
  -x \
  --audio-format mp3 \
  --audio-quality 0 \
  --embed-thumbnail \
  --add-metadata \
  -o "~/Music/%(playlist_title)s/%(playlist_index)03d-%(title)s.%(ext)s" \
  "YOUTUBE_PLAYLIST_URL"
```

## 사례 4: 로그인이 필요한 사이트 다운로드

### 시나리오

인스타그램 스토리 등 로그인이 필요한 콘텐츠를 다운로드하고 싶습니다.

### 해결 방법 1: 브라우저 쿠키 사용

```bash
# Chrome에서 쿠키 가져오기
yt-dlp --cookies-from-browser chrome "INSTAGRAM_STORIES_URL"

# Firefox에서 쿠키 가져오기
yt-dlp --cookies-from-browser firefox "INSTAGRAM_STORIES_URL"

# Safari에서 쿠키 가져오기
yt-dlp --cookies-from-browser safari "INSTAGRAM_STORIES_URL"
```

### 해결 방법 2: 사용자 이름과 비밀번호 사용

```bash
# 사용자 정보 직접 입력
yt-dlp -u "your_username" -p "your_password" "URL"
```

### 해결 방법 3: 쿠키 파일 사용

1. 브라우저 확장 프로그램("Get cookies.txt LOCALLY" 등)을 사용하여 쿠키를 내보냅니다.
2. `cookies.txt`로 저장합니다.
3. 명령어에 적용합니다:

```bash
yt-dlp --cookies cookies.txt "URL"
```

## 사례 5: 라이브 스트리밍 다운로드

### 시나리오

유튜브나 트위치의 라이브 방송을 저장하고 싶습니다.

### 해결 방법

### 유튜브 라이브

```bash
# 진행 중인 라이브 다운로드
yt-dlp "https://www.youtube.com/watch?v=LIVE_ID"

# 라이브 시작 지점부터 다운로드 (되감기 기능 지원 시)
yt-dlp --live-from-start "https://www.youtube.com/watch?v=LIVE_ID"
```

### 트위치 라이브

```bash
# 진행 중인 라이브 다운로드
yt-dlp "https://www.twitch.tv/CHANNEL_NAME"

# 지난 방송(VOD) 다운로드
yt-dlp "https://www.twitch.tv/videos/VIDEO_ID"
```

### 응용: 녹화 후 MP4 저장

```bash
# 라이브 녹화
yt-dlp \
  -o "~/Downloads/Live/%(channel)s_%(timestamp)s.%(ext)s" \
  --hls-prefer-native \
  "https://www.twitch.tv/CHANNEL_NAME"

# MP4 변환 (필요한 경우)
ffmpeg -i input.ts -c copy output.mp4
```

## 사례 6: 프록시를 이용한 다운로드

### 시나리오

지역 제한이 걸린 콘텐츠를 프록시를 통해 다운로드하고 싶습니다.

### 해결 방법

### SOCKS5 프록시 사용

```bash
yt-dlp --proxy "socks5://127.0.0.1:1080" "URL"

# 인증이 필요한 프록시
yt-dlp --proxy "socks5://username:password@proxy.example.com:1080" "URL"
```

### HTTP 프록시 사용

```bash
yt-dlp --proxy "http://127.0.0.1:8080" "URL"
```

### 지역 제한 우회

```bash
# 특정 국가 지정 우회
yt-dlp --geo-bypass-country US "URL"
yt-dlp --geo-bypass-country KR "URL"
```

## 사례 7: 특정 형식 지정 저장

### 시나리오

특정 인코딩이나 포맷의 동영상을 다운로드하고 싶습니다.

### 해결 방법

### 가용 포맷 확인

```bash
# 모든 포맷 목록 출력
yt-dlp -F "URL"
```

출력 예시:
```
ID  EXT  RESOLUTION  FPS |   FILESIZE   TBR PROTO | VCODEC        VBR ACODEC      ABR
--- ---- ---------- ----- ------------- ----- ----- ----------- ------ ----------- -----
22  mp4  1280x720    30 | ≈ 150.00MiB  1500k https | avc1.64001F 1500k mp4a.40.2  128k
137 mp4  1920x1080   30 | ≈ 450.00MiB  4500k https | avc1.640028 4500k -           -
140 m4a  audio only      | ≈  12.00MiB   128k https | -              - mp4a.40.2  128k
...
```

### 특정 ID 지정 다운로드

```bash
# 포맷 ID 사용
yt-dlp -f 22 "URL"

# 1080p 비디오와 최상의 오디오 병합
yt-dlp -f "137+140" "URL"

# MP4 형식 중 최고 화질 선택
yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]" "URL"

# VP9 코덱 동영상 다운로드
yt-dlp -f "bestvideo[vcodec=vp9]+bestaudio" "URL"
```

## 사례 8: 개인 음악 라이브러리 구축

### 시나리오

다양한 소스에서 음악을 다운로드하여 라이브러리로 정리합니다.

### 해결 방법

### 설정 파일 작성

`~/.config/yt-dlp/music_config`:

```bash
# 오디오 설정
-x
--audio-format mp3
--audio-quality 0

# 메타데이터
--embed-thumbnail
--add-metadata

# 파일명 형식
-o ~/Music/%(artist)s/%(album)s/%(track_number)02d-%(title)s.%(ext)s

# 오류 무시
--ignore-errors

# 동시 다운로드
--concurrent-fragments 4
```

### 다운로드 스크립트

```bash
#!/bin/bash

# 파일에서 URL을 읽어 실행
while IFS= read -r url; do
  echo "처리 중: $url"
  yt-dlp --config-location ~/.config/yt-dlp/music_config "$url"
done < music_urls.txt
```

## 사례 9: 자막 다운로드 및 활용

### 시나리오

동영상의 자막을 다운로드하여 번역 등에 활용하고 싶습니다.

### 해결 방법

### 자막만 다운로드

```bash
# 동영상 없이 자막만 저장
yt-dlp --skip-download --write-subs --sub-langs "ko" "URL"

# 모든 언어 자막 다운로드
yt-dlp --skip-download --write-subs --sub-langs "all" "URL"

# 자동 생성 자막 다운로드
yt-dlp --skip-download --write-auto-subs "URL"
```

## 사례 10: 자동 다운로드 스크립트

### 시나리오

정기적으로 특정 채널의 최신 동영상을 자동 다운로드합니다.

### 해결 방법

```bash
#!/bin/bash

# 설정
CHANNEL_URL="https://www.youtube.com/@ChannelName/videos"
DOWNLOAD_DIR=~/Downloads/AutoDownload
LOG_FILE=~/Downloads/download.log

# 디렉토리 생성
mkdir -p "$DOWNLOAD_DIR"

# 로그 기록
echo "$(date): 다운로드 시작" >> "$LOG_FILE"

# 최신 10개 동영상 체크 및 다운로드
yt-dlp \
  --playlist-end 10 \
  --no-overwrites \
  --dateafter $(date -d "7 days ago" +%Y%m%d) \
  -o "$DOWNLOAD_DIR/%(upload_date)s-%(title)s.%(ext)s" \
  -f "bestvideo[height<=1080]+bestaudio/best[height<=1080]" \
  --write-subs \
  --sub-langs "ko,en" \
  --embed-subs \
  --ignore-errors \
  "$CHANNEL_URL" >> "$LOG_FILE" 2>&1

echo "$(date): 다운로드 완료" >> "$LOG_FILE"
```

### Cron을 이용한 자동 실행

crontab 편집:

```bash
crontab -e
```

매일 새벽 2시에 실행되도록 추가:

```
0 2 * * * /path/to/download_script.sh
```

## 요약

이 사례들은 yt-dlp의 실제 활용 방법 중 일부에 불과합니다. 매개변수를 조합하여 더 복잡한 요구사항도 충족할 수 있습니다.

1. 자주 쓰는 설정은 설정 파일에 보관하세요.
2. 새 명령어를 시도할 때는 `--simulate` 옵션을 활용하세요.
3. yt-dlp를 정기적으로 업데이트하여 최신 환경에 대응하세요.

더 자세한 옵션은 [매개변수 상세](/ko/params/)를 참조하세요.
