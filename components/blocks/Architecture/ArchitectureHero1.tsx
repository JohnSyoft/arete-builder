import React from "react";
import { Node, useNode } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

export const ArchitectureHero1 = () => {
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
      className={`relative min-h-screen bg-gray-900 overflow-hidden ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://placehold.co/1920x1303')",
          backgroundAttachment: "fixed",
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-4xl">
          <h1 className="text-6xl lg:text-8xl xl:text-9xl font-bold text-white leading-tight mb-6 tracking-tight">
            Malena house
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-lg">
            Modern architecture that blends seamlessly with nature, creating spaces that inspire and transform.
          </p>
          
          <Button
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center gap-2">
              Explore project
              <ArrowRight className="w-5 h-5" />
            </span>
          </Button>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="flex items-center gap-4">
          <div className="bg-white text-gray-900 px-4 py-2 rounded text-sm font-semibold">
            01
          </div>
          <Button
            variant="outline"
            size="sm"
            className="border-white text-white hover:bg-white hover:text-gray-900"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-8 z-20">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

ArchitectureHero1.craft = {
  displayName: "Architecture Hero",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
