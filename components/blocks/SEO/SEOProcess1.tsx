import React from "react";
import { Node, useNode } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";

export const SEOProcess1 = () => {
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
      className={`relative py-20 bg-gray-50 ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000000\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        }} />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Trust Banner */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xl font-medium text-gray-700 mb-8">
            <Heart className="w-6 h-6 text-red-500" />
            <span>
              Join the <span className="font-bold text-gray-900 underline">10000+</span> companies trusting our agency.
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="https://placehold.co/580x535" 
                alt="SEO Process" 
                className="w-full rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-lg"></div>
            </div>
          </div>
          
          {/* Right Content - Text */}
          <div className="order-1 lg:order-2">
            <span className="inline-block bg-gradient-to-r from-pink-100 to-red-100 text-gray-700 px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
              Working process
            </span>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Simple working process to start.
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We are committed to deliver unique digital media solutions from web development to eCommerce solutions for our happy clients by using our knowledge and expertise.
            </p>
            
            <Button
              variant="outline"
              size="lg"
              className="group border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <span>learn more</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

SEOProcess1.craft = {
  displayName: "SEO Process",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
