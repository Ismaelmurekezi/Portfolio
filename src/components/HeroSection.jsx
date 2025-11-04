import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section
      className="relative h-[700px] bg-gradient-to-br from-lightdark via-cyan-950 to-black flex items-center justify-center overflow-hidden"
      id="#home"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          <ReactTyped
            strings={["Software", "UI/UX"]}
            typeSpeed={100}
            backSpeed={50}
            backDelay={2000}
            loop
          />
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
            <ReactTyped
              strings={["Developer", "Designer"]}
              typeSpeed={100}
              backSpeed={50}
              backDelay={2000}
              loop
            />
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
          Crafting beautiful, responsive web experiences that solve real
          problems. Specialized in React, TypeScript, and modern web
          technologies.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Ismaelmurekezi"
            className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 group"
          >
            <Github className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://www.linkedin.com/in/murekezi-ismael"
            className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 group"
          >
            <Linkedin className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="#"
            className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 group"
          >
            <Mail className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;
