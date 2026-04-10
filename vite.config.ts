import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  base: "./",
  define: {
    __BUILD_DATE__: JSON.stringify(new Date().toISOString())
  },
  build: {
    target: 'esnext',
    minify: true,
    modulePreload: false
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
