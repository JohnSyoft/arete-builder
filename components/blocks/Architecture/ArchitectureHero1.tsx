import React from "react";
import { Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Button } from "../Basic/Button";
import { Icon } from "../Basic/Icon";

export const ArchitectureHero1 = () => {
  return (
    <Element id="architecture-hero-container" is={Section} canvas>
      <div className="relative min-h-screen bg-gray-900 overflow-hidden">
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
        <Element id="architecture-hero-content" is={Box} className="relative z-10 container mx-auto px-4 h-screen flex items-center">
          <div className="max-w-4xl">
            <Element
              id="architecture-hero-title"
              is={Text}
              text="Malena house"
              className="text-6xl lg:text-8xl xl:text-9xl font-bold text-white leading-tight mb-6 tracking-tight"
            />
            
            <Element
              id="architecture-hero-description"
              is={Text}
              text="Modern architecture that blends seamlessly with nature, creating spaces that inspire and transform."
              className="text-xl text-gray-300 mb-8 max-w-lg"
            />
            
            <Element
              id="architecture-hero-button"
              is={Button}
              text="Explore project"
              showIcon={true}
              iconType="arrow-right"
              iconPosition="right"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            />
          </div>
        </Element>

        {/* Slide Navigation */}
        <Element id="architecture-hero-navigation" is={Box} className="absolute bottom-8 right-8 z-20">
          <div className="flex items-center gap-4">
            <Element
              id="architecture-hero-slide-number"
              is={Text}
              text="01"
              className="bg-white text-gray-900 px-4 py-2 rounded text-sm font-semibold"
            />
            <Element
              id="architecture-hero-next-button"
              is={Button}
              text=""
              showIcon={true}
              iconType="chevron-right"
              className="border-white text-white hover:bg-white hover:text-gray-900"
            />
          </div>
        </Element>

        {/* Slide Indicators */}
        <Element id="architecture-hero-indicators" is={Box} className="absolute bottom-8 left-8 z-20">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          </div>
        </Element>
      </div>
    </Element>
  );
};

ArchitectureHero1.craft = {
  displayName: "Architecture Hero",
  props: {},
  isCanvas: true,
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
