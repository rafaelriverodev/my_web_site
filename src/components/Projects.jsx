// componente modular para la visualizacion del portafolio de proyectos de software reales
import React from 'react';

export const Projects = () => {
  // listado estatico local actualizado con tus proyectos reales de rafaelriverodev.com
  const listado_proyectos_desarrollo = [
    {
      id_proyecto: "proy_001",
      titulo_proyecto: "Sistema de Trazabilidad Industrial",
      descripcion_proyecto: "Software especializado para el seguimiento y control de activos o productos a lo largo de cadenas de suministro, optimizando la auditoría de procesos críticos.",
      tecnologias_proyecto: ["Python", "MongoDB", "React", "Arquitectura Limpia"],
      enlace_github: "https://github.com/rafaelriverodev",
      enlace_despliegue: "https://trazabilidad-profecional.web.app/"
    },
    {
      id_proyecto: "proy_002",
      titulo_proyecto: "CineFilter - Plataforma de Recomendación de Películas",
      descripcion_proyecto: "Una plataforma para buscar películas",
      tecnologias_proyecto: ["JavaScript", "CSS", "HTML"],
      enlace_github: "https://github.com/rafaelriverodev",
      enlace_despliegue: "https://proyecto-cine-filter.vercel.app/"
    }
  ];

  return (
    <section id="projects" style={{ 
      padding: '4rem 0', 
      backgroundColor: 'var(--fondo_secundario)' 
    }}>
      <div className="contenedor_fluido">
        
        <h2 className="titulo_seccion_principal">Proyectos Destacados</h2>
        
        <p style={{ color: 'var(--texto_atenuado)', marginBottom: '2.5rem', fontSize: '1.05rem' }}>
          Soluciones digitales reales y software de nivel empresarial desplegados con éxito.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: '2rem'
        }}>
          {listado_proyectos_desarrollo.map((item_proyecto) => (
            <div key={item_proyecto.id_proyecto} style={{
              backgroundColor: 'var(--fondo_principal)',
              borderRadius: 'var(--radio_borde_suave)',
              padding: '1.75rem',
              border: '1px solid rgba(255, 255, 255, 0.03)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
            }}>
              
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--texto_principal)' }}>
                  {item_proyecto.titulo_proyecto}
                </h3>
                
                <p style={{ fontSize: '0.9rem', color: 'var(--texto_atenuado)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                  {item_proyecto.descripcion_proyecto}
                </p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                  {item_proyecto.tecnologias_proyecto.map((tag_tecnologia, indice_tag) => (
                    <span key={indice_tag} style={{
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      backgroundColor: 'var(--fondo_secundario)',
                      color: 'var(--color_acento)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '6px'
                    }}>
                      {tag_tecnologia}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ 
                display: 'flex', 
                gap: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                paddingTop: '1.25rem'
              }}>
                <a 
                  href={item_proyecto.enlace_github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--texto_principal)' }}
                >
                  GitHub →
                </a>
                
                <a 
                  href={item_proyecto.enlace_despliegue}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--color_acento)' }}
                >
                  Sitio Web
                </a>
              </div>

            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};