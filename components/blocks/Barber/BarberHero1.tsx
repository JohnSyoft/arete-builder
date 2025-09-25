import React from "react";
import { useNode } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import { Calendar, Mouse } from "lucide-react";

export const BarberHero1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  return (
    <section
      ref={(ref) => connect(drag(ref))}
      className={`relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
      style={{
        backgroundImage: "url('https://placehold.co/1920x1080')",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center max-w-4xl">
          {/* Subtitle */}
          <span className="block text-white text-sm uppercase tracking-widest mb-6 font-medium">
            London popular barber
          </span>
          
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-none">
            Talented men's barber studio
          </h1>
          
          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Online appointment
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            className="block text-white hover:text-yellow-400 transition-colors duration-300"
          >
            <Mouse className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};