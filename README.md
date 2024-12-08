# Reference App

一个基于 React Native 和 Expo 开发的文本引用查找应用。帮助用户快速定位文本出处，包括书名、章节和页码信息。

## 功能特点

- 🎨 支持浅色/深色主题，自动跟随系统
- 📱 原生性能体验，基于 Expo Router 构建
- 🔍 智能文本匹配，基于 GPT API
- 📚 丰富的书籍数据库
- 🔄 离线支持和数据同步
- 👤 用户数据云端备份

## 技术栈

- React Native 0.76.3
- Expo SDK 52
- TypeScript 5.3
- Expo Router 4.0
- React 18.3

### 核心依赖

```json
{
  "expo": "~52.0.11",
  "expo-router": "~4.0.9",
  "react": "18.3.1",
  "react-native": "0.76.3",
  "react-native-reanimated": "~3.16.1",
  "react-native-safe-area-context": "4.12.0"
}
```

## 项目结构

## 当前进度

### 📅 下一步计划

## 开发指南

### 环境要求

- Node.js >= 16
- Expo CLI
- iOS 模拟器或实机（用于开发测试）
- Xcode 15+ (iOS 开发)
- Android Studio (Android 开发)
- Deepseek API Key（用于文本匹配）

### 安装和运行

```bash
# 安装依赖
npm install

# 类型检查
npm run ts:check

# 启动开发服务器
npm start

# iOS 开发
npm run ios

# Android 开发
npm run android
```

#### 环境变量配置

1. 复制环境变量模板文件：

```bash
cp .env.example .env
```

2. 在 .env 中填入实际的值：

```env
# API 配置
EXPO_PUBLIC_API_URL=https://api.deepseek.com
EXPO_PUBLIC_API_KEY=your_deepseek_api_key_here  # 从 Deepseek 平台获取

# Supabase 配置（如果需要）
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

> 注意：不要将包含实际密钥的 .env 文件提交到版本控制系统

### 项目配置

#### 路径别名

项目使用 `@/` 作为 src 目录的别名，配置在 `tsconfig.json` 和 `babel.config.js` 中：

```typescript
// 示例用法
import { useTheme } from "@/contexts/ThemeContext";
import { ErrorBoundary } from "@/components/ErrorBoundary";
```

#### API 配置

项目使用 Deepseek API 进行文本匹配：

1. 注册 [Deepseek Platform](https://platform.deepseek.com/) 账号
2. 在 [API Keys](https://platform.deepseek.com/api_keys) 页面创建 API Key
3. 将 API Key 添加到 .env 文件中

```typescript
// 示例用法
import { EXPO_PUBLIC_API_KEY } from "@env";

const response = await fetch("https://api.deepseek.com/chat/completions", {
  headers: {
    Authorization: `Bearer ${EXPO_PUBLIC_API_KEY}`,
  },
  // ... 其他配置
});
```

### 开发规范

- 使用 TypeScript 进行开发
- 使用 Expo Router 进行路由管理
- 组件采用函数式编程
- 使用 Hooks 管理状态
- 使用 Context 进行全局状态管理

#### 测试规范

测试框架：

```json
{
  "@testing-library/react-native": "^12.0.0",
  "@testing-library/jest-native": "^5.4.0",
  "jest": "^29.2.1",
  "jest-expo": "~52.0.2"
}
```

测试文件组织：

```
src/
├── components/
│   ├── __tests__/          # 组件测试
│   │   └── Component.test.tsx
├── services/
│   ├── __tests__/          # 服务测试
│   │   └── service.test.ts
└── hooks/
     ├── __tests__/          # Hook 测试
     │   └── hook.test.ts
```

测试覆盖要求：

- 组件测试：渲染、交互、样式
- 服务测试：API 调用、错误处理
- Hook 测试：状态变化、副作用

运行测试：

```bash
# 运行所有测试
npm test

# 监听模式
npm run test:watch

# 查看覆盖率报告
npm run test:coverage
```

测试规则：

1. 新功能必须包含测试
2. 测试覆盖率要求：
   - 语句覆盖率 > 80%
   - 分支覆盖率 > 70%
   - 函数覆盖率 > 80%
3. 提交前必须通过所有测试
4. 使用 Mock 处理外部依赖

#### 代码风格

- 使用 TypeScript 严格模式
- 优先使用函数式组件和 Hooks
- 避免过度使用 any 类型
- 组件文件包含单一职责的组件
- 使用 async/await 处理异步操作

#### 注释规范

组件注释：

```typescript
/**
 * 组件的主要功能描述
 *
 * 关联组件：
 * - ComponentA：关系描述
 * - ComponentB：关系描述
 *
 * 关联服务：
 * - ServiceA：功能描述
 * - ServiceB：功能描述
 *
 * @test 测试要点：
 * - 渲染测试：检查关键元素
 * - 交互测试：用户操作
 * - 错误测试：异常处理
 */
```

函数注释：

````typescript
/**
 * 函数功能描述
 *
 * @param paramA - 参数A的说明
 * @param paramB - 参数B的说明
 * @returns 返回值说明
 * @throws 可能抛出的错误说明
 *
 * 使用示例：
 * ```typescript
 * const result = someFunction("参数");
 * ```
 *
 * @test 测试用例：
 * - 正常输入测试
 * - 边界条件测试
 * - 错误处理测试
 */
````

类型定义注释：

```typescript
/**
 * 类型用途说明
 *
 * @property fieldA - 字段A的说明
 * @property fieldB - 字段B的说明
 *
 * 使用场景：
 * - 场景A说明
 * - 场景B说明
 *
 * @test 类型测试：
 * - 必填字段验证
 * - 可选字段处理
 * - 类型约束检查
 */
```

代码块注释：

```typescript
// 重要逻辑说明
if (condition) {
  // 实现细节说明
}

{
  /* JSX 结构说明 */
}
<Component>{/* 子元素用途说明 */}</Component>;
```

#### 性能优化

- 使用 useMemo 和 useCallback 优化性能
- 避免不必要的重渲染
- 使用 React.memo() 包装纯展示组件
- 图片资源使用适当的尺寸和格式

### 文件命名规范

- 组件文件：PascalCase（如 ThemeSettings.tsx）
- 工具函数：camelCase（如 textMatching.ts）
- 类型定义：camelCase（如 theme.ts）
- 路由文件：kebab-case 或遵循 Expo Router 约定

## 主要功能

- 主题切换（浅色/深色/跟随系统）
- 文本引用查找
- 书籍信息展示
- 用户收藏管理

## 调试指南

### 开发工具

- React Native Debugger
- Expo Dev Tools
- Chrome DevTools
- Jest Test Runner

### 常见问题

1. Metro 缓存问题

   ```bash
   npx expo start -c
   ```

2. 依赖冲突

   ```bash
   rm -rf node_modules
   npm install
   ```

3. TypeScript 错误

   ```bash
   npm run ts:check
   ```

4. 测试失败

   ```bash
   # 查看详细测试报告
   npm test -- --verbose

   # 更新快照
   npm test -- -u
   ```

## 贡献指南

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 添加测试用例
5. 发起 Pull Request

### 提交规范

- feat: 新功能
- fix: 修复问题
- docs: 文档变更
- style: 代码格式
- refactor: 代码重构
- perf: 性能优化
- test: 测试相关
- chore: 构建过程或辅助工具的变动

## 许可证

MIT License

Copyright (c) 2024 [项目作者]

详见 [LICENSE](./LICENSE) 文件

## 联系方式

[在这里添加联系方式]
