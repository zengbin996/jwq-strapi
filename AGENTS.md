# AGENTS.md

## Project

`jwq-strapi` — Personal website CMS backend (个人网站后端), Strapi v5.

## Content Types

| Type | 用途 | Key Fields |
|------|------|-----------|
| `article` | 文章 | title, content (rich text), cover, tags, pinned, category |
| `article-category` | 文章分类 | name, parent (self-relation) |
| `photo` | 照片 | image, category, footprint, featured |
| `category` | 相册分类 | name, cover |
| `footprint` | 足迹 | name, lat, lng, city, photos |
| `featured-photo` | 精选照片 | photo (relation) |

## API Conventions

- REST endpoints: `GET /api/<plural>?populate=*`
- Auth: Bearer token via `users-permissions` plugin
- Docs: Swagger UI at `/documentation`

## File Change Rules

When modifying this project, update this file if:
- A new content type is added/removed
- A field is added to an existing type
- A new plugin or dependency is added
- The database or storage config changes

## Environment

| Var | Purpose |
|-----|---------|
| `DATABASE_CLIENT` | `sqlite` / `postgres` / `mysql` |
| `TENCENT_COS_*` | 腾讯云 COS credentials |
| `JWT_SECRET` | Auth token secret |
