import React from "react";
import { useNode } from "@craftjs/core";

export const BarberPricing1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const leftColumnServices = [
    { name: "Traditional hair styling", price: "$10.00", description: "Lorem ipsum has been the industry." },
    { name: "Classic haircut and washing", price: "$10.00", description: "Lorem ipsum has been the industry." },
    { name: "Haircut and styling", price: "$15.00", description: "Lorem ipsum has been the industry." },
    { name: "Haircut and washing", price: "$12.00", description: "Lorem ipsum has been the industry." }
  ];

  const rightColumnServices = [
    { name: "Stylization beard", price: "$12.00", description: "Lorem ipsum has been the industry." },
    { name: "Trimming long beard", price: "$11.00", description: "Lorem ipsum has been the industry." },
    { name: "Beard styling", price: "$8.00", description: "Lorem ipsum has been the industry." },
    { name: "Beard trimming", price: "$9.00", description: "Lorem ipsum has been the industry." }
  ];

  return (
    <section
      ref={(ref) => connect(drag(ref))}
      className={`relative bg-yellow-50 py-20 ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            Flexible{" "}
            <span className="relative">
              pricing
              <span className="absolute bottom-2 left-0 w-full h-0.5 bg-yellow-400"></span>
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            {leftColumnServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-lg font-bold text-gray-800">{service.name}</span>
                  <span className="text-lg text-gray-800 font-semibold">{service.price}</span>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
            
            {/* Special Section */}
            <div className="bg-yellow-100 border border-yellow-200 rounded-lg p-6 my-6">
              <div className="text-sm font-bold uppercase text-gray-800 mb-4">Barber specials</div>
              <div className="space-y-4">
                {leftColumnServices.slice(1, 3).map((service, index) => (
                  <div key={`special-${index}`} className="flex items-baseline justify-between">
                    <span className="text-lg font-bold text-gray-800">{service.name}</span>
                    <span className="text-lg text-gray-800 font-semibold">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightColumnServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-lg font-bold text-gray-800">{service.name}</span>
                  <span className="text-lg text-gray-800 font-semibold">{service.price}</span>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
            
            {/* Special Section */}
            <div className="bg-yellow-100 border border-yellow-200 rounded-lg p-6 my-6">
              <div className="text-sm font-bold uppercase text-gray-800 mb-4">Barber specials</div>
              <div className="space-y-4">
                {rightColumnServices.slice(1, 3).map((service, index) => (
                  <div key={`special-${index}`} className="flex items-baseline justify-between">
                    <span className="text-lg font-bold text-gray-800">{service.name}</span>
                    <span className="text-lg text-gray-800 font-semibold">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};