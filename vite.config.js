import { defineConfig } from 'vite'

export default defineConfig({
  base: '/', // Ensure this is set to root
  build: {
    outDir: 'dist',
  },
})
