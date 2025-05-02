import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.css";
// Importa el componente Fade desde react-awesome-reveal
import { Fade } from "react-awesome-reveal";

// **IMPORTANTE: Reemplaza esta data con tus proyectos**
const projectsData = [
  {
    id: 1,
    title: "Proyecto Gamer Web",
    description:
      "Plataforma web para gestionar perfiles de jugadores y torneos online. Desarrollado con React y Node.js.",
    githubLink: "https://github.com/ricardokrm/proyecto-gamer-web",
  },
  {
    id: 2,
    title: "API Restful de Usuarios",
    description:
      "API robusta construida con Spring Boot y PostgreSQL para la gestión de usuarios, autenticación y autorización.",
    githubLink: "https://github.com/ricardokrm/api-usuarios-spring",
  },
  {
    id: 3,
    title: "Chat en Tiempo Real",
    description:
      "Aplicación de chat utilizando WebSockets con Node.js y Express.js.",
    githubLink: "https://github.com/ricardokrm/chat-websockets",
  },
  {
    id: 4,
    title: "Aplicación de E-commerce",
    description:
      "Plataforma de comercio electrónico simple construida con Ruby on Rails.",
    githubLink: "https://github.com/ricardokrm/ecommerce-rails",
  },
  {
    id: 5,
    title: "Dashboard Analítico",
    description:
      "Dashboard interactivo para visualizar datos utilizando React y Firebase como backend.",
    githubLink: "https://github.com/ricardokrm/dashboard-firebase-react",
  },
  {
    id: 6,
    title: "Sistema de Blog",
    description: "Backend para un sistema de blog desarrollado en Java.",
    githubLink: "https://github.com/ricardokrm/java-blog-system",
  },
  {
    id: 7,
    title: "Clon de Sitio Web (Landing Page)",
    description:
      "Recreación de una landing page moderna utilizando HTML y CSS3.",
    githubLink: "https://github.com/ricardokrm/landing-page-clone",
  },
  {
    id: 8,
    title: "Aplicación de Tareas",
    description:
      "Aplicación simple para gestionar tareas construida con JavaScript vanilla y almacenamiento local.",
    githubLink: "https://github.com/ricardokrm/vanilla-todo-app",
  },
  {
    id: 9,
    title: "Microservicio de Notificaciones",
    description:
      "Microservicio basado en Spring Boot para enviar notificaciones por correo electrónico.",
    githubLink: "https://github.com/ricardokrm/notification-microservice",
  },
  {
    id: 10,
    title: "Sistema de Reservas",
    description:
      "API y frontend básico para un sistema de reservas, usando Express.js y React.",
    githubLink: "https://github.com/ricardokrm/booking-system",
  },
];
// **FIN IMPORTANTE**

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      {/* Usamos Fade en lugar de ScrollReveal.div */}
      <Fade duration={800} delay={100} triggerOnce={true}>
        <h2>Proyectos</h2>
      </Fade>
      <div className={styles.projectsGrid}>
        {projectsData.map((project, index) => (
          // Los comentarios problemáticos /*...*/ dentro de la expresión del map han sido eliminados
          <Fade
            key={project.id}
            duration={800}
            delay={100 * (index + 2)}
            triggerOnce={true}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
            />
          </Fade>
        ))}
      </div>
    </section>
  );
}

export default Projects;
