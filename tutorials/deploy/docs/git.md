---
title: Git 安装指南
---

# Git

[Git](https://git-scm.com/) 是一款免费且开源的分布式版本控制系统，旨在快速、高效地处理从小型到超大型的所有项目。 Git 的运行速度极快，并拥有一个由图形用户界面（GUI）、托管服务以及命令行工具组成的庞大生态系统。

## 官方网站

<div class="official-site-preview">
  <iframe src="https://git-scm.com/" loading="lazy">
  </iframe>
</div>

## 安装步骤

1. 从官网下载安装包，或使用附件 `Git-<version>-64-bit.exe` 安装，点击 `Next`

![](../images/git/01-installer.png)

2. 选择安装路径并点击 `Next`

![](../images/git/02-path.png)

3. 按需勾选组件并点击 `Next`

![](../images/git/03-components.png)

4. 点击 `Next`

![](../images/git/04-next.png)

5. 选择 `Use Visual Studio Code as Git's default editor` 并点击 `Next`  
<small style="font-style: italic;">如果没有安装VS Code，选择 `Use Notepad as Git's default editor`</small>

![](../images/git/05-editor.png)

6. 选择 `Override the default branch name for new respositories` 并点击 `Next`

![](../images/git/06-branch-name.png)

7. 点击 `Next`

![](../images/git/07-next7.png)

8. 点击 `Next`

![](../images/git/08-next8.png)

9. 点击 `Next`

![](../images/git/09-next9.png)

10. 点击 `Next`

![](../images/git/10-next10.png)

11. 点击 `Next`

![](../images/git/11-next11.png)

12. 点击 `Next`

![](../images/git/12-next12.png)

13. 点击 `Next`

![](../images/git/13-next13.png)

14. 点击 `Next`

![](../images/git/14-next14.png)

15. 等待安装完成，点击 `Finish`

![](../images/git/15-complete.png)

![](../images/git/16-complete2.png)

## 验证

1. `Win + R` 输入 `wt` 打开 Windows Terminal
2. 终端输入命令 `git --version`
3. 如下图，正常显示版本号则安装成功

![](../images/git/17-verify.png)
