import React from "react";
import { Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Image } from "../Basic/Image";
import { Button } from "../Basic/Button";
import { Icon } from "../Basic/Icon";

interface FeatureItem {
  title: string;
  description: string;
}

interface ElderCareFeatures1Props {
  badge?: string;
  title?: string;
  description?: string;
  features?: FeatureItem[];
  primaryButtonText?: string;
  primaryButtonLink?: string;
  callText?: string;
  phoneNumber?: string;
  phoneLink?: string;
  mainImage?: string;
  decorationImage?: string;
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
}

export function ElderCareFeatures1({
  badge = "# Professional elder care",
  title = "Compassionate care, tailored for you.",
  description = "It has survived not only centuries, but also the leap into electronic, remaining essentially unchanged.",
  features = [
    {
      title: "Focus on symptom management.",
      description: "",
    },
    {
      title: "Improving the quality of elder life.",
      description: "",
    },
    {
      title: "Convenient one story design.",
      description: "",
    },
  ],
  primaryButtonText = "Discover more",
  primaryButtonLink = "#",
  callText = "Schedule your appointment for today.",
  phoneNumber = "1 800 222 000",
  phoneLink = "tel:1800222000",
  mainImage = "https://placehold.co/657x626/87CEEB/FFFFFF?text=Senior+Care",
  decorationImage = "https://placehold.co/200x200/FFB6C1/FFFFFF?text=Deco",
  backgroundColor = "#ffffff",
  textColor = "#333333",
  nonEditable = true,
}: ElderCareFeatures1Props) {
  return (
    <Element id="eldercare-features-container" is={Section} canvas>
      <Element
        id="eldercare-features-background"
        is={Box}
        backgroundColor={backgroundColor}
        width="100%"
        minHeight="400px"
        className="py-16"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="bg-blue-50 p-8 lg:p-12 rounded-lg">
              <Element
                id="eldercare-features-badge"
                is={Text}
                text={badge}
                tagName="span"
                fontSize="text-sm"
                fontWeight="font-semibold"
                color="text-blue-600"
                className="inline-block uppercase tracking-wide mb-4"
              />
              <Element
                id="eldercare-features-title"
                is={Text}
                text={title}
                tagName="h3"
                fontSize="text-3xl"
                fontWeight="font-bold"
                color="text-gray-800"
                margin="mb-6"
                className="leading-tight"
              />
              <Element
                id="eldercare-features-description"
                is={Text}
                text={description}
                tagName="p"
                fontSize="text-lg"
                color="text-gray-600"
                margin="mb-8"
              />

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Element
                        id={`eldercare-features-check-${index}`}
                        is={Icon}
                        iconName="check"
                        size={16}
                        color="text-white"
                      />
                    </div>
                    <Element
                      id={`eldercare-features-feature-${index}`}
                      is={Text}
                      text={feature.title}
                      tagName="span"
                      fontSize="text-lg"
                      fontWeight="font-semibold"
                      color="text-gray-800"
                    />
                  </div>
                ))}
              </div>

              {/* Discover Button */}
              <Element
                id="eldercare-features-button"
                is={Button}
                text={primaryButtonText}
                href={primaryButtonLink}
                className="inline-flex items-center px-8 py-4 bg-gray-800 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors group"
              />
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div
                className="w-full h-96 lg:h-[500px] rounded-lg bg-cover bg-center relative"
                style={{ backgroundImage: `url(${mainImage})` }}
              >
                {/* Decoration Image */}
                <Element
                  id="eldercare-features-decoration"
                  is={Image}
                  src={decorationImage}
                  alt="Decoration"
                  width="128px"
                  height="128px"
                  objectFit="object-contain"
                  className="absolute -bottom-16 -right-8"
                />
              </div>
            </div>
          </div>

          {/* Call to Action Bar */}
          <div className="mt-8 py-6 border-t border-gray-200">
            <div className="flex items-center justify-center gap-4">
              <Element
                id="eldercare-features-calendar-icon"
                is={Icon}
                iconName="calendar"
                size={24}
                color="text-blue-600"
              />
              <div className="text-lg text-gray-800">
                {callText}{" "}
                <Element
                  id="eldercare-features-phone-link"
                  is={Text}
                  text={`Call on ${phoneNumber}`}
                  tagName="a"
                  href={phoneLink}
                  fontSize="text-lg"
                  color="text-gray-800"
                  className="hover:text-blue-600 font-semibold underline"
                />
              </div>
            </div>
          </div>
        </div>
      </Element>
    </Element>
  );
}

ElderCareFeatures1.craft = {
  displayName: "Elder Care Features 1",
  props: {
    badge: "# Professional elder care",
    title: "Compassionate care, tailored for you.",
    description: "It has survived not only centuries, but also the leap into electronic, remaining essentially unchanged.",
    features: [
      {
        title: "Focus on symptom management.",
        description: "",
      },
      {
        title: "Improving the quality of elder life.",
        description: "",
      },
      {
        title: "Convenient one story design.",
        description: "",
      },
    ],
    primaryButtonText: "Discover more",
    primaryButtonLink: "#",
    callText: "Schedule your appointment for today.",
    phoneNumber: "1 800 222 000",
    phoneLink: "tel:1800222000",
    mainImage: "https://placehold.co/657x626/87CEEB/FFFFFF?text=Senior+Care",
    decorationImage: "https://placehold.co/200x200/FFB6C1/FFFFFF?text=Deco",
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
