---
title: yt-dlp Technical Practice - Real-world Application Tutorials
description: yt-dlp technical practice tutorials covering real-world scenarios such as batch downloading playlists, downloading live streams, extracting audio, and more, with complete commands and scripts.
meta:
  - name: keywords
    content: yt-dlp practice, yt-dlp cases, yt-dlp tutorials, batch download videos, download playlists, extract audio
---

# Technical Practice

This chapter demonstrates various application scenarios of yt-dlp through practical cases.

## Case 1: Batch Downloading YouTube Playlists

### Scenario Description

You need to download a YouTube playlist containing 100 videos with the following requirements:
- Download videos in 1080p or lower resolution.
- Save to a specific folder.
- Filenames should include the index and title.
- Download subtitles (English preferred).
- Embed subtitles into the video.

### Solution

```bash
# Create download script
yt-dlp \
  -o "~/Downloads/YouTube/%(playlist_index)03d-%(title)s.%(ext)s" \
  -f "bestvideo[height<=1080]+bestaudio/best[height<=1080]" \
  --write-subs \
  --sub-langs "en,zh-Hans" \
  --embed-subs \
  --merge-output-format mp4 \
  "https://www.youtube.com/playlist?list=PLAYLIST_ID"
```

### Parameter Explanation

- `-o`: Specifies the output path and filename format.
- `-f`: Selects the best quality at 1080p or lower.
- `--write-subs`: Downloads subtitles.
- `--sub-langs`: Specifies subtitle languages (English prioritized).
- `--embed-subs`: Embeds subtitles into the video.
- `--merge-output-format`: Merges into MP4 format.

### Advanced: Using a Config File

Create a config file `~/.config/yt-dlp/config`:

```bash
# Default download path
-o ~/Downloads/YouTube/%(playlist_index)03d-%(title)s.%(ext)s

# Video quality
-f bestvideo[height<=1080]+bestaudio/best[height<=1080]

# Subtitle settings
--write-subs
--sub-langs en,zh-Hans
--embed-subs

# Output format
--merge-output-format mp4

# Ignore errors
--ignore-errors
```

Then run directly:

```bash
yt-dlp "PLAYLIST_URL"
```

## Case 2: Downloading Bilibili Shows/Anime

### Scenario Description

You need to download all episodes of a Bilibili show with the following requirements:
- Download in highest quality.
- Filenames should include the episode number.
- Skip already downloaded episodes.

### Solution

```bash
# Download show
yt-dlp \
  -o "~/Downloads/Anime/%(title)s/Ep%(episode_number)02d-%(episode)s.%(ext)s" \
  -f "bestvideo+bestaudio/best" \
  --no-overwrites \
  "https://www.bilibili.com/bangumi/play/EP_ID"
```

### Advanced: Batch Downloading Multiple Shows

Create `anime_urls.txt`:

```
https://www.bilibili.com/bangumi/play/EP_ID_1
https://www.bilibili.com/bangumi/play/EP_ID_2
https://www.bilibili.com/bangumi/play/EP_ID_3
```

Then run:

```bash
yt-dlp -a anime_urls.txt \
  -o "~/Downloads/Anime/%(title)s/Ep%(episode_number)02d.%(ext)s" \
  -f "bestvideo+bestaudio/best" \
  --no-overwrites
```

## Case 3: Downloading YouTube Music and Converting to MP3

### Scenario Description

You need to download YouTube music videos and convert them to high-quality MP3 format with the following requirements:
- Extract audio.
- Convert to 320kbps MP3.
- Embed thumbnail.
- Embed metadata.
- Filenames should include title and artist.

### Solution

```bash
# Download and convert to MP3
yt-dlp \
  -x \
  --audio-format mp3 \
  --audio-quality 0 \
  --embed-thumbnail \
  --add-metadata \
  -o "~/Music/%(title)s-%(uploader)s.%(ext)s" \
  "YOUTUBE_MUSIC_URL"
```

### Batch Downloading Playlists

```bash
# Download music playlist
yt-dlp \
  -x \
  --audio-format mp3 \
  --audio-quality 0 \
  --embed-thumbnail \
  --add-metadata \
  -o "~/Music/%(playlist_title)s/%(playlist_index)03d-%(title)s.%(ext)s" \
  "YOUTUBE_PLAYLIST_URL"
```

## Case 4: Downloading Content from Sites Requiring Login

### Scenario Description

You need to download Instagram Stories or other content that requires login.

### Solution 1: Using Browser Cookies

```bash
# Import cookies from Chrome
yt-dlp --cookies-from-browser chrome "INSTAGRAM_STORIES_URL"

# Import from Firefox
yt-dlp --cookies-from-browser firefox "INSTAGRAM_STORIES_URL"

# Import from Safari
yt-dlp --cookies-from-browser safari "INSTAGRAM_STORIES_URL"
```

### Solution 2: Using Username and Password

```bash
# Using username and password
yt-dlp -u "your_username" -p "your_password" "URL"
```

### Solution 3: Using a Cookie File

1. Export cookies using a browser extension (like "Get cookies.txt LOCALLY").
2. Save as `cookies.txt`.
3. Use the cookie file:

```bash
yt-dlp --cookies cookies.txt "URL"
```

## Case 5: Downloading Live Streams

### Scenario Description

You need to download live streams from YouTube or Twitch.

### Solution

### YouTube Live

```bash
# Download ongoing live stream
yt-dlp "https://www.youtube.com/watch?v=LIVE_ID"

# Download from the start of the live stream (requires membership)
yt-dlp --live-from-start "https://www.youtube.com/watch?v=LIVE_ID"
```

### Twitch Live

```bash
# Download ongoing live stream
yt-dlp "https://www.twitch.tv/CHANNEL_NAME"

# Download live VOD (Video on Demand)
yt-dlp "https://www.twitch.tv/videos/VIDEO_ID"
```

### Advanced: Recording Live Stream and Converting to MP4

```bash
# Record live stream
yt-dlp \
  -o "~/Downloads/Live/%(channel)s_%(timestamp)s.%(ext)s" \
  --hls-prefer-native \
  "https://www.twitch.tv/CHANNEL_NAME"

# Convert to MP4 (if needed)
ffmpeg -i input.ts -c copy output.mp4
```

## Case 6: Downloading Using a Proxy

### Scenario Description

You need to download geo-restricted content via a proxy.

### Solution

### Using SOCKS5 Proxy

```bash
yt-dlp --proxy "socks5://127.0.0.1:1080" "URL"

# Proxy with authentication
yt-dlp --proxy "socks5://username:password@proxy.example.com:1080" "URL"
```

### Using HTTP Proxy

```bash
yt-dlp --proxy "http://127.0.0.1:8080" "URL"
```

### Bypassing Geo-restrictions

```bash
# Using a specific country
yt-dlp --geo-bypass-country US "URL"
yt-dlp --geo-bypass-country JP "URL"
yt-dlp --geo-bypass-country GB "URL"
```

## Case 7: Downloading Specific Video Formats

### Scenario Description

You need to download a video in a specific format or codec.

### Solution

### View Available Formats

```bash
# List all available formats
yt-dlp -F "URL"
```

Example Output:
```
ID  EXT  RESOLUTION  FPS |   FILESIZE   TBR PROTO | VCODEC        VBR ACODEC      ABR
--- ---- ---------- ----- ------------- ----- ----- ----------- ------ ----------- -----
22  mp4  1280x720    30 | ≈ 150.00MiB  1500k https | avc1.64001F 1500k mp4a.40.2  128k
137 mp4  1920x1080   30 | ≈ 450.00MiB  4500k https | avc1.640028 4500k -           -
140 m4a  audio only      | ≈  12.00MiB   128k https | -              - mp4a.40.2  128k
...
```

### Download Specific Format

```bash
# Using format ID
yt-dlp -f 22 "URL"

# Download 1080p video and best audio
yt-dlp -f "137+140" "URL"

# Download best quality in MP4 format
yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]" "URL"

# Download VP9 encoded video
yt-dlp -f "bestvideo[vcodec=vp9]+bestaudio" "URL"
```

## Case 8: Creating a Personal Music Library

### Scenario Description

Download music from multiple sources and organize them into a library.

### Solution

### Create Config File

`~/.config/yt-dlp/music_config`:

```bash
# Audio settings
-x
--audio-format mp3
--audio-quality 0

# Metadata
--embed-thumbnail
--add-metadata

# Filename format
-o ~/Music/%(artist)s/%(album)s/%(track_number)02d-%(title)s.%(ext)s

# Ignore errors
--ignore-errors

# Concurrent downloads
--concurrent-fragments 4
```

### Download Script

```bash
#!/bin/bash

# Read URLs from file
while IFS= read -r url; do
  echo "Processing: $url"
  yt-dlp --config-location ~/.config/yt-dlp/music_config "$url"
done < music_urls.txt
```

## Case 9: Downloading and Translating Subtitles

### Scenario Description

You need to download subtitles for a video and translate them.

### Solution

### Download Subtitles

```bash
# Download subtitles only, no video
yt-dlp --skip-download --write-subs --sub-langs "en" "URL"

# Download all subtitles
yt-dlp --skip-download --write-subs --sub-langs "all" "URL"

# Download auto-generated subtitles
yt-dlp --skip-download --write-auto-subs "URL"
```

### Use Tools to Translate Subtitles

```bash
# Using Google Translate (requires translation tools installed)
for file in *.srt; do
  translate-shell -i "$file" -o "${file%.srt}_zh.srt" :zh
done
```

## Case 10: Automated Download Scripts

### Scenario Description

Create an automated script to regularly download the latest videos from specific channels or playlists.

### Solution

```bash
#!/bin/bash

# Configuration
CHANNEL_URL="https://www.youtube.com/@ChannelName/videos"
DOWNLOAD_DIR=~/Downloads/AutoDownload
LOG_FILE=~/Downloads/download.log

# Create directory
mkdir -p "$DOWNLOAD_DIR"

# Log time
echo "$(date): Starting download" >> "$LOG_FILE"

# Download latest 10 videos
yt-dlp \
  --playlist-end 10 \
  --no-overwrites \
  --dateafter $(date -d "7 days ago" +%Y%m%d) \
  -o "$DOWNLOAD_DIR/%(upload_date)s-%(title)s.%(ext)s" \
  -f "bestvideo[height<=1080]+bestaudio/best[height<=1080]" \
  --write-subs \
  --sub-langs "en,zh-Hans" \
  --embed-subs \
  --ignore-errors \
  "$CHANNEL_URL" >> "$LOG_FILE" 2>&1

echo "$(date): Download completed" >> "$LOG_FILE"
```

### Use Cron for Scheduling

Edit crontab:

```bash
crontab -e
```

Add a scheduled task (executes at 2 AM every day):

```
0 2 * * * /path/to/download_script.sh
```

## Case 11: Downloading and Compressing Videos

### Scenario Description

Compress downloaded videos to save space.

### Solution

```bash
# Download and compress
yt-dlp \
  -o "%(title)s.%(ext)s" \
  --postprocessor-args "ffmpeg:-crf 23 -preset medium" \
  "URL"
```

### Batch Compression of Downloaded Videos

```bash
# Create compression script
for file in *.mp4; do
  ffmpeg -i "$file" -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k "compressed_${file}"
done
```

## Case 12: Downloading Videos from a Specific Time Period

### Scenario Description

Download videos uploaded within a specific time range.

### Solution

```bash
# Download videos from January 2024
yt-dlp --date 20240101-20240131 "PLAYLIST_URL"

# Download videos from the last 7 days
yt-dlp --dateafter $(date -d "7 days ago" +%Y%m%d) "PLAYLIST_URL"

# Download all videos after 2024
yt-dlp --dateafter 20240101 "PLAYLIST_URL"
```

## Case 13: Downloading All Media from a Twitter/X Thread

### Scenario Description

Download all images and videos from a Twitter/X thread.

### Solution

```bash
# Download tweet thread
yt-dlp \
  -o "~/Downloads/Twitter/%(id)s-%(title)s.%(ext)s" \
  --write-description \
  "https://twitter.com/user/status/TWEET_ID"
```

## Case 14: Creating Backups

### Scenario Description

Backup all videos and metadata from a YouTube playlist or channel.

### Solution

```bash
# Create full backup
yt-dlp \
  -o "~/Backup/%(channel)s/%(upload_date)s-%(title)s.%(ext)s" \
  --write-info-json \
  --write-description \
  --write-thumbnail \
  --write-subs \
  --sub-langs "all" \
  --all-subs \
  -f "bestvideo+bestaudio/best" \
  "CHANNEL_URL"
```

## Case 15: Parallel Downloading

### Scenario Description

Increase download speed using parallel downloads.

### Solution

```bash
# Use aria2c as external downloader
yt-dlp \
  --external-downloader aria2c \
  --external-downloader-args "-x 16 -k 1M" \
  "URL"

# Or use yt-dlp's built-in concurrent fragment downloads
yt-dlp \
  --concurrent-fragments 4 \
  "URL"

# Multi-threading for batch downloads
yt-dlp \
  -a urls.txt \
  --concurrent-fragments 4 \
  -o "%(title)s.%(ext)s"
```

## Summary

The above cases demonstrate various real-world application scenarios for yt-dlp. By combining different parameters, you can meet various complex download requirements. Recommendations:

1. Use configuration files to save common parameters.
2. Use `--simulate` to test commands first.
3. Regularly update yt-dlp for new features.
4. Consult official documentation for more parameters and usage.

For more advanced usage and parameters, check [Parameters Detailed](/en/params/).
