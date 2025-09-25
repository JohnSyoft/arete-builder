import React from "react";
import { Node, useNode } from "@craftjs/core";

export const SpaSalonPricing1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const pricingItems = [
    {
      image: "https://placehold.co/120x120",
      title: "Makeup & massage",
      price: "$43",
      description: "50 Minute relaxation massage.",
    },
    {
      image: "https://placehold.co/120x120",
      title: "Relaxing head",
      price: "$45",
      description: "One of the best ways to relax head.",
    },
    {
      image: "https://placehold.co/120x120",
      title: "Geothermal spa",
      price: "$39",
      description: "Comforting stimulating atmosphere.",
    },
    {
      image: "https://placehold.co/120x120",
      title: "Body relaxation",
      price: "$35",
      description: "Progressive muscle relaxation.",
    },
    {
      image: "https://placehold.co/120x120",
      title: "Finnish sauna",
      price: "$55",
      description: "Traditional finnish sauna experience.",
    },
    {
      image: "https://placehold.co/120x120",
      title: "Aromatherapy",
      price: "$35",
      description: "Using concentrated essential oils.",
    },
  ];

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className={`py-16 bg-white ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h5 className="text-xl font-bold text-gray-800">
            Revitalize your senses and refresh?{" "}
            <a
              href="#"
              className="text-gray-800 hover:text-blue-600 underline underline-offset-4 transition-colors"
            >
              Explore package
            </a>
          </h5>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {pricingItems.slice(0, 3).map((item, index) => (
              <div key={index} className="flex items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-30 h-30 rounded-full flex-shrink-0"
                />
                <div className="ml-8 flex-grow">
                  <div className="flex items-center w-full">
                    <span className="text-xl font-bold text-gray-800">
                      {item.title}
                    </span>
                    <div className="flex-grow mx-5">
                      <div className="border-t border-gray-300"></div>
                    </div>
                    <div className="text-2xl font-bold text-gray-800">
                      {item.price}
                    </div>
                  </div>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6 lg:pt-5 md:pt-5">
            {pricingItems.slice(3, 6).map((item, index) => (
              <div key={index} className="flex items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-30 h-30 rounded-full flex-shrink-0"
                />
                <div className="ml-8 flex-grow">
                  <div className="flex items-center w-full">
                    <span className="text-xl font-bold text-gray-800">
                      {item.title}
                    </span>
                    <div className="flex-grow mx-5">
                      <div className="border-t border-gray-300"></div>
                    </div>
                    <div className="text-2xl font-bold text-gray-800">
                      {item.price}
                    </div>
                  </div>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
