import React from "react";
import { Node, useNode } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const SpaSalonHero1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const slides = [
    {
      id: 1,
      subtitle: "Unforgettable treat",
      title: "Relax your mind soul and body",
      buttonText: "Book appointment",
    },
    {
      id: 2,
      subtitle: "Ayurvedic treatments",
      title: "Help for your mind relaxing",
      buttonText: "Book appointment",
    },
    {
      id: 3,
      subtitle: "Therapy packages",
      title: "Therapy for rest and relaxation",
      buttonText: "Book appointment",
    },
  ];

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
          backgroundImage: "url('https://placehold.co/1920x1080')",
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-800/60" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center justify-center">
        <div className="text-center text-white max-w-4xl">
          <span className="text-sm uppercase tracking-wider mb-4 block opacity-90">
            {slides[0].subtitle}
          </span>
          <h1 className="text-6xl sm:text-5xl xs:text-4xl font-bold mb-10 w-4/5 lg:w-full md:w-11/12 sm:w-full mx-auto sm:mb-8 leading-tight">
            {slides[0].title}
          </h1>
          <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 font-medium transition-all duration-300">
            <span className="flex items-center gap-2">
              {slides[0].buttonText}
            </span>
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
        <button className="w-14 h-14 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-300">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="w-14 h-14 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-300">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Pagination */}
      <div className="absolute bottom-8 right-8 text-white text-sm">
        <span className="opacity-70">01</span>
        <span className="mx-2">/</span>
        <span>03</span>
      </div>
    </div>
  );
};
