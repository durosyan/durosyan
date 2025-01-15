---
title: 'Deploying a github blog with nextjs'
date: '2025-01-15'
---

1. Create a github repository with the same name as your account name.

2. Clone the repository and initialise with a nextjs blog starter

```bash
npx create-next-app@latest nextjs-blog \
--use-npm \
--example "https://github.com/vercel/next-learn/tree/main/basics/dynamic-routes-starter"
```

3. Install and confgiure gh-pages

```bash
npm install gh-pages
```

4. Configure the next.config.js file, replace `<repo_name>`

```js
const nextConfig = {
    images: { unoptimized: true },
    basePath: isProd ? "/<repo_name>" : "",
    assetPrefix: isProd ? "/<repo_name>/" : "",
    output: 'export'
};

module.exports = nextConfig;
```

5. Run deploy!

```bash
npm run build && gh-pages -d out --nojekyll
```