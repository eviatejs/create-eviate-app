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

// Copy a whole directory from directory to directory
export function copyDir(from: string, to: string) {
  for (const file of fs.readdirSync(from)) {
    const fromPath = path.resolve(from, file);
    const toPath = path.resolve(to, file);

    const stat = fs.statSync(fromPath);

    if (stat.isDirectory()) {
      copyDir(fromPath, toPath);
    } else {
      fs.copyFileSync(fromPath, toPath);
    }
  }
}
