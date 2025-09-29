import React from "react";
import { Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Image } from "../Basic/Image";
import { Grid } from "../Basic/Grid";

interface TimelineItem {
  year: string;
  amount: string;
  description: string;
}

interface ElderCareTimeline1Props {
  title?: string;
  description?: string;
  totalAmount?: string;
  totalDescription?: string;
  iconImage?: string;
  timelineItems?: TimelineItem[];
  backgroundImage?: string;
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
}

export function ElderCareTimeline1({
  title = "Donated money counts.",
  description = "Lorem ipsum dolor sit amet consectetur adipiscing.",
  totalAmount = "$175,990",
  totalDescription = "Collected in the many years",
  iconImage = "https://placehold.co/72x64/FFB6C1/FFFFFF?text=Icon",
  timelineItems = [
    { year: "1998", amount: "10k", description: "Total collected this year" },
    { year: "2008", amount: "18k", description: "Total collected this year" },
    { year: "2014", amount: "23k", description: "Total collected this year" },
    { year: "2017", amount: "32k", description: "Total collected this year" },
    { year: "2022", amount: "39k", description: "Total collected this year" },
    { year: "2024", amount: "42k", description: "Total collected this year" },
  ],
  backgroundImage = "https://placehold.co/1920x700/4A90E2/FFFFFF?text=Donation+Timeline",
  backgroundColor = "#f8f9fa",
  textColor = "#333333",
  nonEditable = true,
}: ElderCareTimeline1Props) {
  return (
    <Element id="eldercare-timeline-container" is={Section} canvas>
      <Element
        id="eldercare-timeline-background"
        is={Box}
        backgroundImage={backgroundImage}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundColor={backgroundColor}
        width="100%"
        minHeight="400px"
        className="py-16 relative"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-800/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
            <div className="flex items-center gap-6 mb-6 lg:mb-0">
              <Element
                id="eldercare-timeline-icon"
                is={Image}
                src={iconImage}
                alt="Donation Icon"
                width="64px"
                height="56px"
                objectFit="object-contain"
              />
              <div>
                <Element
                  id="eldercare-timeline-title"
                  is={Text}
                  text={title}
                  tagName="h3"
                  fontSize="text-2xl"
                  fontWeight="font-bold"
                  color="text-gray-800"
                  margin="mb-2"
                />
                <Element
                  id="eldercare-timeline-description"
                  is={Text}
                  text={description}
                  tagName="p"
                  color="text-gray-600"
                />
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <Element
                id="eldercare-timeline-total-amount"
                is={Text}
                text={totalAmount}
                tagName="h2"
                fontSize="text-4xl"
                fontWeight="font-semibold"
                color="text-gray-800"
                margin="mb-2"
              />
              <Element
                id="eldercare-timeline-total-description"
                is={Text}
                text={totalDescription}
                tagName="p"
                color="text-gray-600"
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {timelineItems.map((item, index) => (
              <Element
                key={index}
                id={`eldercare-timeline-item-${index}`}
                is={Box}
                className="text-center group rounded-lg p-4"
                backgroundColor="transparent"
                textColor="#333333"
                hoverBackgroundColor="rgba(255, 255, 255, 0.1)"
                hoverTextColor="#333333"
                hoverScale="1.02"
                transitionDuration="300ms"
                borderRadius="8px"
                padding="16px"
              >
                {/* Timeline Line */}
                <div className="relative mb-6">
                  <div className="w-full h-px bg-gray-800 absolute top-1/2 left-0"></div>
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto relative z-10 group-hover:bg-blue-200 transition-colors">
                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                  </div>
                </div>
                
                {/* Content */}
                <Element
                  id={`eldercare-timeline-year-${index}`}
                  is={Text}
                  text={item.year}
                  tagName="h4"
                  fontSize="text-lg"
                  fontWeight="font-bold"
                  color="text-gray-800"
                  margin="mb-2"
                />
                {/* <div className="max-w-20 mx-auto"> */}
                  <Element
                    id={`eldercare-timeline-item-description-${index}`}
                    is={Text}
                    text={item.description}
                    tagName="p"
                    fontSize="text-sm"
                    color="text-gray-600"
                  />
                {/* </div> */}
              </Element>
            ))}
          </div>
        </div>
      </Element>
    </Element>
  );
}

ElderCareTimeline1.craft = {
  displayName: "Elder Care Timeline 1",
  props: {
    title: "Donated money counts.",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    totalAmount: "$175,990",
    totalDescription: "Collected in the many years",
    iconImage: "https://placehold.co/72x64/FFB6C1/FFFFFF?text=Icon",
    timelineItems: [
      { year: "1998", amount: "10k", description: "Total collected this year" },
      { year: "2008", amount: "18k", description: "Total collected this year" },
      { year: "2014", amount: "23k", description: "Total collected this year" },
      { year: "2017", amount: "32k", description: "Total collected this year" },
      { year: "2022", amount: "39k", description: "Total collected this year" },
      { year: "2024", amount: "42k", description: "Total collected this year" },
    ],
    backgroundImage: "https://placehold.co/1920x700/4A90E2/FFFFFF?text=Donation+Timeline",
    backgroundColor: "#f8f9fa",
    textColor: "#333333",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true,
};
