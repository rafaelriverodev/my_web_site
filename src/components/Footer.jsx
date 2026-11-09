// componente de pie de pagina con datos de contacto y enlaces legales
import React from 'react';
import { datos_contacto, paginas_legales_publicadas } from '../data/site_data.js';

export const Footer = () => {
  const anio_actual = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#inicio" className="logo"><img className="logo-mark" src="/img/isotipo.webp" alt="" width="30" height="30" />rafaelrivero<span>dev</span></a>
            <p>Diseño web para negocios locales.</p>
          </div>
          <div>
            <h2>Contacto</h2>
            <address>
              <a href={`tel:${datos_contacto.telefono_enlace}`}>Tel. {datos_contacto.telefono_visible}</a>
              <a href={`mailto:${datos_contacto.correo_electronico}`}>{datos_contacto.correo_electronico}</a>
            </address>
          </div>
          <div>
            <h2>Zona de trabajo</h2>
            <p>{datos_contacto.zona_trabajo}</p>
          </div>
          <div>
            <h2>Horario</h2>
            <p>{datos_contacto.horario_atencion}</p>
          </div>
        </div>

        <div className="footer-legal">
          <span>© {anio_actual} Rafael Rivero</span>
          <a href="#tutoriales">Academia</a>
          <a href="/proyectos.html">Proyectos de software</a>
          {paginas_legales_publicadas && (
            <>
              <a href="/aviso-legal.html">Aviso legal</a>
              <a href="/politica-privacidad.html">Política de privacidad</a>
              <a href="/politica-cookies.html">Política de cookies</a>
            </>
          )}
        </div>
      </div>
    </footer>
  );
};
