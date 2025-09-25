import React from "react";
import { Node, useNode } from "@craftjs/core";
import { Building, Home, TreePine, MapPin } from "lucide-react";

export const ArchitectureAbout1 = () => {
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
      className={`relative py-20 bg-gray-900 ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        }} />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider mb-4 block">
              About us
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              We are architecture studio
            </h2>
          </div>
          <div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our buildings combine minimalism and elegance of lines and shapes. We want them to be an integral part of the surrounding landscape.
            </p>
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Architecture</h3>
            <p className="text-gray-300">
              Our buildings combine minimalism and elegance of lines and shapes.
            </p>
          </div>
          
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Home className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Interior design</h3>
            <p className="text-gray-300">
              Our buildings combine minimalism and elegance of lines and shapes.
            </p>
          </div>
          
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <TreePine className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Landscape</h3>
            <p className="text-gray-300">
              Our buildings combine minimalism and elegance of lines and shapes.
            </p>
          </div>
          
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Planning</h3>
            <p className="text-gray-300">
              Our buildings combine minimalism and elegance of lines and shapes.
            </p>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="bg-gray-800 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider mb-4 block">
                Our achievements
              </span>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                We are architecture studio
              </h3>
            </div>
            <div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our buildings combine minimalism and elegance of lines and shapes. We want them to be an integral part of the surrounding landscape.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-4">
                150<sup className="text-2xl">+</sup>
              </div>
              <h4 className="text-xl font-semibold mb-2">Projects completed</h4>
              <p className="text-gray-300">
                Our buildings combine minimalism and elegance of lines and shapes.
              </p>
            </div>
            
            <div className="text-center text-white">
              <div className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-4">
                25<sup className="text-2xl">+</sup>
              </div>
              <h4 className="text-xl font-semibold mb-2">Years experience</h4>
              <p className="text-gray-300">
                Our buildings combine minimalism and elegance of lines and shapes.
              </p>
            </div>
            
            <div className="text-center text-white">
              <div className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-4">
                50<sup className="text-2xl">+</sup>
              </div>
              <h4 className="text-xl font-semibold mb-2">Awards won</h4>
              <p className="text-gray-300">
                Our buildings combine minimalism and elegance of lines and shapes.
              </p>
            </div>
            
            <div className="text-center text-white">
              <div className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-4">
                98<sup className="text-2xl">%</sup>
              </div>
              <h4 className="text-xl font-semibold mb-2">Happy clients</h4>
              <p className="text-gray-300">
                Our buildings combine minimalism and elegance of lines and shapes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ArchitectureAbout1.craft = {
  displayName: "Architecture About",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};