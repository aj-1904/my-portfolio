import React from "react";
import "./Skills.css";
import Header from "../Header/Header";
import FooterLink from "../FooterLink/FooterLink";
import skillsVector from "./../../assets/skills_vector.png";
import { skillList } from "../../assets/skillsData";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <div className="section-container">
      <Header
        heading="My Skills"
        details="Passionate about new technologies.Here's the tech stack I've worked with"
      />

      <div className="skills-card-container">
          {
            skillList.map(skill => {
              return <SkillCard skillName={skill.skillName} skillUrl={skill.skillUrl}/>
            })
          }
      </div>
      
      <FooterLink phrase="Get in " link="touch." toAddress="/contact" />
      <div className="skills-vector-frame">
        <img src={skillsVector} alt="skills" className="skills-vector" />
      </div>
    </div>
  );
}

export default Skills;
