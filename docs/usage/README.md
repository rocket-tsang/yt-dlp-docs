---
title: yt-dlp 命令行使用教程 - 基础到进阶完整指南
description: yt-dlp 命令行使用完整教程，包括视频下载、音频提取、格式选择、字幕下载等常见场景，附带大量实用示例。
meta:
  - name: keywords
    content: yt-dlp命令,yt-dlp使用教程,视频下载命令,YouTube下载,Bilibili下载,yt-dlp实例
---

# 命令行使用

本章将介绍 yt-dlp 的基本命令行使用方法和常见场景。

## 基本语法

```bash
yt-dlp [选项] <URL>
```

## 最简单的使用

### 下载视频

```bash
yt-dlp "https://www.youtube.com/watch?v=VIDEO_ID"
```

这将自动下载视频的最佳质量版本。

### 下载播放列表

```bash
yt-dlp "https://www.youtube.com/playlist?list=PLAYLIST_ID"
```

## 常用命令

### 1. 指定下载路径和文件名

使用 `-o` 参数：

```bash
# 指定文件名
yt-dlp -o "my_video.mp4" "URL"

# 指定路径和文件名
yt-dlp -o "/path/to/video.mp4" "URL"

# 使用变量
yt-dlp -o "%(title)s.%(ext)s" "URL"
yt-dlp -o "%(title)s-%(id)s.%(ext)s" "URL"
yt-dlp -o "~/Downloads/%(title)s.%(ext)s" "URL"
```

### 常用文件名变量

| 变量 | 说明 |
|------|------|
| `%(id)s` | 视频 ID |
| `%(title)s` | 视频标题 |
| `%(ext)s` | 文件扩展名 |
| `%(uploader)s` | 上传者 |
| `%(upload_date)s` | 上传日期 |
| `%(resolution)s` | 分辨率 |
| `%(playlist_index)s` | 播放列表序号 |
| `%(playlist_title)s` | 播放列表标题 |

### 2. 选择视频质量

#### 下载最佳质量

```bash
yt-dlp -f "bestvideo+bestaudio/best" "URL"
```

#### 下载指定分辨率

```bash
# 下载 1080p 视频
yt-dlp -f "bestvideo[height<=1080]+bestaudio/best[height<=1080]" "URL"

# 下载 720p 视频
yt-dlp -f "bestvideo[height<=720]+bestaudio/best[height<=720]" "URL"

# 下载最高 480p 视频
yt-dlp -f "bestvideo[height<=480]+bestaudio/best[height<=480]" "URL"
```

#### 查看可用格式

```bash
yt-dlp -F "URL"
```

这将列出该视频所有可用的格式及其格式 ID。

#### 下载指定格式

```bash
# 使用格式 ID
yt-dlp -f 22 "URL"

# 下载特定格式
yt-dlp -f "mp4" "URL"
```

### 3. 下载音频

#### 只下载音频（最佳质量）

```bash
yt-dlp -x --audio-format mp3 "URL"
```

#### 指定音频质量

```bash
yt-dlp -x --audio-format mp3 --audio-quality 0 "URL"  # 最佳质量
yt-dlp -x --audio-format mp3 --audio-quality 5 "URL"  # 中等质量
yt-dlp -x --audio-format mp3 --audio-quality 9 "URL"  # 最小体积
```

音频质量范围：0（最佳）到 9（最差）

### 4. 下载字幕

#### 下载所有字幕

```bash
yt-dlp --write-subs "URL"
```

#### 下载特定语言字幕

```bash
# 下载中文字幕
yt-dlp --write-subs --sub-langs "zh-Hans" "URL"

# 下载英文字幕
yt-dlp --write-subs --sub-langs "en" "URL"

# 下载多个语言字幕
yt-dlp --write-subs --sub-langs "en,zh-Hans" "URL"

# 下载所有可用字幕
yt-dlp --write-subs --sub-langs "all" "URL"
```

#### 嵌入字幕到视频

```bash
yt-dlp --embed-subs --sub-langs "zh-Hans" "URL"
```

### 5. 下载缩略图

```bash
# 下载缩略图
yt-dlp --write-thumbnail "URL"

# 嵌入缩略图到音频文件
yt-dlp -x --audio-format mp3 --embed-thumbnail "URL"
```

### 6. 下载元数据

```bash
# 下载 JSON 格式的元数据
yt-dlp --write-info-json "URL"

# 下载描述文件
yt-dlp --write-description "URL"
```

## 播放列表下载

### 下载整个播放列表

```bash
yt-dlp "PLAYLIST_URL"
```

### 下载播放列表中的特定视频

```bash
# 下载第 1 个视频
yt-dlp --playlist-items 1 "PLAYLIST_URL"

# 下载第 1 到第 5 个视频
yt-dlp --playlist-items 1-5 "PLAYLIST_URL"

# 下载第 1、3、5 个视频
yt-dlp --playlist-items 1,3,5 "PLAYLIST_URL"

# 下载第 1 到第 3 个和第 7 个视频
yt-dlp --playlist-items 1-3,7 "PLAYLIST_URL"
```

### 限制下载范围

```bash
# 从第 5 个开始下载
yt-dlp --playlist-start 5 "PLAYLIST_URL"

# 下载到第 10 个为止
yt-dlp --playlist-end 10 "PLAYLIST_URL"

# 从第 5 个开始，下载到第 10 个
yt-dlp --playlist-start 5 --playlist-end 10 "PLAYLIST_URL"
```

### 反向播放列表

```bash
# 从最后一个视频开始下载
yt-dlp --playlist-reverse "PLAYLIST_URL"
```

## 下载控制

### 限速下载

```bash
# 限制速度为 1MB/s
yt-dlp --limit-rate 1M "URL"

# 限制速度为 500KB/s
yt-dlp --limit-rate 500K "URL"
```

### 并发下载

```bash
# 使用 4 个并发连接
yt-dlp --concurrent-fragments 4 "URL"
```

### 断点续传

```bash
yt-dlp --continue "URL"
```

### 跳过已下载文件

```bash
# 跳过已存在的文件
yt-dlp --skip-download "URL"

# 不覆盖已存在的文件
yt-dlp --no-overwrites "URL"
```

## 批量下载

### 从文件读取 URL

创建一个文本文件（如 `urls.txt`），每行一个 URL：

```bash
yt-dlp -a urls.txt
```

### 批量下载选项

```bash
# 批量下载并指定输出格式
yt-dlp -a urls.txt -o "%(playlist_index)s-%(title)s.%(ext)s"

# 批量下载并限制并发
yt-dlp -a urls.txt --concurrent-fragments 4
```

## 代理设置

### HTTP/HTTPS 代理

```bash
yt-dlp --proxy "http://127.0.0.1:8080" "URL"
yt-dlp --proxy "https://127.0.0.1:8080" "URL"
```

### SOCKS 代理

```bash
yt-dlp --proxy "socks5://127.0.0.1:1080" "URL"
yt-dlp --proxy "socks5://user:password@127.0.0.1:1080" "URL"
```

## 身份验证

### 用户名和密码

```bash
yt-dlp -u "username" -p "password" "URL"
```

### 使用 Cookie

#### 从浏览器导入 Cookie

```bash
# 从 Chrome 导入
yt-dlp --cookies-from-browser chrome "URL"

# 从 Firefox 导入
yt-dlp --cookies-from-browser firefox "URL"

# 从 Safari 导入
yt-dlp --cookies-from-browser safari "URL"
```

#### 使用 Cookie 文件

```bash
yt-dlp --cookies cookies.txt "URL"
```

## 下载特定网站视频

### YouTube

```bash
# 下载 YouTube 视频
yt-dlp "https://www.youtube.com/watch?v=VIDEO_ID"

# 下载 YouTube 播放列表
yt-dlp "https://www.youtube.com/playlist?list=PLAYLIST_ID"

# 下载 YouTube 频道的所有视频
yt-dlp "https://www.youtube.com/@ChannelName/videos"

# 下载 YouTube 直播
yt-dlp --live-from-start "https://www.youtube.com/watch?v=LIVE_ID"
```

### Bilibili

```bash
# 下载 Bilibili 视频
yt-dlp "https://www.bilibili.com/video/BV_ID"

# 下载 Bilibili 番剧
yt-dlp "https://www.bilibili.com/bangumi/play/EP_ID"

# 下载 Bilibili UP 主的所有视频
yt-dlp "https://space.bilibili.com/USER_ID"
```

### Twitter/X

```bash
# 下载 Twitter 视频
yt-dlp "https://twitter.com/user/status/TWEET_ID"

# 下载 X 视频
yt-dlp "https://x.com/user/status/TWEET_ID"
```

### Instagram

```bash
# 下载 Instagram 视频
yt-dlp "https://www.instagram.com/p/POST_ID"

# 下载 Instagram Reels
yt-dlp "https://www.instagram.com/reel/REEL_ID"
```

### TikTok

```bash
# 下载 TikTok 视频
yt-dlp "https://www.tiktok.com/@user/video/VIDEO_ID"
```

## 模拟和测试

### 模拟下载（不实际下载）

```bash
yt-dlp --simulate "URL"
```

### 查看视频信息

```bash
# 查看 JSON 格式信息
yt-dlp --dump-json "URL"

# 查看简要信息
yt-dlp --get-title "URL"
yt-dlp --get-id "URL"
yt-dlp --get-description "URL"
yt-dlp --get-duration "URL"
```

### 列出格式但不下载

```bash
yt-dlp -F "URL"
```

## 静默和详细输出

### 静默模式

```bash
# 不显示输出
yt-dlp -q "URL"

# 只显示错误
yt-dlp --no-warnings "URL"
```

### 详细模式

```bash
# 显示详细输出
yt-dlp -v "URL"

# 显示调试信息
yt-dlp --verbose "URL"
```

## 实用技巧

### 1. 组合使用多个选项

```bash
# 下载最佳质量，保存到指定路径，嵌入字幕和缩略图
yt-dlp -f "bestvideo+bestaudio/best" \
  -o "~/Videos/%(title)s.%(ext)s" \
  --write-subs --sub-langs "zh-Hans" \
  --embed-subs \
  --write-thumbnail \
  --embed-thumbnail \
  "URL"
```

### 2. 使用配置文件简化命令

在配置文件中设置常用选项，然后：

```bash
# 使用配置文件
yt-dlp --config-location /path/to/config "URL"

# 忽略配置文件
yt-dlp --ignore-config "URL"
```

### 3. 下载速度优化

```bash
# 使用多线程下载
yt-dlp --concurrent-fragments 4 \
  --buffersize 16K \
  "URL"
```

## 下一步

- 查看[参数详解](/params/)了解所有可用参数
- 查看[支持网站](/sites/)了解支持的网站列表
- 查看[技术实战](/practice/)学习实际应用场景