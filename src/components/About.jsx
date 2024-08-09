import React from 'react'

const About = () => {
  return (
    <div className="flex justify-around items-center pt-24 bg-lightdark pb-10 ">
      <img
        src="/profile.png"
        alt="my-image"
        width={140}
        className="rounded-full "
      />
      <div className="">
        <h4 className="text-2xl text-primary font-medium pb-4">About Me</h4>
        <p className="w-[800px] text-xl">
          I'm Ismaael <span>Software Developer</span> Frontend and Backend Web
          Developer with a passion for crafting engaging digital experiences
          through intuitive UX/UI design and Robust server-side solutions. Eager
          to leverage my skills in HTML, CSS, JavaScript, Figma, Adobe XD,
          Node.js, Express.js, and MongoDB to contribute to innovative projects
          and expand my knowledge in the dynamic world of web development
        </p>
        <a href="https://drive.google.com/file/d/1QBNPMXRI3PvvRfVyUASDtdggPqK_43Gx/view?usp=sharing">
          <button className=" w-72 h-12 text-lg rounded-sm bg-primary mt-4  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-transparent hover:border-primary hover:border-2 duration-300">
            Downloads CV
          </button>
        </a>
      </div>
    </div>
  );
}

export default About