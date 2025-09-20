import React from "react";
import { useNode } from "@craftjs/core";
import { Resizer } from "../Resizer";

interface MarketingMarquee1Props {
  words?: string[];
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
}

export function MarketingMarquee1({
  words = ["marketing", "analysis", "strategy", "planning"],
  backgroundColor = "#f8f9fa",
  textColor = "#333333",
  nonEditable = true,
}: MarketingMarquee1Props) {
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
      minHeight={120}
    >
      <div
        ref={(ref) => connect(drag(ref))}
        className="py-16 overflow-hidden"
      >
        <div className="container mx-auto px-4">
          {/* Scrolling Text */}
          <div className="relative">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...words, ...words].map((word, index) => (
                <div
                  key={index}
                  className={`text-8xl lg:text-9xl font-bold mr-16 ${
                    index % 2 === 0 ? "text-gray-800" : "text-gray-300"
                  }`}
                >
                  {word}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Resizer>
  );
}

MarketingMarquee1.craft = {
  displayName: "Marketing Marquee 1",
  props: {
    words: ["marketing", "analysis", "strategy", "planning"],
    backgroundColor: "#f8f9fa",
    textColor: "#333333",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};

