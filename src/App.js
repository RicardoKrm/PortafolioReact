import React from "react";
import styles from "./styles/App.module.css"; // Puedes tener estilos para App si necesitas
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import Background from "./components/Background/Background"; // Importa el fondo

function App() {
  return (
    <div className={styles.appContainer}>
      <Background /> {/* Agrega el componente de fondo */}
      <Header />
      <main>
        {" "}
        {/* Usa la etiqueta main para el contenido principal */}
        <About />
        <Projects />
        <Skills />
      </main>
      <SocialLinks /> {/* O puede ser un footer */}
    </div>
  );
}

export default App;
