import React, { useState, useEffect, useRef, forwardRef } from "react";
import Draggable from "react-draggable";
import ProjectCard from "./ProjectCard";
import "./Project.css";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/WaleedAnsari7364/repos")
      .then((response) => response.json())
      .then((data) => {
        const formattedProjects = data.map((repo, index) => ({
          id: `project-${index}`, // Unique ID for each project
          title: repo.name,
          description: repo.description || "No description available.",
          url: repo.html_url,
        }));
        setProjects(formattedProjects);
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <DraggableProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

const DraggableProjectCard = forwardRef(({ project }, ref) => {
  const cardRef = useRef(null);
  const nodeRef = ref || cardRef;

  return (
    <Draggable nodeRef={nodeRef}>
      <div ref={nodeRef} className="draggable-project">
        <ProjectCard
          title={project.title}
          description={project.description}
          url={project.url}
        />
      </div>
    </Draggable>
  );
});

export default Project;
