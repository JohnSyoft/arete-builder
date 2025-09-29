import React from "react";
import { Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Image } from "../Basic/Image";
import { Button } from "../Basic/Button";
import { Icon } from "../Basic/Icon";

export const ArchitectureServices1 = () => {
  const services = [
    {
      title: "Architecture",
      description: "We create buildings that are not only functional but also beautiful and sustainable.",
      image: "https://placehold.co/400x300",
      icon: "🏗️"
    },
    {
      title: "Interior Design",
      description: "Transform your space with our innovative interior design solutions.",
      image: "https://placehold.co/400x300",
      icon: "🏠"
    },
    {
      title: "Landscape Design",
      description: "Create beautiful outdoor spaces that complement your architecture.",
      image: "https://placehold.co/400x300",
      icon: "🌳"
    },
    {
      title: "Urban Planning",
      description: "Comprehensive urban planning solutions for sustainable communities.",
      image: "https://placehold.co/400x300",
      icon: "🏙️"
    }
  ];

  return (
    <Element id="architecture-services-container" is={Section} canvas>
      <div className="relative py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <Element id="architecture-services-header" is={Box} className="text-center mb-16">
            <Element
              id="architecture-services-badge"
              is={Text}
              text="Our services"
              className="text-yellow-500 text-sm font-semibold uppercase tracking-wider mb-4 block"
            />
            <Element
              id="architecture-services-title"
              is={Text}
              text="What we do"
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8"
            />
            <Element
              id="architecture-services-description"
              is={Text}
              text="We provide comprehensive architectural and design services that transform your vision into reality."
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            />
          </Element>
          
          {/* Services Carousel */}
          <Element id="architecture-services-carousel" is={Box} className="relative">
            <Element id="architecture-services-grid" is={Box} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Element key={index} id={`architecture-service-${index}`} is={Box} className="group cursor-pointer">
                  <Element id={`architecture-service-${index}-card`} is={Box} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <Element
                        id={`architecture-service-${index}-image`}
                        is={Image}
                        src={service.image}
                        alt={service.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <Element
                          id={`architecture-service-${index}-icon`}
                          is={Text}
                          text={service.icon}
                          className="text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    </div>
                    <Element id={`architecture-service-${index}-content`} is={Box} className="p-6">
                      <Element
                        id={`architecture-service-${index}-title`}
                        is={Text}
                        text={service.title}
                        className="text-xl font-semibold text-gray-900 mb-3"
                      />
                      <Element
                        id={`architecture-service-${index}-description`}
                        is={Text}
                        text={service.description}
                        className="text-gray-600 mb-4"
                      />
                      <Element
                        id={`architecture-service-${index}-button`}
                        is={Button}
                        text="Learn more"
                        showIcon={true}
                        iconType="arrow-right"
                        iconPosition="right"
                        className="w-full group-hover:bg-yellow-500 group-hover:text-white group-hover:border-yellow-500 transition-all duration-300"
                      />
                    </Element>
                  </Element>
                </Element>
              ))}
            </Element>
          </Element>
          
          {/* Navigation */}
          <Element id="architecture-services-navigation" is={Box} className="flex justify-center items-center gap-4 mt-12">
            <Element
              id="architecture-services-prev-button"
              is={Button}
              text=""
              showIcon={true}
              iconType="chevron-left"
              className="border-gray-300 text-gray-600 hover:bg-gray-100"
            />
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            </div>
            <Element
              id="architecture-services-next-button"
              is={Button}
              text=""
              showIcon={true}
              iconType="chevron-right"
              className="border-gray-300 text-gray-600 hover:bg-gray-100"
            />
          </Element>
        </div>
      </div>
    </Element>
  );
};

ArchitectureServices1.craft = {
  displayName: "Architecture Services",
  props: {},
  isCanvas: true,
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};