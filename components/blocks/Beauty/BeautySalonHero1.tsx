import React from "react";
import { Node, useNode } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export const BeautySalonHero1 = () => {
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
      className={`relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden ${
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
      
      {/* Decorative Elements */}
      <div className="absolute left-0 top-0 hidden lg:block">
        <img
          src="/images/demo-beauty-salon-home-banner-bg.png"
          alt=""
          className="w-auto h-auto"
        />
      </div>
      
      <div className="absolute right-8 top-8 hidden lg:block">
        <img
          src="/images/demo-beauty-salon-banner-img.png"
          alt=""
          className="w-auto h-auto animate-spin"
          style={{ animationDuration: "20s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-6xl lg:text-8xl xl:text-9xl font-bold text-white leading-tight mb-6 tracking-tight">
            Beauty studio
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-lg">
            A salon is an establishment dealing with natural cosmetic treatments.
          </p>
          
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center gap-2">
              Book appointment
              <ArrowRight className="w-5 h-5" />
            </span>
          </Button>
        </div>
      </div>

      {/* Top Bar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-yellow-400 text-gray-900 px-4 py-2 rounded text-sm font-semibold">
                wow awesome!
              </div>
            </div>
            
            <div className="hidden sm:flex items-center gap-6">
              <div className="flex items-center gap-2 text-white">
                <Phone className="w-4 h-4" />
                <span className="text-sm">1 800 222 000</span>
              </div>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                Let's talk
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BeautySalonHero1.craft = {
  displayName: "Beauty Salon Hero 1",
  props: {},
  related: {
    settings: () => null,
  },
};
