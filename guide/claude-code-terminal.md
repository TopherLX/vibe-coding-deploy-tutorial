---
title: Claude Code 终端安装指南
---

# Claude Code 终端

[Claude Code](https://code.claude.com/docs/en/overview) 是一款智能体（Agentic）编程工具，它能够阅读您的代码库、编辑文件、运行命令，并与您的开发工具无缝集成。该工具现已登录终端、IDE、桌面应用及浏览器。

Claude Code 是一款由 AI 驱动的编程助手，旨在帮助您构建新功能、修复 Bug 并自动化开发任务。它能够理解您的整个代码库，并跨多个文件和工具高效协同以完成工作。

![](../images/claude-code-terminal/01-demo.gif)

## 官方网站

![](../images/claude-code-terminal/02-website.png)

## 安装步骤

选择以下任一方法安装Claude Code

#### 网络环境允许时，优先选择官方推荐的命令行安装方法

```powershell
irm https://claude.ai/install.ps1 | iex
```

#### 网络环境不允许时，可使用npm安装，终端输入命令

1. 自动从npm官方仓库拉取适配当前操作系统的最新版本claude-code包

```powershell
npm install @anthropic-ai/claude-code -g
```

![](../images/claude-code-terminal/03-npm-install-result.png)

2. 接下来添加环境变量，首先查看npm全局安装包根路径

```powershell
npm root -g
```

![](../images/claude-code-terminal/04-npm-global-root.png)

3. 复制路径并打开文件夹，依次打开子文件夹@anthropic-ai、claude-code、bin，可见`claude.exe`，即Claude Code CLI工具

4. 复制当前文件资源管理器所在路径

![](../images/claude-code-terminal/05-npm-claude-cli-path.png)

5. `Win + R` 输入 `sysdm.cpl`，打开`系统属性`窗口，依次点击`高级`、`环境变量`

![](../images/claude-code-terminal/06-system-properties.png)

6. 在`用户变量`或`系统变量`中找到`Path`

![](../images/claude-code-terminal/07-env-var-path.png)


7. 双击打开`编辑环境变量`窗口，点击`新建`并粘贴刚才复制的bin路径

![](../images/claude-code-terminal/08-env-var-path-claude.png)

8. 点击`确定`以保存更改


#### 无网络安装，使用附件`claude-2.1.144-win32-x64.exe`，终端输入命令

```powershell
# 例如，可执行文件存放在 G:\OneDrive\AI Studio\Tutorials
cd G:\OneDrive\AI Studio\Tutorials

# 自动安装
./claude-2.1.144-win32-x64.exe install
```

![](../images/claude-code-terminal/09-offline-install.png)

## 验证

1. 终端输入命令 `claude --version`
2. 如下图，正常显示版本号则安装成功

![](../images/claude-code-terminal/10-verify.png)
