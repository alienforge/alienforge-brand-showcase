import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/alienforge-brand-showcase/', // <-- KLJUČNO za GitHub Pages podfolder
  plugins: [react()],
});
