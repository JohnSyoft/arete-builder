import React from "react";
import { useNode } from "@craftjs/core";
import { ZoomIn } from "lucide-react";

export const BarberGallery1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const galleryImages = [
    { src: "https://placehold.co/1220x930", alt: "Barber at work" },
    { src: "https://placehold.co/760x930", alt: "Haircut in progress" },
    { src: "https://placehold.co/940x930", alt: "Beard styling" },
    { src: "https://placehold.co/1100x930", alt: "Barber tools" },
    { src: "https://placehold.co/1100x930", alt: "Studio interior" },
    { src: "https://placehold.co/760x930", alt: "Client consultation" }
  ];

  return (
    <section
      ref={(ref) => connect(drag(ref))}
      className={`relative bg-gray-100 py-20 ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container-fluid px-0">
        <div className="flex overflow-x-auto gap-6 pb-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="flex-shrink-0 group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-800">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="h-96 w-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-gray-800" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};