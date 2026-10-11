import React from 'react'

import projects from "../data/Project"
import '../style/Project.css'
import { motion } from "motion/react";

function Projects() {
  return (
    <>
    <div className="section projects" id='projects' data-section>
      <div className="section-title">
        <p>What I've Built</p>
        <h2>My Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          
          <motion.div className="project-card" key={project.title} 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
          >
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
           
          </motion.div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Projects;