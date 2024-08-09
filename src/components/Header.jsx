import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex justify-between items-center py-4 px-6">
      <img src="/logo.png" alt="logo" width={100} height={30} />

      <div className="md:hidden z-10">
        <button onClick={toggleMenu} className="focus:outline-none ">
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>

      <nav
        className={`md:flex ${
          isOpen ? "block" : "hidden"
        } absolute md:static top-16 left-0 w-full md:w-auto bg-dark_blue md:bg-transparent`}
      >
        <ul className="flex flex-col text-primary mr-40 text-2xl md:flex-row md:gap-24 py-10 md:py-0">
          <li className="hover:scale-105 p-4 md:p-0 transition duration-300">
            <a
              href="#home"
              className="hover:text-white transition duration-300"
            >
              Home
            </a>
          </li>
          <li className="hover:scale-105 p-4 md:p-0 transition duration-300">
            <a
              href="#about"
              className="hover:text-white transition duration-300"
            >
              About
            </a>
          </li>
          <li className="hover:scale-105 p-4 md:p-0 transition duration-300">
            <a
              href="#projects"
              className="hover:text-white transition duration-300"
            >
              Projects
            </a>
          </li>
          <li className="hover:scale-105 p-4 md:p-0 transition duration-300">
            <a
              href="#skills"
              className="hover:text-white transition duration-300"
            >
              Skills
            </a>
          </li>
          <li className="hover:scale-105 p-4 md:p-0 transition duration-1000">
            <a
              href="#contact"
              className="hover:text-white transition duration-1000"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
