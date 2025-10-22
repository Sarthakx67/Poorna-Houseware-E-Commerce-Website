import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import viteImagemin from 'vite-plugin-imagemin';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  const isProd = mode === 'production';

  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [
      react(),
      ...(isProd
        ? [
            viteImagemin({
              // Exclude a couple of images that throw errors in mozjpeg (likely progressive/corrupt metadata)
              filter: (id: string) => {
                const p = id.replace(/\\\\/g, '/').toLowerCase();
                if (
                  p.includes('/assets/images/pedestal-basin-006.jpg') ||
                  p.includes('/assets/images/basin-counter-top.jpg')
                ) {
                  return false;
                }
                return /\.(png|jpe?g|svg|webp|gif|avif)$/i.test(p);
              },
              gifsicle: { optimizationLevel: 3 },
              optipng: { optimizationLevel: 5 },
              // Be slightly conservative to reduce error rate while keeping good savings
              mozjpeg: { quality: 75, progressive: true },
              pngquant: { quality: [0.65, 0.8], speed: 3 },
              svgo: {
                plugins: [
                  { name: 'removeViewBox', active: false },
                  { name: 'removeEmptyAttrs', active: false },
                ],
              },
              webp: { quality: 75 },
            }),
            VitePWA({
              registerType: 'autoUpdate',
              devOptions: { enabled: false },
              workbox: {
                navigateFallback: 'index.html',
                runtimeCaching: [
                  {
                    urlPattern: ({ url }) => url.pathname.startsWith('/assets/images/'),
                    handler: 'CacheFirst',
                    options: {
                      cacheName: 'images',
                      expiration: {
                        maxEntries: 300,
                        maxAgeSeconds: 60 * 60 * 24 * 30,
                      },
                      cacheableResponse: {
                        statuses: [0, 200],
                      },
                    },
                  },
                ],
              },
              manifest: {
                name: 'Poorna Houseware',
                short_name: 'Poorna',
                start_url: '/',
                display: 'standalone',
                background_color: '#ffffff',
                theme_color: '#ffffff',
              },
            }),
          ]
        : []),
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
