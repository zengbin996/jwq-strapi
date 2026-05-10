# CLAUDE.md

Personal website backend built with **Strapi v5**. Content management for articles, photos, footprints.

## Stack

- Strapi 5.41.1, Node 20-24
- SQLite (dev) / PostgreSQL (prod)
- Tencent COS for file storage
- Swagger docs at `/documentation`

## Project Structure

```
src/api/
  article/          # 文章 — rich text, cover, tags, pinned, categories
  article-category/ # 文章分类 — hierarchical
  photo/            # 照片 — album photos with category/footprint links
  category/         # 相册分类 — with cover image
  footprint/        # 足迹 — map check-ins with coordinates
  featured-photo/   # 精选照片
config/
  database.ts       # SQLite / PostgreSQL / MySQL switch via env
```

## Dev Commands

```bash
npm run develop   # hot reload
npm run build     # build admin
npm run start     # production
```

## Key Rules

- Content type schemas live in `src/api/<type>/content-types/<type>/schema.json`
- After schema changes, run `npm run build` before testing
- Keep `types/generated/contentTypes.d.ts` in sync (auto-generated, do not manually edit)
- API docs auto-update at `src/extensions/documentation/`
