import React from "react";
import { Node, useNode } from "@craftjs/core";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const SpaSalonServices1 = () => {
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
      id: 1,
      title: "Beauty",
      description: "Bring brighter and younger looking skin.",
      image: "https://placehold.co/580x705",
      icon: "https://placehold.co/150x150",
    },
    {
      id: 2,
      title: "Therapy",
      description: "Bring brighter and younger looking skin.",
      image: "https://placehold.co/580x705",
      icon: "https://placehold.co/150x150",
    },
    {
      id: 3,
      title: "Massage",
      description: "Bring brighter and younger looking skin.",
      image: "https://placehold.co/580x705",
      icon: "https://placehold.co/150x150",
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
          <span className="text-sm text-blue-600 font-medium uppercase tracking-wider mb-2 block">
            Luxury services
          </span>
          <h3 className="text-4xl lg:text-3xl font-bold text-gray-800 w-3/5 xl:w-4/5 sm:w-full mx-auto leading-tight">
            Explore our spa and body services
          </h3>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* Content */}
                  <div className="p-8 xl:p-6 xs:p-8 relative bg-gray-100 group-hover:bg-gray-200 transition-colors">
                    <div className="mb-16 lg:mb-8 relative z-10">
                      <img
                        className="w-20 lg:w-16"
                        src={service.icon}
                        alt={service.title}
                      />
                    </div>
                    <div className="relative z-10">
                      <span className="text-2xl font-bold text-gray-800 mb-2 block">
                        {service.title}
                      </span>
                      <p className="text-gray-600 leading-8">
                        {service.description}
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-10 transition-opacity" />
                  </div>

                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <div
                      className="h-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${service.image})`,
                      }}
                    >
                      <span className="absolute -left-8 bottom-12 text-8xl lg:text-6xl xs:text-7xl font-semibold text-gray-300 xl:bottom-6 md:-left-5">
                        {service.id.toString().padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button className="w-14 h-14 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full flex items-center justify-center transition-all duration-300">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-14 h-14 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full flex items-center justify-center transition-all duration-300">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
