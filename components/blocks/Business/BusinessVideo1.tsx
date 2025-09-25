import React from "react";
import { Node, useNode } from "@craftjs/core";
import { Play } from "lucide-react";

export const BusinessVideo1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className={`relative py-20 bg-white ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="relative rounded-lg overflow-hidden h-96 md:h-[500px] lg:h-[600px]">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://placehold.co/1920x1100')",
            }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-end items-center text-center p-8">
            <div className="max-w-4xl">
              <h3 className="text-3xl lg:text-5xl font-light text-white mb-8 leading-tight">
                We make the creative solutions for{" "}
                <span className="font-semibold text-blue-400">
                  business!
                </span>
              </h3>
              
              {/* Video Play Button */}
              <div className="flex justify-center">
                <button className="group relative w-20 h-20 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                  <Play className="w-8 h-8 text-white ml-1" />
                  
                  {/* Ripple Effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-ping"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BusinessVideo1.craft = {
  displayName: "Business Video CTA",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
