"use client";

import React from "react";
import { useNode, Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Image } from "../Basic/Image";

interface CarouselImage {
  id: string;
  image: string;
  alt?: string;
}

interface RestaurantImageCarousel1Props {
  title?: string;
  subtitle?: string;
  description?: string;
  images?: CarouselImage[];
  backgroundImage?: string;
}

export function RestaurantImageCarousel1(props: RestaurantImageCarousel1Props = {}) {
  const {
    title = "We are aparte a young and beautiful team with a passion for tasty and traditional food Rediscovering and relieving traditional romanian delicacies.",
    subtitle = "our last 16 years journey",
    description = "",
    images = [
      { id: "1", image: "https://placehold.co/420x500", alt: "Restaurant Image 1" },
      { id: "2", image: "https://placehold.co/420x350", alt: "Restaurant Image 2" },
      { id: "3", image: "https://placehold.co/420x500", alt: "Restaurant Image 3" },
      { id: "4", image: "https://placehold.co/420x350", alt: "Restaurant Image 4" },
      { id: "5", image: "https://placehold.co/420x500", alt: "Restaurant Image 5" },
      { id: "6", image: "https://placehold.co/420x350", alt: "Restaurant Image 6" }
    ],
    backgroundImage = "https://placehold.co/1920x678"
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
    <Element id="restaurant-image-carousel" is={Section} canvas>
      {/* Description Section */}
      <Element id="carousel-description-section" is={Section}>
        <Box
          backgroundColor="bg-gray-50"
          padding="py-16 px-4"
        >
          <Box width="100%" margin="mx-auto">
            <Box display="flex" flexDirection="column" alignItems="center">
              <Element id="carousel-subtitle" is={Text}>
                <Text
                  text={subtitle}
                  tagName="span"
                  fontSize="text-sm"
                  fontWeight="font-semibold"
                  color="text-red-600"
                  textTransform="uppercase"
                  margin="mb-6"
                />
              </Element>
              <Element id="carousel-title" is={Text}>
                <Text
                  text={title}
                  tagName="h3"
                  fontSize="text-2xl md:text-3xl"
                  fontWeight="font-normal"
                  color="text-gray-800"
                  textAlign="center"
                />
              </Element>
            </Box>
          </Box>
        </Box>
      </Element>

      {/* Image Carousel Section */}
      <Element id="carousel-images-section" is={Section}>
        <Box
          backgroundColor="bg-gray-50"
          padding="pt-4 pb-16 px-4"
        >
          <Box width="100%" margin="mx-auto">
            <Box display="flex" flexDirection="column" alignItems="center">
              {/* Carousel Container */}
              <Box width="100%">
                {/* Decorative Line */}
                <Box
                  width="100%"
                  height="2px"
                  backgroundColor="bg-red-600"
                  margin="mb-8"
                />
                
                {/* Images Grid */}
                <Box
                  display="grid"
                  gap="gap-8"
                >
                  {images.map((image) => (
                    <Element key={image.id} id={`carousel-image-${image.id}`} is={Box}>
                      <Box>
                        <Element id={`image-${image.id}`} is={Image}>
                          <Image
                            src={image.image}
                            alt={image.alt || `Restaurant Image ${image.id}`}
                            width="100%"
                            height="300px"
                            objectFit="object-cover"
                            borderRadius="rounded-lg"
                          />
                        </Element>
                      </Box>
                    </Element>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Element>
    </Element>
  );
};

RestaurantImageCarousel1.craft = {
  displayName: "Restaurant Image Carousel 1",
  props: {
    title: "We are aparte a young and beautiful team with a passion for tasty and traditional food Rediscovering and relieving traditional romanian delicacies.",
    subtitle: "our last 16 years journey",
    description: "",
    images: [
      { id: "1", image: "https://placehold.co/420x500", alt: "Restaurant Image 1" },
      { id: "2", image: "https://placehold.co/420x350", alt: "Restaurant Image 2" },
      { id: "3", image: "https://placehold.co/420x500", alt: "Restaurant Image 3" },
      { id: "4", image: "https://placehold.co/420x350", alt: "Restaurant Image 4" },
      { id: "5", image: "https://placehold.co/420x500", alt: "Restaurant Image 5" },
      { id: "6", image: "https://placehold.co/420x350", alt: "Restaurant Image 6" }
    ]
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
