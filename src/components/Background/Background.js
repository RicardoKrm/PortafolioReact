import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Puedes usar loadFull si necesitas más funcionalidades de tsParticles
import particlesConfig from "./particles-config"; // Importa la configuración de partículas
import styles from "./Background.module.css"; // Estilos para el contenedor del fondo

function Background() {
  // Callback para inicializar tsParticles
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine); // Esta línea ha sido comentada para evitar advertencias
    await loadSlim(engine); // Carga el motor slim (o full) de tsParticles
  }, []);

  // Callback que se ejecuta cuando tsParticles se carga completamente
  const particlesLoaded = useCallback(async (container) => {
    // console.log(container); // Esta línea ha sido comentada para evitar advertencias
  }, []);

  return (
    <div className={styles.backgroundContainer}>
      <Particles
        id="tsparticles" // ID del canvas
        init={particlesInit} // Función de inicialización
        loaded={particlesLoaded} // Función que se ejecuta al cargar
        options={particlesConfig} // Configuración visual de las partículas
      />
    </div>
  );
}

export default Background;
