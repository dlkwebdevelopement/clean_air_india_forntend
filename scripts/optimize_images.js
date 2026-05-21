import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const CORPORATE_DIR = 'r:/ClientProject/cleanairindia/be/uploads/images/corporate/';

const images = [
  { name: 'corporate-banner-bg.webp', maxWidth: 1600, quality: 60 },
  { name: 'home11.webp', maxWidth: 450, quality: 60 },
  { name: 'home22.webp', maxWidth: 450, quality: 60 },
  { name: 'home33.webp', maxWidth: 450, quality: 60 },
  { name: 'home44.webp', maxWidth: 450, quality: 60 },
  { name: 'home55.webp', maxWidth: 450, quality: 60 },
  { name: 'home66.webp', maxWidth: 450, quality: 60 }
];

async function optimize() {
  for (const img of images) {
    const filePath = path.join(CORPORATE_DIR, img.name);
    try {
      if (!fs.existsSync(filePath)) {
        console.log(`Skipping non-existent file: ${img.name}`);
        continue;
      }
      const originalBuffer = fs.readFileSync(filePath);
      const metadata = await sharp(originalBuffer).metadata();
      const origSize = fs.statSync(filePath).size;
      console.log(`Original image ${img.name}: ${metadata.width}x${metadata.height}, size: ${(origSize / 1024).toFixed(1)} KB`);
      
      let pipeline = sharp(originalBuffer);
      if (metadata.width > img.maxWidth) {
        pipeline = pipeline.resize({ width: img.maxWidth });
        console.log(`-> Resizing ${img.name} to width ${img.maxWidth}`);
      }
      
      const outputBuffer = await pipeline
        .webp({ quality: img.quality, effort: 6 })
        .toBuffer();
        
      fs.writeFileSync(filePath, outputBuffer);
      
      const newSize = fs.statSync(filePath).size;
      const newMetadata = await sharp(outputBuffer).metadata();
      console.log(`-> Optimized ${img.name}: ${newMetadata.width}x${newMetadata.height}, size: ${(newSize / 1024).toFixed(1)} KB (Saved: ${((origSize - newSize) / 1024).toFixed(1)} KB)`);
      
    } catch (err) {
      console.error(`Error processing ${img.name}:`, err.message);
    }
  }
}

optimize();
