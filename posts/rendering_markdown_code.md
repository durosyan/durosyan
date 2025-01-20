---
title: 'Rendering markdown code'
date: '2025-01-20'
tags: 'markdown, code, snippets, tinkering'
---

In the process of making this blog, I had a whole bunch of markdown files I needed to render.

In these markdown files, there are sometimes code snippets, which look boring without syntax highlighting.

To make these look better I implemented this syntax highlighting library

- https://github.com/remarkjs/remark-rehype?tab=readme-ov-file#use
- https://github.com/wooorm/starry-night/tree/main/style
- https://github.com/Microflash/rehype-starry-night?tab=readme-ov-file#install

How these are implemented here is demonstrated in the [lib/posts/posts.js](https://github.com/plausible-denial/plausible-denial/blob/main/lib/posts.js) file of the github repository for this site:

```js
import path from 'path';
import matter from 'gray-matter';
import rehypeStringify from 'rehype-stringify';
import remarkRehype from 'remark-rehype';
import rehypeStarryNight from "@microflash/rehype-starry-night";
import remarkParse from "remark-parse";
import { unified } from 'unified';
import remarkInlineCodeLang from "@microflash/rehype-starry-night/remark-inline-code-lang";
import rehypeStarryNightInline from "@microflash/rehype-starry-night/rehype-starry-night-inline";
import fileManager from './files';

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fileManager.getFile(fullPath);
  const matterResult = matter(fileContents);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkInlineCodeLang)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStarryNight)
    .use(rehypeStarryNightInline)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
```

Just an fyi, I used this colour scheme for the overall site design: [monokai](https://gist.github.com/brayevalerien/cb94ac685ebc186f359deae113b6710c)