import React from "react";
import Header from "./src/components/Header";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Footer from "./src/components/Footer";
import HeroSection from "./src/components/HeroSection";
import Project from "./src/components/Project";
import Skills from "./src/components/Skills";
import ServicesSection from "./src/components/Services";

const Home = () => {
  return (
    <div className=" bg-gradient-to-br from-lightdark via-cyan-950 to-black">
      <Header />
      <HeroSection />
      <About />
      <Skills />
      <ServicesSection />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
