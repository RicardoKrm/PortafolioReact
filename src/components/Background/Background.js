import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // o loadFull para más efectos
import particlesConfig from "./particles-config"; // Importa la configuración
import styles from "./Background.module.css"; // Estilos para el contenedor del fondo

function Background() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // Puedes iniciar el motor de tsParticles (o el slim) aquí.
    // loadFull o loadSlim es importante para cargar los renderizadores de partículas.
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className={styles.backgroundContainer}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig} // Usa la configuración importada
      />
    </div>
  );
}

export default Background;
