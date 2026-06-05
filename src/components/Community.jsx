// componente de comunidad con feed vertical estilo smartphone para tiktok y hobbies
import React from 'react';
import { videos_comunidad_tiktok } from '../data/portfolio_data.js';

export const Community = () => {
  return (
    <section id="community" style={{ 
      padding: '4rem 0', 
      backgroundColor: 'var(--fondo_principal)' 
    }}>
      <div className="contenedor_fluido">
        
        {/* cabecera de la seccion de comunidad y cultura geek */}
        <h2 className="titulo_seccion_principal">Comunidad & Cultura Tech</h2>
        
        <p style={{ 
          color: 'var(--texto_atenuado)', 
          marginBottom: '2.5rem', 
          fontSize: '1.05rem' 
        }}>
          Más allá de las líneas de código, comparto mi día a día en el desarrollo de software,
          optimización de setups, tecnología y mi pasión por la cultura geek y el coleccionismo.
        </p>

        {/* contenedor del feed optimizado con estetica vertical de smartphone */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          justifyContent: 'center'
        }}>
        {/* mapeo dinamico del feed de videos usando la convencion snake_case */}
          {videos_comunidad_tiktok.map((item_tiktok) => {
            const id_interno = item_tiktok.tiktok_id_interno;
            const id_plataforma = item_tiktok.tiktok_id_plataforma;
            const titulo_post = item_tiktok.titulo_contenido;
            const categoria_post = item_tiktok.categoria_contenido;

            return (
              <div key={id_interno} style={{
                backgroundColor: 'var(--fondo_secundario)',
                borderRadius: 'var(--radio_borde_suave)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '340px',
                margin: '0 auto',
                width: '100%'
              }}>
                
                {/* contenedor con relacion de aspecto vertical 9:16 estilo smartphone */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  paddingTop: '177.77%', /* proporcion vertical de smartphone */
                  backgroundColor: '#000000'
                }}>
                  <iframe
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 0
                    }}
                    src={`https://www.tiktok.com/embed/v2/${id_plataforma}`}
                    title={titulo_post}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    sandbox="allow-scripts allow-same-origin allow-popups"
                  ></iframe>
                </div>

                {/* metadatos y etiquetas informativas al pie del video */}
                <div style={{ padding: '1.25rem' }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    color: 'var(--color_acento)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    display: 'inline-block',
                    marginBottom: '0.5rem'
                  }}>
                    {categoria_post}
                  </span>
                  
                  <h3 style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    lineHeight: '1.4',
                    color: 'var(--texto_principal)'
                  }}>
                    {titulo_post}
                  </h3>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};