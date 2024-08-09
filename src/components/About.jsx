import React from "react";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center pt-24 bg-lightdark pb-10 text-center md:text-left">
      <img
        src="/profile.png"
        alt="my-image"
        className="w-32 md:w-36 rounded-full mb-8 md:mb-0"
      />
      <div className="md:max-w-[800px]">
        <h4 className="text-xl md:text-2xl text-primary font-medium pb-4">
          About Me
        </h4>
        <p className="text-lg md:text-xl px-4 md:px-0">
          I'm Ismael, a{" "}
          <span className="font-semibold">Software Developer</span> specializing
          in both Frontend and Backend Web Development. I have a passion for
          crafting engaging digital experiences through intuitive UX/UI design
          and robust server-side solutions. I am eager to leverage my skills in
          HTML, CSS, JavaScript, Figma, Adobe XD, Node.js, Express.js, and
          MongoDB to contribute to innovative projects and expand my knowledge
          in the dynamic world of web development.
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
