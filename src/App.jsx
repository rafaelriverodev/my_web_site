// componente principal de orquestacion y layout de la aplicacion web
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Tutorials } from './components/Tutorials';
import { Community } from './components/Community';
import { Contact } from './components/Contact';

// definicion de la funcion constructora del layout global de la pagina
function App() {
  // estructura semantica de la interfaz dividida por modulos independientes
  const estructura_layout_principal = (
    <>
      {/* barra de navegacion fija superior para la gestion de rutas */}
      <Navbar />
      
      <main>
        {/* seccion de impacto de presentacion profesional con el stack tecnologico */}
        <Hero />
        
        {/* modulo comercial enfocado a la venta del plan landing page por 400 euros */}
        <Services />
        
        {/* modulo de proyectos de programacion y desarrollo de software libre */}
        <Projects />
        
        {/* academia educativa con integracion blindada del canal de youtube */}
        <Tutorials />
        
        {/* feed vertical estilo smartphone con integracion de tiktok y hobbies geek */}
        <Community />
        
        {/* formulario de contacto seguro validado para la captacion de clientes */}
        <Contact />
      </main>
    </>
  );

  return estructura_layout_principal;
}

export default App;