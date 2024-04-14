import axios from "axios";
import { useEffect, useState } from "react";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const username = "LuisVasquez23";
    const url = `https://api.github.com/users/${username}/repos`;

    axios
      .get(url)
      .then((response) => {
        setProjects(
          response.data.filter((repo) => repo.name !== "LuisVasquez23")
        );
      })
      .catch((error) => {
        console.error("Error al cargar los proyectos de GitHub:", error);
      });
  }, []);

  return (
    <div className="section container animate__animated animate__fadeIn">
      <h3 className="section-title text-end">PROJECTS</h3>
      <div className="container project-container" id="projects">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <div className="project-title">{project.name}</div>
            <div className="project-descripcion">
              {project.description}
              Tecnologías utilizadas:{" "}
              <span className="bold">
                {project.language || "No especificado"}
              </span>
            </div>
            <div className="project-link">
              <a
                className="bold"
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver proyecto
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
