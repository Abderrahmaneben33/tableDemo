import { fileURLToPath, URL } from 'node:url'
import { createVuePlugin } from 'vite-plugin-vue2';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createVuePlugin()
  ],
  base:"/",
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
