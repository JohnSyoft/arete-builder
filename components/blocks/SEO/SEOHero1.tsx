import React from "react";
import { Node, useNode, Element } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, TrendingUp } from "lucide-react";

export const SEOHero1 = () => {
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
      className={`relative min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000000\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        }} />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-indigo-500 rounded-full opacity-30 animate-bounce"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="text-gray-900">
            <div className="mb-6">
              <h1 className="text-6xl lg:text-8xl xl:text-9xl font-light leading-tight mb-4 tracking-tight">
                <Element is="span" className="block">
                  Organic
                </Element>
                <Element is="span" className="block font-bold text-7xl lg:text-8xl xl:text-9xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  search results
                </Element>
              </h1>
            </div>
            
            <Element is="p" className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              We offer flexible pricing plans so that our clients can take advantage of services.
            </Element>
            
            <Element is={Button} size="lg" className="bg-gradient-to-r from-orange-500 to-sky-500 hover:from-orange-600 hover:to-sky-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center gap-2">
                <Element is="span">
                  Get free analysis
                </Element>
                <Element is={ArrowRight} className="w-5 h-5" />
              </span>
            </Element>
          </div>
          
          {/* Right Content - Illustration */}
          <div className="relative">
            <div className="relative">
              <Element is="img" 
                src="https://placehold.co/550x783" 
                alt="SEO Analytics" 
                className="w-full max-w-lg mx-auto lg:mx-0 transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-lg"></div>
            </div>
            
            {/* Floating Analytics Card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-2xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Element is={TrendingUp} className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <Element is="div" className="text-sm font-semibold text-gray-900">+127% Traffic</Element>
                  <Element is="div" className="text-xs text-gray-500">Last 30 days</Element>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Decorative Element */}
      <div className="absolute bottom-8 right-8 z-20">
        <Element is="img" 
          src="https://placehold.co/233x237" 
          alt="SEO Element" 
          className="w-32 h-32 lg:w-40 lg:h-40 opacity-80 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </div>
  );
};

SEOHero1.craft = {
  displayName: "SEO Hero",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
