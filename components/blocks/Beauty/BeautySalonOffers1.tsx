import React from "react";
import { Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Image } from "../Basic/Image";
import { Icon } from "../Basic/Icon";

export const BeautySalonOffers1 = () => {
  const offers = [
    {
      title: "Bridal makeup",
      description: "Special packages for wedding.",
      image: "https://placehold.co/1160x640",
      discount: "Flat 50% off",
    },
    {
      title: "Expert makeup",
      description: "Unlock your true beauty potential.",
      image: "https://placehold.co/1160x640",
      discount: "Flat 50% off",
    },
  ];

  return (
    <Element id="beauty-salon-offers-container" is={Section} canvas>
      <section className="py-20 bg-gradient-to-br from-blue-50 to-pink-50">
        <div className="container mx-auto px-4">
          <Element id="beauty-salon-offers-grid" is={Box} className="grid lg:grid-cols-2 gap-8">
            {offers.map((offer, index) => (
              <Element
                key={index}
                id={`beauty-salon-offer-${index}`}
                is={Box}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Element
                  id={`beauty-salon-offer-${index}-image`}
                  is={Image}
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                <div className="absolute top-6 left-6">
                  <Element
                    id={`beauty-salon-offer-${index}-discount`}
                    is={Text}
                    text={offer.discount}
                    className="bg-white text-gray-900 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded"
                  />
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-end justify-between">
                    <div className="text-white">
                      <Element
                        id={`beauty-salon-offer-${index}-title`}
                        is={Text}
                        text={offer.title}
                        className="text-2xl font-medium mb-2"
                      />
                      <Element
                        id={`beauty-salon-offer-${index}-description`}
                        is={Text}
                        text={offer.description}
                        className="text-white/80 text-sm"
                      />
                    </div>
                    <div className="w-14 h-14 border-2 border-white/30 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                      <Element
                        id={`beauty-salon-offer-${index}-arrow`}
                        is={Icon}
                        icon="arrow-right"
                        className="w-6 h-6 text-white"
                      />
                    </div>
                  </div>
                </div>
              </Element>
            ))}
          </Element>

          {/* Brands Section */}
          <Element id="beauty-salon-brands-section" is={Box} className="mt-20">
            <Element id="beauty-salon-brands-header" is={Box} className="text-center mb-12">
              <div className="inline-flex items-center gap-4 mb-4">
                <Element
                  id="beauty-salon-brands-badge"
                  is={Text}
                  text="Associates brand"
                  className="text-sm font-bold text-pink-600 uppercase tracking-wider"
                />
                <div className="w-8 h-0.5 bg-gray-300"></div>
              </div>
              <Element
                id="beauty-salon-brands-title"
                is={Text}
                text="Brands available"
                className="text-4xl font-light text-gray-900"
              />
            </Element>

            <Element id="beauty-salon-brands-grid" is={Box} className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Array.from({ length: 8 }).map((_, index) => (
                <Element
                  key={index}
                  id={`beauty-salon-brand-${index}`}
                  is={Box}
                  className="flex items-center justify-center p-8 border border-gray-200 hover:border-gray-300 transition-colors duration-300"
                >
                  <Element
                    id={`beauty-salon-brand-${index}-image`}
                    is={Image}
                    src="https://placehold.co/225x110"
                    alt={`Brand ${index + 1}`}
                    className="max-w-full h-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                  />
                </Element>
              ))}
            </Element>
          </Element>
        </div>
      </section>
    </Element>
  );
};

BeautySalonOffers1.craft = {
  displayName: "Beauty Salon Offers 1",
  props: {},
  isCanvas: true,
  related: {
    settings: () => null,
  },
};
