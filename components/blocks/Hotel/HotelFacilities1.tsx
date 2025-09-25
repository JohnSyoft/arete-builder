import React from "react";
import { useNode } from "@craftjs/core";
import { Pool, Dumbbell, Car, Wifi, Utensils, Spa } from "lucide-react";

export const HotelFacilities1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const facilities = [
    { icon: Pool, title: "Swimming Pool", description: "Outdoor infinity pool with stunning views" },
    { icon: Dumbbell, title: "Fitness Center", description: "State-of-the-art gym equipment" },
    { icon: Car, title: "Valet Parking", description: "Complimentary valet parking service" },
    { icon: Wifi, title: "Free WiFi", description: "High-speed internet throughout the resort" },
    { icon: Utensils, title: "Fine Dining", description: "Award-winning restaurants on-site" },
    { icon: Spa, title: "Spa & Wellness", description: "Luxury spa treatments and wellness center" }
  ];

  return (
    <section
      ref={(ref) => connect(drag(ref))}
      className={`relative bg-white py-20 ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            Resort{" "}
            <span className="relative">
              Facilities
              <span className="absolute bottom-2 left-0 w-full h-0.5 bg-blue-600"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our world-class facilities designed to enhance your stay and create unforgettable experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className="text-center group hover:bg-gray-50 p-8 rounded-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <facility.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{facility.title}</h3>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};