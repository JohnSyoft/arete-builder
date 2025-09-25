import React from "react";
import { Node, useNode } from "@craftjs/core";

export const DesignAgencyProjects1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const projects = [
    { number: "01", name: "cropo" },
    { number: "02", name: "grino" },
    { number: "03", name: "adidas" },
    { number: "04", name: "squaredo" },
    { number: "05", name: "curo" },
    { number: "06", name: "okios" },
    { number: "07", name: "supo" },
    { number: "08", name: "overload" },
    { number: "09", name: "Reebok" },
  ];

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className={`py-16 bg-white ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-12">
          {projects.map((project, index) => (
            <div key={index} className="relative group">
              <div className="text-sm font-medium text-gray-400 absolute -top-4 -left-1">
                {project.number}
              </div>
              <a
                href="#"
                className="text-6xl md:text-5xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300 block"
              >
                {project.name}
              </a>
              {/* Hover reveal image - hidden on mobile */}
              <div className="hidden xl:block absolute top-0 left-0 w-96 h-96 bg-gray-200 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                <div
                  className="w-full h-full bg-cover bg-center rounded-lg"
                  style={{
                    backgroundImage: "url('https://placehold.co/430x430')",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
