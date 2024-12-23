import React from 'react'
import Header from './src/components/Header';
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Footer from "./src/components/Footer";
import HeroSection from "./src/components/HeroSection";
import Project from "./src/components/Project";
import Services from "./src/components/Services";
import Skills from "./src/components/Skills";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <About />
      <Skills />
      <Services />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home