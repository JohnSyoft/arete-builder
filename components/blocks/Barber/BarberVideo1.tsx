import React from "react";
import { useNode } from "@craftjs/core";
import { Play } from "lucide-react";

export const BarberVideo1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  return (
    <section
      ref={(ref) => connect(drag(ref))}
      className={`relative bg-gray-900 py-20 ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="relative inline-block">
            <img 
              src="https://placehold.co/800x500" 
              alt="Barber video thumbnail" 
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                <Play className="w-8 h-8 text-gray-800 ml-1" />
              </button>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mt-8 mb-4">
            Watch Our{" "}
            <span className="relative">
              Story
              <span className="absolute bottom-2 left-0 w-full h-0.5 bg-yellow-400"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the artistry and tradition of our barbering craft through this exclusive behind-the-scenes look at our studio.
          </p>
        </div>
      </div>
    </section>
  );
};