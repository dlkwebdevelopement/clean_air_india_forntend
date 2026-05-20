import { readdir, readFile, writeFile, stat } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_ROOT = path.resolve(__dirname, '../src');
const IMAGES_ROOT = path.resolve(__dirname, '../src/assets/images');

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

async function main() {
  console.log('🔄 Finding all code files in src/ ...');
  const codeFiles = await getFilesRecursively(SRC_ROOT, ['.js', '.jsx', '.css']);
  console.log(`📁 Found ${codeFiles.length} code files.`);

  let totalReplacements = 0;

  for (const codeFile of codeFiles) {
    const content = await readFile(codeFile, 'utf8');
    let updatedContent = content;
    
    // Look for image file paths or imports in the content:
    // e.g., something.jpg, something.png, something.jpeg
    const regex = /['"`]([^'"`]*?\.(jpg|jpeg|png))['"`]/gi;
    let match;
    const replacements = [];

    // Find matches
    while ((match = regex.exec(content)) !== null) {
      const relativeImagePath = match[1];
      
      // Resolve image path relative to the code file
      const codeFileDir = path.dirname(codeFile);
      // Clean up query parameters or hashes if any (e.g. ?url)
      const cleanPath = relativeImagePath.split(/[?#]/)[0];
      const absoluteImagePath = path.resolve(codeFileDir, cleanPath);

      // Check if it points to an image in our workspace, and if its .webp version exists
      if (absoluteImagePath.startsWith(SRC_ROOT) || absoluteImagePath.includes('public')) {
        const ext = path.extname(absoluteImagePath);
        const webpPath = absoluteImagePath.substring(0, absoluteImagePath.length - ext.length) + '.webp';

        if (existsSync(webpPath)) {
          // Determine the replacement path
          const extInMatch = path.extname(relativeImagePath);
          const replacementPath = relativeImagePath.substring(0, relativeImagePath.length - extInMatch.length) + '.webp';
          
          replacements.push({
            original: match[0], // includes the quotes
            replacement: match[0].replace(relativeImagePath, replacementPath)
          });
        }
      }
    }

    // Apply replacements in reverse order to not mess up indices, or just string replace if unique
    if (replacements.length > 0) {
      // De-duplicate replacements
      const uniqueReplacements = [];
      const seen = new Set();
      for (const rep of replacements) {
        if (!seen.has(rep.original)) {
          seen.add(rep.original);
          uniqueReplacements.push(rep);
        }
      }

      for (const rep of uniqueReplacements) {
        // Safe replacement
        let nextContent = updatedContent;
        let count = 0;
        while (nextContent.includes(rep.original)) {
          nextContent = nextContent.replace(rep.original, rep.replacement);
          count++;
        }
        if (count > 0) {
          updatedContent = nextContent;
          totalReplacements += count;
          console.log(`  ✍️  Replacing in ${path.relative(SRC_ROOT, codeFile)}: ${rep.original} ➡️ ${rep.replacement}`);
        }
      }

      if (updatedContent !== content) {
        await writeFile(codeFile, updatedContent, 'utf8');
      }
    }
  }

  console.log(`\n🎉 Done! Made ${totalReplacements} replacements across the codebase.`);
}

main().catch(console.error);
