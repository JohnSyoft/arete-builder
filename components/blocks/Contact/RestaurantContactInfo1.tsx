"use client";

import React from "react";
import { useNode, Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Button } from "../Basic/Button";

interface ContactInfo {
  title: string;
  content: string;
  icon?: string;
}

interface RestaurantContactInfo1Props {
  title?: string;
  subtitle?: string;
  contactInfo?: ContactInfo[];
}

export function RestaurantContactInfo1(props: RestaurantContactInfo1Props = {}) {
  const {
    title = "Reserve a Table? Let's talk us.",
    subtitle = "Need a private space?",
    contactInfo = [
      {
        title: "Write Us",
        content: "info@yourdomain.com\nhr@yourdomain.com"
      },
      {
        title: "Follow Us",
        content: "Crafto in facebook\nCrafto in twitter"
      },
      {
        title: "Call Us",
        content: "+1 234 567 8910\n+1 567 234 8910"
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
    <Element id="restaurant-contact-info" is={Section} canvas>
      <Box padding="py-16 px-4">
        <Box width="100%" margin="mx-auto">
          <Box display="flex" flexDirection="column" gap="gap-8" alignItems="center">
            {/* Header Section */}
            <Box display="flex" flexDirection="column" alignItems="center">
              <Element id="contact-info-subtitle" is={Text}>
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
              <Element id="contact-info-title" is={Text}>
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

            {/* Contact Info Grid */}
            <Box
              display="grid"
              gap="gap-8"
            >
              {contactInfo.map((info, index) => (
                <Element key={index} id={`contact-info-${index}`} is={Box}>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <Element id={`contact-info-title-${index}`} is={Text}>
                      <Text
                        text={info.title}
                        tagName="span"
                        fontSize="text-lg"
                        fontWeight="font-normal"
                        color="text-gray-800"
                        textTransform="uppercase"
                        margin="mb-4"
                      />
                    </Element>
                    
                    <Box>
                      {info.content.split('\n').map((line, lineIndex) => (
                        <Element key={lineIndex} id={`contact-info-line-${index}-${lineIndex}`} is={Text}>
                          <Text
                            text={line}
                            tagName="p"
                            fontSize="text-sm"
                            color="text-gray-600"
                            margin="mb-2"
                          />
                        </Element>
                      ))}
                    </Box>
                  </Box>
                </Element>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Element>
  );
};

RestaurantContactInfo1.craft = {
  displayName: "Restaurant Contact Info 1",
  props: {
    title: "Reserve a Table? Let's talk us.",
    subtitle: "Need a private space?",
    contactInfo: [
      {
        title: "Write Us",
        content: "info@yourdomain.com\nhr@yourdomain.com"
      },
      {
        title: "Follow Us",
        content: "Crafto in facebook\nCrafto in twitter"
      },
      {
        title: "Call Us",
        content: "+1 234 567 8910\n+1 567 234 8910"
      }
    ]
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
