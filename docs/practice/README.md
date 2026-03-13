---
title: yt-dlp 实战案例 - 真实场景应用教程
description: yt-dlp 实战案例教程，包括批量下载播放列表、下载直播视频、提取音频等真实场景，附带完整命令和脚本。
meta:
  - name: keywords
    content: yt-dlp实战,yt-dlp案例,yt-dlp教程,批量下载视频,下载播放列表,提取音频
---

# 技术实战

本章将通过实际案例展示 yt-dlp 的各种应用场景。

## 案例 1：批量下载 YouTube 播放列表

### 场景描述

需要下载一个包含 100 个视频的 YouTube 播放列表，要求：
- 下载 1080p 或更低分辨率的视频
- 保存到指定文件夹
- 文件名包含序号和标题
- 下载字幕（中文优先）
- 嵌入字幕到视频

### 解决方案

```bash
# 创建下载脚本
yt-dlp \
  -o "~/Downloads/YouTube/%(playlist_index)03d-%(title)s.%(ext)s" \
  -f "bestvideo[height<=1080]+bestaudio/best[height<=1080]" \
  --write-subs \
  --sub-langs "zh-Hans,zh-Hant,en" \
  --embed-subs \
  --merge-output-format mp4 \
  "https://www.youtube.com/playlist?list=PLAYLIST_ID"
```

### 参数说明

- `-o`: 指定输出路径和文件名格式
- `-f`: 选择 1080p 或更低分辨率的最佳质量
- `--write-subs`: 下载字幕
- `--sub-langs`: 指定字幕语言（优先中文）
- `--embed-subs`: 嵌入字幕到视频
- `--merge-output-format`: 合并为 MP4 格式

### 进阶：使用配置文件

创建配置文件 `~/.config/yt-dlp/config`:

```bash
# 默认下载路径
-o ~/Downloads/YouTube/%(playlist_index)03d-%(title)s.%(ext)s

# 视频质量
-f bestvideo[height<=1080]+bestaudio/best[height<=1080]

# 字幕设置
--write-subs
--sub-langs zh-Hans,zh-Hant,en
--embed-subs

# 输出格式
--merge-output-format mp4

# 忽略错误
--ignore-errors
```

然后直接运行：

```bash
yt-dlp "PLAYLIST_URL"
```

## 案例 2：下载 Bilibili 番剧

### 场景描述

需要下载一部 Bilibili 番剧的所有集数，要求：
- 下载最高画质
- 文件名包含集数
- 跳过已下载的集数

### 解决方案

```bash
# 下载番剧
yt-dlp \
  -o "~/Downloads/Anime/%(title)s/第%(episode_number)02d集-%(episode)s.%(ext)s" \
  -f "bestvideo+bestaudio/best" \
  --no-overwrites \
  "https://www.bilibili.com/bangumi/play/EP_ID"
```

### 进阶：批量下载多部番剧

创建 `anime_urls.txt`:

```
https://www.bilibili.com/bangumi/play/EP_ID_1
https://www.bilibili.com/bangumi/play/EP_ID_2
https://www.bilibili.com/bangumi/play/EP_ID_3
```

然后运行：

```bash
yt-dlp -a anime_urls.txt \
  -o "~/Downloads/Anime/%(title)s/第%(episode_number)02d集.%(ext)s" \
  -f "bestvideo+bestaudio/best" \
  --no-overwrites
```

## 案例 3：下载 YouTube 音乐并转换为 MP3

### 场景描述

需要下载 YouTube 音乐视频并转换为高质量的 MP3 格式，要求：
- 提取音频
- 转换为 320kbps MP3
- 嵌入缩略图
- 嵌入元数据
- 文件名包含标题和艺术家

### 解决方案

```bash
# 下载并转换为 MP3
yt-dlp \
  -x \
  --audio-format mp3 \
  --audio-quality 0 \
  --embed-thumbnail \
  --add-metadata \
  -o "~/Music/%(title)s-%(uploader)s.%(ext)s" \
  "YOUTUBE_MUSIC_URL"
```

### 批量下载播放列表

```bash
# 下载音乐播放列表
yt-dlp \
  -x \
  --audio-format mp3 \
  --audio-quality 0 \
  --embed-thumbnail \
  --add-metadata \
  -o "~/Music/%(playlist_title)s/%(playlist_index)03d-%(title)s.%(ext)s" \
  "YOUTUBE_PLAYLIST_URL"
```

## 案例 4：下载需要登录的网站内容

### 场景描述

需要下载 Instagram Stories 或其他需要登录的内容。

### 解决方案 1：使用浏览器 Cookie

```bash
# 从 Chrome 导入 Cookie
yt-dlp --cookies-from-browser chrome "INSTAGRAM_STORIES_URL"

# 从 Firefox 导入 Cookie
yt-dlp --cookies-from-browser firefox "INSTAGRAM_STORIES_URL"

# 从 Safari 导入 Cookie
yt-dlp --cookies-from-browser safari "INSTAGRAM_STORIES_URL"
```

### 解决方案 2：使用用户名和密码

```bash
# 使用用户名和密码
yt-dlp -u "your_username" -p "your_password" "URL"
```

### 解决方案 3：使用 Cookie 文件

1. 使用浏览器插件导出 Cookie（如 "Get cookies.txt LOCALLY"）
2. 保存为 `cookies.txt`
3. 使用 Cookie 文件：

```bash
yt-dlp --cookies cookies.txt "URL"
```

## 案例 5：下载直播流

### 场景描述

需要下载 YouTube 或 Twitch 的直播流。

### 解决方案

### YouTube 直播

```bash
# 下载正在进行的直播
yt-dlp "https://www.youtube.com/watch?v=LIVE_ID"

# 从直播开始下载（需要会员）
yt-dlp --live-from-start "https://www.youtube.com/watch?v=LIVE_ID"
```

### Twitch 直播

```bash
# 下载正在进行的直播
yt-dlp "https://www.twitch.tv/CHANNEL_NAME"

# 下载直播回放
yt-dlp "https://www.twitch.tv/videos/VIDEO_ID"
```

### 进阶：录制直播并转换为 MP4

```bash
# 录制直播
yt-dlp \
  -o "~/Downloads/Live/%(channel)s_%(timestamp)s.%(ext)s" \
  --hls-prefer-native \
  "https://www.twitch.tv/CHANNEL_NAME"

# 转换为 MP4（如果需要）
ffmpeg -i input.ts -c copy output.mp4
```

## 案例 6：使用代理下载

### 场景描述

需要通过代理下载地理限制的内容。

### 解决方案

### 使用 SOCKS5 代理

```bash
yt-dlp --proxy "socks5://127.0.0.1:1080" "URL"

# 带认证的代理
yt-dlp --proxy "socks5://username:password@proxy.example.com:1080" "URL"
```

### 使用 HTTP 代理

```bash
yt-dlp --proxy "http://127.0.0.1:8080" "URL"
```

### 绕过地理限制

```bash
# 使用特定国家
yt-dlp --geo-bypass-country US "URL"
yt-dlp --geo-bypass-country JP "URL"
yt-dlp --geo-bypass-country GB "URL"
```

## 案例 7：下载特定格式的视频

### 场景描述

需要下载特定格式或编码的视频。

### 解决方案

### 查看可用格式

```bash
# 列出所有可用格式
yt-dlp -F "URL"
```

输出示例：
```
ID  EXT  RESOLUTION  FPS |   FILESIZE   TBR PROTO | VCODEC        VBR ACODEC      ABR
--- ---- ---------- ----- ------------- ----- ----- ----------- ------ ----------- -----
22  mp4  1280x720    30 | ≈ 150.00MiB  1500k https | avc1.64001F 1500k mp4a.40.2  128k
137 mp4  1920x1080   30 | ≈ 450.00MiB  4500k https | avc1.640028 4500k -           -
140 m4a  audio only      | ≈  12.00MiB   128k https | -              - mp4a.40.2  128k
...
```

### 下载特定格式

```bash
# 使用格式 ID
yt-dlp -f 22 "URL"

# 下载 1080p 视频和最佳音频
yt-dlp -f "137+140" "URL"

# 下载 MP4 格式的最佳质量
yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]" "URL"

# 下载 VP9 编码的视频
yt-dlp -f "bestvideo[vcodec=vp9]+bestaudio" "URL"
```

## 案例 8：创建个人音乐库

### 场景描述

从多个来源下载音乐并整理成音乐库。

### 解决方案

### 创建配置文件

`~/.config/yt-dlp/music_config`:

```bash
# 音频设置
-x
--audio-format mp3
--audio-quality 0

# 元数据
--embed-thumbnail
--add-metadata

# 文件名格式
-o ~/Music/%(artist)s/%(album)s/%(track_number)02d-%(title)s.%(ext)s

# 忽略错误
--ignore-errors

# 并发下载
--concurrent-fragments 4
```

### 下载脚本

```bash
#!/bin/bash

# 从文件读取 URL
while IFS= read -r url; do
  echo "Processing: $url"
  yt-dlp --config-location ~/.config/yt-dlp/music_config "$url"
done < music_urls.txt
```

## 案例 9：下载字幕并翻译

### 场景描述

需要下载视频的字幕并进行翻译。

### 解决方案

### 下载字幕

```bash
# 只下载字幕，不下载视频
yt-dlp --skip-download --write-subs --sub-langs "en" "URL"

# 下载所有字幕
yt-dlp --skip-download --write-subs --sub-langs "all" "URL"

# 下载自动生成的字幕
yt-dlp --skip-download --write-auto-subs "URL"
```

### 使用工具翻译字幕

```bash
# 使用 Google Translate（需要安装翻译工具）
for file in *.srt; do
  translate-shell -i "$file" -o "${file%.srt}_zh.srt" :zh
done
```

## 案例 10：自动化下载脚本

### 场景描述

创建一个自动化脚本，定期下载特定频道或播放列表的最新视频。

### 解决方案

```bash
#!/bin/bash

# 配置
CHANNEL_URL="https://www.youtube.com/@ChannelName/videos"
DOWNLOAD_DIR=~/Downloads/AutoDownload
LOG_FILE=~/Downloads/download.log

# 创建目录
mkdir -p "$DOWNLOAD_DIR"

# 记录时间
echo "$(date): Starting download" >> "$LOG_FILE"

# 下载最新 10 个视频
yt-dlp \
  --playlist-end 10 \
  --no-overwrites \
  --dateafter $(date -d "7 days ago" +%Y%m%d) \
  -o "$DOWNLOAD_DIR/%(upload_date)s-%(title)s.%(ext)s" \
  -f "bestvideo[height<=1080]+bestaudio/best[height<=1080]" \
  --write-subs \
  --sub-langs "zh-Hans,en" \
  --embed-subs \
  --ignore-errors \
  "$CHANNEL_URL" >> "$LOG_FILE" 2>&1

echo "$(date): Download completed" >> "$LOG_FILE"
```

### 使用 Cron 定时执行

编辑 crontab:

```bash
crontab -e
```

添加定时任务（每天凌晨 2 点执行）:

```
0 2 * * * /path/to/download_script.sh
```

## 案例 11：下载并压缩视频

### 场景描述

下载视频后需要压缩以节省空间。

### 解决方案

```bash
# 下载并压缩
yt-dlp \
  -o "%(title)s.%(ext)s" \
  --postprocessor-args "ffmpeg:-crf 23 -preset medium" \
  "URL"
```

### 批量压缩已下载的视频

```bash
# 创建压缩脚本
for file in *.mp4; do
  ffmpeg -i "$file" -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k "compressed_${file}"
done
```

## 案例 12：下载特定时间段的视频

### 场景描述

需要下载特定时间段上传的视频。

### 解决方案

```bash
# 下载 2024 年 1 月的视频
yt-dlp --date 20240101-20240131 "PLAYLIST_URL"

# 下载最近 7 天的视频
yt-dlp --dateafter $(date -d "7 days ago" +%Y%m%d) "PLAYLIST_URL"

# 下载 2024 年之后的所有视频
yt-dlp --dateafter 20240101 "PLAYLIST_URL"
```

## 案例 13：下载 Twitter/X 线程中的所有媒体

### 场景描述

需要下载 Twitter/X 线程中的所有图片和视频。

### 解决方案

```bash
# 下载推文线程
yt-dlp \
  -o "~/Downloads/Twitter/%(id)s-%(title)s.%(ext)s" \
  --write-description \
  "https://twitter.com/user/status/TWEET_ID"
```

## 案例 14：创建备份

### 场景描述

备份 YouTube 播放列表或频道的所有视频及其元数据。

### 解决方案

```bash
# 创建完整备份
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

## 案例 15：并行下载

### 场景描述

需要提高下载速度，使用并行下载。

### 解决方案

```bash
# 使用 aria2c 作为外部下载器
yt-dlp \
  --external-downloader aria2c \
  --external-downloader-args "-x 16 -k 1M" \
  "URL"

# 或使用 yt-dlp 内置的并发片段下载
yt-dlp \
  --concurrent-fragments 4 \
  "URL"

# 批量下载时使用多线程
yt-dlp \
  -a urls.txt \
  --concurrent-fragments 4 \
  -o "%(title)s.%(ext)s"
```

## 总结

以上案例展示了 yt-dlp 的各种实际应用场景。通过组合不同的参数，可以满足各种复杂的下载需求。建议：

1. 使用配置文件保存常用参数
2. 使用 `--simulate` 先测试命令
3. 定期更新 yt-dlp 获得最新功能
4. 查阅官方文档了解更多参数和用法

更多高级用法和参数，请查看[参数详解](/params/)。