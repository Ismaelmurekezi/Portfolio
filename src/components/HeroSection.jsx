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
        <div className="flex gap-4 text-primary text-4xl pt-4 ">
          <a href="https://www.linkedin.com/in/murekezi-ismael/ ">
            <i className="fab fa-linkedin " ></i>
          </a>
          <a href="https://github.com/Ismaelmurekezi">
            <i className="fab fa-github"></i>
          </a>
          <a href="">
            <i className="fab fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <img
        src="./profile.png"
        alt="my-image"
        width={250}
        className="rounded-full"
      />
    </div>
  );
};

export default HeroSection;
