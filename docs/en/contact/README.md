---
title: Contact Us - yt-dlp Technical Documentation
description: Contact information for yt-dlp technical documentation, including feedback channels like GitHub Issues and Discussions, as well as solutions to common questions.
meta:
  - name: keywords
    content: yt-dlp contact, yt-dlp help, yt-dlp feedback, yt-dlp issues, yt-dlp community
---

# Contact Us

Thank you for visiting the yt-dlp technical documentation website! If you have any questions, suggestions, or feedback, please contact us through the following channels.

## Official Resources

### yt-dlp Official GitHub

- **Project URL**: [https://github.com/yt-dlp/yt-dlp](https://github.com/yt-dlp/yt-dlp)
- **Issues**: [https://github.com/yt-dlp/yt-dlp/issues](https://github.com/yt-dlp/yt-dlp/issues)
- **Discussions**: [https://github.com/yt-dlp/yt-dlp/discussions](https://github.com/yt-dlp/yt-dlp/discussions)
- **Wiki**: [https://github.com/yt-dlp/yt-dlp/wiki](https://github.com/yt-dlp/yt-dlp/wiki)

## Getting Help

### 1. Check the Documentation

Before asking a question, we recommend checking the following resources:

- Various sections of this documentation site
- [yt-dlp README](https://github.com/yt-dlp/yt-dlp#readme)
- [List of Supported Sites](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md)
- [FAQ](https://github.com/yt-dlp/yt-dlp/wiki/FAQ)

### 2. Search Issues

Before submitting a new issue, please search existing ones:

- [yt-dlp Issues](https://github.com/yt-dlp/yt-dlp/issues)

### 3. Submit a New Issue

If you cannot find a solution, you can submit a new issue:

1. Visit [https://github.com/yt-dlp/yt-dlp/issues/new](https://github.com/yt-dlp/yt-dlp/issues/new)
2. Choose the appropriate issue template.
3. Describe the problem in detail.
4. Provide necessary information (e.g., complete command, error message, system info, etc.).

### 4. Discussions

For general questions and discussions, use GitHub Discussions:

- [https://github.com/yt-dlp/yt-dlp/discussions](https://github.com/yt-dlp/yt-dlp/discussions)

## Reporting Bugs

If you find a bug, please follow these steps to report it:

### 1. Collect Information

Run the following commands to collect system information:

```bash
# Check yt-dlp version
yt-dlp --version

# View detailed error messages
yt-dlp --verbose "URL"

# View system information
# Linux
uname -a

# macOS
sw_vers

# Windows
systeminfo
```

### 2. Submit a Bug Report

When submitting a bug report, please include:

- **yt-dlp Version**: Obtain via `yt-dlp --version`
- **Operating System**: Windows/Linux/macOS and its version
- **Python Version**: Obtain via `python --version`
- **FFmpeg Version**: Obtain via `ffmpeg -version`
- **Complete Command**: The full yt-dlp command you used
- **Complete Error Message**: Detailed output obtained with `--verbose`
- **Problem Description**: Clearly describe the issue and expected behavior

### 3. Issue Template

GitHub will automatically display issue templates; choose the right one and fill in the information.

## Feature Requests

If you have suggestions for new features:

1. Search Issues and Discussions first to see if a similar request already exists.
2. If not, submit a new Feature Request.
3. Describe the feature requirement and usage scenario in detail.
4. Explain how the feature would improve yt-dlp.

## Contributing Code

Contributions to the yt-dlp project are welcome!

### How to Contribute

1. **Fork the Project**: Fork the yt-dlp project on GitHub.
2. **Create a Branch**: Create a new branch for your modifications.
3. **Write Code**: Follow the project's coding standards.
4. **Test Code**: Ensure the code works correctly.
5. **Submit a Pull Request**: Submit a PR and wait for review.

### Contribution Guidelines

For detailed contribution guidelines, please check:

- [CONTRIBUTING.md](https://github.com/yt-dlp/yt-dlp/blob/master/CONTRIBUTING.md)

### What You Can Contribute

- Support for new websites
- Bug fixes
- Documentation improvements
- New feature implementations
- Test cases
- Translations

## Community Resources

### Community Forums

- [Reddit r/youtubedl](https://www.reddit.com/r/youtubedl/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/yt-dlp)

### Third-party Tools

- [List of GUI Tools](https://github.com/yt-dlp/yt-dlp/wiki/Third-party-tools-and-scripts)
- [Plugins and Extensions](https://github.com/yt-dlp/yt-dlp/wiki/Plugins)

## About This Documentation

### Source of Documentation

This documentation site aims to provide a comprehensive and detailed yt-dlp usage guide, helping users get started quickly and gain deep insights into various features of yt-dlp.

### Documentation Contributions

If you find errors or wish to improve the documentation, you can:

1. Submit an issue on GitHub.
2. Submit a Pull Request directly to improve the documentation.

### Documentation License

This documentation is licensed under the MIT License.

## Stay Updated

### Follow the Project

- Watch the project on GitHub to receive update notifications.
- Star the project to show your support.

### Subscribe to Updates

- [GitHub Releases](https://github.com/yt-dlp/yt-dlp/releases)
- [RSS Feed](https://github.com/yt-dlp/yt-dlp/releases.atom)

## FAQ

### Q: What is the difference between yt-dlp and youtube-dl?

A: yt-dlp is an enhanced fork of youtube-dl with more features, faster download speeds, and more frequent updates. For a detailed comparison, see [Project Introduction](/en/guide/).

### Q: How do I update yt-dlp?

A: Use the `yt-dlp -U` command or use the package manager you used during installation.

### Q: What if download speeds are slow?

A: You can try:
- Using a proxy.
- Using the `--concurrent-fragments` parameter.
- Using an external downloader like aria2c.

### Q: What should I do if I encounter an error?

A: 
1. Update to the latest version.
2. Use `--verbose` to view detailed errors.
3. Search for similar issues in GitHub Issues.
4. Submit a new issue.

### Q: How do I download content that requires login?

A: Provide login credentials using `--cookies-from-browser` or the `-u` and `-p` parameters.

### Q: Which sites are supported?

A: Over 1000+ sites are supported. For a detailed list, see [Supported Sites](/en/sites/).

## Disclaimer

- This documentation is for educational purposes only.
- Please comply with local laws and regulations.
- Respect the copyright of content creators.
- Do not use for commercial purposes (unless authorized).

## Final Words

Thank you for using yt-dlp! We hope this documentation helps you better utilize this powerful tool. If you find yt-dlp helpful, feel free to:

- Star the project on GitHub.
- Recommend yt-dlp to friends.
- Contribute code or documentation.
- Participate in community discussions.

Happy downloading!
