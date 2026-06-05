// configuracion principal del empaquetador vite y entorno vitest
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// definicion de la configuracion del sistema mediante la api de vite
export default defineConfig({
  plugins: [
    // inyeccion del plugin oficial para el soporte de componentes react
    react()
  ],
  
  test: {
    // activacion de variables globales de entorno para las pruebas unitarias
    globals: true,
    
    // especificacion del entorno de ejecucion emulado en el dom
    environment: 'jsdom',
  },
});