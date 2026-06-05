// componente de navegacion superior adaptable y seguro
import React, { useState } from 'react';

export const Navbar = () => {
  // estado para controlar la visibilidad del menu desplegable en dispositivos moviles
  const [menu_abierto, establecer_menu_abierto] = useState(false);

  // funcion manejadora para alternar el estado del menu interactivo
  const conmutar_menu_movil = () => {
    establecer_menu_abierto(!menu_abierto);
  };

  // funcion para cerrar el menu de forma automatica al hacer clic en un enlace
  const cerrar_menu_enlace = () => {
    establecer_menu_abierto(false);
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(8, 12, 20, 0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      zIndex: 1000,
      transition: 'var(--transicion_limpia)'
    }}>
      <div className="contenedor_fluido" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '70px'
      }}>
        
        {/* area del logotipo de la marca profesional */}
        <a href="#hero" onClick={cerrar_menu_enlace} style={{
          fontSize: '1.25rem',
          fontWeight: '800',
          letterSpacing: '-0.025em',
          color: 'var(--texto_principal)'
        }}>
          rafaelrivero<span style={{ color: 'var(--color_acento)' }}>dev</span>
        </a>

        {/* boton de menu hamburguesa exclusivo para interacciones en smartphones */}
        <button 
          onClick={conmutar_menu_movil}
          aria-label="Alternar menú de navegación"
          style={{
            display: 'block',
            background: 'none',
            border: 'none',
            color: 'var(--texto_principal)',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0.5rem',
            transition: 'var(--transicion_limpia)'
          }}
        >
          {menu_abierto ? '✕' : '☰'}
        </button>

        {/* enlaces de navegacion con logica de visibilidad adaptable mobile first */}
        <nav style={{
          position: 'absolute',
          top: '70px',
          left: 0,
          width: '100%',
          backgroundColor: 'var(--fondo_principal)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          display: menu_abierto ? 'flex' : 'none',
          flexDirection: 'column',
          padding: '1.5rem 2rem',
          gap: '1.5rem',
          boxShadow: '0 20px 30px rgba(0, 0, 0, 0.5)',
          transition: 'var(--transicion_limpia)'
        }}>
          <a href="#services" onClick={cerrar_menu_enlace} style={{ fontSize: '1rem', fontWeight: '500' }}>Servicios</a>
          <a href="#projects" onClick={cerrar_menu_enlace} style={{ fontSize: '1rem', fontWeight: '500' }}>Proyectos</a>
          <a href="#tutorials" onClick={cerrar_menu_enlace} style={{ fontSize: '1rem', fontWeight: '500' }}>Academia</a>
          <a href="#community" onClick={cerrar_menu_enlace} style={{ fontSize: '1rem', fontWeight: '500' }}>Comunidad</a>
          <a href="#contact" onClick={cerrar_menu_enlace} style={{ fontSize: '1rem', fontWeight: '500'}}>Contacto</a>
        </nav>

      </div>
      
      {/* inyeccion de estilos embebidos especificos para sobreescribir la visualizacion en pantallas grandes (desktop) */}
      <style>{`
        @media (min-width: 768px) {
          header button {
            display: none !important;
          }
          header nav {
            position: static !important;
            display: flex !important;
            flex-direction: row !important;
            width: auto !important;
            background: none !important;
            border: none !important;
            padding: 0 !important;
            gap: 2rem !important;
            box-shadow: none !important;
          }
          header nav a:hover {
            color: var(--color_acento) !important;
          }
        }
      `}</style>
    </header>
  );
};