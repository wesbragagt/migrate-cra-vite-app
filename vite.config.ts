import { defineConfig, loadEnv } from 'vite';
import reactPlugin from '@vitejs/plugin-react';
import { ViteEjsPlugin } from "vite-plugin-ejs";

export default defineConfig({
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
