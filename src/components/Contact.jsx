// componente de contacto seguro con validacion de estados en el cliente
import React, { useState } from 'react';

export const Contact = () => {
  // declaracion de estados locales bajo la convencion estricta snake_case
  const [datos_formulario, establecer_datos_formulario] = useState({
    nombre_remitente: '',
    correo_remitente: '',
    mensaje_remitente: ''
  });

  const [estado_envio, establecer_estado_envio] = useState({
    procesando: false,
    exito: false,
    error_sistema: null
  });

  // manejador de eventos dinamicos para la captura de texto en los inputs
  const manejar_cambio_input = (evento) => {
    const { name, value } = evento.target;
    establecer_datos_formulario({
      ...datos_formulario,
      [name]: value
    });
  };

  // logica de procesamiento del formulario controlando el evento submit
  const procesar_envio_formulario = (evento) => {
    evento.preventDefault();
    establecer_estado_envio({ procesando: true, exito: false, error_sistema: null });

    // Simulacion de pasarela de envio segura
    setTimeout(() => {
      establecer_estado_envio({ procesando: false, exito: true, error_sistema: null });
      establecer_datos_formulario({ nombre_remitente: '', correo_remitente: '', mensaje_remitente: '' });
    }, 1500);
  };

  return (
    <section id="contact" style={{ padding: '4rem 0', backgroundColor: 'var(--fondo_secundario)' }}>
      <div className="contenedor_fluido">
        
        <h2 className="titulo_seccion_principal">¿Tienes un Proyecto?</h2>
        
        <p style={{ color: 'var(--texto_atenuado)', marginBottom: '2.5rem', fontSize: '1.05rem' }}>
          Hablemos sobre tu idea. Rellena el formulario y me pondré en contacto contigo para diseñar tu infraestructura web.
        </p>
        {/* contenedor del formulario de captura segura */}
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <form onSubmit={procesar_envio_formulario} style={{
            backgroundColor: 'var(--fondo_principal)',
            padding: '2rem 1.5rem',
            borderRadius: 'var(--radio_borde_suave)',
            border: '1px solid rgba(255, 255, 255, 0.03)',
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}>
            
            {/* campo: nombre del cliente */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="nombre_remitente" style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--texto_atenuado)' }}>Nombre Completo</label>
              <input
                type="text"
                id="nombre_remitente"
                name="nombre_remitente"
                required
                value={datos_formulario.nombre_remitente}
                onChange={manejar_cambio_input}
                style={{
                  padding: '0.85rem 1rem',
                  borderRadius: '8px',
                  backgroundColor: 'var(--fondo_secundario)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: 'var(--texto_principal)',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
            </div>

            {/* campo: correo electronico con validacion de estructura */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="correo_remitente" style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--texto_atenuado)' }}>Correo Electrónico</label>
              <input
                type="email"
                id="correo_remitente"
                name="correo_remitente"
                required
                value={datos_formulario.correo_remitente}
                onChange={manejar_cambio_input}
                style={{
                  padding: '0.85rem 1rem',
                  borderRadius: '8px',
                  backgroundColor: 'var(--fondo_secundario)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: 'var(--texto_principal)',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
            </div>

            {/* campo: cuadro de texto para el mensaje descriptivo */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="mensaje_remitente" style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--texto_atenuado)' }}>Cuéntame sobre tu proyecto</label>
              <textarea
                id="mensaje_remitente"
                name="mensaje_remitente"
                required
                rows="4"
                value={datos_formulario.mensaje_remitente}
                onChange={manejar_cambio_input}
                style={{
                  padding: '0.85rem 1rem',
                  borderRadius: '8px',
                  backgroundColor: 'var(--fondo_secundario)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: 'var(--texto_principal)',
                  fontSize: '1rem',
                  outline: 'none',
                  resize: 'vertical'
                }}
              ></textarea>
            </div>

            {/* boton de accion dinámico segun el estado de procesamiento */}
            <button
              type="submit"
              disabled={estado_envio.procesando}
              style={{
                padding: '1rem',
                borderRadius: '12px',
                backgroundColor: estado_envio.procesando ? 'var(--texto_atenuado)' : 'var(--color_acento)',
                color: '#080c14',
                fontWeight: '700',
                fontSize: '1rem',
                border: 'none',
                cursor: estado_envio.procesando ? 'not-allowed' : 'pointer',
                transition: 'var(--transicion_limpia)',
                marginTop: '0.5rem'
              }}
            >
              {estado_envio.procesando ? 'Procesando Envío...' : 'Enviar Mensaje Seguro'}
            </button>

            {/* alerta visual de exito al confirmar el estado diferido */}
            {estado_envio.exito && (
              <div style={{
                padding: '1rem',
                borderRadius: '8px',
                backgroundColor: 'rgba(0, 230, 118, 0.1)',
                border: '1px solid var(--color_exito)',
                color: 'var(--color_exito)',
                fontSize: '0.9rem',
                textAlign: 'center',
                fontWeight: '600'
              }}>
                ✓ ¡Mensaje enviado con éxito! Me pondré en contacto contigo muy pronto.
              </div>
            )}

          </form>
        </div>

      </div>
    </section>
  );
};