// componente modular para la gestion de contactos y solicitudes de servicios reales
import React, { useState } from 'react';

export const Contact = () => {
  // estado global para capturar los datos del formulario de forma controlada
  const [datos_formulario, establecer_datos_formulario] = useState({
    nombre_usuario: '',
    correo_usuario: '',
    motivo_consulta: '',
    mensaje_usuario: ''
  });

  // estado para gestionar las alertas y el flujo visual de la aplicacion
  const [estado_envio, establecer_estado_envio] = useState({
    procesando: false,
    exito: false,
    error_sistema: null
  });

  // manejador encargado de capturar los cambios en los inputs de forma reactiva
  const manejar_cambio_input = (evento) => {
    const { name, value } = evento.target;
    
    establecer_datos_formulario({
      ...datos_formulario,
      [name]: value
    });
  };

  // procesador de envios blindado contra ejecuciones duplicadas y conectado a la API de EmailJS
  const procesar_envio_formulario = async (evento) => {
    evento.preventDefault();
    
    // validacion estricta en el cliente para asegurar el motivo de consulta (whitelist)
    const motivos_validos = ['informacion_plan', 'servicio_tecnico', 'otro_motivo'];
    
    if (!motivos_validos.includes(datos_formulario.motivo_consulta)) {
      establecer_estado_envio({
        procesando: false,
        exito: false,
        error_sistema: 'Por favor, selecciona un motivo de consulta válido de la lista.'
      });
      
      return;
    }

    establecer_estado_envio({ procesando: true, exito: false, error_sistema: null });

    // mapeo de datos estructurados para el envio seguro hacia el servidor de EmailJS
    const parametros_api = {
      service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      template_params: {
        nombre_usuario: datos_formulario.nombre_usuario,
        correo_usuario: datos_formulario.correo_usuario,
        motivo_consulta: datos_formulario.motivo_consulta.replace('_', ' ').toUpperCase(),
        mensaje_usuario: datos_formulario.mensaje_usuario
      }
    };

    try {
      // peticion HTTP asincrona bajo protocolo seguro TLS 1.3
      const respuesta = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(parametros_api)
      });

      if (respuesta.ok) {
        establecer_estado_envio({
          procesando: false,
          exito: true,
          error_sistema: null
        });

        // reinicio limpio de los campos tras un envio exitoso en produccion
        establecer_datos_formulario({
          nombre_usuario: '',
          correo_usuario: '',
          motivo_consulta: '',
          mensaje_usuario: ''
        });
        
      } else {
        const texto_error = await respuesta.text();
        
        throw new Error(texto_error || 'Fallo en la pasarela de EmailJS');
      }

    } catch (error) {
      console.error('Error de auditoria en envio de correo:', error);
      
      establecer_estado_envio({
        procesando: false,
        exito: false,
        error_sistema: 'No se pudo procesar tu solicitud en este momento. Inténtalo de nuevo más tarde.'
      });
    }
  };

  return (
    <section id="contact" style={{ padding: '4rem 0', backgroundColor: 'var(--fondo_principal)' }}>
      <div className="contenedor_fluido">
        
        <h2 className="titulo_seccion_principal">Contacto</h2>
        
        <p style={{ color: 'var(--texto_atenuado)', marginBottom: '2.5rem', fontSize: '1.05rem' }}>
          ¿Listo para impulsar tu proyecto? Cuéntame qué necesitas y nos pondremos en marcha.
        </p>

        <div style={{
          backgroundColor: 'var(--fondo_secundario)',
          padding: '2.5rem',
          borderRadius: 'var(--radio_borde_suave)',
          border: '1px solid rgba(255, 255, 255, 0.03)',
          maxWidth: '650px',
          margin: '0 auto',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
        }}>

          <form onSubmit={procesar_envio_formulario}>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="nombre_usuario" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>
                Nombre Completo
              </label>
              
              <input
                type="text"
                id="nombre_usuario"
                name="nombre_usuario"
                required
                disabled={estado_envio.procesando}
                value={datos_formulario.nombre_usuario}
                onChange={manejar_cambio_input}
                style={{
                  width: '100%', padding: '0.85rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)',
                  backgroundColor: 'var(--fondo_tarjeta_interna)', color: 'var(--texto_principal)', fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="correo_usuario" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>
                Correo Electrónico
              </label>
              
              <input
                type="email"
                id="correo_usuario"
                name="correo_usuario"
                required
                disabled={estado_envio.procesando}
                value={datos_formulario.correo_usuario}
                onChange={manejar_cambio_input}
                style={{
                  width: '100%', padding: '0.85rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)',
                  backgroundColor: 'var(--fondo_tarjeta_interna)', color: 'var(--texto_principal)', fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="motivo_consulta" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>
                ¿En qué puedo ayudarte?
              </label>
              
              <select
                id="motivo_consulta"
                name="motivo_consulta"
                required
                disabled={estado_envio.procesando}
                value={datos_formulario.motivo_consulta}
                onChange={manejar_cambio_input}
                style={{
                  width: '100%', padding: '0.85rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)',
                  backgroundColor: 'var(--fondo_tarjeta_interna)', color: 'var(--texto_principal)', fontSize: '1rem',
                  cursor: 'pointer'
                }}
              >
                <option value="" disabled hidden>Selecciona una opción...</option>
                <option value="informacion_plan">Información sobre un Plan Web</option>
                <option value="servicio_tecnico">Solicitar un Servicio Técnico</option>
                <option value="otro_motivo">Otro tipo de consulta</option>
              </select>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label htmlFor="mensaje_usuario" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>
                Tu Mensaje
              </label>
              
              <textarea
                id="mensaje_usuario"
                name="mensaje_usuario"
                required
                rows="5"
                disabled={estado_envio.procesando}
                value={datos_formulario.mensaje_usuario}
                onChange={manejar_cambio_input}
                style={{
                  width: '100%', padding: '0.85rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)',
                  backgroundColor: 'var(--fondo_tarjeta_interna)', color: 'var(--texto_principal)', fontSize: '1rem', resize: 'vertical'
                }}
              />
            </div>

            <button
              type="submit"
              disabled={estado_envio.procesando}
              style={{
                width: '100%', padding: '1rem', borderRadius: '8px', backgroundColor: 'var(--color_acento)',
                color: '#080c14', fontWeight: '700', fontSize: '1rem', border: 'none', cursor: estado_envio.procesando ? 'not-allowed' : 'pointer',
                textTransform: 'uppercase', letterSpacing: '0.05em', opacity: estado_envio.procesando ? 0.7 : 1,
                transition: 'var(--transicion_limpia)'
              }}
            >
              {estado_envio.procesando ? 'Transmitiendo solicitud...' : 'Enviar Mensaje'}
            </button>

            {estado_envio.exito && (
              <div style={{ marginTop: '1.5rem', color: 'var(--color_exito)', fontSize: '0.95rem', fontWeight: '600', textAlign: 'center' }}>
                ✓ ¡Mensaje enviado con éxito! Recibirás una respuesta en tu bandeja de entrada en menos de 24 horas.
              </div>
            )}

            {estado_envio.error_sistema && (
              <div style={{ marginTop: '1.5rem', color: '#ff3333', fontSize: '0.95rem', fontWeight: '600', textAlign: 'center' }}>
                ⚠ {estado_envio.error_sistema}
              </div>
            )}

          </form>

        </div>

      </div>
    </section>
  );
};