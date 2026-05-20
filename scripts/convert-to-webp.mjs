import sharp from 'sharp';
import { readdir, stat, unlink } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGES_ROOT = path.resolve(__dirname, '../src/assets/images');

// Minimum size in bytes to convert (skip tiny images < 50 KB)
const MIN_SIZE_BYTES = 50 * 1024;

// Quality setting for WebP (80 = great quality, smaller file)
const WEBP_QUALITY = 82;

let totalOriginal = 0;
let totalWebP = 0;
let convertedCount = 0;
let skippedCount = 0;

async function getAllImageFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const subFiles = await getAllImageFiles(fullPath);
      files.push(...subFiles);
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

async function convertToWebP(filePath) {
  const { size: originalSize } = await stat(filePath);

  // Skip small files
  if (originalSize < MIN_SIZE_BYTES) {
    skippedCount++;
    return null;
  }

  const dir = path.dirname(filePath);
  const baseName = path.basename(filePath, path.extname(filePath));
  const webpPath = path.join(dir, `${baseName}.webp`);

  // Skip if already converted
  if (existsSync(webpPath)) {
    const { size: existingSize } = await stat(webpPath);
    totalOriginal += originalSize;
    totalWebP += existingSize;
    convertedCount++;
    console.log(`  ⏭  Already exists: ${path.relative(IMAGES_ROOT, webpPath)}`);
    return webpPath;
  }

  try {
    await sharp(filePath)
      .webp({ quality: WEBP_QUALITY, effort: 4 })
      .toFile(webpPath);

    const { size: webpSize } = await stat(webpPath);
    const saving = (((originalSize - webpSize) / originalSize) * 100).toFixed(1);
    const origKB = (originalSize / 1024).toFixed(1);
    const webpKB = (webpSize / 1024).toFixed(1);

    totalOriginal += originalSize;
    totalWebP += webpSize;
    convertedCount++;

    console.log(`  ✅  ${path.relative(IMAGES_ROOT, filePath)}`);
    console.log(`      ${origKB} KB  →  ${webpKB} KB  (saved ${saving}%)`);

    return webpPath;
  } catch (err) {
    console.error(`  ❌  FAILED: ${filePath} — ${err.message}`);
    return null;
  }
}

async function main() {
  console.log('🔄  Scanning for images...\n');
  const files = await getAllImageFiles(IMAGES_ROOT);
  console.log(`📁  Found ${files.length} image files (jpg/jpeg/png)\n`);
  console.log('─'.repeat(60));

  for (const file of files) {
    await convertToWebP(file);
  }

  const savedMB = ((totalOriginal - totalWebP) / 1024 / 1024).toFixed(2);
  const origMB = (totalOriginal / 1024 / 1024).toFixed(2);
  const webpMB = (totalWebP / 1024 / 1024).toFixed(2);
  const pct = (((totalOriginal - totalWebP) / totalOriginal) * 100).toFixed(1);

  console.log('\n' + '─'.repeat(60));
  console.log('✅  CONVERSION COMPLETE');
  console.log('─'.repeat(60));
  console.log(`  Converted   : ${convertedCount} files`);
  console.log(`  Skipped     : ${skippedCount} files (< 50 KB)`);
  console.log(`  Before      : ${origMB} MB`);
  console.log(`  After       : ${webpMB} MB`);
  console.log(`  Total Saved : ${savedMB} MB  (${pct}% reduction)`);
  console.log('─'.repeat(60));
  console.log('\n📌  Next step: Update your import statements to use .webp files');
  console.log('    (Run the update-imports script)\n');
}

main().catch(console.error);
