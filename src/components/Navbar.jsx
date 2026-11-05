// componente de navegacion superior adaptable
import React, { useState } from 'react';
import { enlaces_navegacion } from '../data/site_data.js';

export const Navbar = () => {
  // estado para controlar la visibilidad del menu desplegable en dispositivos moviles
  const [menu_abierto, establecer_menu_abierto] = useState(false);

  const conmutar_menu_movil = () => {
    establecer_menu_abierto(!menu_abierto);
  };

  // cierra el menu al pulsar cualquier enlace
  const cerrar_menu_enlace = () => {
    establecer_menu_abierto(false);
  };

  return (
    <header className="header">
      <div className="container">
        <a href="#inicio" className="logo" onClick={cerrar_menu_enlace}>
          rafaelrivero<span>dev</span>
        </a>

        <button
          className="menu-toggle"
          onClick={conmutar_menu_movil}
          aria-label={menu_abierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menu_abierto}
          aria-controls="menu-principal"
        >
          <span></span>
        </button>

        <nav id="menu-principal" className={menu_abierto ? 'nav is-open' : 'nav'}>
          {enlaces_navegacion.map((enlace) => (
            <a key={enlace.destino} href={enlace.destino} onClick={cerrar_menu_enlace}>
              {enlace.texto}
            </a>
          ))}
          <a href="#contacto" className="btn btn--dark" onClick={cerrar_menu_enlace}>
            Pide presupuesto
          </a>
        </nav>
      </div>
    </header>
  );
};
