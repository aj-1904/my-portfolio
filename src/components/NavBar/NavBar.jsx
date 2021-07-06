import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link, withRouter } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    const { location } = this.props;

    const homeClass = location.pathName === "/" ? "active-item" : "";
    const aboutClass = location.pathName === "/about" ? "active-item" : "";
    const projectsClass = location.pathName === "/projects" ? "active-item" : "";
    const skillsClass = location.pathName === "/skills" ? "active-item" : "";
    const contactClass = location.pathName === "/contact" ? "active-item" : "";

    return (
      <Menu>
        {/* We never want to use <a> inside our react router application */}
        {/* <a id="home" className="menu-item" href="/">
          Home
        </a> */}
        <Link to="/" className={`menu-item ${homeClass}`}>
          Home
        </Link>
        <Link to="/about" className={`menu-item ${aboutClass}`}>
          About
        </Link>
        <Link to="/projects" className={`menu-item ${projectsClass}`}>
          Projects
        </Link>
        <Link to="/skills" className={`menu-item ${skillsClass}`}>
          Skills
        </Link>
        <Link to="/contact" className={`menu-item ${contactClass}`}>
          Contact
        </Link>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
