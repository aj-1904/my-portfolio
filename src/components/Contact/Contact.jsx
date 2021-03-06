import React from "react";
import "./Contact.css";
import Header from "../Header/Header";
import FooterLink from "../FooterLink/FooterLink";
import contactVector from "./../../assets/contact_anime.png";
import github from "./../../assets/gh.png";
import linkedin from "./../../assets/li.png";

function Contact() {
  return (
    <div className="section-container">
      <Header
        heading="Get in touch."
        details="Feel free to drop me an email!"
      />
      {/* form section */}
      <div className="contact-form-container">
        <form
          className="contact-form"
          action="https://formspree.io/f/xvodwqqk"
          method="POST"
        >
          {/* email id input */}
          <input
            type="email"
            placeholder="Your Email ID"
            name="_replyto"
            className="input-box email-input"
          />

          {/* email body */}
          <textarea
            type="text"
            placeholder="Your Message"
            name="message"
            className="input-box
            body-input"
          />

          {/* submit button */}
          <button type="submit" className="contact-btn">
            Send Email
          </button>
        </form>
      </div>

      {/* social icons */}
      <div className="social-icons-container">
        <a href="https://github.com/aj-1904" className="social-icon">
          <img src={github} alt="social" />
        </a>
        <a
          href="https://www.linkedin.com/in/ayush-jain-190495/"
          className="social-icon"
        >
          <img src={linkedin} alt="social" />
        </a>
      </div>
      <FooterLink phrase="Read more " link="about me!" toAddress="/about" />

      <div className="vector-frame">
        <img src={contactVector} alt="vector" className="about-vector" />
      </div>
    </div>
  );
}

export default Contact;
