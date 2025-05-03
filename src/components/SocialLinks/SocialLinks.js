import React from "react";
import styles from "./SocialLinks.module.css";
// Puedes instalar una librería de iconos como react-icons:
// npm install react-icons --save
// import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
// Importa los componentes Fade y Zoom
import { Fade, Zoom } from "react-awesome-reveal";

function SocialLinks() {
  // **IMPORTANTE: Reemplaza estos enlaces con tus URLs y la ruta de tu CV**
  const githubUrl = "https://github.com/ricardokrm"; // Reemplaza con tu perfil de GitHub
  const linkedinUrl = "https://www.linkedin.com/in/ricardokrm/"; // Reemplaza con tu perfil de LinkedIn
  const cvDownloadUrl = "/ruta/a/tu/cv.pdf"; // **Reemplaza con la URL o ruta a tu archivo CV**
  // Asegúrate de colocar tu archivo CV (por ejemplo, cv.pdf) en la carpeta 'public' de tu proyecto React.
  // Si está en 'public/documents/cv.pdf', la ruta sería '/documents/cv.pdf'.
  // **FIN IMPORTANTE**

  return (
    <section id="contact" className={styles.socialLinks}>
      {" "}
      {/* Podría ser la sección de contacto/footer */}
      {/* El título se desvanece */}
      <Fade duration={800} triggerOnce={true}>
        <h2>Encuéntrame</h2>
      </Fade>
      <div className={styles.linksContainer}>
        {/* Cada botón hace un zoom con retraso */}
        <Zoom duration={800} delay={100} triggerOnce={true}>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconButton}
          >
            {/* <FaGithub size={30} /> */} {/* Si usas react-icons */}
            GitHub
          </a>
        </Zoom>
        {/* Cada botón hace un zoom con retraso */}
        <Zoom duration={800} delay={200} triggerOnce={true}>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconButton}
          >
            {/* <FaLinkedin size={30} /> */} {/* Si usas react-icons */}
            LinkedIn
          </a>
        </Zoom>
        {/* Cada botón hace un zoom con retraso */}
        <Zoom duration={800} delay={300} triggerOnce={true}>
          <a
            href={cvDownloadUrl}
            download="Ricardokrm_CV"
            className={`${styles.iconButton} ${styles.cvButton}`}
          >
            {/* <FaDownload size={30} /> */} {/* Si usas react-icons */}
            Descargar CV
          </a>
        </Zoom>
      </div>
    </section>
  );
}

export default SocialLinks;
