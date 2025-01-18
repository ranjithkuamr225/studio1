import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/studio1/',
  plugins: [react()],
  base: '/your-repo-name/', // Replace with your repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});