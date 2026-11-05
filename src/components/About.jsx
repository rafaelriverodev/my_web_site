// componente de presentacion personal cercana
import React from 'react';
import { datos_contacto } from '../data/site_data.js';

export const About = () => {
  return (
    <section className="section section--alt" id="sobre-mi">
      <div className="container about">
        <div className="about-photo reveal">
          <img
            src="/img/sobre_mi_rafael.webp"
            alt="Rafael Rivero"
            width="400"
            height="500"
            loading="lazy"
          />
        </div>

        {/* PENDIENTE: ajustar la historia con datos reales */}
        <div className="reveal">
          <span className="eyebrow">Sobre mí</span>
          <h2 className="section-title">Hola, soy Rafael</h2>
          <p>
            Soy desarrollador web y trabajo desde <strong>{datos_contacto.ciudad}</strong>. Lo que más me gusta
            es ver cómo una buena web cambia el día a día de un negocio de barrio.
          </p>
          <p>
            Trabajo con restaurantes, comercios y profesionales de la zona. Hablo claro, sin tecnicismos,
            y me implico como si el negocio fuera mío.
          </p>
          <p>Si tienes un negocio y todavía no tienes web, o la que tienes no te trae clientes, hablemos.</p>
          <a href="#contacto" className="btn btn--dark">Hablemos de tu web</a>
        </div>
      </div>
    </section>
  );
};
