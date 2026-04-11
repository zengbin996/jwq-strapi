# jwq-strapi

个人网站后端服务，基于 [Strapi v5](https://strapi.io/) 构建，提供文章、相册、足迹等内容管理与 API 接口。

## 功能模块

| 模块 | 说明 |
|------|------|
| **Article** | 文章，支持富文本、封面、标签、置顶、分类 |
| **Article Category** | 文章分类，支持父子层级结构 |
| **Photo** | 相册照片，支持分类、足迹关联、精选标记 |
| **Category** | 相册分类，支持封面图 |
| **Footprint** | 足迹（地图打卡），含经纬度、城市、关联照片 |

文件存储使用腾讯云 COS。

## 快速开始

```bash
# 安装依赖
yarn install

# 开发模式（热重载）
yarn dev

# 生产构建
yarn build

# 生产启动
yarn start
```

## 接口文档

启动服务后访问自动生成的 Swagger 文档：

```
http://localhost:1337/documentation
```

文档由 `@strapi/plugin-documentation` 插件自动扫描所有 API 生成，无需手动维护。每次新增或修改 Content Type 后重启服务即可更新。

### 接口规律

所有接口遵循 Strapi REST 规范：

```
GET    /api/articles               # 列表
GET    /api/articles/:id           # 详情
POST   /api/articles               # 创建
PUT    /api/articles/:id           # 更新
DELETE /api/articles/:id           # 删除

# 其他模块同理
GET    /api/photos
GET    /api/footprints
GET    /api/categories
GET    /api/article-categories
```

支持过滤、排序、分页、关联填充，例如：

```
GET /api/articles?populate=category,cover
GET /api/photos?filters[featured][$eq]=true&populate=categories,footprint
GET /api/footprints?populate=photos,cover&sort=visitedAt:desc
```

详细查询语法参考 [Strapi REST API 文档](https://docs.strapi.io/dev-docs/api/rest)。

## 环境变量

复制 `.env.example` 为 `.env` 并填写以下配置：

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=
API_TOKEN_SALT=
ADMIN_JWT_SECRET=
TRANSFER_TOKEN_SALT=
JWT_SECRET=

# 腾讯云 COS
TENCENT_BUCKET=
TENCENT_REGION=
TENCENT_SECRET_ID=
TENCENT_SECRET_KEY=

# 数据库（默认 SQLite，生产建议换 PostgreSQL）
DATABASE_CLIENT=sqlite
# DATABASE_CLIENT=postgres
# DATABASE_HOST=
# DATABASE_PORT=5432
# DATABASE_NAME=
# DATABASE_USERNAME=
# DATABASE_PASSWORD=
```
