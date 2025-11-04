import React, { useState } from "react";
import { Monitor, Smartphone, Palette, Database, Code2 } from "lucide-react";


const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      icon: Code2,
      title: "FRONTEND DEVELOPMENT",
      description:
        "I create modern, responsive websites tailored to your brand, ensuring seamless user experience across all devices.",
    },
    {
      icon: Database,
      title: "BACKEND DEVELOPMENT",
      description:
        "I develop comprehensive brand identities that communicate your values and resonate with your target audience.",
    },
    {
      icon: Palette,
      title: "UI/UX DESIGN",
      description:
        "I design intuitive mobile applications that provide exceptional user experiences and drive engagement.",
    },
  ];

  return (
    <div className=" bg-black text-white py-20 px-6 md:px-12" id="services">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-5xl font-bold mb-6">
            WHAT I <span className="text-primary">OFFER</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive design services to help your business stand out and
            succeed in the digital world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isHovered = hoveredCard === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative group"
              >
                {/* Card */}
                <div
                  className={`bg-zinc-900 rounded-2xl p-8 transition-all duration-500 ${
                    isHovered
                      ? "transform -translate-y-2 shadow-2xl shadow-cyan-500/20"
                      : "shadow-xl"
                  }`}
                >
                  {/* Icon Container */}
                  <div className="mb-8">
                    <div
                      className={`inline-flex p-6 bg-gradient-to-br from-cyan-900/50 to-cyan-950/50 rounded-2xl border border-cyan-500/30 transition-all duration-500 ${
                        isHovered ? "scale-110 border-cyan-400/60" : ""
                      }`}
                    >
                      <Icon
                        className="w-10 h-10 text-cyan-400"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-6 text-white">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed text-base">
                    {service.description}
                  </p>

                  {/* Hover Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-2xl pointer-events-none transition-opacity duration-500 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Bottom Border Accent */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-b-2xl transform origin-left transition-transform duration-500 ${
                      isHovered ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </div>

                {/* Animated Background Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-2xl -z-10 transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
