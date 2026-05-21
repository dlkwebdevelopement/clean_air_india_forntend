import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';
import viteCompression from 'vite-plugin-compression';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function remoteImagesPlugin(env) {
  const apiUrl = env.VITE_API_URL ? env.VITE_API_URL.replace(/\/api$/, '') : 'https://api.cleanairindia.com';
  return {
    name: 'remote-images',
    enforce: 'pre',
    resolveId(source) {
      if ((source.includes('/images/') || source.includes('\\images\\') || source.startsWith('images/') || source.startsWith('images\\') ||
           source.includes('/videos/') || source.includes('\\videos\\') || source.startsWith('videos/') || source.startsWith('videos\\')) && 
          source.match(/\.(png|jpe?g|svg|gif|webp|pdf|mp4|webm|avi)$/i)) {
        const match = source.match(/(?:^|[\/\\])(images|videos)[\/\\](.*)$/i);
        if (match) {
          const type = match[1].toLowerCase();
          const cleanPath = match[2].replace(/\\/g, '/');
          if (type === 'videos') {
            return `virtual:remote-image/videos/${cleanPath}`;
          } else {
            return `virtual:remote-image/${cleanPath}`;
          }
        }
      }
      return null;
    },
    load(id) {
      if (id.startsWith('virtual:remote-image/')) {
        const imagePath = id.replace('virtual:remote-image/', '');
        return `export default "${apiUrl}/uploads/images/${imagePath}";`;
      }
      return null;
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(), 
      tailwindcss(), 
      remoteImagesPlugin(env),
      viteCompression({
        algorithm: 'gzip',
        ext: '.gz',
      }),
      viteCompression({
        algorithm: 'brotliCompress',
        ext: '.br',
      })
    ],
    base: "./",
    server: { port: 3000 },
    optimizeDeps: {
      include: ['react-slick'],
    },
    build: {
      target: "esnext",
      cssCodeSplit: true
    }
  };
});
