// componente de planes y precios de diseño web
import React from 'react';
import { planes_precios } from '../data/portfolio_data.js';

export const Services = () => {
  return (
    <section className="section section--alt" id="precios">
      <div className="container">
        <span className="eyebrow">Precios</span>
        <h2 className="section-title">Planes claros, precio cerrado</h2>
        <p className="section-lead">
          Elige el plan que encaja con tu negocio. Si dudas, te ayudo a decidir sin compromiso.
        </p>

        <div className="plans">
          {planes_precios.map((item_plan) => (
            <article key={item_plan.id_plan} className={item_plan.destacado ? 'plan plan--featured reveal' : 'plan reveal'}>
              {item_plan.destacado && <span className="plan-badge">Recomendada</span>}

              <h3>{item_plan.nombre_plan}</h3>
              <p className="plan-desc">{item_plan.descripcion_plan}</p>
              <div className="plan-price">
                {item_plan.precio_plan.toLocaleString('es-ES')} €<small>{item_plan.nota_impuestos}</small>
              </div>
              <p className="plan-note">
                <strong>Desde el 2.º año: {item_plan.cuota_anual} €/año.</strong>{' '}
                Incluye dominio, alojamiento y hasta {item_plan.cambios_incluidos} cambios pequeños al año.
              </p>

              <ul className="plan-list">
                {item_plan.caracteristicas_incluidas.map((caracteristica) => (
                  <li key={caracteristica}>{caracteristica}</li>
                ))}
              </ul>

              <a href="#contacto" className={item_plan.destacado ? 'btn btn--primary btn--block' : 'btn btn--ghost btn--block'}>
                Quiero este plan
              </a>
            </article>
          ))}
        </div>

        {/* explicacion breve de la cuota anual */}
        <div className="plans-info">
          <p>
            <strong>¿Qué es un cambio pequeño?</strong> Actualizar textos, fotos o precios de tu web.
          </p>
          <p>
            <strong>¿Y si necesito algo más grande?</strong> Las secciones nuevas o los rediseños se presupuestan aparte.
          </p>
        </div>

        <p className="plans-footnote">¿Necesitas algo distinto? Escríbeme y te preparo un presupuesto a medida.</p>
      </div>
    </section>
  );
};
