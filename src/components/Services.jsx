import React from 'react'

const Services = () => {
  return (
    <div className="w-full px-4 pt-10" id="services">
      <h1 className="text-2xl font-bold  text-primary xl:pl-28">SERVICES</h1>
      <div className="flex flex-col gap-2 lg:justify-around pt-4 py-3 md:flex-row">
        <div className="bg-lightdark p-5 xl:p-10 xl:w-[700px] xl:text-lg transition ease-in delay-300 shadow-lg hover:shadow-cyan-500/50 duration-300 rounded-lg ">
          <h4 className="text-lg text-primary pb-2">Software Engineer</h4>
          <p>
            a passion for crafting engaging digital experiences through
            intuitive UX/UI design. Eager to leverage my skills in HTML, CSS,
            JavaScript,Express js,MongoDB etc to contribute to innovative
            projects in the dynamic world of web development.
          </p>
          <div className="flex gap-3 items-center pt-7">
            <span className="text-primary text-base">Tools:</span>
            <ul className="flex gap-2 text-xs">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React js</li>
              <li>Express js</li>
            </ul>
          </div>
        </div>
        <div className=" bg-lightdark p-5 xl:p-10 xl:w-[700px]  xl:text-lg transition ease-in-out delay-500 shadow-lg hover:shadow-cyan-500/50 duration-300 rounded-lg">
          <h4 className="text-lg text-primary pb-2">UX/UI Designer</h4>
          <p>
             UX/UI designer dedicated to creating meaningful digital
            experiences. With a background in software Engineering, I combine
            creativity, empathy, and problem-solving to craft seamless
            user-centric designs.
          </p>
          <div className="flex items-center gap-3 pt-7">
            <span className="text-primary text-base">Tools:</span>
            <ul className="flex gap-2 text-xs">
              <li>Figma</li>
              <li>Adobe XD</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services