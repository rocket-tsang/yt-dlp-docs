---
title: yt-dlp Command-line Usage Tutorial - Complete Guide from Basic to Advanced
description: A complete tutorial on yt-dlp command-line usage, covering common scenarios such as video downloading, audio extraction, format selection, and subtitle downloading, with numerous practical examples.
meta:
  - name: keywords
    content: yt-dlp commands, yt-dlp usage tutorial, video download commands, YouTube download, Bilibili download, yt-dlp examples
---

# Command-line Usage

This chapter will introduce the basic command-line usage methods and common scenarios for yt-dlp.

## Basic Syntax

```bash
yt-dlp [OPTIONS] <URL>
```

## Simplest Usage

### Download a Video

```bash
yt-dlp "https://www.youtube.com/watch?v=VIDEO_ID"
```

This will automatically download the best quality version of the video.

### Download a Playlist

```bash
yt-dlp "https://www.youtube.com/playlist?list=PLAYLIST_ID"
```

## Common Commands

### 1. Specifying Download Path and Filename

Use the `-o` parameter:

```bash
# Specify filename
yt-dlp -o "my_video.mp4" "URL"

# Specify path and filename
yt-dlp -o "/path/to/video.mp4" "URL"

# Use variables
yt-dlp -o "%(title)s.%(ext)s" "URL"
yt-dlp -o "%(title)s-%(id)s.%(ext)s" "URL"
yt-dlp -o "~/Downloads/%(title)s.%(ext)s" "URL"
```

### Common Filename Variables

| Variable | Description |
|------|------|
| `%(id)s` | Video ID |
| `%(title)s` | Video Title |
| `%(ext)s` | File Extension |
| `%(uploader)s` | Uploader |
| `%(upload_date)s` | Upload Date |
| `%(resolution)s` | Resolution |
| `%(playlist_index)s` | Playlist Index |
| `%(playlist_title)s` | Playlist Title |

### 2. Selecting Video Quality

#### Download Best Quality

```bash
yt-dlp -f "bestvideo+bestaudio/best" "URL"
```

#### Download Specific Resolution

```bash
# Download 1080p video
yt-dlp -f "bestvideo[height<=1080]+bestaudio/best[height<=1080]" "URL"

# Download 720p video
yt-dlp -f "bestvideo[height<=720]+bestaudio/best[height<=720]" "URL"

# Download up to 480p video
yt-dlp -f "bestvideo[height<=480]+bestaudio/best[height<=480]" "URL"
```

#### List Available Formats

```bash
yt-dlp -F "URL"
```

This will list all available formats for the video along with their format IDs.

#### Download Specific Format

```bash
# Using format ID
yt-dlp -f 22 "URL"

# Download specific format
yt-dlp -f "mp4" "URL"
```

### 3. Downloading Audio

#### Download Audio Only (Best Quality)

```bash
yt-dlp -x --audio-format mp3 "URL"
```

#### Specify Audio Quality

```bash
yt-dlp -x --audio-format mp3 --audio-quality 0 "URL"  # Best quality
yt-dlp -x --audio-format mp3 --audio-quality 5 "URL"  # Medium quality
yt-dlp -x --audio-format mp3 --audio-quality 9 "URL"  # Smallest size
```

Audio quality range: 0 (best) to 9 (worst).

### 4. Downloading Subtitles

#### Download All Subtitles

```bash
yt-dlp --write-subs "URL"
```

#### Download Specific Language Subtitles

```bash
# Download Chinese subtitles
yt-dlp --write-subs --sub-langs "zh-Hans" "URL"

# Download English subtitles
yt-dlp --write-subs --sub-langs "en" "URL"

# Download multiple language subtitles
yt-dlp --write-subs --sub-langs "en,zh-Hans" "URL"

# Download all available subtitles
yt-dlp --write-subs --sub-langs "all" "URL"
```

#### Embed Subtitles into Video

```bash
yt-dlp --embed-subs --sub-langs "en" "URL"
```

### 5. Downloading Thumbnails

```bash
# Download thumbnail
yt-dlp --write-thumbnail "URL"

# Embed thumbnail into audio file
yt-dlp -x --audio-format mp3 --embed-thumbnail "URL"
```

### 6. Downloading Metadata

```bash
# Download metadata in JSON format
yt-dlp --write-info-json "URL"

# Download description file
yt-dlp --write-description "URL"
```

## Playlist Downloads

### Download Entire Playlist

```bash
yt-dlp "PLAYLIST_URL"
```

### Download Specific Videos from Playlist

```bash
# Download the 1st video
yt-dlp --playlist-items 1 "PLAYLIST_URL"

# Download videos 1 to 5
yt-dlp --playlist-items 1-5 "PLAYLIST_URL"

# Download videos 1, 3, and 5
yt-dlp --playlist-items 1,3,5 "PLAYLIST_URL"

# Download videos 1 to 3 and 7
yt-dlp --playlist-items 1-3,7 "PLAYLIST_URL"
```

### Limit Download Range

```bash
# Start downloading from the 5th video
yt-dlp --playlist-start 5 "PLAYLIST_URL"

# Stop downloading at the 10th video
yt-dlp --playlist-end 10 "PLAYLIST_URL"

# Download from the 5th to the 10th video
yt-dlp --playlist-start 5 --playlist-end 10 "PLAYLIST_URL"
```

### Reverse Playlist

```bash
# Start downloading from the last video
yt-dlp --playlist-reverse "PLAYLIST_URL"
```

## Download Control

### Rate Limited Download

```bash
# Limit speed to 1MB/s
yt-dlp --limit-rate 1M "URL"

# Limit speed to 500KB/s
yt-dlp --limit-rate 500K "URL"
```

### Concurrent Downloads

```bash
# Use 4 concurrent fragments
yt-dlp --concurrent-fragments 4 "URL"
```

### Resuming Downloads

```bash
yt-dlp --continue "URL"
```

### Skip Already Downloaded Files

```bash
# Skip download if file exists
yt-dlp --skip-download "URL"

# Do not overwrite existing files
yt-dlp --no-overwrites "URL"
```

## Batch Downloading

### Read URLs from File

Create a text file (e.g., `urls.txt`) with one URL per line:

```bash
yt-dlp -a urls.txt
```

### Batch Download Options

```bash
# Batch download and specify output format
yt-dlp -a urls.txt -o "%(playlist_index)s-%(title)s.%(ext)s"

# Batch download with concurrency limit
yt-dlp -a urls.txt --concurrent-fragments 4
```

## Proxy Settings

### HTTP/HTTPS Proxy

```bash
yt-dlp --proxy "http://127.0.0.1:8080" "URL"
yt-dlp --proxy "https://127.0.0.1:8080" "URL"
```

### SOCKS Proxy

```bash
yt-dlp --proxy "socks5://127.0.0.1:1080" "URL"
yt-dlp --proxy "socks5://user:password@127.0.0.1:1080" "URL"
```

## Authentication

### Username and Password

```bash
yt-dlp -u "username" -p "password" "URL"
```

### Using Cookies

#### Import Cookies from Browser

```bash
# Import from Chrome
yt-dlp --cookies-from-browser chrome "URL"

# Import from Firefox
yt-dlp --cookies-from-browser firefox "URL"

# Import from Safari
yt-dlp --cookies-from-browser safari "URL"
```

#### Use Cookie File

```bash
yt-dlp --cookies cookies.txt "URL"
```

## Site-Specific Downloads

### YouTube

```bash
# Download YouTube video
yt-dlp "https://www.youtube.com/watch?v=VIDEO_ID"

# Download YouTube playlist
yt-dlp "https://www.youtube.com/playlist?list=PLAYLIST_ID"

# Download all videos from a YouTube channel
yt-dlp "https://www.youtube.com/@ChannelName/videos"

# Download YouTube live stream
yt-dlp --live-from-start "https://www.youtube.com/watch?v=LIVE_ID"
```

### Bilibili

```bash
# Download Bilibili video
yt-dlp "https://www.bilibili.com/video/BV_ID"

# Download Bilibili anime/show
yt-dlp "https://www.bilibili.com/bangumi/play/EP_ID"

# Download all videos from a Bilibili user
yt-dlp "https://space.bilibili.com/USER_ID"
```

### Twitter/X

```bash
# Download Twitter video
yt-dlp "https://twitter.com/user/status/TWEET_ID"

# Download X video
yt-dlp "https://x.com/user/status/TWEET_ID"
```

### Instagram

```bash
# Download Instagram video
yt-dlp "https://www.instagram.com/p/POST_ID"

# Download Instagram Reels
yt-dlp "https://www.instagram.com/reel/REEL_ID"
```

### TikTok

```bash
# Download TikTok video
yt-dlp "https://www.tiktok.com/@user/video/VIDEO_ID"
```

## Simulation and Testing

### Simulate Download (No Actual Download)

```bash
yt-dlp --simulate "URL"
```

### View Video Information

```bash
# View information in JSON format
yt-dlp --dump-json "URL"

# View brief information
yt-dlp --get-title "URL"
yt-dlp --get-id "URL"
yt-dlp --get-description "URL"
yt-dlp --get-duration "URL"
```

### List Formats Without Downloading

```bash
yt-dlp -F "URL"
```

## Quiet and Verbose Output

### Quiet Mode

```bash
# Show no output
yt-dlp -q "URL"

# Show only errors
yt-dlp --no-warnings "URL"
```

### Verbose Mode

```bash
# Show detailed output
yt-dlp -v "URL"

# Show debug information
yt-dlp --verbose "URL"
```

## Practical Tips

### 1. Combining Multiple Options

```bash
# Download best quality, save to specific path, embed subtitles and thumbnail
yt-dlp -f "bestvideo+bestaudio/best" \
  -o "~/Videos/%(title)s.%(ext)s" \
  --write-subs --sub-langs "en" \
  --embed-subs \
  --write-thumbnail \
  --embed-thumbnail \
  "URL"
```

### 2. Using Config Files to Simplify Commands

Set common options in a config file, then:

```bash
# Use config file
yt-dlp --config-location /path/to/config "URL"

# Ignore config file
yt-dlp --ignore-config "URL"
```

### 3. Download Speed Optimization

```bash
# Use multi-threaded downloading
yt-dlp --concurrent-fragments 4 \
  --buffersize 16K \
  "URL"
```

## Next Steps

- Check [Parameters Detailed](/en/params/) for all available parameters
- Check [Supported Sites](/en/sites/) for the list of supported websites
- Check [Technical Practice](/en/practice/) for real-world application scenarios
