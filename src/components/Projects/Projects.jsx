import React from "react";
import "./Projects.css";
import Header from "../Header/Header";
import FooterLink from "../FooterLink/FooterLink";

function Projects() {
  return (
    <div className="section-container">
      <Header
        heading="My Projects."
        details="Here are few projects I've worked on, do check them out!"
      />

      <FooterLink phrase="Check out my " link="skills!" toAddress="/skills" />
    </div>
  );
}

export default Projects;
