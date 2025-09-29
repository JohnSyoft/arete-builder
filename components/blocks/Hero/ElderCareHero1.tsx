import React from "react";
import { Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Button } from "../Basic/Button";
import { Flex } from "../Basic/Flex";
import { Grid } from "../Basic/Grid";
import { Image } from "../Basic/Image";

interface ElderCareHero1Props {
  badge?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  volunteerText?: string;
  volunteerCount?: string;
  volunteerLink?: string;
  backgroundImage?: string;
  heroImage?: string;
  decorationImage1?: string;
  decorationImage2?: string;
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
}

export function ElderCareHero1({
  badge = "#1 Care for your loved ones",
  title = "Welcome to our home.",
  subtitle = "our",
  description = "Our elder care services go beyond the traditional scope of nursing offering personalized support.",
  primaryButtonText = "Get a free care",
  primaryButtonLink = "#",
  secondaryButtonText = "Ask questions?",
  secondaryButtonLink = "#",
  volunteerText = "500+ Volunteers - Register as volunteers?",
  volunteerCount = "500+",
  volunteerLink = "#",
  backgroundImage = "https://placehold.co/1920x1080/4A90E2/FFFFFF?text=Elder+Care+Hero",
  heroImage = "https://placehold.co/1070x950/87CEEB/FFFFFF?text=Senior+Care",
  decorationImage1 = "https://placehold.co/200x200/FFB6C1/FFFFFF?text=Deco1",
  decorationImage2 = "https://placehold.co/30x30/98FB98/FFFFFF?text=+",
  backgroundColor = "#1a1a1a",
  textColor = "#333333",
  nonEditable = true,
}: ElderCareHero1Props) {
  return (
    <Element id="eldercare-hero-container" is={Section} canvas>
      <Element
        id="eldercare-hero-background"
        is={Box}
        backgroundColor={backgroundColor}
        backgroundImage={backgroundImage}
        backgroundSize="cover"
        backgroundPosition="center"
        width="100%"
        minHeight="100vh"
      >
        {/* Decoration Image 1 */}
        <div className="absolute left-0 top-32 hidden lg:block">
          <Element
            id="eldercare-decoration-1"
            is={Image}
            src={decorationImage1}
            alt="Decoration"
            width="128px"
            height="128px"
            objectFit="object-contain"
          />
        </div>

        {/* Main Content Container */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-2 bg-white/90 rounded-full text-sm font-bold text-gray-800">
                <i className="bi bi-megaphone text-gray-800 mr-2"></i>
                <Element
                  id="eldercare-badge-text"
                  is={Text}
                  text={badge}
                  fontSize="text-sm"
                  fontWeight="font-bold"
                  color="text-gray-800"
                />
              </div>

              {/* Title */}
              <Element
                id="eldercare-title"
                is={Text}
                text={title}
                tagName="h1"
                fontSize="text-6xl lg:text-7xl"
                fontWeight="font-bold"
                color="text-gray-800"
              />

              {/* Description */}
              <Element
                id="eldercare-description"
                is={Text}
                text={description}
                tagName="p"
                fontSize="text-lg"
                color="text-gray-700"
              />

              {/* Buttons Container */}
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                {/* Primary Button */}
                <Element
                  id="eldercare-primary-button"
                  is={Button}
                  text={primaryButtonText}
                  href={primaryButtonLink}
                  backgroundColor="bg-blue-600"
                  textColor="text-white"
                />

                {/* Secondary Button */}
                <Element
                  id="eldercare-secondary-button"
                  is={Button}
                  text={secondaryButtonText}
                  href={secondaryButtonLink}
                  variant="link"
                />
              </div>

              {/* Volunteer Info */}
              <div className="flex items-center justify-center lg:justify-start">
                <Element
                  id="eldercare-decoration-2"
                  is={Image}
                  src={decorationImage2}
                  alt=""
                  width="32px"
                  height="32px"
                  margin="mr-2"
                />
                <Element
                  id="eldercare-volunteer-text"
                  is={Text}
                  text={`${volunteerCount} Volunteers - Register as volunteers?`}
                  fontSize="text-base"
                  fontWeight="font-bold"
                  color="text-gray-800"
                />
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative">
                <Element
                  id="eldercare-hero-image"
                  is={Image}
                  src={heroImage}
                  alt="Elder Care"
                  width="100%"
                  height="auto"
                  borderRadius="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </Element>
    </Element>
  );
}

ElderCareHero1.craft = {
  displayName: "Elder Care Hero 1",
  props: {
    badge: "#1 Care for your loved ones",
    title: "Welcome to our home.",
    subtitle: "our",
    description: "Our elder care services go beyond the traditional scope of nursing offering personalized support.",
    primaryButtonText: "Get a free care",
    primaryButtonLink: "#",
    secondaryButtonText: "Ask questions?",
    secondaryButtonLink: "#",
    volunteerText: "500+ Volunteers - Register as volunteers?",
    volunteerCount: "500+",
    volunteerLink: "#",
    backgroundImage: "https://placehold.co/1920x1080/4A90E2/FFFFFF?text=Elder+Care+Hero",
    heroImage: "https://placehold.co/1070x950/87CEEB/FFFFFF?text=Senior+Care",
    decorationImage1: "https://placehold.co/200x200/FFB6C1/FFFFFF?text=Deco1",
    decorationImage2: "https://placehold.co/30x30/98FB98/FFFFFF?text=+",
    backgroundColor: "#1a1a1a",
    textColor: "#333333",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true,
};
