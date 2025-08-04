import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/alienforge-brand-showcase/',    // <-- obavezno
  build: {
    outDir: 'docs',                      // <-- build ide u docs/
  },
  plugins: [react()],
})
