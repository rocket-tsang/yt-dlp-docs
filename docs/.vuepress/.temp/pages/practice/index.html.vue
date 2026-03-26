<template><div><h1 id="技术实战" tabindex="-1"><a class="header-anchor" href="#技术实战"><span>技术实战</span></a></h1>
<p>本章将通过实际案例展示 yt-dlp 的各种应用场景。</p>
<h2 id="案例-1-批量下载-youtube-播放列表" tabindex="-1"><a class="header-anchor" href="#案例-1-批量下载-youtube-播放列表"><span>案例 1：批量下载 YouTube 播放列表</span></a></h2>
<h3 id="场景描述" tabindex="-1"><a class="header-anchor" href="#场景描述"><span>场景描述</span></a></h3>
<p>需要下载一个包含 100 个视频的 YouTube 播放列表，要求：</p>
<ul>
<li>下载 1080p 或更低分辨率的视频</li>
<li>保存到指定文件夹</li>
<li>文件名包含序号和标题</li>
<li>下载字幕（中文优先）</li>
<li>嵌入字幕到视频</li>
</ul>
<h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 创建下载脚本</span></span>
<span class="line">yt-dlp <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-o</span> <span class="token string">"~/Downloads/YouTube/%(playlist_index)03d-%(title)s.%(ext)s"</span> <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-f</span> <span class="token string">"bestvideo[height&lt;=1080]+bestaudio/best[height&lt;=1080]"</span> <span class="token punctuation">\</span></span>
<span class="line">  --write-subs <span class="token punctuation">\</span></span>
<span class="line">  --sub-langs <span class="token string">"zh-Hans,zh-Hant,en"</span> <span class="token punctuation">\</span></span>
<span class="line">  --embed-subs <span class="token punctuation">\</span></span>
<span class="line">  --merge-output-format mp4 <span class="token punctuation">\</span></span>
<span class="line">  <span class="token string">"https://www.youtube.com/playlist?list=PLAYLIST_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明"><span>参数说明</span></a></h3>
<ul>
<li><code v-pre>-o</code>: 指定输出路径和文件名格式</li>
<li><code v-pre>-f</code>: 选择 1080p 或更低分辨率的最佳质量</li>
<li><code v-pre>--write-subs</code>: 下载字幕</li>
<li><code v-pre>--sub-langs</code>: 指定字幕语言（优先中文）</li>
<li><code v-pre>--embed-subs</code>: 嵌入字幕到视频</li>
<li><code v-pre>--merge-output-format</code>: 合并为 MP4 格式</li>
</ul>
<h3 id="进阶-使用配置文件" tabindex="-1"><a class="header-anchor" href="#进阶-使用配置文件"><span>进阶：使用配置文件</span></a></h3>
<p>创建配置文件 <code v-pre>~/.config/yt-dlp/config</code>:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 默认下载路径</span></span>
<span class="line"><span class="token parameter variable">-o</span> ~/Downloads/YouTube/%<span class="token punctuation">(</span>playlist_index<span class="token punctuation">)</span>03d-%<span class="token punctuation">(</span>title<span class="token punctuation">)</span>s.%<span class="token punctuation">(</span>ext<span class="token punctuation">)</span>s</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 视频质量</span></span>
<span class="line"><span class="token parameter variable">-f</span> bestvideo<span class="token punctuation">[</span>height<span class="token operator">&lt;=</span><span class="token number">1080</span><span class="token punctuation">]</span>+bestaudio/best<span class="token punctuation">[</span>height<span class="token operator">&lt;=</span><span class="token number">1080</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 字幕设置</span></span>
<span class="line">--write-subs</span>
<span class="line">--sub-langs zh-Hans,zh-Hant,en</span>
<span class="line">--embed-subs</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 输出格式</span></span>
<span class="line">--merge-output-format mp4</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 忽略错误</span></span>
<span class="line">--ignore-errors</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后直接运行：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token string">"PLAYLIST_URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="案例-2-下载-bilibili-番剧" tabindex="-1"><a class="header-anchor" href="#案例-2-下载-bilibili-番剧"><span>案例 2：下载 Bilibili 番剧</span></a></h2>
<h3 id="场景描述-1" tabindex="-1"><a class="header-anchor" href="#场景描述-1"><span>场景描述</span></a></h3>
<p>需要下载一部 Bilibili 番剧的所有集数，要求：</p>
<ul>
<li>下载最高画质</li>
<li>文件名包含集数</li>
<li>跳过已下载的集数</li>
</ul>
<h3 id="解决方案-1" tabindex="-1"><a class="header-anchor" href="#解决方案-1"><span>解决方案</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 下载番剧</span></span>
<span class="line">yt-dlp <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-o</span> <span class="token string">"~/Downloads/Anime/%(title)s/第%(episode_number)02d集-%(episode)s.%(ext)s"</span> <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-f</span> <span class="token string">"bestvideo+bestaudio/best"</span> <span class="token punctuation">\</span></span>
<span class="line">  --no-overwrites <span class="token punctuation">\</span></span>
<span class="line">  <span class="token string">"https://www.bilibili.com/bangumi/play/EP_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="进阶-批量下载多部番剧" tabindex="-1"><a class="header-anchor" href="#进阶-批量下载多部番剧"><span>进阶：批量下载多部番剧</span></a></h3>
<p>创建 <code v-pre>anime_urls.txt</code>:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">https://www.bilibili.com/bangumi/play/EP_ID_1</span>
<span class="line">https://www.bilibili.com/bangumi/play/EP_ID_2</span>
<span class="line">https://www.bilibili.com/bangumi/play/EP_ID_3</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后运行：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token parameter variable">-a</span> anime_urls.txt <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-o</span> <span class="token string">"~/Downloads/Anime/%(title)s/第%(episode_number)02d集.%(ext)s"</span> <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-f</span> <span class="token string">"bestvideo+bestaudio/best"</span> <span class="token punctuation">\</span></span>
<span class="line">  --no-overwrites</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例-3-下载-youtube-音乐并转换为-mp3" tabindex="-1"><a class="header-anchor" href="#案例-3-下载-youtube-音乐并转换为-mp3"><span>案例 3：下载 YouTube 音乐并转换为 MP3</span></a></h2>
<h3 id="场景描述-2" tabindex="-1"><a class="header-anchor" href="#场景描述-2"><span>场景描述</span></a></h3>
<p>需要下载 YouTube 音乐视频并转换为高质量的 MP3 格式，要求：</p>
<ul>
<li>提取音频</li>
<li>转换为 320kbps MP3</li>
<li>嵌入缩略图</li>
<li>嵌入元数据</li>
<li>文件名包含标题和艺术家</li>
</ul>
<h3 id="解决方案-2" tabindex="-1"><a class="header-anchor" href="#解决方案-2"><span>解决方案</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 下载并转换为 MP3</span></span>
<span class="line">yt-dlp <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-x</span> <span class="token punctuation">\</span></span>
<span class="line">  --audio-format mp3 <span class="token punctuation">\</span></span>
<span class="line">  --audio-quality <span class="token number">0</span> <span class="token punctuation">\</span></span>
<span class="line">  --embed-thumbnail <span class="token punctuation">\</span></span>
<span class="line">  --add-metadata <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-o</span> <span class="token string">"~/Music/%(title)s-%(uploader)s.%(ext)s"</span> <span class="token punctuation">\</span></span>
<span class="line">  <span class="token string">"YOUTUBE_MUSIC_URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="批量下载播放列表" tabindex="-1"><a class="header-anchor" href="#批量下载播放列表"><span>批量下载播放列表</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 下载音乐播放列表</span></span>
<span class="line">yt-dlp <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-x</span> <span class="token punctuation">\</span></span>
<span class="line">  --audio-format mp3 <span class="token punctuation">\</span></span>
<span class="line">  --audio-quality <span class="token number">0</span> <span class="token punctuation">\</span></span>
<span class="line">  --embed-thumbnail <span class="token punctuation">\</span></span>
<span class="line">  --add-metadata <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-o</span> <span class="token string">"~/Music/%(playlist_title)s/%(playlist_index)03d-%(title)s.%(ext)s"</span> <span class="token punctuation">\</span></span>
<span class="line">  <span class="token string">"YOUTUBE_PLAYLIST_URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例-4-下载需要登录的网站内容" tabindex="-1"><a class="header-anchor" href="#案例-4-下载需要登录的网站内容"><span>案例 4：下载需要登录的网站内容</span></a></h2>
<h3 id="场景描述-3" tabindex="-1"><a class="header-anchor" href="#场景描述-3"><span>场景描述</span></a></h3>
<p>需要下载 Instagram Stories 或其他需要登录的内容。</p>
<h3 id="解决方案-1-使用浏览器-cookie" tabindex="-1"><a class="header-anchor" href="#解决方案-1-使用浏览器-cookie"><span>解决方案 1：使用浏览器 Cookie</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 从 Chrome 导入 Cookie</span></span>
<span class="line">yt-dlp --cookies-from-browser chrome <span class="token string">"INSTAGRAM_STORIES_URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 从 Firefox 导入 Cookie</span></span>
<span class="line">yt-dlp --cookies-from-browser firefox <span class="token string">"INSTAGRAM_STORIES_URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 从 Safari 导入 Cookie</span></span>
<span class="line">yt-dlp --cookies-from-browser safari <span class="token string">"INSTAGRAM_STORIES_URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决方案-2-使用用户名和密码" tabindex="-1"><a class="header-anchor" href="#解决方案-2-使用用户名和密码"><span>解决方案 2：使用用户名和密码</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 使用用户名和密码</span></span>
<span class="line">yt-dlp <span class="token parameter variable">-u</span> <span class="token string">"your_username"</span> <span class="token parameter variable">-p</span> <span class="token string">"your_password"</span> <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决方案-3-使用-cookie-文件" tabindex="-1"><a class="header-anchor" href="#解决方案-3-使用-cookie-文件"><span>解决方案 3：使用 Cookie 文件</span></a></h3>
<ol>
<li>使用浏览器插件导出 Cookie（如 &quot;Get cookies.txt LOCALLY&quot;）</li>
<li>保存为 <code v-pre>cookies.txt</code></li>
<li>使用 Cookie 文件：</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token parameter variable">--cookies</span> cookies.txt <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="案例-5-下载直播流" tabindex="-1"><a class="header-anchor" href="#案例-5-下载直播流"><span>案例 5：下载直播流</span></a></h2>
<h3 id="场景描述-4" tabindex="-1"><a class="header-anchor" href="#场景描述-4"><span>场景描述</span></a></h3>
<p>需要下载 YouTube 或 Twitch 的直播流。</p>
<h3 id="解决方案-3" tabindex="-1"><a class="header-anchor" href="#解决方案-3"><span>解决方案</span></a></h3>
<h3 id="youtube-直播" tabindex="-1"><a class="header-anchor" href="#youtube-直播"><span>YouTube 直播</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 下载正在进行的直播</span></span>
<span class="line">yt-dlp <span class="token string">"https://www.youtube.com/watch?v=LIVE_ID"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 从直播开始下载（需要会员）</span></span>
<span class="line">yt-dlp --live-from-start <span class="token string">"https://www.youtube.com/watch?v=LIVE_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="twitch-直播" tabindex="-1"><a class="header-anchor" href="#twitch-直播"><span>Twitch 直播</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 下载正在进行的直播</span></span>
<span class="line">yt-dlp <span class="token string">"https://www.twitch.tv/CHANNEL_NAME"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载直播回放</span></span>
<span class="line">yt-dlp <span class="token string">"https://www.twitch.tv/videos/VIDEO_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="进阶-录制直播并转换为-mp4" tabindex="-1"><a class="header-anchor" href="#进阶-录制直播并转换为-mp4"><span>进阶：录制直播并转换为 MP4</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 录制直播</span></span>
<span class="line">yt-dlp <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-o</span> <span class="token string">"~/Downloads/Live/%(channel)s_%(timestamp)s.%(ext)s"</span> <span class="token punctuation">\</span></span>
<span class="line">  --hls-prefer-native <span class="token punctuation">\</span></span>
<span class="line">  <span class="token string">"https://www.twitch.tv/CHANNEL_NAME"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 转换为 MP4（如果需要）</span></span>
<span class="line">ffmpeg <span class="token parameter variable">-i</span> input.ts <span class="token parameter variable">-c</span> copy output.mp4</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例-6-使用代理下载" tabindex="-1"><a class="header-anchor" href="#案例-6-使用代理下载"><span>案例 6：使用代理下载</span></a></h2>
<h3 id="场景描述-5" tabindex="-1"><a class="header-anchor" href="#场景描述-5"><span>场景描述</span></a></h3>
<p>需要通过代理下载地理限制的内容。</p>
<h3 id="解决方案-4" tabindex="-1"><a class="header-anchor" href="#解决方案-4"><span>解决方案</span></a></h3>
<h3 id="使用-socks5-代理" tabindex="-1"><a class="header-anchor" href="#使用-socks5-代理"><span>使用 SOCKS5 代理</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token parameter variable">--proxy</span> <span class="token string">"socks5://127.0.0.1:1080"</span> <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 带认证的代理</span></span>
<span class="line">yt-dlp <span class="token parameter variable">--proxy</span> <span class="token string">"socks5://username:password@proxy.example.com:1080"</span> <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-http-代理" tabindex="-1"><a class="header-anchor" href="#使用-http-代理"><span>使用 HTTP 代理</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token parameter variable">--proxy</span> <span class="token string">"http://127.0.0.1:8080"</span> <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="绕过地理限制" tabindex="-1"><a class="header-anchor" href="#绕过地理限制"><span>绕过地理限制</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 使用特定国家</span></span>
<span class="line">yt-dlp --geo-bypass-country US <span class="token string">"URL"</span></span>
<span class="line">yt-dlp --geo-bypass-country JP <span class="token string">"URL"</span></span>
<span class="line">yt-dlp --geo-bypass-country GB <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例-7-下载特定格式的视频" tabindex="-1"><a class="header-anchor" href="#案例-7-下载特定格式的视频"><span>案例 7：下载特定格式的视频</span></a></h2>
<h3 id="场景描述-6" tabindex="-1"><a class="header-anchor" href="#场景描述-6"><span>场景描述</span></a></h3>
<p>需要下载特定格式或编码的视频。</p>
<h3 id="解决方案-5" tabindex="-1"><a class="header-anchor" href="#解决方案-5"><span>解决方案</span></a></h3>
<h3 id="查看可用格式" tabindex="-1"><a class="header-anchor" href="#查看可用格式"><span>查看可用格式</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 列出所有可用格式</span></span>
<span class="line">yt-dlp <span class="token parameter variable">-F</span> <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出示例：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">ID  EXT  RESOLUTION  FPS |   FILESIZE   TBR PROTO | VCODEC        VBR ACODEC      ABR</span>
<span class="line">--- ---- ---------- ----- ------------- ----- ----- ----------- ------ ----------- -----</span>
<span class="line">22  mp4  1280x720    30 | ≈ 150.00MiB  1500k https | avc1.64001F 1500k mp4a.40.2  128k</span>
<span class="line">137 mp4  1920x1080   30 | ≈ 450.00MiB  4500k https | avc1.640028 4500k -           -</span>
<span class="line">140 m4a  audio only      | ≈  12.00MiB   128k https | -              - mp4a.40.2  128k</span>
<span class="line">...</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="下载特定格式" tabindex="-1"><a class="header-anchor" href="#下载特定格式"><span>下载特定格式</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 使用格式 ID</span></span>
<span class="line">yt-dlp <span class="token parameter variable">-f</span> <span class="token number">22</span> <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载 1080p 视频和最佳音频</span></span>
<span class="line">yt-dlp <span class="token parameter variable">-f</span> <span class="token string">"137+140"</span> <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载 MP4 格式的最佳质量</span></span>
<span class="line">yt-dlp <span class="token parameter variable">-f</span> <span class="token string">"bestvideo[ext=mp4]+bestaudio[ext=m4a]"</span> <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载 VP9 编码的视频</span></span>
<span class="line">yt-dlp <span class="token parameter variable">-f</span> <span class="token string">"bestvideo[vcodec=vp9]+bestaudio"</span> <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例-8-创建个人音乐库" tabindex="-1"><a class="header-anchor" href="#案例-8-创建个人音乐库"><span>案例 8：创建个人音乐库</span></a></h2>
<h3 id="场景描述-7" tabindex="-1"><a class="header-anchor" href="#场景描述-7"><span>场景描述</span></a></h3>
<p>从多个来源下载音乐并整理成音乐库。</p>
<h3 id="解决方案-6" tabindex="-1"><a class="header-anchor" href="#解决方案-6"><span>解决方案</span></a></h3>
<h3 id="创建配置文件" tabindex="-1"><a class="header-anchor" href="#创建配置文件"><span>创建配置文件</span></a></h3>
<p><code v-pre>~/.config/yt-dlp/music_config</code>:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 音频设置</span></span>
<span class="line"><span class="token parameter variable">-x</span></span>
<span class="line">--audio-format mp3</span>
<span class="line">--audio-quality <span class="token number">0</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 元数据</span></span>
<span class="line">--embed-thumbnail</span>
<span class="line">--add-metadata</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 文件名格式</span></span>
<span class="line"><span class="token parameter variable">-o</span> ~/Music/%<span class="token punctuation">(</span>artist<span class="token punctuation">)</span>s/%<span class="token punctuation">(</span>album<span class="token punctuation">)</span>s/%<span class="token punctuation">(</span>track_number<span class="token punctuation">)</span>02d-%<span class="token punctuation">(</span>title<span class="token punctuation">)</span>s.%<span class="token punctuation">(</span>ext<span class="token punctuation">)</span>s</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 忽略错误</span></span>
<span class="line">--ignore-errors</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 并发下载</span></span>
<span class="line">--concurrent-fragments <span class="token number">4</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="下载脚本" tabindex="-1"><a class="header-anchor" href="#下载脚本"><span>下载脚本</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token shebang important">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 从文件读取 URL</span></span>
<span class="line"><span class="token keyword">while</span> <span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span> <span class="token builtin class-name">read</span> <span class="token parameter variable">-r</span> url<span class="token punctuation">;</span> <span class="token keyword">do</span></span>
<span class="line">  <span class="token builtin class-name">echo</span> <span class="token string">"Processing: <span class="token variable">$url</span>"</span></span>
<span class="line">  yt-dlp --config-location ~/.config/yt-dlp/music_config <span class="token string">"<span class="token variable">$url</span>"</span></span>
<span class="line"><span class="token keyword">done</span> <span class="token operator">&lt;</span> music_urls.txt</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例-9-下载字幕并翻译" tabindex="-1"><a class="header-anchor" href="#案例-9-下载字幕并翻译"><span>案例 9：下载字幕并翻译</span></a></h2>
<h3 id="场景描述-8" tabindex="-1"><a class="header-anchor" href="#场景描述-8"><span>场景描述</span></a></h3>
<p>需要下载视频的字幕并进行翻译。</p>
<h3 id="解决方案-7" tabindex="-1"><a class="header-anchor" href="#解决方案-7"><span>解决方案</span></a></h3>
<h3 id="下载字幕" tabindex="-1"><a class="header-anchor" href="#下载字幕"><span>下载字幕</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 只下载字幕，不下载视频</span></span>
<span class="line">yt-dlp --skip-download --write-subs --sub-langs <span class="token string">"en"</span> <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载所有字幕</span></span>
<span class="line">yt-dlp --skip-download --write-subs --sub-langs <span class="token string">"all"</span> <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载自动生成的字幕</span></span>
<span class="line">yt-dlp --skip-download --write-auto-subs <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用工具翻译字幕" tabindex="-1"><a class="header-anchor" href="#使用工具翻译字幕"><span>使用工具翻译字幕</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 使用 Google Translate（需要安装翻译工具）</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> *.srt<span class="token punctuation">;</span> <span class="token keyword">do</span></span>
<span class="line">  translate-shell <span class="token parameter variable">-i</span> <span class="token string">"<span class="token variable">$file</span>"</span> <span class="token parameter variable">-o</span> <span class="token string">"<span class="token variable">${file<span class="token operator">%</span>.srt}</span>_zh.srt"</span> :zh</span>
<span class="line"><span class="token keyword">done</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例-10-自动化下载脚本" tabindex="-1"><a class="header-anchor" href="#案例-10-自动化下载脚本"><span>案例 10：自动化下载脚本</span></a></h2>
<h3 id="场景描述-9" tabindex="-1"><a class="header-anchor" href="#场景描述-9"><span>场景描述</span></a></h3>
<p>创建一个自动化脚本，定期下载特定频道或播放列表的最新视频。</p>
<h3 id="解决方案-8" tabindex="-1"><a class="header-anchor" href="#解决方案-8"><span>解决方案</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token shebang important">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 配置</span></span>
<span class="line"><span class="token assign-left variable">CHANNEL_URL</span><span class="token operator">=</span><span class="token string">"https://www.youtube.com/@ChannelName/videos"</span></span>
<span class="line"><span class="token assign-left variable">DOWNLOAD_DIR</span><span class="token operator">=~</span>/Downloads/AutoDownload</span>
<span class="line"><span class="token assign-left variable">LOG_FILE</span><span class="token operator">=~</span>/Downloads/download.log</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建目录</span></span>
<span class="line"><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token string">"<span class="token variable">$DOWNLOAD_DIR</span>"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 记录时间</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span><span class="token variable">)</span></span>: Starting download"</span> <span class="token operator">>></span> <span class="token string">"<span class="token variable">$LOG_FILE</span>"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载最新 10 个视频</span></span>
<span class="line">yt-dlp <span class="token punctuation">\</span></span>
<span class="line">  --playlist-end <span class="token number">10</span> <span class="token punctuation">\</span></span>
<span class="line">  --no-overwrites <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">--dateafter</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">"7 days ago"</span> +%Y%m%d<span class="token variable">)</span></span> <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-o</span> <span class="token string">"<span class="token variable">$DOWNLOAD_DIR</span>/%(upload_date)s-%(title)s.%(ext)s"</span> <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-f</span> <span class="token string">"bestvideo[height&lt;=1080]+bestaudio/best[height&lt;=1080]"</span> <span class="token punctuation">\</span></span>
<span class="line">  --write-subs <span class="token punctuation">\</span></span>
<span class="line">  --sub-langs <span class="token string">"zh-Hans,en"</span> <span class="token punctuation">\</span></span>
<span class="line">  --embed-subs <span class="token punctuation">\</span></span>
<span class="line">  --ignore-errors <span class="token punctuation">\</span></span>
<span class="line">  <span class="token string">"<span class="token variable">$CHANNEL_URL</span>"</span> <span class="token operator">>></span> <span class="token string">"<span class="token variable">$LOG_FILE</span>"</span> <span class="token operator"><span class="token file-descriptor important">2</span>></span><span class="token file-descriptor important">&amp;1</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span><span class="token variable">)</span></span>: Download completed"</span> <span class="token operator">>></span> <span class="token string">"<span class="token variable">$LOG_FILE</span>"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-cron-定时执行" tabindex="-1"><a class="header-anchor" href="#使用-cron-定时执行"><span>使用 Cron 定时执行</span></a></h3>
<p>编辑 crontab:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">crontab</span> <span class="token parameter variable">-e</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>添加定时任务（每天凌晨 2 点执行）:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">0 2 * * * /path/to/download_script.sh</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="案例-11-下载并压缩视频" tabindex="-1"><a class="header-anchor" href="#案例-11-下载并压缩视频"><span>案例 11：下载并压缩视频</span></a></h2>
<h3 id="场景描述-10" tabindex="-1"><a class="header-anchor" href="#场景描述-10"><span>场景描述</span></a></h3>
<p>下载视频后需要压缩以节省空间。</p>
<h3 id="解决方案-9" tabindex="-1"><a class="header-anchor" href="#解决方案-9"><span>解决方案</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 下载并压缩</span></span>
<span class="line">yt-dlp <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-o</span> <span class="token string">"%(title)s.%(ext)s"</span> <span class="token punctuation">\</span></span>
<span class="line">  --postprocessor-args <span class="token string">"ffmpeg:-crf 23 -preset medium"</span> <span class="token punctuation">\</span></span>
<span class="line">  <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="批量压缩已下载的视频" tabindex="-1"><a class="header-anchor" href="#批量压缩已下载的视频"><span>批量压缩已下载的视频</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 创建压缩脚本</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> *.mp4<span class="token punctuation">;</span> <span class="token keyword">do</span></span>
<span class="line">  ffmpeg <span class="token parameter variable">-i</span> <span class="token string">"<span class="token variable">$file</span>"</span> <span class="token parameter variable">-c:v</span> libx264 <span class="token parameter variable">-crf</span> <span class="token number">23</span> <span class="token parameter variable">-preset</span> medium <span class="token parameter variable">-c:a</span> aac <span class="token parameter variable">-b:a</span> 128k <span class="token string">"compressed_<span class="token variable">${file}</span>"</span></span>
<span class="line"><span class="token keyword">done</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例-12-下载特定时间段的视频" tabindex="-1"><a class="header-anchor" href="#案例-12-下载特定时间段的视频"><span>案例 12：下载特定时间段的视频</span></a></h2>
<h3 id="场景描述-11" tabindex="-1"><a class="header-anchor" href="#场景描述-11"><span>场景描述</span></a></h3>
<p>需要下载特定时间段上传的视频。</p>
<h3 id="解决方案-10" tabindex="-1"><a class="header-anchor" href="#解决方案-10"><span>解决方案</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 下载 2024 年 1 月的视频</span></span>
<span class="line">yt-dlp <span class="token parameter variable">--date</span> <span class="token number">20240101</span>-20240131 <span class="token string">"PLAYLIST_URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载最近 7 天的视频</span></span>
<span class="line">yt-dlp <span class="token parameter variable">--dateafter</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">"7 days ago"</span> +%Y%m%d<span class="token variable">)</span></span> <span class="token string">"PLAYLIST_URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载 2024 年之后的所有视频</span></span>
<span class="line">yt-dlp <span class="token parameter variable">--dateafter</span> <span class="token number">20240101</span> <span class="token string">"PLAYLIST_URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例-13-下载-twitter-x-线程中的所有媒体" tabindex="-1"><a class="header-anchor" href="#案例-13-下载-twitter-x-线程中的所有媒体"><span>案例 13：下载 Twitter/X 线程中的所有媒体</span></a></h2>
<h3 id="场景描述-12" tabindex="-1"><a class="header-anchor" href="#场景描述-12"><span>场景描述</span></a></h3>
<p>需要下载 Twitter/X 线程中的所有图片和视频。</p>
<h3 id="解决方案-11" tabindex="-1"><a class="header-anchor" href="#解决方案-11"><span>解决方案</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 下载推文线程</span></span>
<span class="line">yt-dlp <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-o</span> <span class="token string">"~/Downloads/Twitter/%(id)s-%(title)s.%(ext)s"</span> <span class="token punctuation">\</span></span>
<span class="line">  --write-description <span class="token punctuation">\</span></span>
<span class="line">  <span class="token string">"https://twitter.com/user/status/TWEET_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例-14-创建备份" tabindex="-1"><a class="header-anchor" href="#案例-14-创建备份"><span>案例 14：创建备份</span></a></h2>
<h3 id="场景描述-13" tabindex="-1"><a class="header-anchor" href="#场景描述-13"><span>场景描述</span></a></h3>
<p>备份 YouTube 播放列表或频道的所有视频及其元数据。</p>
<h3 id="解决方案-12" tabindex="-1"><a class="header-anchor" href="#解决方案-12"><span>解决方案</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 创建完整备份</span></span>
<span class="line">yt-dlp <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-o</span> <span class="token string">"~/Backup/%(channel)s/%(upload_date)s-%(title)s.%(ext)s"</span> <span class="token punctuation">\</span></span>
<span class="line">  --write-info-json <span class="token punctuation">\</span></span>
<span class="line">  --write-description <span class="token punctuation">\</span></span>
<span class="line">  --write-thumbnail <span class="token punctuation">\</span></span>
<span class="line">  --write-subs <span class="token punctuation">\</span></span>
<span class="line">  --sub-langs <span class="token string">"all"</span> <span class="token punctuation">\</span></span>
<span class="line">  --all-subs <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-f</span> <span class="token string">"bestvideo+bestaudio/best"</span> <span class="token punctuation">\</span></span>
<span class="line">  <span class="token string">"CHANNEL_URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例-15-并行下载" tabindex="-1"><a class="header-anchor" href="#案例-15-并行下载"><span>案例 15：并行下载</span></a></h2>
<h3 id="场景描述-14" tabindex="-1"><a class="header-anchor" href="#场景描述-14"><span>场景描述</span></a></h3>
<p>需要提高下载速度，使用并行下载。</p>
<h3 id="解决方案-13" tabindex="-1"><a class="header-anchor" href="#解决方案-13"><span>解决方案</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 使用 aria2c 作为外部下载器</span></span>
<span class="line">yt-dlp <span class="token punctuation">\</span></span>
<span class="line">  --external-downloader aria2c <span class="token punctuation">\</span></span>
<span class="line">  --external-downloader-args <span class="token string">"-x 16 -k 1M"</span> <span class="token punctuation">\</span></span>
<span class="line">  <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 或使用 yt-dlp 内置的并发片段下载</span></span>
<span class="line">yt-dlp <span class="token punctuation">\</span></span>
<span class="line">  --concurrent-fragments <span class="token number">4</span> <span class="token punctuation">\</span></span>
<span class="line">  <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 批量下载时使用多线程</span></span>
<span class="line">yt-dlp <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-a</span> urls.txt <span class="token punctuation">\</span></span>
<span class="line">  --concurrent-fragments <span class="token number">4</span> <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-o</span> <span class="token string">"%(title)s.%(ext)s"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<p>以上案例展示了 yt-dlp 的各种实际应用场景。通过组合不同的参数，可以满足各种复杂的下载需求。建议：</p>
<ol>
<li>使用配置文件保存常用参数</li>
<li>使用 <code v-pre>--simulate</code> 先测试命令</li>
<li>定期更新 yt-dlp 获得最新功能</li>
<li>查阅官方文档了解更多参数和用法</li>
</ol>
<p>更多高级用法和参数，请查看<RouteLink to="/params/">参数详解</RouteLink>。</p>
</div></template>


