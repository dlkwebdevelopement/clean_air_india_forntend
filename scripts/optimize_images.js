import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const CORPORATE_DIR = 'r:/ClientProject/cleanairindia/be/uploads/images/corporate/';

const images = [
  { name: 'corporate-banner-bg.webp', source: 'corporate-banner-bg.jpg', maxWidth: 1600, quality: 60 },
  { name: 'corporate-banner-bg-mobile.webp', source: 'corporate-banner-bg.jpg', maxWidth: 800, quality: 60 },
  { name: 'home11.webp', source: 'home11.jpg', maxWidth: 450, quality: 60 },
  { name: 'home22.webp', source: 'home22.jpg', maxWidth: 450, quality: 60 },
  { name: 'home33.webp', source: 'home33.jpg', maxWidth: 450, quality: 60 },
  { name: 'home44.webp', source: 'home44.jpg', maxWidth: 450, quality: 60 },
  { name: 'home55.webp', source: 'home55.jpg', maxWidth: 450, quality: 60 },
  { name: 'home66.webp', source: 'home66.jpg', maxWidth: 450, quality: 60 }
];

async function optimize() {
  for (const img of images) {
    const sourceName = img.source || img.name;
    const sourcePath = path.join(CORPORATE_DIR, sourceName);
    const outputPath = path.join(CORPORATE_DIR, img.name);
    try {
      if (!fs.existsSync(sourcePath)) {
        console.log(`Skipping non-existent file: ${sourceName}`);
        continue;
      }
      const originalBuffer = fs.readFileSync(sourcePath);
      const metadata = await sharp(originalBuffer).metadata();
      const origSize = fs.statSync(sourcePath).size;
      console.log(`Original image ${sourceName}: ${metadata.width}x${metadata.height}, size: ${(origSize / 1024).toFixed(1)} KB`);
      
      let pipeline = sharp(originalBuffer);
      if (metadata.width > img.maxWidth) {
        pipeline = pipeline.resize({ width: img.maxWidth });
        console.log(`-> Resizing ${sourceName} to width ${img.maxWidth}`);
      }
      
      const outputBuffer = await pipeline
        .webp({ quality: img.quality, effort: 6 })
        .toBuffer();
        
      fs.writeFileSync(outputPath, outputBuffer);
      
      const newSize = fs.statSync(outputPath).size;
      const newMetadata = await sharp(outputBuffer).metadata();
      console.log(`-> Optimized and saved to ${img.name}: ${newMetadata.width}x${newMetadata.height}, size: ${(newSize / 1024).toFixed(1)} KB (Saved: ${((origSize - newSize) / 1024).toFixed(1)} KB)`);
      
    } catch (err) {
      console.error(`Error processing ${img.name}:`, err.message);
    }
  }
}

optimize();
