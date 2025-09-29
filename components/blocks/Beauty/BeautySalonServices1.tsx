import React from "react";
import { Element } from "@craftjs/core";
import { ArrowRight } from "lucide-react";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Image } from "../Basic/Image";
import { Icon } from "../Basic/Icon";

export const BeautySalonServices1 = () => {
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
    <Element id="beauty-salon-services-container" is={Section} canvas>
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-4">
              <Element id="beauty-salon-services-badge" is={Text} text="Beauty salon services" />
              <div className="w-8 h-0.5 bg-gray-300"></div>
            </div>
            <Element id="beauty-salon-services-title" is={Text} text="Makeup and hairstyles" />
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {services.map((service, index) => (
              <Element
                key={index}
                id={`beauty-salon-service-${index}`}
                is={Box}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Element
                    id={`beauty-salon-service-image-${index}`}
                    is={Image}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Element
                        id={`beauty-salon-service-icon-${index}`}
                        is={Icon}
                        icon="arrow-right"
                        className="w-6 h-6 text-white"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <Element
                    id={`beauty-salon-service-title-${index}`}
                    is={Text}
                    text={service.title}
                    className="text-xl font-medium text-gray-900 mb-2"
                  />
                  <Element
                    id={`beauty-salon-service-description-${index}`}
                    is={Text}
                    text={service.description}
                    className="text-gray-600"
                  />
                </div>
              </Element>
            ))}
          </div>

          {/* Pricing Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-0">
              {pricing.slice(0, 3).map((item, index) => (
                <Element
                  key={index}
                  id={`beauty-salon-pricing-left-${index}`}
                  is={Box}
                  className="flex items-center gap-6 py-6 border-t border-gray-200 first:border-t-0"
                >
                  <Element
                    id={`beauty-salon-pricing-image-left-${index}`}
                    is={Image}
                    src={item.image}
                    alt={item.service}
                    className="w-14 h-14 object-cover rounded"
                  />
                  <div className="flex-1">
                    <Element
                      id={`beauty-salon-pricing-title-left-${index}`}
                      is={Text}
                      text={item.service}
                      className="text-lg font-medium text-gray-900"
                    />
                    <Element
                      id={`beauty-salon-pricing-description-left-${index}`}
                      is={Text}
                      text={item.description}
                      className="text-gray-600"
                    />
                  </div>
                  <div className="text-right">
                    <Element
                      id={`beauty-salon-pricing-price-left-${index}`}
                      is={Text}
                      text={item.price}
                      className="text-xl font-medium text-gray-900"
                    />
                  </div>
                </Element>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-0">
              {pricing.slice(3, 6).map((item, index) => (
                <Element
                  key={index}
                  id={`beauty-salon-pricing-right-${index}`}
                  is={Box}
                  className="flex items-center gap-6 py-6 border-t border-gray-200 first:border-t-0"
                >
                  <Element
                    id={`beauty-salon-pricing-image-right-${index}`}
                    is={Image}
                    src={item.image}
                    alt={item.service}
                    className="w-14 h-14 object-cover rounded"
                  />
                  <div className="flex-1">
                    <Element
                      id={`beauty-salon-pricing-title-right-${index}`}
                      is={Text}
                      text={item.service}
                      className="text-lg font-medium text-gray-900"
                    />
                    <Element
                      id={`beauty-salon-pricing-description-right-${index}`}
                      is={Text}
                      text={item.description}
                      className="text-gray-600"
                    />
                  </div>
                  <div className="text-right">
                    <Element
                      id={`beauty-salon-pricing-price-right-${index}`}
                      is={Text}
                      text={item.price}
                      className="text-xl font-medium text-gray-900"
                    />
                  </div>
                </Element>
              ))}
            </div>
          </div>

          {/* Footer Text */}
          <div className="text-center mt-12">
            <Element
              id="beauty-salon-services-footer"
              is={Text}
              text="Our flexible beauty salon pricing plans. Explore package"
              className="text-gray-600"
            />
          </div>
        </div>
      </div>
    </Element>
  );
};

BeautySalonServices1.craft = {
  displayName: "Beauty Salon Services 1",
  props: {},
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true,
};
