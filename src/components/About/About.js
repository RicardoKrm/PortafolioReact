import React from "react";
import styles from "./About.module.css";
// Importa el componente Fade desde react-awesome-reveal
import { Fade } from "react-awesome-reveal";

function About() {
  return (
    <section id="about" className={styles.about}>
      {/* Usamos Fade en lugar de ScrollReveal.div */}
      <Fade duration={800} triggerOnce={true}>
        <h2>Sobre Mí</h2>
        <p>
          {/* **IMPORTANTE: Reemplaza este texto con tu propia descripción** */}
          Soy Ricardokrm, un Ingeniero en Informática apasionado por el
          desarrollo de software. Con experiencia en diversas tecnologías,
          disfruto construyendo soluciones eficientes y escalables. Mi enfoque
          se centra en la resolución de problemas y la creación de experiencias
          de usuario excepcionales, combinando un fuerte conocimiento técnico
          con creatividad. Estoy siempre aprendiendo y explorando nuevas
          herramientas y metodologías para mantenerme a la vanguardia de la
          industria.
          {/* **FIN IMPORTANTE** */}
        </p>
      </Fade>
    </section>
  );
}

export default About;
