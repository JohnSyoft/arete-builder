import React from "react";
import { Node, useNode } from "@craftjs/core";

export const BusinessCTA1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className={`relative py-20 ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://placehold.co/1920x1100')",
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl lg:text-6xl font-light text-white mb-8 leading-tight">
          We make the creative solutions for{" "}
          <span className="font-semibold text-blue-400">
            business!
          </span>
        </h2>
      </div>
    </div>
  );
};

BusinessCTA1.craft = {
  displayName: "Business CTA",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
