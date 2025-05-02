// src/components/Background/particles-config.js
const particlesConfig = {
  background: {
    color: {
      value: "#0a0a1a", // Mismo azul oscuro que el fondo global
    },
  },
  fpsLimit: 60, // Limita los frames por segundo
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push", // Crea nuevas partículas al hacer click
      },
      onHover: {
        enable: true,
        mode: "repulse", // Aleja las partículas al pasar el ratón
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 100, // Distancia de repulsión
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#e0e0e0", // Color de las partículas (estrellas)
      // value: ["#e0e0e0", "#00ffff", "#4a00e0"], // Puedes usar múltiples colores
    },
    links: {
      color: "#3a3a5a", // Color de las líneas (simulan conexiones o código)
      distance: 150,
      enable: true,
      opacity: 0.3,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1, // Velocidad del movimiento
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80, // Número de partículas
    },
    opacity: {
      value: 0.5, // Opacidad de las partículas
    },
    shape: {
      type: "circle", // Forma de las partículas
      // type: ["circle", "triangle", "star"], // Puedes usar múltiples formas
    },
    size: {
      value: { min: 1, max: 3 }, // Tamaño de las partículas
    },
  },
  detectRetina: true,
};

export default particlesConfig;
