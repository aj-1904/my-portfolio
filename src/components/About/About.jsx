import React from "react";
import "./About.css";
import Header from "../Header/Header";
import aboutVector from "./../../assets/about_vector.png";

function About() {
  return (
    <div className="section-container">
      <Header
        heading="About Me"
        details="Programmer | Aspiring front-end developer"
      />

      {/* vector frame */}
      <div className="vector-frame">
        <img src={aboutVector} className="about-vector" alt="about" />
      </div>
    </div>
  );
}

export default About;
