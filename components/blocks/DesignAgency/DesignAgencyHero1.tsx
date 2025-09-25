import React from "react";
import { Node, useNode } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const DesignAgencyHero1 = () => {
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
      className={`relative min-h-screen bg-gray-100 overflow-hidden ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      {/* Particles Background */}
      <div className="absolute inset-0 bg-gray-100">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="w-full flex justify-center">
          <div className="text-center max-w-4xl">
            {/* Large Text */}
            <div className="relative mb-8">
              <div className="text-8xl lg:text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-bold text-gray-800 leading-tight">
                <span className="relative inline-block">
                  <span className="bg-gray-800 text-white px-4 py-2">Branding</span>
                </span>{" "}
                and design{" "}
                <span className="relative inline-block">
                  <span className="bg-blue-600 text-white px-4 py-2">agency</span>
                </span>
              </div>
            </div>
            
            {/* Description and CTA */}
            <div className="w-1/2 md:w-4/5 xs:w-full text-left ms-auto pe-12 lg:pe-4 md:ps-4 md:mx-auto relative">
              <p className="text-lg leading-8 mb-10 w-11/12 md:w-full lg:mb-8 text-gray-700">
                Our long experience and design sagacity help us spot essential things while selecting a design that business owners often miss.
              </p>
              <Button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 text-lg font-semibold shadow-lg">
                <span className="flex items-center gap-2">
                  Let's talk - Send a message
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
