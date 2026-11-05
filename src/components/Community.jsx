// componente de comunidad con videos de tiktok que solo se cargan al hacer clic
import React, { useState } from 'react';
import { videos_comunidad_tiktok } from '../data/portfolio_data.js';

export const Community = () => {
  // identificador del video cuyo reproductor ya se ha cargado
  const [video_activo, establecer_video_activo] = useState(null);

  return (
    <section className="section" id="comunidad">
      <div className="container">
        <span className="eyebrow">Comunidad</span>
        <h2 className="section-title">Mi día a día</h2>
        <p className="section-lead">
          Más allá del código: mi setup, tecnología y lo que voy aprendiendo por el camino.
        </p>

        <div className="media-grid">
          {videos_comunidad_tiktok.map((item_tiktok) => (
            <article key={item_tiktok.tiktok_id_interno} className="media-card media-card--vertical">
              <div className={video_activo === item_tiktok.tiktok_id_interno ? 'media-frame media-frame--active' : 'media-frame'}>
                {video_activo === item_tiktok.tiktok_id_interno ? (
                  <iframe
                    src={`https://www.tiktok.com/embed/v2/${item_tiktok.tiktok_id_plataforma}`}
                    title={item_tiktok.titulo_contenido}
                    allow="encrypted-media; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <button
                    className="media-play"
                    onClick={() => establecer_video_activo(item_tiktok.tiktok_id_interno)}
                    aria-label={`Reproducir: ${item_tiktok.titulo_contenido}`}
                  >
                    <span>Se cargará TikTok al reproducir</span>
                  </button>
                )}
              </div>
              <div className="media-info">
                <span className="media-tag">{item_tiktok.categoria_contenido}</span>
                <h3>{item_tiktok.titulo_contenido}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
