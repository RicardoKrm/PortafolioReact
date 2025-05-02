import React from "react";
import styles from "./ProjectCard.module.css";

function ProjectCard({ title, description, githubLink }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.githubButton}
      >
        Ver en GitHub
      </a>
    </div>
  );
}

export default ProjectCard;
