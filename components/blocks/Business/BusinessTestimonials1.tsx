import React from "react";
import { Node, useNode } from "@craftjs/core";
import { Star } from "lucide-react";

export const BusinessTestimonials1 = () => {
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
      id: 1,
      name: "Herman Miller",
      position: "Chief financial",
      image: "https://placehold.co/200x200",
      content: "Lorem ipsum dolor amet ipsum adipiscing elit eiusmod tempor lorem ipsum incididunt."
    },
    {
      id: 2,
      name: "Shoko Mugikura",
      position: "Financial manager",
      image: "https://placehold.co/200x200",
      content: "Lorem ipsum dolor amet ipsum adipiscing elit eiusmod tempor lorem ipsum incididunt."
    },
    {
      id: 3,
      name: "Matthew Taylor",
      position: "Office manager",
      image: "https://placehold.co/200x200",
      content: "Lorem ipsum dolor amet ipsum adipiscing elit eiusmod tempor lorem ipsum incididunt."
    }
  ];

  const stats = [
    {
      number: "200+",
      label: "Creative team to care for projects."
    },
    {
      number: "4.9",
      label: "2,488 Rating",
      rating: true
    }
  ];

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className={`relative py-20 bg-blue-50 ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-16">
          {/* Logo Carousel Placeholder */}
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-600 font-semibold">Logo</span>
          </div>
          
          <div className="text-center">
            <h4 className="text-xl font-medium text-gray-900">
              Trusted by <span className="font-bold text-blue-600">25,000+</span> happy customers are using crafto.
            </h4>
          </div>
          
          {/* Stats */}
          <div className="flex gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</h2>
                {stat.rating && (
                  <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                )}
                <span className="text-gray-600 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-xl overflow-hidden">
              {/* Testimonial Content */}
              <div className="p-8 relative">
                <div className="absolute top-0 left-8 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
                <p className="text-gray-700 leading-relaxed">
                  {testimonial.content}
                </p>
              </div>
              
              {/* Author Info */}
              <div className="px-8 pb-8 pt-4">
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

BusinessTestimonials1.craft = {
  displayName: "Business Testimonials",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
