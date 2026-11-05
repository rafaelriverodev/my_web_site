// componente academico con videotutoriales de youtube que solo se cargan al hacer clic
import React, { useState } from 'react';
import { videos_formacion_youtube } from '../data/portfolio_data.js';

export const Tutorials = () => {
  // identificador del video cuyo reproductor ya se ha cargado
  const [video_activo, establecer_video_activo] = useState(null);

  return (
    <section className="section section--alt" id="tutoriales">
      <div className="container">
        <span className="eyebrow">Academia</span>
        <h2 className="section-title">Código con Rafael</h2>
        <p className="section-lead">
          Tutoriales para aprender desarrollo web paso a paso, desde cero.
        </p>

        <div className="media-grid">
          {videos_formacion_youtube.map((item_video) => (
            <article key={item_video.video_id_interno} className="media-card">
              <div className="media-frame">
                {video_activo === item_video.video_id_interno ? (
                  // reproductor sin cookies de seguimiento hasta que el usuario reproduce
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${item_video.youtube_id_plataforma}?autoplay=1`}
                    title={item_video.titulo_video}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  // miniatura ligera en lugar del reproductor completo
                  <button
                    className="media-play"
                    style={{ backgroundImage: `url(https://i.ytimg.com/vi/${item_video.youtube_id_plataforma}/hqdefault.jpg)` }}
                    onClick={() => establecer_video_activo(item_video.video_id_interno)}
                    aria-label={`Reproducir: ${item_video.titulo_video}`}
                  >
                    <span>Se cargará YouTube al reproducir</span>
                  </button>
                )}
              </div>
              <div className="media-info">
                <h3>{item_video.titulo_video}</h3>
                <p>{item_video.resumen_video}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
