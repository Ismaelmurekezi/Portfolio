import { ProjectCard } from "./ProjectCard";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";

function Project() {
  const projects = projectsData.slice(0, 3);

  return (
    <div>
      <div
        className="w-full flex gap-3 flex-col mt-10  py-12 px-4 sm:px-6 lg:px-8"
        id="project"
      >
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-4">My Projects</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            A collection of my recent work showcasing web development expertise
            and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <Link
          to="/projects"
          className=" w-52 py-3 mt-4 rounded-xl self-end mr-20 text-center bg-primary text-white"
        >
          View More
        </Link>
      </div>
    </div>
  );
}

export default Project;
