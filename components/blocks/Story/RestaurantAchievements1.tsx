"use client";

import React from "react";
import { useNode, Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Image } from "../Basic/Image";
import { Button } from "../Basic/Button";

interface Achievement {
  id: string;
  title: string;
  year: string;
  image: string;
}

interface RestaurantAchievements1Props {
  title?: string;
  subtitle?: string;
  achievements?: Achievement[];
  statsText?: string;
  statsNumber?: string;
  clientLogo?: string;
  clientLink?: string;
}

export function RestaurantAchievements1(props: RestaurantAchievements1Props = {}) {
  const {
    title = "Achievements",
    subtitle = "Awards and honours",
    achievements = [
      {
        id: "1",
        title: "Restaurant choice award",
        year: "2017",
        image: "https://placehold.co/133x134"
      },
      {
        id: "2",
        title: "Luxury restaurant award",
        year: "2019",
        image: "https://placehold.co/133x134"
      },
      {
        id: "3",
        title: "British best kebab award",
        year: "2020",
        image: "https://placehold.co/133x134"
      },
      {
        id: "4",
        title: "Good food taste award",
        year: "2021",
        image: "https://placehold.co/133x134"
      }
    ],
    statsText = "happy food lovers visited our restaurant.",
    statsNumber = "25,000+",
    clientLogo = "images/demo-hotel-and-resort-client-01.svg",
    clientLink = "https://tripadvisor.in/"
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
    <Element id="restaurant-achievements" is={Section} canvas>
      <Box padding="py-16 px-4">
        <Box width="100%" margin="mx-auto">
          {/* Header Section */}
          <Box display="flex" flexDirection="column" alignItems="center" margin="mb-8">
            <Element id="achievements-subtitle" is={Text}>
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
            <Element id="achievements-title" is={Text}>
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

          {/* Achievements Grid */}
          <Box
            display="grid"
            gap="gap-0"
          >
            {achievements.map((achievement) => (
              <Element key={achievement.id} id={`achievement-${achievement.id}`} is={Box}>
                <Box
                  backgroundColor="bg-white"
                  padding="p-6"
                >
                  {/* Achievement Icon */}
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <Box margin="mb-5">
                      <Element id={`achievement-icon-${achievement.id}`} is={Image}>
                        <Image
                          src={achievement.image}
                          alt={achievement.title}
                          width="80px"
                          height="80px"
                          objectFit="object-contain"
                        />
                      </Element>
                    </Box>

                    {/* Achievement Content */}
                    <Element id={`achievement-content-${achievement.id}`} is={Text}>
                      <Text
                        text={`${achievement.title} - ${achievement.year}`}
                        tagName="span"
                        fontSize="text-sm"
                        color="text-gray-700"
                        textAlign="center"
                        lineHeight="leading-relaxed"
                      />
                    </Element>
                  </Box>
                </Box>
              </Element>
            ))}
          </Box>

          {/* Stats Section */}
          <Box display="flex" flexDirection="column" alignItems="center" margin="mt-8">
            <Box display="flex" alignItems="center" gap="gap-4" justifyContent="center">
              <Element id="stats-content" is={Text}>
                <Text
                  text={`${statsNumber} ${statsText}`}
                  tagName="p"
                  fontSize="text-lg"
                  fontWeight="font-medium"
                  color="text-gray-800"
                  textAlign="center"
                />
              </Element>
              
              <Element id="client-logo" is={Image}>
                <Image
                  src={clientLogo}
                  alt="Client Logo"
                  width="120px"
                  height="55px"
                  objectFit="object-contain"
                />
              </Element>
            </Box>
          </Box>
        </Box>
      </Box>
    </Element>
  );
}

RestaurantAchievements1.craft = {
  displayName: "Restaurant Achievements 1",
  props: {
    title: "Achievements",
    subtitle: "Awards and honours",
    achievements: [
      {
        id: "1",
        title: "Restaurant choice award",
        year: "2017",
        image: "https://placehold.co/133x134"
      },
      {
        id: "2",
        title: "Luxury restaurant award",
        year: "2019",
        image: "https://placehold.co/133x134"
      },
      {
        id: "3",
        title: "British best kebab award",
        year: "2020",
        image: "https://placehold.co/133x134"
      },
      {
        id: "4",
        title: "Good food taste award",
        year: "2021",
        image: "https://placehold.co/133x134"
      }
    ],
    statsText: "happy food lovers visited our restaurant.",
    statsNumber: "25,000+",
    clientLogo: "images/demo-hotel-and-resort-client-01.svg",
    clientLink: "https://tripadvisor.in/"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
