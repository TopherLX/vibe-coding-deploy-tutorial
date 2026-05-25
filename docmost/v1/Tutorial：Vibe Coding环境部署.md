# Tutorial：Vibe Coding环境部署

# 介绍

本教程面向 Windows 用户，系统性地指导完成 **Vibe Coding（氛围编程）** 开发环境的完整搭建。Vibe Coding 是一种以 AI为核心驱动力的现代编程范式——开发者通过自然语言描述意图，由 AI助手完成代码生成、编辑与调试，从而将精力聚焦于设计思路而非实现细节。

教程分为两大阶段：

1. **基础依赖项安装** — 涵盖 Visual Studio Code（代码编辑器）、PowerShell 7（跨平台脚本终端）、Windows Terminal（现代化终端应用）、Node.js + pnpm（JavaScript 运行时与包管理器）、以及 Git（版本控制系统）。每一步均配有截图指引和验证方法，确保零基础用户也能顺利完成。
2. **AI 开发工具安装与配置** — 首先安装 Claude Code（Anthropic 推出的智能体编程工具）及其 VS Code 插件，获得终端 + IDE 双场景的 AI 编程能力；随后通过 CC Switch 工具配置第三方模型（如 DeepSeek-v4），实现一键切换 AI 服务商，摆脱对单一模型的依赖。

全教程以图文并茂的方式呈现，每节末尾附有验证步骤，方便读者随时自查安装是否成功。完成全部配置后，即可在 Windows 环境中流畅使用 AI 赋能的 Vibe Coding 工作流。

# 安装依赖项

## [Visual Studio Code](https://code.visualstudio.com/)

Visual Studio Code（简称 VS Code）是一款跨平台的代码编辑器，支持 Windows、macOS 和 Linux。

VS Code 运行十分轻快，对绝大多数硬件设备和操作系统版本都能完美兼容。

### 官方网站

![](files/019e3fb7-a746-715c-bfb7-0b21fd4e03db/image.png)

### 安装步骤

1. 参考官方指南，或使用附件安装
  1. 如果有管理员权限，使用 **System Installer** `VSCodeSetup-x64-1.120.0.exe`
  2. 否则，使用 **User Installer** `VSCodeUserSetup-x64-1.120.0.exe`
2. 选择`我同意此协议`并点击`下一步`

![](files/019e3fbe-0164-7421-a6ab-57d2b466c50d/image.png)

3. 如果使用System Installer，有额外步骤

选择安装路径并点击`下一步`

![](files/019e3fc5-c06b-778e-9351-019fdea11a0b/image.png)

点击`下一步`

![](files/019e3fc9-2e38-73ae-beec-a332223dff1a/image.png)

4. 按需选择附加任务并点击`下一步`

![](files/019e3fbe-f0ef-70b7-8c9a-bd6202e109a2/image.png)

4. 点击`安装`

![](files/019e3fbf-7224-7678-8b56-2d9a8fecc876/image.png)

5. 等待安装完成，点击`完成`

![](files/019e3fbf-bd55-728b-b98c-f7b44637a36d/image.png)

![](files/019e3fca-ce65-7318-a345-b1d3e4ad49c9/image.png)

### 验证

1. 可以在开始菜单中找到应用

![](files/019e3fcc-b9ff-7155-8fa1-3e8a0089a534/image.png)

2. 打开后界面如下图

![](files/019e3fcb-569e-7260-81a8-8357863c9d51/image.png)

---

## [PowerShell 7](https://learn.microsoft.com/en-us/powershell/scripting/install/install-powershell-on-windows?view=powershell-7.6)

PowerShell 是一个跨平台的任务自动化解决方案，它集成了命令行终端（Shell）、脚本语言以及配置管理框架。同时，PowerShell 支持在 Windows、Linux 和 macOS 系统上运行。

### 官方网站

![](files/019e3f69-b978-75bf-a471-0cbe7fb8e463/image.png)

### 安装步骤

1. 参考官方指南，或使用附件`PowerShell-7.6.1-win-x64.msi`安装，点击`Next`

![](files/019e3f6e-2b80-7393-bb66-939653489fd5/image.png)

2. 选择安装路径并点击`Next`

![](files/019e3f71-c24b-741f-89ce-97307fea4de4/image.png)

3. 勾选前2个选项并点击`Next`

![](files/019e3f7f-9123-750a-b920-750b52e4adf7/image.png)

4. 点击`Next`

![](files/019e3f75-e012-74b5-a3cb-2d8783353d77/image.png)

5. 点击`Install`

![](files/019e3f76-010a-76fc-9502-842dc1d410e1/image.png)

6. 等待安装完成，点击`Finish`

![](files/019e3f76-30ed-74ea-9ae6-662e1a5f8034/image.png)

![](files/019e3f80-e9a8-745a-9f65-32cf5f32599b/image.png)

### 验证

1. 可以在开始菜单中找到应用

![](files/019e3f85-0572-76ce-88b9-609ce029d724/image.png)

2. `Win + R`输入`pwsh`可打开终端

![](files/019e3f88-1ee2-722b-aaf7-383b602b974d/image.png)

---

## [Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701?hl=zh-CN&gl=CN)

Windows 终端程序是一款新式、快速、高效、强大且高效的终端应用程序，适用于命令行工具和命令提示符，PowerShell和 WSL 等 Shell 用户。主要功能包括多个选项卡、窗格、Unicode、和 UTF-8 字符支持，GPU 加速文本渲染引擎以及自定义主题、样式和配置。

### 官方网站

https://apps.microsoft.com/detail/9n0dx20hk701?hl=zh-CN&gl=CN

### 安装步骤

1. 从官网下载安装包，或使用附件`Windows Terminal Installer.exe`安装

![](files/019e3f8b-0ea5-776f-91fb-157cce84ba00/image.png)

2. 自动下载（过程可能较慢）并安装后，会自动打开终端（默认使用Windows PowerShell）

![](files/019e3f95-b7be-73be-b087-0050489175c7/image.png)

3. 为了默认使用PowerShell 7，点击`设置`

![](files/019e3f97-3f9d-70fe-8c20-72821c0cfecc/image.png)

4. 点击`添加新配置文件`、`新建空配置文件`

![](files/019e3fa8-6a7c-741c-85d2-2d42a4419c0b/image.png)

5. 修改名称为`PowerShell 7`、修改命令行可执行文件路径`xxx/pwsh.exe`、点击保存

![](files/019e3fa6-a496-776e-926d-dabd7e3621a5/image.png)

6. 点击`启动`、`默认配置文件`选择`PowerShell 7`、`默认终端应用程序`选择`Windows 终端`、点击`保存`

![](files/019e3fa7-71bb-73bb-9cdd-cc8f3f4bed48/image.png)

### 验证

1. `Win + R`输入`wt`可默认使用新安装的终端打开PowerShell 7
2. 如下图，可在首行显示PowerShell版本

![](files/019e3fae-3e3f-70bb-b8be-5282678ba23f/image.png)

---

## [Node.js](https://nodejs.org/en)

Node.js是一个免费且开源的跨平台 JavaScript 运行时环境，开发者可以利用它来高效地构建服务端、Web 应用程序、命令行工具和自动化脚本。

### 官方网站

https://nodejs.org/en

### 安装步骤

1. 从官网下载安装包，或使用附件`node-v24.15.0-x64.msi`安装

![](files/019e3eff-fbef-734c-ac71-9a4ac7661d4b/image.png)

![](files/019e3f00-c057-717b-b553-ff0ea5988145/image.png)

2. 选中`I accept the terms in the License Aggrement`并点击`Next`

![](files/019e3f02-0bf1-737d-865e-9f15fe371a32/image.png)

3. 选择安装路径并点击`Next`

![](files/019e3f04-75e6-769d-9aa7-ab09ef240746/image.png)

4. 点击`Next`

![](files/019e3f05-66ab-774b-a4b3-d53875babb2d/image.png)

5. 不勾选，直接点击`Next`

![](files/019e3f07-b67e-74a0-8a10-61b1a0f8d193/image.png)

6. 点击`Install`以开始安装

![](files/019e3f0a-12e0-73f7-8c93-4aebbc1c2791/image.png)

![](files/019e3f0a-ca63-7408-b80c-1e50d6467f16/image.png)

7. 如果之前安装过Node.js，可能会提示选择关闭进程以更新文件，点击`OK`

![](files/019e3f0b-6e3f-76ba-a890-6da8a30a0cdb/image.png)

![](files/019e3f0b-a1b6-77a8-9bd0-2a60d6dc4bcc/image.png)

9. 等待安装完成，点击`Finish`

![](files/019e3f0b-e214-7138-82be-d7f2a3d0c3d4/image.png)

![](files/019e3f0c-a051-7759-bd9a-7c821ac12770/image.png)

### 验证

1. Node.js会同时安装包管理器npm
2. `Win + R`输入`wt`打开Windows Terminal
3. 分别键入命令 `node --version` 和 `npm --version`
4. 如下图，正常显示版本号则安装成功

![](files/019e3f44-b978-745e-91f9-93c9167e7578/image.png)

---

## pnpm

快速且节省磁盘空间的现代 Node.js 包管理器

### 官方网站

https://pnpm.io/installation

### 安装步骤

1. 确保npm安装成功后，打开终端输入命令 `npm install -g pnpm@latest-11`
2. 如下图，安装结束

![](files/019e3f5a-ba4e-7019-9a13-f724ec3b9b2f/image.png)

### 验证

1. 终端输入命令 `pnpm --version`
2. 如下图，正常显示版本号则安装成功

![](files/019e3f5c-0aa4-707e-8420-9b2b062f1893/image.png)

---

## [Git](https://git-scm.com/)

Git 是一款免费且开源的分布式版本控制系统，旨在快速、高效地处理从小型到超大型的所有项目。 Git 的运行速度极快，并拥有一个由图形用户界面（GUI）、托管服务以及命令行工具组成的庞大生态系统。

### 官方网站

https://git-scm.com/

### 安装步骤

1. 从官网下载安装包，或使用附件`Git-2.54.0-64-bit.exe`安装，点击`Next`

![](files/019e3f19-f6a5-7104-b17c-67cb056703c8/image.png)

2. 选择安装路径并点击`Next`

![](files/019e3f1c-5542-70a9-af48-d6c4e5705e80/image.png)

3. 按需勾选组件并点击`Next`

![](files/019e3f21-1a3d-747f-b90f-4e17d6a29e4f/image.png)

4. 点击`Next`

![](files/019e3f21-ac15-761b-8d7a-3052701d4bed/image.png)

5. 选择`Use Visual Studio Code as Git’s default editor`并点击`Next`

![](files/019e3f22-d1cb-719e-949f-d520c1367594/image.png)

6. 选择`Override the default branch name for new respositories`并点击`Next`

![](files/019e3f23-795b-76aa-b2c5-92a978c4a0f5/image.png)

7. 点击`Next`

![](files/019e3f23-e389-7108-9d07-4174aedf79a0/image.png)

8. 点击`Next`

![](files/019e3f24-384d-7151-bdfd-c6bea327687d/image.png)

9. 点击`Next`

![](files/019e3f24-7ac0-70c9-9926-0295604bbef5/image.png)

10. 点击`Next`

![](files/019e3f25-1653-707f-a481-f5d43c197659/image.png)

11. 点击`Next`

![](files/019e3f25-6dd6-7296-9582-ce8c135d24c4/image.png)

12. 点击`Next`

![](files/019e3f26-0740-71b7-a470-c1ec9552e165/image.png)

13. 点击`Next`

![](files/019e3f26-6929-736d-b791-f504291b7eed/image.png)

14. 点击`Next`

![](files/019e3f29-52e1-757a-a210-50fd2209f0bd/image.png)

15. 等待安装完成，点击`Finish`

![](files/019e3f29-8fd8-73be-b024-345e614348ce/image.png)

![](files/019e3f2a-6000-7514-a223-0eae804d681a/image.png)

### 验证

1. 终端输入命令 `git --version`
2. 如下图，正常显示版本号则安装成功

![](files/019e3f5f-a52f-7082-88c4-02cb9a28f9a5/image.png)

---

# 安装AI开发工具

## [Claude Code](https://code.claude.com/docs/en/overview) 终端

Claude Code 是一款智能体（Agentic）编程工具，它能够阅读您的代码库、编辑文件、运行命令，并与您的开发工具无缝集成。该工具现已登录终端、IDE、桌面应用及浏览器。

Claude Code 是一款由 AI 驱动的编程助手，旨在帮助您构建新功能、修复 Bug 并自动化开发任务。它能够理解您的整个代码库，并跨多个文件和工具高效协同以完成工作。

![](files/019e3fd1-202d-7143-ba03-557aaea2d8d7/demo.gif)

### 官方网站

![](files/019e3fd4-7870-76cc-8f5e-9dd79e033b29/image.png)

### 安装步骤

选择以下任一方法安装Claude Code

1. 网络环境允许时，优先选择官方推荐的命令行安装方法

```powershell
irm https://claude.ai/install.ps1 | iex
```

2. 网络环境不允许时，可使用pnpm安装，终端输入命令

```powershell
pnpm add @anthropic-ai/claude-code-win32-x64 -g
```

![](files/019e3ff3-2323-741b-b21a-42f6c0f40b7e/image.png)

3. 无网络安装，使用附件`claude-2.1.144-win32-x64.exe`，终端输入命令

```powershell
# 例如，可执行文件存放在 G:\OneDrive\AI Studio\Tutorials
cd G:\OneDrive\AI Studio\Tutorials

# 自动安装
./claude-2.1.144-win32-x64.exe install
```

![](files/019e3ff5-a3ef-7719-8e25-172d72359d0f/image.png)

### 验证

1. 终端输入命令 `claude --version`
2. 如下图，正常显示版本号则安装成功

![](files/019e3ff7-d280-72db-a3ec-46d2b1cc0e4a/image.png)

---

## Claude Code 扩展

VS Code 扩展为 Claude Code 提供了原生图形界面，并直接集成到 IDE 中。借助于该扩展，可以在接受 Claude 的方案之前进行审查和修改、自动接受其实时做出的修改、通过选区以特定的行号范围提及文件、访问对话历史记录，以及在独立的标签页或窗口中打开多个对话。

### 安装步骤

1. 点击左侧栏的`扩展图标`、搜索`claude code`、点击`首个扩展`、点击`Install`

![](files/019e3fff-f17e-7309-8d20-cb4173751169/20260519-192854.png)

2. 安装后，左侧栏会新增Claude Code扩展图标

![](files/019e4000-2661-72fc-a55e-a39ae886f886/20260519-192947.png)

---

## [CC Switch](https://github.com/farion1231/cc-switch)

CC Switch 提供了一站式桌面应用，轻松掌控AI CLI 工具。无需再手动修改繁琐的配置文件，只需通过直观的图形界面，即可一键导入服务商、秒级无缝切换。应用内置 50 多种主流服务商预设，支持统一的 MCP 与 Skills 管理以及系统托盘一键闪切——其底层更是由可靠的 SQLite 数据库保驾护航，通过原子写入机制，彻底杜绝配置损坏的风险。

### 官方网站

![](files/019e4007-78bd-707f-927d-a7ca6cb5a02a/image.png)

### 安装步骤

1. 从官方网站下载，或使用附件`CC-Switch-v3.15.0-Windows.msi`安装并点击`Next`

![](files/019e400b-8b9e-765e-90c2-ab91c6356f2c/image.png)

2. 选择安装路径并点击`Next`

![](files/019e400c-c4eb-709b-9327-656008ee6061/image.png)

3. 并点击`Install`

![](files/019e400d-638c-74b9-8f05-8c7a3e7d6fd9/image.png)

4. 等待安装完成，点击`Finish`

![](files/019e400e-5d13-7188-bd02-621e5c74ec9d/image.png)

![](files/019e400e-85da-7565-8d88-526c0481448b/image.png)

### 配置第三方模型

本教程选用DeepSeek-v4模型

1. [DeepSeek 开放平台](https://platform.deepseek.com/sign_in) 注册并充值

![](files/019e401a-5999-75dd-8c1e-979fefe6d952/image.png)

2. 创建API Key

![](files/019e401b-16ac-7498-83e2-54faad635d46/image.png)

3. 复制API Key（注意：只显示一次，如果遗忘需要重新创建）

![](files/019e401b-b306-72a9-abea-3d3fd1b84cd4/image.png)

4. 打开CC Switch，点击右上角`+`

![](files/019e4012-c0d9-758e-bde7-5a36eb6b3ff6/image.png)

5. 点击`Claude 供应商`

![](files/019e4012-e7dd-7166-9a6d-1556bb2cdc41/image.png)

6. 向下滚动，填写刚才复制的`API Key`

![](files/019e401d-2827-718a-87be-fff3dbcba21a/image.png)

7. 参考下图填写`模型映射`和`默认兜底模型`，最后点击`添加`

![](files/019e4015-26ff-73d8-b881-10e176d7bf73/image.png)

## 验证第三方模型接入

### 以Claude Code终端为例

1. 打开终端，先cd到项目路径
2. 输入`claude`，可见模型为deepseek-v4-pro

![](files/019e431b-9de4-70c5-bf61-34b6eeea489d/Video_2026-05-20_094732_编辑.gif)![](files/019e4024-e189-7390-91ac-8d893c11682d/image.png)

### 以Claude Code扩展为例

1. 打开VS Code，点击`Claude Code扩展`、`New session`
2. 对话框输入`/model`，可见模型为deepseek-v4-pro

![](files/019e430e-2794-756e-b816-996ab4ca4ec2/Video_2026-05-20_093746_编辑.gif)

至此，Claude Code开发环境所需依赖项、自身应用程序、第三方模型均已安装或配置完成