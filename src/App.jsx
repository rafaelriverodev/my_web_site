// componente principal de orquestacion y layout de la aplicacion web
import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { Services } from './components/Services';
import { Faq } from './components/Faq';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Tutorials } from './components/Tutorials';
import { Community } from './components/Community';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

// definicion de la funcion constructora del layout global de la pagina
function App() {
  // aparicion suave de los bloques marcados con la clase reveal al hacer scroll
  useEffect(() => {
    document.documentElement.classList.add('js');

    const observador_scroll = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('is-visible');
          observador_scroll.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach((elemento) => observador_scroll.observe(elemento));

    // si la url llega con un ancla (#precios), baja a esa seccion cuando ya existe en el dom
    if (window.location.hash) {
      document.querySelector(window.location.hash)?.scrollIntoView();
    }

    return () => observador_scroll.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <main>
        {/* propuesta de valor y llamadas a la accion principales */}
        <Hero />

        {/* webs de ejemplo por sector */}
        <Projects />

        {/* pasos del proceso de trabajo */}
        <Process />

        {/* planes y precios */}
        <Services />

        {/* testimonios y preguntas frecuentes */}
        <Faq />

        {/* presentacion personal */}
        <About />

        {/* formulario de contacto conectado a emailjs */}
        <Contact />

        {/* contenido secundario al final: los videos solo cargan al hacer clic */}
        <Tutorials />
        <Community />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
