# 参数详解

本章详细介绍 yt-dlp 的各种命令行参数及其用法。

## 通用选项

### -h, --help

显示帮助信息并退出。

```bash
yt-dlp --help
```

### --version

显示版本号并退出。

```bash
yt-dlp --version
```

### -U, --update

更新 yt-dlp 到最新版本。

```bash
yt-dlp -U
```

### --no-update

不检查更新（某些安装方法需要）。

```bash
yt-dlp --no-update "URL"
```

## 网络选项

### --proxy URL

使用指定的代理服务器。

```bash
# HTTP 代理
yt-dlp --proxy "http://127.0.0.1:8080" "URL"

# HTTPS 代理
yt-dlp --proxy "https://127.0.0.1:8080" "URL"

# SOCKS5 代理
yt-dlp --proxy "socks5://127.0.0.1:1080" "URL"

# 带认证的代理
yt-dlp --proxy "socks5://user:password@127.0.0.1:1080" "URL"
```

### --socket-timeout SECONDS

设置套接字超时时间（秒）。

```bash
yt-dlp --socket-timeout 30 "URL"
```

### --source-address IP

设置客户端 IP 地址。

```bash
yt-dlp --source-address 192.168.1.100 "URL"
```

### --force-ipv4

强制使用 IPv4。

```bash
yt-dlp --force-ipv4 "URL"
```

### --force-ipv6

强制使用 IPv6。

```bash
yt-dlp --force-ipv6 "URL"
```

## 视频选择选项

### --playlist-start NUMBER

指定播放列表开始位置（默认为 1）。

```bash
# 从第 5 个视频开始下载
yt-dlp --playlist-start 5 "PLAYLIST_URL"
```

### --playlist-end NUMBER

指定播放列表结束位置（默认为最后一个）。

```bash
# 下载到第 10 个视频
yt-dlp --playlist-end 10 "PLAYLIST_URL"
```

### --playlist-items ITEM_SPEC

指定播放列表中要下载的项目。

```bash
# 下载第 1、3、5 个视频
yt-dlp --playlist-items 1,3,5 "PLAYLIST_URL"

# 下载第 1 到第 5 个视频
yt-dlp --playlist-items 1-5 "PLAYLIST_URL"

# 下载第 1 到第 3 个和第 7 个视频
yt-dlp --playlist-items 1-3,7 "PLAYLIST_URL"
```

### --match-title REGEX

下载标题匹配正则表达式的视频。

```bash
# 下载标题包含"tutorial"的视频
yt-dlp --match-title "tutorial" "PLAYLIST_URL"

# 使用正则表达式
yt-dlp --match-title "(?i)python|java" "PLAYLIST_URL"
```

### --reject-title REGEX

跳过标题匹配正则表达式的视频。

```bash
# 跳过标题包含"trailer"的视频
yt-dlp --reject-title "trailer" "PLAYLIST_URL"
```

### --max-downloads NUMBER

下载指定数量的视频后停止。

```bash
# 只下载前 5 个视频
yt-dlp --max-downloads 5 "PLAYLIST_URL"
```

### --min-filesize SIZE

不下载小于指定大小的文件。

```bash
# 不下载小于 10MB 的文件
yt-dlp --min-filesize 10M "URL"
```

### --max-filesize SIZE

不下载大于指定大小的文件。

```bash
# 不下载大于 1GB 的文件
yt-dlp --max-filesize 1G "URL"
```

### --date DATE

下载指定日期上传的视频。

```bash
# 下载 2024年1月1日的视频
yt-dlp --date 20240101 "URL"

# 下载 2024年1月的视频
yt-dlp --date 20240101-20240131 "URL"
```

### --datebefore DATE

下载指定日期之前上传的视频。

```bash
# 下载 2024年1月1日之前的视频
yt-dlp --datebefore 20240101 "URL"
```

### --dateafter DATE

下载指定日期之后上传的视频。

```bash
# 下载 2024年1月1日之后的视频
yt-dlp --dateafter 20240101 "URL"
```

## 下载选项

### -r, --limit-rate RATE

限制下载速度。

```bash
# 限制为 1MB/s
yt-dlp --limit-rate 1M "URL"

# 限制为 500KB/s
yt-dlp --limit-rate 500K "URL"

# 限制为 2.5MB/s
yt-dlp --limit-rate 2.5M "URL"
```

### -R, --retries RETRIES

重试次数（默认为 10）。

```bash
# 重试 5 次
yt-dlp --retries 5 "URL"

# 无限重试
yt-dlp --retries infinite "URL"
```

### --fragment-retries RETRIES

片段重试次数。

```bash
yt-dlp --fragment-retries 10 "URL"
```

### --skip-unavailable-fragments

跳过不可用的片段。

```bash
yt-dlp --skip-unavailable-fragments "URL"
```

### --abort-on-unavailable-fragment

遇到不可用片段时中止下载。

```bash
yt-dlp --abort-on-unavailable-fragment "URL"
```

### --keep-fragments

下载完成后保留片段。

```bash
yt-dlp --keep-fragments "URL"
```

### --buffer-size SIZE

设置缓冲区大小（默认为 1024）。

```bash
yt-dlp --buffer-size 16K "URL"
```

### --no-resize-buffer

不自动调整缓冲区大小。

```bash
yt-dlp --no-resize-buffer "URL"
```

### --http-chunk-size SIZE

设置 HTTP 块大小。

```bash
yt-dlp --http-chunk-size 1M "URL"
```

### --continue

恢复中断的下载（默认开启）。

```bash
yt-dlp --continue "URL"
```

### --no-continue

不恢复中断的下载。

```bash
yt-dlp --no-continue "URL"
```

## 文件系统选项

### -a, --batch-file FILE

从文件读取要下载的 URL。

```bash
# 从 urls.txt 读取 URL
yt-dlp -a urls.txt

# 批量下载
yt-dlp --batch-file urls.txt
```

### --id

仅使用视频 ID 作为文件名。

```bash
yt-dlp --id "URL"
```

### -o, --output TEMPLATE

输出文件名模板。

```bash
# 基本用法
yt-dlp -o "%(title)s.%(ext)s" "URL"

# 包含路径
yt-dlp -o "~/Downloads/%(title)s.%(ext)s" "URL"

# 复杂命名
yt-dlp -o "%(uploader)s/%(upload_date)s - %(title)s.%(ext)s" "URL"

# 播放列表编号
yt-dlp -o "%(playlist_index)03d - %(title)s.%(ext)s" "PLAYLIST_URL"
```

### --output-na-placeholder PLACEHOLDER

指定当字段不可用时的占位符。

```bash
yt-dlp -o "%(title)s.%(ext)s" --output-na-placeholder "Unknown" "URL"
```

### --autonumber-size NUMBER

指定自动编号的位数。

```bash
yt-dlp -o "%(autonumber)03d-%(title)s.%(ext)s" --autonumber-size 3 "URL"
```

### --autonumber-start NUMBER

指定自动编号的起始值。

```bash
yt-dlp -o "%(autonumber)d-%(title)s.%(ext)s" --autonumber-start 100 "URL"
```

### --restrict-filenames

限制文件名只包含 ASCII 字符。

```bash
yt-dlp --restrict-filenames "URL"
```

### --no-restrict-filenames

允许文件名包含 Unicode 字符（默认）。

```bash
yt-dlp --no-restrict-filenames "URL"
```

### --windows-filenames

强制使用 Windows 兼容的文件名。

```bash
yt-dlp --windows-filenames "URL"
```

### --trim-filenames LENGTH

限制文件名长度。

```bash
# 限制文件名最多 100 个字符
yt-dlp --trim-filenames 100 "URL"
```

### -w, --overwrite

覆盖已存在的文件。

```bash
yt-dlp --overwrite "URL"
```

### --no-overwrites

不覆盖已存在的文件。

```bash
yt-dlp --no-overwrites "URL"
```

### --skip-download

不下载视频，只执行其他操作（如下载字幕、缩略图等）。

```bash
yt-dlp --skip-download --write-subs "URL"
```

## 格式选择选项

### -f, --format FORMAT

选择视频/音频格式。

```bash
# 下载最佳质量
yt-dlp -f "bestvideo+bestaudio/best" "URL"

# 下载最佳 MP4 格式
yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]" "URL"

# 下载 1080p 或更低
yt-dlp -f "bestvideo[height<=1080]+bestaudio/best[height<=1080]" "URL"

# 下载特定分辨率
yt-dlp -f "bestvideo[height=720]+bestaudio/best[height=720]" "URL"

# 下载最小文件
yt-dlp -f "worst" "URL"
```

### -S, --format-sort SORTORDER

按指定顺序排序格式。

```bash
# 优先选择分辨率，然后文件大小
yt-dlp -S "res,fps" "URL"

# 优先选择 MP4 格式
yt-dlp -S "ext" "URL"

# 优先选择更高分辨率
yt-dlp -S "res:1080" "URL"
```

### --format-sort-force

强制使用格式排序，即使有更高质量的组合。

```bash
yt-dlp --format-sort-force -S "res" "URL"
```

### -F, --list-formats

列出所有可用格式。

```bash
yt-dlp -F "URL"
```

### --merge-output-format FORMAT

指定合并输出格式。

```bash
# 合并为 MP4
yt-dlp --merge-output-format mp4 "URL"

# 合并为 MKV
yt-dlp --merge-output-format mkv "URL"
```

## 字幕选项

### --write-subs

下载字幕。

```bash
yt-dlp --write-subs "URL"
```

### --write-auto-subs

下载自动生成的字幕。

```bash
yt-dlp --write-auto-subs "URL"
```

### --all-subs

下载所有可用字幕。

```bash
yt-dlp --all-subs "URL"
```

### --sub-langs LANGS

指定要下载的字幕语言。

```bash
# 下载中文字幕
yt-dlp --write-subs --sub-langs "zh-Hans" "URL"

# 下载英文字幕
yt-dlp --write-subs --sub-langs "en" "URL"

# 下载多个语言
yt-dlp --write-subs --sub-langs "en,zh-Hans,zh-Hant" "URL"

# 下载所有字幕
yt-dlp --write-subs --sub-langs "all" "URL"

# 下载所有字幕（包括自动生成）
yt-dlp --write-subs --sub-langs "all,-live_chat" "URL"
```

### --sub-format FORMAT

字幕格式偏好。

```bash
# 优先选择 SRT 格式
yt-dlp --sub-format srt --write-subs "URL"

# 优先选择 ASS 格式
yt-dlp --sub-format ass --write-subs "URL"
```

### --embed-subs

将字幕嵌入视频文件。

```bash
yt-dlp --embed-subs --sub-langs "zh-Hans" "URL"
```

## 音频选项

### -x, --extract-audio

将视频转换为音频文件。

```bash
yt-dlp -x "URL"
```

### --audio-format FORMAT

指定音频格式。

```bash
# 转换为 MP3
yt-dlp -x --audio-format mp3 "URL"

# 转换为 AAC
yt-dlp -x --audio-format aac "URL"

# 转换为 FLAC
yt-dlp -x --audio-format flac "URL"

# 转换为 M4A
yt-dlp -x --audio-format m4a "URL"

# 转换为 OPUS
yt-dlp -x --audio-format opus "URL"

# 转换为 VORBIS
yt-dlp -x --audio-format vorbis "URL"

# 转换为 WAV
yt-dlp -x --audio-format wav "URL"
```

### --audio-quality QUALITY

指定音频质量。

```bash
# 最佳质量
yt-dlp -x --audio-format mp3 --audio-quality 0 "URL"

# 中等质量
yt-dlp -x --audio-format mp3 --audio-quality 5 "URL"

# 最小体积
yt-dlp -x --audio-format mp3 --audio-quality 9 "URL"

# 指定比特率
yt-dlp -x --audio-format mp3 --audio-quality 320K "URL"
```

## 视频选项

### --recode-video FORMAT

将视频重新编码为指定格式。

```bash
# 转换为 MP4
yt-dlp --recode-video mp4 "URL"

# 转换为 MKV
yt-dlp --recode-video mkv "URL"

# 转换为 AVI
yt-dlp --recode-video avi "URL"
```

### --postprocessor-args ARGS

传递参数给后处理器。

```bash
# 传递参数给 FFmpeg
yt-dlp --postprocessor-args "ffmpeg:-crf 23" "URL"
```

### -k, --keep-video

保留中间视频文件。

```bash
yt-dlp --keep-video "URL"
```

## 缩略图选项

### --write-thumbnail

下载缩略图。

```bash
yt-dlp --write-thumbnail "URL"
```

### --write-all-thumbnails

下载所有格式的缩略图。

```bash
yt-dlp --write-all-thumbnails "URL"
```

### --list-thumbnails

列出所有可用缩略图。

```bash
yt-dlp --list-thumbnails "URL"
```

### --embed-thumbnail

将缩略图嵌入音频文件。

```bash
yt-dlp -x --audio-format mp3 --embed-thumbnail "URL"
```

## 元数据选项

### --write-description

下载视频描述。

```bash
yt-dlp --write-description "URL"
```

### --write-info-json

下载视频元数据为 JSON 格式。

```bash
yt-dlp --write-info-json "URL"
```

### --write-annotations

下载视频注释。

```bash
yt-dlp --write-annotations "URL"
```

### --embed-metadata

嵌入元数据到视频文件。

```bash
yt-dlp --embed-metadata "URL"
```

### --add-metadata

添加元数据到视频文件。

```bash
yt-dlp --add-metadata "URL"
```

## 身份验证选项

### -u, --username USERNAME

身份验证用户名。

```bash
yt-dlp -u "username" -p "password" "URL"
```

### -p, --password PASSWORD

身份验证密码。

```bash
yt-dlp -u "username" -p "password" "URL"
```

### --two-factor TWO_FACTOR

两步验证码。

```bash
yt-dlp -u "username" -p "password" --two-factor "123456" "URL"
```

### --video-password PASSWORD

视频密码（针对密码保护的视频）。

```bash
yt-dlp --video-password "mypassword" "URL"
```

### --cookies FILE

使用 Cookie 文件进行身份验证。

```bash
yt-dlp --cookies cookies.txt "URL"
```

### --cookies-from-browser BROWSER

从浏览器导入 Cookie。

```bash
# 从 Chrome 导入
yt-dlp --cookies-from-browser chrome "URL"

# 从 Firefox 导入
yt-dlp --cookies-from-browser firefox "URL"

# 从 Edge 导入
yt-dlp --cookies-from-browser edge "URL"

# 从 Safari 导入
yt-dlp --cookies-from-browser safari "URL"

# 从 Opera 导入
yt-dlp --cookies-from-browser opera "URL"

# 从 Brave 导入
yt-dlp --cookies-from-browser brave "URL"

# 指定配置文件
yt-dlp --cookies-from-browser "chrome:profile_name" "URL"
```

## 代理选项

### --geo-verification-proxy URL

使用此代理验证地理限制。

```bash
yt-dlp --geo-verification-proxy "http://proxy.example.com:8080" "URL"
```

### --geo-bypass

绕过地理限制。

```bash
yt-dlp --geo-bypass "URL"
```

### --no-geo-bypass

不绕过地理限制。

```bash
yt-dlp --no-geo-bypass "URL"
```

### --geo-bypass-country CODE

使用指定国家绕过地理限制。

```bash
# 使用美国 IP
yt-dlp --geo-bypass-country US "URL"

# 使用英国 IP
yt-dlp --geo-bypass-country GB "URL"

# 使用日本 IP
yt-dlp --geo-bypass-country JP "URL"
```

## 输出选项

### -q, --quiet

静默模式。

```bash
yt-dlp -q "URL"
```

### --no-warnings

忽略警告。

```bash
yt-dlp --no-warnings "URL"
```

### -s, --simulate

模拟下载，不实际下载文件。

```bash
yt-dlp --simulate "URL"
```

### --ignore-errors

忽略下载错误。

```bash
yt-dlp --ignore-errors "URL"
```

### --no-ignore-errors

不忽略下载错误（默认）。

```bash
yt-dlp --no-ignore-errors "URL"
```

### --dump-json

以 JSON 格式输出视频信息。

```bash
yt-dlp --dump-json "URL"
```

### --print TEMPLATE

打印视频信息而不下载。

```bash
# 打印标题
yt-dlp --print "%(title)s" "URL"

# 打印 ID 和标题
yt-dlp --print "%(id)s: %(title)s" "URL"

# 打印多个信息
yt-dlp --print "%(id)s\n%(title)s\n%(duration)s" "URL"
```

### -j, --dump-single-json

以 JSON 格式输出单个视频信息（不下载）。

```bash
yt-dlp -j "URL"
```

### --get-title

打印视频标题。

```bash
yt-dlp --get-title "URL"
```

### --get-id

打印视频 ID。

```bash
yt-dlp --get-id "URL"
```

### --get-url

打印视频 URL。

```bash
yt-dlp --get-url "URL"
```

### --get-description

打印视频描述。

```bash
yt-dlp --get-description "URL"
```

### --get-filename

打印文件名。

```bash
yt-dlp --get-filename "URL"
```

### --get-duration

打印视频时长。

```bash
yt-dlp --get-duration "URL"
```

## 其他选项

### --exec CMD

下载完成后执行命令。

```bash
# 下载后播放视频
yt-dlp --exec "vlc {}" "URL"

# 下载后移动文件
yt-dlp --exec "mv {} ~/Videos/" "URL"
```

### --convert-subs FORMAT

转换字幕格式。

```bash
# 转换为 SRT
yt-dlp --write-subs --convert-subs srt "URL"

# 转换为 ASS
yt-dlp --write-subs --convert-subs ass "URL"
```

### --concat-playlist

将播放列表中的视频合并为一个文件。

```bash
yt-dlp --concat-playlist "PLAYLIST_URL"
```

### --config-locations PATH

指定配置文件路径。

```bash
yt-dlp --config-locations ~/.config/yt-dlp/custom_config "URL"
```

### --ignore-config

忽略配置文件。

```bash
yt-dlp --ignore-config "URL"
```

## 总结

以上是 yt-dlp 的主要参数介绍。实际使用时，可以根据需要组合多个参数。建议：

1. 使用配置文件保存常用参数
2. 使用 `--simulate` 参数先测试
3. 查阅官方文档了解更多参数和用法
4. 定期更新 yt-dlp 获得最新功能和修复

更多参数和详细信息，请参考：

- [yt-dlp 官方文档](https://github.com/yt-dlp/yt-dlp#usage-and-options)
- [支持的网站列表](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md)