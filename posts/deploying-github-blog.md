---
title: 'Deploying a github blog with nextjs'
date: '2025-01-15'
---

1. Create a github repository with the same name as your account name.

2. Clone the repository and initialise with a nextjs blog starter

```
npx create-next-app@latest nextjs-blog \
--use-npm \
--example "https://github.com/vercel/next-learn/tree/main/basics/dynamic-routes-starter"
```

3. Install and confgiure gh-pages

`npm install gh-pages`

4. Run deploy!

`npm run build && gh-pages -d out --nojekyll`