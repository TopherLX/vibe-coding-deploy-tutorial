---
title: 数据可视化插件
---

# 数据可视化插件

在 Vibe Coding 中，数据可视化是最常见的前端需求之一。以下是两款最常用的 JavaScript 图表库，配合 Claude Code 可通过自然语言快速生成可视化代码。

## Apache ECharts —— 企业级图表

[Apache ECharts](https://echarts.apache.org/) 由百度开源，是 Apache 顶级项目，20+ 种内置图表类型，中文文档完善。

**安装方式：**

```bash
npm install echarts
```

**在 Claude Code 中使用 ECharts：**

在对话中描述需求，Claude Code 会生成完整的 ECharts 代码：

> "用 ECharts 帮我生成一个折线图，展示最近 12 个月的销售额趋势，带 tooltip 和数据标签，蓝色主题"

Claude Code 会生成一个包含完整 HTML + ECharts 配置的文件，直接在浏览器打开即可查看。

## Plotly.js —— 科学统计可视化

[Plotly.js](https://plotly.com/javascript/) 专长于科学计算和统计图，内置 40+ 图表类型（含 3D 图表、热力图、地理图），与 Python/R 生态深度集成。

**安装方式：**

```bash
npm install plotly.js-dist-min
```

**在 Claude Code 中使用 Plotly：**

> "用 Plotly 生成一个散点图，展示用户年龄和消费金额的关系，带回归趋势线"

## ECharts vs Plotly 选型

| 维度 | ECharts | Plotly.js |
|------|---------|-----------|
| 图表类型 | 20+ 种 | 40+ 种（含 3D） |
| 学习曲线 | 低 | 中 |
| 文档语言 | 中文完善 | 英文为主 |
| 包体积 | ~1MB | ~3MB |
| 统计功能 | 基础 | 内置回归、聚合等 |
| 适用场景 | 企业后台、大屏可视化 | 科研分析、统计图表 |
| CDN 加载 | `echarts.min.js` | `plotly-latest.min.js` |

> 企业后台和大屏场景优先选 **ECharts**（中文文档 + Canvas 高性能）；科研统计和 3D 图表优先选 **Plotly**。

## 参考文章

#### ECharts

| 文章 | 来源 | 说明 |
|------|------|------|
| [Apache ECharts 官方文档](https://echarts.apache.org/zh/index.html) | Apache 基金会 | 中文文档、配置项手册、示例画廊 |
| [ECharts 在线示例](https://echarts.apache.org/examples/zh/index.html) | Apache 基金会 | 200+ 可交互图表示例，一键复制代码 |

#### Plotly

| 文章 | 来源 | 说明 |
|------|------|------|
| [Plotly.js 官方文档](https://plotly.com/javascript/) | Plotly | API 参考、40+ 图表类型示例、3D 可视化 |
| [Plotly Python 集成](https://plotly.com/python/) | Plotly | 与 Python Dash/Plotly 生态联动 |

#### 进阶学习

| 文章 | 来源 | 说明 |
|------|------|------|
| [Observable 平台](https://observablehq.com/) | Mike Bostock / D3.js 作者 | 高质量交互式可视化范例，适合深入学习 |
| [Datawrapper Blog](https://blog.datawrapper.de/) | Datawrapper | 图表设计原则、视觉感知和叙事技巧 |
| [Information is Beautiful](https://informationisbeautiful.net/) | David McCandless | 数据可视化美学与叙事的标杆作品集
