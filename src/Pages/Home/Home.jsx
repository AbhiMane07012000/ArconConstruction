import React from "react";
import About from "../About/About";
import Clients from "../Clients/Clients";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Hero from "../../Components/Hero/Hero";

const Home = () => {
  return (
    <>
    <Hero />
    <About />
    <Clients />
    <Projects />
    <Contact />
    </>
  );
};

export default Home;
