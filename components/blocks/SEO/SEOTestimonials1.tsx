import React from "react";
import { Node, useNode } from "@craftjs/core";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const SEOTestimonials1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const testimonials = [
    {
      name: "Herman miller",
      position: "Chief financial",
      content: "This theme has a wide variety of options and a really good customer support. Some of the customizations are unlimited but even so the theme still gives a lot of features while prioritizing web speed.",
      avatar: "https://placehold.co/100x101"
    },
    {
      name: "Michelle moore",
      position: "Sales manager",
      content: "Their team are easy to work with and helped me make amazing websites in a short amount of time. Thanks guys for all your hard work. This is an excellent theme!",
      avatar: "https://placehold.co/100x101"
    },
    {
      name: "Loretta smith",
      position: "Sales manager",
      content: "Our experience with your agency has been amazingly satisfying so far. The company I work with is happy to let you know that we are a regular customer and look forward to our cooperation soon!",
      avatar: "https://placehold.co/100x101"
    }
  ];

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className={`relative py-20 bg-cover bg-center ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
      style={{ backgroundImage: "url('https://placehold.co/1920x1080')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-white text-gray-700 px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
              Satisfied clients
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              What our clients are saying about us?
            </h2>
            
            {/* Navigation */}
            <div className="flex gap-4">
              <button className="p-3 border border-white/30 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 rounded-full">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="p-3 border border-white/30 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 rounded-full">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Right Content - Testimonials */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <div className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="text-white">
                  <p className="text-xl leading-relaxed mb-6">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-lg">{testimonial.name}</div>
                      <div className="text-white/70">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SEOTestimonials1.craft = {
  displayName: "SEO Testimonials",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
