// componente de portafolio con webs de ejemplo para distintos sectores locales
import React from 'react';
import { trabajos_portafolio } from '../data/portfolio_data.js';

export const Projects = () => {
  return (
    <section className="section section--alt" id="portafolio">
      <div className="container">
        <span className="eyebrow">Trabajos</span>
        <h2 className="section-title">Webs pensadas para cada negocio</h2>
        <p className="section-lead">
          Ejemplos de webs para sectores locales. Cada una está diseñada para que el cliente reserve,
          llame o pida presupuesto en pocos segundos.
        </p>

        <div className="portfolio-grid">
          {trabajos_portafolio.map((item_trabajo) => (
            <article key={item_trabajo.id_trabajo} className={`work ${item_trabajo.clase_sector} reveal`}>

              {item_trabajo.imagen_captura ? (
                /* captura real de la portada de la demo */
                <div className="shot">
                  <div className="shot-bar" aria-hidden="true"><i></i><i></i><i></i><span>{item_trabajo.dominio_ejemplo}</span></div>
                  <img
                    className="shot-photo"
                    src={item_trabajo.imagen_captura}
                    alt={`Portada de la web de demostración de ${item_trabajo.nombre_negocio}`}
                    width="960"
                    height="600"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ) : (
              /* captura de ejemplo de la web dibujada con css */
              <div className="shot" aria-hidden="true">
                <div className="shot-bar"><i></i><i></i><i></i><span>{item_trabajo.dominio_ejemplo}</span></div>
                <div className="shot-body">
                  <div className="shot-nav"><b>{item_trabajo.nombre_negocio}</b><s></s><s></s><s></s></div>
                  <div className="shot-hero">
                    <div>
                      <p className="shot-h">
                        {item_trabajo.titular_captura[0]}<br />{item_trabajo.titular_captura[1]}
                      </p>
                      <span className="shot-btn">{item_trabajo.boton_captura}</span>
                    </div>
                    <div className="shot-img"></div>
                  </div>
                  <div className="shot-row"><span></span><span></span><span></span></div>
                </div>
              </div>
              )}

              <div className="work-info">
                <div className="work-tags">
                  <span className="work-sector">{item_trabajo.sector}</span>
                  {item_trabajo.es_demo && <span className="work-demo">Web de demostración</span>}
                </div>
                <h3>{item_trabajo.nombre_negocio}</h3>
                <p>{item_trabajo.frase_resultado}</p>
                {item_trabajo.enlace_demo && (
                  <a href={item_trabajo.enlace_demo} className="work-link" target="_blank" rel="noopener noreferrer">
                    Ver demo →<span className="visually-hidden"> (se abre en una pestaña nueva)</span>
                  </a>
                )}
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
