// componente modular para la visualizacion de planes de servicios tecnicos
import React from 'react';
// importamos ambos planes separados por coma y con la extension .js obligatoria
import { plan_landing_page_basico, plan_landing_page_medio, plan_landing_page_profecional } from '../data/portfolio_data.js';

export const Services = () => {
  // 1. extracción limpia del plan medio
  const {
    nombre_servicio: titulo_profesional,
    precio_servicio: precio_profesional,
    moneda_servicio: moneda_profesional,
    caracteristicas_incluidas: caracteristicas_profesional
  } = plan_landing_page_medio;

  // 2. extracción limpia del plan inicial
  const {
    nombre_servicio: titulo_inicial,
    precio_servicio: precio_inicial,
    moneda_servicio: moneda_inicial,
    caracteristicas_incluidas: caracteristicas_inicial
  } = plan_landing_page_basico;

  // 3. extracción limpia del plan pro
  const {
    nombre_servicio: titulo_pro,
    precio_servicio: precio_pro,
    moneda_servicio: moneda_pro,
    caracteristicas_incluidas: caracteristicas_pro
  } = plan_landing_page_profecional;

  return (
    <section id="services" style={{ padding: '4rem 0', backgroundColor: 'var(--fondo_principal)' }}>
      <div className="contenedor_fluido">
        
        <h2 className="titulo_seccion_principal">Planes y Servicios</h2>
        <p style={{ color: 'var(--texto_atenuado)', marginBottom: '2.5rem', fontSize: '1.05rem' }}>
          Soluciones web de alto rendimiento diseñadas para impulsar tu presencia digital.
        </p>

        {/* contenedor grid optimizado para tres tarjetas distribuidas */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1140px',
          margin: '0 auto'
        }}>

          {/* TARJETA 1: PLAN INICIAL */}
          <div style={{
            backgroundColor: 'var(--fondo_secundario)',
            padding: '2rem 1.5rem',
            borderRadius: 'var(--radio_borde_suave)',
            border: '1px solid rgba(255, 255, 255, 0.03)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
          }}>
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--texto_principal)' }}>
                {titulo_inicial}
              </h3>
              <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--color_acento)', marginBottom: '1.5rem' }}>
                {precio_inicial} <span style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--texto_atenuado)' }}>{moneda_inicial}</span>
              </div>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {caracteristicas_inicial.map((item_inicial, index) => (
                  <li key={index} style={{ fontSize: '0.9rem', color: 'var(--texto_atenuado)', display: 'flex', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--color_acento)' }}>✓</span> {item_inicial}
                  </li>
                ))}
              </ul>
            </div>
            <a href="#contact" style={{
              display: 'block', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.05em',
              textAlign: 'center', backgroundColor: 'rgba(255, 107, 0, 0.1)', color: 'var(--color_acento)',
              fontWeight: '700', padding: '0.85rem', borderRadius: '8px', marginTop: '2rem', border: '1px solid var(--color_acento)'
            }}>
              Contratar Plan
            </a>
          </div>

          {/* TARJETA 2: PLAN MEDIO (Destacado) */}
          <div style={{
            backgroundColor: 'var(--fondo_secundario)',
            padding: '2rem 1.5rem',
            borderRadius: 'var(--radio_borde_suave)',
            border: '2px solid var(--color_acento)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 15px 30px rgba(255, 107, 0, 0.05)',
            position: 'relative'
          }}>
            <span style={{
              position: 'absolute', top: '-12px', right: '1.5rem', backgroundColor: 'var(--color_acento)',
              color: '#080c14', fontSize: '0.75rem', fontWeight: '700', padding: '0.25rem 0.75rem', borderRadius: '20px', textTransform: 'uppercase'
            }}>
              Recomendado
            </span>
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--texto_principal)' }}>
                {titulo_profesional}
              </h3>
              <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--color_acento)', marginBottom: '1.5rem' }}>
                {precio_profesional} <span style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--texto_atenuado)' }}>{moneda_profesional}</span>
              </div>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {/* CORREGIDO: Eliminada la declaración de función flecha rota */}
                {caracteristicas_profesional.map((item_profesional, index) => (
                  <li key={index} style={{ fontSize: '0.9rem', color: 'var(--texto_atenuado)', display: 'flex', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--color_acento)' }}>✓</span> {item_profesional}
                  </li>
                ))}
              </ul>
            </div>
            <a href="#contact" style={{
              display: 'block', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.05em',
              textAlign: 'center', backgroundColor: 'var(--color_acento)', color: '#080c14',
              fontWeight: '700', padding: '0.85rem', borderRadius: '8px', marginTop: '2rem'
            }}>
              Contratar Plan
            </a>
          </div>

          {/* TARJETA 3: PLAN PROFESIONAL / PRO (Nueva añadida correctamente) */}
          <div style={{
            backgroundColor: 'var(--fondo_secundario)',
            padding: '2rem 1.5rem',
            borderRadius: 'var(--radio_borde_suave)',
            border: '1px solid rgba(255, 255, 255, 0.03)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
          }}>
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--texto_principal)' }}>
                {titulo_pro}
              </h3>
              <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--color_acento)', marginBottom: '1.5rem' }}>
                {precio_pro} <span style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--texto_atenuado)' }}>{moneda_pro}</span>
              </div>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {caracteristicas_pro.map((item_pro, index) => (
                  <li key={index} style={{ fontSize: '0.9rem', color: 'var(--texto_atenuado)', display: 'flex', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--color_acento)' }}>✓</span> {item_pro}
                  </li>
                ))}
              </ul>
            </div>
            <a href="#contact" style={{
              display: 'block', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.05em',
              textAlign: 'center', backgroundColor: 'rgba(255, 107, 0, 0.1)', color: 'var(--color_acento)',
              fontWeight: '700', padding: '0.85rem', borderRadius: '8px', marginTop: '2rem', border: '1px solid var(--color_acento)'
            }}>
              Contratar Plan
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};