---
title: yt-dlp Supported Sites List - YouTube/Bilibili/Twitter and 1000+ More
description: yt-dlp supports over 1000 video websites including YouTube, Bilibili, Twitter, and Instagram. Detailed introduction to supported features and usage precautions for each site.
meta:
  - name: keywords
    content: yt-dlp supported sites, YouTube downloader, Bilibili downloader, Twitter downloader, Instagram downloader, video site list
---

# Supported Sites List

yt-dlp supports over 1000+ video websites. This chapter introduces some commonly used supported sites and their usage precautions.

## Major Video Sites

### YouTube

YouTube is one of the most well-supported sites in yt-dlp.

#### Supported Features
- ✅ Video downloading (all resolutions)
- ✅ Playlist downloading
- ✅ Channel downloading
- ✅ Live stream downloading
- ✅ Subtitle downloading (including auto-generated)
- ✅ Thumbnail downloading
- ✅ Comment section downloading
- ✅ Member-only videos (requires login)

#### Usage Examples

```bash
# Download a single video
yt-dlp "https://www.youtube.com/watch?v=VIDEO_ID"

# Download in best quality
yt-dlp -f "bestvideo+bestaudio/best" "https://www.youtube.com/watch?v=VIDEO_ID"

# Download a playlist
yt-dlp "https://www.youtube.com/playlist?list=PLAYLIST_ID"

# Download all videos from a channel
yt-dlp "https://www.youtube.com/@ChannelName/videos"

# Download a live stream
yt-dlp --live-from-start "https://www.youtube.com/watch?v=LIVE_ID"

# Download subtitles
yt-dlp --write-subs --sub-langs "en,zh-Hans" "https://www.youtube.com/watch?v=VIDEO_ID"
```

### Bilibili

One of the most popular video sites in China.

#### Supported Features
- ✅ Video downloading
- ✅ Anime/Show downloading
- ✅ Playlist downloading
- ✅ Uploader video downloading
- ✅ Subtitle downloading
- ✅ Danmaku (bullet chat) downloading (partial support)

#### Usage Examples

```bash
# Download a regular video
yt-dlp "https://www.bilibili.com/video/BV_ID"

# Download an anime/show
yt-dlp "https://www.bilibili.com/bangumi/play/EP_ID"

# Download all videos from an uploader
yt-dlp "https://space.bilibili.com/USER_ID"

# Download a favorite list
yt-dlp "https://space.bilibili.com/USER_ID/favlist?fid=FAV_ID"

# Specify quality
yt-dlp -f "bestvideo[height<=1080]+bestaudio" "https://www.bilibili.com/video/BV_ID"
```

### Twitter/X

#### Supported Features
- ✅ Video downloading
- ✅ GIF downloading
- ✅ Image downloading
- ✅ Tweet thread downloading

#### Usage Examples

```bash
# Download Twitter video
yt-dlp "https://twitter.com/user/status/TWEET_ID"

# Download X video
yt-dlp "https://x.com/user/status/TWEET_ID"

# Download all media in a tweet
yt-dlp "https://twitter.com/user/status/TWEET_ID"
```

### Instagram

#### Supported Features
- ✅ Video downloading
- ✅ Image downloading
- ✅ Reels downloading
- ✅ Stories downloading (requires login)
- ✅ IGTV downloading

#### Usage Examples

```bash
# Download Instagram video
yt-dlp "https://www.instagram.com/p/POST_ID"

# Download Reels
yt-dlp "https://www.instagram.com/reel/REEL_ID"

# Download Stories (requires login)
yt-dlp -u "username" -p "password" "https://www.instagram.com/stories/username"

# Download IGTV
yt-dlp "https://www.instagram.com/tv/TV_ID"
```

### TikTok

#### Supported Features
- ✅ Video downloading
- ✅ No-watermark downloading
- ✅ Image downloading
- ✅ Playlist downloading

#### Usage Examples

```bash
# Download TikTok video
yt-dlp "https://www.tiktok.com/@user/video/VIDEO_ID"

# Download no-watermark video
yt-dlp "https://www.tiktok.com/@user/video/VIDEO_ID"

# Download TikTok playlist
yt-dlp "https://www.tiktok.com/@user"
```

## Other Popular Sites

### Vimeo

Professional video platform.

```bash
# Download Vimeo video
yt-dlp "https://vimeo.com/VIDEO_ID"

# Download password-protected video
yt-dlp --video-password "password" "https://vimeo.com/VIDEO_ID"
```

### Facebook

```bash
# Download Facebook video
yt-dlp "https://www.facebook.com/watch?v=VIDEO_ID"

# Download Reels
yt-dlp "https://www.facebook.com/reel/REEL_ID"
```

### Twitch

Gaming live stream platform.

```bash
# Download Twitch video
yt-dlp "https://www.twitch.tv/videos/VIDEO_ID"

# Download live stream
yt-dlp "https://www.twitch.tv/CHANNEL_NAME"

# Download clips
yt-dlp "https://www.twitch.tv/clip/CLIP_ID"
```

### Dailymotion

```bash
yt-dlp "https://www.dailymotion.com/video/VIDEO_ID"
```

### Reddit

```bash
# Download Reddit video
yt-dlp "https://www.reddit.com/r/subreddit/comments/POST_ID"
```

### Pornhub

```bash
# Download video
yt-dlp "https://www.pornhub.com/view_video.php?viewkey=VIDEO_ID"

# Download video requiring login
yt-dlp --cookies-from-browser chrome "https://www.pornhub.com/view_video.php?viewkey=VIDEO_ID"
```

## Chinese Video Sites

### Youku

```bash
yt-dlp "https://v.youku.com/v_show/id_VIDEO_ID.html"
```

### Tencent Video

```bash
yt-dlp "https://v.qq.com/x/page/VIDEO_ID.html"
```

### iQIYI

```bash
yt-dlp "https://www.iqiyi.com/v_VIDEO_ID.html"
```

### MGTV (Mango TV)

```bash
yt-dlp "https://www.mgtv.com/b/VIDEO_ID.html"
```

### Sohu Video

```bash
yt-dlp "https://tv.sohu.com/v/VIDEO_ID.html"
```

## Music Sites

### SoundCloud

```bash
# Download audio
yt-dlp "https://soundcloud.com/user/track"

# Download playlist
yt-dlp "https://soundcloud.com/user/sets/playlist"
```

### Mixcloud

```bash
yt-dlp "https://www.mixcloud.com/user/show/"
```

### Bandcamp

```bash
yt-dlp "https://artist.bandcamp.com/track/song"
```

### NetEase Cloud Music

```bash
yt-dlp "https://music.163.com/song?id=SONG_ID"
```

### QQ Music

```bash
yt-dlp "https://y.qq.com/n/ryqq/songDetail/SONG_ID"
```

## Social Media Sites

### Pinterest

```bash
yt-dlp "https://www.pinterest.com/pin/PIN_ID"
```

### Tumblr

```bash
yt-dlp "https://user.tumblr.com/post/POST_ID"
```

### Snapchat

```bash
yt-dlp "https://www.snapchat.com/spotlight/SPOTLIGHT_ID"
```

## News Media Sites

### CNN

```bash
yt-dlp "https://www.cnn.com/videos/VIDEO_PATH"
```

### BBC

```bash
yt-dlp "https://www.bbc.com/news/av/VIDEO_ID"
```

### NBC

```bash
yt-dlp "https://www.nbcnews.com/video/VIDEO_ID"
```

## Educational Sites

### Coursera

```bash
# Requires login
yt-dlp -u "username" -p "password" "https://www.coursera.org/learn/course"
```

### Udemy

```bash
# Requires login
yt-dlp -u "username" -p "password" "https://www.udemy.com/course"
```

### edX

```bash
yt-dlp "https://www.edx.org/course/course-name"
```

### Khan Academy

```bash
yt-dlp "https://www.khanacademy.org/video/video-name"
```

## Other Sites

### TED

```bash
yt-dlp "https://www.ted.com/talks/talk_name"
```

### Streamable

```bash
yt-dlp "https://streamable.com/VIDEO_ID"
```

### Imgur

```bash
yt-dlp "https://imgur.com/gallery/IMAGE_ID"
```

### Gfycat

```bash
yt-dlp "https://gfycat.com/gfy-name"
```

## View Full Support List

To see the complete list of all sites supported by yt-dlp, you can use the following commands:

```bash
# List all supported sites
yt-dlp --list-extractors

# List supported extractor descriptions
yt-dlp --extractor-descriptions
```

Or visit:

- [GitHub Supported Sites List](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md)

## Precautions

### 1. Site Changes

Websites may update their page structure or API, which can cause yt-dlp to stop working properly. When encountering issues:

1. Update yt-dlp to the latest version.
2. Check GitHub Issues for similar problems.
3. Try using the `--verbose` parameter to see detailed error messages.

### 2. Geo-restrictions

Some videos may have geo-restrictions. These can be resolved by:

```bash
# Use a proxy
yt-dlp --proxy "socks5://127.0.0.1:1080" "URL"

# Use geo-bypass
yt-dlp --geo-bypass "URL"

# Specify a country
yt-dlp --geo-bypass-country US "URL"
```

### 3. Login Requirements

Certain content requires login to access:

```bash
# Use username and password
yt-dlp -u "username" -p "password" "URL"

# Use browser cookies
yt-dlp --cookies-from-browser chrome "URL"

# Use cookie file
yt-dlp --cookies cookies.txt "URL"
```

### 4. Download Limits

Some sites may have download restrictions:

```bash
# Lower download speed
yt-dlp --limit-rate 1M "URL"

# Increase retries
yt-dlp --retries 10 "URL"

# Use sleep interval
yt-dlp --sleep-interval 5 "URL"
```

### 5. Copyright Issues

Please comply with copyright laws and the website's terms of use:

- Only download content you have the right to download.
- Do not use for commercial purposes (unless authorized).
- Respect the rights of content creators.

## Contributing New Site Support

If you find a site that is not supported, you can:

1. Submit a request on [GitHub Issues](https://github.com/yt-dlp/yt-dlp/issues).
2. Provide the website URL and detailed information.
3. You can even develop an extractor yourself and submit a Pull Request.

## Next Steps

- Check [Technical Practice](/en/practice/) for real-world application cases.
- Check [Parameters Detailed](/en/params/) for how to optimize downloads.
