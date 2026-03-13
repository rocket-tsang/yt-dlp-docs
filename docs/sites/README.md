---
title: yt-dlp 支持网站列表 - YouTube/Bilibili/Twitter 等 1000+ 网站
description: yt-dlp 支持 YouTube、Bilibili、Twitter、Instagram 等 1000+ 视频网站，详细介绍各网站支持的功能和使用注意事项。
meta:
  - name: keywords
    content: yt-dlp支持网站,YouTube下载,Bilibili下载,Twitter下载,Instagram下载,视频网站列表
---

# 支持网站列表

yt-dlp 支持超过 1000+ 个视频网站，本章将介绍一些常用的支持网站及其使用注意事项。

## 主要视频网站

### YouTube

YouTube 是 yt-dlp 支持最完善的网站之一。

#### 支持的功能
- ✅ 视频下载（所有分辨率）
- ✅ 播放列表下载
- ✅ 频道下载
- ✅ 直播下载
- ✅ 字幕下载（包括自动生成字幕）
- ✅ 缩略图下载
- ✅ 评论区下载
- ✅ 会员专属视频（需要登录）

#### 使用示例

```bash
# 下载单个视频
yt-dlp "https://www.youtube.com/watch?v=VIDEO_ID"

# 下载最佳质量
yt-dlp -f "bestvideo+bestaudio/best" "https://www.youtube.com/watch?v=VIDEO_ID"

# 下载播放列表
yt-dlp "https://www.youtube.com/playlist?list=PLAYLIST_ID"

# 下载频道所有视频
yt-dlp "https://www.youtube.com/@ChannelName/videos"

# 下载直播
yt-dlp --live-from-start "https://www.youtube.com/watch?v=LIVE_ID"

# 下载字幕
yt-dlp --write-subs --sub-langs "zh-Hans,en" "https://www.youtube.com/watch?v=VIDEO_ID"
```

### Bilibili（哔哩哔哩）

国内最流行的视频网站之一。

#### 支持的功能
- ✅ 视频下载
- ✅ 番剧下载
- ✅ 播放列表下载
- ✅ UP 主视频下载
- ✅ 字幕下载
- ✅ 弹幕下载（部分支持）

#### 使用示例

```bash
# 下载普通视频
yt-dlp "https://www.bilibili.com/video/BV_ID"

# 下载番剧
yt-dlp "https://www.bilibili.com/bangumi/play/EP_ID"

# 下载 UP 主所有视频
yt-dlp "https://space.bilibili.com/USER_ID"

# 下载收藏夹
yt-dlp "https://space.bilibili.com/USER_ID/favlist?fid=FAV_ID"

# 指定画质
yt-dlp -f "bestvideo[height<=1080]+bestaudio" "https://www.bilibili.com/video/BV_ID"
```

### Twitter/X

#### 支持的功能
- ✅ 视频下载
- ✅ GIF 下载
- ✅ 图片下载
- ✅ 推文线程下载

#### 使用示例

```bash
# 下载 Twitter 视频
yt-dlp "https://twitter.com/user/status/TWEET_ID"

# 下载 X 视频
yt-dlp "https://x.com/user/status/TWEET_ID"

# 下载推文中的所有媒体
yt-dlp "https://twitter.com/user/status/TWEET_ID"
```

### Instagram

#### 支持的功能
- ✅ 视频下载
- ✅ 图片下载
- ✅ Reels 下载
- ✅ Stories 下载（需要登录）
- ✅ IGTV 下载

#### 使用示例

```bash
# 下载 Instagram 视频
yt-dlp "https://www.instagram.com/p/POST_ID"

# 下载 Reels
yt-dlp "https://www.instagram.com/reel/REEL_ID"

# 下载 Stories（需要登录）
yt-dlp -u "username" -p "password" "https://www.instagram.com/stories/username"

# 下载 IGTV
yt-dlp "https://www.instagram.com/tv/TV_ID"
```

### TikTok

#### 支持的功能
- ✅ 视频下载
- ✅ 无水印下载
- ✅ 图片下载
- ✅ 播放列表下载

#### 使用示例

```bash
# 下载 TikTok 视频
yt-dlp "https://www.tiktok.com/@user/video/VIDEO_ID"

# 下载无水印视频
yt-dlp "https://www.tiktok.com/@user/video/VIDEO_ID"

# 下载 TikTok 播放列表
yt-dlp "https://www.tiktok.com/@user"
```

## 其他热门网站

### Vimeo

专业视频平台。

```bash
# 下载 Vimeo 视频
yt-dlp "https://vimeo.com/VIDEO_ID"

# 下载密码保护的视频
yt-dlp --video-password "password" "https://vimeo.com/VIDEO_ID"
```

### Facebook

```bash
# 下载 Facebook 视频
yt-dlp "https://www.facebook.com/watch?v=VIDEO_ID"

# 下载 Reels
yt-dlp "https://www.facebook.com/reel/REEL_ID"
```

### Twitch

游戏直播平台。

```bash
# 下载 Twitch 视频
yt-dlp "https://www.twitch.tv/videos/VIDEO_ID"

# 下载直播
yt-dlp "https://www.twitch.tv/CHANNEL_NAME"

# 下载剪辑
yt-dlp "https://www.twitch.tv/clip/CLIP_ID"
```

### Dailymotion

```bash
yt-dlp "https://www.dailymotion.com/video/VIDEO_ID"
```

### Reddit

```bash
# 下载 Reddit 视频
yt-dlp "https://www.reddit.com/r/subreddit/comments/POST_ID"
```

### Pornhub

```bash
# 下载视频
yt-dlp "https://www.pornhub.com/view_video.php?viewkey=VIDEO_ID"

# 下载需要登录的视频
yt-dlp --cookies-from-browser chrome "https://www.pornhub.com/view_video.php?viewkey=VIDEO_ID"
```

## 国内视频网站

### 优酷

```bash
yt-dlp "https://v.youku.com/v_show/id_VIDEO_ID.html"
```

### 腾讯视频

```bash
yt-dlp "https://v.qq.com/x/page/VIDEO_ID.html"
```

### 爱奇艺

```bash
yt-dlp "https://www.iqiyi.com/v_VIDEO_ID.html"
```

### 芒果TV

```bash
yt-dlp "https://www.mgtv.com/b/VIDEO_ID.html"
```

### 搜狐视频

```bash
yt-dlp "https://tv.sohu.com/v/VIDEO_ID.html"
```

### 酷燃视频

```bash
yt-dlp "https://www.kur.cn/video/VIDEO_ID"
```

## 音乐网站

### SoundCloud

```bash
# 下载音频
yt-dlp "https://soundcloud.com/user/track"

# 下载播放列表
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

### 网易云音乐

```bash
yt-dlp "https://music.163.com/song?id=SONG_ID"
```

### QQ音乐

```bash
yt-dlp "https://y.qq.com/n/ryqq/songDetail/SONG_ID"
```

## 社交媒体网站

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

## 新闻媒体网站

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

## 教育网站

### Coursera

```bash
# 需要登录
yt-dlp -u "username" -p "password" "https://www.coursera.org/learn/course"
```

### Udemy

```bash
# 需要登录
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

## 其他网站

### TED

```bash
yt-dlp "https://www.ted.com/talks/talk_name"
```

### TED Talks

```bash
yt-dlp "https://www.ted.com/talks/speaker_talk_title"
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

## 查看完整支持列表

要查看 yt-dlp 支持的所有网站列表，可以使用以下命令：

```bash
# 列出所有支持的网站
yt-dlp --list-extractors

# 列出支持的提取器描述
yt-dlp --extractor-descriptions
```

或者访问：

- [GitHub 支持网站列表](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md)

## 注意事项

### 1. 网站变更

网站可能会更新其页面结构或 API，导致 yt-dlp 无法正常工作。遇到问题时：

1. 更新 yt-dlp 到最新版本
2. 查看 GitHub Issues 是否有相关问题
3. 尝试使用 `--verbose` 参数查看详细错误信息

### 2. 地理限制

某些视频可能有地理限制，可以通过以下方式解决：

```bash
# 使用代理
yt-dlp --proxy "socks5://127.0.0.1:1080" "URL"

# 使用地理限制绕过
yt-dlp --geo-bypass "URL"

# 指定国家
yt-dlp --geo-bypass-country US "URL"
```

### 3. 登录要求

某些内容需要登录才能访问：

```bash
# 使用用户名和密码
yt-dlp -u "username" -p "password" "URL"

# 使用浏览器 Cookie
yt-dlp --cookies-from-browser chrome "URL"

# 使用 Cookie 文件
yt-dlp --cookies cookies.txt "URL"
```

### 4. 下载限制

某些网站可能有下载限制：

```bash
# 降低下载速度
yt-dlp --limit-rate 1M "URL"

# 增加重试次数
yt-dlp --retries 10 "URL"

# 使用延迟
yt-dlp --sleep-interval 5 "URL"
```

### 5. 版权问题

请遵守版权法和网站的使用条款：

- 仅下载你有权下载的内容
- 不要用于商业目的（除非获得授权）
- 尊重内容创作者的权益

## 贡献新网站支持

如果你发现某个网站不被支持，可以：

1. 在 [GitHub Issues](https://github.com/yt-dlp/yt-dlp/issues) 中提交请求
2. 提供网站 URL 和详细信息
3. 甚至可以自己开发提取器并提交 Pull Request

## 下一步

- 查看[技术实战](/practice/)了解实际使用案例
- 查看[参数详解](/params/)了解如何优化下载