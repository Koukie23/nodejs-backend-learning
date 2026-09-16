# Node.js Basics

## Learned

- Node.js 是 JavaScript Runtime
- npm / package.json 用来管理项目依赖和脚本
- CommonJS (`require`) 与 ES Module (`import`) 的基本用法
- 用 `http` 创建简单服务器，处理 GET/POST
- `fs` / `path` / `os` / `url` / `crypto` / `events` / `process` 等核心模块

## Practice

- 使用 `fs` 读写 `data/text.txt`
- 使用 `path` 处理路径
- 使用 `http` 创建静态页服务 (`server.js`) 和简易 API (`server2.js`)
- 使用 `nodemon` / `node --watch` 在开发时自动重启

## Important Concepts

- Non-blocking I/O
- Event Loop（初步）
- Module
- Request / Response
- Middleware 雏形（logger / jsonMiddleware）

## Still Unclear

- Promise / async-await 更深用法
- Stream
- 生产环境错误处理与分层架构
