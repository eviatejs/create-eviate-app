import fs from 'fs';
import path from 'path';

export function formatTargetDir(targetDir: string | undefined) {
  return targetDir?.trim().replace(/\/+$/g, '');
}

export function isEmpty(path: string) {
  const files = fs.readdirSync(path);
  return files.length === 0 || (files.length === 1 && files[0] === '.git');
}

export function emptyDir(dir: string) {
  if (!fs.existsSync(dir)) {
    return;
  }
  for (const file of fs.readdirSync(dir)) {
    if (file === '.git') {
      continue;
    }

    fs.rmSync(path.resolve(dir, file), { recursive: true, force: true });
  }
}

// Copy all files and directories from `src` to `dest`
export function copy(src: string, dest: string) {
  fs.mkdirSync(dest, { recursive: true });

  for (const file of fs.readdirSync(src)) {
    const srcPath = path.resolve(src, file);
    const destPath = path.resolve(dest, file);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      copy(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}
