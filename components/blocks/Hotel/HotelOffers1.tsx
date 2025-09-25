import React from "react";
import { useNode } from "@craftjs/core";
import { ArrowRight } from "lucide-react";

export const HotelOffers1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const offers = [
    {
      image: "https://placehold.co/600x700",
      category: "Exclusive",
      title: "Honeymoon package",
      description: "Romantic getaway with special amenities"
    },
    {
      image: "https://placehold.co/600x700",
      category: "Unbundled",
      title: "Cocktail package",
      description: "Premium drinks and entertainment"
    },
    {
      image: "https://placehold.co/600x700",
      category: "Wellness",
      title: "Massage package",
      description: "Relaxing spa treatments and wellness"
    }
  ];

  return (
    <section
      ref={(ref) => connect(drag(ref))}
      className={`relative bg-gray-50 py-20 ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            Exclusive{" "}
            <span className="relative">
              offers
              <span className="absolute bottom-2 left-0 w-full h-0.5 bg-blue-600"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Enjoy in resorts and awesome facilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative">
                <img 
                  src={offer.image} 
                  alt={offer.title}
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-center">
                  <span className="text-sm font-medium tracking-wider uppercase mb-2 block">
                    {offer.category}
                  </span>
                  <div className="w-16 h-px bg-white/30 mx-auto mb-3"></div>
                  <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-sm text-white/80">{offer.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};