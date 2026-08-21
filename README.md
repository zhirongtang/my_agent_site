# 天意 IP 智能体营销首页

这是一个只负责营销承接和体验分流的前端首页。AI 对话、知识库和工作流入口通过后端智能服务 URL 配置接入。

## 本地开发

```bash
npm install
npm run dev
```

## 配置智能体入口

复制 `.env.example` 为 `.env.local`，替换为你的智能体服务地址：

```bash
VITE_PROFILE_AVATAR_URL=/avatar.jpg
VITE_AGENT_CIRCLE_ASSISTANT_URL=http://139.155.156.42/chatbot/ob13wH9GJQcFEG7P
VITE_AGENT_REDBOOK_ANALYZER_URL=
VITE_AGENT_REPURPOSE_ASSISTANT_URL=
VITE_AGENT_KNOWLEDGE_BASE_URL=http://139.155.156.42/datasets
```

首页的智能体卡片、顶部「开始体验」和底部「体验朋友圈助手」会跳转到对应服务地址。外部链接会在新标签页打开。

如果使用本地头像文件，把图片放到 `public/avatar.jpg`，并保持 `VITE_PROFILE_AVATAR_URL=/avatar.jpg`。

## 构建

```bash
npm run build
```
