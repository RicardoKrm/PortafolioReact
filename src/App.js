import React from "react";
import styles from "./styles/App.module.css"; // Puedes tener estilos para App si necesitas
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills"; // <--- Importación de Skills
import SocialLinks from "./components/SocialLinks/SocialLinks";
import Background from "./components/Background/Background"; // Importa el fondo
import GridOverlay from "./components/GridOverlay/GridOverlay"; // <--- Importa el componente GridOverlay

function App() {
  return (
    <div className={styles.appContainer}>
      <Background /> {/* Agrega el componente de fondo (capa 0) */}
      <GridOverlay /> {/* Agrega el overlay de cuadrícula (capa 1) */}
      <Header /> {/* Contenido principal (capa 2) */}
      <main>
        {" "}
        {/* Usa la etiqueta main para el contenido principal */}
        <About /> {/* <--- Sección Sobre Mí */}
        <Projects /> {/* <--- Sección Proyectos (¡solo UNA vez!) */}
        <Skills />{" "}
        {/* <--- Sección Habilidades (¡asegúrate de que esté aquí y descomentada!) */}
      </main>
      <SocialLinks /> {/* O puede ser un footer */}
    </div>
  );
}

export default App;
