## Notion Based NextJS Blog Template
NextJS SSR Blog, uses Notion as CMS. Realtime Changes, Does't Cache, Directly loads from Notion Database.

## How to run
Before run, fill your Database ID to `/constant.ts`.DATABASE_ID.
You can find Database ID in notion request to `loadPageChunk`, use Network Inspector in Devtools.
Make sure your database and articles are public.

### Developing
```bash
npm i
npm run dev
```
### Production Build
```bash
npm i
npm run build
npm run start
```

## Routers
- `/` : List All Articles
- `/post/[id]` : Show Article. The id is the first segment of the Dash-Concated page ID.
- `/category` : List Categories. Tags that start with Asterisk (*) are treated as categories.
- `/category/[name]` : Show Articles in the category.