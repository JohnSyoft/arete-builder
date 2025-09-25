import React from "react";
import { useNode } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const BarberServices1 = () => {
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
      icon: "✂️",
      title: "Haircutting",
      description: "Your choice of hairstyle is pivotal in the way.",
      price: "Starting from $35"
    },
    {
      icon: "🪒",
      title: "Shaving",
      description: "Your choice of hairstyle is pivotal in the way.",
      price: "Starting from $25"
    },
    {
      icon: "💇",
      title: "Beard Styling",
      description: "Your choice of hairstyle is pivotal in the way.",
      price: "Starting from $20"
    },
    {
      icon: "🧴",
      title: "Hair Treatment",
      description: "Your choice of hairstyle is pivotal in the way.",
      price: "Starting from $30"
    }
  ];

  return (
    <section
      ref={(ref) => connect(drag(ref))}
      className={`relative bg-yellow-200 py-20 ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            Barbershop{" "}
            <span className="relative">
              services
              <span className="absolute bottom-2 left-0 w-full h-0.5 bg-yellow-400"></span>
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {services.map((service, index) => (
            <div 
              key={index}
              className="text-center border-r border-gray-300 last:border-r-0 group hover:bg-white transition-all duration-300"
            >
              <div className="p-8 lg:p-12">
                <div className="relative mx-auto mb-6 w-20 h-20">
                  <div className="w-20 h-20 bg-yellow-100 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
                  <div className="relative z-10 text-4xl mt-4">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
              </div>
              
              <div className="border-t border-gray-300">
                <div className="text-sm font-bold uppercase text-gray-800 py-3 border-b border-gray-300">
                  {service.price}
                </div>
                <div className="bg-gray-800 group-hover:bg-gray-700 transition-colors duration-300">
                  <Button 
                    variant="link" 
                    className="w-full text-white hover:text-white py-4 text-lg"
                  >
                    Request an appointment
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};