# ========== 构建阶段 ==========
FROM node:20-alpine AS builder

WORKDIR /app

# 安装 pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# 复制依赖配置文件
COPY package.json pnpm-lock.yaml ./

# 安装依赖
RUN pnpm install --frozen-lockfile

# 复制项目源代码
COPY . .

# 构建 Nuxt 应用（生成 .output 目录）
RUN pnpm build

# ========== 运行阶段 ==========
FROM node:20-alpine

WORKDIR /app

# 复制构建产物
COPY --from=builder /app/.output .output

# 暴露端口
EXPOSE 3000

# 启动命令
CMD ["node", ".output/server/index.mjs"]