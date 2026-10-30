import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

import { writeSitemapFile, generateSitemapXml } from './scripts/generate-sitemap.js'

function dynamicSitemapPlugin() {
  return {
    name: 'dynamic-sitemap',
    buildStart() {
      try {
        writeSitemapFile();
      } catch (err) {
        console.error('[dynamic-sitemap] Failed to write sitemap on buildStart:', err);
      }
    },
    configureServer(server) {
      try {
        writeSitemapFile();
      } catch (err) {
        console.error('[dynamic-sitemap] Failed to write sitemap on dev startup:', err);
      }
      server.middlewares.use((req, res, next) => {
        if (req.url === '/sitemap.xml') {
          res.setHeader('Content-Type', 'application/xml');
          return res.end(generateSitemapXml());
        }
        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), dynamicSitemapPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

