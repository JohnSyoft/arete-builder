import React from "react";
import { Node, useNode } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award, Briefcase } from "lucide-react";

export const BusinessHero1 = () => {
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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-black/60" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="text-xl text-white/60 mb-6 block font-light">
              Best solutions for your business
            </span>
          </div>
          
          <h1 className="text-6xl lg:text-8xl xl:text-9xl font-bold text-white leading-tight mb-8 tracking-tight">
            Agency for your <span className="font-semibold">great business.</span>
          </h1>
          
          <Button
            size="lg"
            className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center gap-2">
              Get started now
              <ArrowRight className="w-5 h-5" />
            </span>
          </Button>
        </div>
      </div>
      
      {/* Slide Number */}
      <div className="absolute bottom-8 left-8 z-20">
        <div className="text-8xl lg:text-9xl font-bold text-blue-600 opacity-30">
          01
        </div>
      </div>
      
      {/* Features Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-3 text-center md:text-left">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <span className="font-semibold text-gray-900">World-class services</span>
            </div>
            
            <div className="flex items-center gap-3 text-center md:text-left">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <span className="font-semibold text-gray-900">Experience strategy</span>
            </div>
            
            <div className="flex items-center gap-3 text-center md:text-left">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <span className="font-semibold text-gray-900">Award winning agency</span>
            </div>
            
            <div className="flex items-center gap-3 text-center md:text-left">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <span className="font-semibold text-gray-900">Grow your business</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BusinessHero1.craft = {
  displayName: "Business Hero",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
