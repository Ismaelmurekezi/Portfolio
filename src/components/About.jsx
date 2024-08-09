import React from "react";

const About = () => {
  return (
    <div
      className="flex flex-col h-[400px]  md:flex-row justify-around items-center pt-24 bg-lightdark pb-10 text-center md:text-left"
      id="about"
    >
      <img
        src="/profile.png"
        alt="my-image"
        className="w-32 md:w-36 rounded-full mb-8 md:mb-0"
      />
      <div className="md:max-w-[800px]">
        <h4 className="text-xl md:text-2xl text-primary font-medium pb-4">
          About Me
        </h4>
        <p className="w-[800px] text-xl leading-8">
          I'm Ismael <span className="text-primary">Software Developer</span>  with a passion for crafting engaging digital experiences
          through intuitive UX/UI design and Robust server-side solutions. Eager
          to leverage my skills by building  innovative projects
         
        </p>
        <a
          href="https://drive.google.com/file/d/1QBNPMXRI3PvvRfVyUASDtdggPqK_43Gx/view?usp=sharing"
          className="inline-block"
        >
          <button className="w-56 md:w-72 h-12 text-lg rounded-sm bg-primary mt-6 md:mt-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-transparent hover:border-primary hover:border-2 duration-300">
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
