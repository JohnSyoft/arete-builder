import React from "react";
import { Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Image } from "../Basic/Image";
import { Button } from "../Basic/Button";

export const BeautySalonHero1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  return (
    <Element id="beauty-salon-hero-container" is={Section} canvas>
      <Element
        id="beauty-salon-hero-background"
        is={Box}
        width="100%"
        minHeight="min-h-screen"
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
      >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://placehold.co/1920x1100')",
          backgroundAttachment: "fixed",
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      {/* Decorative Elements */}
      <div className="absolute left-0 top-0 hidden lg:block">
        <Element
          id="beauty-salon-hero-decorative-left"
          is={Image}
          src="/images/demo-beauty-salon-home-banner-bg.png"
          alt=""
          width="w-auto"
          height="h-auto"
        />
      </div>
      
      <div className="absolute right-8 top-8 hidden lg:block">
        <Element
          id="beauty-salon-hero-decorative-right"
          is={Image}
          src="/images/demo-beauty-salon-banner-img.png"
          alt=""
          width="w-auto"
          height="h-auto"
          animation="spin"
          animationDuration="20s"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-2xl">
          <Element
            id="beauty-salon-hero-title"
            is={Text}
            text="Beauty studio"
            tagName="h1"
            fontSize="text-6xl lg:text-8xl xl:text-9xl"
            fontWeight="font-bold"
            color="text-white"
            className="leading-tight mb-6 tracking-tight"
          />
          
          <Element
            id="beauty-salon-hero-description"
            is={Text}
            text="A salon is an establishment dealing with natural cosmetic treatments."
            tagName="p"
            fontSize="text-xl"
            color="text-gray-300"
            className="mb-8 max-w-lg"
          />
          
          <Element
            id="beauty-salon-hero-button"
            is={Button}
            text="Book appointment"
            showIcon={true}
            iconType="arrow-right"
            iconPosition="right"
            backgroundColor="bg-gradient-to-r from-pink-500 to-rose-500"
            textColor="text-white"
            padding="px-8 py-4"
            fontSize="text-lg"
            fontWeight="font-semibold"
            borderRadius="rounded-lg"
            className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          />
        </div>
      </div>

      {/* Top Bar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Element
                id="beauty-salon-hero-badge"
                is={Text}
                text="wow awesome!"
                tagName="div"
                fontSize="text-sm"
                fontWeight="font-semibold"
                backgroundColor="bg-yellow-400"
                textColor="text-gray-900"
                padding="px-4 py-2"
                borderRadius="rounded"
              />
            </div>
            
            <div className="hidden sm:flex items-center gap-6">
              <div className="flex items-center gap-2 text-white">
                <Phone className="w-4 h-4" />
                <Element
                  id="beauty-salon-hero-phone"
                  is={Text}
                  text="1 800 222 000"
                  tagName="span"
                  fontSize="text-sm"
                  color="text-white"
                />
              </div>
              <Element
                id="beauty-salon-hero-talk-button"
                is={Button}
                text="Let's talk"
                variant="outline"
                borderColor="border-white"
                textColor="text-white"
                hoverBackgroundColor="hover:bg-white"
                hoverTextColor="hover:text-gray-900"
              />
            </div>
          </div>
        </div>
      </div>
      </Element>
    </Element>
  );
};

BeautySalonHero1.craft = {
  displayName: "Beauty Salon Hero 1",
  props: {},
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true,
};
