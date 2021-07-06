import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import NavBar from "../NavBar/NavBar";
import GoHome from "../GoHome/GoHome";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar />
          <Route path="/" component={Home} exact></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/projects" component={Projects}></Route>
          <Route path="/skills" component={Skills}></Route>
          <Route path="/contact" component={Contact}></Route>
          <GoHome />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
