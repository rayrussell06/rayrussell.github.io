import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This ensures paths resolve properly on GitHub Pages with custom domain
export default defineConfig({
  base: './',
  plugins: [react()],
})
