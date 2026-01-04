import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Makes paths relative so index.html works better if opened directly
  server: {
    host: true, // Listen on all addresses
    port: 8080,
  }
})