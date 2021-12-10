
import React from "react";
import Navbar from "./navbar";
import Hero from "./components/hero";
import AboutMe from "./components/aboutMe";
import TechStack from "./components/techStack";
import Project from "./components/projects";
import Contact from "./components/contactForm";

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <AboutMe/>
    <TechStack/>
    <Project/>
    <Contact/>
    </>
  );
}

export default App;

