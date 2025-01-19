import fs from 'fs';
import path from 'path';

class FileManager {
  constructor() {
    this.fileCache = new Map();
    this.contentCache = new Map();

    this.green = '\x1b[32m';
    this.red = '\x1b[31m';
    this.reset = '\x1b[0m';

    this.directoryReadCount = 0;
    this.fileReadCount = 0;
    this.directoryCacheReadCount = 0;
    this.fileCacheReadCount = 0;
  }

  getAllFiles(dirPath, arrayOfFiles = []) {
    if (this.fileCache.has(dirPath)) {
      console.log(`${this.green}[${this.directoryCacheReadCount}] Read directory from cache: ${dirPath}${this.reset}`);
      this.directoryCacheReadCount++;
      return this.fileCache.get(dirPath);
    }

    console.log(`${this.red}[${this.directoryReadCount}] Reading directory from disk: ${dirPath}${this.reset}`);
    this.directoryReadCount++;
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
      const filePath = path.join(dirPath, file);
      if (fs.statSync(filePath).isDirectory()) {
        this.getAllFiles(filePath, arrayOfFiles);
      } else if (filePath.endsWith('.md')) {
        arrayOfFiles.push(filePath);
      }
    });

    this.fileCache.set(dirPath, arrayOfFiles);
    return arrayOfFiles;
  }

  getFile(fullPath) {
    if (this.contentCache.has(fullPath)) {
      console.log(`${this.green}[${this.fileCacheReadCount}] Read file from cache: ${fullPath}${this.reset}`);
      this.fileCacheReadCount++;
      return this.contentCache.get(fullPath);
    }

    const dirPath = path.dirname(fullPath);

    if (this.fileCache.has(dirPath)) {
      const files = this.fileCache.get(dirPath);
      if (files.includes(fullPath)) {
        console.log(`${this.red}[${this.fileReadCount}] Reading file from disk: ${fullPath}${this.reset}`);
        this.fileReadCount++;
        const content = fs.readFileSync(fullPath, 'utf8');
        this.contentCache.set(fullPath, content);
        return content;
      }
    }

    // If the file is not in the cache, read it from disk
    if (fs.existsSync(fullPath)) {
      console.log(`${this.red}[${this.fileReadCount}] Reading file from disk: ${fullPath}${this.reset}`);
      this.fileReadCount++;
      const content = fs.readFileSync(fullPath, 'utf8');
      this.contentCache.set(fullPath, content);
      return content;
    }

    throw new Error(`File not found: ${fullPath}`);
  }
}

const fileManager = new FileManager();
export default fileManager;