import React from "react";
import { Node, useNode } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export const SpaSalonAbout1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const stats = [
    { value: "9.98", label: "Google reviews" },
    { value: "30k", label: "Instagram followers" },
    { value: "96%", label: "Repeat customers" },
    { value: "28+", label: "Years of experience" },
  ];

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className={`py-16 bg-gray-50 ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16 md:mb-17 xs:mb-25">
          {/* Left Column */}
          <div className="md:mb-16 sm:mb-12">
            <span className="text-sm text-blue-600 font-medium uppercase tracking-wider mb-4 block">
              About studio
            </span>
            <h3 className="text-4xl lg:text-3xl font-bold text-gray-800 mb-6 w-4/5 xl:w-11/12 md:w-full leading-tight">
              Relax at the luxury spa massage and therapy studio.
            </h3>
            <p className="w-4/5 md:w-full mb-10 text-gray-600 leading-relaxed">
              A design-led approach guides the team, implementing practices, products and services that are thoughtful and environmentally sound. Family of professionals that creates intelligent designs that help the face of hospitality.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 font-medium transition-all duration-300">
                <span className="flex items-center gap-2">
                  Explore more
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
              <div className="flex items-center text-gray-800 text-lg font-medium">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:1800222000" className="hover:text-blue-600 transition-colors">
                  1 800 222 000
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="relative">
            <span className="absolute text-6xl left-5 top-20 text-gray-800 font-semibold z-10 lg:top-10">
              <span className="text-sm block text-gray-500 font-medium uppercase tracking-wider">
                Started in
              </span>
              1995
            </span>
            <div className="w-4/5 overflow-hidden relative md:w-11/12 float-right">
              <img
                className="w-full rounded-lg"
                src="https://placehold.co/480x580"
                alt="Spa Studio"
              />
            </div>
            <div className="absolute -left-16 -bottom-8 w-3/5 overflow-hidden md:-left-24 sm:left-4">
              <img
                className="w-full rounded-lg"
                src="https://placehold.co/380x375"
                alt="Spa Interior"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 text-center sm:text-left">
          {stats.map((stat, index) => (
            <div key={index} className="sm:mb-8 last:mb-0">
              <h2 className="text-4xl font-semibold text-gray-800 mb-2">
                {stat.value}
                <span className="text-blue-600 text-2xl ml-1">↗</span>
              </h2>
              <p className="text-gray-600 leading-7">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
