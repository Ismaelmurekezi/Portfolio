import React from "react";

const HeroSection = () => {
  return (
    <div className="flex justify-around items-center py-24">
      <div>
        <p className="text-2xl"> Hi, My name is</p>
        <p className="text-primary text-5xl font-semibold">MUREKEZI Ismael</p>
        <p className="w-[800px] text-xl pb-7">
          <span className="text-primary pr-2"> Software Developer</span>with a
          passion for crafting engaging digital experiences through intuitive
          UX/UI design. Eager to leverage my skills in HTML, CSS, JavaScript, to
          contribute to innovative projects in the dynamic world of web
          development.
        </p>
        <span className="text-primary text-xl">Get in touch</span>
        <div className="flex gap-4 text-primary text-4xl pt-4">
          <a
            href="https://www.linkedin.com/in/murekezi-ismael/"
            className="group relative inline-flex items-center justify-center w-16 h-16 rounded-full hover:bg-white hover:bg-opacity-10 transition ease-in-out duration-300"
          >
            <i className="fab fa-linkedin group-hover:text-white transition ease-in-out duration-300"></i>
          </a>
          <a
            href="https://github.com/Ismaelmurekezi"
            className="group relative inline-flex items-center justify-center w-16 h-16 rounded-full hover:bg-white hover:bg-opacity-10 transition ease-in-out duration-300"
          >
            <i className="fab fa-github group-hover:text-white transition ease-in-out duration-300"></i>
          </a>
          <a
            href="#"
            className="group relative inline-flex items-center justify-center w-16 h-16 rounded-full hover:bg-white hover:bg-opacity-10 transition ease-in-out duration-300"
          >
            <i className="fab fa-twitter-square group-hover:text-white transition ease-in-out duration-300"></i>
          </a>
        </div>
      </div>
      <img
        src="./profile.png"
        alt="my-image"
        width={250}
        className="rounded-full transition ease-in-out duration-300 hover:shadow-primary"
      />
    </div>
  );
};

export default HeroSection;
