import React from "react";

const Skills = () => {
  return (
    <div className="flex flex-col  mt-24">
      <h3 className="pl-[530px] mb-6 text-primary text-3xl font-semibold ">
        SKILLS
      </h3>
      <div className="flex  flex-col items-center gap-20 justify-center m-auto w-[800px] h-[300px]  flex-wrap bg-dark_blue rounded-2xl">
        <div className="flex items-center gap-16 ">
          <div className="flex flex-col items-center">
            <img src="./html.png" alt="" className="mb-[-35px]" />
            <p className="">HTML</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="./css.png" alt="" className="mb-[-23px]" />
            <p>CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="./javascript.png" alt="" className="mb-[-27px]" />
            <p>Javascript</p>
          </div>
          <div className="flex flex-col items-center ">
            <img src="./ui.png" alt="" className="mb-[-27px]" />
            <p>Figma</p>
          </div>
        </div>
        <div className="flex items-center gap-16 ">
          <div className="flex flex-col items-center">
            <img src="./mongoDB.png" alt="" className="mt-[-40px] mb-[-27px]" />
            <p>MongoDB</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="./Express js.png"
              alt=""
              className="mt-[-40px] mb-[-27px]"
            />
            <p>Express Js</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="./postgreSQL.png"
              alt=""
              className="mt-[-40px] mb-[-27px]"
            />
            <p>PostgreSQL</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="./Python.png" alt="" className="mt-[-40px] mb-[-27px]" />
            <p>Python</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
