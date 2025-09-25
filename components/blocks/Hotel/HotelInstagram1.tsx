import React from "react";
import { useNode } from "@craftjs/core";
import { Instagram } from "lucide-react";

export const HotelInstagram1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const instagramPosts = [
    { image: "https://placehold.co/300x300", alt: "Resort pool view" },
    { image: "https://placehold.co/300x300", alt: "Luxury suite" },
    { image: "https://placehold.co/300x300", alt: "Fine dining" },
    { image: "https://placehold.co/300x300", alt: "Spa treatment" },
    { image: "https://placehold.co/300x300", alt: "Beach view" },
    { image: "https://placehold.co/300x300", alt: "Sunset bar" }
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
            Follow Us on{" "}
            <span className="relative">
              Instagram
              <span className="absolute bottom-2 left-0 w-full h-0.5 bg-blue-600"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the latest moments from our resort and get inspired for your next stay.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              <img 
                src={post.image} 
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
          >
            <Instagram className="w-5 h-5 mr-2" />
            Follow @luxuryresort
          </a>
        </div>
      </div>
    </section>
  );
};