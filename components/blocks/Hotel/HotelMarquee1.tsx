import React from "react";
import { useNode } from "@craftjs/core";

export const HotelMarquee1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const partners = [
    "TripAdvisor", "Booking.com", "Expedia", "Hotels.com", 
    "Agoda", "Airbnb", "Priceline", "Kayak"
  ];

  return (
    <section
      ref={(ref) => connect(drag(ref))}
      className={`relative bg-gray-100 py-16 overflow-hidden ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-800 mb-4">
            Trusted by Leading Travel Partners
          </h2>
          <p className="text-gray-600">
            We're proud to be featured on the world's most trusted travel platforms
          </p>
        </div>
        
        <div className="flex animate-marquee">
          {[...partners, ...partners].map((partner, index) => (
            <div 
              key={index}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <div className="text-2xl font-bold text-gray-400 hover:text-blue-600 transition-colors duration-300">
                {partner}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};