import React from "react";
import FooterLink from "../FooterLink/FooterLink";
import Header from "../Header/Header";
import aboutVector from "./../../assets/about_vector.png";
import "./About.css";
import aboutAnime from "./../../assets/about_anime.gif";

const About = () => {
  return (
    <div className="section-container">
      <Header
        heading="About Me."
        details="Programmer | Front-end developer | Learner"
      />

      <div className="about-main">
        <div className="about-main-left">
          {/* Sub section 1 */}
          <h3 className="about-sub-head">Education</h3>
          <h4>Bachelor of Engineering</h4>
          <p>RGPV University</p>
          <p>Year of Passing: 2018</p>
          <p>CGPA: 7.75</p>

          {/* Sub section 2 */}
          <h3 className="about-sub-head">Current Experience</h3>
          <p className="about-details">
            Currently working as a System Engineer at TCS.{" "}
          </p>
        </div>

        <div className="about-main-right">
          <img src={aboutAnime} alt="animation" className="about-anime" />
        </div>
      </div>

      <FooterLink
        phrase="Check out my "
        link="projects!"
        toAddress="/projects"
      />
      {/* Vector Frame! */}
      <div className="vector-frame">
        <img src={aboutVector} className="about-vector" alt="about" />
      </div>
    </div>
  );
};

export default About;
