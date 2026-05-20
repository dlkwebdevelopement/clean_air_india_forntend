import { readdir, readFile, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_ROOT = path.resolve(__dirname, '../src');

async function getFilesRecursively(dir, extensions) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getFilesRecursively(fullPath, extensions)));
    } else if (extensions.includes(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

// Map of image paths to dimensions to avoid reading the same image multiple times
const dimensionCache = new Map();

async function getImageDimensions(absolutePath) {
  if (dimensionCache.has(absolutePath)) {
    return dimensionCache.get(absolutePath);
  }
  try {
    const metadata = await sharp(absolutePath).metadata();
    const dims = { width: metadata.width, height: metadata.height };
    dimensionCache.set(absolutePath, dims);
    return dims;
  } catch (err) {
    return null;
  }
}

async function main() {
  console.log('🔍 Scanning code files...');
  const jsxFiles = await getFilesRecursively(SRC_ROOT, ['.jsx']);
  console.log(`📁 Found ${jsxFiles.length} JSX files.`);

  let totalUpdated = 0;

  for (const file of jsxFiles) {
    let content = await readFile(file, 'utf8');
    const fileDir = path.dirname(file);
    
    // Parse imports in the file: import Variable from "path"
    const importRegex = /import\s+(\w+)\s+from\s+['"`]([^'"`]+?\.(webp|jpg|jpeg|png|svg))['"`]/gi;
    const imports = new Map();
    let importMatch;
    
    while ((importMatch = importRegex.exec(content)) !== null) {
      const varName = importMatch[1];
      const relPath = importMatch[2];
      
      // Resolve path
      const cleanPath = relPath.split(/[?#]/)[0];
      const absPath = path.resolve(fileDir, cleanPath);
      if (existsSync(absPath)) {
        imports.set(varName, absPath);
      }
    }

    // Now find all <img> tags in the file
    // Match <img ... /> (could span multiple lines)
    const imgTagRegex = /<img\s+([^>]*?)>/gi;
    let imgMatch;
    let newContent = content;
    let wasModified = false;
    let offset = 0;

    // We'll replace matching img tags
    // To handle offsets, we can reconstruct the file or run replacements
    const matches = [];
    while ((imgMatch = imgTagRegex.exec(content)) !== null) {
      matches.push({
        fullMatch: imgMatch[0],
        attrs: imgMatch[1],
        index: imgMatch.index
      });
    }

    // Process matches in reverse order to keep indices stable
    for (let i = matches.length - 1; i >= 0; i--) {
      const { fullMatch, attrs, index } = matches[i];

      // Check if tag already has width/height (either raw or JS expression)
      const hasWidth = /\bwidth\s*=/i.test(attrs);
      const hasHeight = /\bheight\s*=/i.test(attrs);

      if (hasWidth && hasHeight) {
        continue; // Already optimized
      }

      // Try to find src attribute
      // src={varName} or src="stringLiteral"
      const srcVarMatch = /\bsrc\s*=\s*\{\s*(\w+)\s*\}/i.exec(attrs);
      const srcStringMatch = /\bsrc\s*=\s*['"`]([^'"`]+)['"`]/i.exec(attrs);

      let imagePath = null;

      if (srcVarMatch) {
        const varName = srcVarMatch[1];
        if (imports.has(varName)) {
          imagePath = imports.get(varName);
        }
      } else if (srcStringMatch) {
        const relPath = srcStringMatch[1];
        const cleanPath = relPath.split(/[?#]/)[0];
        const absPath = path.resolve(fileDir, cleanPath);
        if (existsSync(absPath)) {
          imagePath = absPath;
        }
      }

      if (imagePath) {
        const dims = await getImageDimensions(imagePath);
        if (dims && dims.width && dims.height) {
          // Construct replacement
          let newAttrs = attrs;
          
          if (!hasWidth) {
            newAttrs = `width="${dims.width}" ` + newAttrs;
          }
          if (!hasHeight) {
            newAttrs = `height="${dims.height}" ` + newAttrs;
          }

          const replacement = `<img ${newAttrs}>`;
          
          newContent = newContent.substring(0, index) + replacement + newContent.substring(index + fullMatch.length);
          wasModified = true;
          totalUpdated++;
          console.log(`  ⚡ Added width="${dims.width}" height="${dims.height}" in ${path.relative(SRC_ROOT, file)} for ${path.basename(imagePath)}`);
        }
      }
    }

    if (wasModified) {
      await writeFile(file, newContent, 'utf8');
    }
  }

  console.log(`\n🎉 Optimization complete! Injected dimensions into ${totalUpdated} img tags across the codebase.`);
}

main().catch(console.error);
