# Node.js Backend Learning Repository Management Guide

> 目标：用一个长期 GitHub 仓库持续管理从 Node.js 基础到 NestJS / Agent Backend 的学习代码、笔记和项目。

> 说明：根目录 `README.md` 已按本指南第 6 节改为进度总览；完整管理说明保留在本文件。若你本地还有更长版本，可用编辑器 Timeline 恢复后覆盖本文件。

---

## 1. 仓库定位

建议长期维护一个主仓库：

```text
nodejs-backend-learning
```

这个仓库用于记录整个学习过程：

```text
Node.js
→ JavaScript Async
→ HTTP
→ Express
→ PostgreSQL
→ Prisma
→ Authentication
→ Redis / BullMQ
→ NestJS
→ Agent Backend
```

不要每天新建一个仓库。

建议：

- **知识学习代码**：放在这个主仓库里
- **大型完整项目**：后期可以单独拆成独立仓库
- **每天的学习进度**：通过 Git Commit 记录

---

## 2. 推荐目录结构

```text
nodejs-backend-learning/
├─ README.md
├─ .gitignore
│
├─ 01-node-basics/
│  ├─ package.json
│  ├─ package-lock.json
│  │
│  ├─ basics/
│  │  ├─ processDemo.js
│  │  ├─ osDemo.js
│  │  ├─ pathDemo.js
│  │  ├─ urlDemo.js
│  │  ├─ cryptoDemo.js
│  │  ├─ eventsDemo.js
│  │  └─ fsDemo.js
│  │
│  ├─ http/
│  │  ├─ server.js
│  │  ├─ server2.js
│  │  ├─ index.js
│  │  ├─ postController.js
│  │  └─ util.js
│  │
│  ├─ public/
│  │  ├─ index.html
│  │  └─ about.html
│  │
│  ├─ data/
│  │  └─ text.txt
│  │
│  └─ notes.md
│
├─ 02-js-async/
│  ├─ promise.js
│  ├─ async-await.js
│  └─ notes.md
│
├─ 03-http/
│  └─ notes.md
│
├─ 04-express/
│  └─ notes.md
│
├─ 05-postgresql/
│  └─ notes.md
│
├─ 06-prisma/
│  └─ notes.md
│
├─ 07-auth-jwt/
│  └─ notes.md
│
├─ 08-redis-bullmq/
│  └─ notes.md
│
├─ 09-nestjs/
│  └─ notes.md
│
├─ 10-agent-backend/
│  └─ notes.md
│
└─ projects/
   ├─ mini-api/
   └─ contact-management-backend/
```

---

## 3. 目录管理原则

不按 Day01 / Day02 建目录。按知识模块管理，Commit 按学习进度管理。

## 4. 每个模块应该包含什么

代码 + notes.md + 必要的 package.json

## 5. notes.md 怎么写

记录四类内容：Learned / Practice / Important Concepts / Still Unclear

## 6. README.md 推荐结构

根目录维护进度总览（Goal / Progress / Projects），每完成一个阶段把 `[ ]` 改成 `[x]`。

## 7. .gitignore

至少包含：`node_modules/`、`.env`、`.env.*`、`dist/`、`coverage/`、`*.log`、`.DS_Store`

## 8–9. 上传与不上传

不要上传：`node_modules/`、`.env`、各类密钥。  
应该上传：`package.json`、`package-lock.json`、`.gitignore`、`README.md`、源码、`notes.md`、`.env.example`。

## 10. node_modules 为什么不上传

依赖通过 `npm install` 根据 lockfile 重建，无需把体积很大的 `node_modules/` 提交进仓库。
