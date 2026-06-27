# 功能
用来演示nuxt3打包并通过[upgradelink-upload](https://github.com/wodepig/upgradelink-upload-xxdl)自动上传的项目
[视频](https://www.bilibili.com/video/BV1uj2aBREeL)

## 配置
使用逻辑: 
* 当commit消息包含"自动更新"或"exe"时,触发部署
* 获取最新的commit消息
* 安装依赖
* pnpm build打包
* 调用wodepig/upgradelink-upload-xxdl这个Action自动上传
```yml
name: 程序部署

on:
  push:
    branches:
      - master

jobs:
  build-push:
    if: contains(github.event.head_commit.message, '自动更新') || contains(github.event.head_commit.message, 'exe')
    environment: prod
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20.19.4'
          # 获取git commit消息并去除"自动更新"
      - name: Get commit message and clean it
        id: get_commit_message
        run: |
          # 获取最新的 commit 消息
          COMMIT_MESSAGE=$(git log -1 --pretty=%B)
          
          # 清理 commit 消息：去除换行符和特殊字符
          CLEANED_MESSAGE=$(echo "$COMMIT_MESSAGE" | tr -d '\n' | sed 's/自动更新//g')
          
          # 将清理后的 commit 消息设置为环境变量
          echo "cleaned_message=$CLEANED_MESSAGE" >> $GITHUB_ENV
      - name: Install pnpm
        run: npm install -g pnpm

      - name: Install dependencies (with fixes)
        run: pnpm install

      - name: Build project
        run: pnpm build
      - name: Push To UpgradeLink
        id: push-upgradelink
        uses: wodepig/upgradelink-upload-xxdl@v1或git id
        with:
          upgradelink_username: ${{ vars.UPGRADELINK_USERNAME }}
          upgradelink_pwd: ${{secrets.UPGRADELINK_PWD}}
          upgradelink_type: ${{ vars.UPGRADELINK_TYPE }}
          upgradelink_key: ${{secrets.UPGRADELINK_KEY}}
          prompt_upgrade_content: ${{ env.cleaned_message }}
          dist_url: .output
          yunma_token: ${{ vars.YUNMA_TOKEN }}
          auto_push: true

```

前端页面: /app/pages/index.vue
后端接口: /server/api/test.ts
配置: nuxt.config.ts
官网:https://nuxt.com/docs/4.x/getting-started/server
https://nitro.build/deploy/workers