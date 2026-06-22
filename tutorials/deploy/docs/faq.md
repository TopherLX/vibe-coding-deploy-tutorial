---
title: 常见问题解答
---

# 常见问题解答

## Q1：CMD、Windows PowerShell、PowerShell 7、Windows Terminal 分别是什么？以及它们之间有什么关系？

首先，我们需要了解 **Kernel(内核)**、**Shell(外壳)** 和 **Terminal(终端)** 的概念。

1. **Kernel**：操作系统的最底层**核心程序**，拥有对计算机硬件的最高控制权，常驻内存。
2. **Shell**：包裹在内核之外的一层**用户接口程序**，是一个命令解释器，充当用户与内核之间的"中间人"。
3. **Terminal**：在现代个人电脑语境下，更准确叫终端模拟器，是一个**图形化应用程序**。

接着，我们再了解它们的定位和特点。

1. **CMD（命令提示符）：初代"老前辈"**

**定位**：Windows 最早的原生命令行工具，基于古老的 DOS 系统设计。

**特点**：功能相对基础，主要用于执行简单的系统命令（如 `ipconfig`、`ping`）或运行老旧的批处理（.bat）脚本。它的界面和自定义程度都非常有限。

2. **Windows PowerShell：系统自带的"全能管家"**

**定位**：微软为了弥补 CMD 的不足推出的新一代 Shell，预装在 Windows 10/11 中（通常是 5.x 版本）。

**特点**：功能极其强大，专为系统管理和自动化运维设计。它不仅能兼容大部分 CMD 命令，还支持复杂的脚本编写和调用 .NET 框架，是 Windows 系统管理的核心工具。

3. **PowerShell 7：跨平台的"现代进化版"**

**定位**：PowerShell 的开源、跨平台（支持 Windows、macOS、Linux）升级版。

**特点**：基于现代 .NET 构建，性能更强，拥有更多新特性（如并行处理、新的运算符等）。它与系统自带的 Windows PowerShell 5.x 可以并存（执行文件名为 pwsh.exe，老版本是 powershell.exe），互不冲突。

4. **Windows Terminal：统一的"现代化外壳"**

**定位**：微软推出的现代化终端应用程序，它本身不带有任何命令处理能力。

**特点**：它的作用是把 CMD、PowerShell 5.x、PowerShell 7，甚至是 Linux 子系统（WSL）、Git Bash 等全部装进同一个窗口里。它支持多标签页、分屏、GPU 加速渲染、高度自定义主题等可视化功能。

综上，我们可以直观地把 Windows Terminal 想象成一个**现代化的浏览器**，而 CMD、Windows PowerShell 和 PowerShell 7 等则是该浏览器里打开的不同**网页**。

## Q2：Node.js、npm、pnpm 分别是什么？以及它们之间有什么关系？

首先，我们需要了解**Runtime Environment(运行时环境)** 和 **Package Manager(包管理器)** 的概念。

1. **Runtime Environment**：一个能让特定编程语言脱离常规运行平台（如浏览器），在计算机底层直接运行的**软件环境**。
2. **Package Manager**：用于自动化安装、升级、配置第三方代码库（即"包"）的**包管理工具**。

接着，我们再了解它们的定位和特点。

1. **Node.js：让 JavaScript 走出浏览器的"全能引擎"**

**定位**：基于 Chrome V8 引擎封装的 JavaScript 运行环境，是前端工程化和后端开发的基础。

**特点**：它让 JavaScript 不仅能写网页交互，还能开发高性能的后端服务（如 API 接口）、编写自动化脚本、开发命令行工具（CLI）以及桌面应用等。

2. **npm：生态自带的"默认仓库管理员"**

**定位**：随 Node.js 一同安装的官方包管理器，是全球最大的软件注册表。

**特点**：通过 `package.json` 文件来管理项目依赖，拥有极其庞大的开源包资源。开发者使用 `npm install` 命令即可轻松下载和使用社区提供的代码，是兼容性最好的选择。

3. **pnpm：节省空间的"极速仓库管理员"**

**定位**：专为提升性能和节省资源而生的第三方包管理器，需要独立安装。

**特点**：传统的 npm 会在每个项目中重复复制相同的依赖文件，占用大量磁盘空间。而 pnpm 创新地使用了"硬链接"机制，让所有项目共享同一份依赖文件副本。这不仅极大地节省了磁盘空间，还大幅提升了依赖包的安装速度，特别适合大型项目或多包仓库（Monorepo）。

综上，我们可以直观地把 Node.js 想象成**手机操作系统**，npm 是系统自带的**官方应用商店**，pnpm 则是第三方推出的**极速版应用商店**。

## Q3：Git 在 AI 开发项目过程中扮演了什么角色？

AI 极速开发项目的爽感背后潜藏着一个致命问题：AI 可能会突然"发疯"或"失智"，改崩项目或者生成大量无法运行的代码，且很难感知出错的位置，甚至要被迫删库重头再来。

因此，需要 Git 扮演以下几个关键角色：

1. **项目的"存档点"**  
  当 AI 完成某个功能并且项目能正常运行时，AI 可以自动调用`commit`操作进行"存档"。一旦 AI 下一次修改把项目改崩了，你可以通过 Git 回退到上一个能正常运行的"存档点"，毫发无伤。
2. **AI 的"安全实验场"**  
  当想要尝试一个大胆的新想法，或者让 AI 重构某块核心代码时，可以先创建一个新分支 `checkout`。在这个分支里，如果改得好，就合并回主分支；如果改崩了，直接删掉这个分支即可，完全不会影响原本稳定运行的主项目。
3. **代码的"云端保险箱"**  
  可将本地的 Git 仓库推送到远程平台（如 GitHub、Gitee、GitLab），相当于把代码资产实时备份到云端。
4. **与 AI 编程工具无缝融合**  
  现在的 AI 编程工具（如 Claude Code）都已经深度集成了 Git，即能直接用自然语言调用 Git。例如，对 AI 说："帮我撤销上一次的修改"或者"帮我把这次的改动提交并推送到远程"，AI 就会在后台自动执行对应的 Git 命令。

综上，Git 让你在面对 AI 生成的海量代码时，拥有天马行空的想象和随时可以重来的底气。

## Q4：Claude Code 终端 CLI 和 VS Code 扩展有什么差异？

> [Use Claude Code in VS Code - Claude Code Docs](https://code.claude.com/docs/en/vs-code#vs-code-extension-vs-claude-code-cli)

Claude Code 既提供 CLI（终端中的命令行界面），也提供 VS Code 扩展程序（图形化面板）。部分功能仅在 CLI 中可用。如果你需要某个仅限 CLI 的功能，可以在 VS Code 的集成终端中运行 `claude` 命令。

| 功能  | CLI | VS Code 扩展程序 |
| --- | --- | --- |
| 命令和技能 (Commands and skills) | 全部支持 | 部分支持 |
| MCP 服务器配置 | 支持  | 部分支持 |
| 检查点 (Checkpoints) | 支持  | 支持  |
| `!` Bash 快捷指令 | 支持  | 不支持 |
| Tab 自动补全 | 支持  | 不支持 |

1. **在 VS Code 中运行 CLI**

若要在 VS Code 内使用 CLI，请打开集成终端（Windows/Linux 上按 `` Ctrl+` ``，Mac 上按 `` Cmd+` ``）并运行 `claude`。CLI 会自动与你的 IDE 集成，以支持差异查看（diff viewing）和诊断共享等功能。 如果使用外部终端，请在 Claude Code 中运行 `/ide` 以将其连接到 VS Code。

2. **在扩展程序与 CLI 之间切换**

扩展程序和 CLI 共享同一个对话历史。若要在 CLI 中继续扩展程序里的对话，请在终端中运行 `claude --resume`。这将打开一个交互式选择器，你可以从中搜索并选择你的对话。

3. **在提示词中包含终端输出**

你可以使用 `@terminal:name`（其中 `name` 是终端的标题）在提示词中引用终端输出。这让 Claude 无需复制粘贴就能直接看到命令输出、错误信息或日志。

## Q5：为什么安装完应用程序后，终端输入命令却报错？

这通常有两种情况：
1. **安装程序已自动配置了环境变量，但终端未刷新** — 终端仅在启动时读取一次 Path，安装前已打开的终端无法感知新添加的路径。重启终端即可解决。
2. **安装程序未能自动配置环境变量** — 需要手动将应用的安装目录添加到用户环境变量 Path 中，然后重启终端。*具体操作参见 Q6 👇*

## Q6：如何编辑用户环境变量？

1. `Win + R` 输入 `sysdm.cpl`，打开`系统属性`窗口，依次点击`高级`、`环境变量`

![](../images/faq/01-env-var-system-properties.png)

2. 在 `用户变量` 中找到 `Path`

![](../images/faq/02-env-var-user-path.png)

3. 双击打开 `编辑环境变量` 窗口，点击 `新建`，填入路径即可

![](../images/faq/03-env-var-edit-path.png)

4. 点击 `确定` 以保存更改

## Q7：既然 pnpm 更为高效，为什么不推荐 pnpm 安装 Claude Code CLI？

1. **全局命令的执行机制差异**

pnpm 的核心优势是"基于硬链接的内容寻址存储"，它极度节省磁盘空间，但这套机制主要是为**项目级依赖**设计的。对于安装一个单独的 CLI 工具来说，pnpm 并没有发挥出它最核心的省空间优势，反而因为多了一层 pnpm 自身的封装逻辑，在跨平台生成全局命令（比如让终端直接识别 `claude` 这个命令）时，偶尔会出现路径映射不如 npm 直接的情况。

2. **运行时的依赖解析逻辑**

Claude Code 本质上是一个由 TypeScript 编写、依赖 Node.js 运行的 CLI 工具。npm 的扁平化结构与 Node.js 的原生模块解析器契合度是最高的。对于这种强依赖 Node.js 运行时的独立 CLI 工具来说，使用最原始的 npm 安装，能最大程度避免因符号链接、依赖提升等机制带来的潜在路径解析异常。

综上，如果是给一个具体的前端项目里添加依赖，pnpm 绝对是更优解；但如果是安装像 Claude Code 这种独立运行的全局 CLI 工具，npm 这种自带且直接的方式在底层运行上反而更纯粹、更不容易出错。

## Q8：我通过多种方式安装了 Claude Code CLI，安装路径各不相同，当我在终端输入 `claude` 时，实际用的是哪一个？怎么查看和切换？

这涉及到 Windows 终端如何查找命令的机制。当你在终端输入一个命令（比如 `claude`）时，系统会按照 **PATH 环境变量** 中列出的目录顺序，从上到下逐个查找匹配的可执行文件，**第一个被找到的** 就会被执行。

因此，即使你通过不同方式安装了多个 Claude Code CLI，实际生效的始终是 PATH 中排在**最前面**的那一个。

**1. 诊断方法**

终端输入 `Get-Command claude`，会显示当前被调用的具体路径（**以实际显示为准**）：

| 安装方式 | 常见环境变量路径 |
|---------|---------|
| npm 全局安装 | `C:\Users\<用户名>\AppData\Roaming\npm\claude.ps1` |
| pnpm 全局安装 | `C:\Users\<用户名>\AppData\Local\pnpm\bin\claude.ps1` |
| 官方安装 | `C:\Users\<用户名>\.local\bin\claude.exe` |

**2. 如何切换**

如果你希望使用另一个安装版本，只需调换 PATH 中对应目录的**先后顺序**，将你想要的版本所在的路径移到另一个版本之前即可。

调整 PATH 顺序后，**务必重新打开终端**使其生效，再次运行 `Get-Command claude` 即可确认是否切换成功。

## Q9：如何卸载 Claude Code CLI？

卸载方法取决于你当初的安装方式，建议先通过 Q8 的方法确认当前版本来自哪个路径，再选择对应的卸载方式。

> 参考：[Uninstall Claude Code - Claude Code Docs](https://code.claude.com/docs/en/setup#uninstall-claude-code)

**1. npm 全局卸载**

```powershell
npm uninstall -g @anthropic-ai/claude-code
```

**2. pnpm 全局卸载**

```powershell
pnpm remove -g @anthropic-ai/claude-code
```

**3. 原生安装版卸载**

```powershell
Remove-Item -Path "$env:USERPROFILE\.local\bin\claude.exe" -Force
Remove-Item -Path "$env:USERPROFILE\.local\share\claude" -Recurse -Force
```

**3. 清理配置文件（所有安装方式通用）**

卸载后，对话历史、设置等配置文件仍保留在用户或项目目录中。如果希望彻底清除：

```powershell
# Remove user settings and state
Remove-Item -Path "$env:USERPROFILE\.claude" -Recurse -Force
Remove-Item -Path "$env:USERPROFILE\.claude.json" -Force

# Remove project-specific settings (run from your project directory)
Remove-Item -Path ".claude" -Recurse -Force
Remove-Item -Path ".mcp.json" -Force
```

**4. 验证卸载**

重启终端后运行：

```powershell
claude --version
```

如果提示"无法识别 claude 命令"或类似错误信息，说明已卸载成功。

## Q10：如何更新 Claude Code CLI？

更新命令对**所有安装方式**通用：

```powershell
claude update
```

如果因网络原因 `claude update` 始终失败，且当前是通过 npm 安装的，可改用 npm 直接安装最新版：

```powershell
npm install -g @anthropic-ai/claude-code@latest
```

重启终端后运行 `claude --version` 即可确认版本是否已更新。

## Q11：macOS 依赖项安装方法

通常情况下，macOS可直接使用 [Homebrew](https://brew.sh/) 管理和安装依赖包

1. 打开终端，安装 Xcode 命令行工具

```zsh
xcode-select --install
```

或直接使用[离线安装包](https://developer.apple.com/download/more/) `Command_Line_Tools_<version>_Universal.dmg`

2. 重新打开终端，安装Homebrew

国内镜像源（**推荐**），安装问题可参考 [Homebre 中文网](https://brew.idayer.com/guide/start)：

```zsh
/bin/bash -c "$(curl -fsSL https://gitee.com/ineo6/homebrew-install/raw/master/install.sh)"
```

官方途径：

```zsh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

3. 重新打开终端，安装依赖包

```zsh
#python
brew install python

# node
brew install node

# git
brew install git

# cc-switch
brew install --cask cc-switch
```