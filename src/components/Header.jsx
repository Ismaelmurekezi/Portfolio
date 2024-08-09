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
        <ul className="flex flex-col md:flex-row md:gap-24 text-xl py-10 md:py-0">
          <li className="hover:scale-105 p-4 md:p-0">
            <a href="#home">Home</a>
          </li>
          <li className="hover:scale-105 p-4 md:p-0">
            <a href="#about">About</a>
          </li>
          <li className="hover:scale-105 p-4 md:p-0">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:scale-105 p-4 md:p-0">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:scale-105 p-4 md:p-0">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
