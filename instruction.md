# 核心功能

app 名字叫 Reference，根据用户输入的一段文本，判断文本出自哪本书。输出的结果包括书名、章节、页码。另外给出该书籍内容概要，其他比较出名的句子。

## 文本识别与书籍匹配

- 用户输入或粘贴一段文本。

- 系统分析文本特征，匹配数据库中的书籍内容。

- 返回可能的书籍列表，并标注匹配度。

## 详细书籍信息展示

- 提供书籍的详细信息，包括作者、出版年份、简介等。

- 展示书籍的相关章节或段落，便于用户进一步查阅。

## 用户收藏与历史记录

- 用户可以收藏感兴趣的书籍。

- 系统记录用户的查询历史，方便回溯和复查。

# 附加功能

## 推荐系统

- 根据用户的查询历史和收藏，推荐相关书籍。

- 提供个性化的阅读建议，提升用户粘性。

## 社交分享

- 允许用户将识别结果分享到社交平台，如微信、微博、小红书、抖音等。

- 增加应用的曝光率和用户互动性。

## 学习工具集成

- 提供关键词高亮、笔记记录、标注功能，方便用户学习和研究。

- 支持导出笔记，便于用户整理和分享。

## 多语言支持

- 扩展至多种语言，满足不同语言用户的需求。

- 提高应用的国际化程度。

## 离线功能

- 支持部分功能的离线使用，如查看已下载的书籍信息。

- 提升用户在无网络环境下的使用体验。

# 用户体验优化

## 简洁直观的界面设计

- 采用苹果 Human Interface Guidelines，确保界面美观且易用。

- 优化导航结构，减少用户操作步骤。

## 快速响应与高准确率

- 优化算法，提高文本识别的准确性和速度。

- 确保用户体验流畅，无卡顿现象。

## 个性化设置

- 提供主题切换、字体大小调整等个性化选项。

- 满足不同用户的视觉和使用习惯。

## 及时的反馈与帮助

- 内置帮助中心，提供使用指南和常见问题解答。

- 设置反馈渠道，及时收集和处理用户反馈，持续优化应用。

# App 通用模块

## 内购逻辑

- **拉取内购产品**：从 App Store 拉取可供购买的产品列表。

- **处理用户内购动作**：管理用户的购买请求，确保交易顺利完成。

- **回调验证**：验证购买凭证，确保交易的合法性。

- **更新状态**：根据购买结果更新用户的订阅或购买状态。

## Onboarding 流程

- **引导页面流程安排**：设计新用户首次使用应用时的引导流程，介绍核心功能和使用方法。

- **用户注册与登录**：简化注册和登录流程，支持第三方登录选项。

## 通知逻辑

- **规划通知**：制定应用内通知的发送策略，如新书推荐、系统更新等。

- **设置通知铃声**：允许用户自定义通知声音，提升个性化体验。

## 主题配色方案

- **一键切换主题配色**：提供多种主题配色方案，用户可根据喜好快速切换。

## 多语言

- **一键切换多语言**：支持多语言界面，用户可轻松切换所需语言。

## 小组件

- **小组件获取数据**：设计桌面小组件，展示书籍推荐或用户收藏。

- **同步数据**：确保小组件与主应用数据同步，保持信息一致。

## 付费墙

- **功能介绍**：清晰展示付费功能和其优势。

- **对比**：提供免费与付费版本的功能对比，帮助用户做出决策。

- **用户证言**：展示满意用户的评价，增强信任感。

## CoreData

- **数据更新**：管理本地数据的存储和更新。

- **同步到 iCloud**：确保用户数据在不同设备间同步，提升用户体验。

## 设计规范

- **预定义的设计元素**：提前定义好的 padding、圆角、字体样式等，确保界面一致性和美观性。

# 技術堆疊和包

- **代码规范**，注意代码块写清楚注释。

- **使用 React Native 开发**，使用 Expo CLI 打包。偏向苹果的风格和 UI/UX 设计。

- **自然语言处理（NLP）**：使用 GPT 进行文本分析。

- **数据库管理**：使用 Supabase 作为后端服务，构建高效的文献数据库，支持快速检索和更新。

- **用户数据安全**：保障用户隐私，采用加密技术保护用户数据。

# 項目資料夾結構

```

project/

│

├── src/

│ ├── components/

│ │ ├── Onboarding/

│ │ ├── InAppPurchase/

│ │ ├── Notifications/

│ │ ├── Themes/

│ │ ├── Language/

│ │ ├── Widgets/

│ │ └── Paywall/

│ ├── utils/

│ │ ├── supabaseClient.ts

│ │ └── text_matching.ts

│ ├── models/

│ │ └── book.ts

│ ├── views/

│ │ └── MainView.tsx

│ ├── controllers/

│ │ └── MainController.ts

│ ├── services/

│ │ ├── CoreDataService.ts

│ │ ├── ICloudSyncService.ts

│ │ ├── textService.ts

│ │ └── storageService.ts

│ └── styles/

│ └── design_specifications.ts

│

├── assets/

│ ├── images/

│ ├── sounds/

│ └── translations/

│

├── backend/

│ ├── functions/

│ │ └── match_text.sql

│ └── supabase/

│ ├── tables/

│ │ ├── bookModel.sql

│ │ └── userModel.sql

│ └── functions/

├── tests/

│ ├── test_text_matching.ts

│ └── test_in_app_purchase.ts

│

├── .cursorrules

├── tsconfig.json

└── README.md
```

# 資料庫設計

- **書籍資料表**

- 書名

- 作者

- 出版年份

- 內容概要

- 著名句子

- 章節與頁碼資訊

- **用戶資料表**

- 收藏书籍

- 查询历史

- 内购状态

- 设置偏好（主题、语言等）

# 登陆页面组件

- **登录表单**

- 用户名/邮箱

- 密码

- 忘记密码链接

- **第三方登录选项**

- 微信登录

- 微博登录

- Apple ID 登录

# 文案

- **欢迎信息**

- 简洁有力的欢迎语，介绍应用的核心功能。

- **功能描述**

- 每个功能模块的详细说明，帮助用户理解如何使用。

- **错误提示**

- 清晰的错误信息，指导用户解决常见问题。

- **帮助与支持**

- 常见问题解答和联系支持的指引。

# 元件

- **按钮**

- 主按钮、次按钮、禁用按钮样式。

- **输入框**

- 文本输入、密码输入、多行文本输入。

- **卡片**

- 展示书籍信息的卡片设计。

- **导航栏**

- 底部导航、侧边导航设计。

- **通知**

- 应用内通知提示组件。

# 动画

- **过渡动画**

- 页面切换、模态弹出动画。

- **加载动画**

- 数据加载时的动画效果。

- **反馈动画**

- 用户操作后的视觉反馈，如按钮点击效果。

# 其他

- **测试计划**

- 单元测试、集成测试、UI 测试的策略和工具。

- **持续集成**

- 使用 CI 工具自动化测试和部署流程。

- **部署策略**

- App Store 发布流程、版本管理策略。

- **用户数据隐私**

- 隐私政策、数据处理流程及合规性措施。

我来帮你将需求按照重要性进行优先级排序，从最基础和核心的功能开始：

### 第一阶段 - 核心功能（1-4 周）

1. **基础架构搭建**

   - 项目初始化与文件结构
   - Expo 配置
   - TypeScript 设置
   - Supabase 后端集成

2. **文本识别核心功能**

   - 文本输入界面
   - GPT 文本分析集成
   - 书籍匹配算法
   - 基础结果展示

3. **数据库设计与实现**

   - 书籍数据表
   - 用户数据表
   - 基础 CRUD 操作

4. **用户认证系统**
   - 登录/注册界面
   - Apple ID 登录
   - 基础用户管理

### 第二阶段 - 重要功能（5-8 周）

5. **书籍详情功能**

   - 详细信息展示
   - 章节导航
   - 相关推荐

6. **用户系统完善**

   - 用户收藏功能
   - 历史记录
   - 个人中心

7. **基础 UI/UX**

   - 主题系统
   - 导航结构
   - 基础动画

8. **内购系统**
   - 产品配置
   - 支付流程
   - 订单管理

### 第三阶段 - 增强功能（9-12 周）

9. **多语言支持**

   - 语言切换系统
   - 翻译文案

10. **社交分享**

    - 分享功能
    - 社交平台集成

11. **学习工具**

    - 笔记功能
    - 标注系统
    - 导出功能

12. **推荐系统**
    - 个性化推荐
    - 阅读建议

### 第四阶段 - 优化与附加功能（13-16 周）

13. **离线功能**

    - 离线数据存储
    - 同步机制

14. **小组件支持**

    - iOS 小组件
    - 数据同步

15. **通知系统**

    - 推送通知
    - 自定义通知

16. **性能优化**
    - 加载优化
    - 缓存策略
    - 性能监控