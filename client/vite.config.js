import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../client/dist', // Specify the output directory for the client build
    emptyOutDir: true, // Empty the output directory before building
    sourcemap: true, // Generate source maps
  },
  rollupOptions: {
    input: 'src/App.jsx' // or 'src/index.tsx' for TypeScript
  }
});