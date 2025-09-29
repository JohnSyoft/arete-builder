import React from "react";
import { Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";

interface RestaurantStats1Props {
  rating?: number;
  customerCount?: string;
  description?: string;
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
}

export function RestaurantStats1({
  rating = 5,
  customerCount = "25,000+",
  description = "happy food lovers visited our authentic restaurant.",
  backgroundColor = "#ffffff",
  textColor = "#333333",
  nonEditable = true,
}: RestaurantStats1Props) {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  return (
    <Element id="restaurant-stats-container" is={Section} canvas>
      <Element
        id="restaurant-stats-background"
        is={Box}
        backgroundColor={backgroundColor}
        width="100%"
        minHeight="100px"
        className="py-8"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <Element
              id="restaurant-stats-card"
              is={Box}
              backgroundColor="bg-white"
              borderRadius="rounded-full"
              padding="px-8 py-5"
              boxShadow="shadow-lg"
            >
              <div className="flex items-center space-x-4">
                {/* Star Rating */}
                <Element
                  id="restaurant-stats-rating"
                  is={Box}
                  backgroundColor="bg-yellow-400"
                  textColor="text-white"
                  padding="px-4 py-2"
                  borderRadius="rounded-full"
                  className="text-sm font-medium flex items-center space-x-1"
                >
                  {Array.from({ length: rating }, (_, i) => (
                    <span key={i}>★</span>
                  ))}
                </Element>
                
                {/* Description */}
                <div className="text-lg text-gray-800 font-medium">
                  <Element
                    id="restaurant-stats-customer-count"
                    is={Text}
                    text={customerCount}
                    tagName="span"
                    fontSize="text-lg"
                    fontWeight="font-semibold"
                    color="text-gray-800"
                    className="underline decoration-2 underline-offset-4"
                  />
                  {" "}
                  <Element
                    id="restaurant-stats-description"
                    is={Text}
                    text={description}
                    tagName="span"
                    fontSize="text-lg"
                    fontWeight="font-medium"
                    color="text-gray-800"
                  />
                </div>
              </div>
            </Element>
          </div>
        </div>
      </Element>
    </Element>
  );
}

RestaurantStats1.craft = {
  displayName: "Restaurant Stats 1",
  props: {
    rating: 5,
    customerCount: "25,000+",
    description: "happy food lovers visited our authentic restaurant.",
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
