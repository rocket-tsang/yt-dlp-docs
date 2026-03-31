<template><div><h1 id="支持网站列表" tabindex="-1"><a class="header-anchor" href="#支持网站列表"><span>支持网站列表</span></a></h1>
<p>yt-dlp 支持超过 1000+ 个视频网站，本章将介绍一些常用的支持网站及其使用注意事项。</p>
<h2 id="主要视频网站" tabindex="-1"><a class="header-anchor" href="#主要视频网站"><span>主要视频网站</span></a></h2>
<h3 id="youtube" tabindex="-1"><a class="header-anchor" href="#youtube"><span>YouTube</span></a></h3>
<p>YouTube 是 yt-dlp 支持最完善的网站之一。</p>
<h4 id="支持的功能" tabindex="-1"><a class="header-anchor" href="#支持的功能"><span>支持的功能</span></a></h4>
<ul>
<li>✅ 视频下载（所有分辨率）</li>
<li>✅ 播放列表下载</li>
<li>✅ 频道下载</li>
<li>✅ 直播下载</li>
<li>✅ 字幕下载（包括自动生成字幕）</li>
<li>✅ 缩略图下载</li>
<li>✅ 评论区下载</li>
<li>✅ 会员专属视频（需要登录）</li>
</ul>
<h4 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 下载单个视频</span></span>
<span class="line">yt-dlp <span class="token string">"https://www.youtube.com/watch?v=VIDEO_ID"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载最佳质量</span></span>
<span class="line">yt-dlp <span class="token parameter variable">-f</span> <span class="token string">"bestvideo+bestaudio/best"</span> <span class="token string">"https://www.youtube.com/watch?v=VIDEO_ID"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载播放列表</span></span>
<span class="line">yt-dlp <span class="token string">"https://www.youtube.com/playlist?list=PLAYLIST_ID"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载频道所有视频</span></span>
<span class="line">yt-dlp <span class="token string">"https://www.youtube.com/@ChannelName/videos"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载直播</span></span>
<span class="line">yt-dlp --live-from-start <span class="token string">"https://www.youtube.com/watch?v=LIVE_ID"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载字幕</span></span>
<span class="line">yt-dlp --write-subs --sub-langs <span class="token string">"zh-Hans,en"</span> <span class="token string">"https://www.youtube.com/watch?v=VIDEO_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bilibili-哔哩哔哩" tabindex="-1"><a class="header-anchor" href="#bilibili-哔哩哔哩"><span>Bilibili（哔哩哔哩）</span></a></h3>
<p>国内最流行的视频网站之一。</p>
<h4 id="支持的功能-1" tabindex="-1"><a class="header-anchor" href="#支持的功能-1"><span>支持的功能</span></a></h4>
<ul>
<li>✅ 视频下载</li>
<li>✅ 番剧下载</li>
<li>✅ 播放列表下载</li>
<li>✅ UP 主视频下载</li>
<li>✅ 字幕下载</li>
<li>✅ 弹幕下载（部分支持）</li>
</ul>
<h4 id="使用示例-1" tabindex="-1"><a class="header-anchor" href="#使用示例-1"><span>使用示例</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 下载普通视频</span></span>
<span class="line">yt-dlp <span class="token string">"https://www.bilibili.com/video/BV_ID"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载番剧</span></span>
<span class="line">yt-dlp <span class="token string">"https://www.bilibili.com/bangumi/play/EP_ID"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载 UP 主所有视频</span></span>
<span class="line">yt-dlp <span class="token string">"https://space.bilibili.com/USER_ID"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载收藏夹</span></span>
<span class="line">yt-dlp <span class="token string">"https://space.bilibili.com/USER_ID/favlist?fid=FAV_ID"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 指定画质</span></span>
<span class="line">yt-dlp <span class="token parameter variable">-f</span> <span class="token string">"bestvideo[height&lt;=1080]+bestaudio"</span> <span class="token string">"https://www.bilibili.com/video/BV_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="twitter-x" tabindex="-1"><a class="header-anchor" href="#twitter-x"><span>Twitter/X</span></a></h3>
<h4 id="支持的功能-2" tabindex="-1"><a class="header-anchor" href="#支持的功能-2"><span>支持的功能</span></a></h4>
<ul>
<li>✅ 视频下载</li>
<li>✅ GIF 下载</li>
<li>✅ 图片下载</li>
<li>✅ 推文线程下载</li>
</ul>
<h4 id="使用示例-2" tabindex="-1"><a class="header-anchor" href="#使用示例-2"><span>使用示例</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 下载 Twitter 视频</span></span>
<span class="line">yt-dlp <span class="token string">"https://twitter.com/user/status/TWEET_ID"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载 X 视频</span></span>
<span class="line">yt-dlp <span class="token string">"https://x.com/user/status/TWEET_ID"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载推文中的所有媒体</span></span>
<span class="line">yt-dlp <span class="token string">"https://twitter.com/user/status/TWEET_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="instagram" tabindex="-1"><a class="header-anchor" href="#instagram"><span>Instagram</span></a></h3>
<h4 id="支持的功能-3" tabindex="-1"><a class="header-anchor" href="#支持的功能-3"><span>支持的功能</span></a></h4>
<ul>
<li>✅ 视频下载</li>
<li>✅ 图片下载</li>
<li>✅ Reels 下载</li>
<li>✅ Stories 下载（需要登录）</li>
<li>✅ IGTV 下载</li>
</ul>
<h4 id="使用示例-3" tabindex="-1"><a class="header-anchor" href="#使用示例-3"><span>使用示例</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 下载 Instagram 视频</span></span>
<span class="line">yt-dlp <span class="token string">"https://www.instagram.com/p/POST_ID"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载 Reels</span></span>
<span class="line">yt-dlp <span class="token string">"https://www.instagram.com/reel/REEL_ID"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载 Stories（需要登录）</span></span>
<span class="line">yt-dlp <span class="token parameter variable">-u</span> <span class="token string">"username"</span> <span class="token parameter variable">-p</span> <span class="token string">"password"</span> <span class="token string">"https://www.instagram.com/stories/username"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载 IGTV</span></span>
<span class="line">yt-dlp <span class="token string">"https://www.instagram.com/tv/TV_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tiktok" tabindex="-1"><a class="header-anchor" href="#tiktok"><span>TikTok</span></a></h3>
<h4 id="支持的功能-4" tabindex="-1"><a class="header-anchor" href="#支持的功能-4"><span>支持的功能</span></a></h4>
<ul>
<li>✅ 视频下载</li>
<li>✅ 无水印下载</li>
<li>✅ 图片下载</li>
<li>✅ 播放列表下载</li>
</ul>
<h4 id="使用示例-4" tabindex="-1"><a class="header-anchor" href="#使用示例-4"><span>使用示例</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 下载 TikTok 视频</span></span>
<span class="line">yt-dlp <span class="token string">"https://www.tiktok.com/@user/video/VIDEO_ID"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载无水印视频</span></span>
<span class="line">yt-dlp <span class="token string">"https://www.tiktok.com/@user/video/VIDEO_ID"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载 TikTok 播放列表</span></span>
<span class="line">yt-dlp <span class="token string">"https://www.tiktok.com/@user"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他热门网站" tabindex="-1"><a class="header-anchor" href="#其他热门网站"><span>其他热门网站</span></a></h2>
<h3 id="vimeo" tabindex="-1"><a class="header-anchor" href="#vimeo"><span>Vimeo</span></a></h3>
<p>专业视频平台。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 下载 Vimeo 视频</span></span>
<span class="line">yt-dlp <span class="token string">"https://vimeo.com/VIDEO_ID"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载密码保护的视频</span></span>
<span class="line">yt-dlp --video-password <span class="token string">"password"</span> <span class="token string">"https://vimeo.com/VIDEO_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="facebook" tabindex="-1"><a class="header-anchor" href="#facebook"><span>Facebook</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 下载 Facebook 视频</span></span>
<span class="line">yt-dlp <span class="token string">"https://www.facebook.com/watch?v=VIDEO_ID"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载 Reels</span></span>
<span class="line">yt-dlp <span class="token string">"https://www.facebook.com/reel/REEL_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="twitch" tabindex="-1"><a class="header-anchor" href="#twitch"><span>Twitch</span></a></h3>
<p>游戏直播平台。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 下载 Twitch 视频</span></span>
<span class="line">yt-dlp <span class="token string">"https://www.twitch.tv/videos/VIDEO_ID"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载直播</span></span>
<span class="line">yt-dlp <span class="token string">"https://www.twitch.tv/CHANNEL_NAME"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载剪辑</span></span>
<span class="line">yt-dlp <span class="token string">"https://www.twitch.tv/clip/CLIP_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dailymotion" tabindex="-1"><a class="header-anchor" href="#dailymotion"><span>Dailymotion</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token string">"https://www.dailymotion.com/video/VIDEO_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="reddit" tabindex="-1"><a class="header-anchor" href="#reddit"><span>Reddit</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 下载 Reddit 视频</span></span>
<span class="line">yt-dlp <span class="token string">"https://www.reddit.com/r/subreddit/comments/POST_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pornhub" tabindex="-1"><a class="header-anchor" href="#pornhub"><span>Pornhub</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 下载视频</span></span>
<span class="line">yt-dlp <span class="token string">"https://www.pornhub.com/view_video.php?viewkey=VIDEO_ID"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载需要登录的视频</span></span>
<span class="line">yt-dlp --cookies-from-browser chrome <span class="token string">"https://www.pornhub.com/view_video.php?viewkey=VIDEO_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="国内视频网站" tabindex="-1"><a class="header-anchor" href="#国内视频网站"><span>国内视频网站</span></a></h2>
<h3 id="优酷" tabindex="-1"><a class="header-anchor" href="#优酷"><span>优酷</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token string">"https://v.youku.com/v_show/id_VIDEO_ID.html"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="腾讯视频" tabindex="-1"><a class="header-anchor" href="#腾讯视频"><span>腾讯视频</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token string">"https://v.qq.com/x/page/VIDEO_ID.html"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="爱奇艺" tabindex="-1"><a class="header-anchor" href="#爱奇艺"><span>爱奇艺</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token string">"https://www.iqiyi.com/v_VIDEO_ID.html"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="芒果tv" tabindex="-1"><a class="header-anchor" href="#芒果tv"><span>芒果TV</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token string">"https://www.mgtv.com/b/VIDEO_ID.html"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="搜狐视频" tabindex="-1"><a class="header-anchor" href="#搜狐视频"><span>搜狐视频</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token string">"https://tv.sohu.com/v/VIDEO_ID.html"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="酷燃视频" tabindex="-1"><a class="header-anchor" href="#酷燃视频"><span>酷燃视频</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token string">"https://www.kur.cn/video/VIDEO_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="音乐网站" tabindex="-1"><a class="header-anchor" href="#音乐网站"><span>音乐网站</span></a></h2>
<h3 id="soundcloud" tabindex="-1"><a class="header-anchor" href="#soundcloud"><span>SoundCloud</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 下载音频</span></span>
<span class="line">yt-dlp <span class="token string">"https://soundcloud.com/user/track"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载播放列表</span></span>
<span class="line">yt-dlp <span class="token string">"https://soundcloud.com/user/sets/playlist"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mixcloud" tabindex="-1"><a class="header-anchor" href="#mixcloud"><span>Mixcloud</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token string">"https://www.mixcloud.com/user/show/"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="bandcamp" tabindex="-1"><a class="header-anchor" href="#bandcamp"><span>Bandcamp</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token string">"https://artist.bandcamp.com/track/song"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="网易云音乐" tabindex="-1"><a class="header-anchor" href="#网易云音乐"><span>网易云音乐</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token string">"https://music.163.com/song?id=SONG_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="qq音乐" tabindex="-1"><a class="header-anchor" href="#qq音乐"><span>QQ音乐</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token string">"https://y.qq.com/n/ryqq/songDetail/SONG_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="社交媒体网站" tabindex="-1"><a class="header-anchor" href="#社交媒体网站"><span>社交媒体网站</span></a></h2>
<h3 id="pinterest" tabindex="-1"><a class="header-anchor" href="#pinterest"><span>Pinterest</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token string">"https://www.pinterest.com/pin/PIN_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="tumblr" tabindex="-1"><a class="header-anchor" href="#tumblr"><span>Tumblr</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token string">"https://user.tumblr.com/post/POST_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="snapchat" tabindex="-1"><a class="header-anchor" href="#snapchat"><span>Snapchat</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token string">"https://www.snapchat.com/spotlight/SPOTLIGHT_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="新闻媒体网站" tabindex="-1"><a class="header-anchor" href="#新闻媒体网站"><span>新闻媒体网站</span></a></h2>
<h3 id="cnn" tabindex="-1"><a class="header-anchor" href="#cnn"><span>CNN</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token string">"https://www.cnn.com/videos/VIDEO_PATH"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="bbc" tabindex="-1"><a class="header-anchor" href="#bbc"><span>BBC</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token string">"https://www.bbc.com/news/av/VIDEO_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="nbc" tabindex="-1"><a class="header-anchor" href="#nbc"><span>NBC</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token string">"https://www.nbcnews.com/video/VIDEO_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="教育网站" tabindex="-1"><a class="header-anchor" href="#教育网站"><span>教育网站</span></a></h2>
<h3 id="coursera" tabindex="-1"><a class="header-anchor" href="#coursera"><span>Coursera</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 需要登录</span></span>
<span class="line">yt-dlp <span class="token parameter variable">-u</span> <span class="token string">"username"</span> <span class="token parameter variable">-p</span> <span class="token string">"password"</span> <span class="token string">"https://www.coursera.org/learn/course"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="udemy" tabindex="-1"><a class="header-anchor" href="#udemy"><span>Udemy</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 需要登录</span></span>
<span class="line">yt-dlp <span class="token parameter variable">-u</span> <span class="token string">"username"</span> <span class="token parameter variable">-p</span> <span class="token string">"password"</span> <span class="token string">"https://www.udemy.com/course"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="edx" tabindex="-1"><a class="header-anchor" href="#edx"><span>edX</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token string">"https://www.edx.org/course/course-name"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="khan-academy" tabindex="-1"><a class="header-anchor" href="#khan-academy"><span>Khan Academy</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token string">"https://www.khanacademy.org/video/video-name"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="其他网站" tabindex="-1"><a class="header-anchor" href="#其他网站"><span>其他网站</span></a></h2>
<h3 id="ted" tabindex="-1"><a class="header-anchor" href="#ted"><span>TED</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token string">"https://www.ted.com/talks/talk_name"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="ted-talks" tabindex="-1"><a class="header-anchor" href="#ted-talks"><span>TED Talks</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token string">"https://www.ted.com/talks/speaker_talk_title"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="streamable" tabindex="-1"><a class="header-anchor" href="#streamable"><span>Streamable</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token string">"https://streamable.com/VIDEO_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="imgur" tabindex="-1"><a class="header-anchor" href="#imgur"><span>Imgur</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token string">"https://imgur.com/gallery/IMAGE_ID"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="gfycat" tabindex="-1"><a class="header-anchor" href="#gfycat"><span>Gfycat</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">yt-dlp <span class="token string">"https://gfycat.com/gfy-name"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="查看完整支持列表" tabindex="-1"><a class="header-anchor" href="#查看完整支持列表"><span>查看完整支持列表</span></a></h2>
<p>要查看 yt-dlp 支持的所有网站列表，可以使用以下命令：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 列出所有支持的网站</span></span>
<span class="line">yt-dlp --list-extractors</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 列出支持的提取器描述</span></span>
<span class="line">yt-dlp --extractor-descriptions</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者访问：</p>
<ul>
<li><a href="https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md" target="_blank" rel="noopener noreferrer">GitHub 支持网站列表</a></li>
</ul>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2>
<h3 id="_1-网站变更" tabindex="-1"><a class="header-anchor" href="#_1-网站变更"><span>1. 网站变更</span></a></h3>
<p>网站可能会更新其页面结构或 API，导致 yt-dlp 无法正常工作。遇到问题时：</p>
<ol>
<li>更新 yt-dlp 到最新版本</li>
<li>查看 GitHub Issues 是否有相关问题</li>
<li>尝试使用 <code v-pre>--verbose</code> 参数查看详细错误信息</li>
</ol>
<h3 id="_2-地理限制" tabindex="-1"><a class="header-anchor" href="#_2-地理限制"><span>2. 地理限制</span></a></h3>
<p>某些视频可能有地理限制，可以通过以下方式解决：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 使用代理</span></span>
<span class="line">yt-dlp <span class="token parameter variable">--proxy</span> <span class="token string">"socks5://127.0.0.1:1080"</span> <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用地理限制绕过</span></span>
<span class="line">yt-dlp --geo-bypass <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 指定国家</span></span>
<span class="line">yt-dlp --geo-bypass-country US <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-登录要求" tabindex="-1"><a class="header-anchor" href="#_3-登录要求"><span>3. 登录要求</span></a></h3>
<p>某些内容需要登录才能访问：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 使用用户名和密码</span></span>
<span class="line">yt-dlp <span class="token parameter variable">-u</span> <span class="token string">"username"</span> <span class="token parameter variable">-p</span> <span class="token string">"password"</span> <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用浏览器 Cookie</span></span>
<span class="line">yt-dlp --cookies-from-browser chrome <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用 Cookie 文件</span></span>
<span class="line">yt-dlp <span class="token parameter variable">--cookies</span> cookies.txt <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-下载限制" tabindex="-1"><a class="header-anchor" href="#_4-下载限制"><span>4. 下载限制</span></a></h3>
<p>某些网站可能有下载限制：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 降低下载速度</span></span>
<span class="line">yt-dlp --limit-rate 1M <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 增加重试次数</span></span>
<span class="line">yt-dlp <span class="token parameter variable">--retries</span> <span class="token number">10</span> <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用延迟</span></span>
<span class="line">yt-dlp --sleep-interval <span class="token number">5</span> <span class="token string">"URL"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-版权问题" tabindex="-1"><a class="header-anchor" href="#_5-版权问题"><span>5. 版权问题</span></a></h3>
<p>请遵守版权法和网站的使用条款：</p>
<ul>
<li>仅下载你有权下载的内容</li>
<li>不要用于商业目的（除非获得授权）</li>
<li>尊重内容创作者的权益</li>
</ul>
<h2 id="贡献新网站支持" tabindex="-1"><a class="header-anchor" href="#贡献新网站支持"><span>贡献新网站支持</span></a></h2>
<p>如果你发现某个网站不被支持，可以：</p>
<ol>
<li>在 <a href="https://github.com/yt-dlp/yt-dlp/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a> 中提交请求</li>
<li>提供网站 URL 和详细信息</li>
<li>甚至可以自己开发提取器并提交 Pull Request</li>
</ol>
<h2 id="下一步" tabindex="-1"><a class="header-anchor" href="#下一步"><span>下一步</span></a></h2>
<ul>
<li>查看<RouteLink to="/practice/">技术实战</RouteLink>了解实际使用案例</li>
<li>查看<RouteLink to="/params/">参数详解</RouteLink>了解如何优化下载</li>
</ul>
</div></template>


