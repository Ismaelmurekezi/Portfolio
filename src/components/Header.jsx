import { Linkedin } from "lucide-react";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed top-0 left-0 w-full flex justify-around items-center py-4 bg-gradient-to-r from-lightdark  to-black shadow-md z-50">
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
        <ul className="flex flex-col text-primary text-xl md:flex-row md:justify-center md:flex-1 md:gap-8">
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
              href="#project"
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
              href="#services"
              className="hover:text-white transition duration-300"
            >
              Service
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
      <button>
        <a
          href="https://www.linkedin.com/in/murekezi-ismael/"
          className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
        >
          {/* <Linkedin className="inline-block mr-2 w-10 h-6" /> */}
          Let's connect
        </a>
      </button>
    </div>
  );
};

export default Header;
