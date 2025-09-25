import React from "react";
import { Node, useNode } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

export const BusinessAbout1 = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-600 px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
              About business
            </span>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Smart and effective business solutions.
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We are excited for our work and how it positively impacts clients. With over 12 years of experience we have been constantly providing excellent solutions.
            </p>
            
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">90%</span>
                  </div>
                </div>
              </div>
              
              <div>
                <p className="text-xl font-medium text-gray-900">
                  Increased revenue in the <span className="text-blue-600 underline font-semibold">last 2 years.</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Images */}
          <div className="relative">
            <div className="relative">
              <img 
                src="https://placehold.co/750x800" 
                alt="Business Solutions" 
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-lg"></div>
            </div>
            
            {/* Floating Image */}
            <div className="absolute -bottom-12 -left-6 w-48 h-48 overflow-hidden rounded-lg shadow-2xl">
              <img 
                src="https://placehold.co/638x638" 
                alt="Business Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BusinessAbout1.craft = {
  displayName: "Business About",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
