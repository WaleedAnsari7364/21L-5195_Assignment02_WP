import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, url }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noreferrer">View on GitHub</a>
    </div>
  );
};

export default ProjectCard;
