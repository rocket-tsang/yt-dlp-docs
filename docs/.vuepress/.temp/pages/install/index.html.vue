<template><div><h1 id="安装指南" tabindex="-1"><a class="header-anchor" href="#安装指南"><span>安装指南</span></a></h1>
<p>本章节将介绍如何在 Windows、Linux 和 macOS 上安装 yt-dlp。</p>
<h2 id="系统要求" tabindex="-1"><a class="header-anchor" href="#系统要求"><span>系统要求</span></a></h2>
<ul>
<li><strong>Python</strong>: 3.7 或更高版本（某些安装方法需要）</li>
<li><strong>FFmpeg</strong>: 用于视频/音频合并和格式转换（可选但推荐）</li>
<li><strong>网络</strong>: 稳定的互联网连接</li>
</ul>
<h2 id="windows-安装" tabindex="-1"><a class="header-anchor" href="#windows-安装"><span>Windows 安装</span></a></h2>
<h3 id="方法一-使用-winget-推荐" tabindex="-1"><a class="header-anchor" href="#方法一-使用-winget-推荐"><span>方法一：使用 winget（推荐）</span></a></h3>
<p>Windows 11 和 Windows 10（1809及以后）自带 winget 包管理器。</p>
<div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell"><pre v-pre><code class="language-powershell"><span class="line">winget install yt-dlp</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="方法二-使用-chocolatey" tabindex="-1"><a class="header-anchor" href="#方法二-使用-chocolatey"><span>方法二：使用 Chocolatey</span></a></h3>
<p>如果你已安装 Chocolatey：</p>
<div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell"><pre v-pre><code class="language-powershell"><span class="line">choco install yt-dlp</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="方法三-使用-scoop" tabindex="-1"><a class="header-anchor" href="#方法三-使用-scoop"><span>方法三：使用 Scoop</span></a></h3>
<p>如果你使用 Scoop：</p>
<div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell"><pre v-pre><code class="language-powershell"><span class="line">scoop install yt-dlp</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="方法四-下载可执行文件" tabindex="-1"><a class="header-anchor" href="#方法四-下载可执行文件"><span>方法四：下载可执行文件</span></a></h3>
<ol>
<li>访问 <a href="https://github.com/yt-dlp/yt-dlp/releases" target="_blank" rel="noopener noreferrer">yt-dlp releases 页面</a></li>
<li>下载最新的 <code v-pre>yt-dlp.exe</code></li>
<li>将文件放到任意目录（建议添加到 PATH）</li>
</ol>
<h3 id="方法五-使用-pip" tabindex="-1"><a class="header-anchor" href="#方法五-使用-pip"><span>方法五：使用 pip</span></a></h3>
<div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell"><pre v-pre><code class="language-powershell"><span class="line">pip install yt-dlp</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="安装-ffmpeg-可选但推荐" tabindex="-1"><a class="header-anchor" href="#安装-ffmpeg-可选但推荐"><span>安装 FFmpeg（可选但推荐）</span></a></h3>
<div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell"><pre v-pre><code class="language-powershell"><span class="line"><span class="token comment"># 使用 winget</span></span>
<span class="line">winget install ffmpeg</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 或使用 Chocolatey</span></span>
<span class="line">choco install ffmpeg</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 或使用 Scoop</span></span>
<span class="line">scoop install ffmpeg</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="linux-安装" tabindex="-1"><a class="header-anchor" href="#linux-安装"><span>Linux 安装</span></a></h2>
<h3 id="方法一-使用-pip-推荐" tabindex="-1"><a class="header-anchor" href="#方法一-使用-pip-推荐"><span>方法一：使用 pip（推荐）</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">pip <span class="token function">install</span> yt-dlp</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>或使用 pip3：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">pip3 <span class="token function">install</span> yt-dlp</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="方法二-使用包管理器" tabindex="-1"><a class="header-anchor" href="#方法二-使用包管理器"><span>方法二：使用包管理器</span></a></h3>
<h4 id="ubuntu-debian" tabindex="-1"><a class="header-anchor" href="#ubuntu-debian"><span>Ubuntu/Debian</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> add-apt-repository ppa:tomtomtom/yt-dlp</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> update</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> yt-dlp</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="arch-linux" tabindex="-1"><a class="header-anchor" href="#arch-linux"><span>Arch Linux</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> yt-dlp</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="fedora" tabindex="-1"><a class="header-anchor" href="#fedora"><span>Fedora</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> dnf <span class="token function">install</span> yt-dlp</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="opensuse" tabindex="-1"><a class="header-anchor" href="#opensuse"><span>openSUSE</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> <span class="token function">zypper</span> <span class="token function">install</span> yt-dlp</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="方法三-下载二进制文件" tabindex="-1"><a class="header-anchor" href="#方法三-下载二进制文件"><span>方法三：下载二进制文件</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp <span class="token parameter variable">-o</span> /usr/local/bin/yt-dlp</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">chmod</span> a+rx /usr/local/bin/yt-dlp</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-ffmpeg-可选但推荐-1" tabindex="-1"><a class="header-anchor" href="#安装-ffmpeg-可选但推荐-1"><span>安装 FFmpeg（可选但推荐）</span></a></h3>
<h4 id="ubuntu-debian-1" tabindex="-1"><a class="header-anchor" href="#ubuntu-debian-1"><span>Ubuntu/Debian</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> ffmpeg</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="arch-linux-1" tabindex="-1"><a class="header-anchor" href="#arch-linux-1"><span>Arch Linux</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> ffmpeg</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="fedora-1" tabindex="-1"><a class="header-anchor" href="#fedora-1"><span>Fedora</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> dnf <span class="token function">install</span> ffmpeg</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="macos-安装" tabindex="-1"><a class="header-anchor" href="#macos-安装"><span>macOS 安装</span></a></h2>
<h3 id="方法一-使用-homebrew-推荐" tabindex="-1"><a class="header-anchor" href="#方法一-使用-homebrew-推荐"><span>方法一：使用 Homebrew（推荐）</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">brew <span class="token function">install</span> yt-dlp</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="方法二-使用-macports" tabindex="-1"><a class="header-anchor" href="#方法二-使用-macports"><span>方法二：使用 MacPorts</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> port <span class="token function">install</span> yt-dlp</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="方法三-使用-pip" tabindex="-1"><a class="header-anchor" href="#方法三-使用-pip"><span>方法三：使用 pip</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">pip3 <span class="token function">install</span> yt-dlp</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="方法四-下载二进制文件" tabindex="-1"><a class="header-anchor" href="#方法四-下载二进制文件"><span>方法四：下载二进制文件</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_macos <span class="token parameter variable">-o</span> /usr/local/bin/yt-dlp</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">chmod</span> a+rx /usr/local/bin/yt-dlp</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-ffmpeg-可选但推荐-2" tabindex="-1"><a class="header-anchor" href="#安装-ffmpeg-可选但推荐-2"><span>安装 FFmpeg（可选但推荐）</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">brew <span class="token function">install</span> ffmpeg</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="验证安装" tabindex="-1"><a class="header-anchor" href="#验证安装"><span>验证安装</span></a></h2>
<p>安装完成后，打开终端或命令提示符，运行：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token parameter variable">--version</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>如果看到版本号，说明安装成功。</p>
<h2 id="更新-yt-dlp" tabindex="-1"><a class="header-anchor" href="#更新-yt-dlp"><span>更新 yt-dlp</span></a></h2>
<p>yt-dlp 更新频繁，建议定期更新以获得最新功能和修复。</p>
<h3 id="使用内置更新功能" tabindex="-1"><a class="header-anchor" href="#使用内置更新功能"><span>使用内置更新功能</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token parameter variable">-U</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="使用包管理器更新" tabindex="-1"><a class="header-anchor" href="#使用包管理器更新"><span>使用包管理器更新</span></a></h3>
<h4 id="windows" tabindex="-1"><a class="header-anchor" href="#windows"><span>Windows</span></a></h4>
<div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell"><pre v-pre><code class="language-powershell"><span class="line"><span class="token comment"># winget</span></span>
<span class="line">winget upgrade yt-dlp</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Chocolatey</span></span>
<span class="line">choco upgrade yt-dlp</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Scoop</span></span>
<span class="line">scoop update yt-dlp</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>Linux</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># pip</span></span>
<span class="line">pip <span class="token function">install</span> <span class="token parameter variable">-U</span> yt-dlp</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Ubuntu/Debian</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">apt</span> upgrade yt-dlp</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Arch Linux</span></span>
<span class="line"><span class="token function">sudo</span> pacman <span class="token parameter variable">-Syu</span> yt-dlp</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="macos" tabindex="-1"><a class="header-anchor" href="#macos"><span>macOS</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># Homebrew</span></span>
<span class="line">brew upgrade yt-dlp</span>
<span class="line"></span>
<span class="line"><span class="token comment"># pip</span></span>
<span class="line">pip3 <span class="token function">install</span> <span class="token parameter variable">-U</span> yt-dlp</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖"><span>安装依赖</span></a></h2>
<h3 id="ffmpeg" tabindex="-1"><a class="header-anchor" href="#ffmpeg"><span>FFmpeg</span></a></h3>
<p>FFmpeg 用于视频和音频流的合并、格式转换等操作。虽然 yt-dlp 可以在没有 FFmpeg 的情况下工作，但某些功能需要 FFmpeg 支持。</p>
<h4 id="windows-1" tabindex="-1"><a class="header-anchor" href="#windows-1"><span>Windows</span></a></h4>
<div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell"><pre v-pre><code class="language-powershell"><span class="line"><span class="token comment"># winget</span></span>
<span class="line">winget install ffmpeg</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Chocolatey</span></span>
<span class="line">choco install ffmpeg</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="linux-1" tabindex="-1"><a class="header-anchor" href="#linux-1"><span>Linux</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># Ubuntu/Debian</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> ffmpeg</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Arch Linux</span></span>
<span class="line"><span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> ffmpeg</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Fedora</span></span>
<span class="line"><span class="token function">sudo</span> dnf <span class="token function">install</span> ffmpeg</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="macos-1" tabindex="-1"><a class="header-anchor" href="#macos-1"><span>macOS</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">brew <span class="token function">install</span> ffmpeg</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="其他可选依赖" tabindex="-1"><a class="header-anchor" href="#其他可选依赖"><span>其他可选依赖</span></a></h3>
<h4 id="rtmpdump" tabindex="-1"><a class="header-anchor" href="#rtmpdump"><span>rtmpdump</span></a></h4>
<p>用于下载 RTMP 流：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># Linux (Ubuntu/Debian)</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> rtmpdump</span>
<span class="line"></span>
<span class="line"><span class="token comment"># macOS</span></span>
<span class="line">brew <span class="token function">install</span> rtmpdump</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="phantomjs" tabindex="-1"><a class="header-anchor" href="#phantomjs"><span>phantomjs</span></a></h4>
<p>某些网站可能需要：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># Linux (Ubuntu/Debian)</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> phantomjs</span>
<span class="line"></span>
<span class="line"><span class="token comment"># macOS</span></span>
<span class="line">brew <span class="token function">install</span> phantomjs</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h2>
<p>yt-dlp 支持配置文件来存储常用的参数设置。</p>
<h3 id="配置文件位置" tabindex="-1"><a class="header-anchor" href="#配置文件位置"><span>配置文件位置</span></a></h3>
<h4 id="windows-2" tabindex="-1"><a class="header-anchor" href="#windows-2"><span>Windows</span></a></h4>
<ul>
<li><code v-pre>%APPDATA%\yt-dlp\config</code></li>
<li><code v-pre>%APPDATA%\yt-dlp\config.txt</code></li>
<li><code v-pre>C:\Users\&lt;用户名&gt;\yt-dlp.conf</code></li>
</ul>
<h4 id="linux-macos" tabindex="-1"><a class="header-anchor" href="#linux-macos"><span>Linux/macOS</span></a></h4>
<ul>
<li><code v-pre>/etc/yt-dlp/config</code></li>
<li><code v-pre>/etc/yt-dlp.conf</code></li>
<li><code v-pre>~/.config/yt-dlp/config</code></li>
<li><code v-pre>~/.config/yt-dlp.conf</code></li>
<li><code v-pre>~/.yt-dlp/config</code></li>
<li><code v-pre>~/.yt-dlp.conf</code></li>
</ul>
<h3 id="配置文件示例" tabindex="-1"><a class="header-anchor" href="#配置文件示例"><span>配置文件示例</span></a></h3>
<p>创建配置文件并添加常用参数：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 默认下载路径</span></span>
<span class="line"><span class="token parameter variable">-o</span> ~/Downloads/%<span class="token punctuation">(</span>title<span class="token punctuation">)</span>s.%<span class="token punctuation">(</span>ext<span class="token punctuation">)</span>s</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载最佳质量</span></span>
<span class="line"><span class="token parameter variable">-f</span> bestvideo+bestaudio/best</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 嵌入缩略图</span></span>
<span class="line">--embed-thumbnail</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 嵌入字幕</span></span>
<span class="line">--embed-subs</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载字幕</span></span>
<span class="line">--write-subs</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 代理设置</span></span>
<span class="line"><span class="token comment"># --proxy socks5://127.0.0.1:1080</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 限速（例如：1MB/s）</span></span>
<span class="line"><span class="token comment"># --limit-rate 1M</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="故障排除" tabindex="-1"><a class="header-anchor" href="#故障排除"><span>故障排除</span></a></h2>
<h3 id="权限错误-linux-macos" tabindex="-1"><a class="header-anchor" href="#权限错误-linux-macos"><span>权限错误（Linux/macOS）</span></a></h3>
<p>如果遇到权限错误，尝试：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> <span class="token function">chmod</span> a+rx /usr/local/bin/yt-dlp</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="python-版本问题" tabindex="-1"><a class="header-anchor" href="#python-版本问题"><span>Python 版本问题</span></a></h3>
<p>确保安装了 Python 3.7 或更高版本：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">python3 <span class="token parameter variable">--version</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="网络问题" tabindex="-1"><a class="header-anchor" href="#网络问题"><span>网络问题</span></a></h3>
<p>如果无法下载，可能需要配置代理：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token parameter variable">--proxy</span> socks5://127.0.0.1:1080 <span class="token operator">&lt;</span>URL<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="windows-找不到命令" tabindex="-1"><a class="header-anchor" href="#windows-找不到命令"><span>Windows 找不到命令</span></a></h3>
<p>如果将 yt-dlp.exe 放在非 PATH 目录，需要：</p>
<ol>
<li>将目录添加到 PATH</li>
<li>或使用完整路径运行</li>
</ol>
<h3 id="macos-安全限制" tabindex="-1"><a class="header-anchor" href="#macos-安全限制"><span>macOS 安全限制</span></a></h3>
<p>如果遇到&quot;无法验证开发者&quot;的错误：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">xattr <span class="token parameter variable">-d</span> com.apple.quarantine /usr/local/bin/yt-dlp</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="下一步" tabindex="-1"><a class="header-anchor" href="#下一步"><span>下一步</span></a></h2>
<p>安装完成后，你可以：</p>
<ul>
<li>查看<RouteLink to="/usage/">命令行使用</RouteLink>学习基本操作</li>
<li>查看<RouteLink to="/params/">参数详解</RouteLink>了解各种参数配置</li>
<li>查看<RouteLink to="/practice/">技术实战</RouteLink>学习实际应用场景</li>
</ul>
</div></template>


