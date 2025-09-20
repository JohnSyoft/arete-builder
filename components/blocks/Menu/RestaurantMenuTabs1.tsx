"use client";

import React from "react";
import { useNode, Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Image } from "../Basic/Image";
import { Button } from "../Basic/Button";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface MenuTab {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
  items: MenuItem[];
}

interface RestaurantMenuTabs1Props {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  menuTabs?: MenuTab[];
}

export function RestaurantMenuTabs1(props: RestaurantMenuTabs1Props = {}) {
  const {
    title = "Our menu",
    subtitle = "Remarkable recipes",
    backgroundImage = "https://placehold.co/1920x400",
    menuTabs = [
      {
        id: "tab_first1",
        label: "Starters",
        icon: "line-icon-Chopsticks",
        active: true,
        items: [
          { id: "1", name: "Boiled organic egg", description: "Lorem ipsum has been the industry.", price: "$12.00", image: "https://placehold.co/105x105" },
          { id: "2", name: "Chicken breast burger", description: "Lorem ipsum has been the industry.", price: "$10.00", image: "https://placehold.co/105x105" },
          { id: "3", name: "Medium spicy chips", description: "Lorem ipsum has been the industry.", price: "$08.00", image: "https://placehold.co/105x105" },
          { id: "4", name: "Boiled organic egg", description: "Lorem ipsum has been the industry.", price: "$12.00", image: "https://placehold.co/105x105" },
          { id: "5", name: "Chicken breast burger", description: "Lorem ipsum has been the industry.", price: "$11.00", image: "https://placehold.co/105x105" },
          { id: "6", name: "Medium spicy chips", description: "Lorem ipsum has been the industry.", price: "$10.00", image: "https://placehold.co/105x105" }
        ]
      },
      {
        id: "tab_first2",
        label: "Nonvage",
        icon: "line-icon-Bike-Helmet",
        items: [
          { id: "7", name: "Boiled organic egg", description: "Lorem ipsum has been the industry.", price: "$12.00", image: "https://placehold.co/105x105" },
          { id: "8", name: "Chicken breast burger", description: "Lorem ipsum has been the industry.", price: "$10.00", image: "https://placehold.co/105x105" },
          { id: "9", name: "Medium spicy chips", description: "Lorem ipsum has been the industry.", price: "$08.00", image: "https://placehold.co/105x105" }
        ]
      },
      {
        id: "tab_first3",
        label: "Vegetarian",
        icon: "line-icon-Doughnut",
        items: [
          { id: "10", name: "Boiled organic egg", description: "Lorem ipsum has been the industry.", price: "$12.00", image: "https://placehold.co/105x105" },
          { id: "11", name: "Chicken breast burger", description: "Lorem ipsum has been the industry.", price: "$10.00", image: "https://placehold.co/105x105" },
          { id: "12", name: "Medium spicy chips", description: "Lorem ipsum has been the industry.", price: "$08.00", image: "https://placehold.co/105x105" }
        ]
      },
      {
        id: "tab_first4",
        label: "Dessert",
        icon: "line-icon-Cupcake",
        items: [
          { id: "13", name: "Boiled organic egg", description: "Lorem ipsum has been the industry.", price: "$12.00", image: "https://placehold.co/105x105" },
          { id: "14", name: "Chicken breast burger", description: "Lorem ipsum has been the industry.", price: "$10.00", image: "https://placehold.co/105x105" },
          { id: "15", name: "Medium spicy chips", description: "Lorem ipsum has been the industry.", price: "$08.00", image: "https://placehold.co/105x105" }
        ]
      },
      {
        id: "tab_first5",
        label: "Drinks",
        icon: "line-icon-Beer",
        items: [
          { id: "16", name: "Boiled organic egg", description: "Lorem ipsum has been the industry.", price: "$12.00", image: "https://placehold.co/105x105" },
          { id: "17", name: "Chicken breast burger", description: "Lorem ipsum has been the industry.", price: "$10.00", image: "https://placehold.co/105x105" },
          { id: "18", name: "Medium spicy chips", description: "Lorem ipsum has been the industry.", price: "$08.00", image: "https://placehold.co/105x105" }
        ]
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

  return (
    <Element id="restaurant-menu-tabs" is={Section} canvas>
      {/* Page Title Section */}
      <Element id="menu-title-section" is={Section}>
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
              <Element id="menu-title" is={Text}>
                <Text
                  text={title}
                  tagName="h1"
                  fontSize="text-4xl md:text-5xl"
                  fontWeight="font-normal"
                  color="text-gray-800"
                  textTransform="uppercase"
                  margin="mb-4"
                />
              </Element>
              <Element id="menu-subtitle" is={Text}>
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

      {/* Menu Section */}
      <Element id="menu-content-section" is={Section}>
        <Box
          backgroundImage="https://placehold.co/1920x1151"
          backgroundSize="cover"
          backgroundPosition="center"
          padding="py-16 px-4"
        >
          <Box width="100%" margin="mx-auto">
            {/* Section Header */}
            <Box display="flex" flexDirection="column" alignItems="center" margin="mb-8">
              <Element id="menu-section-subtitle" is={Text}>
                <Text
                  text="Choose delicious"
                  tagName="span"
                  fontSize="text-sm"
                  fontWeight="font-semibold"
                  color="text-red-600"
                  textTransform="uppercase"
                  margin="mb-4"
                />
              </Element>
              <Element id="menu-section-title" is={Text}>
                <Text
                  text="Popular menu"
                  tagName="h2"
                  fontSize="text-3xl md:text-4xl"
                  fontWeight="font-normal"
                  color="text-gray-800"
                />
              </Element>
            </Box>

            {/* Menu Tabs */}
            <Box display="flex" flexDirection="column" gap="gap-8">
              {/* Tab Navigation */}
              <Box display="flex" justifyContent="center" gap="gap-4">
                {menuTabs.map((tab) => (
                  <Element key={tab.id} id={`menu-tab-${tab.id}`} is={Button}>
                    <Button
                      text={tab.label}
                      variant={tab.active ? "default" : "outline"}
                      size="lg"
                    />
                  </Element>
                ))}
              </Box>

              {/* Tab Content */}
              <Box>
                {menuTabs.map((tab) => (
                  <Element key={tab.id} id={`menu-tab-content-${tab.id}`} is={Box}>
                    <Box
                      display="grid"
                      gap="gap-6"
                    >
                      {tab.items.map((item) => (
                        <Element key={item.id} id={`menu-item-${item.id}`} is={Box}>
                          <Box
                            backgroundColor="bg-white"
                            padding="p-6"
                            borderRadius="rounded-lg"
                            display="flex"
                            alignItems="center"
                            gap="gap-4"
                          >
                            <Element id={`menu-item-image-${item.id}`} is={Image}>
                              <Image
                                src={item.image}
                                alt={item.name}
                                width="80px"
                                height="80px"
                                objectFit="object-cover"
                                borderRadius="rounded-full"
                              />
                            </Element>
                            
                            <Box display="flex" flexDirection="column" gap="gap-2">
                              <Box display="flex" alignItems="center" justifyContent="between">
                                <Element id={`menu-item-name-${item.id}`} is={Text}>
                                  <Text
                                    text={item.name}
                                    tagName="span"
                                    fontSize="text-lg"
                                    fontWeight="font-semibold"
                                    color="text-gray-800"
                                  />
                                </Element>
                                <Element id={`menu-item-price-${item.id}`} is={Text}>
                                  <Text
                                    text={item.price}
                                    tagName="span"
                                    fontSize="text-lg"
                                    fontWeight="font-semibold"
                                    color="text-gray-800"
                                  />
                                </Element>
                              </Box>
                              <Element id={`menu-item-description-${item.id}`} is={Text}>
                                <Text
                                  text={item.description}
                                  tagName="p"
                                  fontSize="text-sm"
                                  color="text-gray-600"
                                />
                              </Element>
                            </Box>
                          </Box>
                        </Element>
                      ))}
                    </Box>
                  </Element>
                ))}
              </Box>
            </Box>

            {/* Footer */}
            <Box display="flex" alignItems="center" justifyContent="center" margin="mt-8">
              <Element id="menu-footer" is={Text}>
                <Text
                  text="Masterchef - Unique and delicious dishes from the worlds best masterchefs."
                  tagName="p"
                  fontSize="text-lg"
                  fontWeight="font-medium"
                  color="text-gray-800"
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

RestaurantMenuTabs1.craft = {
  displayName: "Restaurant Menu Tabs 1",
  props: {
    title: "Our menu",
    subtitle: "Remarkable recipes",
    backgroundImage: "https://placehold.co/1920x400",
    menuTabs: [
      {
        id: "tab_first1",
        label: "Starters",
        icon: "line-icon-Chopsticks",
        active: true,
        items: [
          { id: "1", name: "Boiled organic egg", description: "Lorem ipsum has been the industry.", price: "$12.00", image: "https://placehold.co/105x105" },
          { id: "2", name: "Chicken breast burger", description: "Lorem ipsum has been the industry.", price: "$10.00", image: "https://placehold.co/105x105" },
          { id: "3", name: "Medium spicy chips", description: "Lorem ipsum has been the industry.", price: "$08.00", image: "https://placehold.co/105x105" },
          { id: "4", name: "Boiled organic egg", description: "Lorem ipsum has been the industry.", price: "$12.00", image: "https://placehold.co/105x105" },
          { id: "5", name: "Chicken breast burger", description: "Lorem ipsum has been the industry.", price: "$11.00", image: "https://placehold.co/105x105" },
          { id: "6", name: "Medium spicy chips", description: "Lorem ipsum has been the industry.", price: "$10.00", image: "https://placehold.co/105x105" }
        ]
      }
    ]
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
