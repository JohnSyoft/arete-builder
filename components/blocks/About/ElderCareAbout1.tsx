import React from "react";
import { Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Button } from "../Basic/Button";
import { Flex } from "../Basic/Flex";
import { Grid } from "../Basic/Grid";
import { Image } from "../Basic/Image";
import { Icon } from "../Basic/Icon";

interface ElderCareAbout1Props {
  badge?: string;
  title?: string;
  features?: Array<{
    title: string;
    description: string;
  }>;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  callText?: string;
  phoneNumber?: string;
  phoneLink?: string;
  mainImage?: string;
  decorationImage1?: string;
  decorationImage2?: string;
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
}

export function ElderCareAbout1({
  badge = "# Happy elder care",
  title = "Provides the best services for you.",
  features = [
    {
      title: "Professional care",
      description: "The place we call home is the place that feels most comfortable. A sense of home can especially.",
    },
    {
      title: "Affordable price",
      description: "There is no higher praise for us than the smile of happy patient, the thanks of engaged resident.",
    },
  ],
  primaryButtonText = "Discover more",
  primaryButtonLink = "#",
  callText = "Call Anytime",
  phoneNumber = "1 800 222 000",
  phoneLink = "tel:1800222000",
  mainImage = "https://placehold.co/504x589/87CEEB/FFFFFF?text=Senior+Care",
  decorationImage1 = "https://placehold.co/200x200/FFB6C1/FFFFFF?text=Deco1",
  decorationImage2 = "https://placehold.co/385x424/98FB98/FFFFFF?text=Deco2",
  backgroundColor = "#ffffff",
  textColor = "#333333",
  nonEditable = true,
}: ElderCareAbout1Props) {
  return (
    <Element id="eldercare-about-container" is={Section} canvas>
      <Element
        id="eldercare-about-background"
        is={Box}
        backgroundColor={backgroundColor}
        width="100%"
        minHeight="400px"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Images */}
            <div className="relative">
              <div className="relative">
                <Element
                  id="eldercare-about-main-image"
                  is={Image}
                  src={mainImage}
                  alt="Elder Care"
                  width="100%"
                  height="auto"
                  borderRadius="rounded-lg"
                />
                {/* Decoration Image 1 */}
                <div className="absolute -right-16 top-16 hidden md:block">
                  <Element
                    id="eldercare-about-decoration-1"
                    is={Image}
                    src={decorationImage1}
                    alt="Decoration"
                    width="128px"
                    height="128px"
                    objectFit="object-contain"
                    animation="spin"
                    animationDuration="10000ms"
                  />
                </div>
              </div>
              {/* Decoration Image 2 */}
              <div className="absolute -right-4 -bottom-12 lg:-bottom-16 w-48 lg:w-56">
                <Element
                  id="eldercare-about-decoration-2"
                  is={Image}
                  src={decorationImage2}
                  alt="Decoration"
                  width="100%"
                  height="auto"
                  animation="spin"
                  animationDuration="10000ms"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <Element
                id="eldercare-about-badge"
                is={Text}
                text={badge}
                tagName="span"
                fontSize="text-sm"
                fontWeight="font-semibold"
                color="text-blue-600"
              />

              {/* Title */}
              <Element
                id="eldercare-about-title"
                is={Text}
                text={title}
                tagName="h2"
                fontSize="text-4xl lg:text-5xl"
                fontWeight="font-bold"
                color="text-gray-800"
              />

              {/* Features */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fa-solid fa-check text-white text-sm"></i>
                    </div>
                    <div>
                      <Element
                        id={`eldercare-about-feature-title-${index}`}
                        is={Text}
                        text={feature.title}
                        tagName="h3"
                        fontSize="text-xl"
                        fontWeight="font-bold"
                        color="text-gray-800"
                        margin="mb-2"
                      />
                      <Element
                        id={`eldercare-about-feature-description-${index}`}
                        is={Text}
                        text={feature.description}
                        tagName="p"
                        color="text-gray-600"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <Element
                  id="eldercare-about-primary-button"
                  is={Button}
                  text={primaryButtonText}
                  href={primaryButtonLink}
                  backgroundColor="bg-gray-800"
                  textColor="text-white"
                  borderRadius="rounded-full"
                  padding="px-8 py-4"
                  showIcon={true}
                  iconType="arrow-right"
                  iconPosition="right"
                  hoverEffect="none"
                  transitionDuration="300ms"
                />

                {/* Call Section */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 border-2 border-gray-300 rounded-full flex items-center justify-center">
                    <Element
                      id="eldercare-about-phone-icon"
                      is={Icon}
                      iconName="phone"
                      size={24}
                      color="text-gray-800"
                    />
                  </div>
                  <div>
                    <Element
                      id="eldercare-about-call-text"
                      is={Text}
                      text={callText}
                      tagName="span"
                      fontSize="text-sm"
                      color="text-gray-600"
                    />
                    <Element
                      id="eldercare-about-phone"
                      is={Text}
                      text={phoneNumber}
                      tagName="span"
                      fontSize="text-xl"
                      fontWeight="font-semibold"
                      color="text-gray-800"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </Element>
  );
}

ElderCareAbout1.craft = {
  displayName: "Elder Care About 1",
  props: {
    badge: "# Happy elder care",
    title: "Provides the best services for you.",
    features: [
      {
        title: "Professional care",
        description: "The place we call home is the place that feels most comfortable. A sense of home can especially.",
      },
      {
        title: "Affordable price",
        description: "There is no higher praise for us than the smile of happy patient, the thanks of engaged resident.",
      },
    ],
    primaryButtonText: "Discover more",
    primaryButtonLink: "#",
    callText: "Call Anytime",
    phoneNumber: "1 800 222 000",
    phoneLink: "tel:1800222000",
    mainImage: "https://placehold.co/504x589/87CEEB/FFFFFF?text=Senior+Care",
    decorationImage1: "https://placehold.co/200x200/FFB6C1/FFFFFF?text=Deco1",
    decorationImage2: "https://placehold.co/385x424/98FB98/FFFFFF?text=Deco2",
    backgroundColor: "#ffffff",
    textColor: "#333333",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true,
};
