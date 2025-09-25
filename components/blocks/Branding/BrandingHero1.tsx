import React from "react";
import { Node, useNode } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const BrandingHero1 = () => {
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
      className={`min-h-screen bg-white overflow-hidden ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container-fluid p-0 h-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* Left Column - Content */}
          <div className="flex justify-center flex-col px-10 xxl:px-5 xl:px-2 md:px-0 relative order-2 lg:order-1">
            {/* Vertical Title */}
            <div className="absolute h-auto hidden md:flex items-center w-20 justify-center">
              <div className="text-base font-bold text-gray-800 uppercase tracking-wider">
                Advanced branding solutions
              </div>
            </div>

            <div className="border-l border-gray-300 pl-16 ml-24 lg:pl-8 lg:ml-16 relative z-10 sm:pl-8 sm:pr-8 sm:ml-0 border-0">
              <h1 className="text-gray-800 font-semibold text-5xl lg:text-4xl sm:text-3xl leading-tight mb-8">
                Provide branding solutions to grow your business.
              </h1>
              <p className="w-3/4 mb-8 lg:w-11/12 sm:w-full text-gray-600 leading-relaxed">
                Creating products with a strong identity. We provide brilliant ideas and adding the world called success brand.
              </p>
              <Button className="bg-gradient-to-r from-yellow-400 to-blue-500 text-white px-8 py-4 text-lg font-normal hover:shadow-lg transition-all duration-300">
                Let's talk - Send a message
              </Button>
            </div>
          </div>

          {/* Right Column - Slider */}
          <div className="relative md:h-96 lg:h-full order-1 lg:order-2 md:mb-12">
            <div className="h-full bg-gray-100 relative overflow-hidden">
              {/* Slider Content */}
              <div className="absolute inset-0 bg-cover bg-center" style={{
                backgroundImage: "url('https://placehold.co/800x600')"
              }} />
              
              {/* Navigation */}
              <div className="absolute bottom-8 left-8 flex gap-4">
                <button className="w-12 h-12 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all duration-300">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all duration-300">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Progress Indicator */}
              <div className="absolute bottom-8 right-8 text-white text-sm">
                <span className="opacity-70">01</span>
                <span className="mx-2">/</span>
                <span>03</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};