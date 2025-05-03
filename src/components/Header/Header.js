import React from "react";
import styles from "./Header.module.css";
// Importa el componente Slide (y Fade si quieres combinar)
import { Slide } from "react-awesome-reveal";

function Header() {
  return (
    <header className={styles.header}>
      {/* Usamos Slide desde arriba */}
      <Slide direction="down" duration={1000} delay={200} triggerOnce={true}>
        <h1 className={styles.name}>Ricardokrm</h1>
        <p className={styles.title}>
          Ingeniero en Informática y Desarrollador de Software
        </p>
      </Slide>
    </header>
  );
}

export default Header;
