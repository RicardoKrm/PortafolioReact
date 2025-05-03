import React from "react";
import styles from "./About.module.css";
import { Slide } from "react-awesome-reveal";

// IMPORTANTE: Reemplaza esta línea con la ruta real de tu foto.
// Si pones tu foto (ej: mi-foto.jpg) en la carpeta 'public', la ruta sería '/mi-foto.jpg'.
// Si la pones en 'public/images/mi-foto.jpg', la ruta sería '/images/mi-foto.jpg'.
const photoPath = "/ruta/a/tu/foto.jpg";

function About() {
  return (
    <section id="about" className={styles.about}>
      {/* La animación Slide aplica a toda la sección */}
      <Slide direction="left" duration={800} triggerOnce={true}>
        <h2>Sobre Mí</h2>
        {/* Contenedor para organizar la foto y el texto lado a lado (o apilados en móvil) */}
        <div className={styles.aboutContent}>
          {/* Tu Foto */}
          {/* IMPORTANTE: Asegúrate de que el archivo de la foto exista en la ruta especificada arriba */}
          <img
            src={photoPath}
            alt="Foto de Ricardokrm"
            className={styles.aboutPhoto}
          />

          {/* Contenedor para el texto de la descripción */}
          <div className={styles.aboutText}>
            <p>
              {/* **IMPORTANTE: Reemplaza este texto con tu propia descripción resumida** */}
              Soy Ricardokrm, un Ingeniero en Informática y Desarrollador de
              Software. Me apasiona construir soluciones robustas y elegantes,
              combinando mi formación técnica con una constante búsqueda de
              nuevas tecnologías. Disfruto transformando ideas en código
              funcional y visualmente atractivo. Mi enfoque es crear software
              eficiente que resuelva problemas reales y ofrezca una excelente
              experiencia de usuario. Siempre estoy aprendiendo y explorando los
              últimos avances en el mundo de la tecnología.
              {/* **FIN IMPORTANTE - Intenta que sea conciso para este layout** */}
            </p>
          </div>
        </div>
      </Slide>
    </section>
  );
}

export default About;
