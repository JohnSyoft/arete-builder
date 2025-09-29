import React from "react";
import { Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Image } from "../Basic/Image";
import { Button } from "../Basic/Button";
import { Icon } from "../Basic/Icon";

export const BeautySalonAbout1 = () => {
  return (
    <Element id="beauty-salon-about-container" is={Section} canvas>
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <Element id="beauty-salon-about-image-container" is={Box} className="relative">
              <Element
                id="beauty-salon-about-image"
                is={Image}
                src="https://placehold.co/960x630"
                alt="Beauty salon interior"
                className="w-full h-auto rounded-br-[50px] object-cover"
              />
            </Element>

            {/* Content Section */}
            <Element id="beauty-salon-about-content" is={Box} className="space-y-6">
              <Element id="beauty-salon-about-badge" is={Box} className="inline-block">
                <Element
                  id="beauty-salon-about-badge-text"
                  is={Text}
                  text="About the salon"
                  className="text-sm font-bold text-pink-600 uppercase tracking-wider"
                />
              </Element>

              <Element
                id="beauty-salon-about-title"
                is={Text}
                text="Body treatments. Skin care beauty."
                className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight"
              />

              <Element
                id="beauty-salon-about-description"
                is={Text}
                text="With over 35 years of experience footprint of over 400+ salons in 125 cities across the length and breadth of the country. We have developed a deep understanding of the beauty industry."
                className="text-lg text-gray-600 leading-relaxed max-w-lg"
              />

              <Element id="beauty-salon-about-buttons" is={Box} className="flex flex-col sm:flex-row gap-4">
                <Element
                  id="beauty-salon-about-primary-button"
                  is={Button}
                  text="About story"
                  showIcon={true}
                  iconType="arrow-right"
                  iconPosition="right"
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                />

                <Element
                  id="beauty-salon-about-secondary-button"
                  is={Button}
                  text="Luxury salon"
                  showIcon={true}
                  iconType="play"
                  iconPosition="left"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-lg"
                />
              </Element>
            </Element>
          </div>
        </div>
      </div>
    </Element>
  );
};

BeautySalonAbout1.craft = {
  displayName: "Beauty Salon About 1",
  props: {},
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true,
};
