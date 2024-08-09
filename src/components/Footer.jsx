import React from "react";

const Footer = () => {
  return (
    <div className=" text-white py-6 px-4 md:px-16 lg:px-24">
      <div className="flex flex-col items-center">
        <img
          src="./logo.png"
          alt="logo"
          width={100}
          height={30}
          className="mb-4 absolute left-0"
        />
        <div className="flex gap-4 text-primary text-3xl mb-4">
          <a
            href="https://www.linkedin.com/in/murekezi-ismael/"
            className="group relative inline-flex items-center justify-center w-12 h-12 rounded-full hover:bg-white hover:bg-opacity-10 transition ease-in-out duration-300"
          >
            <i className="fab fa-linkedin group-hover:text-white transition ease-in-out duration-300"></i>
          </a>
          <a
            href="https://github.com/Ismaelmurekezi"
            className="group relative inline-flex items-center justify-center w-12 h-12 rounded-full hover:bg-white hover:bg-opacity-10 transition ease-in-out duration-300"
          >
            <i className="fab fa-github group-hover:text-white transition ease-in-out duration-300"></i>
          </a>
          <a
            href="#"
            className="group relative inline-flex items-center justify-center w-12 h-12 rounded-full hover:bg-white hover:bg-opacity-10 transition ease-in-out duration-300"
          >
            <i className="fab fa-twitter-square group-hover:text-white transition ease-in-out duration-300"></i>
          </a>
        </div>
        <span className="flex text-lg text-primary mb-4">Quick links</span>
        <ul className="flex gap-20 py-2  md:flex-row  text-center text-lg mb-4">
          <li className="hover:scale-105 p-4 md:p-0 transition duration-300">
            <a href="#home">Home</a>
          </li>
          <li className="hover:scale-105 p-4 md:p-0 transition duration-300">
            <a href="#about">About</a>
          </li>
          <li className="hover:scale-105 p-4 md:p-0 transition duration-300">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:scale-105 p-4 md:p-0 transition duration-300">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:scale-105 p-4 md:p-0 transition duration-300">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <span className="text-sm ">
          Copyright &copy; Ismael 2024. All rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
