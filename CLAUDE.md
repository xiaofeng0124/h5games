# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ChillArcade (chillarcade.io) — 用批量生成 H5 休闲游戏站，SEO 拿海外流量，广告变现。

## Tech Stack

- **前端/框架**: Astro 6 + Tailwind CSS 4（静态站点生成）
- **部署**: Cloudflare Pages（通过 Wrangler）
- **KV**: Cloudflare KV（feedback 功能）
- **游戏数据**: 本地 JSON + 批量脚本生成

## Commands

```bash
# 开发
npm run dev

# 构建
npm run build

# 部署（wrangler 已全局安装，直接用不用 npx）
wrangler pages deploy dist --branch production
```

## 工作规则

1. **启动时先了解项目**: 每次进入项目时，先读取 CLAUDE.md 和关键文件了解当前状态后再工作。
2. **直接执行**: 收到明确指令后直接执行，不再确认。
3. **改后必检 + 自动部署**: 任何修改完成后必须逐行审查、检查冲突/副作用，确认无误后自动部署。失败则修复重试。
4. **code-review 节点**: 以下情况修改后执行 `/code-review high`：
   - 改动 `functions/`（后端 API 逻辑）
   - 批量生成新页面/游戏后（检查路径、数据引用、语法错误）
   - 改动 `src/pages/` 或 `src/components/` 核心页面逻辑
   - 纯 CSS/模板样式调整不需要跑
