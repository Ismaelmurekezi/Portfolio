import React from 'react'

const Footer = () => {
  return (
    <div className="flex relative">
      <img
        src="./logo.png"
        alt=""
        width={100}
        height={30}
        className="absolute left-0"
      />
      <div className="flex flex-col items-center m-auto ">
        <div className="flex gap-4 text-primary text-4xl pt-4">
          <a
            href="https://www.linkedin.com/in/murekezi-ismael/"
            className="group relative inline-flex items-center justify-center w-16 h-16 rounded-full hover:bg-white hover:bg-opacity-10 transition ease-in-out duration-300"
          >
            <i className="fab fa-linkedin group-hover:text-white transition ease-in-out duration-300"></i>
          </a>
          <a
            href="https://github.com/Ismaelmurekezi"
            className="group relative inline-flex items-center justify-center w-16 h-16 rounded-full hover:bg-white hover:bg-opacity-10 transition ease-in-out duration-300"
          >
            <i className="fab fa-github group-hover:text-white transition ease-in-out duration-300"></i>
          </a>
          <a
            href="#"
            className="group relative inline-flex items-center justify-center w-16 h-16 rounded-full hover:bg-white hover:bg-opacity-10 transition ease-in-out duration-300"
          >
            <i className="fab fa-twitter-square group-hover:text-white transition ease-in-out duration-300"></i>
          </a>
        </div>
        <span className="text-xl text-primary">Quick link</span>
        <ul className="flex  gap-16 text-lg py-4 hover:scale-105 ">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
        <span>copyright &copy; Ismael 2024.All rights Reserved.</span>
      </div>
    </div>
  );
}

export default Footer