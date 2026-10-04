import React from 'react'

import projects from "../data/Project"
// import "./Projects.css";

function Projects() {
  return (
    <>
    <div className="section projects">
      <div className="section-title">
        <p>What I've Built</p>
        <h2>My Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-image">
              <img src={project.image} alt="" />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-buttons">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Projects;