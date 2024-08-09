import React from "react";

const Skills = () => {
  return (
    <div className="flex flex-col mt-24 items-center" id="skills">
      <h3 className="text-primary pt-10 text-3xl font-semibold mb-6 text-center md:text-left md:pl-10">
        SKILLS
      </h3>
      <div className="flex flex-col items-center gap-12 justify-center w-full max-w-4xl px-4 md:px-0 bg-dark_blue rounded-2xl py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-16">
          <div className="flex flex-col items-center">
            <img src="./html.png" alt="HTML" className="mb-[-10px]" />
            <p className="text-lg">HTML</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="./css.png" alt="CSS" className="mb-2" />
            <p className="text-lg">CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="./javascript.png" alt="Javascript" className="mb-2" />
            <p className="text-lg">Javascript</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="./ui.png" alt="Figma" className="mb-2" />
            <p className="text-lg">Figma</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-16">
          <div className="flex flex-col items-center">
            <img src="./mongoDB.png" alt="MongoDB" className="mb-2" />
            <p className="text-lg">MongoDB</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="./Express js.png" alt="Express Js" className="mb-2" />
            <p className="text-lg">Express Js</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="./postgreSQL.png" alt="PostgreSQL" className="mb-2" />
            <p className="text-lg">PostgreSQL</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="./Python.png" alt="Python" className="mb-2" />
            <p className="text-lg">Python</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
