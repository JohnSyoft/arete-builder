import React from "react";
import { Node, useNode } from "@craftjs/core";
import { ArrowRight } from "lucide-react";

export const BeautySalonOffers1 = () => {
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
      title: "Bridal makeup",
      description: "Special packages for wedding.",
      image: "https://placehold.co/1160x640",
      discount: "Flat 50% off",
    },
    {
      title: "Expert makeup",
      description: "Unlock your true beauty potential.",
      image: "https://placehold.co/1160x640",
      discount: "Flat 50% off",
    },
  ];

  return (
    <section
      ref={(ref) => connect(drag(ref))}
      className={`py-20 bg-gradient-to-br from-blue-50 to-pink-50 ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute top-6 left-6">
                <span className="bg-white text-gray-900 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded">
                  {offer.discount}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-end justify-between">
                  <div className="text-white">
                    <h3 className="text-2xl font-medium mb-2">{offer.title}</h3>
                    <p className="text-white/80 text-sm">{offer.description}</p>
                  </div>
                  <div className="w-14 h-14 border-2 border-white/30 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brands Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 mb-4">
              <span className="text-sm font-bold text-pink-600 uppercase tracking-wider">
                Associates brand
              </span>
              <div className="w-8 h-0.5 bg-gray-300"></div>
            </div>
            <h2 className="text-4xl font-light text-gray-900">
              Brands available
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-8 border border-gray-200 hover:border-gray-300 transition-colors duration-300"
              >
                <img
                  src="https://placehold.co/225x110"
                  alt={`Brand ${index + 1}`}
                  className="max-w-full h-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

BeautySalonOffers1.craft = {
  displayName: "Beauty Salon Offers 1",
  props: {},
  related: {
    settings: () => null,
  },
};
