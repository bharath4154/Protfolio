import React from "react";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import SocialLinks from "./socialLinks/SocialLinks";

const p = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <SocialLinks />
    </div>
  );
};

export default p;
