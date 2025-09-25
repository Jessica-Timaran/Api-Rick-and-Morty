import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',        
  build: {
    outDir: '../dist',     // Genera la carpeta dist en la raíz del proyecto
    emptyOutDir: true
  },
});
