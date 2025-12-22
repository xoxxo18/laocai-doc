## Git 提交消息（根据 `git diff --stat`）

### Subject（建议）

`feat(docs): 集成 Nextra 文档站点并完善静态导出构建配置`

### Body（要点）

- **Nextra/Next 配置**：引入 Nextra 包装 Next 配置，补齐 Turbopack 下的 MDX 组件 alias（`next.config.ts`）
- **站点布局**：切换到 Nextra Docs 的 `Layout/Navbar/Footer`，更新导航 Logo（小猫 + “牢财文档”）与 GitHub 图标（`app/layout.tsx`）
- **样式**：在全局样式中引入 `nextra-theme-docs` 样式（`app/globals.css`）
- **构建流程**：`dev` 使用 `--turbopack`；新增 `postbuild` 生成 pagefind 索引；忽略 `_pagefind/`（`package.json`, `.gitignore`）
- **清理**：移除默认首页与默认 SVG 静态资源（`app/page.tsx`, `public/*.svg`）
- **依赖锁**：同步更新 `bun.lock`

### Diff Stat

```text
.gitignore        |   3 +
app/globals.css   |   5 +-
app/layout.tsx    |  82 +++++-
app/page.tsx      |   7 -
bun.lock          | 846 +++++++++++++++++++++++++++++++++++++++++++++++++++++-
next.config.ts    |  31 +-
package.json      |   9 +-
public/file.svg   |   1 -
public/globe.svg  |   1 -
public/next.svg   |   1 -
public/vercel.svg |   1 -
public/window.svg |   1 -
12 files changed, 959 insertions(+), 29 deletions(-)
```


