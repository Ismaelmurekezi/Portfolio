import React from "react";

const Header = () => {
  return (
    <div className="flex justify-around  ">
      <img src="/logo.png" alt="logo" width={100} height={30}  className="absolute left-0" />
      <ul className="flex text-primary gap-24 text-xl py-10 hover:scale-105 ">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Header;
