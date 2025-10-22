import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;


  const projects = [
    {
      imgSrc: "/AdminDashboard.png",
      title: "IoT Early warning system",
      siteLink: "https://ibhews.netlify.app/",
      codeLink: "https://github.com/Ismaelmurekezi/ShieldUp-be.git",
    },
    {
      imgSrc: "/crafters.png",
      title: "Crafters Online shop",
      siteLink: "https://crafter-shop.netlify.app/",
      codeLink: "#",
    },
    {
      imgSrc: "/careercampus.png",
      title: "Career Compass",
      siteLink: "  https://career-comp.netlify.app/",
      codeLink: "#",
    },
    {
      imgSrc: "/trakit.png",
      title: "Trakit",
      siteLink: "  https://trakitapp.vercel.app/",
      codeLink: "https://github.com/Ismaelmurekezi/Trakit_app.git",
    },
    {
      imgSrc: "/country-app.png",
      title: "Country app",
      siteLink: "https://ismaelmurekezi.github.io/Countries-App/",
      codeLink: "https://github.com/Ismaelmurekezi/Countries-App.git",
    },
    {
      imgSrc: "/calculator1.png",
      title: "Calculator",
      siteLink: "https://ismaelmurekezi.github.io/Calculator/",
      codeLink: "https://github.com/Ismaelmurekezi/Calculator.git",
    },
    {
      imgSrc: "/weatherapp.png",
      title: "Weather app",
      siteLink: "https://ismaelmurekezi.github.io/Weather-App/",
      codeLink: "https://github.com/Ismaelmurekezi/Weather-App.git",
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
    {
      imgSrc: "/mern-auth.png",
      title: "MERN AUTH",
      siteLink: "",
      codeLink: "https://github.com/Ismaelmurekezi/Auth.git",
    },
    {
      imgSrc: "/Admin-dashboard.png",
      title: "Iwork",
      siteLink: "#",
      codeLink: "https://github.com/Ismaelmurekezi/Iwork.git",
    },
  ];

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : totalPages));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : 1));
  };

  const currentItems = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col mt-2" id="projects">
      <Link to="/">
        <img src="/logo.png" alt="logo" className="" height={40} width={70} />
      </Link>
      <h3 className="pl-20 mb-6 text-primary text-3xl font-semibold">
        PROJECTS
      </h3>
      <div className="relative flex items-center justify-center pb-10 md:m-auto">
        <div className="flex overflow-hidden flex-wrap justify-center gap-6 w-full mx-4">
          {currentItems.map((project, index) => (
            <div
              key={index}
              className="w-[450px] md:w-[500px] lg:w-[500px] max-h-[400px] flex flex-col rounded-md relative bg-dark_blue mx-4 my-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-cyan-500/50 duration-300"
            >
              <img
                src={project.imgSrc}
                alt=""
                className="max-w-full max-h-[250px]"
              />
              <p className="text-primary text-lg pt-4 font-medium pl-4">
                {project.title}
              </p>
              <button className="w-32 my-3 h-9 rounded-lg text-primary border-[1px] border-primary ml-4 hover:bg-primary hover:text-white lg:w-40">
                <a href={project.siteLink}>
                  Visit site<i className="fa-solid fa-arrow-right pl-4"></i>
                </a>
              </button>
              <div className="self-end absolute bottom-4 hover:text-primary">
                <a href={project.codeLink}>
                  <i className="fa-brands fa-github text-xl"></i>
                  <span className="px-3">Github</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <span className="self-end">
        <button
          className="w-24  mb-7 mr-4 h-8 text-xs rounded-lg text-primary  ml-4 hover:text-white md:w-36 md:h-10 md:text-base lg:w-40"
          onClick={handlePrev}
        >
          <Link>
            <i class="fa-solid fa-arrow-left"></i> Previous
          </Link>
        </button>
        <span className="text-white text-xs font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="w-24  mb-7 mr-11 h-8 text-xs rounded-lg text-primary  ml-4 hover:text-white md:w-36 md:h-10 md:text-base lg:w-40"
          onClick={handleNext}
        >
          <Link>
            Next<i className="fa-solid fa-arrow-right pl-4"></i>
          </Link>
        </button>
      </span>
      <Footer />
    </div>
  );
};

export default Projects;
