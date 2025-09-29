import React from "react";
import { Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Button } from "../Basic/Button";
import { Flex } from "../Basic/Flex";
import { Icon } from "../Basic/Icon";
import { Image } from "../Basic/Image";

interface ElderCareCTA1Props {
  title?: string;
  description?: string;
  phoneNumber?: string;
  phoneLink?: string;
  buttonText?: string;
  buttonLink?: string;
  icon?: string;
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
}

export function ElderCareCTA1({
  title = "Need some help?",
  description = "Your generosity in whatever form it takes is deeply appreciated. Each act of kindness from you has a profound impact.",
  phoneNumber = "1 800 222 000",
  phoneLink = "tel:1800222000",
  buttonText = "Support us",
  buttonLink = "#",
  icon = "bi bi-headset",
  backgroundColor = "#1a1a1a",
  textColor = "#ffffff",
  nonEditable = true,
}: ElderCareCTA1Props) {
  return (
    <Element id="eldercare-cta-container" is={Section} canvas>
      <Element
        id="eldercare-cta-background"
        is={Box}
        backgroundColor={backgroundColor}
        width="100%"
        minHeight="120px"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left - Help Section */}
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <Element
                  id="eldercare-cta-avatar"
                  is={Image}
                  src="https://placehold.co/64x64/808080/FFFFFF?text=Icon"
                  alt="Avatar"
                  width="64px"
                  height="64px"
                  borderRadius="rounded-full"
                />
              </div>
              <div>
                <Element
                  id="eldercare-cta-title"
                  is={Text}
                  text={title}
                  tagName="h5"
                  fontSize="text-xl"
                  fontWeight="font-bold"
                  color="text-white"
                  margin="mb-1"
                />
                <div className="text-lg text-white/60">
                  Call now: <Element
                    id="eldercare-cta-phone"
                    is={Text}
                    text={phoneNumber}
                    tagName="span"
                    fontSize="text-lg"
                    color="text-white"
                  />
                </div>
              </div>
            </div>

            {/* Center - Description */}
            <div className="flex-1 text-center md:text-left">
              <Element
                id="eldercare-cta-description"
                is={Text}
                text={description}
                tagName="p"
                color="text-white/60"
              />
            </div>

            {/* Right - Support Button */}
            <div className="flex-shrink-0">
              <Element
                id="eldercare-cta-button"
                is={Button}
                text={buttonText}
                href={buttonLink}
                variant="outline"
                backgroundColor="bg-transparent"
                textColor="text-white"
              />
            </div>
          </div>
        </div>
      </Element>
    </Element>
  );
}

ElderCareCTA1.craft = {
  displayName: "Elder Care CTA 1",
  props: {
    title: "Need some help?",
    description: "Your generosity in whatever form it takes is deeply appreciated. Each act of kindness from you has a profound impact.",
    phoneNumber: "1 800 222 000",
    phoneLink: "tel:1800222000",
    buttonText: "Support us",
    buttonLink: "#",
    icon: "bi bi-headset",
    backgroundColor: "#1a1a1a",
    textColor: "#ffffff",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true,
};
