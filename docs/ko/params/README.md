---
title: yt-dlp 매개변수 상세 - 완전한 명령줄 옵션 설명
description: yt-dlp 명령줄 매개변수에 대한 완전한 설명. 동영상 선택, 다운로드 제어, 네트워크 설정, 인증 등 모든 매개변수의 상세 사용법과 예제를 제공합니다.
meta:
  - name: keywords
    content: yt-dlp 매개변수, yt-dlp 옵션, yt-dlp 명령줄 인자, yt-dlp 설정, 동영상 다운로드 매개변수
---

# 매개변수 상세

이 장에서는 yt-dlp의 다양한 명령줄 매개변수와 그 사용법을 상세히 소개합니다.

## 일반 옵션

### -h, --help

도움말 정보를 표시하고 종료합니다.

```bash
yt-dlp --help
```

### --version

버전 정보를 표시하고 종료합니다.

```bash
yt-dlp --version
```

### -U, --update

yt-dlp를 최신 버전으로 업데이트합니다.

```bash
yt-dlp -U
```

### --no-update

업데이트를 확인하지 않습니다 (특정 설치 방법에서 필요).

```bash
yt-dlp --no-update "URL"
```

## 네트워크 옵션

### --proxy URL

지정한 프록시 서버를 사용합니다.

```bash
# HTTP 프록시
yt-dlp --proxy "http://127.0.0.1:8080" "URL"

# HTTPS 프록시
yt-dlp --proxy "https://127.0.0.1:8080" "URL"

# SOCKS5 프록시
yt-dlp --proxy "socks5://127.0.0.1:1080" "URL"

# 인증이 필요한 프록시
yt-dlp --proxy "socks5://user:password@127.0.0.1:1080" "URL"
```

### --socket-timeout SECONDS

소켓 타임아웃 시간을 초 단위로 설정합니다.

```bash
yt-dlp --socket-timeout 30 "URL"
```

### --source-address IP

클라이언트 IP 주소를 설정합니다.

```bash
yt-dlp --source-address 192.168.1.100 "URL"
```

### --force-ipv4

IPv4 사용을 강제합니다.

```bash
yt-dlp --force-ipv4 "URL"
```

### --force-ipv6

IPv6 사용을 강제합니다.

```bash
yt-dlp --force-ipv6 "URL"
```

## 동영상 선택 옵션

### --playlist-start NUMBER

재생목록의 시작 위치를 지정합니다 (기본값은 1).

```bash
# 5번째 동영상부터 다운로드 시작
yt-dlp --playlist-start 5 "PLAYLIST_URL"
```

### --playlist-end NUMBER

재생목록의 종료 위치를 지정합니다 (기본값은 마지막).

```bash
# 10번째 동영상까지만 다운로드
yt-dlp --playlist-end 10 "PLAYLIST_URL"
```

### --playlist-items ITEM_SPEC

재생목록에서 다운로드할 항목을 지정합니다.

```bash
# 1, 3, 5번째 동영상 다운로드
yt-dlp --playlist-items 1,3,5 "PLAYLIST_URL"

# 1~5번째 동영상 다운로드
yt-dlp --playlist-items 1-5 "PLAYLIST_URL"

# 1~3번째와 7번째 동영상 다운로드
yt-dlp --playlist-items 1-3,7 "PLAYLIST_URL"
```

### --match-title REGEX

제목이 정규 표현식과 일치하는 동영상만 다운로드합니다.

```bash
# 제목에 "tutorial"이 포함된 동영상 다운로드
yt-dlp --match-title "tutorial" "PLAYLIST_URL"

# 정규 표현식 사용
yt-dlp --match-title "(?i)python|java" "PLAYLIST_URL"
```

### --reject-title REGEX

제목이 정규 표현식과 일치하는 동영상을 건너뜁니다.

```bash
# 제목에 "trailer"가 포함된 동영상 건너뛰기
yt-dlp --reject-title "trailer" "PLAYLIST_URL"
```

### --max-downloads NUMBER

지정한 개수의 동영상을 다운로드한 후 중단합니다.

```bash
# 처음 5개 동영상만 다운로드
yt-dlp --max-downloads 5 "PLAYLIST_URL"
```

### --min-filesize SIZE

지정한 크기보다 작은 파일은 다운로드하지 않습니다.

```bash
# 10MB보다 작은 파일은 제외
yt-dlp --min-filesize 10M "URL"
```

### --max-filesize SIZE

지정한 크기보다 큰 파일은 다운로드하지 않습니다.

```bash
# 1GB보다 큰 파일은 제외
yt-dlp --max-filesize 1G "URL"
```

### --date DATE

특정 날짜에 업로드된 동영상만 다운로드합니다.

```bash
# 2024년 1월 1일 동영상 다운로드
yt-dlp --date 20240101 "URL"

# 2024년 1월 한 달간의 동영상 다운로드
yt-dlp --date 20240101-20240131 "URL"
```

### --datebefore DATE

지정한 날짜 이전에 업로드된 동영상을 다운로드합니다.

```bash
# 2024년 1월 1일 이전 동영상 다운로드
yt-dlp --datebefore 20240101 "URL"
```

### --dateafter DATE

지정한 날짜 이후에 업로드된 동영상을 다운로드합니다.

```bash
# 2024년 1월 1일 이후 동영상 다운로드
yt-dlp --dateafter 20240101 "URL"
```

## 다운로드 옵션

### -r, --limit-rate RATE

다운로드 속도를 제한합니다.

```bash
# 1MB/s로 제한
yt-dlp --limit-rate 1M "URL"

# 500KB/s로 제한
yt-dlp --limit-rate 500K "URL"

# 2.5MB/s로 제한
yt-dlp --limit-rate 2.5M "URL"
```

### -R, --retries RETRIES

재시도 횟수 (기본값은 10).

```bash
# 5번 재시도
yt-dlp --retries 5 "URL"

# 무한 재시도
yt-dlp --retries infinite "URL"
```

### --fragment-retries RETRIES

조각(fragment) 재시도 횟수.

```bash
yt-dlp --fragment-retries 10 "URL"
```

### --skip-unavailable-fragments

사용 불가능한 조각은 건너뜁니다.

```bash
yt-dlp --skip-unavailable-fragments "URL"
```

### --abort-on-unavailable-fragment

사용 불가능한 조각이 발견되면 다운로드를 중단합니다.

```bash
yt-dlp --abort-on-unavailable-fragment "URL"
```

### --keep-fragments

다운로드 완료 후에도 조각 파일을 유지합니다.

```bash
yt-dlp --keep-fragments "URL"
```

### --buffer-size SIZE

버퍼 크기를 설정합니다 (기본값은 1024).

```bash
yt-dlp --buffer-size 16K "URL"
```

### --no-resize-buffer

버퍼 크기를 자동으로 조정하지 않습니다.

```bash
yt-dlp --no-resize-buffer "URL"
```

### --http-chunk-size SIZE

HTTP 청크 크기를 설정합니다.

```bash
yt-dlp --http-chunk-size 1M "URL"
```

### --continue

중단된 다운로드를 이어받습니다 (기본 활성화).

```bash
yt-dlp --continue "URL"
```

### --no-continue

중단된 다운로드를 이어받지 않습니다.

```bash
yt-dlp --no-continue "URL"
```

## 파일 시스템 옵션

### -a, --batch-file FILE

다운로드할 URL 목록을 파일에서 읽어옵니다.

```bash
# urls.txt에서 URL 읽기
yt-dlp -a urls.txt

# 대량 다운로드
yt-dlp --batch-file urls.txt
```

### --id

동영상 ID만 파일명으로 사용합니다.

```bash
yt-dlp --id "URL"
```

### -o, --output TEMPLATE

출력 파일명 템플릿.

```bash
# 기본 사용법
yt-dlp -o "%(title)s.%(ext)s" "URL"

# 경로 포함
yt-dlp -o "~/Downloads/%(title)s.%(ext)s" "URL"

# 복잡한 명명 규칙
yt-dlp -o "%(uploader)s/%(upload_date)s - %(title)s.%(ext)s" "URL"

# 재생목록 번호 포함
yt-dlp -o "%(playlist_index)03d - %(title)s.%(ext)s" "PLAYLIST_URL"
```

### --output-na-placeholder PLACEHOLDER

필드 정보를 사용할 수 없을 때 사용할 대체 텍스트를 지정합니다.

```bash
yt-dlp -o "%(title)s.%(ext)s" --output-na-placeholder "Unknown" "URL"
```

### --autonumber-size NUMBER

자동 번호 매기기의 자릿수를 지정합니다.

```bash
yt-dlp -o "%(autonumber)03d-%(title)s.%(ext)s" --autonumber-size 3 "URL"
```

### --autonumber-start NUMBER

자동 번호 매기기의 시작 값을 지정합니다.

```bash
yt-dlp -o "%(autonumber)d-%(title)s.%(ext)s" --autonumber-start 100 "URL"
```

### --restrict-filenames

파일명에 ASCII 문자만 사용하도록 제한합니다.

```bash
yt-dlp --restrict-filenames "URL"
```

### --no-restrict-filenames

파일명에 유니코드 문자를 허용합니다 (기본값).

```bash
yt-dlp --no-restrict-filenames "URL"
```

### --windows-filenames

Windows와 호환되는 파일명을 강제합니다.

```bash
yt-dlp --windows-filenames "URL"
```

### --trim-filenames LENGTH

파일명의 최대 길이를 제한합니다.

```bash
# 파일명을 최대 100자로 제한
yt-dlp --trim-filenames 100 "URL"
```

### -w, --overwrite

이미 존재하는 파일을 덮어씁니다.

```bash
yt-dlp --overwrite "URL"
```

### --no-overwrites

기존 파일을 덮어쓰지 않습니다.

```bash
yt-dlp --no-overwrites "URL"
```

### --skip-download

동영상을 다운로드하지 않고 다른 작업(자막, 썸네일 다운로드 등)만 수행합니다.

```bash
yt-dlp --skip-download --write-subs "URL"
```

## 포맷 선택 옵션

### -f, --format FORMAT

동영상/오디오 포맷을 선택합니다.

```bash
# 최고 화질 다운로드
yt-dlp -f "bestvideo+bestaudio/best" "URL"

# 최고 화질 MP4 포맷 다운로드
yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]" "URL"

# 1080p 이하 최고 화질 다운로드
yt-dlp -f "bestvideo[height<=1080]+bestaudio/best[height<=1080]" "URL"

# 특정 해상도 다운로드
yt-dlp -f "bestvideo[height=720]+bestaudio/best[height=720]" "URL"

# 최소 용량 파일 다운로드
yt-dlp -f "worst" "URL"
```

### -S, --format-sort SORTORDER

지정한 우선순위에 따라 포맷을 정렬합니다.

```bash
# 해상도, 프레임수 순으로 우선순위 부여
yt-dlp -S "res,fps" "URL"

# MP4 포맷 우선순위 부여
yt-dlp -S "ext" "URL"

# 고해상도 우선순위 부여
yt-dlp -S "res:1080" "URL"
```

### --format-sort-force

더 나은 조합이 있더라도 강제로 지정한 정렬 방식을 사용합니다.

```bash
yt-dlp --format-sort-force -S "res" "URL"
```

### -F, --list-formats

사용 가능한 모든 포맷 목록을 출력합니다.

```bash
yt-dlp -F "URL"
```

### --merge-output-format FORMAT

병합된 결과물의 포맷을 지정합니다.

```bash
# MP4로 병합
yt-dlp --merge-output-format mp4 "URL"

# MKV로 병합
yt-dlp --merge-output-format mkv "URL"
```

## 자막 옵션

### --write-subs

자막을 다운로드합니다.

```bash
yt-dlp --write-subs "URL"
```

### --write-auto-subs

자동 생성된 자막을 다운로드합니다.

```bash
yt-dlp --write-auto-subs "URL"
```

### --all-subs

사용 가능한 모든 자막을 다운로드합니다.

```bash
yt-dlp --all-subs "URL"
```

### --sub-langs LANGS

다운로드할 자막 언어를 지정합니다.

```bash
# 한국어 자막 다운로드
yt-dlp --write-subs --sub-langs "ko" "URL"

# 영어 자막 다운로드
yt-dlp --write-subs --sub-langs "en" "URL"

# 여러 언어 다운로드
yt-dlp --write-subs --sub-langs "en,ko" "URL"

# 모든 자막 다운로드
yt-dlp --write-subs --sub-langs "all" "URL"

# 실시간 채팅 제외 모든 자막 다운로드
yt-dlp --write-subs --sub-langs "all,-live_chat" "URL"
```

### --sub-format FORMAT

자막 포맷 선호도를 지정합니다.

```bash
# SRT 포맷 우선
yt-dlp --sub-format srt --write-subs "URL"

# ASS 포맷 우선
yt-dlp --sub-format ass --write-subs "URL"
```

### --embed-subs

자막을 동영상 파일에 포함(임베드)합니다.

```bash
yt-dlp --embed-subs --sub-langs "ko" "URL"
```

## 오디오 옵션

### -x, --extract-audio

동영상을 오디오 파일로 변환합니다.

```bash
yt-dlp -x "URL"
```

### --audio-format FORMAT

오디오 포맷을 지정합니다.

```bash
# MP3로 변환
yt-dlp -x --audio-format mp3 "URL"

# AAC로 변환
yt-dlp -x --audio-format aac "URL"

# FLAC로 변환
yt-dlp -x --audio-format flac "URL"

# M4A로 변환
yt-dlp -x --audio-format m4a "URL"

# OPUS로 변환
yt-dlp -x --audio-format opus "URL"

# VORBIS로 변환
yt-dlp -x --audio-format vorbis "URL"

# WAV로 변환
yt-dlp -x --audio-format wav "URL"
```

### --audio-quality QUALITY

오디오 품질을 지정합니다.

```bash
# 최고 품질
yt-dlp -x --audio-format mp3 --audio-quality 0 "URL"

# 중간 품질
yt-dlp -x --audio-format mp3 --audio-quality 5 "URL"

# 최소 용량
yt-dlp -x --audio-format mp3 --audio-quality 9 "URL"

# 특정 비트레이트 지정
yt-dlp -x --audio-format mp3 --audio-quality 320K "URL"
```

## 동영상 옵션

### --recode-video FORMAT

동영상을 지정한 포맷으로 다시 인코딩합니다.

```bash
# MP4로 변환
yt-dlp --recode-video mp4 "URL"

# MKV로 변환
yt-dlp --recode-video mkv "URL"

# AVI로 변환
yt-dlp --recode-video avi "URL"
```

### --postprocessor-args ARGS

후처리기(post-processor)에 인자를 전달합니다.

```bash
# FFmpeg에 인자 전달
yt-dlp --postprocessor-args "ffmpeg:-crf 23" "URL"
```

### -k, --keep-video

중간 과정의 동영상 파일을 유지합니다.

```bash
yt-dlp --keep-video "URL"
```

## 썸네일 옵션

### --write-thumbnail

썸네일을 다운로드합니다.

```bash
yt-dlp --write-thumbnail "URL"
```

### --write-all-thumbnails

모든 포맷의 썸네일을 다운로드합니다.

```bash
yt-dlp --write-all-thumbnails "URL"
```

### --list-thumbnails

사용 가능한 모든 썸네일 목록을 출력합니다.

```bash
yt-dlp --list-thumbnails "URL"
```

### --embed-thumbnail

오디오 파일에 썸네일을 포함(임베드)합니다.

```bash
yt-dlp -x --audio-format mp3 --embed-thumbnail "URL"
```

## 메타데이터 옵션

### --write-description

동영상 설명을 다운로드합니다.

```bash
yt-dlp --write-description "URL"
```

### --write-info-json

동영상 메타데이터를 JSON 형식으로 다운로드합니다.

```bash
yt-dlp --write-info-json "URL"
```

### --write-annotations

동영상 주석을 다운로드합니다.

```bash
yt-dlp --write-annotations "URL"
```

### --embed-metadata

동영상 파일에 메타데이터를 포함(임베드)합니다.

```bash
yt-dlp --embed-metadata "URL"
```

### --add-metadata

동영상 파일에 메타데이터를 추가합니다.

```bash
yt-dlp --add-metadata "URL"
```

## 인증 옵션

### -u, --username USERNAME

인증용 사용자 이름입니다.

```bash
yt-dlp -u "username" -p "password" "URL"
```

### -p, --password PASSWORD

인증용 비밀번호입니다.

```bash
yt-dlp -u "username" -p "password" "URL"
```

### --two-factor TWO_FACTOR

2단계 인증 코드입니다.

```bash
yt-dlp -u "username" -p "password" --two-factor "123456" "URL"
```

### --video-password PASSWORD

비밀번호가 걸린 동영상의 비밀번호입니다.

```bash
yt-dlp --video-password "mypassword" "URL"
```

### --cookies FILE

인증을 위해 쿠키 파일을 사용합니다.

```bash
yt-dlp --cookies cookies.txt "URL"
```

### --cookies-from-browser BROWSER

브라우저에서 쿠키를 가져옵니다.

```bash
# Chrome에서 가져오기
yt-dlp --cookies-from-browser chrome "URL"

# Firefox에서 가져오기
yt-dlp --cookies-from-browser firefox "URL"

# Edge에서 가져오기
yt-dlp --cookies-from-browser edge "URL"

# Safari에서 가져오기
yt-dlp --cookies-from-browser safari "URL"

# Opera에서 가져오기
yt-dlp --cookies-from-browser opera "URL"

# Brave에서 가져오기
yt-dlp --cookies-from-browser brave "URL"

# 특정 프로필 지정
yt-dlp --cookies-from-browser "chrome:profile_name" "URL"
```

## 프록시 옵션

### --geo-verification-proxy URL

국가 제한을 확인하기 위해 이 프록시를 사용합니다.

```bash
yt-dlp --geo-verification-proxy "http://proxy.example.com:8080" "URL"
```

### --geo-bypass

국가 제한 우회를 시도합니다.

```bash
yt-dlp --geo-bypass "URL"
```

### --no-geo-bypass

국가 제한 우회를 시도하지 않습니다.

```bash
yt-dlp --no-geo-bypass "URL"
```

### --geo-bypass-country CODE

지정한 국가 코드를 사용하여 국가 제한 우회를 시도합니다.

```bash
# 미국 IP로 인식되도록 우회
yt-dlp --geo-bypass-country US "URL"

# 영국 IP로 인식되도록 우회
yt-dlp --geo-bypass-country GB "URL"

# 일본 IP로 인식되도록 우회
yt-dlp --geo-bypass-country JP "URL"
```

## 출력 옵션

### -q, --quiet

조용한 모드입니다.

```bash
yt-dlp -q "URL"
```

### --no-warnings

경고 메시지를 무시합니다.

```bash
yt-dlp --no-warnings "URL"
```

### -s, --simulate

다운로드를 시뮬레이션하며 실제 파일은 생성하지 않습니다.

```bash
yt-dlp --simulate "URL"
```

### --ignore-errors

다운로드 오류가 발생해도 계속 진행합니다.

```bash
yt-dlp --ignore-errors "URL"
```

### --no-ignore-errors

다운로드 오류가 발생하면 즉시 중단합니다 (기본값).

```bash
yt-dlp --no-ignore-errors "URL"
```

### --dump-json

동영상 정보를 JSON 형식으로 출력합니다.

```bash
yt-dlp --dump-json "URL"
```

### --print TEMPLATE

다운로드 없이 동영상 정보를 출력합니다.

```bash
# 제목 출력
yt-dlp --print "%(title)s" "URL"

# ID와 제목 출력
yt-dlp --print "%(id)s: %(title)s" "URL"

# 여러 필드 출력
yt-dlp --print "%(id)s\n%(title)s\n%(duration)s" "URL"
```

### -j, --dump-single-json

단일 동영상 정보를 JSON 형식으로 출력합니다 (다운로드 안 함).

```bash
yt-dlp -j "URL"
```

### --get-title

동영상 제목을 출력합니다.

```bash
yt-dlp --get-title "URL"
```

### --get-id

동영상 ID를 출력합니다.

```bash
yt-dlp --get-id "URL"
```

### --get-url

동영상 URL을 출력합니다.

```bash
yt-dlp --get-url "URL"
```

### --get-description

동영상 설명을 출력합니다.

```bash
yt-dlp --get-description "URL"
```

### --get-filename

파일명 정보를 출력합니다.

```bash
yt-dlp --get-filename "URL"
```

### --get-duration

동영상 길이를 출력합니다.

```bash
yt-dlp --get-duration "URL"
```

## 기타 옵션

### --exec CMD

다운로드 완료 후 특정 명령어를 실행합니다.

```bash
# 다운로드 후 동영상 재생
yt-dlp --exec "vlc {}" "URL"

# 다운로드 후 파일 이동
yt-dlp --exec "mv {} ~/Videos/" "URL"
```

### --convert-subs FORMAT

자막 포맷을 변환합니다.

```bash
# SRT로 변환
yt-dlp --write-subs --convert-subs srt "URL"

# ASS로 변환
yt-dlp --write-subs --convert-subs ass "URL"
```

### --concat-playlist

재생목록의 동영상들을 하나의 파일로 병합합니다.

```bash
yt-dlp --concat-playlist "PLAYLIST_URL"
```

### --config-locations PATH

사용자 정의 설정 파일 경로를 지정합니다.

```bash
yt-dlp --config-locations ~/.config/yt-dlp/custom_config "URL"
```

### --ignore-config

설정 파일을 무시합니다.

```bash
yt-dlp --ignore-config "URL"
```

## 요약

이상으로 yt-dlp의 주요 매개변수를 살펴보았습니다. 실제 사용 시에는 필요에 따라 여러 매개변수를 조합하여 사용할 수 있습니다. 제언:

1. 자주 사용하는 매개변수는 설정 파일에 저장하여 사용하세요.
2. 실제 다운로드 전에 `--simulate` 옵션으로 먼저 테스트해 보세요.
3. 공식 문서를 참조하여 더 많은 매개변수와 고급 사용법을 확인하세요.
4. 최신 기능과 수정을 위해 yt-dlp를 정기적으로 업데이트하세요.

더 자세한 정보는 다음을 참조하세요:

- [yt-dlp 공식 문서 (영어)](https://github.com/yt-dlp/yt-dlp#usage-and-options)
- [지원 사이트 목록 (영어)](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md)
