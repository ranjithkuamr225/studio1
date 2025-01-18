import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
=======
 
>>>>>>> 2b835a31e776f7fd1b8ae2d1f01a1bbec422ef8e
  plugins: [react()],
  base: '/studio1/', // Replace with your repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
