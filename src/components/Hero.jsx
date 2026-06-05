// componente de impacto principal para la presentacion del perfil tecnico con fotografia local
import React from 'react';

export const Hero = () => {
  // LAS VARIABLES SE DECLARAN AQUÍ (Antes del return)
  const listado_tecnologias_clave = [
    "JavaScript", "Python", "IA", "Java", "MongoDB", 
    "WordPress", "CSS", "HTML", "Vercel", "GitHub", "Diseño Responsive"
  ];

  return (
    <section id="hero" style={{
      padding: '4rem 0',
      backgroundColor: 'var(--fondo_principal)',
      display: 'flex',
      alignItems: 'center',
      minHeight: 'calc(100vh - 70px)'
    }}>
      <div className="contenedor_fluido" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem'
      }}>
        
        {/* bloque flex superior adaptable: divide texto y fotografia */}
        <div style={{
          display: 'flex',
          flexDirection: 'column-reverse',
          gap: '2.5rem',
          alignItems: 'center',
          width: '100%'
        }}>
          
          {/* columna izquierda: informacion y propuesta de valor */}
          <div style={{ flex: '1', width: '100%' }}>
            <span style={{
              display: 'inline-block',
              color: 'var(--color_acento)',
              fontSize: '0.9rem',
              fontWeight: '700',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>
              Desarrollador Full Stack & Consultor
            </span>
            
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: '900',
              lineHeight: '1.15',
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem',
              color: 'var(--texto_principal)'
            }}>
              Construyendo el futuro web con código limpio e <span style={{ color: 'var(--color_acento)' }}>Inteligencia Artificial</span>
            </h1>
            
            <p style={{
              fontSize: '1.05rem',
              color: 'var(--texto_atenuado)',
              marginBottom: '2.5rem',
              maxWidth: '600px',
              lineHeight: '1.6'
            }}>
              Hola, soy Rafael Rivero. Me especializo en diseñar y desplegar aplicaciones web de alto rendimiento, 
              combinando tecnologías robustas de backend y frontend con la automatización inteligente de procesos.
            </p>
            
            {/* botones de accion principales */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="#services" style={{
                display: 'inline-block',
                textAlign: 'center',
                backgroundColor: 'var(--color_acento)',
                color: '#080c14',
                fontWeight: '700',
                padding: '1rem 2rem',
                borderRadius: '12px',
                transition: 'var(--transicion_limpia)'
              }}>
                Ver Servicios
              </a>
            </div>
          </div>

          {/* columna derecha: tu fotografia profesional cargada localmente */}
          <div style={{ 
            flex: '1', 
            display: 'flex', 
            justifyContent: 'center',
            width: '100%'
          }}>
            <div style={{
              width: '350px',
              height: '350px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid var(--color_acento)',
              boxShadow: '0 20px 40px rgba(255, 107, 0, 0.15)',
              backgroundColor: 'var(--fondo_secundario)'
            }}>
              <img 
                src="/img/foto_02.png" 
                alt="Rafael Rivero" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>

        </div>

        {/* bloque inferior: ecosistema tecnologico */}
        <div style={{ width: '100%', marginTop: '1rem' }}>
          <h3 style={{
            fontSize: '0.9rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: 'var(--texto_atenuado)',
            marginBottom: '1.25rem'
          }}>
            Ecosistema Tecnológico Avanzado
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {listado_tecnologias_clave.map((tecnologia, indice) => (
              <span key={indice} style={{
                backgroundColor: 'var(--fondo_secundario)',
                color: 'var(--texto_principal)',
                fontSize: '0.85rem',
                fontWeight: '500',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.03)'
              }}>
                {tecnologia}
              </span>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 768px) {
          #hero h1 { font-size: 3.5rem !important; }
          #hero .contenedor_fluido > div:first-child {
            flex-direction: row !important;
            justify-content: space-between !important;
          }
          #hero .contenedor_fluido div div:first-child { flex-direction: row !important; }
          #hero a { width: auto !important; }
          #hero img { width: 340px !important; height: 340px !important; }
        }
      `}</style>
    </section>
  );
};