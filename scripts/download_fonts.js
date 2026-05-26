import fs from 'fs';
import path from 'path';
import https from 'https';

const FONTS_DIR = 'r:/ClientProject/cleanairindia/fe/public/fonts';
const CSS_URL = 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap';

// Chrome User-Agent to force Google Fonts to return modern WOFF2 variable font files
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

function fetch(url, options = {}) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': USER_AGENT,
        ...options.headers
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetch(res.headers.location, options).then(resolve).catch(reject);
      }
      let data = [];
      res.on('data', chunk => data.push(chunk));
      res.on('end', () => resolve(Buffer.concat(data)));
    }).on('error', reject);
  });
}

async function downloadFonts() {
  try {
    if (!fs.existsSync(FONTS_DIR)) {
      fs.mkdirSync(FONTS_DIR, { recursive: true });
    }

    console.log('Fetching Google Fonts CSS for WOFF2 formats...');
    const cssBuffer = await fetch(CSS_URL);
    let cssText = cssBuffer.toString();

    // Regex to match WOFF2 font files in @font-face declarations
    const fontUrlRegex = /url\((https:\/\/fonts\.gstatic\.com\/s\/[^\)]+\.woff2)\)/g;
    const matches = [...cssText.matchAll(fontUrlRegex)];

    console.log(`Found ${matches.length} unique font files to download.`);

    const downloadedFiles = new Map();

    for (const match of matches) {
      const remoteUrl = match[1];
      if (downloadedFiles.has(remoteUrl)) continue;

      const fileName = path.basename(remoteUrl);
      const localPath = path.join(FONTS_DIR, fileName);

      console.log(`Downloading font: ${fileName}...`);
      const fontBuffer = await fetch(remoteUrl);
      fs.writeFileSync(localPath, fontBuffer);
      
      downloadedFiles.set(remoteUrl, `/fonts/${fileName}`);
    }

    // Replace the remote URLs in the CSS with local relative paths
    let localCssText = cssText;
    for (const [remoteUrl, localUrl] of downloadedFiles.entries()) {
      localCssText = localCssText.split(remoteUrl).join(localUrl);
    }

    // Save the local fonts.css
    fs.writeFileSync(path.join(FONTS_DIR, 'fonts.css'), localCssText);
    console.log('Self-hosted fonts downloaded and local CSS written successfully!');

  } catch (err) {
    console.error('Error self-hosting fonts:', err);
  }
}

downloadFonts();
