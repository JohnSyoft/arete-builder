import React from "react";
import { useNode } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HotelAbout1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  return (
    <section
      ref={(ref) => connect(drag(ref))}
      className={`relative bg-white py-20 ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Welcome to Our{" "}
              <span className="relative">
                Luxury Resort
                <span className="absolute bottom-2 left-0 w-full h-0.5 bg-blue-600"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Experience unparalleled luxury and comfort at our five-star resort. 
              Nestled in a pristine location, we offer world-class amenities, 
              exceptional service, and unforgettable memories for every guest.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg">
                Explore Resort
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg">
                View Gallery
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://placehold.co/300x400" 
                  alt="Resort exterior" 
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
                <img 
                  src="https://placehold.co/300x200" 
                  alt="Resort pool" 
                  className="rounded-lg shadow-lg w-full h-32 object-cover"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img 
                  src="https://placehold.co/300x200" 
                  alt="Resort lobby" 
                  className="rounded-lg shadow-lg w-full h-32 object-cover"
                />
                <img 
                  src="https://placehold.co/300x400" 
                  alt="Resort room" 
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};