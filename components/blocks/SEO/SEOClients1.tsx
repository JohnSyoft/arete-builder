import React from "react";
import { Node, useNode } from "@craftjs/core";
import { Heart } from "lucide-react";

export const SEOClients1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const clients = [
    { logo: "https://placehold.co/192x192", name: "Client 1" },
    { logo: "https://placehold.co/192x192", name: "Client 2" },
    { logo: "https://placehold.co/193x192", name: "Client 3" },
    { logo: "https://placehold.co/192x192", name: "Client 4" },
    { logo: "https://placehold.co/192x193", name: "Client 5" },
    { logo: "https://placehold.co/192x193", name: "Client 6" },
    { logo: "https://placehold.co/193x193", name: "Client 7" }
  ];

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className={`relative py-20 bg-gray-50 ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000000\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        }} />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Trusted by over 26,300 reputed companies
          </h2>
        </div>
        
        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-16">
          {clients.map((client, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-full p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="w-full h-auto rounded-full group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Banner */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-xl font-medium text-gray-700">
            <Heart className="w-6 h-6 text-red-500" />
            <span>
              Join the <span className="font-bold text-gray-900 underline">10000+</span> companies trusting our agency.
            </span>
          </div>
        </div>
      </div>
      
      {/* Bottom Background Element */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-cover bg-center opacity-20" style={{
        backgroundImage: "url('https://placehold.co/1920x300')"
      }}></div>
    </div>
  );
};

SEOClients1.craft = {
  displayName: "SEO Clients",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
