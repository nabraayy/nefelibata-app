import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'

// Modo detectado desde entorno de Node
const isProduction = process.env.NODE_ENV === 'production'

export default defineConfig({
  base: isProduction ? '/build/' : '/',
  plugins: [
    laravel({
      input: ['resources/js/app.jsx'],
      refresh: true,
    }),
    react(),
  ],
})
