// componente de confianza: testimonios de clientes y preguntas frecuentes
import React from 'react';
import { testimonios_clientes, preguntas_frecuentes } from '../data/portfolio_data.js';

export const Faq = () => {
  const hay_testimonios = testimonios_clientes.length > 0;

  return (
    <section className="section" id="preguntas">
      <div className="container">

        {/* los testimonios solo aparecen cuando hay opiniones reales */}
        {hay_testimonios && (
          <>
            <span className="eyebrow">Opiniones</span>
            <h2 className="section-title">Lo que dicen mis clientes</h2>
            <div className="testimonials">
              {testimonios_clientes.map((item_testimonio) => (
                <figure key={item_testimonio.id_testimonio} className="quote reveal">
                  <blockquote>{item_testimonio.texto_testimonio}</blockquote>
                  <figcaption>
                    <span className="avatar" style={{ background: item_testimonio.color_avatar }}>
                      {item_testimonio.iniciales}
                    </span>
                    <span>
                      <strong>{item_testimonio.nombre_cliente}</strong>
                      {item_testimonio.negocio_cliente}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </>
        )}

        {hay_testimonios ? (
          <h3 className="faq-title">Preguntas frecuentes</h3>
        ) : (
          <>
            <span className="eyebrow">Dudas</span>
            <h2 className="section-title">Preguntas frecuentes</h2>
            <p className="section-lead">Lo que suelen preguntarme antes de empezar.</p>
          </>
        )}

        <div className="faq">
          {preguntas_frecuentes.map((item_pregunta) => (
            <details key={item_pregunta.pregunta}>
              <summary>{item_pregunta.pregunta}</summary>
              <p>{item_pregunta.respuesta}</p>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
};
