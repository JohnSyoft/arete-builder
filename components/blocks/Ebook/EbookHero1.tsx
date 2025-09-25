import React from "react";
import { Node, useNode } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";

export const EbookHero1 = () => {
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
          backgroundImage: "url('https://placehold.co/1920x1100')",
          backgroundAttachment: "fixed",
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
          {/* Book Cover */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="https://placehold.co/900x1162" 
                alt="Book Cover" 
                className="w-full max-w-md mx-auto lg:mx-0 transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          {/* Text Content */}
          <div className="order-1 lg:order-2 text-white">
            <h1 className="text-6xl lg:text-8xl xl:text-9xl font-bold leading-tight mb-6 tracking-tight">
              <span className="block">Sell your book</span>
              <span className="block text-yellow-400">fast</span>
            </h1>
            
            <div className="mb-8 max-w-md">
              <div className="bg-white rounded-lg p-6 mb-6">
                <form className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <Button
                    size="lg"
                    className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-500 font-semibold py-3 rounded-lg"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Get Started now!
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </Button>
                </form>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-12 h-12 bg-yellow-400 bg-opacity-20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-yellow-400" />
                </div>
                <p className="text-lg">
                  Read by over <span className="text-white font-semibold underline">60,000+</span> fashion designers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Text */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="text-yellow-400 text-6xl lg:text-8xl font-bold opacity-20">
          fastest selling book
        </div>
      </div>
    </div>
  );
};

EbookHero1.craft = {
  displayName: "Ebook Hero",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
