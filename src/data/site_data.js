// datos de contacto compartidos por toda la web
// si cambian, actualizar tambien las paginas legales (aviso-legal.html, politica-privacidad.html, politica-cookies.html)
export const datos_contacto = {
  telefono_visible: "+34 640 89 55 63",
  telefono_enlace: "+34640895563",
  numero_whatsapp: "34640895563",
  mensaje_whatsapp: "Hola Rafael, quiero información sobre una página web",
  correo_electronico: "rafaeljoseriverojimenez@gmail.com",
  ciudad: "Santa Cruz de Tenerife",
  zona_trabajo: "Santa Cruz de Tenerife, España",
  horario_atencion: "De 9:00 a 17:00"
};

// paginas legales publicadas el 12 de noviembre de 2026; si se retiran, poner false y
// quitarlas de build.rollupOptions.input en vite.config.js
export const paginas_legales_publicadas = true;

// enlace directo al chat de whatsapp con el mensaje inicial ya escrito
export const enlace_whatsapp = `https://wa.me/${datos_contacto.numero_whatsapp}?text=${encodeURIComponent(datos_contacto.mensaje_whatsapp)}`;

// enlaces del menu principal
export const enlaces_navegacion = [
  { destino: "#portafolio", texto: "Trabajos" },
  { destino: "#proceso", texto: "Cómo trabajo" },
  { destino: "#precios", texto: "Precios" },
  { destino: "#preguntas", texto: "Preguntas" },
  { destino: "#sobre-mi", texto: "Sobre mí" }
];
