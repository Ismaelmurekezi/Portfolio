import React, { useState } from "react";

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      imgSrc: "/crafters.png",
      title: "Crafters Online shop",
      siteLink: "https://crafter-shop.netlify.app/",
      codeLink: "#",
    },
    {
      imgSrc: "/country-app.png",
      title: "Country app",
      siteLink: "https://ismaelmurekezi.github.io/Countries-App/",
      codeLink: "#",
    },
    {
      imgSrc: "/calculator1.png",
      title: "Calculator",
      siteLink: "https://ismaelmurekezi.github.io/Calculator/",
      codeLink: "#",
    },
    {
      imgSrc: "/weatherapp.png",
      title: "Weather app",
      siteLink: "https://ismaelmurekezi.github.io/Weather-App/",
      codeLink: "#",
    },
    {
      imgSrc: "/Etch-a-sketch.png",
      title: "Etch-a-sketch",
      siteLink: "https://ismaelmurekezi.github.io/Etch-a-Sketch/",
      codeLink: "https://github.com/Ismaelmurekezi/Portfolio.git",
    },
    {
      imgSrc: "/Slack.png",
      title: "Slack login UI",
      siteLink: "https://ismaelmurekezi.github.io/slack-login/",
      codeLink: "https://github.com/Ismaelmurekezi/slack-login.git",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, projects.length - 3) : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= projects.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="mt-28">
      <h3 className="pl-20 mb-6 text-primary text-3xl font-semibold">
        PROJECTS
      </h3>
      <div className="relative flex items-center justify-center">
        <img
          src="/left-arrow.png"
          alt="Previous"
          width={50}
          onClick={handlePrev}
          className="cursor-pointer absolute left-0 text-white"
        />
        <div className="flex overflow-hidden w-full justify-around">
          {projects
            .slice(currentIndex, currentIndex + 3)
            .map((project, index) => (
              <div
                key={index}
                className="max-w-[500px] max-h-[400px] flex flex-col relative bg-dark_blue mx-4 my-7"
              >
                <img
                  src={project.imgSrc}
                  alt=""
                  className="max-w-[500px] max-h-[250px]"
                  height={350}
                  width={500}
                />
                <p className="text-primary text-lg pt-4 font-medium pl-4">
                  {project.title}
                </p>
                <button className="w-56 my-3 h-11 rounded-lg text-primary border-[1px] border-primary ml-4 hover:bg-primary hover:text-white">
                  <a href={project.siteLink}>
                   
                    Visit site<i className="fa-solid fa-arrow-right pl-4"></i>
                  </a>
                </button>
                <div className="self-end absolute bottom-4">
                  <a href={project.codeLink}>
                  <i className="fa-brands fa-github text-xl"></i>
                  <span className="px-3">View code</span>

                  </a>
                </div>
              </div>
            ))}
        </div>
        <img
          src="/right-arrow.png"
          alt="Next"
          width={50}
          onClick={handleNext}
          className="cursor-pointer absolute right-0"
        />
      </div>
    </div>
  );
};

export default Project;
