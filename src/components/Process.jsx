// componente que explica el proceso de trabajo en cuatro pasos
import React from 'react';
import { pasos_proceso } from '../data/portfolio_data.js';

export const Process = () => {
  return (
    <section className="section" id="proceso">
      <div className="container">
        <span className="eyebrow">Proceso</span>
        <h2 className="section-title">Cómo trabajo</h2>
        <p className="section-lead">
          Sin tecnicismos ni sorpresas. Sabes en todo momento en qué punto está tu web y cuánto te va a costar.
        </p>

        <ol className="steps">
          {pasos_proceso.map((item_paso) => (
            <li key={item_paso.titulo_paso} className="step reveal">
              <h3>{item_paso.titulo_paso}</h3>
              <p>{item_paso.texto_paso}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
