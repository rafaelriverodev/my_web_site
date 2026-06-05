// componente academico modular para la visualizacion segura de videotutoriales de youtube
import React from 'react';
import { videos_formacion_youtube } from '../data/portfolio_data';

export const Tutorials = () => {
  // definicion del contenedor estructurado de la seccion academica
  const seccion_academia_educativa = (
    <section id="tutorials" style={{ 
      padding: '4rem 0', 
      backgroundColor: 'var(--fondo_secundario)' 
    }}>
      <div className="contenedor_fluido">
        
        {/* cabecera principal del modulo de formacion */}
        <h2 className="titulo_seccion_principal">Código con Rafael</h2>
        
        <p style={{ 
          color: 'var(--texto_atenuado)', 
          marginBottom: '2.5rem', 
          fontSize: '1.05rem' 
        }}>
          Formación técnica especializada. Aprendamos juntos arquitectura de software, ciberseguridad y desarrollo fullstack.
        </p>

        {/* inicio del grid adaptativo diseñado bajo la estrategia mobile first */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: '2rem'
        }}>
        {/* mapeo de la coleccion estatica de videos bajo la convencion snake_case */}
          {videos_formacion_youtube.map((item_video) => {
            
            // extraccion limpia de las propiedades del objeto de video actual
            const id_unico_video = item_video.video_id_interno;
            const id_plataforma_youtube = item_video.youtube_id_plataforma;
            const titulo_del_video = item_video.titulo_video;
            const resumen_del_video = item_video.resumen_video;

            // inicializacion de la tarjeta contenedora del elemento multimedia
            return (
              <div key={id_unico_video} style={{
                backgroundColor: 'var(--fondo_principal)',
                borderRadius: 'var(--radio_borde_suave)',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.03)',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                
                {/* contenedor con relacion de aspecto fija 16:9 optimizado para smartphones */}
                <div style={{ 
                  position: 'relative', 
                  width: '100%', 
                  paddingTop: '56.25%', 
                  backgroundColor: '#000000' 
                }}>
                {/* reproductor embebido protegido contra inyecciones y ejecucion remota */}
                  <iframe
                    style={{ 
                      position: 'absolute', 
                      top: 0, 
                      left: 0, 
                      width: '100%', 
                      height: '100%', 
                      border: 0 
                    }}
                    src={`https://www.youtube.com/embed/${id_plataforma_youtube}`}
                    title={titulo_del_video}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    sandbox="allow-scripts allow-same-origin allow-popups; allow-presentation"
                  ></iframe>
                </div>

                {/* bloque informativo inferior de la tarjeta academica */}
                <div style={{ padding: '1.25rem', flexGrow: 1 }}>
                  <h3 style={{ 
                    fontSize: '1.15rem', 
                    fontWeight: '700', 
                    marginBottom: '0.5rem',
                    color: 'var(--texto_principal)' 
                  }}>
                    {titulo_del_video}
                  </h3>
                  <p style={{ 
                    fontSize: '0.9rem', 
                    color: 'var(--texto_atenuado)',
                    lineHeight: '1.4' 
                  }}>
                    {resumen_del_video}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );

  return seccion_academia_educativa;
};