import React from "react";
import { Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Icon } from "../Basic/Icon";

export const ArchitectureAbout1 = () => {
  return (
    <Element id="architecture-about-container" is={Section} canvas>
      <div className="relative py-20 bg-gray-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          }} />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          {/* Header */}
          <Element id="architecture-about-header" is={Box} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <Element
                id="architecture-about-badge"
                is={Text}
                text="About us"
                className="text-yellow-400 text-sm font-semibold uppercase tracking-wider mb-4 block"
              />
              <Element
                id="architecture-about-title"
                is={Text}
                text="We are architecture studio"
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
              />
            </div>
            <div>
              <Element
                id="architecture-about-description"
                is={Text}
                text="Our buildings combine minimalism and elegance of lines and shapes. We want them to be an integral part of the surrounding landscape."
                className="text-gray-300 text-lg leading-relaxed"
              />
            </div>
          </Element>
          
          {/* Services Grid */}
          <Element id="architecture-about-services" is={Box} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Element id="architecture-about-service-1" is={Box} className="text-center text-white">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Element
                  id="architecture-about-service-1-icon"
                  is={Icon}
                  icon="building"
                  className="w-8 h-8 text-gray-900"
                />
              </div>
              <Element
                id="architecture-about-service-1-title"
                is={Text}
                text="Architecture"
                className="text-xl font-semibold mb-4"
              />
              <Element
                id="architecture-about-service-1-description"
                is={Text}
                text="Our buildings combine minimalism and elegance of lines and shapes."
                className="text-gray-300"
              />
            </Element>
            
            <Element id="architecture-about-service-2" is={Box} className="text-center text-white">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Element
                  id="architecture-about-service-2-icon"
                  is={Icon}
                  icon="home"
                  className="w-8 h-8 text-gray-900"
                />
              </div>
              <Element
                id="architecture-about-service-2-title"
                is={Text}
                text="Interior design"
                className="text-xl font-semibold mb-4"
              />
              <Element
                id="architecture-about-service-2-description"
                is={Text}
                text="Our buildings combine minimalism and elegance of lines and shapes."
                className="text-gray-300"
              />
            </Element>
            
            <Element id="architecture-about-service-3" is={Box} className="text-center text-white">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Element
                  id="architecture-about-service-3-icon"
                  is={Icon}
                  icon="tree-pine"
                  className="w-8 h-8 text-gray-900"
                />
              </div>
              <Element
                id="architecture-about-service-3-title"
                is={Text}
                text="Landscape"
                className="text-xl font-semibold mb-4"
              />
              <Element
                id="architecture-about-service-3-description"
                is={Text}
                text="Our buildings combine minimalism and elegance of lines and shapes."
                className="text-gray-300"
              />
            </Element>
            
            <Element id="architecture-about-service-4" is={Box} className="text-center text-white">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Element
                  id="architecture-about-service-4-icon"
                  is={Icon}
                  icon="map-pin"
                  className="w-8 h-8 text-gray-900"
                />
              </div>
              <Element
                id="architecture-about-service-4-title"
                is={Text}
                text="Planning"
                className="text-xl font-semibold mb-4"
              />
              <Element
                id="architecture-about-service-4-description"
                is={Text}
                text="Our buildings combine minimalism and elegance of lines and shapes."
                className="text-gray-300"
              />
            </Element>
          </Element>
          
          {/* Stats Section */}
          <Element id="architecture-about-stats" is={Box} className="bg-gray-800 rounded-2xl p-8 lg:p-12">
            <Element id="architecture-about-stats-header" is={Box} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <Element
                  id="architecture-about-stats-badge"
                  is={Text}
                  text="Our achievements"
                  className="text-yellow-400 text-sm font-semibold uppercase tracking-wider mb-4 block"
                />
                <Element
                  id="architecture-about-stats-title"
                  is={Text}
                  text="We are architecture studio"
                  className="text-3xl lg:text-4xl font-bold text-white mb-6"
                />
              </div>
              <div>
                <Element
                  id="architecture-about-stats-description"
                  is={Text}
                  text="Our buildings combine minimalism and elegance of lines and shapes. We want them to be an integral part of the surrounding landscape."
                  className="text-gray-300 text-lg leading-relaxed"
                />
              </div>
            </Element>
            
            <Element id="architecture-about-stats-grid" is={Box} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Element id="architecture-about-stat-1" is={Box} className="text-center text-white">
                <Element
                  id="architecture-about-stat-1-number"
                  is={Text}
                  text="150+"
                  className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-4"
                />
                <Element
                  id="architecture-about-stat-1-title"
                  is={Text}
                  text="Projects completed"
                  className="text-xl font-semibold mb-2"
                />
                <Element
                  id="architecture-about-stat-1-description"
                  is={Text}
                  text="Our buildings combine minimalism and elegance of lines and shapes."
                  className="text-gray-300"
                />
              </Element>
              
              <Element id="architecture-about-stat-2" is={Box} className="text-center text-white">
                <Element
                  id="architecture-about-stat-2-number"
                  is={Text}
                  text="25+"
                  className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-4"
                />
                <Element
                  id="architecture-about-stat-2-title"
                  is={Text}
                  text="Years experience"
                  className="text-xl font-semibold mb-2"
                />
                <Element
                  id="architecture-about-stat-2-description"
                  is={Text}
                  text="Our buildings combine minimalism and elegance of lines and shapes."
                  className="text-gray-300"
                />
              </Element>
              
              <Element id="architecture-about-stat-3" is={Box} className="text-center text-white">
                <Element
                  id="architecture-about-stat-3-number"
                  is={Text}
                  text="50+"
                  className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-4"
                />
                <Element
                  id="architecture-about-stat-3-title"
                  is={Text}
                  text="Awards won"
                  className="text-xl font-semibold mb-2"
                />
                <Element
                  id="architecture-about-stat-3-description"
                  is={Text}
                  text="Our buildings combine minimalism and elegance of lines and shapes."
                  className="text-gray-300"
                />
              </Element>
              
              <Element id="architecture-about-stat-4" is={Box} className="text-center text-white">
                <Element
                  id="architecture-about-stat-4-number"
                  is={Text}
                  text="98%"
                  className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-4"
                />
                <Element
                  id="architecture-about-stat-4-title"
                  is={Text}
                  text="Happy clients"
                  className="text-xl font-semibold mb-2"
                />
                <Element
                  id="architecture-about-stat-4-description"
                  is={Text}
                  text="Our buildings combine minimalism and elegance of lines and shapes."
                  className="text-gray-300"
                />
              </Element>
            </Element>
          </Element>
        </div>
      </div>
    </Element>
  );
};

ArchitectureAbout1.craft = {
  displayName: "Architecture About",
  props: {},
  isCanvas: true,
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};