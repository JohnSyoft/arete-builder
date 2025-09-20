"use client";

import React from "react";
import { useNode, Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Image } from "../Basic/Image";

interface SpecialOffer {
  id: string;
  name: string;
  originalPrice: string;
  currentPrice: string;
  rating: number;
  image: string;
  transform?: string;
}

interface RestaurantSpecialOffers1Props {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  specialOffers?: SpecialOffer[];
}

export function RestaurantSpecialOffers1(props: RestaurantSpecialOffers1Props = {}) {
  const {
    title = "Special proposals",
    subtitle = "Master chef's special",
    backgroundImage = "https://placehold.co/1920x524",
    specialOffers = [
      {
        id: "1",
        name: "Grilled steak marinades",
        originalPrice: "$25.00",
        currentPrice: "$19.00",
        rating: 4.8,
        image: "https://placehold.co/400x303",
        transform: "rotate(15deg)"
      },
      {
        id: "2",
        name: "Beef masala grill",
        originalPrice: "$24.00",
        currentPrice: "$18.00",
        rating: 4.3,
        image: "https://placehold.co/400x303",
        transform: "rotate(-15deg)"
      },
      {
        id: "3",
        name: "Slow Cooker Potpourri",
        originalPrice: "$22.00",
        currentPrice: "$20.00",
        rating: 4.9,
        image: "https://placehold.co/400x303",
        transform: "rotate(15deg)"
      }
    ]
  } = props;
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i key={i} className={`bi bi-star-fill text-white ${i < Math.floor(rating) ? '' : 'opacity-50'}`}></i>
    ));
  };

  return (
    <Element id="restaurant-special-offers" is={Section} canvas>
      <Box
        backgroundImage={backgroundImage}
        backgroundSize="cover"
        backgroundPosition="center bottom"
        padding="py-16 px-4"
        minHeight="600px"
        display="flex"
        alignItems="center"
      >
        <Box width="100%" margin="mx-auto">
          {/* Header Section */}
          <Box display="flex" flexDirection="column" alignItems="center" margin="mb-8">
            <Element id="special-offers-subtitle" is={Text}>
              <Text
                text={subtitle}
                tagName="span"
                fontSize="text-sm"
                fontWeight="font-semibold"
                color="text-red-600"
                textTransform="uppercase"
                margin="mb-4"
              />
            </Element>
            <Element id="special-offers-title" is={Text}>
              <Text
                text={title}
                tagName="h2"
                fontSize="text-3xl md:text-4xl"
                fontWeight="font-normal"
                color="text-gray-800"
                textAlign="center"
              />
            </Element>
          </Box>

          {/* Special Offers Grid */}
          <Box
            display="grid"
            gap="gap-8"
          >
            {specialOffers.map((offer, index) => (
              <Element key={offer.id} id={`special-offer-${offer.id}`} is={Box}>
                <Box
                  backgroundColor="bg-white"
                  borderRadius="rounded-lg"
                  padding="p-6"
                >
                  {/* Offer Image */}
                  <Box margin="mb-6">
                    <Element id={`offer-image-${offer.id}`} is={Image}>
                      <Image
                        src={offer.image}
                        alt={offer.name}
                        width="100%"
                        height="200px"
                        objectFit="object-cover"
                        borderRadius="rounded-lg"
                      />
                    </Element>
                  </Box>

                  {/* Rating */}
                  <Box margin="mb-5">
                    <Box
                      backgroundColor="bg-yellow-400"
                      borderRadius="rounded-lg"
                      padding="px-4 py-2"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      gap="gap-2"
                    >
                      <Box display="flex" gap="gap-1">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Element key={i} id={`star-${offer.id}-${i}`} is={Text}>
                            <Text
                              text="★"
                              tagName="span"
                              fontSize="text-sm"
                              color={i < Math.floor(offer.rating) ? "text-white" : "text-gray-300"}
                            />
                          </Element>
                        ))}
                      </Box>
                      <Element id={`offer-rating-${offer.id}`} is={Text}>
                        <Text
                          text={offer.rating.toString()}
                          tagName="span"
                          fontSize="text-sm"
                          fontWeight="font-medium"
                          color="text-white"
                          backgroundColor="bg-gray-800"
                          padding="px-2 py-1"
                          borderRadius="rounded"
                        />
                      </Element>
                    </Box>
                  </Box>

                  {/* Offer Name */}
                  <Element id={`offer-name-${offer.id}`} is={Text}>
                    <Text
                      text={offer.name}
                      tagName="h3"
                      fontSize="text-xl"
                      fontWeight="font-semibold"
                      color="text-gray-800"
                      margin="mb-4"
                    />
                  </Element>

                  {/* Pricing */}
                  <Box display="flex" alignItems="center" justifyContent="center" gap="gap-2">
                    <Element id={`offer-original-price-${offer.id}`} is={Text}>
                      <Text
                        text={offer.originalPrice}
                        tagName="span"
                        fontSize="text-lg"
                        color="text-red-500"
                        textDecoration="line-through"
                      />
                    </Element>
                    <Element id={`offer-current-price-${offer.id}`} is={Text}>
                      <Text
                        text={offer.currentPrice}
                        tagName="span"
                        fontSize="text-2xl"
                        fontWeight="font-bold"
                        color="text-gray-800"
                      />
                    </Element>
                  </Box>
                </Box>
              </Element>
            ))}
          </Box>
        </Box>
      </Box>
    </Element>
  );
}

RestaurantSpecialOffers1.craft = {
  displayName: "Restaurant Special Offers 1",
  props: {
    title: "Special proposals",
    subtitle: "Master chef's special",
    backgroundImage: "https://placehold.co/1920x524",
    specialOffers: [
      {
        id: "1",
        name: "Grilled steak marinades",
        originalPrice: "$25.00",
        currentPrice: "$19.00",
        rating: 4.8,
        image: "https://placehold.co/400x303",
        transform: "rotate(15deg)"
      },
      {
        id: "2",
        name: "Beef masala grill",
        originalPrice: "$24.00",
        currentPrice: "$18.00",
        rating: 4.3,
        image: "https://placehold.co/400x303",
        transform: "rotate(-15deg)"
      },
      {
        id: "3",
        name: "Slow Cooker Potpourri",
        originalPrice: "$22.00",
        currentPrice: "$20.00",
        rating: 4.9,
        image: "https://placehold.co/400x303",
        transform: "rotate(15deg)"
      }
    ]
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
