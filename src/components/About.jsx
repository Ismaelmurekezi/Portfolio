import React, { useState, useEffect } from "react";
import { MapPin, Briefcase, Code2, Palette, Award, Coffee } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 md:p-12 relative overflow-hidden" id="about">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 transition-all duration-1000">
            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold tracking-tight">
                ABOUT <span className="text-primary">ME</span>
              </h1>

              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-semibold text-primary">
                  I'M MUREKEZI Ismael,
                </h2>
                <p className="text-xl md:text-2xl text-gray-400 font-light">
                  Software Engineer, UI/UX Designer
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                Software Engineer with a passion for crafting engaging digital
                experiences through intuitive UX/UI design and robust
                server-side solutions.I love learning new skills and always eager to grow by contributing to
                innovative projects and expand my knowledge in the dynamic world
                of Software engineering.
              </p>
            </div>

            {/* Location & Experience */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2 group">
                <div className="flex items-center gap-2 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
                  <MapPin className="w-5 h-5" />
                  <h3 className="font-semibold text-lg">Location</h3>
                </div>
                <p className="text-gray-300 pl-7">Kigali, Rwanda</p>
              </div>

              <div className="space-y-2 group">
                <div className="flex items-center gap-2 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
                  <Briefcase className="w-5 h-5" />
                  <h3 className="font-semibold text-lg">Experience</h3>
                </div>
                <p className="text-gray-300 pl-7">4+ Years</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="group relative px-8 py-3 bg-cyan-400 text-black font-semibold rounded-lg overflow-hidden hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300">
                <span className="relative z-10">
                  <a href="https://drive.google.com/file/d/19wLQZVoRgtr8pBUTlpVhPoWwmLaORF5F/view?usp=sharing">
                    Download CV
                  </a>{" "}
                </span>
                <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              <button className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                Connect with Me
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <div className="relative group">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />

              {/* Image Container */}
              <div className="relative rounded-3xl  overflow-hidden border-4 border-white/10 group-hover:border-cyan-400/50 transition-all duration-500">
                <img
                  src="/profile.png"
                  alt="About Me"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-cyan-400 text-black px-6 py-4 rounded-2xl shadow-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                <div className="text-3xl font-bold">4+</div>
                <div className="text-sm font-semibold">Years Experience</div>
              </div>

              {/* Corner Accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl transform rotate-12 opacity-50 group-hover:rotate-45 group-hover:scale-110 transition-all duration-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
