import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/7WaDud/', // Set to your repository name
  server: {
    host: true, // Listen on all addresses
    port: 8080,
  }
})