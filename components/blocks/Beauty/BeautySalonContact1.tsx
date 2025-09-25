import React from "react";
import { Node, useNode } from "@craftjs/core";
import { MapPin, Phone, Mail } from "lucide-react";

export const BeautySalonContact1 = () => {
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
      className={`relative h-[550px] sm:h-auto ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      {/* Map Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://placehold.co/1920x1080')",
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />

      {/* Contact Card */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-end justify-end">
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-sm md:max-w-md mb-8">
          <div className="p-12 md:p-8 text-center md:text-left">
            <h3 className="text-2xl font-medium text-gray-900 mb-4">
              Contact us
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Crafto beauty salon
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  401 Broadway, 24th Floor New York, NY 10013
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <span className="font-semibold text-gray-900">Phone:</span>
                  <a href="tel:1800222000" className="text-gray-600 hover:text-pink-600 transition-colors duration-300">
                    1-800-222-000
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <span className="font-semibold text-gray-900">Email:</span>
                  <a href="mailto:info@yourdomain.com" className="text-gray-600 hover:text-pink-600 transition-colors duration-300 underline">
                    info@yourdomain.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 p-4 text-center">
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-900 hover:text-pink-600 transition-colors duration-300 font-semibold text-sm uppercase tracking-wider"
            >
              <MapPin className="w-4 h-4" />
              Show on google maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

BeautySalonContact1.craft = {
  displayName: "Beauty Salon Contact 1",
  props: {},
  related: {
    settings: () => null,
  },
};
