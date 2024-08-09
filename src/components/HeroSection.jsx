import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center py-24" id="home">
      <div className=" flex flex-col gap-2 text-center  md:text-left">
        <p className="text-xl md:text-2xl">Hi, I'm </p>
        <p className="text-primary text-3xl md:text-5xl font-semibold">
          MUREKEZI Ismael
        </p>
        <p className="w-full leading-8 md:w-[700px] text-lg md:text-xl pb-7 px-4 md:px-0">
          <span className="text-primary pr-2">Software Developer</span>with a passion
          for crafting engaging digital experiences through intuitive UX/UI
          design and Robust server-side solutions.
        </p>
        <span className="text-primary text-lg md:text-xl">Get in touch</span>
        <div className="flex justify-center md:justify-start gap-3 text-primary text-2xl md:text-4xl pt-4">
          <a
            href="https://www.linkedin.com/in/murekezi-ismael/"
            className="group relative inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full hover:bg-white hover:bg-opacity-10 transition ease-in-out duration-300"
          >
            <i className="fab fa-linkedin group-hover:text-white transition ease-in-out duration-300"></i>
          </a>
          <a
            href="https://github.com/Ismaelmurekezi"
            className="group relative inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full hover:bg-white hover:bg-opacity-10 transition ease-in-out duration-300"
          >
            <i className="fab fa-github group-hover:text-white transition ease-in-out duration-300"></i>
          </a>
          <a
            href="#"
            className="group relative inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full hover:bg-white hover:bg-opacity-10 transition ease-in-out duration-300"
          >
            <i className="fab fa-twitter-square group-hover:text-white transition ease-in-out duration-300"></i>
          </a>
        </div>
      </div>
      <img
        src="./profile.png"
        alt="my-image"
        className="w-48 md:w-64 rounded-full transition ease-in-out duration-300 hover:shadow-primary mt-8 md:mt-0"
      />
    </div>
  );
};

export default HeroSection;
