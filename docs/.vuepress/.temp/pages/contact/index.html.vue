<template><div><h1 id="联系我们" tabindex="-1"><a class="header-anchor" href="#联系我们"><span>联系我们</span></a></h1>
<p>感谢您访问 yt-dlp 技术文档网站！如果您有任何问题、建议或反馈，请通过以下方式联系我们。</p>
<h2 id="官方资源" tabindex="-1"><a class="header-anchor" href="#官方资源"><span>官方资源</span></a></h2>
<h3 id="yt-dlp-官方-github" tabindex="-1"><a class="header-anchor" href="#yt-dlp-官方-github"><span>yt-dlp 官方 GitHub</span></a></h3>
<ul>
<li><strong>项目地址</strong>: <a href="https://github.com/yt-dlp/yt-dlp" target="_blank" rel="noopener noreferrer">https://github.com/yt-dlp/yt-dlp</a></li>
<li><strong>Issues</strong>: <a href="https://github.com/yt-dlp/yt-dlp/issues" target="_blank" rel="noopener noreferrer">https://github.com/yt-dlp/yt-dlp/issues</a></li>
<li><strong>Discussions</strong>: <a href="https://github.com/yt-dlp/yt-dlp/discussions" target="_blank" rel="noopener noreferrer">https://github.com/yt-dlp/yt-dlp/discussions</a></li>
<li><strong>Wiki</strong>: <a href="https://github.com/yt-dlp/yt-dlp/wiki" target="_blank" rel="noopener noreferrer">https://github.com/yt-dlp/yt-dlp/wiki</a></li>
</ul>
<h2 id="获取帮助" tabindex="-1"><a class="header-anchor" href="#获取帮助"><span>获取帮助</span></a></h2>
<h3 id="_1-查看文档" tabindex="-1"><a class="header-anchor" href="#_1-查看文档"><span>1. 查看文档</span></a></h3>
<p>在提问之前，建议先查看以下资源：</p>
<ul>
<li>本文档站点的各个章节</li>
<li><a href="https://github.com/yt-dlp/yt-dlp#readme" target="_blank" rel="noopener noreferrer">yt-dlp README</a></li>
<li><a href="https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md" target="_blank" rel="noopener noreferrer">支持的网站列表</a></li>
<li><a href="https://github.com/yt-dlp/yt-dlp/wiki/FAQ" target="_blank" rel="noopener noreferrer">FAQ</a></li>
</ul>
<h3 id="_2-搜索-issues" tabindex="-1"><a class="header-anchor" href="#_2-搜索-issues"><span>2. 搜索 Issues</span></a></h3>
<p>在提交新问题之前，请先搜索现有的 Issues：</p>
<ul>
<li><a href="https://github.com/yt-dlp/yt-dlp/issues" target="_blank" rel="noopener noreferrer">yt-dlp Issues</a></li>
</ul>
<h3 id="_3-提交新-issue" tabindex="-1"><a class="header-anchor" href="#_3-提交新-issue"><span>3. 提交新 Issue</span></a></h3>
<p>如果找不到解决方案，可以提交新的 Issue：</p>
<ol>
<li>访问 <a href="https://github.com/yt-dlp/yt-dlp/issues/new" target="_blank" rel="noopener noreferrer">https://github.com/yt-dlp/yt-dlp/issues/new</a></li>
<li>选择合适的 Issue 模板</li>
<li>详细描述问题</li>
<li>提供必要的信息（如完整命令、错误信息、系统信息等）</li>
</ol>
<h3 id="_4-discussions" tabindex="-1"><a class="header-anchor" href="#_4-discussions"><span>4. Discussions</span></a></h3>
<p>对于一般性问题和讨论，可以使用 GitHub Discussions：</p>
<ul>
<li><a href="https://github.com/yt-dlp/yt-dlp/discussions" target="_blank" rel="noopener noreferrer">https://github.com/yt-dlp/yt-dlp/discussions</a></li>
</ul>
<h2 id="报告-bug" tabindex="-1"><a class="header-anchor" href="#报告-bug"><span>报告 Bug</span></a></h2>
<p>如果您发现了 Bug，请按以下步骤报告：</p>
<h3 id="_1-收集信息" tabindex="-1"><a class="header-anchor" href="#_1-收集信息"><span>1. 收集信息</span></a></h3>
<p>运行以下命令收集系统信息：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 查看 yt-dlp 版本</span></span>
<span class="line">yt-dlp <span class="token parameter variable">--version</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看详细错误信息</span></span>
<span class="line">yt-dlp <span class="token parameter variable">--verbose</span> <span class="token string">"URL"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看系统信息</span></span>
<span class="line"><span class="token comment"># Linux</span></span>
<span class="line"><span class="token function">uname</span> <span class="token parameter variable">-a</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># macOS</span></span>
<span class="line">sw_vers</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Windows</span></span>
<span class="line">systeminfo</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-提交-bug-报告" tabindex="-1"><a class="header-anchor" href="#_2-提交-bug-报告"><span>2. 提交 Bug 报告</span></a></h3>
<p>在提交 Bug 报告时，请包含：</p>
<ul>
<li><strong>yt-dlp 版本</strong>: 使用 <code v-pre>yt-dlp --version</code> 获取</li>
<li><strong>操作系统</strong>: Windows/Linux/macOS 及版本</li>
<li><strong>Python 版本</strong>: 使用 <code v-pre>python --version</code> 获取</li>
<li><strong>FFmpeg 版本</strong>: 使用 <code v-pre>ffmpeg -version</code> 获取</li>
<li><strong>完整的命令</strong>: 您使用的完整 yt-dlp 命令</li>
<li><strong>完整的错误信息</strong>: 使用 <code v-pre>--verbose</code> 获取的详细输出</li>
<li><strong>问题描述</strong>: 清晰描述问题和期望行为</li>
</ul>
<h3 id="_3-issue-模板" tabindex="-1"><a class="header-anchor" href="#_3-issue-模板"><span>3. Issue 模板</span></a></h3>
<p>GitHub 会自动显示 Issue 模板，选择合适的模板并填写信息。</p>
<h2 id="功能请求" tabindex="-1"><a class="header-anchor" href="#功能请求"><span>功能请求</span></a></h2>
<p>如果您有新功能的建议：</p>
<ol>
<li>先在 Issues 和 Discussions 中搜索是否已有类似请求</li>
<li>如果没有，提交新的 Feature Request</li>
<li>详细描述功能需求和使用场景</li>
<li>说明该功能如何改进 yt-dlp</li>
</ol>
<h2 id="贡献代码" tabindex="-1"><a class="header-anchor" href="#贡献代码"><span>贡献代码</span></a></h2>
<p>欢迎为 yt-dlp 项目贡献代码！</p>
<h3 id="贡献方式" tabindex="-1"><a class="header-anchor" href="#贡献方式"><span>贡献方式</span></a></h3>
<ol>
<li><strong>Fork 项目</strong>: 在 GitHub 上 fork yt-dlp 项目</li>
<li><strong>创建分支</strong>: 为您的修改创建新分支</li>
<li><strong>编写代码</strong>: 遵循项目的代码规范</li>
<li><strong>测试代码</strong>: 确保代码正常工作</li>
<li><strong>提交 Pull Request</strong>: 提交 PR 并等待审核</li>
</ol>
<h3 id="贡献指南" tabindex="-1"><a class="header-anchor" href="#贡献指南"><span>贡献指南</span></a></h3>
<p>详细贡献指南请查看：</p>
<ul>
<li><a href="https://github.com/yt-dlp/yt-dlp/blob/master/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">CONTRIBUTING.md</a></li>
</ul>
<h3 id="可以贡献的内容" tabindex="-1"><a class="header-anchor" href="#可以贡献的内容"><span>可以贡献的内容</span></a></h3>
<ul>
<li>新网站支持</li>
<li>Bug 修复</li>
<li>文档改进</li>
<li>新功能实现</li>
<li>测试用例</li>
<li>翻译</li>
</ul>
<h2 id="社区资源" tabindex="-1"><a class="header-anchor" href="#社区资源"><span>社区资源</span></a></h2>
<h3 id="社区论坛" tabindex="-1"><a class="header-anchor" href="#社区论坛"><span>社区论坛</span></a></h3>
<ul>
<li><a href="https://www.reddit.com/r/youtubedl/" target="_blank" rel="noopener noreferrer">Reddit r/youtubedl</a></li>
<li><a href="https://stackoverflow.com/questions/tagged/yt-dlp" target="_blank" rel="noopener noreferrer">Stack Overflow</a></li>
</ul>
<h3 id="第三方工具" tabindex="-1"><a class="header-anchor" href="#第三方工具"><span>第三方工具</span></a></h3>
<ul>
<li><a href="https://github.com/yt-dlp/yt-dlp/wiki/Third-party-tools-and-scripts" target="_blank" rel="noopener noreferrer">GUI 工具列表</a></li>
<li><a href="https://github.com/yt-dlp/yt-dlp/wiki/Plugins" target="_blank" rel="noopener noreferrer">插件和扩展</a></li>
</ul>
<h2 id="关于本文档" tabindex="-1"><a class="header-anchor" href="#关于本文档"><span>关于本文档</span></a></h2>
<h3 id="文档来源" tabindex="-1"><a class="header-anchor" href="#文档来源"><span>文档来源</span></a></h3>
<p>本文档站点旨在提供全面、详细的 yt-dlp 使用指南，帮助用户快速上手和深入了解 yt-dlp 的各种功能。</p>
<h3 id="文档贡献" tabindex="-1"><a class="header-anchor" href="#文档贡献"><span>文档贡献</span></a></h3>
<p>如果您发现文档有错误或希望改进，可以：</p>
<ol>
<li>在 GitHub 上提交 Issue</li>
<li>直接提交 Pull Request 改进文档</li>
</ol>
<h3 id="文档许可" tabindex="-1"><a class="header-anchor" href="#文档许可"><span>文档许可</span></a></h3>
<p>本文档采用 MIT 许可证。</p>
<h2 id="保持更新" tabindex="-1"><a class="header-anchor" href="#保持更新"><span>保持更新</span></a></h2>
<h3 id="关注项目" tabindex="-1"><a class="header-anchor" href="#关注项目"><span>关注项目</span></a></h3>
<ul>
<li>在 GitHub 上 Watch 项目获取更新通知</li>
<li>Star 项目表示支持</li>
</ul>
<h3 id="订阅更新" tabindex="-1"><a class="header-anchor" href="#订阅更新"><span>订阅更新</span></a></h3>
<ul>
<li><a href="https://github.com/yt-dlp/yt-dlp/releases" target="_blank" rel="noopener noreferrer">GitHub Releases</a></li>
<li><a href="https://github.com/yt-dlp/yt-dlp/releases.atom" target="_blank" rel="noopener noreferrer">RSS Feed</a></li>
</ul>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2>
<h3 id="q-yt-dlp-和-youtube-dl-有什么区别" tabindex="-1"><a class="header-anchor" href="#q-yt-dlp-和-youtube-dl-有什么区别"><span>Q: yt-dlp 和 youtube-dl 有什么区别？</span></a></h3>
<p>A: yt-dlp 是 youtube-dl 的增强版分支，具有更多功能、更快的下载速度和更频繁的更新。详细对比请查看<RouteLink to="/guide/">项目介绍</RouteLink>。</p>
<h3 id="q-如何更新-yt-dlp" tabindex="-1"><a class="header-anchor" href="#q-如何更新-yt-dlp"><span>Q: 如何更新 yt-dlp？</span></a></h3>
<p>A: 使用 <code v-pre>yt-dlp -U</code> 命令或使用您安装时使用的包管理器更新。</p>
<h3 id="q-下载速度慢怎么办" tabindex="-1"><a class="header-anchor" href="#q-下载速度慢怎么办"><span>Q: 下载速度慢怎么办？</span></a></h3>
<p>A: 可以尝试：</p>
<ul>
<li>使用代理</li>
<li>使用 <code v-pre>--concurrent-fragments</code> 参数</li>
<li>使用外部下载器如 aria2c</li>
</ul>
<h3 id="q-遇到错误怎么办" tabindex="-1"><a class="header-anchor" href="#q-遇到错误怎么办"><span>Q: 遇到错误怎么办？</span></a></h3>
<p>A:</p>
<ol>
<li>更新到最新版本</li>
<li>使用 <code v-pre>--verbose</code> 查看详细错误</li>
<li>在 GitHub Issues 中搜索类似问题</li>
<li>提交新的 Issue</li>
</ol>
<h3 id="q-如何下载需要登录的内容" tabindex="-1"><a class="header-anchor" href="#q-如何下载需要登录的内容"><span>Q: 如何下载需要登录的内容？</span></a></h3>
<p>A: 使用 <code v-pre>--cookies-from-browser</code> 或 <code v-pre>-u</code> <code v-pre>-p</code> 参数提供登录凭据。</p>
<h3 id="q-支持哪些网站" tabindex="-1"><a class="header-anchor" href="#q-支持哪些网站"><span>Q: 支持哪些网站？</span></a></h3>
<p>A: 支持超过 1000+ 网站，详细列表请查看<RouteLink to="/sites/">支持网站</RouteLink>。</p>
<h2 id="免责声明" tabindex="-1"><a class="header-anchor" href="#免责声明"><span>免责声明</span></a></h2>
<ul>
<li>本文档仅供学习参考</li>
<li>请遵守当地法律法规</li>
<li>尊重内容创作者的版权</li>
<li>不要用于商业目的（除非获得授权）</li>
</ul>
<h2 id="最后的话" tabindex="-1"><a class="header-anchor" href="#最后的话"><span>最后的话</span></a></h2>
<p>感谢您使用 yt-dlp！希望本文档能帮助您更好地使用这个强大的工具。如果您觉得 yt-dlp 对您有帮助，欢迎：</p>
<ul>
<li>在 GitHub 上 Star 项目</li>
<li>向朋友推荐 yt-dlp</li>
<li>贡献代码或文档</li>
<li>参与社区讨论</li>
</ul>
<p>祝您使用愉快！</p>
</div></template>


