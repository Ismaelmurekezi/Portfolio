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
        <div className="flex gap-10 text-primary text-4xl pt-4 my-8 ">
          <a href="https://www.linkedin.com/in/murekezi-ismael/ ">
            <i className="fab fa-linkedin "></i>
          </a>
          <a href="https://github.com/Ismaelmurekezi">
            <i className="fab fa-github"></i>
          </a>
          <a href="">
            <i className="fab fa-twitter-square"></i>
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