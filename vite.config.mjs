import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/wannabe-bazillionaire/',
  build: { outDir: 'build' },
  define: { 'process.env.PUBLIC_URL': JSON.stringify('/wannabe-bazillionaire') },
});
