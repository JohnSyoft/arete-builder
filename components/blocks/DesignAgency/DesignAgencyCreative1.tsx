import React from "react";
import { Node, useNode } from "@craftjs/core";

export const DesignAgencyCreative1 = () => {
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
      className={`py-16 bg-white ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
          {/* Left Column - Large Text */}
          <div className="text-uppercase">
            <div className="outside-box-left-20 md:outside-box-left-7">
              <div className="text-9xl xl:text-8xl lg:text-7xl xs:text-6xl font-bold mb-4 text-blue-600 leading-none">
                creative
              </div>
            </div>
          </div>
          
          {/* Right Column - Description */}
          <div className="text-center lg:text-left xs:mb-8">
            <h1 className="text-4xl lg:text-3xl font-bold text-gray-800 mb-0 leading-tight">
              We create fantastic brand and identities.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
