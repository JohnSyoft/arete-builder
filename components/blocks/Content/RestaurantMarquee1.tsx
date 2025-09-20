import React from "react";
import { useNode } from "@craftjs/core";
import { Resizer } from "../Resizer";

interface RestaurantMarquee1Props {
  words?: string[];
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
}

export function RestaurantMarquee1({
  words = ["Delicious", "Awesome", "Experience", "Cuisine"],
  backgroundColor = "#f8f9fa",
  textColor = "#333333",
  nonEditable = true,
}: RestaurantMarquee1Props) {
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
      minHeight={200}
    >
      <section
        ref={(ref) => connect(drag(ref))}
        className="py-16 lg:py-12 relative overflow-hidden"
      >
        {/* Decorative Images */}
        <div className="absolute left-32 xxl:left-12 mt-28 hidden xxl:block">
          <img 
            src="https://placehold.co/355x298/FFFFFF/333333?text=Decorative" 
            alt="Decorative" 
            className="animate-pulse"
          />
        </div>
        <div className="absolute right-32 xxl:right-12 hidden xxl:block">
          <img 
            src="https://placehold.co/367x283/FFFFFF/333333?text=Decorative" 
            alt="Decorative" 
            className="animate-pulse"
          />
        </div>

        <div className="container mx-auto px-4">
          {/* Marquee Text */}
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                {[...words, ...words].map((word, index) => (
                  <div
                    key={index}
                    className={`text-8xl lg:text-6xl xs:text-5xl font-bold tracking-tight mr-16 ${
                      index % 2 === 0 
                        ? "text-gray-300" 
                        : "text-gray-800"
                    }`}
                    style={{
                      WebkitTextStroke: index % 2 === 0 ? "1px #333" : "none",
                      WebkitTextFillColor: index % 2 === 0 ? "transparent" : "inherit",
                    }}
                  >
                    {word}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}</style>
      </section>
    </Resizer>
  );
}

RestaurantMarquee1.craft = {
  displayName: "Restaurant Marquee 1",
  props: {
    words: ["Delicious", "Awesome", "Experience", "Cuisine"],
    backgroundColor: "#f8f9fa",
    textColor: "#333333",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
