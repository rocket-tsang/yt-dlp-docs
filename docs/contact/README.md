# 联系我们

感谢您访问 yt-dlp 技术文档网站！如果您有任何问题、建议或反馈，请通过以下方式联系我们。

## 官方资源

### yt-dlp 官方 GitHub

- **项目地址**: [https://github.com/yt-dlp/yt-dlp](https://github.com/yt-dlp/yt-dlp)
- **Issues**: [https://github.com/yt-dlp/yt-dlp/issues](https://github.com/yt-dlp/yt-dlp/issues)
- **Discussions**: [https://github.com/yt-dlp/yt-dlp/discussions](https://github.com/yt-dlp/yt-dlp/discussions)
- **Wiki**: [https://github.com/yt-dlp/yt-dlp/wiki](https://github.com/yt-dlp/yt-dlp/wiki)

## 获取帮助

### 1. 查看文档

在提问之前，建议先查看以下资源：

- 本文档站点的各个章节
- [yt-dlp README](https://github.com/yt-dlp/yt-dlp#readme)
- [支持的网站列表](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md)
- [FAQ](https://github.com/yt-dlp/yt-dlp/wiki/FAQ)

### 2. 搜索 Issues

在提交新问题之前，请先搜索现有的 Issues：

- [yt-dlp Issues](https://github.com/yt-dlp/yt-dlp/issues)

### 3. 提交新 Issue

如果找不到解决方案，可以提交新的 Issue：

1. 访问 [https://github.com/yt-dlp/yt-dlp/issues/new](https://github.com/yt-dlp/yt-dlp/issues/new)
2. 选择合适的 Issue 模板
3. 详细描述问题
4. 提供必要的信息（如完整命令、错误信息、系统信息等）

### 4. Discussions

对于一般性问题和讨论，可以使用 GitHub Discussions：

- [https://github.com/yt-dlp/yt-dlp/discussions](https://github.com/yt-dlp/yt-dlp/discussions)

## 报告 Bug

如果您发现了 Bug，请按以下步骤报告：

### 1. 收集信息

运行以下命令收集系统信息：

```bash
# 查看 yt-dlp 版本
yt-dlp --version

# 查看详细错误信息
yt-dlp --verbose "URL"

# 查看系统信息
# Linux
uname -a

# macOS
sw_vers

# Windows
systeminfo
```

### 2. 提交 Bug 报告

在提交 Bug 报告时，请包含：

- **yt-dlp 版本**: 使用 `yt-dlp --version` 获取
- **操作系统**: Windows/Linux/macOS 及版本
- **Python 版本**: 使用 `python --version` 获取
- **FFmpeg 版本**: 使用 `ffmpeg -version` 获取
- **完整的命令**: 您使用的完整 yt-dlp 命令
- **完整的错误信息**: 使用 `--verbose` 获取的详细输出
- **问题描述**: 清晰描述问题和期望行为

### 3. Issue 模板

GitHub 会自动显示 Issue 模板，选择合适的模板并填写信息。

## 功能请求

如果您有新功能的建议：

1. 先在 Issues 和 Discussions 中搜索是否已有类似请求
2. 如果没有，提交新的 Feature Request
3. 详细描述功能需求和使用场景
4. 说明该功能如何改进 yt-dlp

## 贡献代码

欢迎为 yt-dlp 项目贡献代码！

### 贡献方式

1. **Fork 项目**: 在 GitHub 上 fork yt-dlp 项目
2. **创建分支**: 为您的修改创建新分支
3. **编写代码**: 遵循项目的代码规范
4. **测试代码**: 确保代码正常工作
5. **提交 Pull Request**: 提交 PR 并等待审核

### 贡献指南

详细贡献指南请查看：

- [CONTRIBUTING.md](https://github.com/yt-dlp/yt-dlp/blob/master/CONTRIBUTING.md)

### 可以贡献的内容

- 新网站支持
- Bug 修复
- 文档改进
- 新功能实现
- 测试用例
- 翻译

## 社区资源

### 社区论坛

- [Reddit r/youtubedl](https://www.reddit.com/r/youtubedl/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/yt-dlp)

### 第三方工具

- [GUI 工具列表](https://github.com/yt-dlp/yt-dlp/wiki/Third-party-tools-and-scripts)
- [插件和扩展](https://github.com/yt-dlp/yt-dlp/wiki/Plugins)

## 关于本文档

### 文档来源

本文档站点旨在提供全面、详细的 yt-dlp 使用指南，帮助用户快速上手和深入了解 yt-dlp 的各种功能。

### 文档贡献

如果您发现文档有错误或希望改进，可以：

1. 在 GitHub 上提交 Issue
2. 直接提交 Pull Request 改进文档

### 文档许可

本文档采用 MIT 许可证。

## 保持更新

### 关注项目

- 在 GitHub 上 Watch 项目获取更新通知
- Star 项目表示支持

### 订阅更新

- [GitHub Releases](https://github.com/yt-dlp/yt-dlp/releases)
- [RSS Feed](https://github.com/yt-dlp/yt-dlp/releases.atom)

## 常见问题

### Q: yt-dlp 和 youtube-dl 有什么区别？

A: yt-dlp 是 youtube-dl 的增强版分支，具有更多功能、更快的下载速度和更频繁的更新。详细对比请查看[项目介绍](/guide/)。

### Q: 如何更新 yt-dlp？

A: 使用 `yt-dlp -U` 命令或使用您安装时使用的包管理器更新。

### Q: 下载速度慢怎么办？

A: 可以尝试：
- 使用代理
- 使用 `--concurrent-fragments` 参数
- 使用外部下载器如 aria2c

### Q: 遇到错误怎么办？

A: 
1. 更新到最新版本
2. 使用 `--verbose` 查看详细错误
3. 在 GitHub Issues 中搜索类似问题
4. 提交新的 Issue

### Q: 如何下载需要登录的内容？

A: 使用 `--cookies-from-browser` 或 `-u` `-p` 参数提供登录凭据。

### Q: 支持哪些网站？

A: 支持超过 1000+ 网站，详细列表请查看[支持网站](/sites/)。

## 免责声明

- 本文档仅供学习参考
- 请遵守当地法律法规
- 尊重内容创作者的版权
- 不要用于商业目的（除非获得授权）

## 最后的话

感谢您使用 yt-dlp！希望本文档能帮助您更好地使用这个强大的工具。如果您觉得 yt-dlp 对您有帮助，欢迎：

- 在 GitHub 上 Star 项目
- 向朋友推荐 yt-dlp
- 贡献代码或文档
- 参与社区讨论

祝您使用愉快！