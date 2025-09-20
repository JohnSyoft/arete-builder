"use client";

import React from "react";
import { useNode, Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Image } from "../Basic/Image";

interface RestaurantContactMap1Props {
  title?: string;
  subtitle?: string;
  mapLat?: number;
  mapLng?: number;
  mapStyle?: string;
  mapMarkerColor?: string;
  mapPopupTitle?: string;
  mapPopupAddress?: string;
  mapPopupLink?: string;
  backgroundImage?: string;
}

export function RestaurantContactMap1(props: RestaurantContactMap1Props = {}) {
  const {
    title = "Contact us",
    subtitle = "Delicious food",
    mapLat = -37.805688,
    mapLng = 144.962312,
    mapStyle = "Retro",
    mapMarkerColor = "#d39121",
    mapPopupTitle = "Crafto Restaurants",
    mapPopupAddress = "16122 Collins street, Melbourne, Australia",
    mapPopupLink = "https://maps.google.com/maps?ll=-37.805688,144.962312&z=17&t=m&hl=en-US&gl=IN&mapclient=embed&cid=13153204942596594449",
    backgroundImage = "https://placehold.co/1920x400"
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
    <Element id="restaurant-contact-map" is={Section} canvas>
      {/* Page Title Section */}
      <Element id="contact-map-title-section" is={Section}>
        <Box
          backgroundImage={backgroundImage}
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
              <Element id="contact-map-title" is={Text}>
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
              <Element id="contact-map-subtitle" is={Text}>
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

      {/* Map Section */}
      <Element id="contact-map-section" is={Section}>
        <Box padding="py-16 px-4">
          <Box width="100%" margin="mx-auto">
            <Box
              backgroundColor="bg-gray-100"
              padding="p-8"
              borderRadius="rounded-lg"
              minHeight="400px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Element id="map-placeholder" is={Text}>
                <Text
                  text={`Map: ${mapPopupTitle} - ${mapPopupAddress}`}
                  tagName="p"
                  fontSize="text-lg"
                  color="text-gray-600"
                  textAlign="center"
                />
              </Element>
            </Box>
          </Box>
        </Box>
      </Element>
    </Element>
  );
};

RestaurantContactMap1.craft = {
  displayName: "Restaurant Contact Map 1",
  props: {
    title: "Contact us",
    subtitle: "Delicious food",
    mapLat: -37.805688,
    mapLng: 144.962312,
    mapStyle: "Retro",
    mapMarkerColor: "#d39121",
    mapPopupTitle: "Crafto Restaurants",
    mapPopupAddress: "16122 Collins street, Melbourne, Australia",
    mapPopupLink: "https://maps.google.com/maps?ll=-37.805688,144.962312&z=17&t=m&hl=en-US&gl=IN&mapclient=embed&cid=13153204942596594449",
    backgroundImage: "https://placehold.co/1920x400"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
