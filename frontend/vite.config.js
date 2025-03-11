import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Allow access from Docker
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true, // Fixes issues with file changes not being detected in Docker
    },
  },
});
