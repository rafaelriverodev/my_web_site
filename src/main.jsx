// punto de entrada principal para el renderizado del dom en el navegador
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// captura del elemento contenedor raiz definido en el archivo index html
const nodo_raiz_dom = document.getElementById('root');

// inicializacion del arbol de componentes bajo el modo estricto de react
ReactDOM.createRoot(nodo_raiz_dom).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);