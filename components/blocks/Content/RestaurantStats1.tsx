import React from "react";
import { useNode } from "@craftjs/core";
import { Resizer } from "../Resizer";

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
    <Resizer
      propKey={{ width: "width", height: "height" }}
      style={{
        width: "100%",
        height: "auto",
        backgroundColor: backgroundColor,
        color: textColor,
      }}
      minWidth={300}
      minHeight={100}
    >
      <section
        ref={(ref) => connect(drag(ref))}
        className="py-8"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="bg-white rounded-full px-8 py-5 shadow-lg">
              <div className="flex items-center space-x-4">
                {/* Star Rating */}
                <div className="bg-yellow-400 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                  {Array.from({ length: rating }, (_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                
                {/* Description */}
                <div className="text-lg text-gray-800 font-medium">
                  <span className="underline decoration-2 underline-offset-4 font-semibold">
                    {customerCount}
                  </span>{" "}
                  {description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Resizer>
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
};
