import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full flex justify-between items-center py-4">
      <img src="/logo.png" alt="logo" className="" height={40} width={70} />

      <div className="md:hidden z-10 pr-2">
        <button onClick={toggleMenu} className="focus:outline-none ">
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>

      <nav
        className={`md:flex ${
          isOpen ? "block" : "hidden"
        } absolute md:static top-[75px] right-2 w-[35%] md:w-auto bg-dark_blue md:bg-transparent`}
      >
        <ul className="flex flex-col mr-32 text-primary text-xl md:flex-row md:gap-10 md:mr-10 lg:mr-32 lg:gap-24">
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
          <li className="hover:scale-105 p-4 md:p-0 transition duration-300">
            <a
              href="#contact"
              className="hover:text-white transition duration-300"
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
