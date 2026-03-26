<template><div><h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始"><span>快速开始</span></a></h2>
<h3 id="什么是-yt-dlp" tabindex="-1"><a class="header-anchor" href="#什么是-yt-dlp"><span>什么是 yt-dlp？</span></a></h3>
<p>yt-dlp 是一个基于 youtube-dl 的增强版视频下载工具，支持从数千个视频网站下载视频 and 改进。</p>
<h3 id="主要特性" tabindex="-1"><a class="header-anchor" href="#主要特性"><span>主要特性</span></a></h3>
<ul>
<li>🎥 支持 1000+ 视频网站</li>
<li>🚀 更快的下载速度</li>
<li>🎵 支持音频提取和格式转换</li>
<li>📝 支持字幕下载</li>
<li>🔐 支持需要登录的网站</li>
<li>💻 跨平台支持（Windows、Linux、macOS）</li>
</ul>
<h3 id="快速安装" tabindex="-1"><a class="header-anchor" href="#快速安装"><span>快速安装</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># Windows (使用 winget)</span></span>
<span class="line">winget <span class="token function">install</span> yt-dlp</span>
<span class="line"></span>
<span class="line"><span class="token comment"># macOS (使用 Homebrew)</span></span>
<span class="line">brew <span class="token function">install</span> yt-dlp</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Linux (使用 pip)</span></span>
<span class="line">pip <span class="token function">install</span> yt-dlp</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简单使用" tabindex="-1"><a class="header-anchor" href="#简单使用"><span>简单使用</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 下载视频</span></span>
<span class="line">yt-dlp <span class="token string">"https://www.youtube.com/watch?v=VIDEO_ID"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载最佳质量</span></span>
<span class="line">yt-dlp <span class="token parameter variable">-f</span> <span class="token string">"best"</span> <span class="token string">"https://www.youtube.com/watch?v=VIDEO_ID"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 只下载音频</span></span>
<span class="line">yt-dlp <span class="token parameter variable">-x</span> --audio-format mp3 <span class="token string">"https://www.youtube.com/watch?v=VIDEO_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


