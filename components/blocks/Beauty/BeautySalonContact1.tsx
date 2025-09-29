import React from "react";
import { Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Icon } from "../Basic/Icon";

export const BeautySalonContact1 = () => {
  return (
    <Element id="beauty-salon-contact-container" is={Section} canvas>
      <section className="relative h-[550px] sm:h-auto">
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
          <Element id="beauty-salon-contact-card" is={Box} className="bg-white rounded-lg shadow-2xl w-full max-w-sm md:max-w-md mb-8">
            <Element id="beauty-salon-contact-content" is={Box} className="p-12 md:p-8 text-center md:text-left">
              <Element
                id="beauty-salon-contact-title"
                is={Text}
                text="Contact us"
                className="text-2xl font-medium text-gray-900 mb-4"
              />
              <Element id="beauty-salon-contact-info" is={Box} className="space-y-4">
                <div>
                  <Element
                    id="beauty-salon-contact-salon-name"
                    is={Text}
                    text="Crafto beauty salon"
                    className="font-semibold text-gray-900 mb-1"
                  />
                  <Element
                    id="beauty-salon-contact-address"
                    is={Text}
                    text="401 Broadway, 24th Floor New York, NY 10013"
                    className="text-gray-600 text-sm leading-relaxed"
                  />
                </div>
                
                <Element id="beauty-salon-contact-details" is={Box} className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Element
                      id="beauty-salon-contact-phone-icon"
                      is={Icon}
                      icon="phone"
                      className="w-4 h-4 text-gray-500"
                    />
                    <Element
                      id="beauty-salon-contact-phone-label"
                      is={Text}
                      text="Phone:"
                      className="font-semibold text-gray-900"
                    />
                    <a href="tel:1800222000" className="text-gray-600 hover:text-pink-600 transition-colors duration-300">
                      <Element
                        id="beauty-salon-contact-phone-number"
                        is={Text}
                        text="1-800-222-000"
                      />
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Element
                      id="beauty-salon-contact-email-icon"
                      is={Icon}
                      icon="mail"
                      className="w-4 h-4 text-gray-500"
                    />
                    <Element
                      id="beauty-salon-contact-email-label"
                      is={Text}
                      text="Email:"
                      className="font-semibold text-gray-900"
                    />
                    <a href="mailto:info@yourdomain.com" className="text-gray-600 hover:text-pink-600 transition-colors duration-300 underline">
                      <Element
                        id="beauty-salon-contact-email-address"
                        is={Text}
                        text="info@yourdomain.com"
                      />
                    </a>
                  </div>
                </Element>
              </Element>
            </Element>
            
            <Element id="beauty-salon-contact-footer" is={Box} className="border-t border-gray-200 p-4 text-center">
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-900 hover:text-pink-600 transition-colors duration-300 font-semibold text-sm uppercase tracking-wider"
              >
                <Element
                  id="beauty-salon-contact-map-icon"
                  is={Icon}
                  icon="map-pin"
                  className="w-4 h-4"
                />
                <Element
                  id="beauty-salon-contact-map-text"
                  is={Text}
                  text="Show on google maps"
                />
              </a>
            </Element>
          </Element>
        </div>
      </section>
    </Element>
  );
};

BeautySalonContact1.craft = {
  displayName: "Beauty Salon Contact 1",
  props: {},
  isCanvas: true,
  related: {
    settings: () => null,
  },
};
