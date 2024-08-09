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
          className="mb-4"
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
        <span className="text-lg text-primary mb-4">Quick links</span>
        <ul className="flex flex-col md:flex-row gap-6 text-center text-lg mb-4">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <span className="text-sm text-primary">
          &copy; Ismael 2024. All rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
