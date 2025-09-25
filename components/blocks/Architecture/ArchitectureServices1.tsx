import React from "react";
import { Node, useNode } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export const ArchitectureServices1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const services = [
    {
      title: "Architecture",
      description: "We create buildings that are not only functional but also beautiful and sustainable.",
      image: "https://placehold.co/400x300",
      icon: "🏗️"
    },
    {
      title: "Interior Design",
      description: "Transform your space with our innovative interior design solutions.",
      image: "https://placehold.co/400x300",
      icon: "🏠"
    },
    {
      title: "Landscape Design",
      description: "Create beautiful outdoor spaces that complement your architecture.",
      image: "https://placehold.co/400x300",
      icon: "🌳"
    },
    {
      title: "Urban Planning",
      description: "Comprehensive urban planning solutions for sustainable communities.",
      image: "https://placehold.co/400x300",
      icon: "🏙️"
    }
  ];

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className={`relative py-20 bg-white ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-500 text-sm font-semibold uppercase tracking-wider mb-4 block">
            Our services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            What we do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive architectural and design services that transform your vision into reality.
          </p>
        </div>
        
        {/* Services Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-yellow-500 group-hover:text-white group-hover:border-yellow-500 transition-all duration-300"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Learn more
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mt-12">
          <Button
            variant="outline"
            size="sm"
            className="border-gray-300 text-gray-600 hover:bg-gray-100"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="border-gray-300 text-gray-600 hover:bg-gray-100"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

ArchitectureServices1.craft = {
  displayName: "Architecture Services",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};