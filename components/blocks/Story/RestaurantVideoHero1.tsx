"use client";

import React from "react";
import { useNode, Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Image } from "../Basic/Image";
import { Button } from "../Basic/Button";

interface RestaurantVideoHero1Props {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  videoUrl?: string;
  leftText?: string;
  rightText?: string;
}

export function RestaurantVideoHero1(props: RestaurantVideoHero1Props = {}) {
  const {
    title = "Our story",
    subtitle = "Restaurant success",
    backgroundImage = "https://placehold.co/1190x600",
    videoUrl = "https://www.youtube.com/watch?v=cfXHhfNy7tU",
    leftText = "Our",
    rightText = "Story"
  } = props;
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  return (
    <Element id="restaurant-video-hero" is={Section} canvas>
      {/* Page Title Section */}
      <Element id="video-hero-title-section" is={Section}>
        <Box
          backgroundImage="https://placehold.co/1920x400"
          backgroundSize="cover"
          backgroundPosition="center"
          padding="py-20 px-4"
          minHeight="400px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box width="100%" margin="mx-auto">
            <Box display="flex" flexDirection="column" alignItems="center">
              <Element id="video-hero-title" is={Text}>
                <Text
                  text={title}
                  tagName="h1"
                  fontSize="text-4xl md:text-5xl"
                  fontWeight="font-bold"
                  color="text-gray-800"
                  textTransform="uppercase"
                  margin="mb-4"
                />
              </Element>
              <Element id="video-hero-subtitle" is={Text}>
                <Text
                  text={subtitle}
                  tagName="h2"
                  fontSize="text-xl md:text-2xl"
                  fontWeight="font-semibold"
                  color="text-red-600"
                  textTransform="uppercase"
                />
              </Element>
            </Box>
          </Box>
        </Box>
      </Element>

      {/* Video Hero Section */}
      <Element id="video-hero-content-section" is={Section}>
        <Box padding="py-16 px-4">
          <Box width="100%" margin="mx-auto">
            <Box>
              {/* Background Image */}
              <Element id="video-hero-background" is={Image}>
                <Image
                  src={backgroundImage}
                  alt="Restaurant Story"
                  width="100%"
                  height="500px"
                  objectFit="object-cover"
                  borderRadius="rounded-lg"
                />
              </Element>
              
              {/* Overlay Content */}
              <Box 
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap="gap-8"
                margin="mt-8"
              >
                {/* Left Text */}
                <Element id="video-hero-left-text" is={Text}>
                  <Text
                    text={leftText}
                    tagName="span"
                    fontSize="text-6xl md:text-8xl"
                    fontWeight="font-normal"
                    color="text-white"
                    textTransform="uppercase"
                  />
                </Element>
                
                {/* Video Play Button */}
                <Element id="video-hero-play-button" is={Button}>
                  <Button
                    text="▶"
                    variant="secondary"
                    href={videoUrl}
                    target="_blank"
                  />
                </Element>
                
                {/* Right Text */}
                <Element id="video-hero-right-text" is={Text}>
                  <Text
                    text={rightText}
                    tagName="span"
                    fontSize="text-6xl md:text-8xl"
                    fontWeight="font-normal"
                    color="text-white"
                    textTransform="uppercase"
                  />
                </Element>
              </Box>
            </Box>
          </Box>
        </Box>
      </Element>
    </Element>
  );
};

RestaurantVideoHero1.craft = {
  displayName: "Restaurant Video Hero 1",
  props: {
    title: "Our story",
    subtitle: "Restaurant success",
    backgroundImage: "https://placehold.co/1190x600",
    videoUrl: "https://www.youtube.com/watch?v=cfXHhfNy7tU",
    leftText: "Our",
    rightText: "Story"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
