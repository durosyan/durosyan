import fs from 'fs';
import path from 'path';

const fileCache = new Map();
const contentCache = new Map();

const green = '\x1b[32m';
const red = '\x1b[31m';
const reset = '\x1b[0m';

let directoryReadCount = 0;
let fileReadCount = 0;
let directoryCacheReadCount = 0;
let fileCacheReadCount = 0;

export function getAllFiles(dirPath, arrayOfFiles = []) {
  if (fileCache.has(dirPath)) {
    console.log(`${green}[${directoryCacheReadCount}] Read directory from cache: ${dirPath}${reset}`);
    directoryCacheReadCount++;
    return fileCache.get(dirPath);
  }

  console.log(`${red}[${directoryReadCount}] Reading directory from disk: ${dirPath}${reset}`);
  directoryReadCount++;
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, arrayOfFiles);
    } else if (filePath.endsWith('.md')) {
      arrayOfFiles.push(filePath);
    }
  });

  fileCache.set(dirPath, arrayOfFiles);
  return arrayOfFiles;
}

export function getFile(fullPath) {
  if (contentCache.has(fullPath)) {
    console.log(`${green}[${fileCacheReadCount}] Read file from cache: ${fullPath}${reset}`);
    fileCacheReadCount++;
    return contentCache.get(fullPath);
  }

  const dirPath = path.dirname(fullPath);

  if (fileCache.has(dirPath)) {
    const files = fileCache.get(dirPath);
    if (files.includes(fullPath)) {
      console.log(`${red}[${fileReadCount}] Reading file from disk: ${fullPath}${reset}`);
      fileReadCount++;
      const content = fs.readFileSync(fullPath, 'utf8');
      contentCache.set(fullPath, content);
      return content;
    }
  }

  // If the file is not in the cache, read it from disk
  if (fs.existsSync(fullPath)) {
    console.log(`${red}[${fileReadCount}] Reading file from disk: ${fullPath}${reset}`);
    fileReadCount++;
    const content = fs.readFileSync(fullPath, 'utf8');
    contentCache.set(fullPath, content);
    return content;
  }

  throw new Error(`File not found: ${fullPath}`);
}

export function getReadCounts() {
  return {
    directoryReadCount,
    fileReadCount,
    directoryCacheReadCount,
    fileCacheReadCount
  };
}
