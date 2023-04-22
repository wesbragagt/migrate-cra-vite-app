/// <reference types="vitest" />

import { defineConfig, loadEnv } from 'vite';
import reactPlugin from '@vitejs/plugin-react';
import { ViteEjsPlugin } from "vite-plugin-ejs";
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/setupTests.ts'],
  },
  plugins: [
    ViteEjsPlugin((viteConfig) => {
      const env = loadEnv(viteConfig.mode, process.cwd(), '');

      return {
        process: {
          env
        }
      }

    }),
    reactPlugin(),
    VitePWA({
      manifest: {
        short_name: "CRAViteApp",
        name: "Vite React App",
        description: "Demonstrating how to migrate to vite from a create-react-app",
        icons: [{
          src: "logo192.png",
          sizes: "192x192",
          type: "image/png"
        }],
      }
    }),
  ],
  publicDir: './public'
})
