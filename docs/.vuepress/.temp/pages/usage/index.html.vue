<template><div><h1 id="命令行使用" tabindex="-1"><a class="header-anchor" href="#命令行使用"><span>命令行使用</span></a></h1>
<p>本章将介绍 yt-dlp 的基本命令行使用方法和常见场景。</p>
<h2 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法"><span>基本语法</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> <span class="token operator">&lt;</span>URL<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="最简单的使用" tabindex="-1"><a class="header-anchor" href="#最简单的使用"><span>最简单的使用</span></a></h2>
<h3 id="下载视频" tabindex="-1"><a class="header-anchor" href="#下载视频"><span>下载视频</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token string">"https://www.youtube.com/watch?v=VIDEO_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这将自动下载视频的最佳质量版本。</p>
<h3 id="下载播放列表" tabindex="-1"><a class="header-anchor" href="#下载播放列表"><span>下载播放列表</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token string">"https://www.youtube.com/playlist?list=PLAYLIST_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h2>
<h3 id="_1-指定下载路径和文件名" tabindex="-1"><a class="header-anchor" href="#_1-指定下载路径和文件名"><span>1. 指定下载路径和文件名</span></a></h3>
<p>使用 <code v-pre>-o</code> 参数：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 指定文件名</span></span>
<span class="line">yt-dlp <span class="token parameter variable">-o</span> <span class="token string">"my_video.mp4"</span> <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 指定路径和文件名</span></span>
<span class="line">yt-dlp <span class="token parameter variable">-o</span> <span class="token string">"/path/to/video.mp4"</span> <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用变量</span></span>
<span class="line">yt-dlp <span class="token parameter variable">-o</span> <span class="token string">"%(title)s.%(ext)s"</span> <span class="token string">"URL"</span></span>
<span class="line">yt-dlp <span class="token parameter variable">-o</span> <span class="token string">"%(title)s-%(id)s.%(ext)s"</span> <span class="token string">"URL"</span></span>
<span class="line">yt-dlp <span class="token parameter variable">-o</span> <span class="token string">"~/Downloads/%(title)s.%(ext)s"</span> <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用文件名变量" tabindex="-1"><a class="header-anchor" href="#常用文件名变量"><span>常用文件名变量</span></a></h3>
<table>
<thead>
<tr>
<th>变量</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>%(id)s</code></td>
<td>视频 ID</td>
</tr>
<tr>
<td><code v-pre>%(title)s</code></td>
<td>视频标题</td>
</tr>
<tr>
<td><code v-pre>%(ext)s</code></td>
<td>文件扩展名</td>
</tr>
<tr>
<td><code v-pre>%(uploader)s</code></td>
<td>上传者</td>
</tr>
<tr>
<td><code v-pre>%(upload_date)s</code></td>
<td>上传日期</td>
</tr>
<tr>
<td><code v-pre>%(resolution)s</code></td>
<td>分辨率</td>
</tr>
<tr>
<td><code v-pre>%(playlist_index)s</code></td>
<td>播放列表序号</td>
</tr>
<tr>
<td><code v-pre>%(playlist_title)s</code></td>
<td>播放列表标题</td>
</tr>
</tbody>
</table>
<h3 id="_2-选择视频质量" tabindex="-1"><a class="header-anchor" href="#_2-选择视频质量"><span>2. 选择视频质量</span></a></h3>
<h4 id="下载最佳质量" tabindex="-1"><a class="header-anchor" href="#下载最佳质量"><span>下载最佳质量</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token parameter variable">-f</span> <span class="token string">"bestvideo+bestaudio/best"</span> <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="下载指定分辨率" tabindex="-1"><a class="header-anchor" href="#下载指定分辨率"><span>下载指定分辨率</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 下载 1080p 视频</span></span>
<span class="line">yt-dlp <span class="token parameter variable">-f</span> <span class="token string">"bestvideo[height&lt;=1080]+bestaudio/best[height&lt;=1080]"</span> <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载 720p 视频</span></span>
<span class="line">yt-dlp <span class="token parameter variable">-f</span> <span class="token string">"bestvideo[height&lt;=720]+bestaudio/best[height&lt;=720]"</span> <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载最高 480p 视频</span></span>
<span class="line">yt-dlp <span class="token parameter variable">-f</span> <span class="token string">"bestvideo[height&lt;=480]+bestaudio/best[height&lt;=480]"</span> <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查看可用格式" tabindex="-1"><a class="header-anchor" href="#查看可用格式"><span>查看可用格式</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token parameter variable">-F</span> <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这将列出该视频所有可用的格式及其格式 ID。</p>
<h4 id="下载指定格式" tabindex="-1"><a class="header-anchor" href="#下载指定格式"><span>下载指定格式</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 使用格式 ID</span></span>
<span class="line">yt-dlp <span class="token parameter variable">-f</span> <span class="token number">22</span> <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载特定格式</span></span>
<span class="line">yt-dlp <span class="token parameter variable">-f</span> <span class="token string">"mp4"</span> <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-下载音频" tabindex="-1"><a class="header-anchor" href="#_3-下载音频"><span>3. 下载音频</span></a></h3>
<h4 id="只下载音频-最佳质量" tabindex="-1"><a class="header-anchor" href="#只下载音频-最佳质量"><span>只下载音频（最佳质量）</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token parameter variable">-x</span> --audio-format mp3 <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="指定音频质量" tabindex="-1"><a class="header-anchor" href="#指定音频质量"><span>指定音频质量</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token parameter variable">-x</span> --audio-format mp3 --audio-quality <span class="token number">0</span> <span class="token string">"URL"</span>  <span class="token comment"># 最佳质量</span></span>
<span class="line">yt-dlp <span class="token parameter variable">-x</span> --audio-format mp3 --audio-quality <span class="token number">5</span> <span class="token string">"URL"</span>  <span class="token comment"># 中等质量</span></span>
<span class="line">yt-dlp <span class="token parameter variable">-x</span> --audio-format mp3 --audio-quality <span class="token number">9</span> <span class="token string">"URL"</span>  <span class="token comment"># 最小体积</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>音频质量范围：0（最佳）到 9（最差）</p>
<h3 id="_4-下载字幕" tabindex="-1"><a class="header-anchor" href="#_4-下载字幕"><span>4. 下载字幕</span></a></h3>
<h4 id="下载所有字幕" tabindex="-1"><a class="header-anchor" href="#下载所有字幕"><span>下载所有字幕</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp --write-subs <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="下载特定语言字幕" tabindex="-1"><a class="header-anchor" href="#下载特定语言字幕"><span>下载特定语言字幕</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 下载中文字幕</span></span>
<span class="line">yt-dlp --write-subs --sub-langs <span class="token string">"zh-Hans"</span> <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载英文字幕</span></span>
<span class="line">yt-dlp --write-subs --sub-langs <span class="token string">"en"</span> <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载多个语言字幕</span></span>
<span class="line">yt-dlp --write-subs --sub-langs <span class="token string">"en,zh-Hans"</span> <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载所有可用字幕</span></span>
<span class="line">yt-dlp --write-subs --sub-langs <span class="token string">"all"</span> <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="嵌入字幕到视频" tabindex="-1"><a class="header-anchor" href="#嵌入字幕到视频"><span>嵌入字幕到视频</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp --embed-subs --sub-langs <span class="token string">"zh-Hans"</span> <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_5-下载缩略图" tabindex="-1"><a class="header-anchor" href="#_5-下载缩略图"><span>5. 下载缩略图</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 下载缩略图</span></span>
<span class="line">yt-dlp --write-thumbnail <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 嵌入缩略图到音频文件</span></span>
<span class="line">yt-dlp <span class="token parameter variable">-x</span> --audio-format mp3 --embed-thumbnail <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-下载元数据" tabindex="-1"><a class="header-anchor" href="#_6-下载元数据"><span>6. 下载元数据</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 下载 JSON 格式的元数据</span></span>
<span class="line">yt-dlp --write-info-json <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载描述文件</span></span>
<span class="line">yt-dlp --write-description <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="播放列表下载" tabindex="-1"><a class="header-anchor" href="#播放列表下载"><span>播放列表下载</span></a></h2>
<h3 id="下载整个播放列表" tabindex="-1"><a class="header-anchor" href="#下载整个播放列表"><span>下载整个播放列表</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token string">"PLAYLIST_URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="下载播放列表中的特定视频" tabindex="-1"><a class="header-anchor" href="#下载播放列表中的特定视频"><span>下载播放列表中的特定视频</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 下载第 1 个视频</span></span>
<span class="line">yt-dlp --playlist-items <span class="token number">1</span> <span class="token string">"PLAYLIST_URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载第 1 到第 5 个视频</span></span>
<span class="line">yt-dlp --playlist-items <span class="token number">1</span>-5 <span class="token string">"PLAYLIST_URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载第 1、3、5 个视频</span></span>
<span class="line">yt-dlp --playlist-items <span class="token number">1,3</span>,5 <span class="token string">"PLAYLIST_URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载第 1 到第 3 个和第 7 个视频</span></span>
<span class="line">yt-dlp --playlist-items <span class="token number">1</span>-3,7 <span class="token string">"PLAYLIST_URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="限制下载范围" tabindex="-1"><a class="header-anchor" href="#限制下载范围"><span>限制下载范围</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 从第 5 个开始下载</span></span>
<span class="line">yt-dlp --playlist-start <span class="token number">5</span> <span class="token string">"PLAYLIST_URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载到第 10 个为止</span></span>
<span class="line">yt-dlp --playlist-end <span class="token number">10</span> <span class="token string">"PLAYLIST_URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 从第 5 个开始，下载到第 10 个</span></span>
<span class="line">yt-dlp --playlist-start <span class="token number">5</span> --playlist-end <span class="token number">10</span> <span class="token string">"PLAYLIST_URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="反向播放列表" tabindex="-1"><a class="header-anchor" href="#反向播放列表"><span>反向播放列表</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 从最后一个视频开始下载</span></span>
<span class="line">yt-dlp --playlist-reverse <span class="token string">"PLAYLIST_URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="下载控制" tabindex="-1"><a class="header-anchor" href="#下载控制"><span>下载控制</span></a></h2>
<h3 id="限速下载" tabindex="-1"><a class="header-anchor" href="#限速下载"><span>限速下载</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 限制速度为 1MB/s</span></span>
<span class="line">yt-dlp --limit-rate 1M <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 限制速度为 500KB/s</span></span>
<span class="line">yt-dlp --limit-rate 500K <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="并发下载" tabindex="-1"><a class="header-anchor" href="#并发下载"><span>并发下载</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 使用 4 个并发连接</span></span>
<span class="line">yt-dlp --concurrent-fragments <span class="token number">4</span> <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="断点续传" tabindex="-1"><a class="header-anchor" href="#断点续传"><span>断点续传</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token parameter variable">--continue</span> <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="跳过已下载文件" tabindex="-1"><a class="header-anchor" href="#跳过已下载文件"><span>跳过已下载文件</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 跳过已存在的文件</span></span>
<span class="line">yt-dlp --skip-download <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 不覆盖已存在的文件</span></span>
<span class="line">yt-dlp --no-overwrites <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="批量下载" tabindex="-1"><a class="header-anchor" href="#批量下载"><span>批量下载</span></a></h2>
<h3 id="从文件读取-url" tabindex="-1"><a class="header-anchor" href="#从文件读取-url"><span>从文件读取 URL</span></a></h3>
<p>创建一个文本文件（如 <code v-pre>urls.txt</code>），每行一个 URL：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token parameter variable">-a</span> urls.txt</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="批量下载选项" tabindex="-1"><a class="header-anchor" href="#批量下载选项"><span>批量下载选项</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 批量下载并指定输出格式</span></span>
<span class="line">yt-dlp <span class="token parameter variable">-a</span> urls.txt <span class="token parameter variable">-o</span> <span class="token string">"%(playlist_index)s-%(title)s.%(ext)s"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 批量下载并限制并发</span></span>
<span class="line">yt-dlp <span class="token parameter variable">-a</span> urls.txt --concurrent-fragments <span class="token number">4</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代理设置" tabindex="-1"><a class="header-anchor" href="#代理设置"><span>代理设置</span></a></h2>
<h3 id="http-https-代理" tabindex="-1"><a class="header-anchor" href="#http-https-代理"><span>HTTP/HTTPS 代理</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token parameter variable">--proxy</span> <span class="token string">"http://127.0.0.1:8080"</span> <span class="token string">"URL"</span></span>
<span class="line">yt-dlp <span class="token parameter variable">--proxy</span> <span class="token string">"https://127.0.0.1:8080"</span> <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="socks-代理" tabindex="-1"><a class="header-anchor" href="#socks-代理"><span>SOCKS 代理</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token parameter variable">--proxy</span> <span class="token string">"socks5://127.0.0.1:1080"</span> <span class="token string">"URL"</span></span>
<span class="line">yt-dlp <span class="token parameter variable">--proxy</span> <span class="token string">"socks5://user:password@127.0.0.1:1080"</span> <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="身份验证" tabindex="-1"><a class="header-anchor" href="#身份验证"><span>身份验证</span></a></h2>
<h3 id="用户名和密码" tabindex="-1"><a class="header-anchor" href="#用户名和密码"><span>用户名和密码</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token parameter variable">-u</span> <span class="token string">"username"</span> <span class="token parameter variable">-p</span> <span class="token string">"password"</span> <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="使用-cookie" tabindex="-1"><a class="header-anchor" href="#使用-cookie"><span>使用 Cookie</span></a></h3>
<h4 id="从浏览器导入-cookie" tabindex="-1"><a class="header-anchor" href="#从浏览器导入-cookie"><span>从浏览器导入 Cookie</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 从 Chrome 导入</span></span>
<span class="line">yt-dlp --cookies-from-browser chrome <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 从 Firefox 导入</span></span>
<span class="line">yt-dlp --cookies-from-browser firefox <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 从 Safari 导入</span></span>
<span class="line">yt-dlp --cookies-from-browser safari <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用-cookie-文件" tabindex="-1"><a class="header-anchor" href="#使用-cookie-文件"><span>使用 Cookie 文件</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token parameter variable">--cookies</span> cookies.txt <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="下载特定网站视频" tabindex="-1"><a class="header-anchor" href="#下载特定网站视频"><span>下载特定网站视频</span></a></h2>
<h3 id="youtube" tabindex="-1"><a class="header-anchor" href="#youtube"><span>YouTube</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 下载 YouTube 视频</span></span>
<span class="line">yt-dlp <span class="token string">"https://www.youtube.com/watch?v=VIDEO_ID"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载 YouTube 播放列表</span></span>
<span class="line">yt-dlp <span class="token string">"https://www.youtube.com/playlist?list=PLAYLIST_ID"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载 YouTube 频道的所有视频</span></span>
<span class="line">yt-dlp <span class="token string">"https://www.youtube.com/@ChannelName/videos"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载 YouTube 直播</span></span>
<span class="line">yt-dlp --live-from-start <span class="token string">"https://www.youtube.com/watch?v=LIVE_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bilibili" tabindex="-1"><a class="header-anchor" href="#bilibili"><span>Bilibili</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 下载 Bilibili 视频</span></span>
<span class="line">yt-dlp <span class="token string">"https://www.bilibili.com/video/BV_ID"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载 Bilibili 番剧</span></span>
<span class="line">yt-dlp <span class="token string">"https://www.bilibili.com/bangumi/play/EP_ID"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载 Bilibili UP 主的所有视频</span></span>
<span class="line">yt-dlp <span class="token string">"https://space.bilibili.com/USER_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="twitter-x" tabindex="-1"><a class="header-anchor" href="#twitter-x"><span>Twitter/X</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 下载 Twitter 视频</span></span>
<span class="line">yt-dlp <span class="token string">"https://twitter.com/user/status/TWEET_ID"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载 X 视频</span></span>
<span class="line">yt-dlp <span class="token string">"https://x.com/user/status/TWEET_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="instagram" tabindex="-1"><a class="header-anchor" href="#instagram"><span>Instagram</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 下载 Instagram 视频</span></span>
<span class="line">yt-dlp <span class="token string">"https://www.instagram.com/p/POST_ID"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载 Instagram Reels</span></span>
<span class="line">yt-dlp <span class="token string">"https://www.instagram.com/reel/REEL_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tiktok" tabindex="-1"><a class="header-anchor" href="#tiktok"><span>TikTok</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 下载 TikTok 视频</span></span>
<span class="line">yt-dlp <span class="token string">"https://www.tiktok.com/@user/video/VIDEO_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模拟和测试" tabindex="-1"><a class="header-anchor" href="#模拟和测试"><span>模拟和测试</span></a></h2>
<h3 id="模拟下载-不实际下载" tabindex="-1"><a class="header-anchor" href="#模拟下载-不实际下载"><span>模拟下载（不实际下载）</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token parameter variable">--simulate</span> <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="查看视频信息" tabindex="-1"><a class="header-anchor" href="#查看视频信息"><span>查看视频信息</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 查看 JSON 格式信息</span></span>
<span class="line">yt-dlp --dump-json <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看简要信息</span></span>
<span class="line">yt-dlp --get-title <span class="token string">"URL"</span></span>
<span class="line">yt-dlp --get-id <span class="token string">"URL"</span></span>
<span class="line">yt-dlp --get-description <span class="token string">"URL"</span></span>
<span class="line">yt-dlp --get-duration <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="列出格式但不下载" tabindex="-1"><a class="header-anchor" href="#列出格式但不下载"><span>列出格式但不下载</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token parameter variable">-F</span> <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="静默和详细输出" tabindex="-1"><a class="header-anchor" href="#静默和详细输出"><span>静默和详细输出</span></a></h2>
<h3 id="静默模式" tabindex="-1"><a class="header-anchor" href="#静默模式"><span>静默模式</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 不显示输出</span></span>
<span class="line">yt-dlp <span class="token parameter variable">-q</span> <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 只显示错误</span></span>
<span class="line">yt-dlp --no-warnings <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="详细模式" tabindex="-1"><a class="header-anchor" href="#详细模式"><span>详细模式</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 显示详细输出</span></span>
<span class="line">yt-dlp <span class="token parameter variable">-v</span> <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示调试信息</span></span>
<span class="line">yt-dlp <span class="token parameter variable">--verbose</span> <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实用技巧" tabindex="-1"><a class="header-anchor" href="#实用技巧"><span>实用技巧</span></a></h2>
<h3 id="_1-组合使用多个选项" tabindex="-1"><a class="header-anchor" href="#_1-组合使用多个选项"><span>1. 组合使用多个选项</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 下载最佳质量，保存到指定路径，嵌入字幕和缩略图</span></span>
<span class="line">yt-dlp <span class="token parameter variable">-f</span> <span class="token string">"bestvideo+bestaudio/best"</span> <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-o</span> <span class="token string">"~/Videos/%(title)s.%(ext)s"</span> <span class="token punctuation">\</span></span>
<span class="line">  --write-subs --sub-langs <span class="token string">"zh-Hans"</span> <span class="token punctuation">\</span></span>
<span class="line">  --embed-subs <span class="token punctuation">\</span></span>
<span class="line">  --write-thumbnail <span class="token punctuation">\</span></span>
<span class="line">  --embed-thumbnail <span class="token punctuation">\</span></span>
<span class="line">  <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-使用配置文件简化命令" tabindex="-1"><a class="header-anchor" href="#_2-使用配置文件简化命令"><span>2. 使用配置文件简化命令</span></a></h3>
<p>在配置文件中设置常用选项，然后：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 使用配置文件</span></span>
<span class="line">yt-dlp --config-location /path/to/config <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 忽略配置文件</span></span>
<span class="line">yt-dlp --ignore-config <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-下载速度优化" tabindex="-1"><a class="header-anchor" href="#_3-下载速度优化"><span>3. 下载速度优化</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 使用多线程下载</span></span>
<span class="line">yt-dlp --concurrent-fragments <span class="token number">4</span> <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">--buffersize</span> 16K <span class="token punctuation">\</span></span>
<span class="line">  <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="下一步" tabindex="-1"><a class="header-anchor" href="#下一步"><span>下一步</span></a></h2>
<ul>
<li>查看<RouteLink to="/params/">参数详解</RouteLink>了解所有可用参数</li>
<li>查看<RouteLink to="/sites/">支持网站</RouteLink>了解支持的网站列表</li>
<li>查看<RouteLink to="/practice/">技术实战</RouteLink>学习实际应用场景</li>
</ul>
</div></template>


