// componente de impacto principal con la propuesta de valor para negocios locales
import React from 'react';
import { datos_contacto, enlace_whatsapp } from '../data/site_data.js';

export const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="container">

        {/* en movil el texto va antes que la foto */}
        <div className="reveal">
          <span className="hero-badge"><i></i> Agenda abierta para nuevos proyectos</span>
          <h1>Webs profesionales para negocios locales, <em>listas en 7 días</em></h1>
          <p className="hero-sub">
            Diseño páginas web rápidas, modernas y pensadas para que tus clientes te encuentren y te contacten.
          </p>
          <div className="hero-actions">
            <a href="#contacto" className="btn btn--primary">Pide presupuesto</a>
            <a href={enlace_whatsapp} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
              Escríbeme por WhatsApp
            </a>
          </div>
          <ul className="hero-proof">
            <li>Presupuesto cerrado</li>
            <li>Adaptada al móvil</li>
            <li>Lista para Google</li>
          </ul>
        </div>

        <div className="hero-photo reveal">
          <div className="photo">
            <img
              src="/img/hero_rafael.webp"
              alt="Rafael Rivero, diseñador web"
              width="400"
              height="400"
              fetchpriority="high"
            />
          </div>
          <div className="photo-tag">
            <strong>Rafael Rivero</strong>
            Diseñador web · {datos_contacto.ciudad}
          </div>
        </div>

      </div>
    </section>
  );
};
