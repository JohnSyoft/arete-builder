"use client";

import React, { useState } from "react";
import { useNode, Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Image } from "../Basic/Image";
import { Button } from "../Basic/Button";

interface GalleryFilter {
  label: string;
  filter: string;
  active?: boolean;
}

interface GalleryItem {
  id: string;
  image: string;
  title: string;
  categories: string[];
}

interface RestaurantGalleryFilter1Props {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  filters?: GalleryFilter[];
  galleryItems?: GalleryItem[];
  cardDesign?: string;
  itemsPerRow?: number;
  showTitle?: boolean;
  showLightbox?: boolean;
}

export const RestaurantGalleryFilter1: React.FC<RestaurantGalleryFilter1Props> = ({
  title = "Photo gallery",
  subtitle = "Luxury restaurant",
  backgroundImage = "https://placehold.co/1920x400",
  cardDesign = "default",
  itemsPerRow = 3,
  showTitle = true,
  showLightbox = true,
  filters = [
    { label: "All", filter: "*", active: true },
    { label: "Nonveg", filter: ".nonveg" },
    { label: "Vegetarian", filter: ".vegetarian" },
    { label: "Dessert", filter: ".dessert" },
    { label: "Drinks", filter: ".drinks" }
  ],
  galleryItems = [
    { id: "1", image: "https://placehold.co/600x446", title: "Gallery Image 1", categories: ["nonveg", "dessert", "drinks"] },
    { id: "2", image: "https://placehold.co/600x446", title: "Gallery Image 2", categories: ["vegetarian", "dessert"] },
    { id: "3", image: "https://placehold.co/600x446", title: "Gallery Image 3", categories: ["vegetarian", "dessert"] },
    { id: "4", image: "https://placehold.co/600x446", title: "Gallery Image 4", categories: ["nonveg", "vegetarian", "drinks"] },
    { id: "5", image: "https://placehold.co/600x446", title: "Gallery Image 5", categories: ["vegetarian", "dessert", "drinks"] },
    { id: "6", image: "https://placehold.co/600x446", title: "Gallery Image 6", categories: ["nonveg", "vegetarian", "drinks"] },
    { id: "7", image: "https://placehold.co/600x446", title: "Gallery Image 7", categories: ["nonveg", "vegetarian"] },
    { id: "8", image: "https://placehold.co/600x446", title: "Gallery Image 8", categories: ["nonveg", "dessert", "drinks"] },
    { id: "9", image: "https://placehold.co/600x446", title: "Gallery Image 9", categories: ["nonveg", "dessert", "drinks"] }
  ]
}) => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  return (
    <Element id="restaurant-gallery" is={Section} canvas>
      {/* Page Title Section */}
      <Element id="gallery-title-section" is={Section}>
        <Box
          backgroundImage={backgroundImage}
          backgroundSize="cover"
          backgroundPosition="center"
          padding="py-20 px-0"
          minHeight="400px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box width="100%" padding="px-4">
            <Box display="flex" flexDirection="column" alignItems="center">
              <Element id="gallery-title" is={Text}>
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
              <Element id="gallery-subtitle" is={Text}>
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

      {/* Filter Buttons */}
      <Element id="gallery-filters" is={Section}>
        <Box padding="py-8 px-4">
          <Box width="100%" margin="mx-auto">
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box display="flex" flexWrap="wrap" justifyContent="center" gap="gap-4">
                {filters.map((filter, index) => (
                  <Element key={index} id={`filter-${index}`} is={Button}>
                    <Button
                      text={filter.label}
                      variant={filter.active ? "default" : "outline"}
                      size="sm"
                      className="rounded-full"
                    />
                  </Element>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Element>

      {/* Gallery Grid */}
      <Element id="gallery-grid-section" is={Section}>
        <Box padding="py-8 px-4">
          <Box width="100%" margin="mx-auto">
            <Box
              display="grid"
              gap="gap-6"
            >
              {galleryItems.map((item) => (
                <Element key={item.id} id={`gallery-item-${item.id}`} is={Box}>
                  <Box
                    backgroundColor="bg-gray-800"
                    borderRadius="rounded-lg"
                    className={`group relative transition-all duration-300 hover:shadow-xl ${item.categories.join(' ')}`}
                  >
                    <Element id={`gallery-image-${item.id}`} is={Image}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width="100%"
                        height="300px"
                        objectFit="object-cover"
                        borderRadius="rounded-lg"
                      />
                    </Element>
                    
                    <Box 
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      padding="p-8"
                      className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300"
                    >
                      {showLightbox && (
                        <Element id={`gallery-lightbox-${item.id}`} is={Button}>
                          <Button
                            text=""
                            variant="secondary"
                            size="lg"
                            href={item.image}
                            className="w-16 h-16 rounded-full bg-white text-gray-800 hover:bg-gray-100 flex items-center justify-center"
                          />
                        </Element>
                      )}
                      
                      {showTitle && (
                        <Element id={`gallery-title-${item.id}`} is={Text}>
                          <Text
                            text={item.title}
                            tagName="h6"
                            fontSize="text-lg"
                            fontWeight="font-semibold"
                            color="text-white"
                            margin="mt-4"
                          />
                        </Element>
                      )}
                    </Box>
                  </Box>
                </Element>
              ))}
            </Box>
          </Box>
        </Box>
      </Element>
    </Element>
  );
};

RestaurantGalleryFilter1.craft = {
  displayName: "Restaurant Gallery Filter 1",
  props: {
    title: "Photo gallery",
    subtitle: "Luxury restaurant",
    backgroundImage: "https://placehold.co/1920x400",
    cardDesign: "default",
    itemsPerRow: 3,
    showTitle: true,
    showLightbox: true,
    filters: [
      { label: "All", filter: "*", active: true },
      { label: "Nonveg", filter: ".nonveg" },
      { label: "Vegetarian", filter: ".vegetarian" },
      { label: "Dessert", filter: ".dessert" },
      { label: "Drinks", filter: ".drinks" }
    ],
    galleryItems: [
      { id: "1", image: "https://placehold.co/600x446", title: "Gallery Image 1", categories: ["nonveg", "dessert", "drinks"] },
      { id: "2", image: "https://placehold.co/600x446", title: "Gallery Image 2", categories: ["vegetarian", "dessert"] },
      { id: "3", image: "https://placehold.co/600x446", title: "Gallery Image 3", categories: ["vegetarian", "dessert"] },
      { id: "4", image: "https://placehold.co/600x446", title: "Gallery Image 4", categories: ["nonveg", "vegetarian", "drinks"] },
      { id: "5", image: "https://placehold.co/600x446", title: "Gallery Image 5", categories: ["vegetarian", "dessert", "drinks"] },
      { id: "6", image: "https://placehold.co/600x446", title: "Gallery Image 6", categories: ["nonveg", "vegetarian", "drinks"] },
      { id: "7", image: "https://placehold.co/600x446", title: "Gallery Image 7", categories: ["nonveg", "vegetarian"] },
      { id: "8", image: "https://placehold.co/600x446", title: "Gallery Image 8", categories: ["nonveg", "dessert", "drinks"] },
      { id: "9", image: "https://placehold.co/600x446", title: "Gallery Image 9", categories: ["nonveg", "dessert", "drinks"] }
    ]
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
