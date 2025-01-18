import path from 'path';
import matter from 'gray-matter';
import rehypeStringify from 'rehype-stringify';
import remarkRehype from 'remark-rehype';
import rehypeStarryNight from "@microflash/rehype-starry-night";
import remarkParse from "remark-parse";
import { unified } from 'unified';
import remarkInlineCodeLang from "@microflash/rehype-starry-night/remark-inline-code-lang";
import rehypeStarryNightInline from "@microflash/rehype-starry-night/rehype-starry-night-inline";
import { getAllFiles, getFile } from './files';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = getAllFiles(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove the directory path and ".md" from file name to get id
    const id = fileName.replace(postsDirectory + '/', '').replace(/\.md$/, '');
    // Read markdown file as string
    const fileContents = getFile(fileName)
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    
    if (!matterResult.data.date || !matterResult.data.title || !matterResult.data.tags) {
      throw new Error(`Post ${id} is missing one of the required fields: date, title, tags`);
    }

    if (matterResult.data.tags) {
      if (!Array.isArray(matterResult.data.tags)) {
        matterResult.data.tags = matterResult.data.tags.split(',').map(tag => tag.trim());
      }
    }

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = getAllFiles(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(postsDirectory + '/', '').replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = getFile(fullPath)

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string with rehype
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkInlineCodeLang)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStarryNight)
    .use(rehypeStarryNightInline)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}