---
title: yt-dlp Parameters Detailed - Complete Command-line Options Explanation
description: A complete explanation of yt-dlp command-line parameters, including detailed usage and examples for video selection, download control, network settings, authentication, and more.
meta:
  - name: keywords
    content: yt-dlp parameters, yt-dlp options, yt-dlp command-line parameters, yt-dlp configuration, video download parameters
---

# Parameters Detailed

This chapter provides a detailed introduction to various command-line parameters of yt-dlp and their usage.

## General Options

### -h, --help

Display help information and exit.

```bash
yt-dlp --help
```

### --version

Display the version number and exit.

```bash
yt-dlp --version
```

### -U, --update

Update yt-dlp to the latest version.

```bash
yt-dlp -U
```

### --no-update

Do not check for updates (required for some installation methods).

```bash
yt-dlp --no-update "URL"
```

## Network Options

### --proxy URL

Use the specified proxy server.

```bash
# HTTP proxy
yt-dlp --proxy "http://127.0.0.1:8080" "URL"

# HTTPS proxy
yt-dlp --proxy "https://127.0.0.1:8080" "URL"

# SOCKS5 proxy
yt-dlp --proxy "socks5://127.0.0.1:1080" "URL"

# Proxy with authentication
yt-dlp --proxy "socks5://user:password@127.0.0.1:1080" "URL"
```

### --socket-timeout SECONDS

Set the socket timeout in seconds.

```bash
yt-dlp --socket-timeout 30 "URL"
```

### --source-address IP

Set the client IP address.

```bash
yt-dlp --source-address 192.168.1.100 "URL"
```

### --force-ipv4

Force the use of IPv4.

```bash
yt-dlp --force-ipv4 "URL"
```

### --force-ipv6

Force the use of IPv6.

```bash
yt-dlp --force-ipv6 "URL"
```

## Video Selection Options

### --playlist-start NUMBER

Specify the starting position of the playlist (default is 1).

```bash
# Start downloading from the 5th video
yt-dlp --playlist-start 5 "PLAYLIST_URL"
```

### --playlist-end NUMBER

Specify the ending position of the playlist (default is the last).

```bash
# Download up to the 10th video
yt-dlp --playlist-end 10 "PLAYLIST_URL"
```

### --playlist-items ITEM_SPEC

Specify the items in the playlist to download.

```bash
# Download the 1st, 3rd, and 5th videos
yt-dlp --playlist-items 1,3,5 "PLAYLIST_URL"

# Download videos 1 to 5
yt-dlp --playlist-items 1-5 "PLAYLIST_URL"

# Download videos 1 to 3 and 7
yt-dlp --playlist-items 1-3,7 "PLAYLIST_URL"
```

### --match-title REGEX

Download videos with titles matching a regular expression.

```bash
# Download videos with "tutorial" in the title
yt-dlp --match-title "tutorial" "PLAYLIST_URL"

# Use regular expression
yt-dlp --match-title "(?i)python|java" "PLAYLIST_URL"
```

### --reject-title REGEX

Skip videos with titles matching a regular expression.

```bash
# Skip videos with "trailer" in the title
yt-dlp --reject-title "trailer" "PLAYLIST_URL"
```

### --max-downloads NUMBER

Stop after downloading a specified number of videos.

```bash
# Download only the first 5 videos
yt-dlp --max-downloads 5 "PLAYLIST_URL"
```

### --min-filesize SIZE

Do not download files smaller than a specified size.

```bash
# Do not download files smaller than 10MB
yt-dlp --min-filesize 10M "URL"
```

### --max-filesize SIZE

Do not download files larger than a specified size.

```bash
# Do not download files larger than 1GB
yt-dlp --max-filesize 1G "URL"
```

### --date DATE

Download videos uploaded on a specific date.

```bash
# Download videos from January 1, 2024
yt-dlp --date 20240101 "URL"

# Download videos from January 2024
yt-dlp --date 20240101-20240131 "URL"
```

### --datebefore DATE

Download videos uploaded before a specific date.

```bash
# Download videos uploaded before January 1, 2024
yt-dlp --datebefore 20240101 "URL"
```

### --dateafter DATE

Download videos uploaded after a specific date.

```bash
# Download videos uploaded after January 1, 2024
yt-dlp --dateafter 20240101 "URL"
```

## Download Options

### -r, --limit-rate RATE

Limit the download speed.

```bash
# Limit to 1MB/s
yt-dlp --limit-rate 1M "URL"

# Limit to 500KB/s
yt-dlp --limit-rate 500K "URL"

# Limit to 2.5MB/s
yt-dlp --limit-rate 2.5M "URL"
```

### -R, --retries RETRIES

Number of retries (default is 10).

```bash
# Retry 5 times
yt-dlp --retries 5 "URL"

# Infinite retries
yt-dlp --retries infinite "URL"
```

### --fragment-retries RETRIES

Number of fragment retries.

```bash
yt-dlp --fragment-retries 10 "URL"
```

### --skip-unavailable-fragments

Skip unavailable fragments.

```bash
yt-dlp --skip-unavailable-fragments "URL"
```

### --abort-on-unavailable-fragment

Abort download if an unavailable fragment is encountered.

```bash
yt-dlp --abort-on-unavailable-fragment "URL"
```

### --keep-fragments

Keep fragments after download is complete.

```bash
yt-dlp --keep-fragments "URL"
```

### --buffer-size SIZE

Set the buffer size (default is 1024).

```bash
yt-dlp --buffer-size 16K "URL"
```

### --no-resize-buffer

Do not automatically resize the buffer.

```bash
yt-dlp --no-resize-buffer "URL"
```

### --http-chunk-size SIZE

Set the HTTP chunk size.

```bash
yt-dlp --http-chunk-size 1M "URL"
```

### --continue

Resume interrupted downloads (enabled by default).

```bash
yt-dlp --continue "URL"
```

### --no-continue

Do not resume interrupted downloads.

```bash
yt-dlp --no-continue "URL"
```

## File System Options

### -a, --batch-file FILE

Read URLs to download from a file.

```bash
# Read URLs from urls.txt
yt-dlp -a urls.txt

# Batch download
yt-dlp --batch-file urls.txt
```

### --id

Use only the video ID as the filename.

```bash
yt-dlp --id "URL"
```

### -o, --output TEMPLATE

Output filename template.

```bash
# Basic usage
yt-dlp -o "%(title)s.%(ext)s" "URL"

# Include path
yt-dlp -o "~/Downloads/%(title)s.%(ext)s" "URL"

# Complex naming
yt-dlp -o "%(uploader)s/%(upload_date)s - %(title)s.%(ext)s" "URL"

# Playlist indexing
yt-dlp -o "%(playlist_index)03d - %(title)s.%(ext)s" "PLAYLIST_URL"
```

### --output-na-placeholder PLACEHOLDER

Specify a placeholder when a field is unavailable.

```bash
yt-dlp -o "%(title)s.%(ext)s" --output-na-placeholder "Unknown" "URL"
```

### --autonumber-size NUMBER

Specify the number of digits for automatic numbering.

```bash
yt-dlp -o "%(autonumber)03d-%(title)s.%(ext)s" --autonumber-size 3 "URL"
```

### --autonumber-start NUMBER

Specify the starting value for automatic numbering.

```bash
yt-dlp -o "%(autonumber)d-%(title)s.%(ext)s" --autonumber-start 100 "URL"
```

### --restrict-filenames

Restrict filenames to only ASCII characters.

```bash
yt-dlp --restrict-filenames "URL"
```

### --no-restrict-filenames

Allow Unicode characters in filenames (default).

```bash
yt-dlp --no-restrict-filenames "URL"
```

### --windows-filenames

Force Windows-compatible filenames.

```bash
yt-dlp --windows-filenames "URL"
```

### --trim-filenames LENGTH

Limit filename length.

```bash
# Limit filename to a maximum of 100 characters
yt-dlp --trim-filenames 100 "URL"
```

### -w, --overwrite

Overwrite existing files.

```bash
yt-dlp --overwrite "URL"
```

### --no-overwrites

Do not overwrite existing files.

```bash
yt-dlp --no-overwrites "URL"
```

### --skip-download

Do not download the video, only perform other operations (like downloading subtitles, thumbnails, etc.).

```bash
yt-dlp --skip-download --write-subs "URL"
```

## Format Selection Options

### -f, --format FORMAT

Select video/audio format.

```bash
# Download best quality
yt-dlp -f "bestvideo+bestaudio/best" "URL"

# Download best MP4 format
yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]" "URL"

# Download 1080p or lower
yt-dlp -f "bestvideo[height<=1080]+bestaudio/best[height<=1080]" "URL"

# Download specific resolution
yt-dlp -f "bestvideo[height=720]+bestaudio/best[height=720]" "URL"

# Download smallest file
yt-dlp -f "worst" "URL"
```

### -S, --format-sort SORTORDER

Sort formats by specified order.

```bash
# Prioritize resolution, then file size
yt-dlp -S "res,fps" "URL"

# Prioritize MP4 format
yt-dlp -S "ext" "URL"

# Prioritize higher resolution
yt-dlp -S "res:1080" "URL"
```

### --format-sort-force

Force use of format sorting, even if higher quality combinations exist.

```bash
yt-dlp --format-sort-force -S "res" "URL"
```

### -F, --list-formats

List all available formats.

```bash
yt-dlp -F "URL"
```

### --merge-output-format FORMAT

Specify merged output format.

```bash
# Merge into MP4
yt-dlp --merge-output-format mp4 "URL"

# Merge into MKV
yt-dlp --merge-output-format mkv "URL"
```

## Subtitle Options

### --write-subs

Download subtitles.

```bash
yt-dlp --write-subs "URL"
```

### --write-auto-subs

Download auto-generated subtitles.

```bash
yt-dlp --write-auto-subs "URL"
```

### --all-subs

Download all available subtitles.

```bash
yt-dlp --all-subs "URL"
```

### --sub-langs LANGS

Specify subtitle languages to download.

```bash
# Download Chinese subtitles
yt-dlp --write-subs --sub-langs "zh-Hans" "URL"

# Download English subtitles
yt-dlp --write-subs --sub-langs "en" "URL"

# Download multiple languages
yt-dlp --write-subs --sub-langs "en,zh-Hans,zh-Hant" "URL"

# Download all subtitles
yt-dlp --write-subs --sub-langs "all" "URL"

# Download all subtitles (including auto-generated)
yt-dlp --write-subs --sub-langs "all,-live_chat" "URL"
```

### --sub-format FORMAT

Subtitle format preference.

```bash
# Prioritize SRT format
yt-dlp --sub-format srt --write-subs "URL"

# Prioritize ASS format
yt-dlp --sub-format ass --write-subs "URL"
```

### --embed-subs

Embed subtitles into the video file.

```bash
yt-dlp --embed-subs --sub-langs "en" "URL"
```

## Audio Options

### -x, --extract-audio

Convert video to audio file.

```bash
yt-dlp -x "URL"
```

### --audio-format FORMAT

Specify audio format.

```bash
# Convert to MP3
yt-dlp -x --audio-format mp3 "URL"

# Convert to AAC
yt-dlp -x --audio-format aac "URL"

# Convert to FLAC
yt-dlp -x --audio-format flac "URL"

# Convert to M4A
yt-dlp -x --audio-format m4a "URL"

# Convert to OPUS
yt-dlp -x --audio-format opus "URL"

# Convert to VORBIS
yt-dlp -x --audio-format vorbis "URL"

# Convert to WAV
yt-dlp -x --audio-format wav "URL"
```

### --audio-quality QUALITY

Specify audio quality.

```bash
# Best quality
yt-dlp -x --audio-format mp3 --audio-quality 0 "URL"

# Medium quality
yt-dlp -x --audio-format mp3 --audio-quality 5 "URL"

# Smallest size
yt-dlp -x --audio-format mp3 --audio-quality 9 "URL"

# Specify bitrate
yt-dlp -x --audio-format mp3 --audio-quality 320K "URL"
```

## Video Options

### --recode-video FORMAT

Recode video to specified format.

```bash
# Convert to MP4
yt-dlp --recode-video mp4 "URL"

# Convert to MKV
yt-dlp --recode-video mkv "URL"

# Convert to AVI
yt-dlp --recode-video avi "URL"
```

### --postprocessor-args ARGS

Pass arguments to post-processors.

```bash
# Pass arguments to FFmpeg
yt-dlp --postprocessor-args "ffmpeg:-crf 23" "URL"
```

### -k, --keep-video

Keep intermediate video files.

```bash
yt-dlp --keep-video "URL"
```

## Thumbnail Options

### --write-thumbnail

Download thumbnail.

```bash
yt-dlp --write-thumbnail "URL"
```

### --write-all-thumbnails

Download thumbnails in all formats.

```bash
yt-dlp --write-all-thumbnails "URL"
```

### --list-thumbnails

List all available thumbnails.

```bash
yt-dlp --list-thumbnails "URL"
```

### --embed-thumbnail

Embed thumbnail into audio file.

```bash
yt-dlp -x --audio-format mp3 --embed-thumbnail "URL"
```

## Metadata Options

### --write-description

Download video description.

```bash
yt-dlp --write-description "URL"
```

### --write-info-json

Download video metadata in JSON format.

```bash
yt-dlp --write-info-json "URL"
```

### --write-annotations

Download video annotations.

```bash
yt-dlp --write-annotations "URL"
```

### --embed-metadata

Embed metadata into the video file.

```bash
yt-dlp --embed-metadata "URL"
```

### --add-metadata

Add metadata to the video file.

```bash
yt-dlp --add-metadata "URL"
```

## Authentication Options

### -u, --username USERNAME

Authentication username.

```bash
yt-dlp -u "username" -p "password" "URL"
```

### -p, --password PASSWORD

Authentication password.

```bash
yt-dlp -u "username" -p "password" "URL"
```

### --two-factor TWO_FACTOR

Two-factor authentication code.

```bash
yt-dlp -u "username" -p "password" --two-factor "123456" "URL"
```

### --video-password PASSWORD

Video password (for password-protected videos).

```bash
yt-dlp --video-password "mypassword" "URL"
```

### --cookies FILE

Use cookie file for authentication.

```bash
yt-dlp --cookies cookies.txt "URL"
```

### --cookies-from-browser BROWSER

Import cookies from browser.

```bash
# Import from Chrome
yt-dlp --cookies-from-browser chrome "URL"

# Import from Firefox
yt-dlp --cookies-from-browser firefox "URL"

# Import from Edge
yt-dlp --cookies-from-browser edge "URL"

# Import from Safari
yt-dlp --cookies-from-browser safari "URL"

# Import from Opera
yt-dlp --cookies-from-browser opera "URL"

# Import from Brave
yt-dlp --cookies-from-browser brave "URL"

# Specify profile
yt-dlp --cookies-from-browser "chrome:profile_name" "URL"
```

## Proxy Options

### --geo-verification-proxy URL

Use this proxy to verify geo-restrictions.

```bash
yt-dlp --geo-verification-proxy "http://proxy.example.com:8080" "URL"
```

### --geo-bypass

Bypass geo-restrictions.

```bash
yt-dlp --geo-bypass "URL"
```

### --no-geo-bypass

Do not bypass geo-restrictions.

```bash
yt-dlp --no-geo-bypass "URL"
```

### --geo-bypass-country CODE

Bypass geo-restrictions using a specified country.

```bash
# Use US IP
yt-dlp --geo-bypass-country US "URL"

# Use GB IP
yt-dlp --geo-bypass-country GB "URL"

# Use JP IP
yt-dlp --geo-bypass-country JP "URL"
```

## Output Options

### -q, --quiet

Quiet mode.

```bash
yt-dlp -q "URL"
```

### --no-warnings

Ignore warnings.

```bash
yt-dlp --no-warnings "URL"
```

### -s, --simulate

Simulate download, do not actually download files.

```bash
yt-dlp --simulate "URL"
```

### --ignore-errors

Ignore download errors.

```bash
yt-dlp --ignore-errors "URL"
```

### --no-ignore-errors

Do not ignore download errors (default).

```bash
yt-dlp --no-ignore-errors "URL"
```

### --dump-json

Output video information in JSON format.

```bash
yt-dlp --dump-json "URL"
```

### --print TEMPLATE

Print video information without downloading.

```bash
# Print title
yt-dlp --print "%(title)s" "URL"

# Print ID and title
yt-dlp --print "%(id)s: %(title)s" "URL"

# Print multiple fields
yt-dlp --print "%(id)s\n%(title)s\n%(duration)s" "URL"
```

### -j, --dump-single-json

Output single video information in JSON format (do not download).

```bash
yt-dlp -j "URL"
```

### --get-title

Print video title.

```bash
yt-dlp --get-title "URL"
```

### --get-id

Print video ID.

```bash
yt-dlp --get-id "URL"
```

### --get-url

Print video URL.

```bash
yt-dlp --get-url "URL"
```

### --get-description

Print video description.

```bash
yt-dlp --get-description "URL"
```

### --get-filename

Print filename.

```bash
yt-dlp --get-filename "URL"
```

### --get-duration

Print video duration.

```bash
yt-dlp --get-duration "URL"
```

## Other Options

### --exec CMD

Execute a command after download is complete.

```bash
# Play video after download
yt-dlp --exec "vlc {}" "URL"

# Move file after download
yt-dlp --exec "mv {} ~/Videos/" "URL"
```

### --convert-subs FORMAT

Convert subtitle format.

```bash
# Convert to SRT
yt-dlp --write-subs --convert-subs srt "URL"

# Convert to ASS
yt-dlp --write-subs --convert-subs ass "URL"
```

### --concat-playlist

Merge videos from a playlist into a single file.

```bash
yt-dlp --concat-playlist "PLAYLIST_URL"
```

### --config-locations PATH

Specify configuration file path.

```bash
yt-dlp --config-locations ~/.config/yt-dlp/custom_config "URL"
```

### --ignore-config

Ignore configuration files.

```bash
yt-dlp --ignore-config "URL"
```

## Summary

The above are the main parameters of yt-dlp. In practice, multiple parameters can be combined as needed. Recommendations:

1. Use configuration files to save commonly used parameters.
2. Test first with the `--simulate` parameter.
3. Consult official documentation for more parameters and usage.
4. Regularly update yt-dlp for the latest features and fixes.

For more parameters and detailed information, please refer to:

- [yt-dlp Official Documentation](https://github.com/yt-dlp/yt-dlp#usage-and-options)
- [List of Supported Sites](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md)
