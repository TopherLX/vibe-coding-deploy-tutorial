---
title: Node.js 安装指南
---

# Node.js

[Node.js](https://nodejs.org/en) 是一个免费且开源的跨平台 JavaScript 运行时环境，开发者可以利用它来高效地构建服务端、Web 应用程序、命令行工具和自动化脚本。

## 官方网站

<div class="official-site-preview">
  <iframe src="https://nodejs.org/en" loading="lazy">
  </iframe>
  <p class="fallback-link">
    如果页面未能加载（大部分官网禁止嵌入），请直接访问：
    <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">https://nodejs.org/en</a>
  </p>
</div>

## 安装步骤

1. 从官网下载安装包，或使用附件`node-v24.15.0-x64.msi`安装

![](../images/nodejs/01-installer.png)

![](../images/nodejs/02-installer2.png)

2. 选中`I accept the terms in the License Aggrement`并点击`Next`

![](../images/nodejs/03-license.png)

3. 选择安装路径并点击`Next`

![](../images/nodejs/04-path.png)

4. 点击`Next`

![](../images/nodejs/05-next.png)

5. 不勾选，直接点击`Next`

![](../images/nodejs/06-uncheck.png)

6. 点击`Install`以开始安装

![](../images/nodejs/07-install.png)

![](../images/nodejs/08-progress.png)

7. 如果之前安装过Node.js，可能会提示选择关闭进程以更新文件，点击`OK`

![](../images/nodejs/09-close-processes.png)

![](../images/nodejs/10-prompt.png)

9. 等待安装完成，点击`Finish`

![](../images/nodejs/11-complete.png)

![](../images/nodejs/12-complete2.png)

## 验证

1. Node.js会同时安装包管理器npm
2. `Win + R`输入`wt`打开Windows Terminal
3. 分别键入命令 `node --version` 和 `npm --version`
4. 如下图，正常显示版本号则安装成功

![](../images/nodejs/13-verify.png)
