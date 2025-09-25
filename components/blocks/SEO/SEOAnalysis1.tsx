import React from "react";
import { Node, useNode } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";

export const SEOAnalysis1 = () => {
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
      className={`relative py-20 bg-gradient-to-r from-blue-600 to-indigo-600 ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        }} />
      </div>
      
      {/* Floating Element */}
      <div className="absolute top-10 right-10 hidden md:block">
        <img 
          src="https://placehold.co/150x150" 
          alt="SEO Element" 
          className="w-32 h-32 opacity-20 animate-spin"
          style={{ animationDuration: "20s" }}
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Receive your free SEO analysis?
          </h2>
        </div>
        
        {/* Form */}
        <div className="max-w-4xl mx-auto">
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div>
              <input 
                type="url" 
                placeholder="Enter your website URL.." 
                className="w-full px-6 py-4 rounded-full border-2 border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Enter your email..." 
                className="w-full px-6 py-4 rounded-full border-2 border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
              />
            </div>
            <div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  <Search className="w-5 h-5" />
                  <span>Analyze</span>
                </span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

SEOAnalysis1.craft = {
  displayName: "SEO Analysis",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
