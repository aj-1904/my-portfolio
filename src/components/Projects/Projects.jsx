import React from "react";
import "./Projects.css";
import Header from "../Header/Header";
import FooterLink from "../FooterLink/FooterLink";
import { projectsData } from "./../../assets/projectsData";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="section-container">
      <Header
        heading="My Projects."
        details="Here are few projects I've worked on, do check them out!"
      />

      <div className="project-cards-container">
        {projectsData.map(
          ({ projectName, projectDescription, imageUrl, projectUrl }) => {
            return (
              <ProjectCard
                projectName={projectName}
                projectDescription={projectDescription}
                imageUrl={imageUrl}
                projectUrl={projectUrl}
              />
            );
          }
        )}
      </div>

      <FooterLink phrase="Check out my " link="skills!" toAddress="/skills" />
    </div>
  );
}

export default Projects;
