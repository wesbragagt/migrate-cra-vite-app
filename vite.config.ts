/// <reference types="vitest" />

import { defineConfig, loadEnv } from 'vite';
import reactPlugin from '@vitejs/plugin-react';
import { ViteEjsPlugin } from "vite-plugin-ejs";

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
  ],
  publicDir: './public'
})
