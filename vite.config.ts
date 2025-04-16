import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@components':  path.resolve(__dirname, './src/components'),
      '@utils':       path.resolve(__dirname, './src/utils'),
      '@pages':       path.resolve(__dirname, './src/pages'),
      '@app-types':   path.resolve(__dirname, './src/types'),
      '@context':     path.resolve(__dirname, './src/context'),
      '@language':    path.resolve(__dirname, './src/language'),
    },
  },
  build: {
    target: 'es2020',
    minify: 'terser',
    sourcemap: true,
    outDir: 'dist',
  },
})
