import React from "react";
import { useNode } from "@craftjs/core";
import { Award, Wifi, Car, Utensils } from "lucide-react";

export const HotelFeatures1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const features = [
    {
      icon: Award,
      title: "Five stars luxury resort",
      description: "Experience a unique stay."
    },
    {
      icon: Wifi,
      title: "Free WiFi",
      description: "Stay connected with high-speed internet."
    },
    {
      icon: Car,
      title: "Free Parking",
      description: "Complimentary parking for all guests."
    },
    {
      icon: Utensils,
      title: "Restaurant",
      description: "Fine dining experience on-site."
    }
  ];

  return (
    <section
      ref={(ref) => connect(drag(ref))}
      className={`relative bg-gray-100 py-20 ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center border-r border-blue-200 last:border-r-0 group hover:bg-white transition-all duration-300 p-8"
            >
              <div className="w-30 h-30 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};