import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const staticRoutes = [
  '/',
  '/about-us',
  '/products',
  '/laminar-airflow',
  '/biosafety-cabinet',
  '/fume-exhaust-hood',
  '/air-shower-system',
  '/powder-dispensing-booth',
  '/pass-box',
  '/sterile-garment-storage-cabinet',
  '/modular-cleanroom',
  '/softwall-cleanrooms',
  '/reverse-flow-booth',
  '/pharma-weighing-booths',
  '/downflow-booth',
  '/fan-filter-units',
  '/powder-containment-booths',
  '/recommended-practices-for-clean-rooms',
  '/recommended-practices-for-fume-exhaust-hoods',
  '/recommended-practices-for-biosafety-cabinets',
  '/accreditation',
  '/gallery',
  '/blog',
  '/contact-us'
];

async function prerender() {
  console.log('Starting SSG Prerendering for canonical URLs...');
  const distDir = path.join(__dirname, '../dist');
  const indexPath = path.join(distDir, 'index.html');
  
  if (!fs.existsSync(indexPath)) {
    console.error('dist/index.html not found! Ensure this runs after build.');
    process.exit(1);
  }
  
  // Vite's compression plugin compresses index.html into index.html.gz and .br BEFORE we modify it.
  // Because Nginx has gzip_static enabled, it will serve the old compressed files, hiding our new canonical tags.
  // We must delete the compressed html files so Nginx serves our modified HTML (or compresses it on the fly).
  ['index.html.gz', 'index.html.br', 'sitemap.html.gz', 'sitemap.html.br'].forEach(file => {
    const filePath = path.join(distDir, file);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`Deleted stale compressed file: ${file}`);
    }
  });
  
  const indexHtml = fs.readFileSync(indexPath, 'utf-8');
  const allRoutes = [...staticRoutes];

  // Attempt to fetch blog slugs to prerender them
  try {
    const res = await fetch('https://api.cleanairindia.com/api/blogs');
    if (res.ok) {
      const data = await res.json();
      if (data.blogs && Array.isArray(data.blogs)) {
        data.blogs.forEach(blog => {
          if (blog.slug) allRoutes.push(`/blog/${blog.slug}`);
        });
      }
    }
  } catch (err) {
    console.log('Could not fetch blogs dynamically. Falling back to test route.');
  }
  
  // Ensure the user's specific test route is always present
  if (!allRoutes.includes('/blog/air-shower-entry-system')) {
    allRoutes.push('/blog/air-shower-entry-system');
  }

  for (const route of allRoutes) {
    const canonicalUrl = `https://www.cleanairindia.com${route}`;
    const canonicalTag = `<link rel="canonical" href="${canonicalUrl}" data-rh="true" />`;
    
    // The placeholder __CANONICAL_TAG__ is in our modified index.html
    // If it's not there, we inject it manually into <head>
    let routeHtml = indexHtml;
    if (routeHtml.includes('__CANONICAL_TAG__')) {
      routeHtml = routeHtml.replace('__CANONICAL_TAG__', canonicalTag);
    } else {
      routeHtml = routeHtml.replace('<head>', `<head>\n    ${canonicalTag}`);
    }

    if (route === '/') {
      fs.writeFileSync(indexPath, routeHtml);
      continue;
    }

    // Generate SSG directories and files for the route
    const routePath = route.replace(/^\//, ''); // e.g., 'laminar-airflow'
    
    // 1. Generate standard .html file (e.g., dist/laminar-airflow.html)
    // Helps hosts like Vercel/Netlify that use clean URLs
    const htmlFilePath = path.join(distDir, `${routePath}.html`);
    fs.mkdirSync(path.dirname(htmlFilePath), { recursive: true });
    fs.writeFileSync(htmlFilePath, routeHtml);

    // 2. Generate index.html in a directory (e.g., dist/laminar-airflow/index.html)
    // Helps standard Nginx/Apache setups
    const dirPath = path.join(distDir, routePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.writeFileSync(path.join(dirPath, 'index.html'), routeHtml);
  }

  console.log(`✅ Successfully prerendered ${allRoutes.length} static routes with precise canonical tags.`);
}

prerender();
