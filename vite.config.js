// configuracion principal del empaquetador vite y entorno vitest
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// carpeta raiz del proyecto para resolver las paginas html
const carpeta_raiz = fileURLToPath(new URL('.', import.meta.url));

// definicion de la configuracion del sistema mediante la api de vite
export default defineConfig({
  plugins: [
    // inyeccion del plugin oficial para el soporte de componentes react
    react()
  ],

  build: {
    rollupOptions: {
      // portada en react y paginas secundarias estaticas
      // incluye las tres paginas legales enlazadas desde el pie y el formulario
      input: {
        portada: resolve(carpeta_raiz, 'index.html'),
        proyectos: resolve(carpeta_raiz, 'proyectos.html'),
        aviso_legal: resolve(carpeta_raiz, 'aviso-legal.html'),
        politica_privacidad: resolve(carpeta_raiz, 'politica-privacidad.html'),
        politica_cookies: resolve(carpeta_raiz, 'politica-cookies.html')
      }
    }
  },

  test: {
    // activacion de variables globales de entorno para las pruebas unitarias
    globals: true,

    // especificacion del entorno de ejecucion emulado en el dom
    environment: 'jsdom',
  },
});
