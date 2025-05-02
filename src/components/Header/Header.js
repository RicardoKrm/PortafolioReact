import React from "react";
import styles from "./Header.module.css";
// Importa el componente Fade desde react-awesome-reveal
import { Fade } from "react-awesome-reveal";

function Header() {
  return (
    <header className={styles.header}>
      {/* Usamos Fade en lugar de ScrollReveal.div */}
      <Fade // Fade hace fade-in por defecto
        duration={1000}
        delay={200}
        triggerOnce={true} // Anima solo la primera vez que el elemento entra en la vista
      >
        <h1 className={styles.name}>Ricardokrm</h1>
        <p className={styles.title}>
          Ingeniero en Informática y Desarrollador de Software
        </p>
      </Fade>
    </header>
  );
}

export default Header;
