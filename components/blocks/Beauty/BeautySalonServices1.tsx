import React from "react";
import { Node, useNode } from "@craftjs/core";
import { ArrowRight } from "lucide-react";

export const BeautySalonServices1 = () => {
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
      title: "Hair treatment",
      description: "Advanced hair treatment",
      image: "https://placehold.co/755x510",
    },
    {
      title: "Reflexology",
      description: "Different amounts of pressure",
      image: "https://placehold.co/755x510",
    },
    {
      title: "Makeup",
      description: "Rethink your lash look",
      image: "https://placehold.co/755x510",
    },
    {
      title: "Skin care",
      description: "Believe in your beauty",
      image: "https://placehold.co/755x510",
    },
    {
      title: "Cosmetology",
      description: "Fabulous in every way",
      image: "https://placehold.co/755x510",
    },
    {
      title: "Grooming",
      description: "Especially crafted to suit",
      image: "https://placehold.co/755x510",
    },
  ];

  const pricing = [
    {
      service: "Hair wash and dry",
      description: "Quick hair wash and blow",
      price: "$35",
      image: "https://placehold.co/100x105",
    },
    {
      service: "Express makeup",
      description: "Lovely on your special day",
      price: "$65",
      image: "https://placehold.co/100x105",
    },
    {
      service: "Haircut by expert",
      description: "Get the best haircut",
      price: "$25",
      image: "https://placehold.co/100x105",
    },
    {
      service: "New hair styling",
      description: "Trendy and glam hair style",
      price: "$25",
      image: "https://placehold.co/100x105",
    },
    {
      service: "Wash and plain dry",
      description: "Advanced hair treatment",
      price: "$45",
      image: "https://placehold.co/100x105",
    },
    {
      service: "Organic skin treatment",
      description: "Reduce dryness from skin",
      price: "$55",
      image: "https://placehold.co/100x105",
    },
  ];

  return (
    <section
      ref={(ref) => connect(drag(ref))}
      className={`py-20 bg-white ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-4">
            <span className="text-sm font-bold text-pink-600 uppercase tracking-wider">
              Beauty salon services
            </span>
            <div className="w-8 h-0.5 bg-gray-300"></div>
          </div>
          <h2 className="text-4xl font-light text-gray-900">
            Makeup and hairstyles
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-0">
            {pricing.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-6 py-6 border-t border-gray-200 first:border-t-0"
              >
                <img
                  src={item.image}
                  alt={item.service}
                  className="w-14 h-14 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-gray-900">
                    {item.service}
                  </h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <div className="text-right">
                  <span className="text-xl font-medium text-gray-900">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-0">
            {pricing.slice(3, 6).map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-6 py-6 border-t border-gray-200 first:border-t-0"
              >
                <img
                  src={item.image}
                  alt={item.service}
                  className="w-14 h-14 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-gray-900">
                    {item.service}
                  </h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <div className="text-right">
                  <span className="text-xl font-medium text-gray-900">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Our flexible beauty salon pricing plans.{" "}
            <a href="#" className="text-gray-900 hover:text-pink-600 underline">
              Explore package
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

BeautySalonServices1.craft = {
  displayName: "Beauty Salon Services 1",
  props: {},
  related: {
    settings: () => null,
  },
};
