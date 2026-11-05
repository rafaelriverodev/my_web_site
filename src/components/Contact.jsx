// componente modular para la gestion de contactos y solicitudes de servicios reales
import React, { useState } from 'react';
import { datos_contacto, enlace_whatsapp, paginas_legales_publicadas } from '../data/site_data.js';

export const Contact = () => {
  // estado global para capturar los datos del formulario de forma controlada
  const [datos_formulario, establecer_datos_formulario] = useState({
    nombre_usuario: '',
    correo_usuario: '',
    motivo_consulta: '',
    mensaje_usuario: '',
    acepta_privacidad: false
  });

  // estado para gestionar las alertas y el flujo visual de la aplicacion
  const [estado_envio, establecer_estado_envio] = useState({
    procesando: false,
    exito: false,
    error_sistema: null
  });

  // manejador encargado de capturar los cambios en los inputs de forma reactiva
  const manejar_cambio_input = (evento) => {
    const { name, value, type, checked } = evento.target;

    establecer_datos_formulario({
      ...datos_formulario,
      [name]: type === 'checkbox' ? checked : value
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

    // el consentimiento de privacidad es obligatorio por rgpd
    if (!datos_formulario.acepta_privacidad) {
      establecer_estado_envio({
        procesando: false,
        exito: false,
        error_sistema: 'Debes aceptar la política de privacidad para enviar el mensaje.'
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
          mensaje_usuario: '',
          acepta_privacidad: false
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
        error_sistema: 'No se pudo procesar tu solicitud en este momento. Inténtalo de nuevo o escríbeme por WhatsApp.'
      });
    }
  };

  return (
    <section className="section" id="contacto">
      <div className="container contact">

        <div className="reveal">
          <span className="eyebrow">Contacto</span>
          <h2 className="section-title">Cuéntame tu proyecto</h2>
          <p className="section-lead">
            Te respondo en menos de 24 horas laborables con una propuesta y un presupuesto cerrado.
          </p>
          <div className="contact-direct">
            <a href={enlace_whatsapp} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
              Escríbeme por WhatsApp
            </a>
            <a href={`tel:${datos_contacto.telefono_enlace}`} className="btn btn--ghost">
              Llamar al {datos_contacto.telefono_visible}
            </a>
          </div>
        </div>

        <form className="form reveal" onSubmit={procesar_envio_formulario}>
          <div className="field">
            <label htmlFor="nombre_usuario">Nombre</label>
            <input
              type="text"
              id="nombre_usuario"
              name="nombre_usuario"
              autoComplete="name"
              required
              disabled={estado_envio.procesando}
              value={datos_formulario.nombre_usuario}
              onChange={manejar_cambio_input}
            />
          </div>

          <div className="field">
            <label htmlFor="correo_usuario">Email</label>
            <input
              type="email"
              id="correo_usuario"
              name="correo_usuario"
              autoComplete="email"
              required
              disabled={estado_envio.procesando}
              value={datos_formulario.correo_usuario}
              onChange={manejar_cambio_input}
            />
          </div>

          <div className="field">
            <label htmlFor="motivo_consulta">¿En qué puedo ayudarte?</label>
            <select
              id="motivo_consulta"
              name="motivo_consulta"
              required
              disabled={estado_envio.procesando}
              value={datos_formulario.motivo_consulta}
              onChange={manejar_cambio_input}
            >
              <option value="" disabled hidden>Selecciona una opción</option>
              <option value="informacion_plan">Información sobre un plan web</option>
              <option value="servicio_tecnico">Solicitar un servicio técnico</option>
              <option value="otro_motivo">Otro tipo de consulta</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="mensaje_usuario">Cuéntame qué necesitas</label>
            <textarea
              id="mensaje_usuario"
              name="mensaje_usuario"
              required
              rows="5"
              disabled={estado_envio.procesando}
              value={datos_formulario.mensaje_usuario}
              onChange={manejar_cambio_input}
            />
          </div>

          <label className="consent">
            <input
              type="checkbox"
              name="acepta_privacidad"
              required
              disabled={estado_envio.procesando}
              checked={datos_formulario.acepta_privacidad}
              onChange={manejar_cambio_input}
            />
            <span>
              He leído y acepto la{' '}
              {paginas_legales_publicadas ? (
                <a href="/politica-privacidad.html" target="_blank" rel="noopener noreferrer">política de privacidad</a>
              ) : (
                'política de privacidad'
              )}.
              Tus datos solo se usarán para
              responder a tu consulta.
            </span>
          </label>

          <button type="submit" className="btn btn--primary btn--block" disabled={estado_envio.procesando}>
            {estado_envio.procesando ? 'Enviando...' : 'Enviar mensaje'}
          </button>

          {estado_envio.exito && (
            <p className="form-message form-message--ok" role="status">
              ✓ ¡Mensaje enviado! Te responderé en menos de 24 horas laborables.
            </p>
          )}

          {estado_envio.error_sistema && (
            <p className="form-message form-message--error" role="alert">
              {estado_envio.error_sistema}
            </p>
          )}
        </form>

      </div>
    </section>
  );
};
