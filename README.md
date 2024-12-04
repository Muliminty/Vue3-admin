# Vue3 + TS + Element Plus 后台管理系统模板

## 项目结构

```plaintext
├── public/                       # 静态资源 (会直接被复制到最终的 dist 目录)
├── src/                          # 源码目录
│   ├── api/                      # 接口请求封装
│   │   ├── modules/              # 按模块划分的 API
│   │   │   ├── auth.ts           # 示例：用户认证相关 API
│   │   │   ├── user.ts           # 示例：用户管理相关 API
│   │   ├── index.ts              # API 统一出口
│   │
│   ├── assets/                   # 静态资源 (会被打包)
│   │   ├── images/               # 图片
│   │   ├── styles/               # 全局样式文件
│   │   │   ├── variables.scss    # SCSS 变量
│   │   │   ├── mixins.scss       # SCSS 混入
│   │   │   ├── reset.scss        # 样式重置
│   │
│   ├── components/               # 全局通用组件
│   │   ├── BasicTable.vue        # 示例：通用表格组件
│   │   ├── BasicDialog.vue       # 示例：通用弹窗组件
│   │   ├── index.ts              # 组件统一导出
│   │
│   ├── config/                   # 项目配置
│   │   ├── theme.ts              # 主题配置
│   │   ├── request.ts            # Axios 请求配置
│   │
│   ├── directives/               # 自定义指令
│   │   ├── permission.ts         # 示例：权限指令
│   │   ├── index.ts              # 指令统一导出
│   │
│   ├── hooks/                    # 封装的 Composition API 钩子
│   │   ├── useAuth.ts            # 示例：认证相关 Hook
│   │   ├── useFetch.ts           # 示例：通用数据请求 Hook
│   │
│   ├── layouts/                  # 布局组件
│   │   ├── DefaultLayout.vue     # 默认布局
│   │   ├── BlankLayout.vue       # 空白布局
│   │
│   ├── locales/                  # 国际化资源
│   │   ├── en.json               # 英文语言包
│   │   ├── zh-CN.json            # 简体中文语言包
│   │
│   ├── plugins/                  # 插件目录
│   │   ├── element-plus.ts       # Element Plus 注册
│   │   ├── vue-i18n.ts           # 国际化插件注册
│   │
│   ├── router/                   # 路由
│   │   ├── modules/              # 按模块拆分的路由
│   │   │   ├── dashboard.ts      # 示例：仪表盘模块路由
│   │   │   ├── user.ts           # 示例：用户模块路由
│   │   ├── index.ts              # 路由主入口
│   │
│   ├── store/                    # 状态管理
│   │   ├── modules/              # 按模块划分的状态
│   │   │   ├── user.ts           # 示例：用户状态
│   │   │   ├── app.ts            # 示例：应用状态
│   │   ├── index.ts              # Store 主入口
│   │
│   ├── utils/                    # 工具函数
│   │   ├── auth.ts               # 示例：认证相关工具函数
│   │   ├── request.ts            # 示例：请求封装工具
│   │   ├── index.ts              # 工具函数统一出口
│   │
│   ├── views/                    # 页面视图
│   │   ├── Dashboard/            # 示例：仪表盘模块
│   │   │   ├── Dashboard.vue     # 仪表盘页面
│   │   │   ├── components/       # 仪表盘模块相关的私有组件
│   │   ├── User/                 # 示例：用户模块
│   │   │   ├── UserList.vue      # 用户列表页面
│   │   │   ├── UserDetail.vue    # 用户详情页面
│   │
│   ├── App.vue                   # 根组件
│   ├── main.ts                   # 入口文件
│   ├── shims.d.ts                # TypeScript 声明文件
│   ├── env.d.ts                  # 环境变量类型声明
│
├── .env                          # 环境变量
├── .env.development              # 开发环境配置
├── .env.production               # 生产环境配置
├── .eslintrc.cjs                 # ESLint 配置
├── .prettierrc                   # Prettier 配置
├── tsconfig.json                 # TypeScript 配置
├── vite.config.ts                # Vite 配置
├── package.json                  # 项目描述文件
├── README.md                     # 项目说明文档
```

---

## 功能模块说明

### 1. **公共部分**
- **API 封装**：`src/api/` 模块化接口，便于维护。
- **静态资源**：`src/assets/` 包含图片、样式等资源文件。
- **全局组件**：`src/components/` 复用性强的 UI 组件，如表格、弹窗。
- **工具函数**：`src/utils/` 常用功能封装（如权限验证、请求封装）。
- **布局**：`src/layouts/` 页面布局模板，支持多种布局模式。

### 2. **配置**
- **主题配置**：`src/config/theme.ts`，自定义主题色。
- **请求配置**：`src/config/request.ts`，配置 Axios 拦截器及基础设置。

### 3. **功能扩展**
- **国际化**：`src/locales/` 配置多语言支持。
- **自定义指令**：`src/directives/` 通过指令实现特定功能，如权限控制。

### 4. **核心逻辑**
- **路由管理**：`src/router/` 模块化路由，便于扩展和维护。
- **状态管理**：`src/store/` 基于 Pinia/Vuex 的全局状态管理。
- **页面视图**：`src/views/` 各功能模块页面及相关组件。

---

## 安装与启动

### 1. **安装依赖**
```bash
npm install
```

### 2. **运行开发环境**
```bash
npm run dev
```

### 3. **打包生产环境**
```bash
npm run build
```

### 4. **代码检查与修复**
```bash
npm run lint
```

---

## 技术栈

- **开发框架**：Vue 3 + TypeScript
- **UI 框架**：Element Plus
- **状态管理**：Pinia / Vuex（根据项目需求选择）
- **构建工具**：Vite

---

## 贡献指南

1. Fork 仓库。
2. 创建新分支：`git checkout -b feature/your-feature-name`。
3. 提交代码：`git commit -m 'Add new feature'`。
4. Push 分支：`git push origin feature/your-feature-name`。
5. 提交 Pull Request。



