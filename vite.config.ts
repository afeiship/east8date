import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';
import environmentPlugin from '@jswork/vite-plugin-environment';
import banner from '@jswork/vite-plugin-html-banner';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: 'config/environments',
  plugins: [
    react(),
    environmentPlugin({ prefix: 'VITE_' }),
    banner(),
    VitePWA({
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/cdnjs\.cloudflare\.com/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'cdnjs-scripts'
            }
          },
          {
            urlPattern: /^https:\/\/unpkg\.com/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'unpkg-scripts'
            }
          },
          {
            urlPattern: /^https:\/\/tva1\.js\.work/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'tva1-images'
            }
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 4000,
    proxy: {
      '/api': {
        target: 'http://103.96.148.144:9081',
        changeOrigin: true
      }
    }
  },
  build: {
    rollupOptions: {
      // plugins: [visualizer()],
      external: ['react', 'react-dom', 'antd', '@ant-design/icons'],
      output: {
        format: 'umd',
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
          'antd': 'antd',
          '@ant-design/icons': 'icons'
        }
      }
    }
  }
});
