import React from "react";
import { useNode } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HotelHero1 = () => {
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
      className={`relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center border-t-4 border-blue-600 ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
      style={{
        backgroundImage: "url('https://placehold.co/1920x1100')",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center max-w-4xl">
          {/* Subtitle */}
          <h5 className="text-white text-lg font-normal mb-5">
            Luxury space that you can afford
          </h5>
          
          {/* Main Title */}
          <div className="text-8xl md:text-9xl lg:text-[225px] font-bold text-white mb-8 tracking-tight leading-none">
            Holiday
          </div>
          
          {/* CTA Button */}
          <div className="mb-8">
            <Button 
              size="lg" 
              className="bg-white text-gray-800 hover:bg-gray-100 text-lg px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Book your stay
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};