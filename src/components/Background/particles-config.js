// src/components/Background/particles-config.js
const particlesConfig = {
  // Fondo general
  background: {
    color: {
      value: "#0a0a1a", // Mismo azul oscuro casi negro que el fondo global
    },
    image: "", // Puedes añadir una imagen de fondo sutil si quieres, deja vacío por ahora
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
    opacity: 1,
  },
  // Frames por segundo
  fpsLimit: 90, // Aumentamos un poco el límite de FPS para fluidez (ajusta si causa lentitud)
  // Interactividad con el ratón
  interactivity: {
    events: {
      onClick: {
        enable: true, // Habilitar efecto al hacer click
        mode: "push", // Modo: empujar/crear nuevas partículas
      },
      onHover: {
        enable: true, // Habilitar efecto al pasar el ratón
        mode: ["repulse", "grab"], // Modos: repeler partículas y agarrarlas/conectar líneas
      },
      resize: true, // Adaptar interactividad al redimensionar
    },
    modes: {
      push: {
        quantity: 4, // Cuántas partículas crear al click
      },
      repulse: {
        distance: 150, // Distancia de repulsión aumentada
        duration: 0.8, // Duración del efecto de repulsión
      },
      grab: {
        distance: 180, // Distancia para "agarrar" y mostrar líneas de conexión más fuertes
        links: {
          opacity: 0.7, // Opacidad de las líneas al "agarrar"
        },
      },
    },
  },
  // Configuración de las partículas
  particles: {
    color: {
      // Utilizamos varios colores de tu paleta gamer para las partículas
      value: ["#e0e0e0", "#00ffff", "#4a00e0", "#8e2de2"], // Gris claro, Cian, Morado vibrante, Morado más claro
    },
    links: {
      // Estilo de las líneas de conexión
      color: "random", // El color de la línea puede ser random entre los colores de las partículas
      distance: 160, // Distancia máxima para que se formen líneas
      enable: true, // Habilitar líneas
      opacity: 0.3, // Opacidad normal de las líneas
      width: 1.5, // Ancho de las líneas ligeramente aumentado
      // Puedes añadir un efecto de brillo a las líneas si te animas con CSS más complejo
    },
    move: {
      direction: "none", // Dirección de movimiento aleatoria
      enable: true, // Habilitar movimiento
      outModes: {
        default: "bounce", // Rebotar en los bordes
      },
      random: true, // Movimiento más aleatorio
      speed: 1.5, // Velocidad del movimiento ajustada
      straight: false, // No moverse en línea recta
      // Añadir rastro
      trail: {
        enable: true, // Habilitar rastro
        length: 8, // Longitud del rastro (cuántos frames se mantienen)
        fillColor: {
          value: "#0a0a1a", // Color del rastro (debe coincidir con el color de fondo)
        },
      },
    },
    number: {
      density: {
        enable: true,
        area: 900, // Área de densidad ajustada
      },
      value: 150, // ¡Número de partículas aumentado significativamente! (Puedes experimentar con este valor)
    },
    opacity: {
      value: { min: 0.3, max: 0.7 }, // Opacidad variable entre partículas
      animation: {
        enable: true,
        speed: 0.5,
        sync: false,
        // mover las partículas con opacidad variable
        startValue: "random",
        destroy: "none",
      },
    },
    shape: {
      type: ["circle", "star"], // Usar círculos y estrellas
      // type: ["circle", "square", "triangle", "star", "polygon"], // Experimenta con otras formas
      // Puedes incluso añadir formas personalizadas con SVGs si quieres ir muy avanzado
    },
    size: {
      value: { min: 0.5, max: 3 }, // Tamaño variable de las partículas
      animation: {
        enable: true,
        speed: 2,
        sync: false,
        startValue: "random",
        // animar el tamaño ligeramente
      },
    },
    // Añadir brillo a las partículas (opcional, requiere CSS)
    // twinkle: { enable: true, speed: 2, opacity: 0.5 }, // Esto puede simular estrellas parpadeando
  },
  // Detectar dispositivos de alta resolución
  detectRetina: true,
};

export default particlesConfig;
