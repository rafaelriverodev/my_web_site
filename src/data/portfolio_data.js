// webs de ejemplo por sector para el portafolio
// cada captura se dibuja con css a partir de la clase del sector
// si un trabajo tiene imagen_captura se muestra la captura real en lugar del dibujo css
export const trabajos_portafolio = [
  {
    id_trabajo: "trabajo_barberia",
    clase_sector: "work--barberia",
    sector: "Barbería",
    nombre_negocio: "Barbería El Filo",
    dominio_ejemplo: "demo-barberia-jade.vercel.app",
    imagen_captura: "/img/demo_barberia.webp",
    es_demo: true,
    frase_resultado: "Web para barbería con reserva de cita por WhatsApp, servicios y galería.",
    enlace_demo: "https://demo-barberia-jade.vercel.app"
  },
  {
    id_trabajo: "trabajo_tatuajes",
    clase_sector: "work--tatuajes",
    sector: "Estudio de tatuajes",
    nombre_negocio: "Tinta Negra Studio",
    dominio_ejemplo: "demo-tatuajes-two.vercel.app",
    imagen_captura: "/img/demo_tatuajes.webp",
    es_demo: true,
    frase_resultado: "Web para estudio de tatuajes con galería por estilos, artistas y cita por WhatsApp.",
    enlace_demo: "https://demo-tatuajes-two.vercel.app"
  },
  {
    id_trabajo: "trabajo_cafeteria",
    clase_sector: "work--cafeteria",
    sector: "Cafetería",
    nombre_negocio: "Grano de Café",
    dominio_ejemplo: "demo-cafeteria-teal.vercel.app",
    imagen_captura: "/img/demo_cafeteria.webp",
    es_demo: true,
    frase_resultado: "Web para cafetería con la carta y sus precios, galería, horario y botón de WhatsApp.",
    enlace_demo: "https://demo-cafeteria-teal.vercel.app"
  },
  {
    id_trabajo: "trabajo_carne",
    clase_sector: "work--carne",
    sector: "Carnicería",
    nombre_negocio: "El Buen Corte",
    dominio_ejemplo: "demo-carniceria-six.vercel.app",
    imagen_captura: "/img/demo_carniceria.webp",
    es_demo: true,
    frase_resultado: "Web para carnicería con la carta de cortes, galería, horario y pedidos por WhatsApp.",
    enlace_demo: "https://demo-carniceria-six.vercel.app"
  },
  {
    id_trabajo: "trabajo_pelu",
    clase_sector: "work--pelu",
    sector: "Peluquería",
    nombre_negocio: "Estudio Malva",
    dominio_ejemplo: "estudio-malva.es",
    titular_captura: ["Tu mejor versión,", "sin esperas"],
    boton_captura: "Pedir cita",
    frase_resultado: "Cita online, precios claros y galería de trabajos para que nuevas clientas se animen a reservar.",
    enlace_demo: null
  },
  {
    id_trabajo: "trabajo_inmobiliaria",
    clase_sector: "work--inmobiliaria",
    sector: "Inmobiliaria",
    nombre_negocio: "Atrio Inmobiliaria",
    dominio_ejemplo: "demo-inmobiliaria-black.vercel.app",
    imagen_captura: "/img/demo_inmobiliaria.webp",
    es_demo: true,
    frase_resultado: "Web para inmobiliaria con catálogo de viviendas, calculadora de hipoteca y valoración gratuita.",
    enlace_demo: "https://demo-inmobiliaria-black.vercel.app"
  }
];

// pasos del proceso de trabajo
export const pasos_proceso = [
  {
    titulo_paso: "Me cuentas tu negocio",
    texto_paso: "Me escribes por WhatsApp o por el formulario y hablamos de qué necesitas y a quién quieres llegar."
  },
  {
    titulo_paso: "Diseño y presupuesto",
    texto_paso: "Te propongo un diseño y un presupuesto cerrado. Sin costes ocultos."
  },
  {
    titulo_paso: "Construcción y revisión",
    texto_paso: "Construyo tu web y la revisamos juntos hasta que quede como quieres."
  },
  {
    titulo_paso: "Publicación y formación",
    texto_paso: "La publico con tu dominio y te enseño a usarla y a cambiar lo básico."
  }
];

// planes comerciales de diseño web
// la cuota anual incluye dominio, alojamiento y un numero de cambios pequeños al año
export const planes_precios = [
  {
    id_plan: "plan_basica",
    nombre_plan: "Básica",
    descripcion_plan: "Para empezar a tener presencia en internet.",
    precio_plan: 200,
    nota_impuestos: "Impuestos no incluidos",
    cuota_anual: 60,
    cambios_incluidos: 3,
    destacado: false,
    caracteristicas_incluidas: [
      "Web de una página a partir de una plantilla adaptada",
      "Dominio .com incluido el primer año",
      "Formulario o botón de WhatsApp",
      "Adaptada a móvil",
      "SEO básico para aparecer en Google"
    ]
  },
  {
    id_plan: "plan_recomendada",
    nombre_plan: "Recomendada",
    descripcion_plan: "La opción más elegida por negocios locales.",
    precio_plan: 400,
    nota_impuestos: "Impuestos no incluidos",
    cuota_anual: 90,
    cambios_incluidos: 6,
    destacado: true,
    caracteristicas_incluidas: [
      "Diseño a medida de una página",
      "Colores y estilo adaptados a tu marca",
      "Dominio .com incluido el primer año",
      "Formulario de contacto y botón de WhatsApp",
      "SEO básico y alta en Perfil de Empresa de Google",
      "Alojamiento rápido y certificado SSL"
    ]
  },
  {
    id_plan: "plan_profesional",
    nombre_plan: "Profesional",
    descripcion_plan: "Para negocios que quieren crecer en internet.",
    precio_plan: 1200,
    nota_impuestos: "Impuestos no incluidos",
    cuota_anual: 150,
    cambios_incluidos: 12,
    destacado: false,
    caracteristicas_incluidas: [
      "Web completa de hasta 5 páginas",
      "Diseño 100 % a medida",
      "Dominio .com incluido el primer año",
      "Catálogo, carta o galería de trabajos",
      "SEO local para tu zona",
      "Asesoría de estrategia digital"
    ]
  }
];

// opiniones de clientes reales: la seccion solo se muestra si hay alguna
// formato: { id_testimonio, texto_testimonio, nombre_cliente, negocio_cliente, iniciales, color_avatar }
export const testimonios_clientes = [];

// preguntas frecuentes de la portada
export const preguntas_frecuentes = [
  {
    pregunta: "¿Cuánto tardas en tener lista mi web?",
    respuesta: "Una web de una página está lista en unos 7 días desde que tengo tus textos y fotos. Las webs de varias páginas suelen tardar entre 2 y 3 semanas."
  },
  {
    pregunta: "¿Qué necesito darte?",
    respuesta: "Tu logo si lo tienes, algunas fotos de tu negocio y la información básica: qué ofreces, horarios y cómo contactarte. Si no tienes textos, te ayudo a escribirlos."
  },
  {
    pregunta: "¿Puedo editar la web yo mismo?",
    respuesta: "Sí. Te enseño a cambiar lo básico, como textos, precios u horarios. Para cambios más grandes, puedes contar conmigo."
  },
  {
    pregunta: "¿Qué pasa después de publicarla?",
    respuesta: "A partir del segundo año pagas una cuota anual que incluye el dominio, el alojamiento y varios cambios pequeños según tu plan. Los cambios grandes, como secciones nuevas o rediseños, se presupuestan aparte."
  }
];

// listado de videos educativos del canal de youtube para la academia de desarrollo
export const videos_formacion_youtube = [
  {
    video_id_interno: "yt_001",
    youtube_id_plataforma: "fDOHojEBptw", // Reemplaza por el ID real de tu video de YouTube
    titulo_video: "Como Subir tu sitio web.",
    resumen_video: "Aprende a subir tu sitio web a vercel usando git y github, paso a paso desde cero. Despliega tu proyecto con confianza y sin complicaciones."
  },
  {
    video_id_interno: "yt_002",
    youtube_id_plataforma: "fDOHojEBptw", // Reemplaza por el ID real de tu video de YouTube
    titulo_video: "Como Subir tu sitio web.",
    resumen_video: "Aprende a subir tu sitio web a vercel usando git y github, paso a paso desde cero. Despliega tu proyecto con confianza y sin complicaciones."
  }
];

// listado de videos de la cuenta de tiktok enfocados en comunidad y hobbies geek
export const videos_comunidad_tiktok = [
  {
    tiktok_id_interno: "tk_001",
    tiktok_id_plataforma: "7647847382721252630", // Reemplaza por el ID real del video de tu cuenta de TikTok
    titulo_contenido: "Mostrarles mi setup al inicio y como va obteniendo forma es lo más espectacular que vivo en esta nueva etapa de mi vida.",
    categoria_contenido: "Optimizando mi setup"
  },
  {
    tiktok_id_interno: "tk_002",
    tiktok_id_plataforma: "7647844548336487702", // Reemplaza por el ID real del video de tu cuenta de TikTok
    titulo_contenido: "Luego de finalizar de picar código",
    categoria_contenido: "Tech Tips"
  }
];
