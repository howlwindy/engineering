# vue 项目工程化

> `pnpm i`在 mac 报错时：`rm -rf ~/.pnpm-store` > **要运行项目先看[nodejs 版本和 pnpm 的问题](#nodejs)**
> 工程化坑太多，启动/报错记得看这个文档和相关的文件

- ## 技术栈
  - [vue3](https://v3.vuejs.org/)
  - [vue-router4](https://next.router.vuejs.org/)
  - [pinia](https://pinia.esm.dev/)
  - [scss](https://sass-lang.com/)
  - [element-plus](https://element-plus.gitee.io/zh-CN/guide/quickstart.html#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE)
  - [axios](https://axios-http.com/)
    - restful 接口
  - [echarts](https://echarts.apache.org/en/index.html)
    - 数据可视化
  - [vue-test-utils](https://next.vue-test-utils.vuejs.org/)
    - 测试
- ## icons
  - simple icons
    - [offical](https://simpleicons.org/)
    - [useage](https://www.npmjs.com/package/simple-icons-font)
  - material icons
    - [offical](https://fonts.google.com/icons?selected=Material+Icons)
    - [useage](https://developers.google.com/fonts/docs/material_icons)
- ## fonts

  > 可商用，支持多语言

  - [阿里巴巴普惠体 2.0](https://ics.alibaba.com/font/alibaba-sans)
  - [jetbrainmono](https://fonts.google.com/specimen/JetBrains+Mono?category=Monospace)
  - [material icons](https://fonts.google.com/icons)

  ## api 测试

  - [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

- ## 工程化/自动化

  > 细节看具体文件

  - ### 编辑器

    - #### [vscode](https://code.visualstudio.com/)

      - ##### **先决条件**

        > 安装下面这些插件，不用个人配置，只安装就好

        - [EditorConfig for Vs Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
        - [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
        - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
        - [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
        - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
        - [path-alias](https://marketplace.visualstudio.com/items?itemName=IWANABETHATGUY.path-alias)
        - [Material Design Icons Intellisense](https://marketplace.visualstudio.com/items?itemName=lukas-tr.materialdesignicons-intellisense)
        - [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

      - ##### 已配置功能

        - 保存时 eslint/stylelint/prettier

      - ##### 相关文件

        - [.vscode/extensions.json](.vscode/extensions.json)
        - [.vscode/settings.json](.vscode/settings.json)

  ### [nodejs](#nodejs)

  > 因为 v16.9 版本以上的 nodejs 将包管理器换成了 corepack，它管理着 npm/yarn/pnpm
  > pnpm 相对于其他两个有很多好处：安装包速度快，包之间依赖管理更好，nodejs 指定以后的默认包管理器

  - #### [pnpm](https://pnpm.io/)
    - ##### 迁移方法
      > 一定要先看官方文档，类似下面的命令有差异
      > npm install 类比 pnpm add
      > npx 类比 pnpm dlx
      1. `npm install -g n` - 安装 nodejs 的升级器
      2. `n stable` - 将 nodejs 升级到最新，因为 pnpm 需要 v16.9 版本以上的 nodejs
      3. `pnpm -v` - 如果有版本号输出说明 pnpm 可用
      4. `pnpm install` - 安装 package.json 中注册过的包，与 npm 一样
    - ##### 已配置功能
      > 主要功能全部切换到 pnpm
    - ##### 相关文件
      - [package.json](./package.json)
      - [pnpm-lock.yaml](./pnpm-lock.yaml)
  - ### 打包
    - #### [vite](https://vitejs.dev/)
      - ##### 已配置功能
        - 环境变量
          - dev
          - test
          - prod
        - 热更新
        - 错误输出到浏览器
        - 打包后本地预览
      - ##### 相关文件
        - [.env](./.env)
        - [.env.development](./.env.development)
        - [.env.production](./.env.production)
        - [.env.test](./.env.test)
        - [package.json](./package.json)
        - [.cache](./.cache/package.json) - 这个 cache 目录可以随意配置
  - ### ts/vue
    - #### [eslint](https://eslint.org/)
      - ##### 已配置功能
        - 保存时检测并输出报错/警告到终端
        - 部分自动修改
        - git 提交前必须通过检查
      - ##### 相关文件
        - [.eslintrc.yaml](./.eslintrc.yaml)
        - [.eslintignore](./.eslintignore)
        - [tsconfig.json](./tsconfig.json)
  - ### scss/vue

    - #### [postcss](https://postcss.org/)
      - ##### 已配置功能
        - stylelint
        - 属性排序
        - 信息输出
      - 相关文件
        - [postcss.config.js](./../postcss.config.js)
    - #### [stylelint](https://stylelint.io/)

      - ##### 已配置功能
        - 保存时检测并输出报错/警告到终端
        - 部分自动修改
        - git 提交前必须通过检查
      - ##### 相关文件
        - [.stylelintrc.yaml](./.stylelintrc.yaml)
        - [.stylelintignore](./.stylelintignore)
        - [tailwind.config.ts](./tailwind.config.ts)
        - [vite.config.ts](./vite.config.ts)

  - ### 所有文件风格格式化

    - #### [prettier](https://prettier.io/)
      - ##### 已配置功能
        - 保存时检测并输出报错/警告到终端
        - 部分自动修改
        - git 提交前必须通过检查
      - ##### 相关文件
        - [.prettierrc.yaml](./.prettierrc.yaml)
        - [.prettierignore](./.prettierignore)

  - ### git 提交规范
    - #### [husky](https://typicode.github.io/husky/#/)
      - ##### 已配置功能
        - pre-commit 执行 lint-staged
      - ##### 相关文件
        - [.husky/pre-commit](./.husky/pre-commit)
    - #### [lint-staged](https://github.com/okonet/lint-staged)
      - ##### 已配置功能
        - eslint
        - stylelint
        - prettier
      - ##### 相关文件
        - [package.json](./package.json)
    - #### [commitizen](http://commitizen.github.io/cz-cli/)
      - ##### 已配置功能
        - `git cz`取代`git commit -m ''`
      - ##### 相关文件
        - [package.json](./package.json)
  - ### FAQ
    - #### [yaml](https://yaml.org/)
      1. 配置文件只要支持就用 yaml
      2. yaml 大概是 json 的超集
      3. 至少可以写注释，其他的参考官方文档
