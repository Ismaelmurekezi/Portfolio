import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "../data/projectsData";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(projectsData.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : totalPages));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : 1));
  };

  const currentItems = projectsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div
      className="flex flex-col  bg-gradient-to-br from-lightdark via-cyan-950 to-black mt-2"
      id="projects"
    >
      <Link to="/">
        <img src="/logo.png" alt="logo" className="" height={40} width={70} />
      </Link>
      <h3 className="pl-36 mb-20 text-primary text-3xl font-semibold">
        PROJECTS
      </h3>
      <div className="relative flex items-center justify-center md:m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32">
          {currentItems.map((project, index) => (
            <ProjectCard key={index} {...project} />
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
          className="w-24  my-7 mr-24 m h-8 text-xs rounded-lg text-primary  ml-4 hover:text-white md:w-36 md:h-10 md:text-base lg:w-40"
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
