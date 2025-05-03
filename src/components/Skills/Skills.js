import React from "react";
import styles from "./Skills.module.css";
// Importa los componentes Fade y Flip - Asegúrate de que ambos estén importados si los usas
import { Fade, Flip } from "react-awesome-reveal";

// Tu lista de tecnologías
const technologies = [
  "HTML",
  "CSS3",
  "JavaScript",
  "ReactJS",
  "ExpressJS",
  "Java",
  "SpringBoot",
  "NodeJS",
  "Ruby on Rails",
  "PostgreSQL",
  "Firebase",
  "MySQL",
  "WebSockets",
];

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      {/* El título se desvanece al aparecer */}
      <Fade duration={800} delay={100} triggerOnce={true}>
        <h2>Tecnologías y Habilidades</h2>
      </Fade>
      <div className={styles.skillsList}>
        {technologies.map((skill, index) => (
          // Asegúrate de que cada skill esté envuelta en el componente de animación (<Flip> en este caso)
          // Y que tenga la prop 'key' única
          <Flip
            key={skill}
            duration={600}
            delay={50 * (index + 3)}
            triggerOnce={true}
          >
            {/* Este es el elemento visual de la píldora */}
            <span className={styles.skillItem}>{skill}</span>
          </Flip>
        ))}
      </div>
    </section>
  );
}

export default Skills;
